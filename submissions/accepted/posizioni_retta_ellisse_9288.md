---
year: 3
macro_area: "Geometria analitica"
topic: "Posizioni retta-ellisse"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:57:59+00:00"
tags:
  - "ellisse"
  - "tangente"
  - "secante"
  - "parametro"
  - "discriminante"
---
# Problem Text
Data l'ellisse di equazione $\frac{x^2}{9} + \frac{y^2}{4} = 1$, determinare per quali valori del parametro reale $k$ la retta $y = x + k$ è tangente, secante o esterna all'ellisse.

# Solution
Sostituiamo $y = x + k$ nell'equazione dell'ellisse:

$$
\frac{x^2}{9} + \frac{(x+k)^2}{4} = 1
$$

Moltiplichiamo per $36$:

$$
4x^2 + 9(x+k)^2 = 36
$$

Espandiamo e semplifichiamo:

$$
4x^2 + 9(x^2 + 2kx + k^2) = 36 \quad \Rightarrow \quad 13x^2 + 18kx + 9k^2 - 36 = 0
$$

Il discriminante dell'equazione di secondo grado è:

$$
\Delta = (18k)^2 - 4 \cdot 13 \cdot (9k^2 - 36) = 324k^2 - 468k^2 + 1872 = -144k^2 + 1872
$$

Studiamo il segno di $\Delta$:
- Tangente se $\Delta = 0$: $-144k^2 + 1872 = 0 \Rightarrow k^2 = 13 \Rightarrow k = \pm \sqrt{13}$.
- Secante se $\Delta > 0$: $k^2 < 13 \Rightarrow -\sqrt{13} < k < \sqrt{13}$.
- Esterna se $\Delta < 0$: $k^2 > 13 \Rightarrow k < -\sqrt{13}$ o $k > \sqrt{13}$.

Quindi: la retta è tangente per $k = \pm \sqrt{13}$, secante per $-\sqrt{13} < k < \sqrt{13}$, esterna per $k < -\sqrt{13}$ o $k > \sqrt{13}$.
