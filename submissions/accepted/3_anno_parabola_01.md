---
year: 3
macro_area: Geometria Analitica
topic: La parabola
difficulty: 4
tags:
  - coniche
  - vertice
  - fuoco
  - intersezione retta
ai_generated: true
---
# Problem Text
Determina l'equazione della parabola con asse di simmetria parallelo all'asse $y$, avente il vertice in $V(1, -2)$ e passante per il punto $P(2, 0)$. Successivamente, trova i punti di intersezione della parabola trovata con la retta di equazione $y = 2x - 3$.

# Solution
**1. Determinazione dell'equazione della parabola:**
L'equazione generica della parabola con asse parallelo all'asse $y$ avente vertice in $V(x_v, y_v)$ si può scrivere nella forma:
$y - y_v = a(x - x_v)^2$
Sostituendo le coordinate del vertice $V(1, -2)$:
$y - (-2) = a(x - 1)^2 \implies y + 2 = a(x - 1)^2$
Per trovare il parametro $a$, imponiamo il passaggio per $P(2, 0)$:
$0 + 2 = a(2 - 1)^2 \implies 2 = a(1) \implies a = 2$
L'equazione della parabola è quindi:
$y = 2(x - 1)^2 - 2 = 2(x^2 - 2x + 1) - 2 = 2x^2 - 4x + 2 - 2 = 2x^2 - 4x$
Dunque la parabola ha equazione $\Gamma: y = 2x^2 - 4x$.

**2. Intersezione con la retta:**
Mettiamo a sistema l'equazione della parabola e quella della retta $y = 2x - 3$:
$$
\begin{cases}
y = 2x^2 - 4x \\
y = 2x - 3
\end{cases}
$$
Uguagliando le espressioni di $y$:
$2x^2 - 4x = 2x - 3$
$2x^2 - 6x + 3 = 0$
Risolviamo questa equazione di secondo grado in $x$:
$\Delta = (-6)^2 - 4(2)(3) = 36 - 24 = 12$
$x = \frac{6 \pm \sqrt{12}}{4} = \frac{6 \pm 2\sqrt{3}}{4} = \frac{3 \pm \sqrt{3}}{2}$

Quindi le ascisse dei punti di intersezione sono:
$x_1 = \frac{3 - \sqrt{3}}{2}, \quad x_2 = \frac{3 + \sqrt{3}}{2}$

Sostituiamo le ascisse nella retta $y = 2x - 3$ per trovare le ordinate:
$y_1 = 2\left(\frac{3 - \sqrt{3}}{2}\right) - 3 = 3 - \sqrt{3} - 3 = -\sqrt{3}$
$y_2 = 2\left(\frac{3 + \sqrt{3}}{2}\right) - 3 = 3 + \sqrt{3} - 3 = \sqrt{3}$

I punti di intersezione sono $A\left(\frac{3 - \sqrt{3}}{2}, -\sqrt{3}\right)$ e $B\left(\frac{3 + \sqrt{3}}{2}, \sqrt{3}\right)$.
