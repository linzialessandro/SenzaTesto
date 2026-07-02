# SenzaTesto

**La Matematica è di Tutti.** Un database infinito e open-source di esercizi di matematica, generato e curato dalla community, accessibile gratuitamente per tutti gli studenti italiani.

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

Puoi inviare il tuo esercizio in due modi:
1. **Pull Request su GitHub:** Clona la repository, aggiungi il tuo file `.md` in `submissions/` e apri una PR.
2. **Via Email:** Puoi compilare il template e inviarlo direttamente a `alessandro.linzi.phd@icloud.com`.

### Script di Acquisizione (Per Sviluppatori)

Una volta che il file `.md` è nella cartella `submissions/`, il popolamento del database avviene tramite l'apposito script Python:

```bash
# Attiva il virtual environment
source venv/bin/activate
# Installa PyYAML se non lo hai già
pip install pyyaml
# Esegui lo script
python3 scripts/populate_from_md.py
```
Lo script prenderà in carico automaticamente l'inserimento dell'esercizio, l'indicizzazione per la ricerca e l'associazione dei tag, aggiornando in tempo reale il frontend.

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
