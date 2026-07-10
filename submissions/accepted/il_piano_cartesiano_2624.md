---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 1
tags:
  - "piano cartesiano"
  - "distanza tra due punti"
  - "area del triangolo"
  - "geometria analitica"
---
# Problem Text
Dati i punti $A(-2, 1)$, $B(4, 1)$ e $C(1, 5)$ nel piano cartesiano, determina l'area del triangolo $ABC$.

# Solution
**Passo 1: Calcolo della lunghezza della base $AB$**
I punti $A$ e $B$ hanno la stessa ordinata ($y = 1$), quindi il segmento $AB$ è parallelo all'asse delle ascisse $x$. La sua lunghezza (base $b$) è data dalla differenza delle loro ascisse in valore assoluto:

$$
b = |x_B - x_A| = |4 - (-2)| = |4 + 2| = 6
$$

**Passo 2: Calcolo dell'altezza $h$ del triangolo**
L'altezza $h$ relativa alla base $AB$ è data dalla distanza del punto $C(1, 5)$ dalla retta parallela all'asse $x$ passante per $A$ e $B$ (la retta $y = 1$). Tale altezza corrisponde alla differenza in valore assoluto tra le ordinate:

$$
h = |y_C - y_A| = |5 - 1| = 4
$$

**Passo 3: Calcolo dell'area**
Applichiamo la formula dell'area del triangolo:

$$
\text{Area} = \frac{b \cdot h}{2} = \frac{6 \cdot 4}{2} = 12
$$

L'area del triangolo $ABC$ è $12$ unità quadrate.
