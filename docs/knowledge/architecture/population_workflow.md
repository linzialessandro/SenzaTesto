---
type: Concept
title: Population Workflow
description: Documentazione del nuovo flusso di acquisizione degli esercizi basato su file Markdown.
tags: [architecture, workflow, markdown, database]
timestamp: 2026-07-01T12:00:00Z
status: superseded
superseded_by: agents/database-population-workflow
---

# Flusso di Popolamento del Database (Population Workflow)

Il processo di inserimento dei nuovi esercizi nel database SenzaTesto è stato rivoluzionato. 
Invece di inserire gli esercizi direttamente via codice (Python dict hardcoded), si utilizza un formato **Markdown Standardizzato** con metadati `YAML`.

## Vantaggi del Nuovo Workflow

1.  **Maggiore Controllo sul Formato:** Gli esercizi LaTeX vengono scritti in blocchi isolati all'interno di file Markdown, garantendo pulizia e facilità di modifica manuale.
2.  **Scalabilità e Contributi:** Nuovi docenti e utenti possono contribuire facilmente inviando un file `.md` nella directory `submissions`. Non serve conoscere Python.
3.  **Sistema a Tag Dinamico:** La presenza di array di tag aggiuntivi all'interno dei file Markdown si integra direttamente nel motore di ricerca Full-Text PostgreSQL tramite TSVector, rendendo molto più potente la feature di "Ricerca" della piattaforma.

## Componenti del Workflow

### 1. File Markdown (Directory `submissions/`)
Ogni esercizio è rappresentato da un file `.md` (es. `es_limite_01.md`). Il formato dettagliato di questo file è documentato in [`exercise_template.md`](./exercise_template.md).

La cartella `submissions` è organizzata in tre sottocartelle per un workflow "frictionless":
- **`pending/`**: Inserisci qui i nuovi esercizi da pubblicare (coda di review; dopo populate non deve restare duplicata rispetto ad `accepted/`).
- **`accepted/`**: Gli esercizi elaborati con successo dallo script verranno spostati qui automaticamente (fonte di verità repo post-ingest).
- **`rejected/`**: Dump di generazioni fallite (`failed_*.md`: JSON troncato, risposta vuota) **e** area di **riciclo** (ricostruire esercizi salvabili → `pending/`, poi pulire i dump inutili). Non gitignorare questa cartella; tenere almeno `.gitkeep`. Dettaglio canonico: [Flusso di Popolamento Database](/agents/database-population-workflow.md).

### 2. Lo Script di Popolamento (`scripts/populate_from_md.py`)
Uno script Python autonomo, che utilizza la libreria `PyYAML`, analizza tutti i file presenti in `submissions/pending/`.
Per ogni file:
- Verifica l'esistenza di `year`, `macro_area`, `topic`, `difficulty` e `tags` nel blocco YAML superiore.
- Verifica i due header Markdown richiesti: `# Problem Text`, `# Solution`.
- Si connette al database PostgreSQL configurato nel `.env` ed esegue l'upsert dell'esercizio (garantendo la corretta creazione delle referenze delle tabelle padre come `curriculum_years`, `macro_areas`, `topics`).

### 3. Lo Script di Validazione e Correzione (`scripts/validate_and_fix_pending.py`)
Uno script ausiliario per sanare gli errori più comuni prima del caricamento nel database:
- Aggiunge automaticamente le virgolette attorno a stringhe YAML (come `topic`) se contengono caratteri speciali come `:` che romperebbero il parser.
- Assicura che i delimitatori LaTeX a blocco `$$` multilinea o complessi (es. contenenti `\begin{cases}`) siano posti su righe indipendenti, prevenendo errori di rendering nel frontend.
- Ripristina eventuali caratteri di escape LaTeX (es. `\alpha`, `\right`, `\theta`) che l'SDK potrebbe aver inavvertitamente distrutto e convertito in "bell character", "carriage return" o "tabulazioni" durante il salvataggio dei file.

## Come Eseguire il Workflow

> **Stato:** questo documento è **superseded**. Usa [Flusso di Popolamento Database](/agents/database-population-workflow.md) come fonte di verità (include il gate `validate_submissions.py`, `scripts/requirements.txt` e `environment.py`).

1. Aggiungere uno o più file `.md` nella cartella `submissions/pending/` seguendo il template.
2. Creare un venv e installare le dipendenze operative:
   ```bash
   python3 -m venv .venv
   .venv/bin/pip install -r scripts/requirements.txt
   ```
3. (Opzionale) Sanare la sintassi Markdown:
   ```bash
   .venv/bin/python scripts/validate_and_fix_pending.py
   ```
4. Eseguire il gate deterministico:
   ```bash
   .venv/bin/python scripts/validate_submissions.py submissions/pending
   ```
5. Eseguire lo script di elaborazione per caricare i file su PostgreSQL:
   ```bash
   .venv/bin/python scripts/populate_from_md.py
   ```
6. Gli esercizi validi verranno processati e spostati in `submissions/accepted/`. Gli esercizi con errori rimarranno in `pending/`.
