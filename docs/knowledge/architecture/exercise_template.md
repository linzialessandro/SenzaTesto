---
type: Concept
title: Exercise Markdown Template
description: Standard format for defining new exercises using Markdown and YAML frontmatter.
tags: [architecture, markdown, template, exercises, validation]
timestamp: 2026-08-11T16:00:00Z
---

# Standard Exercise Markdown Template

All new exercises must be submitted using the following Markdown format. The system will automatically parse this format to ingest the exercise into the database. Prima dell'inserimento, `scripts/validate_submissions.py` applica un gate deterministico (vedi [Flusso di Popolamento](/agents/database-population-workflow.md)).

## 1. Structure

Each exercise file MUST contain a YAML frontmatter block at the top, followed by specific Markdown headers.

```markdown
---
year: 1
macro_area: Algebra
topic: equazioni lineari
difficulty: 2
tags:
  - frazioni
  - verifica
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: 2026-08-02T12:00:00+00:00
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

## 2. Frontmatter Fields

| Field | Type | Description |
|---|---|---|
| `year` | Integer | L'anno scolastico di riferimento 1-5 (vedi il [Curriculum Italiano](/curriculum/curriculum-italiano.md)). |
| `macro_area` | String | L'area tematica generale (es. "Geometria", "Algebra Base"). |
| `topic` | String | L'argomento specifico (es. "triangoli", "sistemi lineari"). |
| `difficulty` | Integer | Livello 1–5. In generazione automatica (`generate_and_pr.py`) il valore **campionato** dallo script ha priorità: viene forzato dopo il parse JSON se il modello etichetta diversamente. |
| `tags` | List[String] | Una lista di tag aggiuntivi per la ricerca (max 12). |
| `ai_generated` | Boolean (opzionale) | `true` se prodotto da un modello LLM; default `false` in ingestione se assente. Flag DB/API. |
| `content_origin` | String (opzionale) | `artificial` \| `human` \| `mixed` — classificazione machine-readable (EU AI Act Art. 50(2)). |
| `provenance` | Mapping (opzionale) | Metadati di origine: `schema`, `method`, `provider`, `model`, `pipeline`, `generated_at` (opzionali extra es. `source`). Invisibili nel rendering. `pipeline` tipici: `generate_and_pr` (BYOK generator) oppure `recycle_rejected` (ricostruzione da dump in `submissions/rejected/`). Vedi `lib/provenance.py` e `docs/compliance/eu-ai-act-art50.md`. |

## 3. Headers (Body)

Il corpo del documento DEVE contenere i seguenti 2 header di primo livello (`#`):

- `# Problem Text`: Il testo del problema. Può contenere sia Markdown standard che formule LaTeX in-line (`$ $`) e a blocco (`$$ $$`).
- `# Solution`: La soluzione passo-passo. Anch'essa supporta testo Markdown misto a formule LaTeX.

Tutto il testo sotto a un header verrà considerato parte di quel blocco, fino all'header successivo.

## 4. Linee Guida di Formattazione LaTeX e YAML

Per garantire che gli esercizi vengano parsati correttamente dallo script ed evitare bug grafici nel frontend, rispetta queste regole:

### Quotatura YAML (Frontmatter)
Se un campo di testo nel frontmatter (es. `topic`) contiene caratteri speciali, in particolare i due punti `:`, deve essere obbligatoriamente racchiuso tra doppi apici `""`.
- **Sbagliato:** `topic: Equazioni: casi particolari` (provoca un errore di parsing YAML).
- **Corretto:** `topic: "Equazioni: casi particolari"`

### LaTeX Block Math
I delimitatori `$$` per le equazioni a blocco (soprattutto se su più righe o contenenti matrici/sistemi come `\begin{cases}`) devono risiedere su **righe separate** rispetto alla formula.
- **Sbagliato:**
  $$g(x) = \begin{cases}
  x & x \ge 0
  \end{cases}$$
- **Corretto:**
  $$
  g(x) = \begin{cases}
  x & x \ge 0
  \end{cases}
  $$
In caso contrario, il parser del frontend interpreterà la formula come matematica "inline", formattando l'intero sistema su una sola riga e rompendone il rendering.
