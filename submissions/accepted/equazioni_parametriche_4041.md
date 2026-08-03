---
year: 2
macro_area: "Equazioni di secondo grado"
topic: "Equazioni parametriche"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:49:58+00:00"
tags:
  - "equazioni di secondo grado"
  - "discriminante"
  - "parametro"
---
# Problem Text
Data l'equazione $x^2 - (2k+1)x + k^2 = 0$, determina per quali valori di $k$ l'equazione ha due radici reali e distinte.

# Solution
I coefficienti sono $a=1$, $b=-(2k+1)$, $c=k^2$. Calcoliamo il discriminante:

$$
\Delta = b^2 - 4ac = [-(2k+1)]^2 - 4 \cdot 1 \cdot k^2 = (2k+1)^2 - 4k^2 = 4k^2 + 4k + 1 - 4k^2 = 4k + 1.
$$

Per avere due radici reali e distinte, occorre che $\Delta > 0$, quindi:

$$
4k + 1 > 0 \implies k > -\frac{1}{4}.
$$

Conclusione: l'equazione ha due radici reali e distinte per $k > -\frac{1}{4}$.
