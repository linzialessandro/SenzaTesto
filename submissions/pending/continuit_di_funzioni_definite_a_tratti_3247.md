---
year: 5
macro_area: "Analisi Matematica"
topic: "Continuit\u00e0 di funzioni definite a tratti"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:52:39+00:00"
tags:
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "limiti"
---
# Problem Text
Considera la funzione definita a tratti:

$$
f(x) = \begin{cases} x^2 - k & \text{se } x < 2 \\ 3x - 1 & \text{se } x \ge 2 \end{cases}
$$

Determina il valore del parametro $k$ affinché $f$ sia continua in $x = 2$.

# Solution
Per definizione, $f$ è continua in $x_0 = 2$ se e solo se $\lim_{x \to 2} f(x) = f(2)$. Calcoliamo i limiti laterali:

$$
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 - k) = 4 - k
$$

$$
\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 6 - 1 = 5
$$

Inoltre, $f(2) = 3 \cdot 2 - 1 = 5$. Affinché il limite esista e sia uguale a $f(2)$, i due limiti laterali devono coincidere, quindi $4 - k = 5$, da cui $k = -1$. Pertanto, per $k = -1$, la funzione è continua in $x = 2$.
