---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Verifica di limiti con la definizione \u03b5-\u03b4"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:49:08+00:00"
tags:
  - "limiti"
  - "continuit\u00e0"
  - "epsilon-delta"
---
# Problem Text
Usando la definizione ε-δ di limite, dimostra che

$$
\lim_{x \to 1} (3x - 2) = 1.
$$

# Solution
Dobbiamo dimostrare che per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che se $0 < |x-1| < \delta$, allora $|(3x-2)-1| < \varepsilon$.

Osserviamo che

$$
|(3x-2)-1| = |3x-3| = 3|x-1|.
$$

Scegliamo $\delta = \varepsilon/3$. Se $0 < |x-1| < \delta$, allora

$$
|(3x-2)-1| = 3|x-1| < 3 \cdot \frac{\varepsilon}{3} = \varepsilon.
$$

Quindi per ogni $\varepsilon > 0$ esiste $\delta = \varepsilon/3$ che soddisfa la definizione. Pertanto

$$
\lim_{x \to 1} (3x - 2) = 1.
$$
