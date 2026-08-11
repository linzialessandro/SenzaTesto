import os
import random
import asyncio
import logging
import re
import json
import subprocess
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
from openai import APIConnectionError, APIError, AsyncOpenAI, RateLimitError
from pydantic import BaseModel, Field
from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type

# Import shared helpers (repo root = scripts/generator/../..)
_REPO_ROOT = Path(__file__).resolve().parent.parent.parent
if str(_REPO_ROOT) not in sys.path:
    sys.path.insert(0, str(_REPO_ROOT))
from lib.latex_utils import normalize_latex_for_site
from lib.provenance import build_ai_provenance, format_provenance_yaml

# Configure logging to WARNING to hide noisy library output
logging.basicConfig(level=logging.WARNING, format='%(asctime)s - %(levelname)s - %(message)s')

# 1. Caricamento Sicuro delle Variabili d'Ambiente (BYOK & Admin Fallback)
load_dotenv()  # Prova a caricare dal .env locale nella cartella corrente o genitore

if not os.environ.get("DEEPSEEK_API_KEY"):
    # Fallback per Alessandro (non viene committato alcun segreto, è solo un path locale)
    fallback_path = os.path.expanduser("~/secrets/SenzaTesto/.env")
    if os.path.exists(fallback_path):
        load_dotenv(fallback_path)

if not os.environ.get("DEEPSEEK_API_KEY"):
    print("Errore: DEEPSEEK_API_KEY non trovata.")
    print("Assicurati di aver impostato la variabile d'ambiente o di avere un file .env")
    print("Path consigliato: ~/secrets/SenzaTesto/.env oppure scripts/generator/.env")
    exit(1)

# DeepSeek OpenAI-compatible API (default: deepseek-v4-flash)
DEEPSEEK_API_KEY = os.environ["DEEPSEEK_API_KEY"]
DEEPSEEK_BASE_URL = os.environ.get("DEEPSEEK_BASE_URL", "https://api.deepseek.com").rstrip("/")
DEEPSEEK_MODEL = os.environ.get("DEEPSEEK_MODEL", "deepseek-v4-flash")
# Thinking (high) + JSON answer share this budget. 2k was too low: most
# high-effort calls returned empty/truncated content. 8k leaves room for both.
MAX_OUTPUT_TOKENS = int(os.environ.get("DEEPSEEK_MAX_OUTPUT_TOKENS", "8000"))

# Shared async client for concurrent generation
openai_client = AsyncOpenAI(api_key=DEEPSEEK_API_KEY, base_url=DEEPSEEK_BASE_URL)

# Costanti dei path basati sulla root del progetto
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CURRICULUM_PATH = os.path.join(PROJECT_ROOT, "docs", "knowledge", "curriculum", "curriculum-italiano.md")
SUBMISSIONS_DIR = os.path.join(PROJECT_ROOT, "submissions", "pending")

# 2. Struttura dei dati per l'AI
class ExerciseOutput(BaseModel):
    year: int = Field(description="Year of the curriculum (1 to 5)")
    macro_area: str = Field(description="Macro area of the topic (e.g. Geometria Analitica)")
    topic: str = Field(description="Specific topic within the macro area")
    difficulty: int = Field(description="Difficulty level from 1 to 5")
    tags: list[str] = Field(description="List of relevant tags for the exercise")
    problem_text: str = Field(description="The full problem text using LaTeX where appropriate")
    solution: str = Field(description="The complete step-by-step solution using LaTeX where appropriate")
    generation_completed: str = Field(description="MUST be exactly the string 'COMPLETED'")

