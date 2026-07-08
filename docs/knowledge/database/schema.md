---
type: Concept
title: Schema del Database
description: La definizione dello schema del database PostgreSQL includendo le tabelle topics ed exercises.
resource: ../../../init.sql
tags: [database, schema, sql, postgres, rls, security]
timestamp: 2026-07-08T10:00:00Z
---

# Schema del Database

Questo concetto delinea la logica dello schema per la piattaforma educativa.
L'SQL di inizializzazione completo si trova in [`init.sql`](../../../init.sql).

## Tabelle

### `curriculum_years`
Definisce l'anno di studio (1-5).
- `id` (BIGINT IDENTITY)
- `year_number`
- `description`

### `macro_areas`
Aree tematiche generali per anno (es. Algebra, Geometria Analitica).
- `id` (BIGINT IDENTITY)
- `year_id` (FK a `curriculum_years`)
- `name`
- `sort_order` (ordinamento pedagogico)

### `topics`
Argomenti specifici all'interno di una macro area (es. Parabola, Limiti).
- `id` (BIGINT IDENTITY)
- `macro_area_id` (FK a `macro_areas`)
- `name`
- `sort_order` (ordinamento pedagogico)

### `exercises`
Memorizza gli esercizi generati in modo procedurale.
- `id` (BIGINT IDENTITY)
- `topic_id` (FK a `topics`)
- `difficulty_level` (1-5)
- `problem_text` (Testo del problema)
- `solution_text` (Testo della soluzione)
- `generated_hash` (UNIQUE - per garantire l'unicità)
- `tags` (Array di stringhe per la classificazione e la ricerca)
- `short_code` (Codice alfanumerico univoco di 6 caratteri, generato automaticamente da trigger)
- `search_vector` (tsvector - indice GIN per la Full-Text Search; vedi la [Strategia di Indicizzazione](indexing.md))
- `created_at` (Timestamp con timezone, default a `CURRENT_TIMESTAMP`)
- `updated_at` (Timestamp con timezone, aggiornato da trigger)

## Sicurezza (Row Level Security)
Tutte le tabelle implementano `FORCE ROW LEVEL SECURITY`. L'accesso pubblico è garantito in sola lettura tramite policy esplicite. Qualsiasi operazione di scrittura richiede permessi amministrativi (es. tramite Service Role Key o funzioni RPC in `SECURITY INVOKER` context).

## Vincoli
Gli agenti DEVONO assicurarsi che gli esercizi generati producano un `generated_hash` univoco calcolato sulla base del topic e del contenuto, prima dell'inserimento, per evitare duplicati nel database.
