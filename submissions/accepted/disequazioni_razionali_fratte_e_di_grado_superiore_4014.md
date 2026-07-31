---
year: 4
macro_area: "Algebra"
topic: "Disequazioni razionali fratte e di grado superiore"
difficulty: 2
ai_generated: true
tags:
  - "disequazioni fratte"
  - "disequazioni polinomiali"
  - "metodo dei segni"
  - "campo di esistenza"
---
# Problem Text
Risolvere la seguente disequazione razionale fratta:

$$\frac{x^3 - 4x}{x^2 - 2x - 3} \le 0$$

# Solution
1. **Condizioni di Esistenza (C.E.):**
Imponiamo che il denominatore sia diverso da zero:
$$x^2 - 2x - 3 \neq 0 \iff (x - 3)(x + 1) \neq 0 \iff x \neq -1 \quad \text{e} \quad x \neq 3$$

2. **Scomposizione in fattori:**
Scomponiamo in fattori di primo grado sia il numeratore sia il denominatore:
- Numeratore: $N(x) = x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$
- Denominatore: $D(x) = x^2 - 2x - 3 = (x - 3)(x + 1)$

La disequazione riscritta è:
$$\frac{x(x - 2)(x + 2)}{(x - 3)(x + 1)} \le 0$$

3. **Studio del segno dei singoli fattori:**
Poniamo ciascun fattore strettamente maggiore di zero ($> 0$):
- $f_1(x) = x + 2 > 0 \iff x > -2$
- $f_2(x) = x + 1 > 0 \iff x > -1$
- $f_3(x) = x > 0$
- $f_4(x) = x - 2 > 0 \iff x > 2$
- $f_5(x) = x - 3 > 0 \iff x > 3$

4. **Quadro dei segni:**
Ordiniamo i valori critici sulla retta reale: $-2, -1, 0, 2, 3$.
Valutando il prodotto dei segni in ciascun intervallo:
- $(-\infty, -2)$: 5 fattori negativi $\implies (-)$
- $(-2, -1)$: 4 negativi, 1 positivo $\implies (+)$
- $(-1, 0)$: 3 negativi, 2 positivi $\implies (-)$
- $(0, 2)$: 2 negativi, 3 positivi $\implies (+)$
- $(2, 3)$: 1 negativo, 4 positivi $\implies (-)$
- $(3, +\infty)$: 5 fattori positivi $\implies (+)$

5. **Inclusione degli zeri e conclusione:**
Richiedendo il segno negativo o nullo ($\le 0$):
- Includiamo i punti in cui il numeratore si annulla: $x = -2, 0, 2$.
- Escludiamo i punti di discontinuità prescritti dalle C.E.: $x = -1, 3$.

L'insieme delle soluzioni è:
$$x \le -2 \quad \lor \quad -1 < x \le 0 \quad \lor \quad 2 \le x < 3$$
