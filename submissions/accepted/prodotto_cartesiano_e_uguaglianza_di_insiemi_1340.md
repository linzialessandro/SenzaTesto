---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Prodotto cartesiano e uguaglianza di insiemi"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:51:56+00:00"
tags:
  - "insiemi"
  - "prodotto cartesiano"
  - "uguaglianza"
  - "dimostrazione"
---
# Problem Text
Siano $A$ e $B$ due insiemi. Determina tutte le coppie $(A,B)$ di insiemi tali che $A \times B = B \times A$.

# Solution
Consideriamo due casi.

**Caso 1:** Se $A = \emptyset$ oppure $B = \emptyset$, allora $A \times B = \emptyset$ e $B \times A = \emptyset$, quindi l'uguaglianza è vera.

**Caso 2:** Se $A \neq \emptyset$ e $B \neq \emptyset$, prendiamo un elemento qualunque $a \in A$ e $b \in B$. Poiché $A \times B = B \times A$, la coppia $(a,b)$ appartiene anche a $B \times A$. Quindi, per definizione di prodotto cartesiano, $a \in B$ e $b \in A$. Dato che $a$ e $b$ erano arbitrari, ne segue che ogni elemento di $A$ sta in $B$ (cioè $A \subseteq B$) e ogni elemento di $B$ sta in $A$ (cioè $B \subseteq A$). Pertanto $A = B$.

Viceversa, se $A = B$, allora $A \times B = A \times A = B \times A$, quindi l'uguaglianza è verificata.

**Conclusione:** l'uguaglianza $A \times B = B \times A$ vale se e solo se almeno uno dei due insiemi è vuoto oppure $A = B$.
