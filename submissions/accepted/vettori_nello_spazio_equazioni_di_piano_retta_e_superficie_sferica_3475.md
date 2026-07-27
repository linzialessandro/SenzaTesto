---
year: 5
macro_area: "Geometria Analitica nello Spazio"
topic: "Vettori nello spazio, equazioni di piano, retta e superficie sferica"
difficulty: 3
ai_generated: true
tags:
  - "geometria analitica nello spazio"
  - "piano"
  - "retta"
  - "superficie sferica"
  - "tangenza"
---
# Problem Text
Nello spazio euclideo $\mathbb{R}^3$, si considerino il piano $\pi$ di equazione $2x - y + 2z - 6 = 0$ e la retta $r$ di equazioni parametriche:

$$
\begin{cases} x = 3 + t \\ y = -1 + 2t \\ z = 4 - t \end{cases} \quad (t \in \mathbb{R})
$$

Determinare l'equazione cartesiana della superficie sferica $S$ avente il centro giacente sulla retta $r$ e risultante tangente al piano $\pi$ nel punto $P(1, 0, 2)$.

# Solution
Verifichiamo che $P(1, 0, 2) \in \pi$:

$$
2(1) - 0 + 2(2) - 6 = 0
$$

Poiché la superficie sferica $S$ è tangente a $\pi$ nel punto $P$, il suo centro $C$ appartiene alla retta $n$ passante per $P$ e perpendicolare al piano $\pi$. Il vettore normale a $\pi$ è $\vec{n}_\pi = (2, -1, 2)$, pertanto l'equazione parametrica della retta $n$ è:

$$
\begin{cases} x = 1 + 2s \\ y = -s \\ z = 2 + 2s \end{cases} \quad (s \in \mathbb{R})
$$

Il centro $C$ appartiene all'intersezione tra le rette $n$ ed $r$ ($C = n \cap r$). Uguagliando le coordinate parametriche si ottiene il sistema lineare:

$$
\begin{cases} 1 + 2s = 3 + t \\ -s = -1 + 2t \\ 2 + 2s = 4 - t \end{cases} \implies \begin{cases} 2s - t = 2 \\ s + 2t = 1 \\ 2s + t = 2 \end{cases}
$$

Sottraendo la prima equazione dalla terza si ricava $2t = 0 \implies t = 0$. Sostituendo $t = 0$, otteniamo $s = 1$, valore che soddisfa anche la seconda equazione ($1 + 0 = 1$).
Le coordinate del centro sono dunque $C(3, -1, 4)$.

Il raggio $R$ della sfera equivale alla distanza $CP$:

$$
R = d(C,P) = \sqrt{(3-1)^2 + (-1-0)^2 + (4-2)^2} = \sqrt{4 + 1 + 4} = 3
$$

L'equazione cartesiana della superficie sferica $S$ è quindi:

$$
(x - 3)^2 + (y + 1)^2 + (z - 4)^2 = 9
$$

o, sviluppando i quadrati:

$$
x^2 + y^2 + z^2 - 6x + 2y - 8z + 17 = 0
$$
