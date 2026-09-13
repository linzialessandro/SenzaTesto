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
  generated_at: "2026-09-13T09:25:00+00:00"
  source: submissions/rejected salvage
tags:
  - "valore assoluto"
  - "disequazioni"
  - "parametro"
  - "discussione"
---
# Problem Text
Risolvi e discuti la disequazione $|2x - a| < x + 1$ al variare del parametro reale $a$.

# Solution
Consideriamo la disequazione:
$$
|2x - a| < x + 1
$$
Poiché $|2x - a| \ge 0$ per ogni $x \in \mathbb{R}$, affinché la disequazione ammetta soluzioni è condizione necessaria che il secondo membro sia strettamente positivo:
$$
x + 1 > 0 \iff x > -1
$$

Sotto tale condizione, una disequazione della forma $|A| < B$ equivale alla doppia disuguaglianza $-B < A < B$:
$$
-(x + 1) < 2x - a < x + 1
$$
Risolviamo separatamente le due disuguaglianze:

1. Prima disuguaglianza:
$$
2x - a < x + 1 \iff x < a + 1
$$

2. Seconda disuguaglianza:
$$
2x - a > -x - 1 \iff 3x > a - 1 \iff x > \frac{a - 1}{3}
$$

Le soluzioni $x$ devono quindi soddisfare contemporaneamente:
$$
\begin{cases}
x > -1 \\
x > \frac{a - 1}{3} \\
x < a + 1
\end{cases}
$$
ovvero:
$$
\max\left(-1, \frac{a - 1}{3}\right) < x < a + 1
$$

Affinché esista un intervallo di soluzioni non vuoto, deve risultare sia $-1 < a + 1$ che $\frac{a - 1}{3} < a + 1$:
- $-1 < a + 1 \iff a > -2$
- $\frac{a - 1}{3} < a + 1 \iff a - 1 < 3a + 3 \iff 2a > -4 \iff a > -2$

Se $a \le -2$, l'estremo inferiore dell'intervallo non è strettamente minore dell'estremo superiore, pertanto non esiste alcuna soluzione reale:
$$
S = \emptyset
$$

Se $a > -2$, confrontiamo $-1$ e $\frac{a - 1}{3}$:
$$
\frac{a - 1}{3} > -1 \iff a - 1 > -3 \iff a > -2
$$
Quindi, per ogni $a > -2$, si ha sempre $\frac{a - 1}{3} > -1$, da cui:
$$
\max\left(-1, \frac{a - 1}{3}\right) = \frac{a - 1}{3}
$$

In conclusione, al variare di $a \in \mathbb{R}$:
- Se $a \le -2$: l'insieme delle soluzioni è vuoto ($S = \emptyset$).
- Se $a > -2$: le soluzioni sono date dall'intervallo aperto:
$$
\frac{a - 1}{3} < x < a + 1
$$
