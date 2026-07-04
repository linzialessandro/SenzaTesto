---
year: 1
macro_area: "Algebra"
topic: "Sistemi lineari parametrici"
difficulty: 3
tags:
  - "sistemi lineari"
  - "regola di cramer"
  - "sistemi parametrici"
  - "discussione sistema"
  - "algebra"
---
# Problem Text
Risolvere e discutere il seguente sistema lineare al variare del parametro reale $k$, applicando la regola di Cramer:

$$
\begin{cases}
(k-1)x + y = 1 \\
x + (k-1)y = 2k - 3
\end{cases}
$$

# Solution
Per discutere e risolvere il sistema lineare parametrico, applichiamo la regola di Cramer.

**1. Calcolo del determinante della matrice dei coefficienti ($D$)**

La matrice associata ai coefficienti delle incognite $x$ e $y$ è:

$$
A = \begin{pmatrix}
k-1 & 1 \\
1 & k-1
\end{pmatrix}
$$

Il determinante $D$ è pari a:

$$
D = \begin{vmatrix}
k-1 & 1 \\
1 & k-1
\end{vmatrix} = (k-1)^2 - 1
$$

Sviluppando il quadrato e semplificando:

$$
D = k^2 - 2k + 1 - 1 = k^2 - 2k = k(k-2)
$$

---

**2. Calcolo dei determinanti associati alle incognite ($D_x$ e $D_y$)**

Sostituiamo la colonna dei termini noti prima nella colonna delle $x$ per calcolare $D_x$:

$$
D_x = \begin{vmatrix}
1 & 1 \\
2k-3 & k-1
\end{vmatrix} = 1 \cdot (k-1) - 1 \cdot (2k-3)
$$

$$
D_x = k - 1 - 2k + 3 = -k + 2 = -(k-2)
$$

Sostituiamo ora la colonna dei termini noti nella colonna delle $y$ per calcolare $D_y$:

$$
D_y = \begin{vmatrix}
k-1 & 1 \\
1 & 2k-3
\end{vmatrix} = (k-1)(2k-3) - 1 \cdot 1
$$

$$
D_y = 2k^2 - 3k - 2k + 3 - 1 = 2k^2 - 5k + 2
$$

Per scomporre il trinomio di secondo grado $2k^2 - 5k + 2$, cerchiamo le sue radici tramite la formula risolutiva:

$$
k = \frac{5 \pm \sqrt{(-5)^2 - 4(2)(2)}}{2 \cdot 2} = \frac{5 \pm \sqrt{25 - 16}}{4} = \frac{5 \pm 3}{4}
$$

Le radici sono $k_1 = 2$ e $k_2 = \frac{1}{2}$. Possiamo quindi scrivere la scomposizione:

$$
D_y = 2(k-2)\left(k-\frac{1}{2}\right) = (k-2)(2k-1)
$$

---

**3. Discussione del sistema**

Analizziamo i tre casi legati al valore del determinante $D = k(k-2)$:

* **Caso 1: $D \neq 0 \implies k \neq 0$ e $k \neq 2$**
Il sistema è **determinato** e ammette un'unica soluzione $(x, y)$ espressa da:

$$
x = \frac{D_x}{D} = \frac{-(k-2)}{k(k-2)} = -\frac{1}{k}
$$

$$
y = \frac{D_y}{D} = \frac{(k-2)(2k-1)}{k(k-2)} = \frac{2k-1}{k}
$$

La coppia di soluzioni è quindi:

$$
\left(-\frac{1}{k}, \frac{2k-1}{k}\right)
$$

* **Caso 2: $k = 2$**
In questo caso, i tre determinanti assumono i seguenti valori:

$$
D = 0, \quad D_x = -(2-2) = 0, \quad D_y = (2-2)(2(2)-1) = 0
$$

Essendo tutti i determinanti nulli, sostituiamo direttamente $k=2$ nel sistema originario per verificarne l'indeterminatezza:

$$
\begin{cases}
(2-1)x + y = 1 \\
x + (2-1)y = 2(2) - 3
\end{cases} \implies \begin{cases}
x + y = 1 \\
x + y = 1
\end{cases}
$$

Le due equazioni sono identiche. Il sistema è **indeterminato** ed ammette infinite soluzioni del tipo:

$$
(x, 1-x) \quad \forall x \in \mathbb{R}
$$

* **Caso 3: $k = 0$**
In questo caso, i determinanti valgono:

$$
D = 0, \quad D_x = -(0-2) = 2 \neq 0, \quad D_y = (0-2)(2(0)-1) = 2 \neq 0
$$

Poiché $D = 0$ ma $D_x \neq 0$ (e $D_y \neq 0$), il sistema è **impossibile**.
Per verificarlo, sostituiamo $k=0$ nel sistema originario:

$$
\begin{cases}
-x + y = 1 \\
x - y = -3
\end{cases}
$$

Sommando membro a membro le due equazioni si ottiene la contraddizione:

$$
0 = -2
$$

che conferma l'impossibilità del sistema.

---

**Sintesi dei risultati**

* Se $k \in \mathbb{R} \setminus \{0, 2\}$, il sistema è determinato con soluzione $\left(-\frac{1}{k}, \frac{2k-1}{k}\right)$.
* Se $k = 2$, il sistema è indeterminato con infinite soluzioni della forma $(x, 1-x)$.
* Se $k = 0$, il sistema è impossibile.
