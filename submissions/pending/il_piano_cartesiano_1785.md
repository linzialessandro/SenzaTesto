---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 2
ai_generated: true
tags:
  - "piano cartesiano"
  - "punto medio"
  - "simmetria assiale"
  - "area di un triangolo"
  - "distanza punto-retta"
---
# Problem Text
Dati i punti $A(-2, 1)$ e $B(4, 3)$, determina l'area del triangolo $ABC$, dove $C$ è il simmetrico del punto medio $M$ del segmento $AB$ rispetto all'asse delle ascisse.

# Solution
Per risolvere il problema, procediamo determinando prima le coordinate del punto medio $M$, poi quelle del suo simmetrico $C$ rispetto all'asse delle ascisse, e infine calcoliamo l'area del triangolo $ABC$.

**1. Coordinate del punto medio $M$ del segmento $AB$**
Le coordinate di $M(x_M, y_M)$ si calcolano con le formule:

$$
x_M = \frac{x_A + x_B}{2} = \frac{-2 + 4}{2} = 1
$$

$$
y_M = \frac{y_A + y_B}{2} = \frac{1 + 3}{2} = 2
$$

Quindi, il punto medio è $M(1, 2)$.

**2. Coordinate di $C$, simmetrico di $M$ rispetto all'asse $x$**
La simmetria assiale rispetto all'asse delle ascisse ha equazioni:

$$
\begin{cases}
x' = x \\
y' = -y
\end{cases}
$$

Applicando la trasformazione al punto $M(1, 2)$, otteniamo le coordinate di $C$:

$$
C(1, -2)
$$

**3. Calcolo dell'area del triangolo $ABC$**
Possiamo determinare l'area calcolando la lunghezza della base $AB$ e la misura dell'altezza ad essa relativa (distanza di $C$ dalla retta passante per $A$ e $B$).

La lunghezza del segmento $AB$ è:

$$
AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \sqrt{(4 - (-2))^2 + (3 - 1)^2} = \sqrt{6^2 + 2^2} = \sqrt{40} = 2\sqrt{10}
$$

Troviamo l'equazione della retta passante per $A$ e $B$ utilizzando la formula della retta per due punti:

$$
y - y_A = m(x - x_A)
$$

dove il coefficiente angolare $m$ è pari a:

$$
m = \frac{y_B - y_A}{x_B - x_A} = \frac{3 - 1}{4 - (-2)} = \frac{2}{6} = \frac{1}{3}
$$

Sostituendo le coordinate di $A(-2, 1)$:

$$
y - 1 = \frac{1}{3}(x + 2) \implies x - 3y + 5 = 0
$$

L'altezza $h$ del triangolo corrisponde alla distanza del punto $C(1, -2)$ dalla retta $AB$:

$$
h = \frac{|x_C - 3y_C + 5|}{\sqrt{1^2 + (-3)^2}} = \frac{|1 - 3(-2) + 5|}{\sqrt{10}} = \frac{|1 + 6 + 5|}{\sqrt{10}} = \frac{12}{\sqrt{10}}
$$

Infine, l'area del triangolo $ABC$ è:

$$
\text{Area} = \frac{1}{2} \cdot AB \cdot h = \frac{1}{2} \cdot 2\sqrt{10} \cdot \frac{12}{\sqrt{10}} = 12
$$
