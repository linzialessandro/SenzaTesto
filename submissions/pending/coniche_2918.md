---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche"
difficulty: 3
tags:
  - "ellisse"
  - "parabola"
  - "tangenza"
  - "vertice"
  - "geometria analitica"
---
# Problem Text
Determinare l'equazione dell'ellisse riferita ai propri assi, della forma:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

tangente alla parabola di equazione $y = -x^2 + 3$ nel suo vertice, sapendo che l'ellisse passa per il punto $P\left(2, \frac{3\sqrt{3}}{2}\right)$.

# Solution
Determiniamo innanzitutto il vertice $V$ della parabola di equazione $y = -x^2 + 3$. Poiché è una parabola con asse verticale e l'ascissa del vertice è $x_V = 0$, il vertice è:

$$
V(0, 3)
$$

La retta tangente alla parabola nel suo vertice $V(0,3)$ è la retta orizzontale di equazione:

$$
y = 3
$$

Affinché l'ellisse sia tangente alla parabola in $V(0,3)$, essa deve passare per $V$ e avere come retta tangente in quel punto proprio la retta $y = 3$. 

Imponendo il passaggio dell'ellisse per $V(0,3)$, otteniamo:

$$
\frac{0^2}{a^2} + \frac{3^2}{b^2} = 1 \implies b^2 = 9
$$

In corrispondenza del vertice dell'ellisse $(0,3)$, la retta tangente è effettivamente la retta orizzontale $y = 3$ (coerente con la tangenza richiesta). L'ellisse ha quindi equazione:

$$
\frac{x^2}{a^2} + \frac{y^2}{9} = 1
$$

Imponiamo ora il passaggio per il punto $P\left(2, \frac{3\sqrt{3}}{2}\right)$ sostituendone le coordinate nell'equazione:

$$
\frac{2^2}{a^2} + \frac{\left(\frac{3\sqrt{3}}{2}\right)^2}{9} = 1
$$

Svolgendo i calcoli:

$$
\frac{4}{a^2} + \frac{\frac{27}{4}}{9} = 1
$$

$$
\frac{4}{a^2} + \frac{3}{4} = 1 \implies \frac{4}{a^2} = \frac{1}{4} \implies a^2 = 16
$$

L'equazione dell'ellisse cercata è pertanto:

$$
\frac{x^2}{16} + \frac{y^2}{9} = 1
$$
