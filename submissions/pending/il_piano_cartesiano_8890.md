---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 1
ai_generated: true
tags:
  - "piano cartesiano"
  - "simmetria centrale"
  - "area triangolo"
  - "distanza tra punti"
---
# Problem Text
Dati i punti $A(1, 2)$ e $B(7, 2)$, calcola l'area del triangolo $ABC$ sapendo che il vertice $C$ è il simmetrico del punto $P(-1, 1)$ rispetto al centro di simmetria $M(1, 4)$.

# Solution
Per trovare le coordinate del vertice $C$, si applicano le formule della simmetria centrale di centro $M(x_M, y_M)$:

$$
\begin{cases}
x_C = 2x_M - x_P \\
y_C = 2y_M - y_P
\end{cases}
$$

Sostituendo le coordinate di $P(-1, 1)$ e $M(1, 4)$:

$$
x_C = 2 \cdot 1 - (-1) = 3
$$

$$
y_C = 2 \cdot 4 - 1 = 7
$$

Il terzo vertice del triangolo è dunque $C(3, 7)$.

I punti $A(1, 2)$ e $B(7, 2)$ condividono la stessa ordinata $y = 2$, quindi il segmento $AB$ giace su una retta orizzontale e può essere preso come base del triangolo.

La lunghezza della base $AB$ è data dalla differenza in valore assoluto delle ascisse:

$$
AB = |x_B - x_A| = |7 - 1| = 6
$$

L'altezza $h$ relativa alla base $AB$ è pari alla distanza verticale tra l'ordinata di $C$ e la retta $y = 2$:

$$
h = |y_C - y_A| = |7 - 2| = 5
$$

Calcoliamo infine l'area $\mathcal{A}$ del triangolo $ABC$:

$$
\mathcal{A} = \frac{1}{2} \cdot AB \cdot h = \frac{1}{2} \cdot 6 \cdot 5 = 15
$$

L'area del triangolo $ABC$ è $15$.
