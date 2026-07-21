---
year: 2
macro_area: "Algebra"
topic: "Frazioni algebriche e disequazioni fratte"
difficulty: 3
ai_generated: true
tags:
  - "frazioni algebriche"
  - "disequazioni fratte"
  - "condizioni di esistenza"
  - "studio del segno"
---
# Problem Text
Risolvi la seguente disequazione razionale fratta, esplicitando le condizioni di esistenza e l'insieme delle soluzioni:

$$
\frac{3x - 1}{x^2 - 9} - \frac{1}{x - 3} \le 0
$$

# Solution
**1. Condizioni di Esistenza (C.E.)**
Scomponiamo il denominatore $x^2 - 9 = (x - 3)(x + 3)$. Imponiamo che tutti i denominatori siano diversi da zero:

$$
(x - 3)(x + 3) \neq 0 \implies x \neq 3 \quad \text{e} \quad x \neq -3
$$

Quindi: $\text{C.E.}: x \neq \pm 3$.

**2. Riduzione a un'unica frazione algebrica**
Portiamo le frazioni allo stesso minimo comune denominatore $(x - 3)(x + 3)$:

$$
\frac{3x - 1}{(x - 3)(x + 3)} - \frac{x + 3}{(x - 3)(x + 3)} \le 0
$$

$$
\frac{3x - 1 - (x + 3)}{(x - 3)(x + 3)} \le 0
$$

$$
\frac{2x - 4}{(x - 3)(x + 3)} \le 0
$$

**3. Studio del segno dei fattori**
Studiamo il segno di ciascun fattore:
- Numeratore: $2x - 4 \ge 0 \implies x \ge 2$
- Fattore $D_1$: $x - 3 > 0 \implies x > 3$
- Fattore $D_2$: $x + 3 > 0 \implies x > -3$

**4. Schema del segno e conclusione**
Analizziamo il segno complessivo della frazione negli intervalli definiti dai punti critici $-3$, $2$ e $3$:
- Per $x < -3$: tre fattori negativi $\implies$ segno **negativo** ($-$).
- Per $-3 < x < 2$: due fattori negativi e uno positivo $\implies$ segno **positivo** ($+$).
- Per $2 \le x < 3$: un fattore negativo e due positivi $\implies$ segno **negativo** ($-$).
- Per $x > 3$: tre fattori positivi $\implies$ segno **positivo** ($+$).

In $x = 2$ il numeratore vale $0$, quindi il valore è incluso nella soluzione. I valori $x = -3$ e $x = 3$ sono esclusi per le C.E.

L'insieme delle soluzioni per cui la frazione è $\le 0$ è:

$$
x < -3 \quad \text{oppure} \quad 2 \le x < 3
$$

In notazione intervallare: $S = (-\infty, -3) \cup [2, 3)$.
