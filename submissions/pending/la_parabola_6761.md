---
year: 3
macro_area: "Geometria Analitica"
topic: "La parabola"
difficulty: 5
ai_generated: true
tags:
  - "parabola"
  - "tangenti"
  - "fascio di rette"
  - "perpendicolarit\u00e0"
  - "parametri"
---
# Problem Text
Al variare del parametro reale $k \neq 0$, si consideri la parabola $\mathcal{P}_k$ di equazione $y = kx^2 - 2kx + 1$. Determinare i valori di $k$ per i quali le rette condotte dal punto $P(1, -3)$ e tangenti a $\mathcal{P}_k$ risultano tra loro perpendicolari.

# Solution
Le rette passanti per il punto $P(1, -3)$ formano il fascio proprio di equazione $y + 3 = m(x - 1)$, ossia:

$$
y = mx - m - 3
$$

La retta verticale $x = 1$ non può essere tangente a una parabola con asse verticale.

Impostiamo il sistema tra l'equazione della parabola e quella del fascio di rette:

$$
\begin{cases}
y = kx^2 - 2kx + 1 \\
y = mx - m - 3
\end{cases}
$$

Uguagliando le due espressioni per $y$, otteniamo l'equazione risolvente:

$$
kx^2 - (2k + m)x + (m + 4) = 0
$$

La condizione di tangenza impone che il discriminante sia nullo ($\Delta = 0$):

$$
\Delta = (2k + m)^2 - 4k(m + 4) = 0
$$

Sviluppando i calcoli:

$$
4k^2 + 4km + m^2 - 4km - 16k = 0 \implies m^2 + 4k^2 - 16k = 0
$$

da cui si ricava:

$$
m^2 = 16k - 4k^2
$$

Affinché esistano due tangenti reali e distinte, occorre che $m^2 > 0$, cioè $4k(4 - k) > 0$, verificata per $0 < k < 4$.

Le due pendenze $m_1$ ed $m_2$ delle rette tangenti sono soluzioni dell'equazione $m^2 = 16k - 4k^2$, ovvero $m^2 - (16k - 4k^2) = 0$. Il loro prodotto è il termine noto:

$$
m_1 \cdot m_2 = 4k^2 - 16k
$$

Affinché le due rette tangenti siano perpendicolari, la condizione sui coefficienti angolari è $m_1 \cdot m_2 = -1$:

$$
4k^2 - 16k = -1 \implies 4k^2 - 16k + 1 = 0
$$

Risolvendo l'equazione di secondo grado in $k$ con la formula ridotta:

$$
k = \frac{8 \pm \sqrt{64 - 4}}{4} = \frac{8 \pm \sqrt{60}}{4} = \frac{4 \pm \sqrt{15}}{2}
$$

Poiché $3 < \sqrt{15} < 4$, entrambi i valori trovati ($k_1 = \frac{4 - \sqrt{15}}{2} \approx 0{,}0635$ e $k_2 = \frac{4 + \sqrt{15}}{2} \approx 3{,}9365$) appartengono all'intervallo di ammissibilità $(0, 4)$ e costituiscono le soluzioni del problema.
