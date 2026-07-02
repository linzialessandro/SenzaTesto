---
year: 2
macro_area: Sistemi lineari
topic: Metodo di Cramer
difficulty: 4
tags:
  - sistemi lineari
  - cramer
  - parametrico
---
# Problem Text

Dato il seguente sistema lineare dipendente dal parametro reale $k$:
$$
\begin{cases}
kx + y = 2 \
x + ky = k+1
\end{cases}
$$
Discutere la risolubilità del sistema al variare di $k \in \mathbb{R}$ e risolverlo nei casi in cui è determinato, utilizzando il metodo di Cramer.

# Solution

**1. Calcolo del determinante della matrice dei coefficienti ($D$):**
La matrice dei coefficienti è:
$$
A = \begin{pmatrix} k & 1 \ 1 & k \end{pmatrix}
$$
Il determinante $D$ è dato da:
$$
D = (k)(k) - (1)(1) = k^2 - 1 = (k-1)(k+1)
$$
Il sistema è **determinato** se e solo se $D \neq 0$, ovvero per $k \neq 1$ e $k \neq -1$.

**2. Discussione per $k = 1$:**
Se $k = 1$, il sistema diventa:
$$
\begin{cases}
x + y = 2 \
x + y = 2
\end{cases}
$$
Le due equazioni sono identiche. Il sistema è **indeterminato** (ammette infinite soluzioni).

**3. Discussione per $k = -1$:**
Se $k = -1$, il sistema diventa:
$$
\begin{cases}
-x + y = 2 \
x - y = 0
\end{cases}
$$
Sommando membro a membro otteniamo $0 = 2$, che è falso. Il sistema è **impossibile**.

**4. Soluzione per $k \neq \pm 1$ (metodo di Cramer):**
Calcoliamo $D_x$ sostituendo la colonna dei termini noti alla colonna delle $x$:
$$
D_x = \det \begin{pmatrix} 2 & 1 \ k+1 & k \end{pmatrix} = 2k - 1(k+1) = k - 1
$$
Calcoliamo $D_y$ sostituendo la colonna dei termini noti alla colonna delle $y$:
$$
D_y = \det \begin{pmatrix} k & 2 \ 1 & k+1 \end{pmatrix} = k(k+1) - 2 = k^2 + k - 2
$$
Notiamo che $k^2 + k - 2$ può essere scomposto come $(k-1)(k+2)$.

Le soluzioni per $x$ e $y$ sono date da:
$$
x = \frac{D_x}{D} = \frac{k-1}{(k-1)(k+1)} = \frac{1}{k+1}
$$
$$
y = \frac{D_y}{D} = \frac{(k-1)(k+2)}{(k-1)(k+1)} = \frac{k+2}{k+1}
$$

**Conclusione:**
- Per $k = 1$: sistema indeterminato.
- Per $k = -1$: sistema impossibile.
- Per $k \neq \pm 1$: sistema determinato, con soluzione $\left(\frac{1}{k+1}, \frac{k+2}{k+1} \right)$.
