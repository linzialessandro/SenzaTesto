---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:47:20+00:00"
tags:
  - "insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
---
# Problem Text
Dati gli insiemi $A = \{1,2,3,4\}$ e $B = \{3,4,5,6\}$, determina $A \cup B$, $A \cap B$ e $A \setminus B$.

# Solution
Per definizione:
- $A \cup B$ contiene tutti gli elementi che stanno in $A$ o in $B$ (o in entrambi), senza ripetizioni. Quindi $A \cup B = \{1,2,3,4,5,6\}$.
- $A \cap B$ contiene gli elementi comuni a entrambi: $A \cap B = \{3,4\}$.
- $A \setminus B$ contiene gli elementi di $A$ che non stanno in $B$: $A \setminus B = \{1,2\}$.
Quindi i risultati sono:

$$
A \cup B = \{1,2,3,4,5,6\}, \quad A \cap B = \{3,4\}, \quad A \setminus B = \{1,2\}.
$$
