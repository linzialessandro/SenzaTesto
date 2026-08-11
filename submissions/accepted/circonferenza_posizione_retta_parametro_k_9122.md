---
year: 3
macro_area: "Geometria Analitica"
topic: "Circonferenza"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "circonferenza"
  - "posizione retta"
  - "distanza punto-retta"
  - "parametro"
---
# Problem Text
Determina per quali valori di $k$ la retta $y=kx+2$ è tangente, secante o esterna alla circonferenza di equazione $x^2+y^2-6x+4y+9=0$.

# Solution
Completando i quadrati: $(x-3)^2+(y+2)^2=4$, centro $C(3,-2)$, raggio $r=2$. Retta in forma implicita: $kx-y+2=0$. Distanza:

$$
d=\dfrac{|3k+4|}{\sqrt{k^2+1}}.
$$

**Tangente** ($d=r$): $|3k+4|=2\sqrt{k^2+1}$. Elevando al quadrato: $9k^2+24k+16=4k^2+4$, cioè $5k^2+24k+12=0$. Discriminante $576-240=336=16\cdot 21$, quindi $k=\dfrac{-12\pm 2\sqrt{21}}{5}$.

**Secante** ($d<2$): $|3k+4|<2\sqrt{k^2+1}$, che (analizzando il trinomio) vale per $k$ strettamente compreso tra le due radici: $k\in\left(\dfrac{-12-2\sqrt{21}}{5},\dfrac{-12+2\sqrt{21}}{5}\right)$.

**Esterna** ($d>2$): $k$ esterno a tale intervallo.
