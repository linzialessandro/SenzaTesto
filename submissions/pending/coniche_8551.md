---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche"
difficulty: 3
tags:
  - "parabola"
  - "circonferenza"
  - "fuoco"
  - "intersezione"
  - "geometria analitica"
---
# Problem Text
Determinare l'equazione della circonferenza avente il centro nel fuoco della parabola di equazione $y = -x^2 + 2x + 3$ e passante per i suoi punti di intersezione con l'asse delle ascisse.

# Solution
1. **Determinazione dei punti di intersezione tra la parabola e l'asse delle ascisse ($y=0$):**

Sostituiamo $y=0$ nell'equazione della parabola per trovare le ascisse dei punti di intersezione:

$$
-x^2 + 2x + 3 = 0
$$

Moltiplicando per $-1$:

$$
x^2 - 2x - 3 = 0
$$

Risolvendo l'equazione di secondo grado:

$$
x = \frac{2 \pm \sqrt{4 - 4(1)(-3)}}{2} = \frac{2 \pm 4}{2}
$$

Otteniamo quindi le due soluzioni:

$$
x_1 = -1, \quad x_2 = 3
$$

I due punti di intersezione sono $A(-1, 0)$ e $B(3, 0)$.

2. **Calcolo delle coordinate del fuoco $F$ della parabola:**

Data la parabola $y = ax^2 + bx + c$ con $a = -1$, $b = 2$, $c = 3$, calcoliamo il discriminante $\Delta$:

$$
\Delta = b^2 - 4ac = 4 - 4(-1)(3) = 16
$$

Il fuoco $F(x_F, y_F)$ ha coordinate:

$$
x_F = -\frac{b}{2a} = -\frac{2}{2(-1)} = 1
$$

$$
y_F = \frac{1 - \Delta}{4a} = \frac{1 - 16}{4(-1)} = \frac{15}{4}
$$

Il fuoco è quindi il punto $F\left(1, \frac{15}{4}\right)$, che rappresenta il centro della circonferenza cercando.

3. **Calcolo del raggio al quadrato ($R^2$):**

Poiché la circonferenza deve passare per i punti $A$ e $B$, calcoliamo la distanza al quadrato tra il centro $F$ e uno dei due punti, ad esempio $A(-1, 0)$:

$$
R^2 = (x_F - x_A)^2 + (y_F - y_A)^2 = (1 - (-1))^2 + \left(\frac{15}{4} - 0\right)^2
$$

$$
R^2 = 4 + \frac{225}{16} = \frac{64 + 225}{16} = \frac{289}{16}
$$

4. **Equazione della circonferenza:**

L'equazione della circonferenza con centro $F\left(1, \frac{15}{4}\right)$ e raggio al quadrato $R^2 = \frac{289}{16}$ è:

$$
(x - 1)^2 + \left(y - \frac{15}{4}\right)^2 = \frac{289}{16}
$$

Sviluppiamo i quadrati:

$$
x^2 - 2x + 1 + y^2 - \frac{15}{2}y + \frac{225}{16} = \frac{289}{16}
$$

Semplifichiamo i termini costanti portando tutto a sinistra:

$$
x^2 + y^2 - 2x - \frac{15}{2}y + 1 + \frac{225 - 289}{16} = 0
$$

$$
x^2 + y^2 - 2x - \frac{15}{2}y + 1 - 4 = 0
$$

$$
x^2 + y^2 - 2x - \frac{15}{2}y - 3 = 0
$$

Moltiplicando l'intera equazione per $2$, si ottiene la forma intera:

$$
2x^2 + 2y^2 - 4x - 15y - 6 = 0
$$