# 3. System Instruction specializzati per anno scolastico
# Ogni prompt è compatto (~400-500 token) per efficienza BYOK.
# Contiene: identità, argomenti dell'anno, livello pedagogico, stile esercizi.
YEAR_SYSTEM_INSTRUCTIONS: dict[int, str] = {
    1: (
        "Sei un professore di matematica italiano per il 1° anno delle scuole superiori. "
        "I tuoi studenti hanno 14-15 anni e stanno costruendo le basi del pensiero algebrico.\n\n"
        "ARGOMENTI del 1° Anno: "
        "Logica e Insiemistica (proposizioni, connettivi logici, insiemi, operazioni tra insiemi, prodotto cartesiano, relazioni) | "
        "Aritmetica e Algebra (N, Z, Q, proprietà delle operazioni, MCD, mcm, potenze, proporzioni, percentuali) | "
        "Calcolo letterale (monomi, polinomi, prodotti notevoli, MCD e mcm tra polinomi, divisioni, Ruffini, scomposizione in fattori) | "
        "Geometria piana Euclidea (enti fondamentali, segmenti, angoli, triangoli, criteri di congruenza) | "
        "Poligoni (quadrilateri, parallelogrammi, rettangoli, rombi, quadrati, trapezi, somma angoli) | "
        "Statistica Descrittiva (frequenze assolute e relative, istogrammi, aerogrammi, diagrammi a barre).\n\n"
        "LIVELLO PEDAGOGICO:\n"
        "- Linguaggio chiaro e accessibile, evita formalismi eccessivi.\n"
        "- Gli studenti NON conoscono: equazioni, disequazioni, radicali, funzioni, coordinate cartesiane.\n"
        "- Ogni passaggio della soluzione deve essere esplicito, senza salti logici.\n"
        "- Prediligi esercizi di calcolo diretto, scomposizione, applicazione di definizioni e proprietà.\n"
        "- Nella geometria usa dimostrazioni guidate con i criteri di congruenza."
    ),
    2: (
        "Sei un professore di matematica italiano per il 2° anno delle scuole superiori. "
        "I tuoi studenti hanno 15-16 anni e stanno imparando a risolvere equazioni e a dimostrare proprietà geometriche.\n\n"
        "ARGOMENTI del 2° Anno: "
        "Equazioni di primo grado (intere, letterali con discussione) | "
        "Disequazioni di primo grado (intere, sistemi di disequazioni) | "
        "Frazioni algebriche (semplificazione, operazioni, equazioni e disequazioni fratte, condizioni di esistenza) | "
        "Sistemi lineari (sostituzione, confronto, riduzione, Cramer) | "
        "Numeri reali e Radicali (proprietà, operazioni, razionalizzazione, equazioni irrazionali) | "
        "Equazioni di secondo grado (formula risolutiva, pura, spuria, relazione soluzioni-coefficienti, Cartesio, parametriche) | "
        "Geometria piana avanzata (circonferenza e cerchio, corde, tangenti, angoli al centro/alla circonferenza, "
        "poligoni inscritti e circoscritti, Pitagora, Euclide, similitudine, Talete) | "
        "Probabilità base (eventi, probabilità classica).\n\n"
        "LIVELLO PEDAGOGICO:\n"
        "- Linguaggio preciso ma ancora guidato, introduci gradualmente il formalismo.\n"
        "- Gli studenti conoscono il calcolo letterale e la geometria base, ma NON la geometria analitica, le funzioni, o i logaritmi.\n"
        "- Le soluzioni devono mostrare ogni passaggio algebrico.\n"
        "- Nelle equazioni parametriche, esplicita sempre la discussione sui casi."
    ),
    3: (
        "Sei un professore di matematica italiano per il 3° anno delle scuole superiori. "
        "I tuoi studenti hanno 16-17 anni e stanno imparando a collegare algebra e geometria nel piano cartesiano.\n\n"
        "ARGOMENTI del 3° Anno: "
        "Geometria Analitica — Piano cartesiano (distanza, punto medio, baricentro, perimetro e area sul piano, "
        "trasformazioni geometriche: simmetrie, traslazioni, dilatazioni) | "
        "La retta (equazione implicita/esplicita, coefficiente angolare, intersezione, parallelismo, perpendicolarità, "
        "distanza punto-retta, fasci di rette) | "
        "Coniche: parabola (vertice, fuoco, direttrice, asse, tangenti), "
        "circonferenza (centro, raggio, posizione reciproca con rette), "
        "ellisse (equazione canonica, vertici, fuochi, eccentricità), "
        "iperbole (vertici, fuochi, asintoti, equilatera, funzione omografica) | "
        "Equazioni/disequazioni di grado superiore (biquadratiche, trinomie, Ruffini) | "
        "Equazioni/disequazioni irrazionali | "
        "Statistica avanzata (media, moda, mediana, varianza, scarto quadratico medio).\n\n"
        "LIVELLO PEDAGOGICO:\n"
        "- Linguaggio formale, usa la notazione analitica con sicurezza.\n"
        "- Gli studenti conoscono equazioni e disequazioni di 1° e 2° grado, radicali, sistemi.\n"
        "- NON conoscono: esponenziali, logaritmi, trigonometria, limiti, derivate.\n"
        "- Nelle coniche, chiedi sia il calcolo degli elementi che la discussione delle posizioni reciproche.\n"
        "- Valorizza esercizi che collegano equazioni algebriche a interpretazioni geometriche."
    ),
    4: (
        "Sei un professore di matematica italiano per il 4° anno delle scuole superiori. "
        "I tuoi studenti hanno 17-18 anni e stanno acquisendo strumenti matematici avanzati.\n\n"
        "ARGOMENTI del 4° Anno: "
        "Disequazioni di grado superiore e fratte (metodo grafico, metodo dei segni) | "
        "Valore assoluto (equazioni e disequazioni) | "
        "Esponenziali e Logaritmi (proprietà, funzioni, equazioni e disequazioni esponenziali e logaritmiche, cambio di base) | "
        "Goniometria (circonferenza goniometrica, gradi e radianti, seno, coseno, tangente, cotangente, grafici) | "
        "Formule goniometriche (archi associati, addizione, sottrazione, duplicazione, bisezione, prostaferesi, Werner) | "
        "Equazioni/disequazioni goniometriche (elementari, lineari, omogenee, fratte) | "
        "Risoluzione dei triangoli (rettangoli e qualunque: seni, coseni, corda, applicazioni) | "
        "Numeri Complessi (forma algebrica, trigonometrica, esponenziale, De Moivre, radici n-esime, TFA) | "
        "Stereometria (rette e piani nello spazio, poliedri, solidi di rotazione, aree e volumi) | "
        "Calcolo Combinatorio (disposizioni, permutazioni, combinazioni, fattoriale, binomiale, Newton) | "
        "Probabilità avanzata (unione, intersezione, condizionata, indipendenza, Bayes, distribuzione binomiale).\n\n"
        "LIVELLO PEDAGOGICO:\n"
        "- Linguaggio rigoroso, gli studenti devono padroneggiare la notazione formale.\n"
        "- Conoscono tutta l'algebra e la geometria analitica dei primi 3 anni.\n"
        "- NON conoscono: limiti, derivate, integrali, analisi matematica.\n"
        "- In trigonometria, verifica che le soluzioni coprano tutti i casi periodici.\n"
        "- Nei complessi, alterna tra forma algebrica e trigonometrica.\n"
        "- In combinatoria e probabilità, esigi che il modello sia dichiarato prima del calcolo."
    ),
    5: (
        "Sei un professore di matematica italiano per il 5° anno delle scuole superiori. "
        "I tuoi studenti hanno 18-19 anni e si stanno preparando all'Esame di Stato (Maturità).\n\n"
        "ARGOMENTI del 5° Anno: "
        "Topologia e Funzioni (dominio, codominio, intersezioni con assi, parità, periodicità) | "
        "Limiti e Continuità (definizione, verifica con la definizione, continuità per funzioni a tratti, "
        "classificazione dei punti di discontinuità) | "
        "Calcolo dei Limiti (teoremi: unicità, permanenza del segno, confronto; forme indeterminate, limiti notevoli, "
        "asintoti verticali/orizzontali/obliqui, Weierstrass, valori intermedi, esistenza degli zeri) | "
        "Derivate (definizione, rapporto incrementale, significato geometrico e fisico, regole di derivazione: "
        "composta, rapporto, prodotto, somma; derivate di ordine superiore, retta tangente) | "
        "Teoremi del calcolo differenziale (Rolle, Lagrange, Cauchy, De L'Hôpital) | "
        "Studio di funzione e Ottimizzazione (crescenza, monotonia, max/min, concavità, flessi, grafico completo, "
        "problemi di ottimizzazione applicati) | "
        "Integrali indefiniti (primitiva, integrali immediati, scomposizione, sostituzione, per parti, fratte) | "
        "Integrali definiti (somme di Riemann, Torricelli-Barrow, teorema della media) | "
        "Applicazioni dell'integrale (aree, volumi di rotazione, lunghezza d'arco, integrali impropri) | "
        "Equazioni differenziali (1° ordine: variabili separabili, lineari) | "
        "Geometria analitica nello spazio (vettori, equazioni di piano, retta, sfera) | "
        "Statistica e Probabilità continua (variabili aleatorie continue, distribuzione Normale).\n\n"
        "LIVELLO PEDAGOGICO:\n"
        "- Linguaggio molto rigoroso e formale, usa la notazione dell'analisi matematica.\n"
        "- Gli studenti hanno padronanza completa di algebra, geometria analitica, trigonometria.\n"
        "- Le soluzioni devono essere dettagliate ma senza ripetizioni, con riferimenti ai teoremi usati.\n"
        "- Nello studio di funzione, ogni passaggio deve essere giustificato dal teorema appropriato.\n"
        "- Negli integrali, specifica il metodo scelto e perché.\n"
        "- Alterna tra esercizi tecnici (calcolo) ed esercizi concettuali (dimostrazioni, interpretazioni)."
    ),
}


