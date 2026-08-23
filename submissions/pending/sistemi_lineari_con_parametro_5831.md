---
year: 2
macro_area: "Sistemi lineari"
topic: "Sistemi lineari con parametro"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:47:51+00:00"
tags:
  - "sistemi lineari"
  - "parametro"
  - "discussione"
  - "Cramer"
---
# Problem Text
Discuti al variare del parametro reale $k$ il sistema lineare $\begin{cases} kx + y = 2 \\ x + ky = 2 \end{cases}$. Determina per quali $k$ il sistema è determinato, indeterminato o impossibile; nei casi determinati, fornisci la soluzione.

# Solution
Il determinante della matrice dei coefficienti è:

$$
\Delta = \begin{vmatrix} k & 1 \\ 1 & k \end{vmatrix} = k^2 - 1.
$$

**Caso 1: $\Delta \neq 0$, cioè $k \neq \pm 1$**  
Il sistema è determinato. Usando la regola di Cramer:

$$
x = \frac{\begin{vmatrix} 2 & 1 \\ 2 & k \end{vmatrix}}{\Delta} = \frac{2k - 2}{k^2 - 1} = \frac{2(k-1)}{(k-1)(k+1)} = \frac{2}{k+1},
$$

$$
y = \frac{\begin{vmatrix} k & 2 \\ 1 & 2 \end{vmatrix}}{\Delta} = \frac{2k - 2}{k^2 - 1} = \frac{2}{k+1}.
$$

Quindi la soluzione è $(x, y) = \left(\frac{2}{k+1}, \frac{2}{k+1}\right)$.

**Caso 2: $k = 1$**  
Il sistema diventa:

$$
\begin{cases} x + y = 2 \\ x + y = 2 \end{cases}
$$

Le due equazioni coincidono, quindi il sistema è indeterminato. Le soluzioni sono $(x, y) = (t, 2-t)$ per ogni $t \in \mathbb{R}$.

**Caso 3: $k = -1$**  
Il sistema diventa:

$$
\begin{cases} -x + y = 2 \\ x - y = 2 \end{cases}
$$

Dalla prima equazione si ricava $x - y = -2$, mentre la seconda richiede $x - y = 2$. Contraddizione, quindi il sistema è impossibile.

**Conclusione:**  
- Per $k \neq \pm 1$: sistema determinato con soluzione $\left(\frac{2}{k+1}, \frac{2}{k+1}\right)$.
- Per $k = 1$: sistema indeterminato con infinite soluzioni $(t, 2-t)$.
- Per $k = -1$: sistema impossibile.
