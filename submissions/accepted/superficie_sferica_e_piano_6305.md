---
year: 5
macro_area: "Geometria Analitica nello Spazio"
topic: "Superficie Sferica e Piano"
difficulty: 3
tags:
  - "superficie sferica"
  - "piano"
  - "retta nello spazio"
  - "intersezione"
  - "circonferenza nello spazio"
---
# Problem Text
Determinare il centro $H$ e il raggio $r$ della circonferenza ottenuta dall'intersezione tra la superficie sferica $S$ di equazione $x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$ e il piano $\pi$ di equazione $2x - y + 2z - 1 = 0$.

# Solution
Iniziamo determinando il centro $C$ e il raggio $R$ della sfera $S$. L'equazione generale $x^2+y^2+z^2+ax+by+cz+d=0$ ha centro $C\left(-\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2}\right)$ e raggio $R = \sqrt{x_C^2+y_C^2+z_C^2-d}$. Nel nostro caso, si ottiene:

$$
C(1, -2, 3)
$$

$$
R = \sqrt{1^2 + (-2)^2 + 3^2 - (-2)} = \sqrt{1 + 4 + 9 + 2} = \sqrt{16} = 4
$$

Calcoliamo ora la distanza $d$ del centro $C$ dal piano $\pi$, usando la formula della distanza punto-piano:

$$
d = \frac{|2(1) - (-2) + 2(3) - 1|}{\sqrt{2^2 + (-1)^2 + 2^2}} = \frac{|2 + 2 + 6 - 1|}{\sqrt{9}} = \frac{9}{3} = 3
$$

Poiché $d = 3 < R = 4$, il piano interseca la sfera lungo una circonferenza di raggio $r$ pari a:

$$
r = \sqrt{R^2 - d^2} = \sqrt{16 - 9} = \sqrt{7}
$$

Il centro $H$ della circonferenza è la proiezione ortogonale di $C$ su $\pi$, ottenuta intersecando $\pi$ con la retta perpendicolare a esso passante per $C$. Il vettore normale del piano è $\vec{n} = (2, -1, 2)$, che funge da direzione per la retta:

$$
\begin{cases}
x = 1 + 2t \\
y = -2 - t \\
z = 3 + 2t
\end{cases}
$$

Sostituendo queste espressioni parametriche nell'equazione del piano $\pi$, determiniamo il valore del parametro $t$:

$$
2(1 + 2t) - (-2 - t) + 2(3 + 2t) - 1 = 0
$$

$$
2 + 4t + 2 + t + 6 + 4t - 1 = 0 \implies 9t + 9 = 0 \implies t = -1
$$

Sostituendo $t = -1$ nelle equazioni della retta, otteniamo le coordinate del centro $H$:

$$
H(1 + 2(-1), -2 - (-1), 3 + 2(-1)) = H(-1, -1, 1)
$$

In conclusione, la circonferenza ha centro $H(-1, -1, 1)$ e raggio $r = \sqrt{7}$.