def get_topics_by_year() -> dict[int, list[dict[str, str]]]:
    """Parsa il curriculum e restituisce argomenti raggruppati per anno.

    Returns:
        Dict con chiave=anno (1-5) e valore=lista di dict {'macro_area': ..., 'topic': ...}.
    """
    if not os.path.exists(CURRICULUM_PATH):
        print(f"Errore: File curriculum non trovato in {CURRICULUM_PATH}")
        exit(1)

    with open(CURRICULUM_PATH, "r") as f:
        content = f.read()

    topics_by_year: dict[int, list[dict[str, str]]] = {}
    current_year = None

    for line in content.split('\n'):
        stripped = line.strip()

        # Rileva intestazione anno: "### 1° Anno", "### 2° Anno", etc.
        year_match = re.match(r'^###\s+(\d)°\s+Anno', stripped)
        if year_match:
            current_year = int(year_match.group(1))
            topics_by_year[current_year] = []
            continue

        if current_year is None:
            continue

        # Rileva macro_area: righe "- **Nome Macro Area:** descrizione argomenti"
        macro_match = re.match(r'^-\s+\*\*(.+?)(?::?\*\*)\s*(.*)', stripped)
        if macro_match:
            macro_area = macro_match.group(1).rstrip(':').strip()
            description = macro_match.group(2).strip()
            if len(macro_area) > 3:
                topics_by_year[current_year].append({
                    'macro_area': macro_area,
                    'topic': description if description else macro_area,
                })
            continue

        # Rileva sotto-argomenti indentati (es. coniche nel 3° anno): "  - La parabola (...)"
        # Usa `line` (non `stripped`) per preservare l'indentazione come segnale di sotto-argomento
        sub_match = re.match(r'^\s+-\s+(.+)', line)
        if sub_match and not stripped.startswith('- **') and current_year and topics_by_year[current_year]:
            sub_topic = sub_match.group(1).strip()
            if len(sub_topic) > 5:
                parent_macro = topics_by_year[current_year][-1]['macro_area']
                topics_by_year[current_year].append({
                    'macro_area': parent_macro,
                    'topic': sub_topic,
                })

    return topics_by_year


