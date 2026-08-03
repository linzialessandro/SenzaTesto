---
year: 5
macro_area: "Geometria analitica nello spazio"
topic: "Equazione di un piano"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:45:26+00:00"
tags:
  - "geometria analitica"
  - "spazio"
  - "piano"
  - "vettori"
---
# Problem Text
Determina l'equazione del piano passante per i punti $A(1,2,3)$, $B(2,-1,4)$, $C(0,3,1)$.

# Solution
I vettori direttori del piano sono:

$$
\vec{AB} = B - A = (2-1, \, -1-2, \, 4-3) = (1, -3, 1)
$$

$$
\vec{AC} = C - A = (0-1, \, 3-2, \, 1-3) = (-1, 1, -2)
$$

Un vettore normale al piano è il prodotto vettoriale:

$$
\vec{n} = \vec{AB} \times \vec{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & -3 & 1 \\ -1 & 1 & -2 \end{vmatrix} = (5, 1, -2)
$$

Quindi l'equazione del piano è:

$$
5(x-1) + 1(y-2) - 2(z-3) = 0
$$

Semplificando:

$$
5x + y - 2z - 1 = 0
$$

Si verifica che i tre punti appartengono al piano.
