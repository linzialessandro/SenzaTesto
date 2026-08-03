---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Prodotto cartesiano e relazioni"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:48:05+00:00"
tags:
  - "prodotto cartesiano"
  - "dimostrazione"
  - "insiemi"
---
# Problem Text
Dimostra che se $A \times B = B \times A$, allora $A = \emptyset$ oppure $B = \emptyset$ oppure $A = B$.

# Solution
Supponiamo che $A \times B = B \times A$. Se $A = \emptyset$ o $B = \emptyset$, allora $A \times B = \emptyset$ e $B \times A = \emptyset$, quindi la condizione è soddisfatta e la tesi è vera. Supponiamo quindi che $A \neq \emptyset$ e $B \neq \emptyset$. Prendiamo un qualunque $x \in A$ e un qualunque $y \in B$. Allora $(x,y) \in A \times B$, quindi $(x,y) \in B \times A$. Di conseguenza $x \in B$ e $y \in A$. Poiché $B$ è non vuoto, fissiamo un $y \in B$; per ogni $x \in A$ otteniamo $x \in B$, quindi $A \subseteq B$. Analogamente, poiché $A$ è non vuoto, fissiamo un $x \in A$; per ogni $y \in B$ otteniamo $y \in A$, quindi $B \subseteq A$. Ne segue che $A = B$. In conclusione, se $A \times B = B \times A$, allora $A = \emptyset$ oppure $B = \emptyset$ oppure $A = B$.
