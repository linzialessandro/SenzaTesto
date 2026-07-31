---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Superficie sferica e piani nello spazio"
difficulty: 4
ai_generated: true
tags:
  - "superficie sferica"
  - "piano tangente"
  - "distanza punto-piano"
  - "intersezione sfera-piano"
  - "geometria nello spazio"
---
# Problem Text
Considerata la superficie sferica $S$ avente centro nel punto $C(1, -1, 2)$ e tangente al piano $\pi_1: 2x - 2y + z + 3 = 0$, determinare le equazioni dei piani paralleli a $\pi_1$ la cui intersezione con $S$ è una circonferenza di area $5\pi$.

# Solution
Il raggio $R$ della superficie sferica $S$ equivale alla distanza del centro $C(1, -1, 2)$ dal piano tangente $\pi_1$:

$$
R = d(C, \pi_1) = \frac{|2(1) - 2(-1) + 1(2) + 3|}{\sqrt{2^2 + (-2)^2 + 1^2}} = \frac{9}{3} = 3
$$

Dall'area della sezione circolare $A = 5\pi$, si determina il raggio $r$ della circonferenza d'intersezione:

$$
A = \pi r^2 = 5\pi \implies r = \sqrt{5}
$$

Sia $d_C$ la distanza tra il centro $C$ e un generico piano secante $\pi_2$. Applicando il teorema di Pitagora al triangolo rettangolo avente per ipotenusa il raggio $R$ e per cateti il raggio $r$ della sezione e la distanza $d_C$:

$$
R^2 = r^2 + d_C^2 \implies 9 = 5 + d_C^2 \implies d_C = 2
$$

I piani paralleli a $\pi_1$ hanno equazione del tipo:

$$
\pi_2: 2x - 2y + z + d = 0, \quad d \in \mathbb{R}
$$

Imponendo che la distanza del centro $C(1, -1, 2)$ dal piano $\pi_2$ sia pari a $d_C = 2$:

$$
d(C, \pi_2) = \frac{|2(1) - 2(-1) + 1(2) + d|}{\sqrt{2^2 + (-2)^2 + 1^2}} = \frac{|6 + d|}{3} = 2 \implies |6 + d| = 6
$$

Risolvendo l'equazione con valore assoluto si ricavano i due valori per il parametro $d$:

$$
6 + d = 6 \implies d_1 = 0
$$

$$
6 + d = -6 \implies d_2 = -12
$$

Le equazioni dei due piani cercati sono:

$$
\pi_{2,a}: 2x - 2y + z = 0 \quad \text{e} \quad \pi_{2,b}: 2x - 2y + z - 12 = 0
$$
