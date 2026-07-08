---
year: 5
macro_area: "Geometria Analitica"
topic: "Piano e retta nello spazio"
difficulty: 2
tags:
  - "geometria nello spazio"
  - "equazione di un piano"
  - "perpendicolarit\u00e0"
  - "vettori nello spazio"
---
# Problem Text
Determinare l'equazione cartesiana del piano passante per il punto $P(1, -2, 3)$ e perpendicolare alla retta passante per i punti $A(2, 0, -1)$ e $B(4, 3, 1)$.

# Solution
1. **Determinazione del vettore direzione**:
Il vettore direzione $\vec{v}$ della retta passante per $A$ e $B$ corrisponde al vettore $\vec{AB}$:

$$
\vec{v} = (4 - 2, \ 3 - 0, \ 1 - (-1)) = (2, \ 3, \ 2)
$$

2. **Impostazione dell'equazione del piano**:
Poiché il piano è perpendicolare alla retta, il suo vettore normale coinciderà con il vettore direzione della retta stessa, ovvero $\vec{n} = \vec{v} = (2, \ 3, \ 2)$. 
L'equazione di un piano passante per un punto $P(x_P, y_P, z_P)$ con vettore normale $(a, b, c)$ è data da:

$$
a(x - x_P) + b(y - y_P) + c(z - z_P) = 0
$$

3. **Sostituzione dei valori**:
Sostituiamo nell'equazione generica le componenti del vettore normale $(2, \ 3, \ 2)$ e le coordinate del punto $P(1, -2, 3)$:

$$
2(x - 1) + 3(y - (-2)) + 2(z - 3) = 0
$$

$$
2(x - 1) + 3(y + 2) + 2(z - 3) = 0
$$

4. **Sviluppo dei calcoli**:
Sviluppiamo l'espressione algebrica per ottenere l'equazione in forma implicita:

$$
2x - 2 + 3y + 6 + 2z - 6 = 0
$$

Semplificando i termini noti, otteniamo l'equazione del piano cercato:

$$
2x + 3y + 2z - 2 = 0
$$
