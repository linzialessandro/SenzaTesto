---
type: Concept
title: Flusso di Popolamento Database
description: Guida dettagliata per gli agenti LLM su come popolare autonomamente il database di esercizi, inclusa la gestione sicura del contesto.
tags: [agents, workflow, database, population, seeding, llm-costs]
timestamp: 2026-07-04T19:00:00Z
---

# Flusso di Popolamento Database (Pipeline Automatica)

Questo documento delinea il flusso di lavoro aggiornato che ogni agente delegato alla generazione degli esercizi deve seguire. La pipeline si basa su un sistema in due passaggi: Generazione automatizzata con Git PR, e Popolamento a valle.

## Step 1: Generazione degli Esercizi (Agenti LLM)

Gli esercizi vengono generati tramite lo script `scripts/generator/generate_and_pr.py`. 

### Sicurezza e Costi (Best Practices)
Quando l'agente esegue lo script per generare batch di esercizi (es. 50 o 100), è fondamentale rispettare due regole critiche per evitare costi astronomici e crash delle API:
1. **Isolamento del Contesto (O(1) Cost):** L'istanza dell'agente LLM (`async with Agent(config) as agent:`) deve essere creata **all'interno** del ciclo `for` di generazione. Se viene creata fuori, il framework accumulerà l'intera cronologia degli esercizi precedenti come contesto della chat, portando a costi O(N²) ed esaurendo rapidamente il budget e la finestra di contesto.
2. **Prevenzione Loop (`max_output_tokens`):** I modelli LLM possono talvolta incastrarsi in loop infiniti generando codice LaTeX molto lungo. Bisogna impostare un limite stringente (es. `max_output_tokens=1500`) all'interno di `LocalAgentConfig`. In questo modo, se il modello deraglia, raggiunge il limite, produce un JSON non valido e lo script scarta l'esercizio passando al successivo con un semplice blocco `try/except`, evitando crash di sistema ("The maximum token limit was reached").

Lo script scriverà l'output formattato in file Markdown nella cartella `submissions/pending/` e creerà in automatico un branch e una Pull Request.

## Step 2: Popolamento del Database

Una volta che gli esercizi generati (in `submissions/pending/`) sono stati revisionati tramite Pull Request e il merge è completato nel branch `main`, si utilizza lo script `scripts/populate_from_md.py` per l'inserimento definitivo.

Lo script si occuperà di:
1. Leggere i file `.md`.
2. Verificare l'esistenza di `macro_area` e `topic` nel database (e crearli se mancanti).
3. Calcolare un hash univoco (`generated_hash`) basato sul contenuto.
4. Inserire gli esercizi nella tabella `exercises`.
5. Spostare i file completati in `submissions/accepted/`.
