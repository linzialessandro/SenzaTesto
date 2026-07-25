---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Insiemi e Operazioni Insiemistiche"
difficulty: 3
ai_generated: true
tags:
  - "insiemi"
  - "operazioni tra insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
  - "complementare"
  - "rappresentazione per caratteristica"
---
# Problem Text
Dato l'insieme universo $U = \{x \in \mathbb{N} \mid 1 \le x \le 12\}$ e i suoi tre sottoinsiemi definiti per caratteristica:

$$
A = \{x \in U \mid x \text{ è un numero pari}\}
$$

$$
B = \{x \in U \mid x \text{ è un multiplo di } 3\}
$$

$$
C = \{x \in U \mid x > 5\}
$$

Determina per elencazione l'insieme $E = (A \cap B) \cup (\bar{A} \setminus C)$, dove $\bar{A}$ indica l'insieme complementare di $A$ rispetto a $U$.

# Solution
Per determinare l'insieme $E = (A \cap B) \cup (\bar{A} \setminus C)$, rappresentiamo prima gli insiemi $U, A, B, C$ per elencazione.

L'insieme universo è:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\}
$$

I tre sottoinsiemi espressi per elencazione sono:
- $A = \{2, 4, 6, 8, 10, 12\}$ (numeri pari in $U$)
- $B = \{3, 6, 9, 12\}$ (multipli di $3$ in $U$)
- $C = \{6, 7, 8, 9, 10, 11, 12\}$ (elementi di $U$ maggiori di $5$)

Procediamo ora con i passaggi per calcolare $E$:

1. **Intersezione $(A \cap B)$**: contiene gli elementi che appartengono sia ad $A$ sia a $B$:

$$
A \cap B = \{6, 12\}
$$

2. **Complementare $\bar{A}$**: contiene gli elementi dell'universo $U$ che non appartengono ad $A$ (i numeri dispari):

$$
\bar{A} = U \setminus A = \{1, 3, 5, 7, 9, 11\}
$$

3. **Differenza $(\bar{A} \setminus C)$**: contiene gli elementi di $\bar{A}$ che non appartengono a $C$:

$$
\bar{A} \setminus C = \{1, 3, 5\}
$$

4. **Unione finale $E = (A \cap B) \cup (\bar{A} \setminus C)$**: uniamo gli elementi trovati nei sottoinsiemi precedenti:

$$
E = \{6, 12\} \cup \{1, 3, 5\} = \{1, 3, 5, 6, 12\}
$$

L'insieme cercato è quindi:

$$
E = \{1, 3, 5, 6, 12\}
$$
