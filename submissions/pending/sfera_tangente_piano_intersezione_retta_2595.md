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
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "geometria analitica"
  - "spazio"
  - "sfera"
  - "piano"
  - "retta"
  - "distanza punto-piano"
---
# Problem Text
Nello spazio si considerino la retta $r$ di equazioni parametriche

$$
\begin{cases} x=1+2t \\ y=t \\ z=-2-t \end{cases}
$$

e il piano $\pi$ di equazione $2x-y+z=1$. Si determini il punto $C$ di intersezione tra $r$ e $\pi$. Successivamente, si scriva l'equazione della sfera di centro $C$ tangente al piano $\alpha$ di equazione $x+2y-2z=5$.

# Solution
Sostituendo le equazioni di $r$ in $\pi$:

$$
2(1+2t)-t+(-2-t)=1 \Rightarrow 2+4t-t-2-t=1 \Rightarrow 2t=1 \Rightarrow t=\dfrac{1}{2}.
$$

Quindi $C=\left(1+1,\ \dfrac{1}{2},\ -2-\dfrac{1}{2}\right)=\left(2,\ \dfrac{1}{2},\ -\dfrac{5}{2}\right)$.

Il raggio è la distanza da $C$ ad $\alpha$:

$$
r=\dfrac{\left|2+2\cdot\frac{1}{2}-2\left(-\frac{5}{2}\right)-5\right|}{\sqrt{1+4+4}}=\dfrac{|2+1+5-5|}{3}=\dfrac{3}{3}=1.
$$

Sfera di centro $C$ e raggio $1$:

$$
\left(x-2\right)^2+\left(y-\dfrac{1}{2}\right)^2+\left(z+\dfrac{5}{2}\right)^2=1.
$$
