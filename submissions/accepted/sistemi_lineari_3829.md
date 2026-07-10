---
year: 2
macro_area: "Algebra"
topic: "Sistemi lineari"
difficulty: 3
tags:
  - "sistemi lineari"
  - "metodo di riduzione"
  - "regola di Cramer"
  - "regola di Sarrus"
  - "secondo anno"
ai_generated: true
---
# Problem Text
Risolvere il seguente sistema di tre equazioni di primo grado in tre incognite, prima applicando il metodo di riduzione per eliminare le variabili e successivamente verificando il risultato ottenuto tramite la regola di Cramer:

$$
\begin{cases}
x + y + z = 6 \\
2x - y + 3z = 9 \\
3x + y - z = 2
\end{cases}
$$

# Solution
### 1. Risoluzione tramite metodo di riduzione

Il metodo di riduzione consiste nel sommare o sottrarre le equazioni membro a membro, eventualmente dopo averle moltiplicate per opportuni fattori numerici, al fine di eliminare una delle incognite.

Consideriamo il sistema iniziale:

$$
\begin{cases}
(1) \quad x + y + z = 6 \\
(2) \quad 2x - y + 3z = 9 \\
(3) \quad 3x + y - z = 2
\end{cases}
$$

Notiamo che i coefficienti dell'incognita $y$ nelle equazioni $(1)$, $(2)$ e $(3)$ hanno valori rispettivamente pari a $1$, $-1$ e $1$. Questo rende la variabile $y$ particolarmente semplice da eliminare per somma diretta delle equazioni.

- **Fase A: Eliminazione di $y$ tra le equazioni $(1)$ e $(2)$**
Sommiamo membro a membro l'equazione $(1)$ e l'equazione $(2)$:

$$
(x + y + z) + (2x - y + 3z) = 6 + 9
$$

$$
3x + 4z = 15 \quad (4)
$$

- **Fase B: Eliminazione di $y$ tra le equazioni $(2)$ e $(3)$**
Sommiamo membro a membro l'equazione $(2)$ e l'equazione $(3)$:

$$
(2x - y + 3z) + (3x + y - z) = 9 + 2
$$

$$
5x + 2z = 11 \quad (5)
$$

- **Fase C: Risoluzione del sistema ridotto $2 \times 2$ in $x$ e $z$**
Consideriamo le equazioni $(4)$ e $(5)$:

$$
\begin{cases}
3x + 4z = 15 \\
5x + 2z = 11
\end{cases}
$$

Moltiplichiamo l'equazione $(5)$ per il fattore $-2$, in modo da rendere opposti i coefficienti di $z$:

$$
-2 \cdot (5x + 2z) = -2 \cdot 11 \implies -10x - 4z = -22
$$

Sommiamo ora quest'ultima equazione ottenuto con la $(4)$:

$$
(-10x - 4z) + (3x + 4z) = -22 + 15
$$

$$
-7x = -7 \implies x = 1
$$

Sostituiamo il valore $x = 1$ nell'equazione $(5)$ per determinare $z$:

$$
5(1) + 2z = 11 \implies 5 + 2z = 11 \implies 2z = 6 \implies z = 3
$$

- **Fase D: Determinazione dell'incognita $y$**
Sostituiamo $x = 1$ e $z = 3$ nell'equazione originaria $(1)$ per trovare il valore di $y$:

$$
1 + y + 3 = 6 \implies y + 4 = 6 \implies y = 2
$$

La soluzione del sistema è la terna ordinata:

$$
(x, y, z) = (1, 2, 3)
$$

---

### 2. Verifica tramite la regola di Cramer (Regola di Sarrus)

Per verificare il risultato tramite la regola di Cramer, calcoliamo i determinanti della matrice dei coefficienti $D$ e delle matrici associate alle tre incognite, ovvero $D_x$, $D_y$ e $D_z$.

Il determinante del sistema $D$ è dato da:

$$
D = \det \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 3 \\ 3 & 1 & -1 \end{pmatrix}
$$

Utilizzando la regola di Sarrus:

$$
D = [1 \cdot (-1) \cdot (-1) + 1 \cdot 3 \cdot 3 + 1 \cdot 2 \cdot 1] - [1 \cdot (-1) \cdot 3 + 1 \cdot 3 \cdot 1 + 1 \cdot 2 \cdot (-1)]
$$

$$
D = [1 + 9 + 2] - [-3 + 3 - 2] = 12 - (-2) = 14
$$

Calcoliamo il determinante $D_x$ sostituendo la prima colonna con quella dei termini noti:

$$
D_x = \det \begin{pmatrix} 6 & 1 & 1 \\ 9 & -1 & 3 \\ 2 & 1 & -1 \end{pmatrix}
$$

$$
D_x = [6 \cdot (-1) \cdot (-1) + 1 \cdot 3 \cdot 2 + 1 \cdot 9 \cdot 1] - [1 \cdot (-1) \cdot 2 + 6 \cdot 3 \cdot 1 + 1 \cdot 9 \cdot (-1)]
$$

$$
D_x = [6 + 6 + 9] - [-2 + 18 - 9] = 21 - 7 = 14
$$

Calcoliamo il determinante $D_y$ sostituendo la seconda colonna con quella dei termini noti:

$$
D_y = \det \begin{pmatrix} 1 & 6 & 1 \\ 2 & 9 & 3 \\ 3 & 2 & -1 \end{pmatrix}
$$

$$
D_y = [1 \cdot 9 \cdot (-1) + 6 \cdot 3 \cdot 3 + 1 \cdot 2 \cdot 2] - [1 \cdot 9 \cdot 3 + 1 \cdot 3 \cdot 2 + 6 \cdot 2 \cdot (-1)]
$$

$$
D_y = [-9 + 54 + 4] - [27 + 6 - 12] = 49 - 21 = 28
$$

Calcoliamo il determinante $D_z$ sostituendo la terza colonna con quella dei termini noti:

$$
D_z = \det \begin{pmatrix} 1 & 1 & 6 \\ 2 & -1 & 9 \\ 3 & 1 & 2 \end{pmatrix}
$$

$$
D_z = [1 \cdot (-1) \cdot 2 + 1 \cdot 9 \cdot 3 + 6 \cdot 2 \cdot 1] - [6 \cdot (-1) \cdot 3 + 1 \cdot 9 \cdot 1 + 1 \cdot 2 \cdot 2]
$$

$$
D_z = [-2 + 27 + 12] - [-18 + 9 + 4] = 37 - (-5) = 42
$$

---

### 3. Soluzioni finali

Applicando le formule di Cramer otteniamo:

$$
x = \frac{D_x}{D} = \frac{14}{14} = 1
$$

$$
y = \frac{D_y}{D} = \frac{28}{14} = 2
$$

$$
z = \frac{D_z}{D} = \frac{42}{14} = 3
$$

I valori coincidono perfettamente con quelli ricavati tramite il metodo di riduzione, confermando la correttezza della soluzione:

$$
(x, y, z) = (1, 2, 3)
$$
