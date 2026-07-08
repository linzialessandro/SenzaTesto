---
year: 5
macro_area: "Geometria Analitica"
topic: "Geometria analitica nello spazio"
difficulty: 3
tags:
  - "geometria analitica nello spazio"
  - "superficie sferica"
  - "piano nello spazio"
  - "retta nello spazio"
---
# Problem Text
Determinare l'equazione della superficie sferica tangente al piano $ \pi: 2x - y + 2z - 3 = 0 $ nel punto $ P(1, 1, 1) $ e avente il centro sulla retta $ r $ di equazioni parametriche:

$$
\begin{cases}
x = 3 + t \\
y = t \\
z = 3
\end{cases}
$$

# Solution
Il centro $C$ della sfera tangente al piano $\pi$ nel punto $P$ deve appartenere alla retta $n$ passante per $P$ e perpendicolare a $\pi$. 

I coefficienti dell'equazione cartesiana di $\pi$ forniscono le componenti del vettore normale al piano:

$$
\vec{v}_n = (2, -1, 2)
$$

Le equazioni parametriche della retta $n$ passante per $P(1, 1, 1)$ e con direzione $\vec{v}_n$ sono:

$$
\begin{cases}
x = 1 + 2s \\
y = 1 - s \\
z = 1 + 2s
\end{cases}
$$

Determiniano la posizione del centro $C$ intersecando la retta $n$ con la retta $r$. Uguagliando le coordinate delle due rette, otteniamo il sistema lineare:

$$
\begin{cases}
1 + 2s = 3 + t \\
1 - s = t \\
1 + 2s = 3
\end{cases}
$$

Dalla terza equazione si ricava immediatamente:

$$
2s = 2 \implies s = 1
$$

Sostituendo $s = 1$ nelle prime due equazioni:

$$
\begin{cases}
3 = 3 + t \implies t = 0 \\
0 = t \implies t = 0
\end{cases}
$$

Poiché entrambi i valori sono coerenti, il sistema ammette soluzione unica per $s = 1$ (ovvero $t = 0$). Sostituendo tali parametri, otteniamo le coordinate del centro $C$:

$$
C(3, 0, 3)
$$

Il raggio $R$ della sfera corrisponde alla distanza tra il centro $C$ e il punto di tangenza $P$:

$$
R = \sqrt{(3 - 1)^2 + (0 - 1)^2 + (3 - 3)^2} = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{9} = 3
$$

L'equazione della superficie sferica con centro $C(3, 0, 3)$ e raggio $R = 3$ è data da:

$$
(x - 3)^2 + y^2 + (z - 3)^2 = 3^2
$$

Sviluppando i quadrati si ottiene la forma generale:

$$
x^2 - 6x + 9 + y^2 + z^2 - 6z + 9 = 9
$$

$$
x^2 + y^2 + z^2 - 6x - 6z + 9 = 0
$$
