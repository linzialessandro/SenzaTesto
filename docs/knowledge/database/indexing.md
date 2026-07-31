---
type: Concept
title: Strategia di Indicizzazione (FTS)
description: Full-Text Search PostgreSQL, short-code lookup, filtri year/difficulty e bound della RPC search_exercises.
tags: [database, indexing, postgres, fts, scalability, performance, search]
timestamp: 2026-07-31T12:00:00Z
---

# Strategia di Indicizzazione e Ricerca Esercizi

Con l'obiettivo di rendere la piattaforma scalabile a migliaia di esercizi generati proceduralmente (LLM) senza introdurre colli di bottiglia o frizioni per studenti e insegnanti, è stata implementata una strategia di **Full-Text Search (FTS)** nativa in PostgreSQL, esposta al frontend tramite la RPC `search_exercises`.

## Implementazione

1. **Colonna `search_vector`**: La tabella `exercises` contiene una colonna dedicata `search_vector` di tipo `tsvector`.
2. **Indice GIN**: Sulla colonna `search_vector` è applicato un indice GIN (Generalized Inverted Index) che offre performance `O(log N)` eccellenti per query di ricerca testuale anche su dataset molto voluminosi.
3. **Trigger di Aggiornamento**: Un trigger automatico si assicura che ad ogni operazione di inserimento o aggiornamento di un esercizio, il vettore venga ricreato combinando:
   - `problem_text` (Testo del problema, peso 'A')
   - `tags` (Tag dell'esercizio, peso 'A')
   - `topic_name` (Nome del Topic, peso 'B')
   - `macro_area_name` (Nome della Macro Area, peso 'C')

## Percorsi di match in `search_exercises`

Una query testuale (`search_query`) matcha se:
- il `search_vector` soddisfa `websearch_to_tsquery('italian', optimize_search_query(...))`, **oppure**
- `short_code ILIKE search_query` (permalink / lookup codice, case-insensitive).

Filtri strutturali combinabili (AND):
- `filter_year` → `curriculum_years.year_number`
- `filter_topic` → FTS sul vettore con la stringa topic
- `filter_difficulty` → `exercises.difficulty_level`

Bound di sicurezza (raise se violati): `page_limit` 1–100, `page_offset` 0–10000, `search_query` ≤ 100 caratteri, `filter_topic` ≤ 200, year/difficulty in 1–5.

Il frontend serializza questi filtri nella query string (vedi [Exercise Discovery](/architecture/exercise-discovery.md)).

## Indici Aggiuntivi

Oltre all'indice GIN per la Full-Text Search, lo schema include i seguenti indici per ottimizzare le query più frequenti:

- `idx_macro_areas_year` — su `macro_areas(year_id)`
- `idx_topics_macro_area` — su `topics(macro_area_id)`
- `idx_exercises_topic` — su `exercises(topic_id)`
- `idx_exercises_difficulty` — su `exercises(difficulty_level)`
- `idx_exercises_created_at` — su `exercises(created_at DESC)` per ottimizzare l'ordinamento e l'infinite scroll
- UNIQUE su `short_code` per lookup O(1) dei permalink

## Vantaggi

- **Frizione Ridotta**: Evita il sovraccarico nel frontend causato da parsing manuale o scrolling infinito.
- **Miglioramento Semantico dell'Input**: Grazie a `optimize_search_query`, le parole chiave divise da spazi (AND implicito di `websearch_to_tsquery`) vengono convertite con operatore `OR`. Questo allarga la recall, demandando a `ts_rank` l'ordinamento per rilevanza. Operatori avanzati (`""`, `-`, `OR`) bypassano l'ottimizzazione.
- **Permalink**: lo short code resta un percorso di retrieval di prim'ordine, indipendente dall'FTS.
- **Scalabilità**: grazie a PostgreSQL e all'indice GIN, il tempo di risposta resta stabile anche oltre i 10.000+ record.
