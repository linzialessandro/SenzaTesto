---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Logica e Insiemistica"
difficulty: 2
tags:
  - "teoria degli insiemi"
  - "operazioni con insiemi"
  - "prodotto cartesiano"
  - "primo anno"
ai_generated: true
---
# Problem Text
Dato l'insieme universo $U$ formato dai numeri naturali minori o uguali a $15$:

$$
U = \{ x \in \mathbb{N} \mid 1 \le x \le 15 \}
$$

si considerino i seguenti tre sottoinsiemi di $U$:

- $A$ è l'insieme dei numeri dispari appartenenti a $U$;
- $B$ è l'insieme dei multipli di $3$ appartenenti a $U$;
- $C$ è l'insieme dei numeri primi appartenenti a $U$ unito all'elemento $1$.

Determinare:
1. La rappresentazione per elenco (estensiva) degli insiemi $A$, $B$ e $C$.
2. I seguenti insiemi derivati tramite operazioni insiemistiche:

$$
X = (A \cap B) \setminus C
$$

$$
Y = C \setminus (A \cup B)
$$

$$
Z = \overline{A \cup C} \cap B
$$

(dove $\overline{A \cup C}$ rappresenta il complementare di $A \cup C$ rispetto all'insieme universo $U$).

3. Il prodotto cartesiano $X \times Y$.

# Solution
### 1. Rappresentazione per elenco degli insiemi

Iniziamo scrivendo in modo estensivo (per elenco) l'insieme universo $U$:

$$
U = \{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 \}
$$

Ora ricaviamo gli insiemi $A$, $B$ e $C$ applicando le proprietà descritte:

- **Insieme $A$** (numeri dispari appartenenti a $U$):

$$
A = \{ 1, 3, 5, 7, 9, 11, 13, 15 \}
$$

- **Insieme $B$** (multipli di $3$ appartenenti a $U$):

$$
B = \{ 3, 6, 9, 12, 15 \}
$$

- **Insieme $C$** (numeri primi di $U$ e il numero $1$):
I numeri primi in $U$ sono $2, 3, 5, 7, 11, 13$. Aggiungendo l'elemento $1$, otteniamo:

$$
C = \{ 1, 2, 3, 5, 7, 11, 13 \}
$$

---

### 2. Calcolo degli insiemi derivati

#### Determinazione di $X = (A \cap B) \setminus C$

Calcoliamo prima l'intersezione $A \cap B$, cioè l'insieme degli elementi comuni sia ad $A$ che a $B$:

$$
A \cap B = \{ 3, 9, 15 \}
$$

Sottraiamo ora dall'insieme $A \cap B$ gli elementi che appartengono a $C$. Poiché l'unico elemento comune tra $A \cap B$ e $C$ è $3$, otteniamo:

$$
X = \{ 3, 9, 15 \} \setminus \{ 1, 2, 3, 5, 7, 11, 13 \} = \{ 9, 15 \}
$$

#### Determinazione di $Y = C \setminus (A \cup B)$

Calcoliamo prima l'unione $A \cup B$, cioè l'insieme degli elementi che appartengono ad $A$ o a $B$ (o a entrambi):

$$
A \cup B = \{ 1, 3, 5, 6, 7, 9, 11, 12, 13, 15 \}
$$

Sottraiamo ora dall'insieme $C$ tutti gli elementi dell'unione $A \cup B$. Gli elementi di $C$ che non appartengono ad $A \cup B$ sono solo il numero $2$:

$$
Y = \{ 1, 2, 3, 5, 7, 11, 13 \} \setminus \{ 1, 3, 5, 6, 7, 9, 11, 12, 13, 15 \} = \{ 2 \}
$$

#### Determinazione di $Z = \overline{A \cup C} \cap B$

Calcoliamo prima l'unione $A \cup C$:

$$
A \cup C = \{ 1, 2, 3, 5, 7, 9, 11, 13, 15 \}
$$

Il complementare di $A \cup C$ rispetto a $U$, indicato con $\overline{A \cup C}$, è formato da tutti gli elementi di $U$ che non appartengono ad $A \cup C$:

$$
\overline{A \cup C} = U \setminus (A \cup C) = \{ 4, 6, 8, 10, 12, 14 \}
$$

Ora calcoliamo l'intersezione tra questo insieme complementare e l'insieme $B$:

$$
Z = \{ 4, 6, 8, 10, 12, 14 \} \cap \{ 3, 6, 9, 12, 15 \} = \{ 6, 12 \}
$$

---

### 3. Calcolo del prodotto cartesiano $X \times Y$

Il prodotto cartesiano $X \times Y$ è l'insieme di tutte le coppie ordinate $(x, y)$ tali che $x \in X$ e $y \in Y$.

Dati $X = \{ 9, 15 \}$ e $Y = \{ 2 \}$, il prodotto cartesiano è:

$$
X \times Y = \{ (9, 2), (15, 2) \}
$$
