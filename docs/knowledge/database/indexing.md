---
type: Concept
title: Strategia di Indicizzazione (FTS)
description: Documentazione sulla strategia di Full-Text Search adottata per garantire la scalabilità della ricerca degli esercizi.
tags: [database, indexing, postgres, fts, scalability]
timestamp: 2026-07-01T14:00:00Z
---

# Strategia di Indicizzazione e Ricerca Esercizi

Con l'obiettivo di rendere la piattaforma scalabile a migliaia di esercizi generati proceduralmente (LLM) senza introdurre colli di bottiglia o frizioni per studenti e insegnanti, è stata implementata una strategia di **Full-Text Search (FTS)** nativa in PostgreSQL.

## Implementazione

1. **Colonna `search_vector`**: La tabella `exercises` contiene una colonna dedicata `search_vector` di tipo `tsvector`.
2. **Indice GIN**: Sulla colonna `search_vector` è applicato un indice GIN (Generalized Inverted Index) che offre performance `O(log N)` eccellenti per query di ricerca testuale anche su dataset molto voluminosi.
3. **Trigger di Aggiornamento**: Un trigger automatico si assicura che ad ogni operazione di inserimento o aggiornamento di un esercizio, il vettore venga ricreato combinando:
   - `problem_text` (Testo del problema, peso 'A')
   - `topic_name` (Nome del Topic, peso 'B')
   - `macro_area_name` (Nome della Macro Area, peso 'C')

## Vantaggi

- **Frizione Ridotta**: Evita il sovraccarico nel frontend causato da parsing manuale o scrolling infinito.
- **Precisione**: L'uso combinato di pesi (A, B, C) e della funzione backend API `websearch_to_tsquery` permette query precise (ad esempio, ricerca per parola chiave, argomento o operatore semantico).
- **Scalabilità**: Grazie a PostgreSQL e all'indice GIN, il tempo di risposta rimane pressoché costante anche oltre i 10.000+ record.
