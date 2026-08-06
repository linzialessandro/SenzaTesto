---
year: 5
macro_area: "Calcolo dei Limiti"
topic: "Asintoti"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:08:31+00:00"
tags:
  - "asintoti"
  - "limiti"
  - "funzioni razionali"
---
# Problem Text
Determina gli asintoti verticali e orizzontali della funzione $f(x) = \frac{3x+2}{x-1}$.

# Solution
Per l'asintoto verticale, il denominatore si annulla per $x=1$. Calcoliamo i limiti unilaterali:

$$
\lim_{x \to 1^+} \frac{3x+2}{x-1} = +\infty, \quad \lim_{x \to 1^-} \frac{3x+2}{x-1} = -\infty,
$$

quindi $x=1$ è un asintoto verticale.

Per l'asintoto orizzontale, calcoliamo il limite per $x \to \pm\infty$:

$$
\lim_{x \to \pm\infty} \frac{3x+2}{x-1} = 3,
$$

poiché il grado del numeratore e del denominatore coincidono e il rapporto dei coefficienti di grado massimo è $3/1=3$. Quindi $y=3$ è un asintoto orizzontale.

Non vi sono asintoti obliqui perché esiste già un asintoto orizzontale.
