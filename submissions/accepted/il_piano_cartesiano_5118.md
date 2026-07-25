---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 2
ai_generated: true
tags:
  - "piano cartesiano"
  - "distanza tra due punti"
  - "area del triangolo"
  - "perimetro"
---
# Problem Text
Determina il perimetro e l'area del triangolo $ABC$ i cui vertici nel piano cartesiano sono $A(-1, -2)$, $B(5, -2)$ e $C(2, 2)$.

# Solution
1. **Calcolo della lunghezza della base $AB$:**
Poiché i punti $A$ e $B$ hanno la stessa ordinata ($y = -2$), il segmento $AB$ è orizzontale. La sua lunghezza è la distanza tra le ascisse:

$$
AB = |x_B - x_A| = |5 - (-1)| = 6
$$

2. **Calcolo dell'altezza $h$ relativa al lato $AB$:**
L'altezza $h$ è data dalla distanza verticale tra il vertice $C$ e la retta contenente il segmento $AB$:

$$
h = |y_C - y_A| = |2 - (-2)| = 4
$$

3. **Calcolo dell'area del triangolo $ABC$:**

$$
\text{Area} = \frac{AB \cdot h}{2} = \frac{6 \cdot 4}{2} = 12
$$

4. **Calcolo della lunghezza del lato $AC$:**
Utilizzando la formula della distanza tra due punti:

$$
AC = \sqrt{(x_C - x_A)^2 + (y_C - y_A)^2} = \sqrt{(2 - (-1))^2 + (2 - (-2))^2} = \sqrt{3^2 + 4^2} = \sqrt{25} = 5
$$

5. **Calcolo della lunghezza del lato $BC$:**

$$
BC = \sqrt{(x_C - x_B)^2 + (y_C - y_B)^2} = \sqrt{(2 - 5)^2 + (2 - (-2))^2} = \sqrt{(-3)^2 + 4^2} = \sqrt{25} = 5
$$

6. **Calcolo del perimetro $P$:**

$$
P = AB + BC + AC = 6 + 5 + 5 = 16
$$
