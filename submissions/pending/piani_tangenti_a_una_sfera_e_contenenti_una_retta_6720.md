---
year: 5
macro_area: "Geometria analitica nello spazio"
topic: "Piani tangenti a una sfera e contenenti una retta"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:56+00:00"
tags:
  - "geometria analitica"
  - "spazio"
  - "sfera"
  - "piano tangente"
  - "retta"
  - "distanza"
  - "parametro"
---
# Problem Text
Determina le equazioni dei piani tangenti alla sfera di equazione $x^2+y^2+z^2=4$ e contenenti la retta $r$ di equazioni parametriche $x=3$, $y=t$, $z=2t$.

# Solution
La sfera ha centro $O(0,0,0)$ e raggio $R=2$. La retta $r$ passa per $P(3,0,0)$ con direzione $\vec{v}=(0,1,2)$. Un piano contenente $r$ ha equazione del tipo

$$
a(x-3) + b y + c z = 0
$$

con la condizione che il vettore normale $\vec{n}=(a,b,c)$ sia ortogonale a $\vec{v}$:

$$
\vec{n}\cdot\vec{v} = b + 2c = 0 \implies b = -2c.
$$

Sostituendo: $a(x-3) -2c y + c z = 0$. Se $c=0$ otteniamo il piano $x=3$, che ha distanza $3\neq 2$ da $O$, quindi non è tangente. Pertanto $c\neq 0$; dividendo per $c$ e ponendo $k = a/c$, il piano diventa

$$
kx - 2y + z = 3k.
$$

La condizione di tangenza impone che la distanza da $O$ a tale piano sia uguale al raggio $2$:

$$
\frac{|3k|}{\sqrt{k^2+(-2)^2+1^2}} = 2
\implies \frac{9k^2}{k^2+5} = 4
\implies 9k^2 = 4k^2 + 20
\implies 5k^2 = 20
\implies k^2 = 4,
$$

da cui $k = \pm 2$. Per $k=2$ si ha $2x - 2y + z = 6$; per $k=-2$ si ha $-2x - 2y + z = -6$, cioè $2x + 2y - z = 6$. Entrambi i piani contengono $r$ (sostituendo $x=3, y=t, z=2t$ si ottiene un'identità). Quindi i piani cercati sono

$$
2x - 2y + z - 6 = 0 \quad \text{e} \quad 2x + 2y - z - 6 = 0.
$$
