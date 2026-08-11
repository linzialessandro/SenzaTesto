---
year: 4
macro_area: "Disequazioni"
topic: "Disequazioni razionali fratte"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:13:32+00:00"
tags:
  - "disequazioni"
  - "razionali"
  - "segno"
  - "quadratica"
---
# Problem Text
Risolvi la disequazione $\dfrac{x^2 - 2x - 2}{x - 1} \ge 0$.

# Solution
Il dominio richiede $x \neq 1$. Sia $N(x) = x^2 - 2x - 2$ e $D(x) = x - 1$.

Per $N(x)$: $\Delta = 4 + 8 = 12$, quindi le radici sono $x = 1 \pm \sqrt{3}$. Poiché il coefficiente di $x^2$ è positivo,
$N(x) > 0$ per $x < 1 - \sqrt{3}$ o $x > 1 + \sqrt{3}$, e $N(x) < 0$ per $1 - \sqrt{3} < x < 1 + \sqrt{3}$.

Il denominatore $D(x)$ è positivo per $x > 1$ e negativo per $x < 1$.

Sui quattro intervalli determinati da $1 - \sqrt{3}$, $1$ e $1 + \sqrt{3}$:
- su $(1 - \sqrt{3},\ 1)$ il rapporto è positivo (numeratore negativo, denominatore negativo);
- su $(1 + \sqrt{3},\ +\infty)$ il rapporto è positivo (entrambi positivi);
- sugli altri intervalli aperti il rapporto è negativo.

Poiché la disequazione è $\ge 0$, includiamo gli zeri del numeratore $x = 1 \pm \sqrt{3}$ ed escludiamo $x = 1$.

Soluzione: $[1 - \sqrt{3},\ 1) \cup [1 + \sqrt{3},\ +\infty)$.
