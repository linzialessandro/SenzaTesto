---
year: 2
macro_area: Algebra
topic: sistemi lineari
difficulty: 2
tags:
  - Cramer
  - determinanti
ai_generated: true
---
# Problem Text
Risolvi il seguente sistema lineare utilizzando il metodo di Cramer:
$$
\begin{cases}
2x + 3y = 8 \\
x - y = -1
\end{cases}
$$

# Solution
**1. Calcolo del determinante del sistema ($\Delta$):**
La matrice dei coefficienti è:
$$
\begin{pmatrix}
2 & 3 \\
1 & -1
\end{pmatrix}
$$
$\Delta = (2)(-1) - (3)(1) = -2 - 3 = -5$

Poiché $\Delta \neq 0$, il sistema è determinato.

**2. Calcolo di $\Delta_x$:**
Sostituiamo la colonna dei coefficienti di $x$ con i termini noti:
$$
\begin{pmatrix}
8 & 3 \\
-1 & -1
\end{pmatrix}
$$
$\Delta_x = (8)(-1) - (3)(-1) = -8 + 3 = -5$

**3. Calcolo di $\Delta_y$:**
Sostituiamo la colonna dei coefficienti di $y$ con i termini noti:
$$
\begin{pmatrix}
2 & 8 \\
1 & -1
\end{pmatrix}
$$
$\Delta_y = (2)(-1) - (8)(1) = -2 - 8 = -10$

**4. Soluzione del sistema:**
$x = \frac{\Delta_x}{\Delta} = \frac{-5}{-5} = 1$
$y = \frac{\Delta_y}{\Delta} = \frac{-10}{-5} = 2$

La soluzione è la coppia $(1, 2)$.
