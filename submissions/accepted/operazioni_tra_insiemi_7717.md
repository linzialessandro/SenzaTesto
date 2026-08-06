---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:27:47+00:00"
tags:
  - "insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
---
# Problem Text
Dati gli insiemi $A = \{1,2,3,4\}$, $B = \{3,4,5,6\}$ e $C = \{2,3,6,7\}$, determina l'insieme $(A \cap B) \cup (B \setminus C)$.

# Solution
Calcoliamo prima l'intersezione $A \cap B$: gli elementi comuni a entrambi sono $\{3,4\}$. Poi calcoliamo la differenza $B \setminus C$: gli elementi di $B$ che non appartengono a $C$ sono quelli in $\{3,4,5,6\}$ ma non in $\{2,3,6,7\}$, cioè $\{4,5\}$. Infine facciamo l'unione dei due risultati: $\{3,4\} \cup \{4,5\} = \{3,4,5\}$. Quindi $(A \cap B) \cup (B \setminus C) = \{3,4,5\}$.
