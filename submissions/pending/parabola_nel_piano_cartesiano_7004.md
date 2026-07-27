---
year: 3
macro_area: "Geometria Analitica"
topic: "Parabola nel piano cartesiano"
difficulty: 3
ai_generated: true
tags:
  - "Parabola"
  - "Tangente"
  - "Fuoco"
  - "Direttrice"
  - "Condizione di tangenza"
---
# Problem Text
Determinare il valore del parametro reale $k$ per cui la retta di equazione $r: y = 2x + k$ è tangente alla parabola $\mathcal{P}$ avente fuoco in $F\left(1, \frac{7}{4}\right)$ e direttrice $d: y = \frac{9}{4}$, individuando inoltre le coordinate del punto di tangenza $T$.

# Solution
Per definizione, la parabola $\mathcal{P}$ è il luogo geometrico dei punti $P(x,y)$ equidistanti dal fuoco $F$ e dalla direttrice $d$:

$$
\overline{PF} = d(P,d) \implies \sqrt{(x-1)^2 + \left(y-\frac{7}{4}\right)^2} = \left|y - \frac{9}{4}\right|
$$

Elevando al quadrato ed effettuando i calcoli algebrici:

$$
(x-1)^2 + y^2 - \frac{7}{2}y + \frac{49}{16} = y^2 - \frac{9}{2}y + \frac{81}{16}
$$

Semplificando e isolando $y$, si ottiene l'equazione cartesiana della parabola:

$$
(x-1)^2 + y - 2 = 0 \implies y = -x^2 + 2x + 1
$$

Per determinare il punto di tangenza con la retta $r: y = 2x + k$, impostiamo il sistema tra le due equazioni:

$$
\begin{cases} y = -x^2 + 2x + 1 \\ y = 2x + k \end{cases}
$$

Sostituendo l'espressione di $y$ della seconda nell'equazione della parabola, otteniamo l'equazione di secondo grado risolvente:

$$
-x^2 + 2x + 1 = 2x + k \implies x^2 + k - 1 = 0
$$

Imponiamo la condizione di tangenza ponendo a zero il discriminante dell'equazione risolvente ($\Delta = 0$):

$$
\Delta = -4(k-1) = 0 \implies k = 1
$$

Sostituendo $k = 1$ nell'equazione risolvente, ricaviamo l'ascissa del punto di tangenza $T$:

$$
x^2 = 0 \implies x_T = 0
$$

Sostituiamo infine $x_T = 0$ nell'equazione della retta tangente $y = 2x + 1$ per determinare l'ordinata:

$$
y_T = 2(0) + 1 = 1
$$

La retta tangente cercata è dunque $y = 2x + 1$ e il punto di tangenza è $T(0,1)$.
