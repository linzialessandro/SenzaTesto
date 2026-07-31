---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 5
ai_generated: true
tags:
  - "piano cartesiano"
  - "simmetria centrale"
  - "area triangolo"
  - "baricentro"
  - "trasformazioni geometriche"
---
# Problem Text
Dati i punti $A(1, 1)$ e $B(3, 5)$, si consideri un punto $P(x, y)$ del piano cartesiano e le immagini $A'$ e $B'$ dei punti $A$ e $B$ rispetto alla simmetria centrale di centro $P$. Determina le coordinate dei punti $P$ tali che il quadrilatero $ABA'B'$ abbia area pari a $16$ e il baricentro del triangolo $APB'$ appartenga all'asse delle ascisse.

# Solution
Poiché $A'$ e $B'$ sono i simmetrici di $A$ e $B$ rispetto a $P$, il punto $P$ è il punto medio sia di $AA'$ sia di $BB'$. Di conseguenza, la figura $ABA'B'$ è un parallelogramma con centro in $P$. L'area del parallelogramma è divisa in quattro parti uguali dalle diagonali rispetto al centro $P$, per cui:

$$
\text{Area}(ABA'B') = 4 \cdot \text{Area}(APB) = 16 \implies \text{Area}(APB) = 4
$$

Calcoliamo l'area del triangolo $APB$ di vertici $A(1,1)$, $B(3,5)$ e $P(x,y)$ mediante la formula del determinante:

$$
\text{Area}(APB) = \frac{1}{2} |1(5 - y) + 3(y - 1) + x(1 - 5)| = \frac{1}{2} |2 - 4x + 2y| = |2x - y - 1|
$$

Imponendo che l'area sia uguale a $4$, si ottiene la condizione:

$$
|2x - y - 1| = 4
$$

Determiniamo ora le coordinate di $B'$, simmetrico di $B(3,5)$ rispetto a $P(x,y)$:

$$
x_{B'} = 2x - 3, \quad y_{B'} = 2y - 5
$$

L'ordinata del baricentro $G$ del triangolo $APB'$ è data da:

$$
y_G = \frac{y_A + y_P + y_{B'}}{3} = \frac{1 + y + (2y - 5)}{3} = \frac{3y - 4}{3}
$$

Affinché $G$ appartenga all'asse delle ascisse ($y_G = 0$), deve essere:

$$
\frac{3y - 4}{3} = 0 \implies y = \frac{4}{3}
$$

Sostituendo $y = \frac{4}{3}$ nella condizione sull'area:

$$
\left|2x - \frac{4}{3} - 1\right| = 4 \implies \left|2x - \frac{7}{3}\right| = 4
$$

Ciò porta a due soluzioni per $x$:
1. $2x - \frac{7}{3} = 4 \implies 2x = \frac{19}{3} \implies x = \frac{19}{6}$
2. $2x - \frac{7}{3} = -4 \implies 2x = -\frac{5}{3} \implies x = -\frac{5}{6}$

I punti cercati sono dunque $P_1\left(\frac{19}{6}, \frac{4}{3}\right)$ e $P_2\left(-\frac{5}{6}, \frac{4}{3}\right)$.
