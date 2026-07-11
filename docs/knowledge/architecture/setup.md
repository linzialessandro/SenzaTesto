---
type: Concept
title: Architettura di Sistema & Configurazione del Progetto
description: Lo scaffolding iniziale del progetto, i requisiti architetturali e il prompt di inizializzazione per la piattaforma educativa.
tags: [architecture, setup, nextjs, fastapi, sympy, supabase, secrets, latex]
timestamp: 2026-07-08T10:00:00Z
---

# Architettura di Sistema & Prompt di Inizializzazione

**Contesto del Progetto:** 
Inizializzare una piattaforma educativa open-source, massivamente scalabile, che serve esercizi di matematica per le scuole superiori generati proceduralmente.

**Vincolo Infrastrutturale (CRITICO):** 
Il progetto DEVE essere ingegnerizzato per avere zero costi di manutenzione. Deve basarsi esclusivamente su architetture serverless e database edge gratuiti per scalare infinitamente senza incorrere in costi mensili fissi per i server.

**Mandato per lo Stack Tecnologico:**
- **Backend:** Python (FastAPI) wrappato con `Mangum` per deployment serverless (es. Vercel Serverless Functions o AWS Lambda). Questo eseguirà il motore di generazione procedurale `SymPy`.
- **Database:** PostgreSQL standard (es. self-hosted o managed). Abbiamo bisogno di uno storage relazionale robusto con supporto JSON nativo per i dati complessi degli esercizi in LaTeX. Sono state rimosse le dipendenze da Supabase per evitare vendor lock-in e alleggerire l'ambiente locale.
- **Frontend:** Next.js distribuito su Vercel o Cloudflare Pages (vedi le [ottimizzazioni di performance](/architecture/frontend_performance.md)).
- **Monetizzazione:** Integrare un componente leggero per le donazioni open-source (es. Ko-fi o link di pagamento Stripe) nell'interfaccia utente.

**Gestione dei Segreti e Sicurezza:**
Tutti i secret di produzione e sviluppo locale (inclusi i secret del database Supabase) non sono committati nel repository. Gli script Python utilizzano `os.path.expanduser('~/secrets/SenzaTesto/.env')` per recuperare in sicurezza le credenziali dell'ambiente al di fuori dell'albero di progetto, per proteggere la supply chain e mitigare esfiltrazioni accidentali.
Per le comunicazioni con il database viene applicato `certifi` per validare l'SSL/TLS, evitando di disabilitare il controllo certificati.

**Librerie Condivise:**
Per ovviare a problematiche di parsing e corruzione dei caratteri di escape LaTeX, la logica di fallback e sanitize è esternalizzata in un modulo python apposito (vedi `lib/latex_utils.py`), che ripara stringhe danneggiate e assicura l'integrità del LaTeX durante i passaggi I/O.

**Passaggi di Esecuzione per l'Agente:**

1. **Scaffolding del Monorepo:** 
   Inizializzare una struttura monorepo moderna contenente due directory principali: `/apps/api` (Python) e `/apps/frontend` (Next.js).

2. **Design dello Schema del Database:** 
   Generare gli script SQL di inizializzazione (dettagliati nello [Schema del Database](/database/schema.md)). Creare tabelle normalizzate:
   - `topics` (id, curriculum_year, macro_area)
   - `exercises` (id, topic_id, difficulty_level, latex_problem, latex_solution, generated_hash)
   *Includere un vincolo univoco su `generated_hash` per garantire che nessun problema duplicato venga mai salvato.*

3. **Inizializzazione del Backend:** 
   Configurare il boilerplate di FastAPI. Implementare una struttura di routing di base. Includere la configurazione del middleware CORS per accettare richieste dal frontend, e aggiungere un endpoint segnaposto per la logica di generazione di SymPy. 

4. **Inizializzazione del Frontend:** 
   Configurare un progetto Next.js pulito con Tailwind CSS. Configurare una libreria di formattazione matematica (KaTeX o MathJax) per renderizzare l'output LaTeX dell'API nativamente nel browser. 

5. **Ambiente Locale, CI/CD & MCP:** 
   Avviare un'istanza PostgreSQL locale per lo sviluppo (usando nativamente `docker run` per ovviare a limitazioni del plugin `compose`). L'agente interagisce direttamente con il DB locale tramite un server MCP (`@modelcontextprotocol/server-postgres`) configurato nell'IDE, rendendo obsolete le query manuali via CLI. Generare file `.env.example` per frontend e backend.

Eseguire lo scaffolding e mostrare l'albero iniziale dei file.

L'intero progetto è pensato per insegnanti e studenti ITALIANI della scuola secondaria di secondo grado (vedi il [Curriculum Italiano](/curriculum/curriculum-italiano.md)).
