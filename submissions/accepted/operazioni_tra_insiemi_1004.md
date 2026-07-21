---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 3
ai_generated: true
tags:
  - "insiemi"
  - "operazioni tra insiemi"
  - "differenza tra insiemi"
  - "complementare"
  - "intersezione"
---
# Problem Text
Dato l'insieme universo:

$$
U = \{ x \in \mathbb{N} \mid 1 \le x \le 15 \}
$$

e i tre sottoinsiemi $A$, $B$ e $C$ di $U$ così definiti:
- $A = \{ x \in U \mid x \text{ è un numero pari} \}$
- $B = \{ x \in U \mid x \text{ è un multiplo di 3} \}$
- $C = \{ x \in U \mid x \text{ è un numero primo} \}$

Determina per elencazione l'insieme $E = (A \setminus B) \cap \overline{C}$, dove $\overline{C}$ indica l'insieme complementare di $C$ rispetto a $U$.

# Solution
Per determinare l'insieme $E = (A \setminus B) \cap \overline{C}$, procediamo rappresentando per elencazione ciascun insieme coinvolto e svolgendo le operazioni passo dopo passo.

1. **Rappresentazione degli insiemi per elencazione:**
- Insieme universo $U$:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15\}
$$

- Insieme $A$ (numeri pari compresi in $U$):

$$
A = \{2, 4, 6, 8, 10, 12, 14\}
$$

- Insieme $B$ (multipli di 3 compresi in $U$):

$$
B = \{3, 6, 9, 12, 15\}
$$

- Insieme $C$ (numeri primi compresi in $U$):

$$
C = \{2, 3, 5, 7, 11, 13\}
$$

2. **Calcolo dell'insieme differenza $A \setminus B$:**
L'insieme $A \setminus B$ è formato dagli elementi di $A$ che non appartengono a $B$. Eliminiamo da $A$ i numeri 6 e 12 (che sono multipli di 3):

$$
A \setminus B = \{2, 4, 8, 10, 14\}
$$

3. **Calcolo dell'insieme complementare $\overline{C}$:**
L'insieme $\overline{C}$ contiene tutti gli elementi dell'universo $U$ che non sono numeri primi (ovvero 1 e i numeri composti):

$$
\overline{C} = \{1, 4, 6, 8, 9, 10, 12, 14, 15\}
$$

4. **Calcolo dell'intersezione $E = (A \setminus B) \cap \overline{C}$:**
L'insieme intersezione raccoglie gli elementi comuni a $(A \setminus B)$ e $\overline{C}$:

$$
E = \{4, 8, 10, 14\}
$$

L'insieme cercato è $E = \{4, 8, 10, 14\}$.
