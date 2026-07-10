---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Logica e Insiemistica"
difficulty: 3
tags:
  - "insiemi"
  - "relazioni"
  - "connettivi logici"
  - "prodotto cartesiano"
  - "differenza di insiemi"
ai_generated: true
---
# Problem Text
Siano dati i due insiemi $A, B \subset \mathbb{Z}$ definiti mediante le seguenti condizioni logiche:

$$
A = \{x \in \mathbb{Z} \mid -3 \le x \le 5 \ \land \ (x > 0 \implies x^2 < 10)\}
$$

$$
B = \{x \in \mathbb{Z} \mid 0 \le x \le 6 \ \land \ (x \text{ è pari} \iff x \text{ è primo})\}
$$

Si determini l'insieme delle coppie ordinate che appartengono alla relazione $R \subseteq (A \setminus B) \times B$ definita da:

$$
R = \{(x, y) \in (A \setminus B) \times B \mid x + y \ge 0 \ \land \ x \cdot y \text{ è dispari}\}
$$

# Solution
1. **Determinazione dell'insieme $A$**:
La condizione logica nell'insieme $A$ presenta un'implicazione: $x > 0 \implies x^2 < 10$. Ricordando che un'implicazione $p \implies q$ è vera quando l'antecedente $p$ è falso oppure il conseguente $q$ è vero:
- Per $x \le 0$, l'ipotesi $x > 0$ è falsa, dunque l'implicazione è vera. Gli interi dell'intervallo appartengono ad $A$: $\{-3, -2, -1, 0\}$.
- Per $x > 0$, l'implicazione richiede che $x^2 < 10$ sia vera. Tra i restanti valori positivi considerati $\{1, 2, 3, 4, 5\}$, solo $\{1, 2, 3\}$ soddisfano questa disuguaglianza.
Di conseguenza:

$$
A = \{-3, -2, -1, 0, 1, 2, 3\}
$$

2. **Determinazione dell'insieme $B$**:
La condizione di appartenenza a $B$ è una coimplicazione (equivalenza logica): $x \text{ è pari} \iff x \text{ è primo}$. Essa è vera se entrambe le proposizioni hanno lo stesso valore di verità. Esaminiamo i candidati nell'intervallo $\{0, 1, 2, 3, 4, 5, 6\}$:
- $x = 0$: pari (Vero), primo (Falso) $\implies$ Falsa.
- $x = 1$: pari (Falso), primo (Falso) $\implies$ Vera ($1 \in B$).
- $x = 2$: pari (Vero), primo (Vero) $\implies$ Vera ($2 \in B$).
- $x = 3, 5$: pari (Falso), primo (Vero) $\implies$ Falsa.
- $x = 4, 6$: pari (Vero), primo (Falso) $\implies$ Falsa.
Otteniamo quindi l'insieme:

$$
B = \{1, 2\}
$$

3. **Calcolo della differenza di insiemi $A \setminus B$**:
Rimuovendo gli elementi di $B$ dall'insieme $A$:

$$
A \setminus B = \{-3, -2, -1, 0, 3\}
$$

4. **Costruzione della relazione $R$**:
Affinché la coppia $(x, y) \in (A \setminus B) \times B$ soddisfi la condizione "$x \cdot y$ è dispari", entrambi i fattori $x$ e $y$ devono essere dispari:
- Gli elementi dispari di $A \setminus B$ sono $\{-3, -1, 3\}$.
- L'unico elemento dispari in $B$ è $\{1\}$.
Le coppie candidate che forniscono un prodotto dispari sono dunque: $(-3, 1)$, $(-1, 1)$, $(3, 1)$.
Applichiamo ora l'ulteriore vincolo sulla somma $x + y \ge 0$:
- Per $(-3, 1)$: $-3 + 1 = -2 \ge 0$ (Falsa).
- Per $(-1, 1)$: $-1 + 1 = 0 \ge 0$ (Vera).
- Per $(3, 1)$: $3 + 1 = 4 \ge 0$ (Vera).

L'insieme finale delle coppie della relazione è:

$$
R = \{(-1, 1), (3, 1)\}
$$
