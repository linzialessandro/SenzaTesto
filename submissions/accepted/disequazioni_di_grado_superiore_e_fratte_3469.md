---
year: 4
macro_area: "Algebra"
topic: "Disequazioni di grado superiore e fratte"
difficulty: 2
ai_generated: true
tags:
  - "disequazioni fratte"
  - "grado superiore"
  - "metodo dei segni"
  - "scomposizione in fattori"
---
# Problem Text
Risolvi la seguente disequazione razionale fratta:

$$
\frac{x^3 - 3x^2}{x^2 - 4} \ge 0
$$

# Solution
**Passaggio 1: Scomposizione in fattori e Condizioni di Esistenza**
Scomponiamo in fattori il numeratore e il denominatore:
- Numeratore: $x^3 - 3x^2 = x^2(x - 3)$
- Denominatore: $x^2 - 4 = (x - 2)(x + 2)$

Le Condizioni di Esistenza (C.E.) impongono che il denominatore sia diverso da zero: $x \ne \pm 2$. La disequazione diventa:

$$
\frac{x^2(x - 3)}{(x - 2)(x + 2)} \ge 0
$$

**Passaggio 2: Studio del segno dei fattori del Numeratore**
- $x^2 \ge 0 \implies \forall x \in \mathbb{R}$ (si annulla in $x = 0$)
- $x - 3 \ge 0 \implies x \ge 3$ (si annulla in $x = 3$)

**Passaggio 3: Studio del segno dei fattori del Denominatore**
- $x - 2 > 0 \implies x > 2$
- $x + 2 > 0 \implies x > -2$

**Passaggio 4: Quadro dei segni**
Analizziamo il segno del rapporto nei sottointervalli definiti dai punti $x = -2, 0, 2, 3$:
- Per $x < -2$: $\frac{(+)(-)}{(-)(-)} = \frac{-}{+} = -$
- Per $-2 < x < 2$ ($x \ne 0$): $\frac{(+)(-)}{(-)(+)} = \frac{-}{-} = +$
- Per $x = 0$: la frazione vale $0$, soddisfacendo la disuguaglianza $\ge 0$.
- Per $2 < x < 3$: $\frac{(+)(-)}{(+)(+)} = \frac{-}{+} = -$
- Per $x \ge 3$: $\frac{(+)(\ge 0)}{(+)(+)} \ge 0$

**Passaggio 5: Soluzione finale**
Includendo i valori dove la frazione è positiva o nulla e rispettando il dominio ($x \ne \pm 2$), otteniamo:

$$
-2 < x < 2 \quad \lor \quad x \ge 3
$$
