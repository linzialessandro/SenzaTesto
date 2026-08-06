---
year: 5
macro_area: "Geometria Analitica nello Spazio"
topic: "Equazioni di piano e distanza punto-piano"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:15:24+00:00"
tags:
  - "geometria analitica"
  - "piano"
  - "prodotto vettoriale"
  - "distanza punto-piano"
---
# Problem Text
Sia $\pi$ il piano passante per i punti $A(1,-1,2)$, $B(0,2,-1)$ e $C(3,0,1)$. Determina l'equazione cartesiana del piano $\pi$ e calcola la distanza del punto $O(0,0,0)$ da $\pi$.

# Solution
I vettori $\overrightarrow{AB}$ e $\overrightarrow{AC}$ sono:

$$
\overrightarrow{AB} = B - A = (-1,3,-3), \qquad \overrightarrow{AC} = C - A = (2,1,-1).
$$

Un vettore normale al piano $\pi$ è il prodotto vettoriale $\overrightarrow{AB} \times \overrightarrow{AC}$:

$$
\mathbf{n} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -1 & 3 & -3 \\ 2 & 1 & -1 \end{vmatrix} = (0,-7,-7).
$$

Semplificando, possiamo usare $\mathbf{n} = (0,1,1)$ (dividendo per $-7$). L'equazione del piano con normale $\mathbf{n}$ e passante per $A$ è:

$$
0(x-1) + 1(y+1) + 1(z-2) = 0 \quad \Rightarrow \quad y+z-1=0.
$$

La distanza dall'origine $O(0,0,0)$ al piano $y+z-1=0$ è:

$$
d(O,\pi) = \frac{|0+0-1|}{\sqrt{1^2+1^2}} = \frac{1}{\sqrt{2}}.
$$

Quindi il piano ha equazione $y+z-1=0$ e la distanza richiesta è $\dfrac{\sqrt{2}}{2}$.
