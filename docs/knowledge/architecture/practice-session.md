---
type: Concept
title: Practice Session MVP
description: Sessione guidata di 5–10 esercizi con autovalutazione, progresso locale e raccomandazioni successive.
tags: [frontend, practice, learning, localStorage, url-state, self-assessment]
timestamp: 2026-07-31T18:00:00Z
---

# Practice Session MVP

La sessione di pratica trasforma i filtri di discovery (anno, argomento, difficoltà) in un **loop di apprendimento** senza account: selezione → esercizio singolo → autovalutazione → soluzione → riepilogo → prossima sessione consigliata.

Si appoggia alla discovery URL documentata in [Exercise Discovery](/architecture/exercise-discovery.md) e alla RPC `search_exercises` ([Indicizzazione](/database/indexing.md)).

## Avvio

1. L’utente imposta almeno uno tra `year`, `topic`, `difficulty` (non può partire da un solo `?exercise=` permalink).
2. **Inizia sessione di pratica** (in `SearchSection`) scrive `mode=practice` e opzionalmente `size` (5–10, default 8).
3. Esempio: `/?year=2&difficulty=2&mode=practice&size=8`.

Implementazione:
- Orchestrazione: `apps/frontend/src/components/home/HomeClient.tsx`
- UI sessione: `apps/frontend/src/components/practice/PracticeSession.tsx`
- Persistenza e raccomandazioni: `apps/frontend/src/lib/practiceProgress.ts`

## Flusso per esercizio

1. Caricamento fino a 30 candidati via `search_exercises` con i filtri correnti.
2. Selezione di `size` esercizi con shuffle; preferenza per short code **non** presenti nelle sessioni recenti in `localStorage`.
3. Mostra solo il testo del problema (KaTeX via `MathRenderer`).
4. **Autovalutazione obbligatoria** prima della soluzione:
   - `got_it` — Risolto bene  
   - `unsure` — Incerto  
   - `missed` — Non risolto  
5. Sblocco soluzione + `log_solution_view` (analytics anonime, come in browse).
6. Avanti fino al riepilogo.

## Persistenza locale (no account)

Chiave: `senzatesto.practice.v1` (solo browser).

Contiene:
- ultime sessioni completate (cap ~30);
- eventuale sessione attiva (indici, tentativi, filtri);
- tentativi con `shortCode`, `confidence`, topic, year, difficulty.

Nessun identificatore personale: allineato allo spirito di [Custom Analytics](/architecture/custom_analytics.md). I dati restano sul dispositivo e non vengono inviati a un backend di profilo.

## Raccomandazioni post-sessione

`buildRecommendation` propone la sessione successiva:
- alto successo e difficoltà &lt; 5 → `difficulty + 1`;
- molte incertezze/fallimenti e difficoltà &gt; 1 → `difficulty - 1` e topic debole;
- altrimenti stesso topic debole o stessi filtri.

Il pulsante **Inizia sessione consigliata** riapplica i filtri suggeriti e `mode=practice`.

## Vincoli e non-goals (MVP)

- Nessun resume multi-dispositivo o account.
- Nessun punteggio server-side né leaderboard.
- Collezioni ancora hard-coded; la sessione non esplora l’intero albero curriculum.
- Static export: lo stato resta in query string + `localStorage`, non in route `/pratica/[id]`.

## Relazioni

- Filtri e sharing: [Exercise Discovery](/architecture/exercise-discovery.md)
- RPC e filtri year/difficulty: [Indicizzazione](/database/indexing.md)
- Validazione payload esercizi: [Frontend Type Safety](/architecture/frontend_type_safety.md)
