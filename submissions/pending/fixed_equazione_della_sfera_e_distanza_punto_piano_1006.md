---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Equazione della sfera e distanza punto-piano"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:07:25+00:00"
tags:
  - "geometria analitica"
  - "spazio"
  - "sfera"
  - "piano"
  - "retta"
  - "distanza punto-piano"
---
# Problem Text
Nel contesto dello spazio tridimensionale, si considerino la retta $r$ di equazioni parametriche

$$
\begin{cases} x = 1+2t \\ y = t \\ z = -2-t \end{cases}
$$

e il piano $\pi$ di equazione $2x - y + z = 1$. Si determini il punto $C$ di intersezione tra $r$ e $\pi$. Successivamente, si scriva l'equazione della sfera di centro $C$ tangente al piano $\alpha$ di equazione $x + 2y - 2z = 5$.

# Solution
Sostituiamo le equazioni parametriche di $r$ nell'equazione di $\pi$:

$$
2(1+2t) - (t) + (-2-t) = 1
$$

Semplificando:

$$
2+4t - t -2 - t = 1 \quad \Rightarrow \quad 2t = 1 \quad \Rightarrow \quad t = \frac{1}{2}
$$

Sostituendo $t$ in $r$, il centro è $C(2, \frac{1}{2}, -\frac{5}{2})$. Il raggio della sfera è la distanza di $C$ da $\alpha$: $R = \frac{|2 + 2(\frac{1}{2}) - 2(-\frac{5}{2}) - 5|}{\sqrt{1^2+2^2+(-2)^2}} = \frac{|2+1+5-5|}{3} = 1$. L'equazione della sfera è $(x-2)^2 + (y-\frac{1}{2})^2 + (z+\frac{5}{2})^2 = 1$.
