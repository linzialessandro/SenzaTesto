---
year: 4
macro_area: "Disequazioni di grado superiore e fratte"
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
  generated_at: "2026-08-06T14:27:23+00:00"
tags:
  - "disequazioni fratte"
  - "segno"
  - "intervalli"
---
# Problem Text
Risolvi la disequazione: $\frac{x-2}{x+3} > 0$

# Solution
Studiamo il segno del numeratore e del denominatore separatamente. Il numeratore si annulla per $x=2$, il denominatore per $x=-3$. Questi due punti dividono l'asse reale in tre intervalli: $(-\infty, -3)$, $(-3, 2)$, $(2, +\infty)$. Scegliamo un punto test in ciascun intervallo:

- In $(-\infty, -3)$, prendiamo $x=-4$: $\frac{-4-2}{-4+3} = \frac{-6}{-1} = 6 > 0$, quindi positivi.
- In $(-3, 2)$, prendiamo $x=0$: $\frac{0-2}{0+3} = \frac{-2}{3} < 0$, quindi negativi.
- In $(2, +\infty)$, prendiamo $x=3$: $\frac{3-2}{3+3} = \frac{1}{6} > 0$, quindi positivi.

La disequazione è $>0$, quindi prendiamo gli intervalli dove il segno è positivo. Inoltre, poiché la frazione deve essere strettamente positiva, escludiamo i punti in cui numeratore o denominatore si annullano: $x=2$ dà $0$ (non accettabile) e $x=-3$ dà denominatore nullo (non accettabile). La soluzione è:

$$
x \in (-\infty, -3) \cup (2, +\infty)
$$
