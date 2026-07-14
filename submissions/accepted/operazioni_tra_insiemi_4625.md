---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Operazioni tra insiemi"
difficulty: 2
ai_generated: true
tags:
  - "insiemi"
  - "unione"
  - "intersezione"
  - "differenza"
  - "sottoinsiemi"
---
# Problem Text
Considera l'insieme universo $U = \{x \in \mathbb{N} \mid 1 \le x \le 15\}$. Siano $A$, $B$ e $C$ tre sottoinsiemi di $U$ così definiti:

- $A$ è l'insieme dei numeri pari;
- $B$ è l'insieme dei multipli di $3$;
- $C$ è l'insieme dei divisori di $12$.

Determina, elencandone gli elementi, il seguente insieme:

$$
(A \cap B) \cup (C \setminus A)
$$

# Solution
Per risolvere l'esercizio, iniziamo rappresentando ciascun insieme per elencazione (scrivendo esplicitamente tutti i suoi elementi contenuti nell'insieme universo $U$).

L'insieme universo è:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15\}
$$

Determiniamo ora i tre sottoinsiemi:
- $A$ contiene i numeri pari presenti in $U$:

$$
A = \{2, 4, 6, 8, 10, 12, 14\}
$$

- $B$ contiene i multipli di $3$ presenti in $U$:

$$
B = \{3, 6, 9, 12, 15\}
$$

- $C$ contiene i numeri in $U$ che sono divisori di $12$:

$$
C = \{1, 2, 3, 4, 6, 12\}
$$

Procediamo ora con le operazioni richieste dall'espressione:

1. **Determiniamo la prima parte dell'espressione, ovvero l'intersezione $A \cap B$**:
L'intersezione è formata dagli elementi che appartengono contemporaneamente sia ad $A$ sia a $B$ (cioè i numeri in $U$ che sono sia pari sia multipli di $3$):

$$
A \cap B = \{6, 12\}
$$

2. **Determiniamo la seconda parte dell'espressione, ovvero la differenza $C \setminus A$**:
La differenza tra due insiemi contiene gli elementi del primo insieme che non appartengono al secondo (in questo caso, gli elementi di $C$ che non sono pari):

$$
C \setminus A = \{1, 3\}
$$

3. **Calcoliamo l'unione dei due insiemi ottenuti**:
L'unione unisce tutti gli elementi dei due insiemi trovati nei passaggi precedenti, presi una sola volta:

$$
(A \cap B) \cup (C \setminus A) = \{6, 12\} \cup \{1, 3\} = \{1, 3, 6, 12\}
$$

L'insieme cercato è quindi:

$$
\{1, 3, 6, 12\}
$$
