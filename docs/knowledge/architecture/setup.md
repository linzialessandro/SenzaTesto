---
type: Concept
title: Architettura di Sistema & Configurazione del Progetto
description: Lo scaffolding iniziale del progetto, i requisiti architetturali e il prompt di inizializzazione per la piattaforma educativa.
tags: [architecture, setup, nextjs, fastapi, sympy, supabase]
timestamp: 2026-07-01T12:35:00Z
---

# Architettura di Sistema & Prompt di Inizializzazione

**Contesto del Progetto:** 
Inizializzare una piattaforma educativa open-source, massivamente scalabile, che serve esercizi di matematica per le scuole superiori generati proceduralmente.

**Vincolo Infrastrutturale (CRITICO):** 
Il progetto DEVE essere ingegnerizzato per avere zero costi di manutenzione. Deve basarsi esclusivamente su architetture serverless e database edge gratuiti per scalare infinitamente senza incorrere in costi mensili fissi per i server.

**Mandato per lo Stack Tecnologico:**
- **Backend:** Python (FastAPI) wrappato con `Mangum` per deployment serverless (es. Vercel Serverless Functions o AWS Lambda). Questo eseguirà il motore di generazione procedurale `SymPy`.
- **Database:** Supabase (PostgreSQL) o Cloudflare D1. Abbiamo bisogno di uno storage relazionale robusto con supporto JSON nativo per i dati complessi degli esercizi in LaTeX.
- **Frontend:** Next.js distribuito su Vercel o Cloudflare Pages (Edge caching per gli asset statici).
- **Monetizzazione:** Integrare un componente leggero per le donazioni open-source (es. Ko-fi o link di pagamento Stripe) nell'interfaccia utente.

**Passaggi di Esecuzione per l'Agente:**

1. **Scaffolding del Monorepo:** 
   Inizializzare una struttura monorepo moderna contenente due directory principali: `/apps/api` (Python) e `/apps/frontend` (Next.js).

2. **Design dello Schema del Database:** 
   Generare gli script SQL di inizializzazione. Creare tabelle normalizzate:
   - `topics` (id, curriculum_year, macro_area)
   - `exercises` (id, topic_id, difficulty_level, latex_problem, latex_solution, generated_hash)
   *Includere un vincolo univoco su `generated_hash` per garantire che nessun problema duplicato venga mai salvato.*

3. **Inizializzazione del Backend:** 
   Configurare il boilerplate di FastAPI. Implementare una struttura di routing di base. Includere la configurazione del middleware CORS per accettare richieste dal frontend, e aggiungere un endpoint segnaposto per la logica di generazione di SymPy. 

4. **Inizializzazione del Frontend:** 
   Configurare un progetto Next.js pulito con Tailwind CSS. Configurare una libreria di formattazione matematica (KaTeX o MathJax) per renderizzare l'output LaTeX dell'API nativamente nel browser. 

5. **Ambiente Locale & CI/CD:** 
   Creare un `docker-compose.yml` per avviare un'istanza PostgreSQL locale per lo sviluppo. Generare file `.env.example` per frontend e backend.

Eseguire lo scaffolding e mostrare l'albero iniziale dei file.

L'intero progetto è pensato per insegnanti e studenti ITALIANI della scuola secondaria di secondo grado (anni dal 1° al 5° inclusi).
