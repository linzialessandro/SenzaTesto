---
year: 2
macro_area: "Algebra"
topic: "Equazioni parametriche di secondo grado e relazioni tra soluzioni e coefficienti"
difficulty: 2
tags:
  - "equazioni di secondo grado"
  - "equazioni parametriche"
  - "relazioni tra radici e coefficienti"
  - "somma delle soluzioni"
ai_generated: true
---
# Problem Text
Determinare il valore del parametro reale $k$ per cui la somma delle soluzioni dell'equazione $x^2 - (2k-3)x + 5 = 0$ è uguale a $7$, e verificare che per tale valore le soluzioni dell'equazione siano reali.

# Solution
Le relazioni tra i coefficienti di un'equazione di secondo grado della forma $ax^2 + bx + c = 0$ e le sue soluzioni $x_1$ e $x_2$ indicano che la somma delle radici è espressa dalla formula:

$$
x_1 + x_2 = -\frac{b}{a}
$$

Nel nostro caso, i coefficienti dell'equazione sono:

$$
a = 1, \quad b = -(2k-3), \quad c = 5
$$

1. Impostiamo l'uguaglianza richiedendo che la somma delle soluzioni sia pari a $7$:

$$
-\frac{-(2k-3)}{1} = 7 \implies 2k - 3 = 7
$$

2. Risolviamo l'equazione lineare rispetto a $k$:

$$
2k = 10 \implies k = 5
$$

3. Sostituiamo il valore $k = 5$ nell'equazione di partenza per ottenere l'equazione numerica associata:

$$
x^2 - (2 \cdot 5 - 3)x + 5 = 0 \implies x^2 - 7x + 5 = 0
$$

4. Verifichiamo se le soluzioni sono reali calcolando il discriminante $\Delta$:

$$
\Delta = b^2 - 4ac = (-7)^2 - 4 \cdot 1 \cdot 5 = 49 - 20 = 29
$$

5. Poiché $\Delta = 29 > 0$, l'equazione ammette due soluzioni reali e distinte. Di conseguenza, il valore di parametro cercato è accettabile ed è $k = 5$.
