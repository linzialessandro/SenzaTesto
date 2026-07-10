---
year: 2
macro_area: "Algebra"
topic: "Disequazioni razionali fratte"
difficulty: 2
tags:
  - "algebra"
  - "disequazioni"
  - "disequazioni fratte"
  - "secondo grado"
ai_generated: true
---
# Problem Text
Risolvi la seguente disequazione razionale fratta:

$$
\frac{x^2 - 4x + 3}{x - 2} \ge 0
$$

# Solution
**Step 1: Condizione di esistenza (C.E.)**
Il denominatore deve essere diverso da zero:

$$
x - 2 \neq 0 \implies x \neq 2
$$

**Step 2: Segno del Numeratore ($N \ge 0$)**
Risolviamo la disequazione di secondo grado associata al numeratore:

$$
x^2 - 4x + 3 \ge 0
$$

Troviamo le radici dell'equazione associata $x^2 - 4x + 3 = 0$:

$$
x = \frac{4 \pm \sqrt{16 - 12}}{2} = \frac{4 \pm 2}{2} \implies x_1 = 1, \quad x_2 = 3
$$

Poiché il coefficiente di $x^2$ è positivo e il verso è $\ge$, la disequazione è soddisfatta per valori esterni:

$$
x \le 1 \quad \lor \quad x \ge 3
$$

**Step 3: Segno del Denominatore ($D > 0$)**
Studiamo dove il denominatore è positivo:

$$
x - 2 > 0 \implies x > 2
$$

**Step 4: Compilazione della tabella dei segni**
Confrontiamo i segni del numeratore ($N$) e del denominatore ($D$):
- Per $x < 1$: $N$ è positivo ($+$) e $D$ è negativo ($-$) $\implies$ Segno frazione: negativo ($-$)
- Per $1 \le x < 2$: $N$ è negativo ($-$) e $D$ è negativo ($-$) $\implies$ Segno frazione: positivo ($+$)
- Per $2 < x \le 3$: $N$ è negativo ($-$) e $D$ è positivo ($+$) $\implies$ Segno frazione: negativo ($-$)
- Per $x \ge 3$: $N$ è positivo ($+$) e $D$ è positivo ($+$) $\implies$ Segno frazione: positivo ($+$)

I valori $x = 1$ e $x = 3$ annullano la frazione (quindi sono inclusi), mentre $x = 2$ non appartiene al dominio (escluso).

**Step 5: Soluzione finale**
Cerchiamo gli intervalli in cui la frazione è maggiore o uguale a zero ($\ge 0$):

$$
1 \le x < 2 \quad \lor \quad x \ge 3
$$
