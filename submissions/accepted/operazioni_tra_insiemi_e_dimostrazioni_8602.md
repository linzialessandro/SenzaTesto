---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi e dimostrazioni"
difficulty: 5
ai_generated: true
tags:
  - "insiemi"
  - "operazioni tra insiemi"
  - "unione"
  - "intersezione"
  - "dimostrazione"
  - "doppia inclusione"
---
# Problem Text
Siano $A$ e $B$ due sottoinsiemi di un insieme universo $U$, e sia $X$ un sottoinsieme di $U$. Dimostra che se valgono contemporaneamente le due uguaglianze:

$$
A \cap X = B \cap X
$$

e

$$
A \cup X = B \cup X
$$

allora si ha $A = B$.

# Solution
Per dimostrare l'uguaglianza tra i due insiemi $A = B$, è necessario verificare la doppia inclusione: $A \subseteq B$ e $B \subseteq A$.

**1. Dimostrazione di $A \subseteq B$**

Consideriamo un generico elemento $x \in A$. Rispetto all'insieme $X$, si possono verificare due casi esaustivi:

- **Caso 1 ($x \in X$):**
  Se $x \in A$ e $x \in X$, allora per definizione di intersezione $x \in A \cap X$.
  Poiché per ipotesi $A \cap X = B \cap X$, ne consegue che $x \in B \cap X$.
  Dalla definizione di intersezione si deduce quindi che $x \in B$.

- **Caso 2 ($x \notin X$):**
  Se $x \in A$, per definizione di unione si ha $x \in A \cup X$.
  Poiché per ipotesi $A \cup X = B \cup X$, ne consegue che $x \in B \cup X$.
  Dalla definizione di unione sappiamo che $x \in B$ oppure $x \in X$. Essendo in questo caso $x \notin X$, deve necessariamente valere $x \in B$.

Poiché in ciascun caso ogni elemento di $A$ appartiene anche a $B$, resta dimostrato che $A \subseteq B$.

**2. Dimostrazione di $B \subseteq A$**

La dimostrazione dell'inclusione opposta è perfettamente simmetrica: scambiando i ruoli di $A$ e $B$ nelle due ipotesi iniziali, si deduce analogamente che ogni elemento $y \in B$ appartiene anche ad $A$, ovvero che $B \subseteq A$.

**Conclusione**

Avendo provato che $A \subseteq B$ e $B \subseteq A$, si conclude che $A = B$.
