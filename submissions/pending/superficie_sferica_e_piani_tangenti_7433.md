---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Superficie sferica e piani tangenti"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:55:33+00:00"
tags:
  - "sfere"
  - "piani"
  - "distanza punto-piano"
  - "completamento dei quadrati"
---
# Problem Text
Determina le equazioni dei piani tangenti alla sfera di equazione $x^2+y^2+z^2-2x+4y-6z-11=0$ e paralleli al piano $\pi: 2x-2y+z=0$.

# Solution
Riscriviamo l'equazione della sfera completando i quadrati:

$$
x^2-2x + y^2+4y + z^2-6z = 11
$$

$$
(x-1)^2 - 1 + (y+2)^2 - 4 + (z-3)^2 - 9 = 11
$$

$$
(x-1)^2 + (y+2)^2 + (z-3)^2 = 25
$$

Quindi il centro è $C(1, -2, 3)$ e il raggio è $R=5$.

Un piano parallelo a $\pi$ ha equazione $2x-2y+z+d=0$ (stesso vettore normale $\vec{n}=(2,-2,1)$). Per essere tangente alla sfera, la distanza di $C$ dal piano deve essere uguale a $R$. Calcoliamo:

$$
d(C, \text{piano}) = \frac{|2\cdot 1 - 2\cdot(-2) + 1\cdot 3 + d|}{\sqrt{2^2+(-2)^2+1^2}} = \frac{|2+4+3+d|}{\sqrt{4+4+1}} = \frac{|9+d|}{3}
$$

Impongo $d(C, \text{piano}) = 5$:

$$
\frac{|9+d|}{3} = 5 \quad \Rightarrow \quad |9+d| = 15
$$

Quindi $9+d = 15$ oppure $9+d = -15$, da cui $d=6$ oppure $d=-24$.

Le equazioni dei piani tangenti sono quindi:

$$
2x-2y+z+6=0 \quad \text{e} \quad 2x-2y+z-24=0
$$
