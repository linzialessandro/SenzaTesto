---
year: 4
macro_area: "Valore assoluto"
topic: "Equazioni e disequazioni con valore assoluto"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-09-13T09:24:00+00:00"
  source: submissions/rejected salvage
tags:
  - "valore assoluto"
  - "parametro"
  - "discussione"
  - "equazioni"
---
# Problem Text
Discutere il numero di soluzioni dell'equazione $|x^2 - 4x| = a x$ al variare del parametro reale $a$.

# Solution
Esaminiamo l'equazione $|x^2 - 4x| = a x$.
Poiché il primo membro è un valore assoluto, per ogni soluzione deve valere la condizione di concordanza del segno:
$$
ax \ge 0
$$

1. **Soluzione nulla ($x = 0$):**
Sostituendo $x = 0$, otteniamo $|0| = a \cdot 0 \implies 0 = 0$, che è un'identità verificata per qualsiasi valore di $a \in \mathbb{R}$. Dunque $x = 0$ è sempre soluzione.

2. **Soluzioni non nulle ($x \neq 0$):**
Poiché $|x^2 - 4x| = |x||x - 4|$, dividendo entrambi i membri per $|x| > 0$ otteniamo:
$$
|x - 4| = a \frac{x}{|x|}
$$
Distinguiamo i casi in base al segno di $x$:

- **Caso $x > 0$:** In questo caso $\frac{x}{|x|} = 1$, per cui l'equazione diventa:
  $$
  |x - 4| = a
  $$
  Affinché esistano soluzioni positive, deve essere $a \ge 0$.
  - Se $a \ge 0$, le soluzioni sono $x - 4 = a \implies x = 4 + a$ (che è sempre $> 0$ poiché $a \ge 0$) e $x - 4 = -a \implies x = 4 - a$. La seconda soluzione è accettabile se $4 - a > 0 \iff a < 4$. Se $a = 4$, $4 - a = 0$ (che coincide con $x = 0$, già contata). Se $a > 4$, $4 - a < 0$ non è accettabile. Se $a = 0$, $x = 4 + 0 = 4 - 0 = 4$ è un'unica soluzione.
  - Ricapitolando per $x > 0$:
    - Se $a < 0$: $0$ soluzioni positive.
    - Se $a = 0$: $1$ soluzione positiva ($x = 4$).
    - Se $0 < a < 4$: $2$ soluzioni positive ($x = 4 - a$ e $x = 4 + a$).
    - Se $a \ge 4$: $1$ soluzione positiva ($x = 4 + a$).

- **Caso $x < 0$:** In questo caso $\frac{x}{|x|} = -1$, quindi l'equazione diventa:
  $$
  |x - 4| = -a
  $$
  Ciò richiede $-a \ge 0 \iff a \le 0$.
  Le soluzioni sono:
  - $x - 4 = -a \implies x = 4 - a$. Poiché $a \le 0$, abbiamo $4 - a \ge 4 > 0$, che contraddice la condizione $x < 0$.
  - $x - 4 = a \implies x = 4 + a$. Questa è negativa se $4 + a < 0 \iff a < -4$.
  - Ricapitolando per $x < 0$:
    - Se $a < -4$: $1$ soluzione negativa ($x = 4 + a$).
    - Se $a \ge -4$: $0$ soluzioni negative.

3. **Riepilogo generale delle soluzioni distinte:**
Unendo la soluzione $x = 0$ con le eventuali soluzioni non nulle, otteniamo:
- Se $a < -4$: **$2$ soluzioni** ($x = 0$ e $x = 4 + a$).
- Se $-4 \le a < 0$: **$1$ soluzione** ($x = 0$).
- Se $a = 0$: **$2$ soluzioni** ($x = 0$ e $x = 4$).
- Se $0 < a < 4$: **$3$ soluzioni** ($x = 0$, $x = 4 - a$, $x = 4 + a$).
- Se $a \ge 4$: **$2$ soluzioni** ($x = 0$ e $x = 4 + a$).
