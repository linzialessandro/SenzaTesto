---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 5
ai_generated: true
tags:
  - "fascio di rette"
  - "distanza punto-retta"
  - "perpendicolarita"
  - "massimo algebrico"
  - "piano cartesiano"
---
# Problem Text
Dato il fascio proprio di rette $r_k$ di equazione

$$
(1+k)x + (2-k)y - 3 - 6k = 0
$$

con $k \in \mathbb{R}$, e il punto $P(1, 2)$, determinare il valore di $k$ per cui la distanza di $P$ dalla retta $r_k$ è massima e verificare algebricamente che la retta corrispondente è perpendicolare al segmento $PC$, dove $C$ indica il centro del fascio.

# Solution
Riscriviamo l'equazione del fascio evidenziando il parametro $k$:

$$
x + 2y - 3 + k(x - y - 6) = 0
$$

Il centro $C$ del fascio si ottiene risolvendo il sistema fra le generatrici:

$$
\begin{cases}
x + 2y - 3 = 0 \\
x - y - 6 = 0
\end{cases}
\implies
\begin{cases}
x = 5 \\
y = -1
\end{cases}
$$

Quindi $C(5, -1)$.

La distanza di $P(1, 2)$ da una generica retta $r_k$ è data da:

$$
d(k) = \frac{|(1+k)\cdot 1 + (2-k)\cdot 2 - 3 - 6k|}{\sqrt{(1+k)^2 + (2-k)^2}} = \frac{|2 - 7k|}{\sqrt{2k^2 - 2k + 5}}
$$

Per trovare il valore massimo di $d(k)$, poniamo $d^2(k) = m$ con $m \ge 0$:

$$
m = \frac{(7k-2)^2}{2k^2 - 2k + 5} \implies (2m - 49)k^2 + (28 - 2m)k + (5m - 4) = 0
$$

Affinché existano valori reali di $k$, il discriminante dell'equazione di secondo grado in $k$ deve essere non negativo ($\Delta \ge 0$):

$$
\Delta = (28 - 2m)^2 - 4(2m - 49)(5m - 4) = -36m^2 + 900m \ge 0
$$

Risolvendo la disequazione $-36m(m - 25) \ge 0$, otteniamo $0 \le m \le 25$. Dunque la distanza massima è $d_{\text{max}} = \sqrt{25} = 5$.

Il valore di $k$ corrispondente a $m = 25$ si trova imponendo $\Delta = 0$:

$$
k = -\frac{28 - 2(25)}{2(2\cdot 25 - 49)} = 11
$$

Verifica geometrica:
- La lunghezza del segmento $PC$ vale:

$$
\overline{PC} = \sqrt{(5-1)^2 + (-1-2)^2} = \sqrt{16 + 9} = 5 = d_{\text{max}}
$$

- Il coefficiente angolare della retta passante per $P$ e $C$ è $m_{PC} = \frac{-1-2}{5-1} = -\frac{3}{4}$.
- Per $k = 11$, la retta ha equazione $12x - 9y - 69 = 0$, ovvero $y = \frac{4}{3}x - \frac{23}{3}$, con coefficiente angolare $m_{r_{11}} = \frac{4}{3}$.

Poiché $m_{PC} \cdot m_{r_{11}} = -\frac{3}{4} \cdot \frac{4}{3} = -1$, la retta di massima distanza è effettivamente perpendicolare a $PC$.
