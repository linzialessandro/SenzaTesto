---
type: Concept
title: Flusso di Popolamento Database
description: Pipeline di generazione, validazione deterministica e ingestione degli esercizi Markdown verso PostgreSQL.
tags: [agents, workflow, database, population, seeding, llm-costs, validation, difficulty, recycle]
timestamp: 2026-08-11T16:00:00Z
supersedes: architecture/population_workflow
---

# Flusso di Popolamento Database (Pipeline Automatica)

Questo documento delinea il flusso di lavoro che ogni agente delegato alla generazione degli esercizi deve seguire. La pipeline ha **tre passaggi**: generazione automatizzata con Git PR, validazione deterministica, e popolamento a valle. In più: gestione di `submissions/rejected/` come magazzino di riciclo (non come cestino da gitignore).

## Step 1: Generazione degli Esercizi (Agenti LLM)

Gli esercizi vengono generati tramite lo script `scripts/generator/generate_and_pr.py` (BYOK DeepSeek OpenAI-compatible API, default `deepseek-v4-flash`).

### Sicurezza, Concorrenza e Costi (Best Practices)
Quando l'agente esegue lo script per generare batch di esercizi (es. 50 o 100), è fondamentale rispettare queste regole critiche per evitare costi astronomici, crash delle API e colli di bottiglia:
1. **Concorrenza ad Alte Prestazioni:** Invece di eseguire le richieste sequenzialmente, la generazione avviene in parallelo utilizzando `asyncio.Semaphore(5)` (o simile) per gestire il rate limiting senza sacrificare il throughput. Lo script storico `generate_parallel.py` è stato deprecato e la logica unificata in `generate_and_pr.py`.
2. **Resilienza (Tenacity):** Per prevenire l'interruzione della generazione in batch a causa di instabilità di rete, limiti API (429 Too Many Requests) o parsing fallito, le chiamate all'SDK sono wrappate con la libreria `tenacity` (es. backoff esponenziale).
3. **Isolamento del Contesto (O(1) Cost):** Ogni esercizio è una chiamata chat indipendente (nessuna cronologia accumulata tra item). Condividere il contesto tra esercizi porterebbe a costi O(N²). Dettagli storici in [Analisi Costi LLM](/agents/llm-pricing.md).
4. **Prevenzione Loop e Sentinel Field:** Limite di output generoso ma finito (`MAX_OUTPUT_TOKENS`, default **8000** — configurabile con `DEEPSEEK_MAX_OUTPUT_TOKENS`). Thinking mode DeepSeek condivide il budget di completion: valori troppo bassi (es. 1000–2000) con `reasoning_effort=high` producono risposte vuote o JSON troncato (`finish_reason=length`). È **obbligatorio** il campo sentinella `generation_completed: "COMPLETED"` in coda al modello Pydantic: se assente, lo script scarta l'output e riprova, scrivendo il grezzo in `submissions/rejected/`.

### Calibrazione difficoltà (DeepSeek vs Gemini)
DeepSeek-v4-flash tende a collassare su esercizi da “prima pagina del libro” se non spinto. Lo script applica:

| Meccanismo | Valore / comportamento |
|---|---|
| **Pesi campionamento** `DIFFICULTY_WEIGHTS` | `[0.03, 0.15, 0.35, 0.30, 0.17]` per livelli 1–5 (poca base, spinta su 3–5) |
| **Forced difficulty** | Dopo il parse JSON, `exercise_data.difficulty` viene **sovrascritto** con il livello campionato (il modello etichetta spesso troppo basso) |
| **Profili `DIFFICULTY_PROFILES`** | Requisiti minimi + anti-esempi (es. vietato $x^2-5x+6=0$ a livello ≥ 2) |
| **Regole di durezza** | Blocco system: esercizi da verifica, non ripasso; ≥2 un passaggio non banale; ≥3 due idee combinate |
| **Esempio JSON** | Difficulty **3** (parametrico), non un drill banale — il modello si ancora all'esempio |
| **`reasoning_effort`** | `low` su tutti i livelli (affidabile per JSON); `high` brucia token di thinking e tronca l'answer |
| **LaTeX / YAML** | Solo `$` / `$$`; `json.dumps(..., ensure_ascii=False)` per accenti leggibili |

