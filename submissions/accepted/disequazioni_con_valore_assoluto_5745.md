---
year: 3
macro_area: "Algebra"
topic: "Disequazioni con valore assoluto"
difficulty: 2
tags:
  - "valore assoluto"
  - "disequazioni fratte"
  - "disequazioni di secondo grado"
---
# Problem Text
Risolvi la seguente disequazione con valore assoluto:

$$
\frac{|x^2 - 4| - 3}{x - 1} \ge 0
$$

# Solution
Per risolvere la disequazione frazionaria:

$$
\frac{|x^2 - 4| - 3}{x - 1} \ge 0
$$

studiamo separatamente il segno del numeratore e del denominatore.

**1. Studio del Numeratore ($N \ge 0$)**

Poniamo il numeratore maggiore o uguale a zero:

$$
|x^2 - 4| - 3 \ge 0 \implies |x^2 - 4| \ge 3
$$

Questa disequazione si scinde in due sistemi equivalenti alla disgiunzione:

$$
x^2 - 4 \le -3 \quad \lor \quad x^2 - 4 \ge 3
$$

*   Risolviamo la prima parte:

$$
x^2 \le 1 \implies -1 \le x \le 1
$$

*   Risolviamo la seconda parte:

$$
x^2 \ge 7 \implies x \le -\sqrt{7} \quad \lor \quad x \ge \sqrt{7}
$$

Unendo le soluzioni, il numeratore è positivo o nullo negli intervalli:

$$
x \in (-\infty, -\sqrt{7}] \cup [-1, 1] \cup [\sqrt{7}, +\infty)
$$

**2. Studio del Denominatore ($D > 0$)**

Il denominatore deve essere strettamente positivo (escludendo il valore in cui si annulla):

$$
x - 1 > 0 \implies x > 1
$$

**3. Tabella dei Segni e Conclusione**

Effettuiamo il prodotto dei segni tra il numeratore $N$ e il denominatore $D$:

*   Per $x < -\sqrt{7}$: $N > 0$ e $D < 0 \implies$ quoziente negativo ($-$).
*   Per $x = -\sqrt{7}$: $N = 0 \implies$ quoziente nullo ($0$).
*   Per $-\sqrt{7} < x < -1$: $N < 0$ e $D < 0 \implies$ quoziente positivo ($+$).
*   Per $x = -1$: $N = 0 \implies$ quoziente nullo ($0$).
*   Per $-1 < x < 1$: $N > 0$ e $D < 0 \implies$ quoziente negativo ($-$).
*   Per $x = 1$: $D = 0 \implies$ quoziente non definito.
*   Per $1 < x < \sqrt{7}$: $N < 0$ e $D > 0 \implies$ quoziente negativo ($-$).
*   Per $x = \sqrt{7}$: $N = 0 \implies$ quoziente nullo ($0$).
*   Per $x > \sqrt{7}$: $N > 0$ e $D > 0 \implies$ quoziente positivo ($+$).

Dovendo determinare dove la frazione è maggiore o uguale a zero ($\ge 0$), selezioniamo gli intervalli in cui il quoziente è positivo o nullo. 

La soluzione finale è:

$$
-\sqrt{7} \le x \le -1 \quad \lor \quad x \ge \sqrt{7}
$$

ovvero, scritta sotto forma di intervalli:

$$
x \in [-\sqrt{7}, -1] \cup [\sqrt{7}, +\infty)
$$
