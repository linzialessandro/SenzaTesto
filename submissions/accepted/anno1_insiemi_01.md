---
year: 1
macro_area: Logica e Insiemistica
topic: Operazioni tra insiemi
difficulty: 2
tags:
  - insiemi
  - unione
  - intersezione
  - differenza
---
# Problem Text

Siano dati gli insiemi $A = \{x \in \mathbb{N} \mid 1 \le x < 10 	ext{ e } x 	ext{ è dispari}\}$, $B = \{x \in \mathbb{N} \mid x 	ext{ è un divisore di } 15\}$ e $C = \{2, 3, 5, 7\}$. 
Determinare l'insieme $(A \cup B) \setminus (B \cap C)$.

# Solution

**1. Esplicitiamo gli insiemi:**
L'insieme $A$ è costituito dai numeri naturali dispari compresi tra 1 e 9 (incluso). Quindi, $A = \{1, 3, 5, 7, 9\}$.
L'insieme $B$ è formato dai divisori naturali di 15. Quindi, $B = \{1, 3, 5, 15\}$.
L'insieme $C$ ci è fornito direttamente: $C = \{2, 3, 5, 7\}$.

**2. Calcoliamo l'unione tra $A$ e $B$:**
L'unione $A \cup B$ contiene tutti gli elementi che appartengono ad $A$ oppure a $B$ (senza ripetizioni):
$$
A \cup B = \{1, 3, 5, 7, 9, 15\}
$$

**3. Calcoliamo l'intersezione tra $B$ e $C$:**
L'intersezione $B \cap C$ contiene gli elementi comuni ai due insiemi:
$$
B \cap C = \{3, 5\}
$$

**4. Calcoliamo la differenza finale:**
Dobbiamo sottrarre da $A \cup B$ gli elementi di $B \cap C$:
$$
(A \cup B) \setminus (B \cap C) = \{1, 3, 5, 7, 9, 15\} \setminus \{3, 5\} = \{1, 7, 9, 15\}
$$