# Esempio di payload atteso (oggetto dati flat — NON uno JSON Schema).
# Mettere lo schema Pydantic completo confonde il modello, che riempie
# "properties" invece di emettere i campi al top-level.
# IMPORTANTE: l'esempio è di difficoltà 3 (non banale). DeepSeek si ancora
# fortemente all'esempio: un problema da libro elementare qui produce
# batch interi di esercizi troppo facili.
_OUTPUT_EXAMPLE = {
    "year": 2,
    "macro_area": "Equazioni di secondo grado",
    "topic": "Equazioni parametriche e discussione",
    "difficulty": 3,
    "tags": ["equazioni", "parametriche", "discriminante", "discussione"],
    "problem_text": (
        "Al variare del parametro reale $k$, determina per quali valori "
        "l'equazione $x^2 - (k+1)x + k = 0$ ammette due soluzioni reali "
        "distinte e positive."
    ),
    "solution": (
        "I coefficienti sono $a=1$, $b=-(k+1)$, $c=k$. "
        "Il discriminante è "
        "$\\Delta = (k+1)^2 - 4k = k^2 + 2k + 1 - 4k = k^2 - 2k + 1 = (k-1)^2$. "
        "Si ha $\\Delta > 0$ per $k \\neq 1$ (due radici reali distinte); "
        "per $k=1$ c'è una radice doppia $x=1$.\n"
        "Per $k \\neq 1$ le radici sono "
        "$x = \\dfrac{(k+1) \\pm |k-1|}{2}$. "
        "Se $k>1$: $x_1 = k$, $x_2 = 1$. Entrambe positive $\\iff k>1$. "
        "Se $k<1$: $x_1 = 1$, $x_2 = k$. Entrambe positive $\\iff 0 < k < 1$.\n"
        "Quindi due soluzioni reali distinte e positive per $k \\in (0,1) \\cup (1,+\\infty)$."
    ),
    "generation_completed": "COMPLETED",
}

_LATEX_RULES = (
    "\n\nLATEX (obbligatorio, il sito renderizza SOLO con remark-math/KaTeX):\n"
    "- Inline: SOLO $...$  (es. $x \\in [0,4]$, $|2x-3|$, $k < 2$).\n"
    "- Blocco: SOLO $$ su righe PROPRIE (apertura, formula, chiusura).\n"
    "- VIETATO usare \\(...\\) e \\[...\\] (non vengono renderizzati).\n"
    "- VIETATO scrivere comandi LaTeX fuori dai delimitatori $ o $$.\n"
    "- Esempio blocco corretto:\n"
    "$$\n"
    "x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}\n"
    "$$"
)

_MATH_PRECISION_RULES = (
    "\n\nPRECISIONE MATEMATICA (obbligatoria — zero errori di calcolo):\n"
    "- Ogni passaggio algebrico deve essere corretto; ricalcola discriminanti, "
    "sostituzioni, prodotti e somme prima di scrivere il risultato.\n"
    "- Verifica le soluzioni nell'equazione/disequazione/sistema originale.\n"
    "- Disequazioni \"per ogni x in un intervallo\": usa il MASSIMO (o il minimo "
    "se serve $\\ge$) della funzione sull'intervallo, NON confondere min e max.\n"
    "- Equazioni goniometriche: mantieni TUTTE le famiglie di soluzioni "
    "(es. $\\cos\\theta=-1/2$ dà due famiglie; non fondere $\\pm$ in una sola).\n"
    "- Problemi geometrici: la configurazione descritta nel testo DEVE coincidere "
    "con la formula usata (stessa parte vs parti opposte, ecc.).\n"
    "- Condizioni di esistenza: esplicita e scarta le soluzioni estranee.\n"
    "- Se un risultato è un intero o una frazione semplice, riportalo in forma esatta "
    "(niente decimali approssimati se evitabili).\n"
    "- La soluzione deve essere autocontenuta e concludere con la risposta finale chiara."
)

