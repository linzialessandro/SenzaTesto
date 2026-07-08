---
type: Concept
title: Flusso di Popolamento Database
description: Guida dettagliata per gli agenti LLM su come popolare autonomamente il database di esercizi, inclusa la gestione sicura del contesto.
tags: [agents, workflow, database, population, seeding, llm-costs]
timestamp: 2026-07-04T19:00:00Z
supersedes: architecture/population_workflow
---

# Flusso di Popolamento Database (Pipeline Automatica)

Questo documento delinea il flusso di lavoro aggiornato che ogni agente delegato alla generazione degli esercizi deve seguire. La pipeline si basa su un sistema in due passaggi: Generazione automatizzata con Git PR, e Popolamento a valle.

## Step 1: Generazione degli Esercizi (Agenti LLM)

Gli esercizi vengono generati tramite lo script `scripts/generator/generate_and_pr.py`. 

### Sicurezza, Concorrenza e Costi (Best Practices)
Quando l'agente esegue lo script per generare batch di esercizi (es. 50 o 100), è fondamentale rispettare queste regole critiche per evitare costi astronomici, crash delle API e colli di bottiglia:
1. **Concorrenza ad Alte Prestazioni:** Invece di eseguire le richieste sequenzialmente, la generazione avviene in parallelo utilizzando `asyncio.Semaphore(5)` (o simile) per gestire il rate limiting senza sacrificare il throughput. Lo script storico `generate_parallel.py` è stato deprecato e la logica unificata in `generate_and_pr.py`.
2. **Resilienza (Tenacity):** Per prevenire l'interruzione della generazione in batch a causa di instabilità di rete, limiti API (429 Too Many Requests) o parsing fallito, le chiamate all'SDK sono wrappate con la libreria `tenacity` (es. backoff esponenziale).
3. **Isolamento del Contesto (O(1) Cost):** L'istanza dell'agente LLM (`async with Agent(config) as agent:`) deve essere creata **all'interno** del ciclo di generazione di ogni singolo esercizio. Condividere l'agente significa accumulare l'intera cronologia, portando a costi O(N²) ed esaurendo rapidamente la finestra di contesto (dettagli in [Analisi Costi LLM](/agents/llm-pricing.md)).
4. **Prevenzione Loop e Sentinel Field:** I modelli LLM possono talvolta incastrarsi in loop infiniti o divagare in problemi multi-parte estremamente lunghi. Bisogna impostare un limite stringente (es. `max_output_tokens=1000`) all'interno di `LocalAgentConfig`. Poiché molti framework moderni tendono a *riparare* automaticamente il JSON troncato bypassando i nostri `try/except`, è **obbligatorio** includere uno speciale "campo sentinella" alla fine del Pydantic model (es. `generation_completed: str`). In questo modo, se il limite di token viene raggiunto, il campo finale sarà assente e lo script scarterà l'esercizio difettoso riprovando la generazione.

Lo script scriverà l'output formattato in file Markdown seguendo lo [Standard Exercise Markdown Template](/architecture/exercise_template.md) nella cartella `submissions/pending/` e creerà in automatico un branch e una Pull Request. In caso di errori, utilizzerà il modulo `logging` standard di Python per tracciare i dettagli diagnostici.

## Step 2: Popolamento del Database

Una volta che gli esercizi generati (in `submissions/pending/`) sono stati revisionati tramite Pull Request e il merge è completato nel branch `main`, si utilizza lo script `scripts/populate_from_md.py` per l'inserimento definitivo.

Lo script si occuperà di:
1. Leggere i file `.md`.
2. Verificare l'esistenza di `macro_area` e `topic` nel database (e crearli se mancanti).
3. Calcolare un hash univoco (`generated_hash`) basato sul contenuto.
4. Inserire gli esercizi nelle tabelle del database (vedi lo [Schema del Database](/database/schema.md)).
5. Spostare i file completati in `submissions/accepted/`.
