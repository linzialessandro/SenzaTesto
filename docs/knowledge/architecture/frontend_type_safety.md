---
type: Concept
title: Frontend Type Safety & Boundary Validation
description: Architettura di validazione dei dati e configurazione rigorosa di TypeScript ispirata alle best practice di Matt Pocock.
tags: [frontend, typescript, zod, security, architecture]
timestamp: 2026-07-10T13:40:00Z
---

# Frontend Type Safety & Boundary Validation

Questa guida documenta le scelte architetturali implementate nel Frontend di **SenzaTesto** per garantire la massima sicurezza dei tipi e la resilienza a runtime, seguendo le best practice industriali di TypeScript (ispirate a Matt Pocock).

## 1. Validazione ai Confini (Boundary Validation) con Zod

Quando il frontend comunica con API esterne (come le chiamate RPC a Supabase), non ci si può fidare ciecamente del payload ricevuto. L'utilizzo di *type assertions* (es. `as Exercise[]`) è un anti-pattern che nasconde potenziali errori a runtime (es. campi mancanti o di tipo errato).

### La Soluzione
SenzaTesto adotta **Zod** come layer di validazione a runtime:
- Le interfacce TypeScript pure sono state sostituite da schemi Zod (es. `ExerciseSchema`).
- I tipi statici vengono dedotti direttamente dagli schemi (`type Exercise = z.infer<typeof ExerciseSchema>`), garantendo che run-time e compile-time siano sempre sincronizzati.
- I dati in ingresso da Supabase vengono parsati tramite `z.array(ExerciseSchema).parse(data)`, assicurando che la UI riceva esattamente il formato atteso in modo tipizzato e sicuro.

## 2. ts-reset per la Standard Library

Le definizioni predefinite (standard library) di TypeScript contengono alcune insidie storiche. Ad esempio, `.json()` su una risposta `fetch` restituisce `any`, disabilitando di fatto il type checking per quei dati. Inoltre, `.filter(Boolean)` non funge correttamente da *type guard* per rimuovere i falsy values dall'inferenza dei tipi.

### La Soluzione
È stata integrata la libreria `@total-typescript/ts-reset`. Attraverso il file globale `reset.d.ts`, la standard library di TypeScript viene modificata per essere intrinsecamente sicura:
- I dati restituiti da `.json()` sono tipizzati come `unknown`, obbligando a validarli (es. con Zod).
- `.filter(Boolean)` inferisce correttamente gli array escludendo i tipi nulli o indefiniti.

## 3. Strict Mode Aggressivo

Per garantire che nessuna casistica venga ignorata e per sradicare alla radice le eccezioni legate ai valori non definiti (es. `Cannot read properties of undefined`), il file `tsconfig.json` del frontend attiva alcune delle direttive più rigorose del compilatore:

- `noUncheckedIndexedAccess: true`: Ogni accesso ad array o dizionari restituisce un tipo combinato con `undefined`. Esempio: accedere a `elementi[0]` richiede ora un check esplicito (`if (!elementi[0]) return;`), proteggendo l'app dai crash.
- `exactOptionalPropertyTypes: true`: Impone che le proprietà opzionali mancanti non possano essere inizializzate esplicitamente con il valore `undefined`.
- `noImplicitReturns: true`: Assicura che tutti i rami di esecuzione di una funzione (es. switch, if/else) restituiscano un valore valido in modo inequivocabile.
- Eliminazione delle *Type Assertions* insicure (`as Node`, `as HTMLInputElement`) a favore di *Type Guards* basati su JavaScript puro (`instanceof`) che validano i tipi anche a runtime.
