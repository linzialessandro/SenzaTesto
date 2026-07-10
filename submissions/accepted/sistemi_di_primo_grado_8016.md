---
year: 2
macro_area: "Algebra"
topic: "Sistemi di primo grado"
difficulty: 1
tags:
  - "sistemi lineari"
  - "regola di Cramer"
  - "algebra"
  - "secondo anno"
ai_generated: true
---
# Problem Text
Risolvi il seguente sistema lineare utilizzando la regola di Cramer:

$$
\begin{cases}
2x - 3y = 4 \\
3x + 2y = 19
\end{cases}
$$

# Solution
Calcoliamo il determinante della matrice dei coefficienti $D$:

$$
D = \begin{vmatrix} 2 & -3 \\ 3 & 2 \end{vmatrix} = 2 \cdot 2 - (-3) \cdot 3 = 4 + 9 = 13
$$

Poiché $D \neq 0$, il sistema è determinato.

Calcoliamo il determinante associato alla variabile $x$, indicato con $D_x$, sostituendo la colonna dei termini noti alla colonna dei coefficienti di $x$:

$$
D_x = \begin{vmatrix} 4 & -3 \\ 19 & 2 \end{vmatrix} = 4 \cdot 2 - (-3) \cdot 19 = 8 + 57 = 65
$$

Calcoliamo il determinante associato alla variabile $y$, indicato con $D_y$, sostituendo la colonna dei termini noti alla colonna dei coefficienti di $y$:

$$
D_y = \begin{vmatrix} 2 & 4 \\ 3 & 19 \end{vmatrix} = 2 \cdot 19 - 4 \cdot 3 = 38 - 12 = 26
$$

Troviamo le soluzioni per $x$ e $y$ dividendo i rispettivi determinanti per $D$:

$$
x = \frac{D_x}{D} = \frac{65}{13} = 5
$$

$$
y = \frac{D_y}{D} = \frac{26}{13} = 2
$$

La soluzione del sistema è la coppia ordinata:

$$
(x, y) = (5, 2)
$$
