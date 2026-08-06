---
year: 4
macro_area: "Disequazioni di grado superiore e Fratte"
topic: "Disequazioni razionali fratte con polinomio di secondo grado"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:55:49+00:00"
tags:
  - "disequazioni"
  - "fratte"
  - "metodo dei segni"
  - "parabola"
---
# Problem Text
Risolvi la disequazione fratta: $\frac{x^2 - 4}{x - 1} \ge 0$.

# Solution
Studiamo il segno di numeratore e denominatore separatamente.

**Numeratore:** $x^2 - 4 \ge 0 \iff (x-2)(x+2) \ge 0$. La parabola ha zeri in $x=-2$ e $x=2$, ed è positiva per $x \le -2$ o $x \ge 2$, negativa per $-2 < x < 2$.

**Denominatore:** $x - 1 > 0 \iff x > 1$, quindi $x-1 > 0$ per $x > 1$, $x-1 < 0$ per $x < 1$. Escluso $x=1$ (C.E.).

Costruiamo la tabella dei segni su intervalli determinati dai punti critici $-2$, $1$, $2$ (ordinati).

- Intervallo $(-\infty, -2)$: numeratore $+$, denominatore $-$, quoziente $-$.
- Intervallo $(-2, 1)$: numeratore $-$, denominatore $-$, quoziente $+$.
- Intervallo $(1, 2)$: numeratore $-$, denominatore $+$, quoziente $-$.
- Intervallo $(2, +\infty)$: numeratore $+$, denominatore $+$, quoziente $+$.

Nei punti $x=-2$ e $x=2$ il numeratore si annulla, quindi la frazione vale $0$, che è accettabile ($\ge 0$). In $x=1$ la frazione non è definita.

Quindi la soluzione è: $[-2, 1) \cup [2, +\infty)$.

Verifica per un valore in ciascun intervallo: $x=-3$: $(9-4)/(-4) = 5/(-4) < 0$; $x=0$: $(-4)/(-1)=4 >0$; $x=1.5$: $(2.25-4)/0.5 = -1.75/0.5 <0$; $x=3$: $(9-4)/2 = 5/2 >0$. OK.
