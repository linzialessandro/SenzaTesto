---
year: 2
macro_area: "Algebra"
topic: "Sistemi lineari"
difficulty: 5
ai_generated: true
tags:
  - "sistemi lineari"
  - "equazioni parametriche"
  - "regola di Cramer"
  - "discussione parametrica"
---
# Problem Text
Discuti e risolvi, al variare del parametro reale $a$, il seguente sistema lineare nelle incognite $x$ e $y$:

$$
\begin{cases}
(a - 2)x + 2y = a \\
(a^2 - 4)x + (a + 2)y = 4
\end{cases}
$$

# Solution
Per discutere il sistema utilizziamo la regola di Cramer. Calcoliamo il determinante principale $D$ e i determinanti $D_x$ e $D_y$.

Il determinante del sistema è:

$$
D = \begin{vmatrix} a - 2 & 2 \\ a^2 - 4 & a + 2 \end{vmatrix} = (a - 2)(a + 2) - 2(a^2 - 4) = (a^2 - 4) - 2(a^2 - 4) = -(a^2 - 4) = -(a - 2)(a + 2)
$$

I determinanti relativi alle incognite sono:

$$
D_x = \begin{vmatrix} a & 2 \\ 4 & a + 2 \end{vmatrix} = a(a + 2) - 8 = a^2 + 2a - 8 = (a + 4)(a - 2)
$$

$$
D_y = \begin{vmatrix} a - 2 & a \\ a^2 - 4 & 4 \end{vmatrix} = 4(a - 2) - a(a^2 - 4) = (a - 2)[4 - a(a + 2)] = -(a - 2)(a^2 + 2a - 4)
$$

Discutiamo i casi al variare del parametro $a \in \mathbb{R}$:

1. **Caso $a \neq 2 \land a \neq -2$ ($D \neq 0$):**
   Il sistema è **determinato**. Semplificando per il fattore $(a - 2) \neq 0$, otteniamo la soluzione unica $(x, y)$:
   
$$
x = \frac{D_x}{D} = \frac{(a + 4)(a - 2)}{-(a - 2)(a + 2)} = -\frac{a + 4}{a + 2}
$$

   
$$
y = \frac{D_y}{D} = \frac{-(a - 2)(a^2 + 2a - 4)}{-(a - 2)(a + 2)} = \frac{a^2 + 2a - 4}{a + 2}
$$

2. **Caso $a = 2$ ($D = 0, D_x = 0, D_y = 0$):**
   Sostituendo $a = 2$ nel sistema iniziale:
   
$$
\begin{cases}
   0x + 2y = 2 \\
   0x + 4y = 4
   \end{cases}
$$

   Entrambe le equazioni si riducono a $y = 1$. Il sistema è **indeterminato** e l'insieme delle soluzioni è $S = \{(x, 1) \mid x \in \mathbb{R}\}$.

3. **Caso $a = -2$ ($D = 0, D_x = -8 \neq 0$):**
   Sostituendo $a = -2$ nel sistema iniziale:
   
$$
\begin{cases}
   -4x + 2y = -2 \\
   0x + 0y = 4
   \end{cases}
$$

   La seconda equazione $0 = 4$ è un'uguaglianza impossibile. Il sistema è **impossibile** ($S = \emptyset$).
