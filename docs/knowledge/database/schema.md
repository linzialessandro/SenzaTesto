---
type: Concept
title: Schema del Database
description: Schema PostgreSQL di SenzaTesto, tabelle analytics, RPC pubbliche e vincoli di sicurezza.
resource: ../../../init.sql
tags: [database, schema, sql, postgres, rls, security, rpc]
timestamp: 2026-07-31T12:00:00Z
---

# Schema del Database

Questo concetto delinea la logica dello schema per la piattaforma educativa.
L'SQL di inizializzazione completo si trova in [`init.sql`](../../../init.sql): è lo **snapshot canonico** per un database nuovo (usato anche da Docker Compose) e **ricrea le tabelle applicative da zero**.

Su database di produzione già popolati le modifiche additive vivono in `migrations/` e si applicano una alla volta con:

```bash
.venv/bin/python scripts/run_migration.py 008_add_difficulty_filter.sql
.venv/bin/python scripts/run_migration.py 008_add_difficulty_filter.sql --apply
```

## Tabelle del curriculum

### `curriculum_years`
Definisce l'anno di studio (1-5).
- `id` (BIGINT IDENTITY)
- `year_number` (UNIQUE, CHECK 1–5)
- `description`

### `macro_areas`
Aree tematiche generali per anno (es. Algebra, Geometria Analitica).
- `id` (BIGINT IDENTITY)
- `year_id` (FK a `curriculum_years`)
- `name`
- `sort_order` (ordinamento pedagogico)
- UNIQUE `(year_id, name)`

### `topics`
Argomenti specifici all'interno di una macro area (es. Parabola, Limiti).
- `id` (BIGINT IDENTITY)
- `macro_area_id` (FK a `macro_areas`)
- `name`
- `sort_order`
- UNIQUE `(macro_area_id, name)`

### `exercises`
Memorizza gli esercizi.
- `id` (BIGINT IDENTITY)
- `topic_id` (FK a `topics`)
- `difficulty_level` (1–5)
- `problem_text` / `solution_text` (Markdown + LaTeX)
- `generated_hash` (UNIQUE — SHA-256 del contenuto)
- `tags` (array di stringhe)
- `short_code` (VARCHAR(6) UNIQUE — tipicamente 5 caratteri alfanumerici, fallback a 6 in caso di collisioni; generato da trigger)
- `search_vector` (`tsvector` — vedi [Strategia di Indicizzazione](indexing.md))
- `ai_generated` (BOOLEAN NOT NULL DEFAULT FALSE — provenance flag)
- `created_at` / `updated_at` (timestamptz)

## Tabelle analytics (write-only)

Le metriche anonime non espongono policy di SELECT al pubblico. La scrittura avviene solo tramite RPC `SECURITY DEFINER` hardenizzate.

### `search_logs`
- `id`, `search_query`, `filter_topic`, `filter_year` (1–5), `filter_difficulty` (1–5), `created_at`
- Popolata automaticamente da `search_exercises` (solo su `page_offset = 0`)

### `solution_views`
- `id`, `exercise_hash`, `created_at`
- Popolata da `log_solution_view(hash)`

Vedi anche [Custom Analytics](/architecture/custom_analytics.md).

## RPC pubbliche

### `search_exercises(...)`
Parametri (tutti opzionali salvo i limiti di pagina):
- `search_query text` — max 100 caratteri; match FTS o `short_code ILIKE`
- `filter_year int` — 1–5
- `filter_topic text` — max 200 caratteri
- `filter_difficulty int` — 1–5
- `page_limit int` — 1–100 (default 50)
- `page_offset int` — 0–10000

Restituisce righe arricchite con `topic_macro_area`, `topic_name`, `year_number`, `ai_generated`.
`SET search_path = ''` e relazioni qualificate con `public.` per sicurezza.

### `log_solution_view(hash text)`
Accetta solo digest SHA-256 esadecimali a 64 caratteri.

## Sicurezza (Row Level Security)

- Tabelle curriculum/esercizi: `FORCE ROW LEVEL SECURITY` + policy `SELECT` pubbliche.
- Tabelle analytics: RLS forzata **senza** policy di lettura/scrittura dirette; solo le RPC grantate a `anon` / `authenticated` possono scrivere.
- `EXECUTE` delle RPC è revocato da `PUBLIC` e riconcesso a `anon` e `authenticated`.

## Vincoli operativi

Gli agenti e gli script di ingestione devono:
1. Validare il Markdown con `scripts/validate_submissions.py` prima dell'inserimento.
2. Produrre un `generated_hash` stabile sul contenuto (vedi [Flusso di Popolamento](/agents/database-population-workflow.md)).
3. Preferire migrazioni esplicite su DB esistenti piuttosto che rieseguire `init.sql` in produzione.
