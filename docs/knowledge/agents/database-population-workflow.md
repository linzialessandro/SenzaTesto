---
type: Concept
title: Flusso di Popolamento Database
description: Pipeline di generazione, validazione deterministica e ingestione degli esercizi Markdown verso PostgreSQL.
tags: [agents, workflow, database, population, seeding, llm-costs, validation]
timestamp: 2026-07-31T12:00:00Z
supersedes: architecture/population_workflow
---

# Flusso di Popolamento Database (Pipeline Automatica)

Questo documento delinea il flusso di lavoro che ogni agente delegato alla generazione degli esercizi deve seguire. La pipeline ha **tre passaggi**: generazione automatizzata con Git PR, validazione deterministica, e popolamento a valle.

## Step 1: Generazione degli Esercizi (Agenti LLM)

Gli esercizi vengono generati tramite lo script `scripts/generator/generate_and_pr.py`.

### Sicurezza, Concorrenza e Costi (Best Practices)
Quando l'agente esegue lo script per generare batch di esercizi (es. 50 o 100), è fondamentale rispettare queste regole critiche per evitare costi astronomici, crash delle API e colli di bottiglia:
1. **Concorrenza ad Alte Prestazioni:** Invece di eseguire le richieste sequenzialmente, la generazione avviene in parallelo utilizzando `asyncio.Semaphore(5)` (o simile) per gestire il rate limiting senza sacrificare il throughput. Lo script storico `generate_parallel.py` è stato deprecato e la logica unificata in `generate_and_pr.py`.
2. **Resilienza (Tenacity):** Per prevenire l'interruzione della generazione in batch a causa di instabilità di rete, limiti API (429 Too Many Requests) o parsing fallito, le chiamate all'SDK sono wrappate con la libreria `tenacity` (es. backoff esponenziale).
3. **Isolamento del Contesto (O(1) Cost):** L'istanza dell'agente LLM (`async with Agent(config) as agent:`) deve essere creata **all'interno** del ciclo di generazione di ogni singolo esercizio. Condividere l'agente significa accumulare l'intera cronologia, portando a costi O(N²) ed esaurendo rapidamente la finestra di contesto (dettagli in [Analisi Costi LLM](/agents/llm-pricing.md)).
4. **Prevenzione Loop e Sentinel Field:** I modelli LLM possono talvolta incastrarsi in loop infiniti o divagare in problemi multi-parte estremamente lunghi. Bisogna impostare un limite stringente (es. `max_output_tokens=1000`) all'interno di `LocalAgentConfig`. Poiché molti framework moderni tendono a *riparare* automaticamente il JSON troncato bypassando i nostri `try/except`, è **obbligatorio** includere uno speciale "campo sentinella" alla fine del Pydantic model (es. `generation_completed: str`). In questo modo, se il limite di token viene raggiunto, il campo finale sarà assente e lo script scarterà l'esercizio difettoso riprovando la generazione.

Lo script scriverà l'output formattato in file Markdown seguendo lo [Standard Exercise Markdown Template](/architecture/exercise_template.md) nella cartella `submissions/pending/` e creerà in automatico un branch e una Pull Request. Preferire `ai_generated: true` nel frontmatter quando l'esercizio è prodotto da un modello. In caso di errori, utilizzerà il modulo `logging` standard di Python per tracciare i dettagli diagnostici.

## Step 2: Validazione Deterministica (Gate)

Prima di qualsiasi scrittura sul database (e in CI sul deploy), le submission passano da `scripts/validate_submissions.py`.

Il validatore controlla, senza modificare i file:
- Frontmatter YAML (`year` 1–5, `difficulty` 1–5, `macro_area`, `topic`, `tags`, opzionale `ai_generated` booleano)
- Sezioni obbligatorie `# Problem Text` e `# Solution`
- Delimitatori display-math `$$` bilanciati
- Lunghezze massime di testo e tag
- Duplicati esatti del payload (fingerprint SHA-256)

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