# DeepSeek-v4-flash tende a collassare verso esercizi da "prima pagina del libro".
# Queste regole alzano il pavimento di qualità senza imporre multi-parte o maturità.
_HARDNESS_RULES = (
    "\n\nQUALITÀ E DIFFICOLTÀ (critico — calibra in alto rispetto al default):\n"
    "- Scrivi esercizi da compito in classe / verifica italiana, NON da ripasso "
    "immediato della definizione.\n"
    "- Preferisci numeri e coefficienti che NON diano soluzioni intere ovvie "
    "(evita pattern tipo $x^2-5x+6=0$, $x=2$ e $x=3$, $\\sin 30^\\circ$, "
    "disequazioni già scomposte con radici consecutive intere).\n"
    "- Per difficulty ≥ 2: almeno un passaggio non banale (insidia su segni, "
    "CE da imporre, caso da scartare, sostituzione non immediata, o coefficienti "
    "che richiedono attenzione).\n"
    "- Per difficulty ≥ 3: combina DUE idee dell'argomento (es. parametro + "
    "discussione; CE + disequazione; geometria + equazione; limite + condizione).\n"
    "- Risultati in forma esatta (radicali, frazioni, $\\pi$, logaritmi) quando naturale.\n"
    "- VIETATO (salvo difficulty = 1): equazione monomia banale, applicazione "
    "diretta di una sola formula su valori notevoli standard, integrale/limite "
    "immediato senza manipolazione, testo copiabile da qualsiasi scheda base.\n"
    "- UNA sola domanda focalizzata resta obbligatoria: la difficoltà sta nel "
    "ragionamento, non nella lunghezza del testo."
)


def build_system_prompts() -> dict[int, str]:
    """Crea il system prompt specializzato per ogni anno scolastico.

    DeepSeek JSON mode richiede la parola "json" e un esempio del formato
    atteso (oggetto dati, non JSON Schema).
    """
    example_json = json.dumps(_OUTPUT_EXAMPLE, ensure_ascii=False, indent=2)
    schema_block = (
        "\n\nOUTPUT: rispondi SOLO con un unico oggetto JSON valido "
        "(nessun markdown, nessun testo fuori dal JSON).\n"
        "L'oggetto DEVE avere esattamente queste chiavi top-level:\n"
        "- year (int 1-5)\n"
        "- macro_area (string)\n"
        "- topic (string)\n"
        "- difficulty (int 1-5)\n"
        "- tags (array di stringhe)\n"
        "- problem_text (string)\n"
        "- solution (string)\n"
        "- generation_completed (string, DEVE essere esattamente \"COMPLETED\")\n"
        f"{_LATEX_RULES}\n"
        f"{_MATH_PRECISION_RULES}\n"
        f"{_HARDNESS_RULES}\n\n"
        "ESEMPIO DI FORMA (i valori vanno sostituiti con l'esercizio reale; "
        "l'esempio è difficulty 3 — non copiarne i numeri, replica il livello di impegno):\n"
        f"{example_json}\n"
        "NON restituire uno JSON Schema, NON avvolgere i campi in \"properties\"."
    )
    return {
        year: instruction + schema_block
        for year, instruction in YEAR_SYSTEM_INSTRUCTIONS.items()
    }


def format_markdown(data: ExerciseOutput) -> str:
    tags_str = "\n".join([f"  - {json.dumps(tag)}" for tag in data.tags])
    # Post-process: converte \( \) / \[ \] → $ / $$ e sistema i blocchi multi-riga
    problem_text = normalize_latex_for_site(data.problem_text)
    solution = normalize_latex_for_site(data.solution)
    # Machine-readable Art. 50(2) provenance (invisible on rendered pages)
    prov_yaml = format_provenance_yaml(
        build_ai_provenance(
            provider="deepseek",
            model=DEEPSEEK_MODEL,
            pipeline="generate_and_pr",
        )
    )
    markdown = f"""---
year: {data.year}
macro_area: {json.dumps(data.macro_area)}
topic: {json.dumps(data.topic)}
difficulty: {data.difficulty}
{prov_yaml}
tags:
{tags_str}
---
# Problem Text
{problem_text}

# Solution
{solution}
"""
    return markdown

