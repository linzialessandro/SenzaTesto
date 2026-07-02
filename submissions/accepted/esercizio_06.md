---
year: 2
macro_area: Aritmetica e Algebra
topic: Sistemi lineari
difficulty: 4
tags:
  - metodo di cramer
  - parametro
  - discussione
---
# Problem Text
Risolvi il seguente sistema lineare con il metodo di Cramer. Discuti inoltre per quali valori del parametro $k \in \mathbb{R}$ il sistema risulta indeterminato o impossibile.
$$
\begin{cases}
kx + y = 2 \\
4x + ky = k + 2
\end{cases}
$$

# Solution
Calcoliamo il determinante della matrice incompleta del sistema ($\Delta$):
$$
\Delta = \begin{vmatrix} k & 1 \\ 4 & k \end{vmatrix} = (k)(k) - (1)(4) = k^2 - 4
$$

Calcoliamo il determinante per l'incognita $x$ ($\Delta_x$), sostituendo la colonna dei termini noti alla colonna dei coefficienti di $x$:
$$
\Delta_x = \begin{vmatrix} 2 & 1 \\ k+2 & k \end{vmatrix} = (2)(k) - (1)(k+2) = 2k - k - 2 = k - 2
$$

Calcoliamo il determinante per l'incognita $y$ ($\Delta_y$), sostituendo la colonna dei termini noti alla colonna dei coefficienti di $y$:
$$
\Delta_y = \begin{vmatrix} k & 2 \\ 4 & k+2 \end{vmatrix} = k(k+2) - (2)(4) = k^2 + 2k - 8
$$
Scomponendo questo trinomio, troviamo due numeri con somma $2$ e prodotto $-8$, che sono $4$ e $-2$:
$$
\Delta_y = (k+4)(k-2)
$$

**Discussione del sistema:**

**1. Caso $\Delta \neq 0$ (Sistema determinato):**
Affinché il sistema ammetta una soluzione unica, deve essere $k^2 - 4 \neq 0$, da cui $k \neq 2$ e $k \neq -2$.
Le soluzioni, per il Teorema di Cramer, sono date da:
$$
x = \frac{\Delta_x}{\Delta} = \frac{k-2}{(k-2)(k+2)} = \frac{1}{k+2}
$$
$$
y = \frac{\Delta_y}{\Delta} = \frac{(k+4)(k-2)}{(k-2)(k+2)} = \frac{k+4}{k+2}
$$

**2. Caso $\Delta = 0$ ($k = 2$ oppure $k = -2$):**

- **Se $k = 2$:**
  Sostituendo nei determinanti:
  $\Delta = 2^2 - 4 = 0$
  $\Delta_x = 2 - 2 = 0$
  $\Delta_y = (2+4)(2-2) = 0$
  Essendo $\Delta = \Delta_x = \Delta_y = 0$, il sistema risulta **indeterminato** (ammette infinite soluzioni).
  Sostituendo $k=2$ nel sistema originario, notiamo infatti che le due equazioni sono proporzionali: $\begin{cases} 2x + y = 2 \\ 4x + 2y = 4 \end{cases}$ che equivale a un'unica equazione lineare in due incognite.

- **Se $k = -2$:**
  Sostituendo nei determinanti:
  $\Delta = (-2)^2 - 4 = 0$
  $\Delta_x = -2 - 2 = -4 \neq 0$
  Poiché il determinante principale è nullo $\Delta = 0$ ma $\Delta_x \neq 0$, il sistema è **impossibile** (non ammette alcuna soluzione). Le due rette che compongono il sistema sono parallele e distinte.
