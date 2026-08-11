---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Equazione del piano passante per tre punti"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:20:59+00:00"
tags:
  - "geometria"
  - "spazio"
  - "piano"
  - "punti"
  - "equazione"
---
# Problem Text
Determina l'equazione cartesiana del piano passante per i punti $A(1,2,3)$, $B(-1,0,2)$ e $C(2,1,-1)$.

# Solution
Calcoliamo i vettori $\vec{AB} = B-A = (-2,-2,-1)$ e $\vec{AC} = C-A = (1,-1,-4)$. Il vettore normale al piano è il prodotto vettoriale $\vec{n} = \vec{AB} \times \vec{AC}$:

$$
\vec{n} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -2 & -2 & -1 \\ 1 & -1 & -4 \end{vmatrix} = \mathbf{i}(8-1) - \mathbf{j}(8+1) + \mathbf{k}(2+2) = 7\mathbf{i} - 9\mathbf{j} + 4\mathbf{k}.
$$

Quindi $\vec{n} = (7, -9, 4)$. L'equazione del piano è $7(x-1) -9(y-2) + 4(z-3) = 0$, che semplificata dà $7x - 9y + 4z - 1 = 0$. Verifica con $A$: $7-18+12-1=0$, corretto.
