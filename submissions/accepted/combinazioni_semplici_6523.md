---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Combinazioni semplici"
difficulty: 1
tags:
  - "combinazioni semplici"
  - "coefficiente binomiale"
  - "calcolo combinatorio"
ai_generated: true
---
# Problem Text
In un gruppo di $10$ persone, si desidera costituire un comitato formato da $4$ membri. Quanti diversi comitati è possibile formare?

# Solution
L'ordinamento dei membri all'interno del comitato non ha importanza e ciascuna persona può essere scelta una sola volta (non sono ammesse ripetizioni). Pertanto, si tratta di calcolare le combinazioni semplici di $n = 10$ elementi presi $k = 4$ alla volta.

La formula generale per le combinazioni semplici è data dal coefficiente binomiale:

$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

Sostituendo i valori forniti dal testo ($n = 10$ e $k = 4$), si ottiene:

$$
C_{10,4} = \binom{10}{4} = \frac{10!}{4!(10-4)!} = \frac{10!}{4! \cdot 6!}
$$

Per semplificare il calcolo, espandiamo il fattoriale al numeratore fino a incontrare l'analogo termine del denominatore:

$$
\binom{10}{4} = \frac{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6!}{(4 \cdot 3 \cdot 2 \cdot 1) \cdot 6!}
$$

Semplificando il termine $6!$ comune sia al numeratore che al denominatore, l'espressione si riduce a:

$$
\binom{10}{4} = \frac{10 \cdot 9 \cdot 8 \cdot 7}{4 \cdot 3 \cdot 2 \cdot 1}
$$

Semplificando ulteriormente i fattori numerici (ad esempio, dividendo $8$ per $4 \cdot 2 = 8$ e $9$ per $3$):

$$
\binom{10}{4} = 10 \cdot 3 \cdot 7 = 210
$$

È quindi possibile formare $210$ comitati diversi.
