---
year: 2
macro_area: "Algebra"
topic: "Equazioni razionali fratte"
difficulty: 2
tags:
  - "equazioni fratte"
  - "frazioni algebriche"
  - "condizioni di esistenza"
  - "algebra"
ai_generated: true
---
# Problem Text
Risolvi la seguente equazione razionale fratta:

$$
\frac{x - 3}{x^2 - 4} - \frac{1}{x - 2} = \frac{3}{x + 2}
$$

# Solution
**1. Scomposizione dei denominatori**
Scomponiamo in fattori i denominatori presenti nell'equazione:
- $x^2 - 4 = (x - 2)(x + 2)$ (differenza di due quadrati);
- $(x - 2)$ e $(x + 2)$ sono già espressi come fattori di primo grado non scomponibili.

L'equazione può essere riscritta come:

$$
\frac{x - 3}{(x - 2)(x + 2)} - \frac{1}{x - 2} = \frac{3}{x + 2}
$$

**2. Condizioni di Esistenza (C.E.)**
Imponiamo che tutti i denominatori siano diversi da zero per garantire la validità delle frazioni algebriche:

$$
\begin{cases}
x - 2 \neq 0 \\
x + 2 \neq 0
\end{cases} \implies \begin{cases}
x \neq 2 \\
x \neq -2
\end{cases}
$$

Pertanto, le Condizioni di Esistenza sono: $C.E.: x \neq \pm 2$.

**3. Ricerca del minimo comune denominatore (m.c.d.) e semplificazione**
Il m.c.d. dei denominatori è $(x - 2)(x + 2)$. Moltiplichiamo entrambi i membri dell'equazione per il m.c.d. (operazione lecita sotto le ipotesi delle C.E.):

$$
x - 3 - 1 \cdot (x + 2) = 3 \cdot (x - 2)
$$

**4. Sviluppo algebrico e risoluzione**
Sviluppiamo i calcoli algebrici per trovare il valore di $x$:

$$
x - 3 - x - 2 = 3x - 6 \implies -5 = 3x - 6 \implies 3x = 1 \implies x = \frac{1}{3}
$$

**5. Verifica della soluzione**
Confrontiamo la soluzione ottenuta $x = \frac{1}{3}$ con le Condizioni di Esistenza ($x \neq \pm 2$). Poiché il valore trovato non coincide con i valori esclusi, la soluzione è accettabile.

La soluzione dell'equazione è:

$$
x = \frac{1}{3}
$$
