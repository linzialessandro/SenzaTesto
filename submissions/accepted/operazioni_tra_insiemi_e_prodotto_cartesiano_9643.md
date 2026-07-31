---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi e Prodotto cartesiano"
difficulty: 5
ai_generated: true
tags:
  - "insiemi"
  - "prodotto cartesiano"
  - "intersezione"
  - "inclusione"
  - "dimostrazione"
---
# Problem Text
Siano $A, B, C$ tre sottoinsiemi di un insieme universo $U$. Dimostra che l'uguaglianza tra prodotti cartesiani

$$
(A \times B) \cap (C \times B) = A \times B
$$

è verificata se e solo se $A \subseteq C$ oppure $B = \emptyset$.

# Solution
**Passo 1: Semplificazione del membro di sinistra**

Per la definizione di prodotto cartesiano e intersezione di insiemi, una coppia ordinata $(x, y)$ appartiene a $(A \times B) \cap (C \times B)$ se e solo se:

$$
(x \in A \land y \in B) \land (x \in C \land y \in B)
$$

Per la proprietà associativa, commutativa e d'idempotenza della congiunzione logica $\land$, la condizione equivale a:

$$
(x \in A \land x \in C) \land y \in B \iff x \in (A \cap C) \land y \in B
$$

Ne segue che:

$$
(A \times B) \cap (C \times B) = (A \cap C) \times B
$$

L'uguaglianza di partenza si riduce quindi a:

$$
(A \cap C) \times B = A \times B
$$

---

**Passo 2: Dimostrazione dell'implicazione ($\Leftarrow$)**

- Se $B = \emptyset$, allora $(A \cap C) \times \emptyset = \emptyset$ e $A \times \emptyset = \emptyset$, per cui l'uguaglianza $\emptyset = \emptyset$ è banalmente verificata.
- Se $A \subseteq C$, per definizione di inclusione si ha $A \cap C = A$. Sostituendo $A \cap C$ con $A$ nell'espressione si ottiene $A \times B = A \times B$, che è un'identità vera per ogni $B$.

---

**Passo 3: Dimostrazione dell'implicazione ($\Rightarrow$)**

Supponiamo vera l'uguaglianza $(A \cap C) \times B = A \times B$. Analizziamo due casi possibili per l'insieme $B$:
1. Se $B = \emptyset$, la tesi è immediatamente verificata.
2. Se $B \neq \emptyset$, esiste almeno un elemento $y_0 \in B$.
   Consideriamo un generico elemento $x \in A$. Poiché $x \in A$ e $y_0 \in B$, si ha $(x, y_0) \in A \times B$.
   Per l'ipotesi di uguaglianza, dev'essere anche $(x, y_0) \in (A \cap C) \times B$.
   Ciò implica che $x \in A \cap C$, da cui segue $x \in C$.
   Poiché ogni elemento di $A$ appartiene anche a $C$, abbiamo dimostrato che $A \subseteq C$.

In conclusione, l'uguaglianza vale se e solo se $A \subseteq C$ oppure $B = \emptyset$. $\blacksquare$
