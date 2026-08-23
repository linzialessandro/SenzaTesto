---
year: 1
macro_area: "Logica e Insiemistica"
topic: "Proposizioni e insiemi: operazioni e connettivi logici"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:43:00+00:00"
tags:
  - "logica"
  - "insiemi"
  - "connettivi logici"
  - "differenza simmetrica"
  - "inclusione-esclusione"
---
# Problem Text
Nell'universo $U = \{1, 2, 3, \dots, 20\}$ siano $A$ l'insieme dei numeri pari, $B$ l'insieme dei multipli di 3 e $C$ l'insieme dei multipli di 5. Sia $S$ l'insieme degli elementi $n$ di $U$ per cui la proposizione logica $(n \in A) \oplus (n \in B) \oplus (n \in C)$ è vera, dove $\oplus$ è l'operatore "oppure esclusivo" (vero quando un numero dispari delle tre affermazioni è vera). Determina quanti elementi ha $S$.

# Solution
La condizione $(n \in A) \oplus (n \in B) \oplus (n \in C)$ è vera se e solo se $n$ appartiene a un numero dispari di insiemi tra $A, B, C$, cioè a esattamente uno o a tutti e tre. Quindi $S = (A \triangle B \triangle C)$ (differenza simmetrica dei tre insiemi). Calcoliamo le cardinalità necessarie.

Contiamo gli elementi di $U = \{1, \dots, 20\}$:
$|A| = 10$ (pari: $2,4,\dots,20$)
$|B| = 6$ (multipli di 3: $3,6,9,12,15,18$)
$|C| = 4$ (multipli di 5: $5,10,15,20$)

Le intersezioni a due a due:
$|A \cap B| = $ multipli di 6 in $U$: $6,12,18 \to 3$
$|A \cap C| = $ multipli di 10 in $U$: $10,20 \to 2$
$|B \cap C| = $ multipli di 15 in $U$: $15 \to 1$

L'intersezione tripla:
$|A \cap B \cap C| = $ multipli di 30 in $U$: nessuno $\to 0$

Il numero di elementi che appartengono a esattamente uno degli insiemi è:

$$
|A| + |B| + |C| - 2|A \cap B| - 2|A \cap C| - 2|B \cap C| + 3|A \cap B \cap C| = 10+6+4 - 2(3+2+1) + 3\cdot 0 = 20 - 12 = 8.
$$

Il numero di elementi che appartengono a tutti e tre è 0. Quindi $|S| = 8 + 0 = 8$.
