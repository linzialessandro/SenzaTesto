---
year: 3
macro_area: Disequazioni di grado superiore e Fratte
topic: Disequazioni fratte
difficulty: 3
tags:
  - disequazioni
  - fratte
  - studio del segno
---
# Problem Text

Risolvere la seguente disequazione fratta:
$$
\frac{x^2 - 5x + 6}{4 - x^2} \ge 0
$$

# Solution

**1. Scomposizione dei polinomi e Condizioni di Esistenza (C.E.):**
Numeratore: $N(x) = x^2 - 5x + 6$.
È un trinomio notevole; cerchiamo due numeri con somma $-5$ e prodotto $6$, che sono $-2$ e $-3$. 
Quindi, $N(x) = (x - 2)(x - 3)$.

Denominatore: $D(x) = 4 - x^2$.
È una differenza di quadrati.
Quindi, $D(x) = (2 - x)(2 + x)$.

Le condizioni di esistenza (C.E.) richiedono che il denominatore sia diverso da zero:
$4 - x^2 \neq 0 \implies x \neq \pm 2$.

**2. Studio del segno del Numeratore ($N \ge 0$):**
Studiamo dove $(x - 2)(x - 3) \ge 0$.
L'equazione associata ha radici $x = 2$ e $x = 3$. La parabola associata è concava verso l'alto (coefficiente di $x^2$ positivo), quindi assume valori positivi all'esterno dell'intervallo delle radici:
$N \ge 0 	ext{ per } x \le 2 \lor x \ge 3$.

**3. Studio del segno del Denominatore ($D > 0$):**
Studiamo dove $4 - x^2 > 0$. Notare che si pone sempre $> 0$ (mai uguale a zero per il denominatore).
L'equazione associata ha radici $x = -2$ e $x = 2$. La parabola associata è concava verso il basso (coefficiente di $x^2$ negativo), quindi assume valori positivi all'interno dell'intervallo delle radici:
$D > 0 	ext{ per } -2 < x < 2$.

**4. Tabella dei segni:**
Costruiamo la tabella per valutare il segno del quoziente $\frac{N}{D}$:
- $N$: $+ \quad 	ext{per } x \le 2$, $\quad - 	ext{ per } 2 < x < 3$, $\quad + 	ext{ per } x \ge 3$.
- $D$: $- \quad 	ext{per } x < -2$, $\quad + 	ext{ per } -2 < x < 2$, $\quad - 	ext{ per } x > 2$.

Quindi la frazione è positiva per $-2 < x < 2$ oppure $2 < x < 3$.
Inoltre, ci viene chiesto $\ge 0$. Dobbiamo includere gli zeri del numeratore che soddisfano le C.E.
Il numeratore si annulla in $x=2$ e $x=3$.
In $x=2$, il denominatore si annulla, quindi $x=2$ non appartiene al dominio (è scartato dalle C.E.).
In $x=3$, il denominatore è $-5 \neq 0$, quindi $x=3$ è una soluzione inclusa.

**5. Soluzione:**
Unendo gli intervalli in cui la frazione è strettamente positiva con i valori in cui si annulla (ed è definita), otteniamo:
$$
-2 < x < 2 \quad \lor \quad 2 < x \le 3
$$
Che può anche essere scritto come: $x \in (-2, 2) \cup (2, 3]$.
