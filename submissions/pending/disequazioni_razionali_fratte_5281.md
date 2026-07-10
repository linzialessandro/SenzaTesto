---
year: 2
macro_area: "Algebra"
topic: "Disequazioni razionali fratte"
difficulty: 2
tags:
  - "frazioni algebriche"
  - "disequazioni fratte"
  - "condizioni di esistenza"
  - "algebra"
---
# Problem Text
$$
\frac{2x - 4}{x^2 - 1} \ge 0
$$

# Solution
Ecco lo svolgimento completo della disequazione:

1. **Condizioni di Esistenza (C.E.)**
Il denominatore deve essere diverso da zero:

$$
x^2 - 1 \neq 0 \implies (x - 1)(x + 1) \neq 0 \implies x \neq -1 \quad \text{e} \quad x \neq 1
$$

2. **Studio del Segno del Numeratore ($N \ge 0$)**

$$
2x - 4 \ge 0 \implies 2x \ge 4 \implies x \ge 2
$$

3. **Studio del Segno del Denominatore ($D > 0$)**

$$
x^2 - 1 > 0 \implies x < -1 \quad \lor \quad x > 1
$$

4. **Tabella dei Segni**
Studiamo il segno di ciascun termine per determinare il segno complessivo della frazione:
- Per $x < -1$: $N < 0$ e $D > 0 \implies$ la frazione è negativa ($-$)
- Per $-1 < x < 1$: $N < 0$ e $D < 0 \implies$ la frazione è positiva ($+$)
- Per $1 < x < 2$: $N < 0$ e $D > 0 \implies$ la frazione è negativa ($-$)
- Per $x \ge 2$: $N \ge 0$ e $D > 0 \implies$ la frazione è positiva o nulla ($+$)

5. **Soluzione Finale**
Poiché si richiede che la frazione sia maggiore o uguale a zero ($\ge 0$), gli intervalli accettabili, escludendo i punti dove il denominatore si annulla ed includendo $x = 2$, sono:

$$
-1 < x < 1 \quad \lor \quad x \ge 2
$$

In notazione ad intervalli:

$$
x \in (-1, 1) \cup [2, +\infty)
$$
