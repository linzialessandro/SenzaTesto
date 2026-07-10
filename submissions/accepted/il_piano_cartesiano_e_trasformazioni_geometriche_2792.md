---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano e trasformazioni geometriche"
difficulty: 2
tags:
  - "piano cartesiano"
  - "punto medio"
  - "simmetria centrale"
  - "area quadrilateri"
  - "trasformazioni geometriche"
ai_generated: true
---
# Problem Text
Siano dati i punti $A(2, 1)$ e $B(4, 5)$ nel piano cartesiano. Si considerino i loro simmetrici $A'$ e $B'$ rispetto al centro di simmetria $M(1, 2)$. Determinare l'area del parallelogramma $ABA'B'$.

# Solution
Poiché $A'$ e $B'$ sono i simmetrici di $A$ e $B$ rispetto a $M(1, 2)$, il punto $M$ è il punto medio dei segmenti $AA'$ e $BB'$.
Le formule per le coordinate del simmetrico di un punto $P(x_P, y_P)$ rispetto a un centro $M(x_M, y_M)$ sono:

$$
\begin{cases}
x_{P'} = 2x_M - x_P \\
y_{P'} = 2y_M - y_P
\end{cases}
$$

Applicando queste formule ad $A(2, 1)$ e $B(4, 5)$ otteniamo i punti $A'$ e $B'$:

$$
\begin{cases}
x_{A'} = 2(1) - 2 = 0 \\
y_{A'} = 2(2) - 1 = 3
\end{cases}
$$

Quindi si ha $A'(0, 3)$.

$$
\begin{cases}
x_{B'} = 2(1) - 4 = -2 \\
y_{B'} = 2(2) - 5 = -1
\end{cases}
$$

Quindi si ha $B'(-2, -1)$.

Il quadrilatero $ABA'B'$ ha le diagonali $AA'$ e $BB'$ che si intersecano nel loro punto medio comune $M$, di conseguenza è un parallelogramma. La sua area può essere calcolata come il doppio dell'area del triangolo $ABA'$.

Siano $A(2, 1)$, $B(4, 5)$ e $A'(0, 3)$. Usando la formula dell'area del triangolo tramite le coordinate dei vertici:

$$
\text{Area}(ABA') = \frac{1}{2} \left| x_A(y_B - y_{A'}) + x_B(y_{A'} - y_A) + x_{A'}(y_A - y_B) \right|
$$

Sostituendo i valori numerici:

$$
\text{Area}(ABA') = \frac{1}{2} \left| 2(5 - 3) + 4(3 - 1) + 0(1 - 5) \right| = \frac{1}{2} \left| 4 + 8 \right| = 6
$$

L'area del parallelogramma $ABA'B'$ è dunque:

$$
\text{Area}(ABA'B') = 2 \times \text{Area}(ABA') = 2 \times 6 = 12
$$
