---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 2
tags:
  - "Insiemi"
  - "Differenza tra insiemi"
  - "Insiemistica"
  - "Primo anno"
---
# Problem Text
Dati i due insiemi:

$$
A = \{x \in \mathbb{N} \mid x \text{ è un divisore di } 12\}
$$

e

$$
B = \{x \in \mathbb{N} \mid x \text{ è un numero primo } < 10\}
$$

Determina l'insieme differenza $C = A \setminus B$ rappresentandolo per elencazione.

# Solution
Per risolvere l'esercizio, procediamo passo dopo passo individuando gli elementi di ciascun insieme ed eseguendo l'operazione richiesta.

1. **Rappresentazione di $A$ per elencazione**: I divisori positivi del numero 12 sono:

$$
A = \{1, 2, 3, 4, 6, 12\}
$$

2. **Rappresentazione di $B$ per elencazione**: I numeri primi minori di 10 sono:

$$
B = \{2, 3, 5, 7\}
$$

*(Nota: il numero 1 non è un numero primo).*

3. **Definizione di insieme differenza**: L'insieme differenza $A \setminus B$ è l'insieme costituito da tutti gli elementi che appartengono ad $A$ ma non appartengono a $B$:

$$
A \setminus B = \{x \in A \mid x \notin B\}
$$

4. **Calcolo della differenza**: Confrontiamo gli elementi di $A$ con quelli di $B$:
- Gli elementi comuni ad entrambi gli insiemi sono $2$ e $3$.
- Escludendo questi elementi dall'insieme $A$, restano gli elementi $1, 4, 6$ e $12$.

5. **Risultato finale**: Scriviamo l'insieme risultante $C$:

$$
C = \{1, 4, 6, 12\}
$$
