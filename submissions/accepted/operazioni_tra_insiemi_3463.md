---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 1
tags:
  - "Insiemi"
  - "Unione"
  - "Differenza"
  - "Operazioni tra insiemi"
ai_generated: true
---
# Problem Text
Dati i seguenti tre insiemi:

$$
A = \{2, 4, 6, 8, 10\}
$$

$$
B = \{3, 4, 5, 6, 7\}
$$

$$
C = \{1, 2, 3, 4\}
$$

Determina l'insieme risultante dalla seguente operazione:

$$
(A \cup B) \setminus C
$$

# Solution
Per risolvere il problema, procediamo applicando le definizioni delle operazioni tra insiemi.

**Passo 1: Determinazione dell'unione $A \cup B$**
L'unione di due insiemi $A$ e $B$ è l'insieme che contiene tutti gli elementi che appartengono ad $A$, a $B$ o a entrambi, presi una sola volta:

$$
A \cup B = \{2, 3, 4, 5, 6, 7, 8, 10\}
$$

**Passo 2: Determinazione della differenza con l'insieme $C$**
La differenza $(A \cup B) \setminus C$ è l'insieme degli elementi che appartengono ad $A \cup B$ ma non appartengono a $C$. Dato che:

$$
C = \{1, 2, 3, 4\}
$$

Rimuoviamo gli elementi comuni $2$, $3$ e $4$ dall'unione precedentemente calcolata:

$$
(A \cup B) \setminus C = \{5, 6, 7, 8, 10\}
$$

L'insieme risultante è:

$$
\{5, 6, 7, 8, 10\}
$$
