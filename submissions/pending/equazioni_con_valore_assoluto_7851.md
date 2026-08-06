---
year: 4
macro_area: "Valore assoluto"
topic: "Equazioni con valore assoluto"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:09:07+00:00"
tags:
  - "valore assoluto"
  - "equazioni"
  - "intervalli"
---
# Problem Text
Risolvi l'equazione $|x-2| + |x+3| = 7$.

# Solution
Studiamo i segni delle espressioni dentro i valori assoluti: $x-2$ cambia segno in $x=2$ e $x+3$ in $x=-3$. Consideriamo tre intervalli.

**1° intervallo: $x < -3$**
In questo intervallo $x-2<0$ e $x+3<0$, quindi:
$$|x-2| = 2-x, \quad |x+3| = -x-3$$
L'equazione diventa:
$$(2-x) + (-x-3) = 7 \Rightarrow -2x -1 = 7 \Rightarrow -2x = 8 \Rightarrow x = -4$$
Poiché $-4 < -3$, la soluzione è accettabile.

**2° intervallo: $-3 \le x \le 2$**
Qui $x-2 \le 0$ e $x+3 \ge 0$, quindi:
$$|x-2| = 2-x, \quad |x+3| = x+3$$
L'equazione diventa:
$$(2-x) + (x+3) = 7 \Rightarrow 5 = 7$$
Impossibile, quindi nessuna soluzione in questo intervallo.

**3° intervallo: $x > 2$**
Qui $x-2 > 0$ e $x+3 > 0$, quindi:
$$|x-2| = x-2, \quad |x+3| = x+3$$
L'equazione diventa:
$$(x-2) + (x+3) = 7 \Rightarrow 2x+1 = 7 \Rightarrow 2x = 6 \Rightarrow x = 3$$
Poiché $3 > 2$, la soluzione è accettabile.

In conclusione, le soluzioni sono $x = -4$ e $x = 3$.
