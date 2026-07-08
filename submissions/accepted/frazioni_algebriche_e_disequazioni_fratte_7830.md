---
year: 2
macro_area: "Algebra"
topic: "Frazioni algebriche e disequazioni fratte"
difficulty: 3
tags:
  - "Frazioni algebriche"
  - "Disequazioni fratte"
  - "Condizioni di esistenza"
---
# Problem Text
Risolvi la seguente disequazione fratta, determinando preliminarmente le sue condizioni di esistenza ($C.E.$):

$$
\frac{x^2 - 4}{x^2 - 3x} \ge \frac{x+2}{x}
$$

# Solution
**1. Condizioni di esistenza (C.E.)**

Scomponiamo i denominatori per individuare i valori che li annullano:

$$
x^2 - 3x = x(x-3)
$$

Tutti i denominatori devono essere diversi da zero:

$$
\begin{cases}
x \neq 0 \\
x - 3 \neq 0
\end{cases}
\implies C.E.: x \neq 0 \ \land \ x \neq 3
$$

**2. Semplificazione della disequazione**

Spostiamo tutti i termini al primo membro per confrontare la frazione con lo zero:

$$
\frac{x^2 - 4}{x(x - 3)} - \frac{x+2}{x} \ge 0
$$

Calcoliamo il minimo comune denominatore, che è $x(x-3)$:

$$
\frac{x^2 - 4 - (x + 2)(x - 3)}{x(x - 3)} \ge 0
$$

Sviluppiamo i calcoli al numeratore:

$$
\frac{x^2 - 4 - (x^2 - x - 6)}{x(x - 3)} \ge 0
$$

$$
\frac{x^2 - 4 - x^2 + x + 6}{x(x - 3)} \ge 0
$$

$$
\frac{x + 2}{x(x - 3)} \ge 0
$$

**3. Studio dei segni ed esclusione dei valori vietati**

Studiamo separatamente il segno dei singoli fattori del numeratore e del denominatore:

*   **Numeratore (N):** $x + 2 \ge 0 \implies x \ge -2$
*   **Denominatore 1 ($D_1$):** $x > 0$
*   **Denominatore 2 ($D_2$):** $x - 3 > 0 \implies x > 3$

Costruiamo la tabella dei segni complessiva:

*   Per $x < -2$: $N < 0, D_1 < 0, D_2 < 0 \implies$ segno totale negativo ($-$)
*   Per $x = -2$: $N = 0 \implies$ segno totale nullo ($0$)
*   Per $-2 < x < 0$: $N > 0, D_1 < 0, D_2 < 0 \implies$ segno totale positivo ($+$)
*   Per $0 < x < 3$: $N > 0, D_1 > 0, D_2 < 0 \implies$ segno totale negativo ($-$)
*   Per $x > 3$: $N > 0, D_1 > 0, D_2 > 0 \implies$ segno totale positivo ($+$)

Poiché cerchiamo gli intervalli in cui la frazione è maggiore o uguale a zero ($\ge 0$), escludendo i punti in cui il denominatore si annulla ($x \neq 0$ e $x \neq 3$), l'intervallo delle soluzioni è:

$$
-2 \le x < 0 \quad \lor \quad x > 3
$$

In notazione ad intervalli:

$$
x \in [-2, 0) \cup (3, +\infty)
$$
