---
year: 2
macro_area: "Algebra"
topic: "Sistemi lineari"
difficulty: 5
ai_generated: true
tags:
  - "sistemi lineari"
  - "regola di Cramer"
  - "discussione parametrica"
  - "disequazioni fratte"
---
# Problem Text
Al variare del parametro reale $a$, discuti le soluzioni del seguente sistema lineare nelle incognite $x$ e $y$ e determina per quali valori di $a$ l'eventuale soluzione unica $(x, y)$ soddisfa la disequazione $x + y > 1$:

$$
\begin{cases}
a x + 2 y = a + 2 \\
2 x + a y = 4
\end{cases}
$$

# Solution
Calcoliamo i determinanti del sistema mediante la regola di Cramer:

$$
D = \begin{vmatrix} a & 2 \\ 2 & a \end{vmatrix} = a^2 - 4 = (a - 2)(a + 2)
$$

$$
D_x = \begin{vmatrix} a + 2 & 2 \\ 4 & a \end{vmatrix} = a(a + 2) - 8 = a^2 + 2a - 8 = (a + 4)(a - 2)
$$

$$
D_y = \begin{vmatrix} a & a + 2 \\ 2 & 4 \end{vmatrix} = 4a - 2(a + 2) = 2a - 4 = 2(a - 2)
$$

**1. Discussione del sistema:**

- **Caso $a \neq 2$ e $a \neq -2$ ($D \neq 0$):**
  Il sistema è **determinato**. L'unica soluzione è data da:
  
$$
x = \frac{D_x}{D} = \frac{(a+4)(a-2)}{(a+2)(a-2)} = \frac{a+4}{a+2}
$$

  
$$
y = \frac{D_y}{D} = \frac{2(a-2)}{(a+2)(a-2)} = \frac{2}{a+2}
$$

- **Caso $a = 2$:**
  Abbiamo $D = 0$, $D_x = 0$ e $D_y = 0$. Il sistema è **indeterminato** e ammette infinite soluzioni della forma $(x, 2 - x)$ con $x \in \mathbb{R}$.

- **Caso $a = -2$:**
  Abbiamo $D = 0$, mentre $D_x = -8 \neq 0$ e $D_y = -8 \neq 0$. Il sistema è **impossibile** (nessuna soluzione).

**2. Condizione $x + y > 1$:**

Sostituiamo la soluzione unica trovata nel caso determinato:

$$
\frac{a+4}{a+2} + \frac{2}{a+2} > 1
$$

$$
\frac{a+6}{a+2} - 1 > 0 \iff \frac{a+6 - (a+2)}{a+2} > 0 \iff \frac{4}{a+2} > 0
$$

Poiché il numeratore $4$ è strettamente positivo, la frazione algebrica è positiva se e solo se il denominatore è positivo:

$$
a + 2 > 0 \iff a > -2
$$

Tenendo conto delle condizioni di esistenza della soluzione unica ($a \neq -2$ e $a \neq 2$), i valori del parametro $a$ richiesti sono:

$$
a > -2 \quad \text{con } a \neq 2 \quad \text{ovvero} \quad a \in (-2, 2) \cup (2, +\infty)
$$
