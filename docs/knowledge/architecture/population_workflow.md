---
type: Concept
title: Population Workflow
description: Documentazione del nuovo flusso di acquisizione degli esercizi basato su file Markdown.
tags: [architecture, workflow, markdown, database]
timestamp: 2026-07-01T12:00:00Z
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
- **`pending/`**: Inserisci qui i nuovi esercizi da pubblicare.
- **`accepted/`**: Gli esercizi elaborati con successo dallo script verranno spostati qui automaticamente.
- **`rejected/`**: Puoi spostare qui manualmente i file che contengono errori irrisolvibili.

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

## Come Eseguire il Workflow

1. Aggiungere uno o più file `.md` nella cartella `submissions/pending/` seguendo il template.
2. Attivare il virtual environment: `source venv/bin/activate`
3. Installare le dipendenze se necessario (es. `pip install pyyaml`)
4. Eseguire lo script di validazione per correggere preventivamente la sintassi del Markdown:
   ```bash
   python3 scripts/validate_and_fix_pending.py
   ```
5. Eseguire lo script di elaborazione per caricare i file su PostgreSQL:
   ```bash
   python3 scripts/populate_from_md.py
   ```
6. Gli esercizi validi verranno processati (calcolando gli hash e aggiornando PostgreSQL) e i relativi file `.md` verranno spostati automaticamente in `submissions/accepted/`. Gli esercizi con errori rimarranno in `pending/`.
