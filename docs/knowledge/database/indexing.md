---
type: Concept
title: Strategia di Indicizzazione (FTS)
description: Documentazione sulla strategia di Full-Text Search adottata per garantire la scalabilità della ricerca degli esercizi.
tags: [database, indexing, postgres, fts, scalability, performance]
timestamp: 2026-07-08T10:00:00Z
---

# Strategia di Indicizzazione e Ricerca Esercizi

Con l'obiettivo di rendere la piattaforma scalabile a migliaia di esercizi generati proceduralmente (LLM) senza introdurre colli di bottiglia o frizioni per studenti e insegnanti, è stata implementata una strategia di **Full-Text Search (FTS)** nativa in PostgreSQL.

## Implementazione

1. **Colonna `search_vector`**: La tabella `exercises` contiene una colonna dedicata `search_vector` di tipo `tsvector`.
2. **Indice GIN**: Sulla colonna `search_vector` è applicato un indice GIN (Generalized Inverted Index) che offre performance `O(log N)` eccellenti per query di ricerca testuale anche su dataset molto voluminosi.
3. **Trigger di Aggiornamento**: Un trigger automatico si assicura che ad ogni operazione di inserimento o aggiornamento di un esercizio, il vettore venga ricreato combinando:
   - `problem_text` (Testo del problema, peso 'A')
   - `tags` (Tag dell'esercizio, peso 'A')
   - `topic_name` (Nome del Topic, peso 'B')
   - `macro_area_name` (Nome della Macro Area, peso 'C')

## Indici Aggiuntivi

Oltre all'indice GIN per la Full-Text Search, lo schema include i seguenti indici per ottimizzare le query più frequenti:

- `idx_macro_areas_year` — su `macro_areas(year_id)`
- `idx_topics_macro_area` — su `topics(macro_area_id)`
- `idx_exercises_topic` — su `exercises(topic_id)`
- `idx_exercises_difficulty` — su `exercises(difficulty_level)`
- `idx_exercises_created_at` — su `exercises(created_at DESC)` per ottimizzare l'ordinamento e l'infinite scroll.

## Vantaggi

- **Frizione Ridotta**: Evita il sovraccarico nel frontend causato da parsing manuale o scrolling infinito.
- **Miglioramento Semantico dell'Input**: Grazie alla funzione helper `optimize_search_query` integrata nella RPC `search_exercises`, le parole chiave inserite dall'utente divise da spazi (AND implicito) vengono automaticamente convertite con operatore `OR`. Questo allarga radicalmente la recall (es. restituendo tutti gli esercizi che contengono 'equazioni' o 'disequazioni'), demandando alla funzione `ts_rank` il corretto ordinamento dei risultati per rilevanza (spingendo in cima i documenti che presentano multiple corrispondenze). Operatori di ricerca avanzata (`""`, `-`, `OR`) bypassano questa ottimizzazione.
- **Precisione e Flessibilità**: L'uso combinato di pesi (A, B, C) e della funzione backend API `websearch_to_tsquery` permette query altamente configurabili.
- **Scalabilità**: Grazie a PostgreSQL e all'indice GIN, il tempo di risposta rimane pressoché costante anche oltre i 10.000+ record.
