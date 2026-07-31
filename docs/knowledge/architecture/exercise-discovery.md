---
type: Concept
title: Exercise Discovery, Permalinks & Sharing
description: Filtri basati su URL, deep link per short code e condivisione per-esercizio sul frontend statico.
tags: [frontend, discovery, permalinks, sharing, search, url-state, nextjs]
timestamp: 2026-07-31T12:00:00Z
---

# Exercise Discovery, Permalinks & Sharing

Il frontend statico (Next.js `output: "export"`, `basePath: /SenzaTesto`) non può affidarsi a route server-side dinamiche. La discovery degli esercizi usa quindi **stato URL query-string** e la RPC pubblica `search_exercises` (vedi [Schema](/database/schema.md) e [Indicizzazione](/database/indexing.md)).

## Parametri URL

| Parametro | Significato | Validazione client |
|---|---|---|
| `q` | Query testuale (max 100) | trim + debounce 500 ms in scrittura |
| `topic` | Collezione / argomento (max 200) | trim |
| `year` | Anno scolastico 1–5 | intero in range |
| `difficulty` | Difficoltà 1–5 | intero in range |
| `exercise` | Short code (5–6 alfanumerici) | case-insensitive, `#` opzionale |

Esempi:
- `/?exercise=UB7BB` — permalink dell'esercizio
- `/?year=1&difficulty=2` — sessione di pratica informale filtrata
- `/?topic=Algebra&q=equazioni` — collezione + ricerca

L'orchestrazione vive in `HomeClient` (`apps/frontend/src/components/home/HomeClient.tsx`). `page.tsx` è un thin shell con `Suspense` per `useSearchParams`.

## Flusso UI

1. Senza filtri attivi: griglia delle collezioni hard-coded (`CollectionsGrid`).
2. Con almeno un filtro/query/codice: `ExercisesGrid` carica risultati via `supabase.rpc('search_exercises', …)`.
3. Su `?exercise=CODE` i risultati vengono cercati per short code e la card `#exercise-CODE` riceve scroll-into-view.
4. Selettori anno/difficoltà in `SearchSection` scrivono direttamente sull'URL (`router.replace`, no scroll).

## Condivisione

- **Permalink card:** link relativo `?exercise=CODE` sul badge dello short code.
- **`ExerciseShareButton`:** Web Share API se disponibile, altrimenti copia link; azioni esplicite WhatsApp (`wa.me`) e Copia.
- **`ShareWidget` (navbar):** condivide `window.location.href`, quindi preserva filtri e permalink attivi.

Il link generato per un singolo esercizio azzera gli altri query param e imposta solo `exercise`, così il destinatario apre un deep link pulito.

## Vincoli di export statico

- Non usare route `/esercizio/[code]` finché il deploy resta static export su GitHub Pages: i path multi-segment non rigenerati al build fallirebbero al refresh.
- I filtri devono restare serializzabili nella query string e idempotenti al reload.

## Relazioni

- Validazione runtime dei payload RPC: [Frontend Type Safety](/architecture/frontend_type_safety.md).
- Bound server-side e analytics: [Custom Analytics](/architecture/custom_analytics.md).