def run_cmd(cmd: str, cwd: str = PROJECT_ROOT, ignore_error: bool = False) -> bool:
    try:
        subprocess.run(cmd, shell=True, check=True, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError as e:
        if not ignore_error:
            print(f"Errore durante l'esecuzione di: {cmd}\n{e.stderr.decode()}")
        return False

# 4. Profili di difficoltà espliciti per guidare l'IA
# Calibrati in alto: DeepSeek-v4-flash sotto-interpreta le descrizioni soft
# e collassa su esercizi da "prima pagina". Ogni livello ha requisiti minimi
# e anti-esempi concreti; il campo `difficulty` resta vincolato.
DIFFICULTY_PROFILES: dict[int, str] = {
    1: (
        "DIFFICOLTÀ: 1/5 (Base — consolidamento). Una sola idea, 2–4 passaggi chiari. "
        "ANCORA così deve essere un esercizio di verifica breve, non un ripasso "
        "banale: evita coefficienti tutti ±1 e soluzioni intere consecutive ovvie "
        "se l'argomento lo consente. "
        "Il campo `difficulty` DEVE essere 1."
    ),
    2: (
        "DIFFICOLTÀ: 2/5 (Standard da compito). 4–7 passaggi; tecnica principale "
        "dell'argomento applicata con coefficienti non banali o una piccola insidia "
        "(segno, CE, dominio, caso da scartare). "
        "VIETATO: equazioni tipo $x^2-5x+6=0$, $\\sin 75^\\circ$ da scheda, "
        "integrali/limiti immediati senza manipolazione. "
        "Uno studente medio del corso ci mette ~5–10 minuti. "
        "Il campo `difficulty` DEVE essere 2."
    ),
    3: (
        "DIFFICOLTÀ: 3/5 (Medio — livello atteso in verifica completa). "
        "Combina DUE tecniche o richiede discussione (parametro, casi, segni, "
        "posizioni reciproche, CE non banali). Numeri non “troppo belli”. "
        "Uno studente medio ci mette ~10–15 minuti; non risolvibile a colpo d'occhio. "
        "Il campo `difficulty` DEVE essere 3."
    ),
    4: (
        "DIFFICOLTÀ: 4/5 (Impegnativo). Padronanza sicura: più concetti dell'anno, "
        "almeno un passaggio non standard (caso limite, parametro con più condizioni, "
        "scelta del metodo non ovvia, collegamento algebra↔geometria). "
        "Destinato ai più preparati della classe (~15–25 minuti). "
        "Il campo `difficulty` DEVE essere 4."
    ),
    5: (
        "DIFFICOLTÀ: 5/5 (Massimo da liceo). Sfidante per i migliori: intuizione, "
        "collegamento tra argomenti, dimostrazione breve, o discussione completa "
        "con parametri/generalizzazione. UNA sola domanda, non un tema di maturità "
        "multi-punto. ~20–30 minuti per uno studente forte. "
        "Il campo `difficulty` DEVE essere 5."
    ),
}

# reasoning_effort DeepSeek V4: solo low | high | xhigh | max (no "medium").
# high brucia il budget di max_tokens sul thinking e tronca il JSON (finish_reason=length).
# La durezza la alziamo con i prompt; low resta affidabile per output strutturato.
_REASONING_BY_DIFFICULTY: dict[int, str] = {
    1: "low",
    2: "low",
    3: "low",
    4: "low",
    5: "low",
}

# Pesi campionamento: meno base/facile, più medio-impegnativo (ex 15/30/30/15/10).
DIFFICULTY_WEIGHTS: list[float] = [0.08, 0.18, 0.34, 0.25, 0.15]


def _extract_json_object(text: str) -> dict:
    """Parse model output into a dict, tolerating accidental markdown fences."""
    if not text or not text.strip():
        raise ValueError("Empty model response")

    cleaned = text.strip()
    fence = re.match(r"^```(?:json)?\s*([\s\S]*?)\s*```$", cleaned)
    if fence:
        cleaned = fence.group(1).strip()

    try:
        data = json.loads(cleaned)
    except json.JSONDecodeError:
        # Fallback: first {...} block in the response
        start, end = cleaned.find("{"), cleaned.rfind("}")
        if start == -1 or end <= start:
            raise ValueError(f"Model did not return JSON: {cleaned[:200]!r}")
        data = json.loads(cleaned[start : end + 1])

    if not isinstance(data, dict):
        raise ValueError(f"Expected JSON object, got {type(data).__name__}")

    # Some models echo a JSON-Schema shell and put values under "properties".
    if "properties" in data and "year" not in data:
        props = data["properties"]
        if isinstance(props, dict) and "year" in props:
            unwrapped: dict = {}
            for key, value in props.items():
                if isinstance(value, dict) and "const" in value:
                    unwrapped[key] = value["const"]
                elif isinstance(value, dict) and "default" in value:
                    unwrapped[key] = value["default"]
                elif isinstance(value, dict) and set(value.keys()) <= {
                    "type", "description", "title", "items"
                }:
                    continue
                else:
                    unwrapped[key] = value
            if "year" in unwrapped:
                data = unwrapped

    return data


# Riproviamo su errori di rete/rate-limit o output strutturato non valido
@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((APIConnectionError, APIError, RateLimitError, ValueError, Exception)),
)
async def generate_single_exercise(
    system_prompt: str,
    selected_topic: dict[str, str],
    difficulty_level: int,
) -> str:
    difficulty_instructions = DIFFICULTY_PROFILES[difficulty_level]
    reasoning_effort = _REASONING_BY_DIFFICULTY[difficulty_level]

    prompt = (
        f"Genera un esercizio per: {selected_topic['macro_area']} — {selected_topic['topic']}\n"
        f"{difficulty_instructions}\n\n"
        "OBIETTIVO DIDATTICO: esercizio credibile da verifica italiana sullo stesso "
        "argomento; se ti viene in mente la versione da scheda elementare, alza "
        "il livello finché rispetta il profilo di difficoltà sopra.\n\n"
        "REGOLE DI FORMATO:\n"
        "1. Domanda SINGOLA e focalizzata, NO multi-parte (no \"1. ... 2. ... 3. ...\").\n"
        "2. NO temi di Maturità multi-punto né scenari lunghi di contesto reale.\n"
        "3. Testo e soluzione in italiano, max 450 parole totali "
        "(la difficoltà è nel ragionamento, non nella prolissità).\n"
        "4. LaTeX ready-to-use per KaTeX: SOLO $...$ inline e $$ su righe proprie per i blocchi. "
        "MAI \\(...\\) o \\[...\\].\n"
        "5. `problem_text`: SOLO il problema. `solution`: SOLO i passaggi risolutivi.\n"
        "6. `generation_completed` = \"COMPLETED\".\n"
        "7. PRIMA di rispondere: (a) verifica che l'esercizio non sia banale rispetto "
        "al profilo di difficoltà richiesto; (b) esegui un controllo numerico/algebrico "
        "di ogni passaggio e della risposta finale; se qualcosa non torna, riscrivi."
    )

    response = await openai_client.chat.completions.create(
        model=DEEPSEEK_MODEL,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt},
        ],
        response_format={"type": "json_object"},
        max_tokens=MAX_OUTPUT_TOKENS,
        # high su difficoltà ≥3: meno collasso su template facili
        reasoning_effort=reasoning_effort,
        extra_body={"thinking": {"type": "enabled"}},
    )

    message = response.choices[0].message
    content = message.content
    # Surface finish_reason / empty content early (common when thinking
    # exhausts max_tokens before the JSON answer is written).
    finish_reason = getattr(response.choices[0], "finish_reason", None)
    usage = getattr(response, "usage", None)
    if not (content or "").strip():
        usage_hint = ""
        if usage is not None:
            usage_hint = (
                f" usage={{completion={getattr(usage, 'completion_tokens', '?')}, "
                f"reasoning={getattr(usage, 'completion_tokens_details', None)}}}"
            )
        raise ValueError(
            f"Empty model response (finish_reason={finish_reason!r}, "
            f"reasoning_effort={reasoning_effort}){usage_hint}"
        )

    try:
        data_dict = _extract_json_object(content)
        exercise_data = ExerciseOutput(**data_dict)
        if exercise_data.generation_completed != "COMPLETED":
            raise ValueError(
                f"Sentinel field missing/invalid (got {exercise_data.generation_completed!r}); "
                "likely truncated output"
            )
    except Exception as parse_exc:
        # Write the raw output to rejected folder before failing
        REJECTED_DIR = os.path.join(PROJECT_ROOT, "submissions", "rejected")
        os.makedirs(REJECTED_DIR, exist_ok=True)
        safe_topic = re.sub(r'[^a-z0-9]+', '_', selected_topic['topic'].lower()).strip('_')
        fail_filepath = os.path.join(REJECTED_DIR, f"failed_{safe_topic}_{random.randint(1000, 9999)}.md")
        with open(fail_filepath, "w") as f:
            f.write(f"<!-- FAILED GENERATION: {parse_exc} -->\n")
            f.write(f"<!-- finish_reason={finish_reason!r} reasoning_effort={reasoning_effort} -->\n")
            f.write(content or "")
        raise parse_exc

    md_content = format_markdown(exercise_data)

    safe_topic = re.sub(r'[^a-z0-9]+', '_', exercise_data.topic.lower()).strip('_')
    filename_base = f"{safe_topic}_{random.randint(1000, 9999)}.md"
    filepath = os.path.join(SUBMISSIONS_DIR, filename_base)

    with open(filepath, "w") as f:
        f.write(md_content)

    return filepath


