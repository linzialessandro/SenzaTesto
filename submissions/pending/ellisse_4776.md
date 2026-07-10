---
year: 3
macro_area: "Geometria analitica"
topic: "Ellisse"
difficulty: 3
tags:
  - "ellisse"
  - "tangente"
  - "geometria analitica"
  - "coniche"
---
# Problem Text
Determinare l'equazione dell'ellisse riferita ai propri assi, con i fuochi sull'asse $x$, passante per il punto $P(3, -1)$ e tangente alla retta di equazione $x + 3y - 6 = 0$.

# Solution
L'equazione canonica di un'ellisse riferita ai propri assi con i fuochi sull'asse $x$ è:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

con $a^2 > b^2 > 0$.

Imponiamo il passaggio per il punto $P(3, -1)$, ottenendo la prima relazione:

$$
\frac{9}{a^2} + \frac{1}{b^2} = 1
$$

Per imporre la condizione di tangenza, isoliamo $x$ dall'equazione della retta, $x = 6 - 3y$, e sostituiamola nell'equazione dell'ellisse:

$$
\frac{(6 - 3y)^2}{a^2} + \frac{y^2}{b^2} = 1
$$

Sviluppando i calcoli e moltiplicando entrambi i membri per $a^2 b^2$, otteniamo l'equazione associata:

$$
(a^2 + 9b^2)y^2 - 36b^2y + b^2(36 - a^2) = 0
$$

Imponiamo che il discriminante dell'equazione di secondo grado in $y$ sia nullo ($\Delta/4 = 0$):

$$
(18b^2)^2 - (a^2 + 9b^2)b^2(36 - a^2) = 0
$$

Svolgendo i passaggi algebrici:

$$
324b^4 - b^2(36a^2 - a^4 + 324b^2 - 9a^2b^2) = 0
$$

$$
a^2b^2(a^2 + 9b^2 - 36) = 0
$$

Poiché $a^2 \neq 0$ e $b^2 \neq 0$, si ricava la seconda relazione fondamentale:

$$
a^2 + 9b^2 = 36
$$

Risolviamo ora il sistema formato dalle due relazioni trovate:

$$
\begin{cases}
\frac{9}{a^2} + \frac{1}{b^2} = 1 \\
a^2 + 9b^2 = 36
\end{cases}
$$

Dalla prima equazione, moltiplicando per $a^2b^2$, si ha:

$$
9b^2 + a^2 = a^2b^2
$$

Sostituendo in essa la seconda relazione $a^2 + 9b^2 = 36$, si ottiene:

$$
a^2b^2 = 36 \implies b^2 = \frac{36}{a^2}
$$

Sostituiamo $b^2$ in $a^2 + 9b^2 = 36$:

$$
a^2 + \frac{324}{a^2} = 36 \implies a^4 - 36a^2 + 324 = 0
$$

Questa è un'equazione biquadratica che si risolve come quadrato di un binomio:

$$
(a^2 - 18)^2 = 0 \implies a^2 = 18
$$

Di conseguenza:

$$
b^2 = \frac{36}{18} = 2
$$

Verifichiamo che $a^2 = 18 > b^2 = 2$, coerentemente con l'ipotesi che i fuochi si trovino sull'asse $x$.

L'equazione richiesta è dunque:

$$
\frac{x^2}{18} + \frac{y^2}{2} = 1
$$
