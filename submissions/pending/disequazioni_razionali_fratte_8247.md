---
year: 2
macro_area: "Algebra"
topic: "Disequazioni razionali fratte"
difficulty: 2
ai_generated: true
tags:
  - "disequazioni"
  - "disequazioni fratte"
  - "algebra"
  - "secondo grado"
---
# Problem Text
Risolvi la seguente disequazione razionale fratta:

$$
\frac{x^2 - 3x + 2}{x + 1} \le 0
$$

# Solution
Per risolvere la disequazione razionale fratta, studiamo separatamente il segno del numeratore e del denominatore.

**Passo 1: Studio del numeratore**
Poniamo il numeratore maggiore o uguale a zero:

$$
x^2 - 3x + 2 \ge 0
$$

Scomponiamo il trinomio di secondo grado trovando i due numeri aventi somma pari a $-3$ e prodotto pari a $2$, ovvero $-1$ e $-2$:

$$
(x - 1)(x - 2) \ge 0
$$

Le radici dell'equazione associata sono $x = 1$ e $x = 2$. Trattandosi di una disequazione associata a una parabola rivolta verso l'alto con segno $\ge$, le soluzioni sono date dai valori esterni:

$$
x \le 1 \quad \lor \quad x \ge 2
$$

**Passo 2: Studio del denominatore**
Poniamo il denominatore strettamente maggiore di zero per escludere i valori che annullerebbero la frazione:

$$
x + 1 > 0 \implies x > -1
$$

**Passo 3: Studio del segno complessivo**
Costruiamo la tabella dei segni confrontando il numeratore e il denominatore negli intervalli individuati dai punti critici $-1$, $1$ e $2$:
- Per $x < -1$: il numeratore è positivo ($+$) e il denominatore è negativo ($-$), quindi il rapporto è negativo ($-$).
- Per $x = -1$: il denominatore è nullo, quindi la frazione non è definita.
- Per $-1 < x \le 1$: il numeratore è positivo ($+$) e il denominatore è positivo ($+$), quindi il rapporto è positivo ($+$).
- Per $1 \le x \le 2$: il numeratore è negativo ($-$) e il denominatore è positivo ($+$), quindi il rapporto è negativo ($-$).
- Per $x \ge 2$: il numeratore è positivo ($+$) e il denominatore è positivo ($+$), quindi il rapporto è positivo ($+$).

**Passo 4: Scrittura delle soluzioni**
Poiché la disequazione richiede che la frazione sia minore o uguale a zero ($\le 0$), selezioniamo gli intervalli in cui il segno complessivo è negativo o nullo (includendo i valori in cui il numeratore si annulla, ma escludendo $x = -1$):

$$
x < -1 \quad \lor \quad 1 \le x \le 2
$$

In alternativa, espresso in notazione ad intervalli:

$$
x \in (-\infty, -1) \cup [1, 2]
$$
