---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Insiemi e operazioni tra insiemi"
difficulty: 1
ai_generated: true
tags:
  - "insiemi"
  - "unione"
  - "intersezione"
  - "differenza insiemistica"
---
# Problem Text
Dati gli insiemi:

$$
A = \{x \in \mathbb{N} \mid x \text{ è un numero pari e } 1 \le x \le 10\}
$$

$$
B = \{2, 3, 5, 7, 8\}
$$

$$
C = \{6, 8, 10\}
$$

Determina l'insieme $E = (A \setminus B) \cup (A \cap C)$ rappresentandolo per elencazione.

# Solution
Per determinare l'insieme $E = (A \setminus B) \cup (A \cap C)$, procediamo passo dopo passo.

**Passo 1: Rappresentazione dell'insieme $A$ per elencazione**
L'insieme $A$ contiene tutti i numeri naturali pari compresi tra $1$ e $10$ inclusi:

$$
A = \{2, 4, 6, 8, 10\}
$$

**Passo 2: Calcolo della differenza $A \setminus B$**
L'insieme differenza $A \setminus B$ è costituito da tutti gli elementi che appartengono ad $A$ ma non a $B = \{2, 3, 5, 7, 8\}$:

$$
A \setminus B = \{4, 6, 10\}
$$

**Passo 3: Calcolo dell'intersezione $A \cap C$**
L'insieme intersezione $A \cap C$ è costituito dagli elementi appartenenti sia ad $A$ sia a $C = \{6, 8, 10\}$:

$$
A \cap C = \{6, 8, 10\}
$$

**Passo 4: Calcolo dell'unione finale**
Uniamo i due insiemi ottenuti nei passaggi precedenti raccogliendo tutti i loro elementi, presi una sola volta:

$$
E = (A \setminus B) \cup (A \cap C) = \{4, 6, 10\} \cup \{6, 8, 10\} = \{4, 6, 8, 10\}
$$

L'insieme cercato è quindi:

$$
E = \{4, 6, 8, 10\}
$$
