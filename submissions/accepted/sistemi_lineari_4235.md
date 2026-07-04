---
year: 2
macro_area: "Algebra"
topic: "Sistemi lineari"
difficulty: 3
tags:
  - "sistemi lineari"
  - "regola di Cramer"
  - "sistemi parametrici"
  - "discussione dei sistemi"
  - "secondo anno"
---
# Problem Text
Si discuta e si risolva, al variare del parametro reale $k \in \mathbb{R}$, il seguente sistema lineare tramite la regola di Cramer:

$$
\begin{cases}
kx + y = k + 1 \\
x + ky = 2
\end{cases}
$$

# Solution
Per risolvere e discutere il sistema lineare tramite la regola di Cramer, iniziamo calcolando il determinante della matrice dei coefficienti, denotato con $D$, e i determinanti associati alle variabili $x$ e $y$, denotati rispettivamente con $D_x$ e $D_y$.

Il sistema è dato da:

$$
\begin{cases}
kx + y = k + 1 \\
x + ky = 2
\end{cases}
$$

### 1. Calcolo dei determinanti

Il determinante del sistema $D$ è:

$$
D = \det \begin{pmatrix} k & 1 \\ 1 & k \end{pmatrix} = k \cdot k - 1 \cdot 1 = k^2 - 1
$$

Possiamo scomporre $D$ come differenza di quadrati:

$$
D = (k - 1)(k + 1)
$$

Il determinante $D_x$ si ottiene sostituendo la colonna dei coefficienti di $x$ con la colonna dei termini noti:

$$
D_x = \det \begin{pmatrix} k + 1 & 1 \\ 2 & k \end{pmatrix} = (k + 1) \cdot k - 1 \cdot 2 = k^2 + k - 2
$$

Per scomporre il trinomio di secondo grado $k^2 + k - 2$, cerchiamo due numeri la cui somma sia $1$ e il cui prodotto sia $-2$. Questi numeri sono $2$ e $-1$. Quindi:

$$
D_x = (k + 2)(k - 1)
$$

Il determinante $D_y$ si ottiene sostituendo la colonna dei coefficienti di $y$ con la colonna dei termini noti:

$$
D_y = \det \begin{pmatrix} k & k + 1 \\ 1 & 2 \end{pmatrix} = k \cdot 2 - (k + 1) \cdot 1 = 2k - k - 1 = k - 1
$$

---

### 2. Discussione del sistema

La regola di Cramer ci permette di discutere il sistema in base ai valori del determinante $D$.

#### Caso A: $D \neq 0$
Il sistema è determinato se e solo se $D \neq 0$.

$$
(k - 1)(k + 1) \neq 0 \implies k \neq 1 \quad \text{e} \quad k \neq -1
$$

In questo caso, esiste un'unica soluzione $(x, y)$ data dalle formule di Cramer:

$$
x = \frac{D_x}{D} = \frac{(k + 2)(k - 1)}{(k + 1)(k - 1)} = \frac{k + 2}{k + 1}
$$

$$
y = \frac{D_y}{D} = \frac{k - 1}{(k + 1)(k - 1)} = \frac{1}{k + 1}
$$

Quindi, per $k \neq \pm 1$, l'unica soluzione è la coppia:

$$
\left( \frac{k + 2}{k + 1}, \frac{1}{k + 1} \right)
$$

#### Caso B: $k = 1$
Sostituendo $k = 1$ nei determinanti calcolati, otteniamo:

$$
D = 0, \quad D_x = 0, \quad D_y = 0
$$

Poiché tutti i determinanti sono nulli, il sistema può essere indeterminato. Sostituiamo direttamente $k = 1$ nel sistema originario per verificarlo:

$$
\begin{cases}
1 \cdot x + y = 1 + 1 \\
x + 1 \cdot y = 2
\end{cases} \implies \begin{cases}
x + y = 2 \\
x + y = 2
\end{cases}
$$

Le due equazioni sono identiche. Il sistema è dunque indeterminato (ammette infinite soluzioni). Le soluzioni sono tutte le coppie reali del tipo:

$$
(x, 2 - x) \quad \text{con} \quad x \in \mathbb{R}
$$

#### Caso C: $k = -1$
Sostituendo $k = -1$ nei determinanti calcolati, otteniamo:

$$
D = 0
$$

$$
D_x = (-1 + 2)(-1 - 1) = 1 \cdot (-2) = -2 \neq 0
$$

$$
D_y = -1 - 1 = -2 \neq 0
$$

Poiché il determinante della matrice dei coefficienti $D$ è nullo ma i determinanti delle incognite sono diversi da zero, il sistema è impossibile.

Sostituiamo direttamente $k = -1$ nel sistema originario per confermarlo:

$$
\begin{cases}
-x + y = 0 \\
x - y = 2
\end{cases} \implies \begin{cases}
y = x \\
x - x = 2
\end{cases} \implies \begin{cases}
y = x \\
0 = 2
\end{cases}
$$

L'equazione $0 = 2$ non è mai verificata, il che conferma che il sistema non ammette soluzioni (è impossibile).

---

### 3. Schema riassuntivo

- Se $k \neq 1$ e $k \neq -1$, il sistema è determinato con soluzione unica:

$$
\left( \frac{k + 2}{k + 1}, \frac{1}{k + 1} \right)
$$

- Se $k = 1$, il sistema è indeterminato con infinite soluzioni della forma:

$$
(x, 2 - x), \quad \forall x \in \mathbb{R}
$$

- Se $k = -1$, il sistema è impossibile.
