---
year: 2
macro_area: "Frazioni algebriche"
topic: "Equazioni e disequazioni razionali fratte con parametro"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T13:03:56+00:00"
tags:
  - "frazioni algebriche"
  - "disequazioni fratte"
  - "condizioni di esistenza"
  - "discussione parametrica"
---
# Problem Text
Al variare del parametro reale $a$, risolvi la disequazione $\frac{x^2 - (a+1)x + a}{x^2 - 3x + 2} > 0$.

# Solution
Il dominio è dato da $x^2 - 3x + 2 \neq 0$, cioè $(x-1)(x-2)\neq 0$, quindi $x \neq 1$ e $x \neq 2$. Il numeratore si fattorizza: $x^2 - (a+1)x + a = (x-1)(x-a)$. Pertanto, per $x \neq 1$, possiamo semplificare la frazione ottenendo $\frac{x-a}{x-2}$. La disequazione diventa $\frac{x-a}{x-2} > 0$ con le condizioni $x \neq 1$ e $x \neq 2$. Ora studiamo il segno del quoziente al variare di $a$. I punti critici sono $x=a$ e $x=2$. Distinguiamo i casi:

1. $a < 2$: allora la soluzione di $\frac{x-a}{x-2} > 0$ è $x < a$ o $x > 2$. Dobbiamo imporre $x\neq 1$. 
   - Se $a \le 1$, allora $1$ non appartiene all'intervallo $(-\infty, a)$, quindi la soluzione è $(-\infty, a) \cup (2, +\infty)$.
   - Se $1 < a < 2$, allora $1$ è in $(-\infty, a)$, quindi va escluso: la soluzione è $(-\infty, 1) \cup (1, a) \cup (2, +\infty)$.

2. $a = 2$: la frazione semplificata diventa $1$, quindi la disequazione è vera per ogni $x$ del dominio, cioè $x \in \mathbb{R} \setminus \{1,2\}$.

3. $a > 2$: la soluzione di $\frac{x-a}{x-2} > 0$ è $x < 2$ o $x > a$. Escludendo $x=1$ (che è in $x<2$), otteniamo $(-\infty, 1) \cup (1, 2) \cup (a, +\infty)$.

In sintesi, l'insieme delle soluzioni è:
- per $a \le 1$: $(-\infty, a) \cup (2, +\infty)$;
- per $1 < a < 2$: $(-\infty, 1) \cup (1, a) \cup (2, +\infty)$;
- per $a = 2$: $\mathbb{R} \setminus \{1,2\}$;
- per $a > 2$: $(-\infty, 1) \cup (1, 2) \cup (a, +\infty)$.