async def task_wrapper(
    sem: asyncio.Semaphore,
    index: int,
    num_exercises: int,
    system_prompts: dict[int, str],
    topics_by_year: dict[int, list[dict[str, str]]],
) -> str | None:
    async with sem:
        # Selezione casuale dell'anno con probabilità uniforme (1/5 ciascuno)
        year = random.choice([1, 2, 3, 4, 5])
        selected_topic = random.choice(topics_by_year[year])
        system_prompt = system_prompts[year]

        # Selezione pesata: più peso su 3–5 (DeepSeek tende a generare troppo facile)
        difficulty_level = random.choices(
            [1, 2, 3, 4, 5],
            weights=DIFFICULTY_WEIGHTS,
            k=1
        )[0]

        print(f"⏳ [{index}/{num_exercises}] Anno {year} | Diff. {difficulty_level} ⭐ — {selected_topic['macro_area']}: {selected_topic['topic']}...")
        try:
            filepath = await generate_single_exercise(system_prompt, selected_topic, difficulty_level)
            print(f"✅ [{index}/{num_exercises}] Completato e salvato: {os.path.basename(filepath)}")
            return filepath
        except Exception as e:
            print(f"❌ [{index}/{num_exercises}] Errore durante la generazione: {e}")
            return None


async def main():
    topics_by_year = get_topics_by_year()
    system_prompts = build_system_prompts()

    # Stampa un riepilogo degli argomenti trovati per anno
    for year in sorted(topics_by_year.keys()):
        print(f"  📚 Anno {year}: {len(topics_by_year[year])} argomenti trovati")

    os.makedirs(SUBMISSIONS_DIR, exist_ok=True)

    try:
        NUM_EXERCISES = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    except ValueError:
        print("Errore: Il numero di esercizi deve essere un numero intero.")
        return

    print(
        f"\n🚀 === Inizio Generazione Parallela di {NUM_EXERCISES} esercizi "
        f"(DeepSeek {DEEPSEEK_MODEL} @ {DEEPSEEK_BASE_URL}) ==="
    )

    # Use semaphore of 5 to balance concurrency speed and rate limits
    sem = asyncio.Semaphore(5)

    tasks = [
        task_wrapper(sem, i + 1, NUM_EXERCISES, system_prompts, topics_by_year)
        for i in range(NUM_EXERCISES)
    ]
    
    results = await asyncio.gather(*tasks)
    
    # Filter out failed runs
    generated_files = [f for f in results if f is not None]
    
    print(f"\n🎉 === Generati con successo {len(generated_files)}/{NUM_EXERCISES} esercizi ===")

    if not generated_files:
        print("Nessun esercizio generato. Uscita.")
        return

    print("\n🐙 === Inizio Automazione Git & Pull Request ===")
    
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    branch_name = f"feat/auto-exercises-{timestamp}"
    
    # Crea un nuovo branch
    if not run_cmd(f"git checkout -b {branch_name}"):
        print("Impossibile creare il branch. Interrompo.")
        return

    # Aggiungi e committa
    run_cmd("git add submissions/pending/*.md")
    if not run_cmd(f"git commit -m \"Aggiunti {len(generated_files)} nuovi esercizi generati da IA\""):
        print("Nessun file da committare.")
        return
        
    print(f"Commit effettuato sul branch '{branch_name}'.")

    # Controlla se la GitHub CLI è installata
    has_gh = run_cmd("gh --version", ignore_error=True)
    
    if has_gh:
        print("GitHub CLI trovata. Provo ad aprire la Pull Request in automatico...")
        # Pusha il branch sul fork origin/upstream (gh CLI handle forks for PRs nicely but usually needs the branch pushed)
        push_success = run_cmd(f"git push -u origin {branch_name}", ignore_error=True)
        if push_success:
            import shlex
            pr_body = (
                "Esercizi generati automaticamente tramite lo script BYOK "
                "(metadati di provenienza machine-readable nel frontmatter).\n\n"
                "**Revisione umana richiesta prima del merge:** correttezza matematica "
                "e qualità didattica (la CI non basta). Vedi docs/compliance/human-review-sop.md.\n\n"
                "> **\"Ho letto il documento CLA e con la presente accetto e firmo il Contributor License Agreement.\"**"
            )
            pr_cmd = f"gh pr create --title 'Nuovi Esercizi ({len(generated_files)})' --body {shlex.quote(pr_body)}"
            if run_cmd(pr_cmd):
                print("✅ Pull Request creata con successo!")
            else:
                print("❌ Errore durante la creazione della PR tramite gh CLI.")
        else:
            print("❌ Impossibile pushare il branch su origin. Assicurati di avere un fork o i permessi.")
    else:
        print("⚠️ GitHub CLI (gh) non trovata.")
        print("\n=== ISTRUZIONI MANUALI ===")
        print(f"I file sono stati committati sul branch locale: {branch_name}")
        print("Per aprire la Pull Request, esegui:")
        print(f"  git push -u origin {branch_name}")
        print("  Poi vai su GitHub per creare la Pull Request dal tuo fork verso il repository principale.")

if __name__ == "__main__":
    asyncio.run(main())
