---
type: Concept
title: Flusso di Popolamento Database
description: Guida dettagliata per gli agenti LLM su come popolare autonomamente il database di esercizi.
tags: [agents, workflow, database, population, seeding]
timestamp: 2026-07-01T13:38:00Z
---

# Flusso di Popolamento Database

Questo documento delinea il flusso di lavoro standard che ogni agente delegato alla generazione degli esercizi deve seguire.

## Prerequisiti

Prima di iniziare la generazione degli esercizi, l'agente deve:
1. Consultare il [Curriculum Italiano](../curriculum/curriculum-italiano.md) per selezionare un anno, una macro-area e un topic specifici.
2. Comprendere lo schema a 4 livelli definito in [Schema del Database](../database/schema.md) (`curriculum_years` -> `macro_areas` -> `topics` -> `exercises`).

## Step di Generazione

### 1. Inserimento Aree e Topic
Se la `macro_area` o il `topic` per cui si intende generare l'esercizio non esistono nel database, l'agente deve prima crearli. Per farlo, può utilizzare lo script Python fornito `scripts/seed_db.py` o eseguire direttamente delle query SQL `INSERT ... ON CONFLICT DO NOTHING`.

### 2. Generazione dell'Esercizio
L'agente deve formulare un esercizio matematico seguendo questi vincoli:
- **Difficoltà (`difficulty_level`)**: Da 1 (molto facile) a 5 (molto difficile). Siate creativi ma generati una buona dose di esercizi di difficoltà standard (2-3).
- **Testo Problema (`problem_text`)**: Testo in chiaro dell'esercizio (formattato adeguatamente in italiano).
- **Formattazione LaTeX (`latex_problem`, `latex_solution`)**: Le formule devono essere rigorosamente in LaTeX valido, evitando errori di sintassi.

### 3. Calcolo dell'Hash
Per evitare duplicati, ogni esercizio deve avere un `generated_hash` univoco. Questo hash dovrebbe essere calcolato (ad esempio, usando SHA-256) partendo da una concatenazione normalizzata di `topic_id`, `difficulty_level` e stringhe chiave del problema (o la formula stessa).

### 4. Inserimento nel Database
Inserire l'esercizio nella tabella `exercises` legandolo al `topic_id` corretto.

## Esempio di Utilizzo Script
Gli agenti possono avvalersi dello script ausiliario:
```bash
python scripts/seed_db.py --year 1 --macro_area "Algebra" --topic "Monomi"
```
Questo script garantisce che i livelli superiori della gerarchia (anno, macro_area, topic) siano inizializzati prima dell'inserimento dell'esercizio.
