---
year: 4
macro_area: "Valore assoluto"
topic: "Equazioni e disequazioni con valore assoluto"
difficulty: 5
ai_generated: true
tags:
  - "valore assoluto"
  - "disequazioni"
  - "studio del segno"
  - "quadratiche"
  - "parametro"
---
# Problem Text
Determina tutti i valori del parametro reale $k$ per cui la disequazione

$$
|x^2 - 4x| - |x-2| + k < 0
$$

è verificata per ogni $x \in [0,4]$.

# Solution
Su $[0,4]$ si ha $x \ge 0$ e $x-4 \le 0$, quindi $x(x-4) \le 0$ e

$$
|x^2 - 4x| = |x(x-4)| = -x(x-4) = 4x - x^2.
$$

Inoltre $|x-2| = 2-x$ se $0 \le x < 2$ e $|x-2| = x-2$ se $2 \le x \le 4$.

**Caso 1:** $0 \le x \le 2$. La disequazione diventa

$$
(4x - x^2) - (2-x) + k < 0 \quad \Rightarrow \quad f_1(x) + k < 0,
$$

con $f_1(x) = -x^2 + 5x - 2$. La parabola ha concavità verso il basso e vertice in $x = \frac{5}{2} \notin [0,2]$, quindi su $[0,2]$ è crescente:

$$
\min f_1 = f_1(0) = -2, \qquad \max f_1 = f_1(2) = 4.
$$

Perché $f_1(x) + k < 0$ valga per **ogni** $x \in [0,2]$ occorre che il **massimo** sia negativo:

$$
\max f_1 + k < 0 \quad \Rightarrow \quad 4 + k < 0 \quad \Rightarrow \quad k < -4.
$$

**Caso 2:** $2 \le x \le 4$. La disequazione diventa

$$
(4x - x^2) - (x-2) + k < 0 \quad \Rightarrow \quad f_2(x) + k < 0,
$$

con $f_2(x) = -x^2 + 3x + 2$. Il vertice è in $x = \frac{3}{2} \notin [2,4]$ e $f_2$ è decrescente su $[2,4]$:

$$
\max f_2 = f_2(2) = 4, \qquad \min f_2 = f_2(4) = -2.
$$

Di nuovo, la condizione per ogni $x \in [2,4]$ è

$$
\max f_2 + k < 0 \quad \Rightarrow \quad 4 + k < 0 \quad \Rightarrow \quad k < -4.
$$

I due casi danno la stessa condizione. Se $k = -4$, allora in $x = 2$ si ha $f_1(2)+k = 0$, quindi la disequazione stretta fallisce. Se $k < -4$, entrambi i massimi restano strettamente negativi.

**Risposta:** $k < -4$.
