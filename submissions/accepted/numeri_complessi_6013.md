---
year: 5
macro_area: "Algebra"
topic: "Numeri complessi"
difficulty: 3
tags:
  - "numeri complessi"
  - "equazioni"
  - "forma esponenziale"
  - "forma algebrica"
ai_generated: true
---
# Problem Text
Determina tutte le soluzioni complesse dell'equazione:

$$
z^3 \cdot \bar{z} = -8 - 8i\sqrt{3}
$$

esprimendole in forma algebrica.

# Solution
Rappresentiamo il numero complesso $z$ in forma esponenziale:

$$
z = r e^{i\theta}
$$

con $r \ge 0$ e $\theta \in [0, 2\pi)$. Il suo coniugato è $\bar{z} = r e^{-i\theta}$.

Sostituendo nell'equazione di partenza, otteniamo:

$$
(r e^{i\theta})^3 \cdot (r e^{-i\theta}) = -8 - 8i\sqrt{3}
$$

$$
r^3 e^{3i\theta} \cdot r e^{-i\theta} = -8 - 8i\sqrt{3}
$$

$$
r^4 e^{i(2\theta)} = -8 - 8i\sqrt{3}
$$

Esprimiamo ora il secondo membro dell'equazione, $w = -8 - 8i\sqrt{3}$, in forma esponenziale. Il modulo di $w$ è:

$$
|w| = \sqrt{(-8)^2 + (-8\sqrt{3})^2} = \sqrt{64 + 192} = \sqrt{256} = 16
$$

L'argomento principale $\phi \in [0, 2\pi)$ soddisfa:

$$
\cos\phi = -\frac{8}{16} = -\frac{1}{2}, \quad \sin\phi = -\frac{8\sqrt{3}}{16} = -\frac{\sqrt{3}}{2}
$$

da cui ricaviamo $\phi = \frac{4\pi}{3}$. Dunque:

$$
w = 16 e^{i\frac{4\pi}{3}}
$$

Uguagliando i moduli e gli argomenti nei due membri, otteniamo il sistema:

$$
\begin{cases} r^4 = 16 \\ 2\theta = \frac{4\pi}{3} + 2k\pi \end{cases}
$$

con $k \in \mathbb{Z}$.

Poiché il modulo $r$ deve essere non negativo, la prima equazione fornisce $r = 2$.
Dalla seconda equazione, dividendo per $2$, si ha:

$$
\theta = \frac{2\pi}{3} + k\pi
$$

Per ottenere i valori distinti di $\theta$ nell'intervallo $[0, 2\pi)$, poniamo:
- Per $k=0$: $\theta_0 = \frac{2\pi}{3}$
- Per $k=1$: $\theta_1 = \frac{2\pi}{3} + \pi = \frac{5\pi}{3}$

Sostituendo $r$ e gli angoli trovati nella forma trigonometrica $z = r(\cos\theta + i\sin\theta)$, determiniamo le soluzioni in forma algebrica:

- Per $\theta_0 = \frac{2\pi}{3}$:

$$
z_0 = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3}
$$

- Per $\theta_1 = \frac{5\pi}{3}$:

$$
z_1 = 2\left(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right) = 2\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}
$$

Le soluzioni dell'equazione sono dunque:

$$
z_0 = -1 + i\sqrt{3}, \quad z_1 = 1 - i\sqrt{3}
$$
