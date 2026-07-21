---
year: 4
macro_area: "Algebra"
topic: "Disequazioni di grado superiore e fratte"
difficulty: 2
ai_generated: true
tags:
  - "disequazioni fratte"
  - "secondo grado"
  - "metodo grafico"
  - "tabella dei segni"
---
# Problem Text
Risolvi la seguente disequazione razionale fratta:

$$
\frac{x^2 - 4}{x^2 - 3x} \le 0
$$

# Solution
**1. Condizioni di Esistenza (C.E.):**
Il denominatore deve essere strettamente diverso da zero:

$$
x^2 - 3x \neq 0 \implies x(x - 3) \neq 0 \implies x \neq 0 \quad \text{e} \quad x \neq 3
$$

**2. Studio del segno del Numeratore ($N \ge 0$):**

$$
x^2 - 4 \ge 0
$$

L'equazione associata $x^2 - 4 = 0$ ha soluzioni $x = \pm 2$. Trattandosi di una parabola con concavità rivolta verso l'alto, la disequazione è verificata per valori esterni alle radici:

$$
x \le -2 \quad \lor \quad x \ge 2
$$

**3. Studio del segno del Denominatore ($D > 0$):**

$$
x^2 - 3x > 0
$$

L'equazione associata $x(x - 3) = 0$ ha soluzioni $x = 0$ e $x = 3$. La parabola con concavità rivolta verso l'alto è positiva per valori esterni:

$$
x < 0 \quad \lor \quad x > 3
$$

**4. Grafico e confronto dei segni:**
I punti di cambio segno, disposti in ordine crescente, sono $-2$, $0$, $2$, $3$. Analizziamo il segno del rapporto nei vari intervalli:
- Per $x < -2$: $N \ge 0 (+)$, $D > 0 (+) \implies \text{Fratta } \ge 0 (+)$
- Per $-2 < x < 0$: $N \le 0 (-)$, $D > 0 (+) \implies \text{Fratta } \le 0 (-)$
- Per $0 < x < 2$: $N \le 0 (-)$, $D < 0 (-) \implies \text{Fratta } \ge 0 (+)$
- Per $2 < x < 3$: $N \ge 0 (+)$, $D < 0 (-) \implies \text{Fratta } \le 0 (-)$
- Per $x > 3$: $N \ge 0 (+)$, $D > 0 (+) \implies \text{Fratta } \ge 0 (+)$

**5. Conclusione:**
Poiché la disequazione richiede che il valore della frazione sia negativo o nullo ($\le 0$), consideriamo gli intervalli con segno negativo, includendo i valori che annullano il numeratore ($x = -2$ e $x = 2$) ed escludendo le restrizioni del denominatore ($x = 0$ e $x = 3$):

$$
-2 \le x < 0 \quad \lor \quad 2 \le x < 3
$$

In notazione per intervalli: $x \in [-2, 0) \cup [2, 3)$.
