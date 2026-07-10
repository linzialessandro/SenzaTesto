---
year: 2
macro_area: "Algebra"
topic: "Disequazioni di grado superiore e Fratte"
difficulty: 2
tags:
  - "disequazioni"
  - "disequazioni fratte"
  - "metodo grafico della parabola"
  - "metodo dei segni"
  - "algebra"
ai_generated: true
---
# Problem Text
Risolvi la seguente disequazione fratta:

$$
\frac{x^2 - 4x + 3}{x + 2} \le 0
$$

# Solution
Per risolvere la disequazione fratta, studiamo separatamente il segno del numeratore e del denominatore:

1. **Segno del numeratore** ($N \ge 0$):
Poniamo il numeratore maggiore o uguale a zero:

$$
x^2 - 4x + 3 \ge 0
$$

Risolviamo l'equazione di secondo grado associata:

$$
x^2 - 4x + 3 = 0
$$

Utilizzando la formula risolutiva:

$$
x = \frac{4 \pm \sqrt{(-4)^2 - 4 \cdot 1 \cdot 3}}{2 \cdot 1} = \frac{4 \pm 2}{2}
$$

Otteniamo le soluzioni $x_1 = 1$ e $x_2 = 3$. Poiché il coefficiente del termine $x^2$ è positivo ($1 > 0$), la parabola corrispondente volge la concavità verso l'alto (metodo grafico della parabola). La disequazione è perciò soddisfatta per i valori esterni:

$$
x \le 1 \quad \lor \quad x \ge 3
$$

2. **Segno del denominatore** ($D > 0$):
Poniamo il denominatore strettamente maggiore di zero per garantirne l'esistenza:

$$
x + 2 > 0 \implies x > -2
$$

3. **Metodo dei segni (Tabella dei segni)**:
Confrontiamo i segni di $N$ e $D$ per determinare il segno finale della frazione:
- Per $x < -2$: $N > 0$ e $D < 0 \implies$ la frazione ha segno negativo ($-$)
- Per $-2 < x \le 1$: $N \ge 0$ e $D > 0 \implies$ la frazione ha segno positivo o nullo ($+$)
- Per $1 < x < 3$: $N < 0$ e $D > 0 \implies$ la frazione ha segno negativo ($-$)
- Per $x \ge 3$: $N \ge 0$ e $D > 0 \implies$ la frazione ha segno positivo o nullo ($+$)

La frazione non è definita nell'estremo $x = -2$ che annulla il denominatore.

4. **Soluzione finale**:
Poiché la disequazione iniziale richiede che la frazione sia minore o uguale a zero ($\le 0$), selezioniamo gli intervalli in cui il segno complessivo è negativo o nullo, escludendo il valore che annulla il denominatore:

$$
x < -2 \quad \lor \quad 1 \le x \le 3
$$
