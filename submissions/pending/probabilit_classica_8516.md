---
year: 2
macro_area: "Probabilit\u00e0"
topic: "Probabilit\u00e0 classica"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:58:11+00:00"
tags:
  - "probabilit\u00e0"
  - "eventi"
  - "dado"
  - "inclusione-esclusione"
---
# Problem Text
Lanciando un dado equilibrato a 6 facce, qual è la probabilità che esca un numero pari o un numero maggiore di 4?

# Solution
Lo spazio campionario è $\Omega = \{1,2,3,4,5,6\}$, con 6 esiti equiprobabili, ciascuno di probabilità $\frac{1}{6}$.

Definiamo i due eventi:
- $A$: esce un numero pari, cioè $A = \{2,4,6\}$ → $P(A) = \frac{3}{6}$.
- $B$: esce un numero maggiore di 4, cioè $B = \{5,6\}$ → $P(B) = \frac{2}{6}$.

L'evento richiesto è $A \cup B$. Poiché $A$ e $B$ non sono disgiunti (l'intersezione $A \cap B = \{6\}$ ha probabilità $\frac{1}{6}$), usiamo la formula dell'unione:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{3}{6} + \frac{2}{6} - \frac{1}{6} = \frac{4}{6} = \frac{2}{3}.
$$

Quindi la probabilità che esca un numero pari o un numero maggiore di 4 è $\frac{2}{3}$, cioè circa il 66,7%.
