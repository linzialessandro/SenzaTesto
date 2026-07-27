---
year: 4
macro_area: "Algebra e Funzioni"
topic: "Disequazioni di grado superiore e fratte"
difficulty: 3
ai_generated: true
tags:
  - "disequazioni fratte"
  - "disequazioni di grado superiore"
  - "metodo dei segni"
  - "scomposizione in fattori"
  - "regola di Ruffini"
  - "condizioni di esistenza"
---
# Problem Text
Determina l'insieme delle soluzioni della seguente disequazione razionale fratta:

$$
\frac{x^3 - 2x^2 - 5x + 6}{x^2 - 4} \le 0
$$

# Solution
**1. Condizioni di Esistenza (C.E.)**
Imponiamo che il denominatore sia diverso da zero:

$$
x^2 - 4 \neq 0 \iff (x - 2)(x + 2) \neq 0 \iff x \neq -2 \land x \neq 2
$$

**2. Scomposizione in fattori**
- **Denominatore:** $D(x) = (x - 2)(x + 2)$.
- **Numeratore:** $N(x) = x^3 - 2x^2 - 5x + 6$.
  Poiché $N(1) = 1 - 2 - 5 + 6 = 0$, per il teorema di Ruffini $N(x)$ è divisibile per $(x - 1)$:
  
$$
N(x) = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2)
$$

**3. Semplificazione e Studio del Segno**
Sostituendo le scomposizioni, la disequazione diventa:

$$
\frac{(x - 1)(x - 3)(x + 2)}{(x - 2)(x + 2)} \le 0
$$

Sotto la condizione $x \neq -2$, possiamo semplificare il fattore comune $(x + 2)$:

$$
\frac{(x - 1)(x - 3)}{x - 2} \le 0 \quad \text{con } x \neq -2
$$

Studiamo il segno dei singoli fattori:
- $x - 1 \ge 0 \iff x \ge 1$
- $x - 3 \ge 0 \iff x \ge 3$
- $x - 2 > 0 \iff x > 2$

Dal quadro dei segni per i tre fattori:
- Per $x < 1$: tre fattori negativi $\implies$ segno negativo ($-$);
- Per $1 \le x < 2$: due fattori negativi e uno positivo $\implies$ segno positivo ($+$);
- Per $2 < x \le 3$: un fattore negativo e due positivi $\implies$ segno negativo ($-$);
- Per $x > 3$: tre fattori positivi $\implies$ segno positivo ($+$).

I valori $x = 1$ e $x = 3$ annullano il numeratore e soddisfano la disuguaglianza non stretta ($\le 0$). Il valore $x = 2$ annulla il denominatore ed è quindi escluso.

**4. Conclusione**
Tenendo conto della condizione di esistenza $x \neq -2$ (che esclude il punto $-2$ dall'intervallo $x \le 1$), l'insieme delle soluzioni è:

$$
x < -2 \lor -2 < x \le 1 \lor 2 < x \le 3
$$

In notazione per intervalli:

$$
S = (-\infty, -2) \cup (-2, 1] \cup (2, 3]
$$
