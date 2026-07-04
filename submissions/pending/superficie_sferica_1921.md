---
year: 5
macro_area: "Geometria analitica"
topic: "Superficie sferica"
difficulty: 3
tags:
  - "geometria nello spazio"
  - "superficie sferica"
  - "piano tangentee"
  - "retta"
  - "intersezione"
---
# Problem Text
Determinare l'equazione della superficie sferica $S$ tangente al piano $\pi$ di equazione $x - 2y + 2z - 3 = 0$ nel punto $T(1, 1, 2)$, sapendo che il suo centro $C$ appartiene alla retta $r$ definita dal sistema:

$$
\begin{cases}
x + 2y = 0 \\
3y + z - 1 = 0
\end{cases}
$$

# Solution
Per determinare l'equazione della superficie sferica $S$, procediamo attraverso i seguenti passaggi geometrici e algebrici:

**1. Individuazione della retta normale al piano**
Una superficie sferica tangente a un piano $\pi$ in un punto $T$ ha la proprietà per cui il suo centro $C$ giace sulla retta $n$ perpendicolare a $\pi$ e passante per $T$.

I coefficienti dell'equazione del piano $\pi: x - 2y + 2z - 3 = 0$ definiscono le componenti del vettore normale al piano stesso:

$$
\vec{v} = (1, -2, 2)
$$

La retta $n$, passante per $T(1, 1, 2)$ e avente come direzione il vettore $\vec{v}$, ha le seguenti equazioni parametriche:

$$
\begin{cases}
x = 1 + t \\
y = 1 - 2t \\
z = 2 + 2t
\end{cases}
$$

con $t \in \mathbb{R}$.

**2. Determinazione del centro $C$**
Il centro $C$ della sfera deve appartenere sia alla retta normale $n$ sia alla retta assegnata $r$. Di conseguenza, $C$ è il punto di intersezione tra le due rette.

Sostituiamo le coordinate parametriche della retta $n$ nelle equazioni cartesiane della retta $r$:

$$
\begin{cases}
(1 + t) + 2(1 - 2t) = 0 \\
3(1 - 2t) + (2 + 2t) - 1 = 0
\end{cases}
$$

Risolviamo la prima equazione:

$$
1 + t + 2 - 4t = 0 \implies 3 - 3t = 0 \implies t = 1
$$

Verifichiamo la coerenza con la seconda equazione sostituendo $t = 1$:

$$
3(1 - 2) + (2 + 2) - 1 = -3 + 4 - 1 = 0
$$

Il sistema è consistente per $t = 1$.

Sostituendo $t = 1$ nelle equazioni parametriche di $n$, otteniamo le coordinate del centro $C$:

$$
C(1 + 1, 1 - 2, 2 + 2) \implies C(2, -1, 4)
$$

**3. Calcolo del raggio $R$**
Il raggio $R$ della superficie sferica è pari alla distanza tra il centro $C(2, -1, 4)$ e il punto di tangenza $T(1, 1, 2)$:

$$
R = d(C, T) = \sqrt{(2 - 1)^2 + (-1 - 1)^2 + (4 - 2)^2}
$$

$$
R = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3
$$

**4. Scrittura dell'equazione della superficie sferica**
L'equazione cartesiana di una superficie sferica con centro $C(x_C, y_C, z_C)$ e raggio $R$ è data da:

$$
(x - x_C)^2 + (y - y_C)^2 + (z - z_C)^2 = R^2
$$

Sostituendo le coordinate di $C(2, -1, 4)$ e $R = 3$:

$$
(x - 2)^2 + (y + 1)^2 + (z - 4)^2 = 3^2
$$

Sviluppiamo i quadrati di binomio per ottenere l'equazione in forma canonica:

$$
x^2 - 4x + 4 + y^2 + 2y + 1 + z^2 - 8z + 16 = 9
$$

$$
x^2 + y^2 + z^2 - 4x + 2y - 8z + 12 = 0
$$

L'equazione della superficie sferica cercata è:

$$
x^2 + y^2 + z^2 - 4x + 2y - 8z + 12 = 0
$$
