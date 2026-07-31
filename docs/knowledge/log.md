# Registro degli Aggiornamenti della Knowledge Base

## 2026-07-31
* **Frontend / Practice**: Aggiunto il concetto `architecture/practice-session.md` (MVP sessione 5–10 esercizi, autovalutazione prima della soluzione, `localStorage`, raccomandazioni). Estesi discovery (`mode`/`size`), indice architettura, `setup.md` e `apps/frontend/CONTEXT.md`; rigenerato il grafo OKF.
* **Frontend / Discovery**: Aggiunto il concetto `architecture/exercise-discovery.md` per documentare i filtri basati su URL (`q`, `topic`, `year`, `difficulty`, `exercise`), i permalink per short code e la condivisione per-esercizio (Web Share, WhatsApp, copia link) su static export GitHub Pages.
* **Database**: Aggiornati `schema.md` e `indexing.md` con `ai_generated`, tabelle analytics (`search_logs.filter_difficulty`, `solution_views`), contratto RPC hardenizzato (`search_exercises` / `log_solution_view`), bound di input e lookup `short_code`.
* **Agenti / Pipeline**: Aggiornato `agents/database-population-workflow.md` con il gate deterministico `validate_submissions.py`, `scripts/requirements.txt`, `environment.py` e il passaggio CI sul deploy; allineato il template Markdown (`ai_generated`) e la nota di supersessione in `architecture/population_workflow.md`.
* **Analytics**: Completato il frontmatter OKF di `custom_analytics.md` e documentati i bound RPC + colonna difficoltà.
* **Setup**: Aggiornato `setup.md` con la risoluzione centralizzata di `DATABASE_URL` e la mappa degli script operativi.
* **Grafo OKF**: Rigenerato `viz.html` includendo i nodi orfani (`custom_analytics`, `frontend_type_safety`) e il nuovo concetto di discovery; bodies allineati ai file Markdown correnti. Aggiunto `scripts/regenerate_okf_graph.py` per ricostruire il grafo dai Concept.
* **Frontend CONTEXT**: Allineato `apps/frontend/CONTEXT.md` a `HomeClient` e allo stato URL.

## 2026-07-11
* **Manutenzione**: Eseguita pulizia massiva della codebase Python: rimossi 6 script "throwaway" obsoleti dalla root (es. `analyze_escapes.py`, `inspect_notes.py`), spostati gli script infrastrutturali in `scripts/` (`run_init.py`, `run_migration.py`) e applicato formatting rigoroso tramite `ruff` su tutti i restanti script per uniformità (risolti 23 errori di linting).
* **Architettura**: Creato il concetto `custom_analytics.md` per documentare l'implementazione in-house e GDPR-compliant delle statistiche (tramite le tabelle Supabase `search_logs` e `solution_views`, le relative RPC e l'automazione dei report tramite GitHub Actions).
* **Setup/Agenti**: Aggiornato `setup.md` per riflettere la transizione verso un ambiente PostgreSQL standard (rimozione del vendor lock-in e delle skill Supabase) e documentata l'integrazione del server MCP ufficiale per l'interazione nativa dell'agente con il DB locale, oltre all'uso diretto di `docker run` al posto di `docker-compose`.

## 2026-07-10
* **Architettura**: Creato il concetto `frontend_type_safety.md` per documentare l'introduzione di Zod (boundary validation), `@total-typescript/ts-reset` (standard library fixes) e l'abilitazione dello strict mode estremo (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) ispirato alle best practice di Matt Pocock.
* **Database**: Aggiornato il concetto `indexing` per documentare l'introduzione della funzione `optimize_search_query`, la quale estende le capacità di ricerca FTS convertendo dinamicamente spazi impliciti (AND) in operatore `OR`, aumentando la recall senza penalizzare la precisione del ranking `ts_rank`.
* **Frontend**: Aggiornato `frontend_performance.md` con l'introduzione dei concetti "GPU Memory Limits (iOS Safari)" e "Prevenzione Blocco Main Thread", vietando l'uso di `filter: blur` per l'ambient-glow a favore dei `radial-gradient` nativi, e documentando l'uso di `next/script` con `strategy="lazyOnload"` per deferire il parser WebAssembly TikzJax.

## 2026-07-09
* **Database**: Completata l'ingestione massiva del curriculum di Niccolò Cangiotti (456 esercizi). Il workflow `populate_from_md.py` è stato utilizzato con successo dopo la sanitizzazione via `validate_and_fix_pending.py`.
* **Frontend**: Aggiornato `frontend_performance.md` documentando la migrazione dell'architettura di rendering LaTeX TikZ da API Routes a una soluzione 100% client-side via `@rod2ik/tikzjax` per superare i limiti di Vercel e supportare l'hosting statico su GitHub Pages.

## 2026-07-08
* **Agenti**: Aggiornato il concetto `database-population-workflow` per riflettere l'unificazione degli script di generazione (`generate_parallel.py` deprecato) in `generate_and_pr.py`, documentando l'introduzione della concorrenza ad alte prestazioni tramite `asyncio.Semaphore`, della resilienza agli errori API tramite `tenacity` e del logging Python avanzato.
* **Database**: Aggiornato `schema.md` per riflettere il passaggio alle colonne PK `BIGINT IDENTITY` (migrazione da SERIAL), l'aggiunta di `sort_order` per l'ordinamento pedagogico e l'enforcement di sicurezza con `FORCE ROW LEVEL SECURITY`.
* **Database**: Aggiornato `indexing.md` per includere il nuovo indice `idx_exercises_created_at_desc` (ottimizzato per l'infinite scroll).
* **Architettura**: Aggiornato `setup.md` inserendo dettagli sulla gestione esterna dei segreti (`os.path.expanduser`) e sul modulo condiviso per i fix LaTeX (`lib/latex_utils.py`).
* **Frontend**: Aggiornato `frontend_performance.md` con sezioni su "Resilienza del Rendering" (`ErrorBoundary` su `MathRenderer`), utilizzo del React Portal per i modal, focus trap (A11y) e l'approccio alla paginazione rispetto all'infinite scroll puro.
## 2026-07-06
* **Aggiornamento**: Aggiornati gli indici (`index.md`) del bundle per renderli conformi alle specifiche OKF v0.1 (rimosso frontmatter non consentito dagli indici e impostata la versione OKF sull'indice di radice).
* **Manutenzione**: Risolti i concetti orfani tramite l'aggiunta di riferimenti incrociati (cross-linking) tra `setup.md`, `schema.md`, `exercise_template.md`, `curriculum-italiano.md`, `database-population-workflow.md` e `llm-pricing.md`.
* **Deprecazione**: Contrassegnato il concetto `architecture/population_workflow` come superato da `agents/database-population-workflow` e rimosso dal relativo indice di architettura per evitare ridondanze.
