# Registro degli Aggiornamenti della Knowledge Base

## 2026-07-09
* **Database**: Completata l'ingestione massiva del curriculum di Niccolò Cangiotti (456 esercizi). Il workflow `populate_from_md.py` è stato utilizzato con successo dopo la sanitizzazione via `validate_and_fix_pending.py`.
* **Frontend**: Aggiornato `frontend_performance.md` documentando l'implementazione del supporto a LaTeX TikZ tramite la libreria WebAssembly `react-tikzjax` integrata in `MathRenderer.tsx`.

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
