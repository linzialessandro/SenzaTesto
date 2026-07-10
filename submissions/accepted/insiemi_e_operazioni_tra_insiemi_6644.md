---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Insiemi e operazioni tra insiemi"
difficulty: 1
tags:
  - "insiemi"
  - "operazioni tra insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
---
# Problem Text
Dati i seguenti sottoinsiemi dell'insieme universo $U = \{x \in \mathbb{N} \mid 1 \le x \le 10\}$:

$$
A = \{x \in U \mid x \text{ è un numero pari}\}
$$

e

$$
B = \{x \in U \mid x \text{ è un multiplo di 3}\}
$$

Determina l'insieme $C = (A \cap B) \cup (B \setminus A)$ esprimendo il risultato in forma tabulare (elencando i suoi elementi).

# Solution
Per risolvere l'esercizio, procediamo passo dopo passo individuando gli elementi di ciascun insieme.

1. Scriviamo in forma tabulare l'insieme universo $U$:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}
$$

2. Determiniamo gli elementi dell'insieme $A$, costituito dai numeri pari appartenenti a $U$:

$$
A = \{2, 4, 6, 8, 10\}
$$

3. Determiniamo gli elementi dell'insieme $B$, costituito dai multipli di 3 appartenenti a $U$:

$$
B = \{3, 6, 9\}
$$

4. Calcoliamo l'intersezione $A \cap B$, cioè l'insieme degli elementi comuni sia ad $A$ sia a $B$:

$$
A \cap B = \{6\}
$$

5. Calcoliamo la differenza $B \setminus A$, cioè l'insieme degli elementi che appartengono a $B$ ma non ad $A$:

$$
B \setminus A = \{3, 9\}
$$

6. Infine, calcoliamo l'unione dei due insiemi ottenuti ai punti 4 e 5 per determinare l'insieme $C$:

$$
C = \{6\} \cup \{3, 9\} = \{3, 6, 9\}
$$
