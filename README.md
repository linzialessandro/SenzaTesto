# SenzaTesto

**La Matematica è di Tutti.** Un database open-source di esercizi di matematica, curato dalla community e accessibile gratuitamente per tutti gli studenti italiani.

**Trasparenza (EU AI Act Art. 50):** molti esercizi sono **generati o assistiti da IA** e sul sito sono etichettati con il badge **IA**. Prima della pubblicazione pubblica restano soggetti a validazione automatica e a revisione umana (a campione sulle batch). La generazione avviene offline con script BYOK (es. DeepSeek API del contributor); **non** c’è un chatbot sul sito. Dettagli: `docs/compliance/`.

## Visione del Progetto

SenzaTesto nasce per abbattere le barriere economiche nell'educazione. Fornisce materiale didattico di altissima qualità, categorizzato per Anno Scolastico (1°-5°), Macro Area e Argomento Specifico, in linea con il curriculum della scuola superiore italiana.

## Come Contribuire (Nuovo Workflow Markdown)

Abbiamo rivoluzionato il sistema di inserimento degli esercizi per renderlo scalabile, pulito e accessibile a chiunque, anche a chi non sa programmare in Python.

Ogni esercizio è salvato come file `.md` nella cartella `submissions/` del progetto. Questo garantisce:
- Sintassi pulita (YAML + Markdown + LaTeX).
- Versioning facile (tramite Git e GitHub).
- Ricerca Full-Text potenziata dai tag.

### Template Standard

Per aggiungere un nuovo esercizio, è sufficiente creare o copiare un file `.md` all'interno della cartella `submissions/` seguendo questo formato:

4.  **Copia il template standard** nel tuo file e compilalo:
    ```markdown
    ---
    year: 1
    macro_area: Algebra
    topic: equazioni lineari
    difficulty: 2
    tags:
      - frazioni
      - verifica
    ---
    # Problem Text
    Risolvi la seguente equazione lineare:
    $$
    \frac{x}{2} + 3 = 5
    $$

    # Solution
    Sottraendo 3 da entrambi i membri otteniamo $\frac{x}{2} = 2$.
    Moltiplicando per 2, il risultato è $x = 4$.
    ```

5.  Il frontend utilizzerà automaticamente `react-markdown` abbinato a LaTeX per renderizzare testo ed equazioni con una stilizzazione impeccabile!

### Inviare la Submission

Puoi inviare il tuo esercizio in vari modi:
1. **Generazione Massiva con IA (BYOK):** Inserisci la tua `DEEPSEEK_API_KEY` nel file `.env` (in `scripts/generator/` oppure in `~/secrets/SenzaTesto/.env`) ed esegui `python generate_and_pr.py 20` (dove 20 è il numero di esercizi, di default 10) per generare e inviare decine di esercizi automaticamente via PR. (Vedi `CONTRIBUTING.md` per i dettagli).
2. **Pull Request su GitHub:** Clona la repository, aggiungi manualmente il tuo file `.md` in `submissions/pending/` e apri una PR.
3. **Via Email:** Puoi compilare il template e inviarlo direttamente a `alessandro.linzi.phd@icloud.com`.

### Validazione e Acquisizione (Per Sviluppatori)

Una submission passa prima dal validatore deterministico e solo dopo può essere
inserita nel database. Crea un ambiente Python dedicato e installa l'unico set
di dipendenze usato dagli script operativi:

```bash
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements.txt

# Verifica le submission prima di aprire una PR o importarle
.venv/bin/python scripts/validate_submissions.py submissions/pending

# Importa solo file validi; al termine vengono spostati in accepted/
.venv/bin/python scripts/populate_from_md.py
```
Lo script blocca metadata incompleti, sezioni mancanti, delimitatori matematici
non bilanciati e duplicati esatti prima di scrivere nel database.

### Schema del Database

`init.sql` è lo snapshot completo per un database nuovo e viene usato anche da
Docker Compose. **Cancella le tabelle applicative esistenti**: eseguilo solo in
locale o dopo un backup esplicito.

```bash
# Applica una migrazione a un database esistente: prima mostra il piano,
# poi richiede un consenso esplicito per eseguirla.
.venv/bin/python scripts/run_migration.py 008_add_difficulty_filter.sql
.venv/bin/python scripts/run_migration.py 008_add_difficulty_filter.sql --apply
```

Non usare gli script di migrazione per ripetere file storici già applicati in
produzione. Le migrazioni sono additive e devono essere applicate una sola volta.

## Stack Tecnologico

- **Frontend:** Next.js (App Router), TailwindCSS, Framer Motion, KaTeX
- **Backend:** FastAPI, asyncpg
- **Database:** PostgreSQL (con estensioni per la Full-Text Search italiana)

---
*Progetto open-source dedicato agli studenti italiani.*

## Autore e Licenza

**Autore:** Alessandro Linzi <alessandro.linzi.phd@icloud.com>  
**Copyright (C)** 2026 Alessandro Linzi

Questo progetto è rilasciato sotto licenza **GNU Affero General Public License v3.0 (AGPLv3)**.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Per maggiori dettagli, consulta il file `LICENSE` o visita [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).