### Output e cartelle
Lo script scrive Markdown secondo lo [Standard Exercise Markdown Template](/architecture/exercise_template.md) in `submissions/pending/` e può aprire branch + PR. Per output IA scrive sempre i metadati machine-readable (`ai_generated: true`, `content_origin: artificial`, blocco `provenance` via `lib/provenance.py`, tipicamente `pipeline: generate_and_pr`).

**Gate umano (obbligatorio prima del DB pubblico):** la validazione automatica non sostituisce la revisione matematica. Vedi `docs/compliance/human-review-sop.md` e `docs/compliance/art50-pipeline-checklist.md`.

### `submissions/rejected/` — riciclo, non gitignore
- Le generazioni fallite (JSON troncato, risposta vuota, parse error) finiscono come `failed_*.md` con un commento HTML di errore e il body grezzo.
- **Non** aggiungere `submissions/rejected` a `.gitignore`: la cartella resta versionata (almeno `.gitkeep`).
- **Riciclo:** i file con `problem_text` completo (anche se `solution` è troncata) si possono ricostruire a mano o con un pass dedicato, scrivere in `pending/`, e marcare provenance con `pipeline: recycle_rejected`.
- I dump **vuoti** (solo `Empty model response`) non hanno contenuto utile: si eliminano dopo il pass di riciclo.
- Dopo il riciclo, `rejected/` deve tornare pulita (solo `.gitkeep` o pochi fallimenti ancora da ispezionare).

### Igiene `pending/` vs `accepted/`
Dopo `populate_from_md.py` i file validi **devono** sparire da `pending/` e comparire solo in `accepted/`. Non lasciare copie byte-identiche in entrambe le cartelle (rischio di doppia coda e confusione operativa). Se `pending/` si riempie di file già in DB/accepted, verificare con hash/`generated_hash` e rimuovere i duplicati da `pending/`.

## Step 2: Validazione Deterministica (Gate)

Prima di qualsiasi scrittura sul database (e in CI sul deploy), le submission passano da `scripts/validate_submissions.py`.

Il validatore controlla, senza modificare i file:
- Frontmatter YAML (`year` 1–5, `difficulty` 1–5, `macro_area`, `topic`, `tags`, opzionale `ai_generated` / `content_origin` / `provenance`)
- Sezioni obbligatorie `# Problem Text` e `# Solution`
- Delimitatori display-math `$$` bilanciati
- Lunghezze massime di testo e tag
- Duplicati esatti del payload (fingerprint SHA-256)
- Coerenza dei campi di provenienza quando presenti

```bash
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements.txt
.venv/bin/python scripts/validate_submissions.py submissions/pending
.venv/bin/python scripts/test_validate_submissions.py
```

Le dipendenze operative (`PyYAML`, `psycopg2-binary`, `rich`) vivono in `scripts/requirements.txt`. La risoluzione di `DATABASE_URL` è centralizzata in `scripts/environment.py` (variabile d'ambiente → `~/secrets/SenzaTesto/.env` → `.env` di progetto).

La GitHub Action di deploy esegue lo stesso gate su `submissions/accepted` e `submissions/pending` prima di lint/build del frontend.

Per sanare errori di formattazione comuni *prima* del gate (quote YAML, `$$` su righe proprie, escape LaTeX corrotto) resta disponibile `scripts/validate_and_fix_pending.py`.

## Step 3: Popolamento del Database

Una volta che gli esercizi in `submissions/pending/` sono stati revisionati (PR merge su `main`) e passano la validazione, si utilizza `scripts/populate_from_md.py` per l'inserimento definitivo.

Lo script:
1. Rifiuta file che falliscono `validate_file` o che collidono con un nome già in `accepted/`.
2. Legge il Markdown e crea/recupera `curriculum_years` → `macro_areas` → `topics`.
3. Calcola `generated_hash` e fa upsert su `exercises` (incluso `ai_generated`).
4. Sposta i file riusciti in `submissions/accepted/`.

```bash
.venv/bin/python scripts/populate_from_md.py
```

Lo schema di destinazione è descritto in [Schema del Database](/database/schema.md).

**Commit operativo:** dopo un populate riuscito, committare i rename `pending/ → accepted/` sul branch di lavoro così il repo riflette lo stato live del DB.
