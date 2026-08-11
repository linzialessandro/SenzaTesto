---
year: 4
macro_area: "Disequazioni"
topic: "Disequazioni razionali fratte"
difficulty: 1
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
Risolvi la disequazione: $\frac{x^2 - 2x - 2}{x - 1} \ge 0$.

# Solution
Il dominio è $x \neq 1$. Studiamo il segno del numeratore $N(x) = x^2 - 2x - 2$. Il discriminante è $\Delta = 4 + 8 = 12$, quindi le radici sono $x = 1 \pm \sqrt{3}$. Poiché il coefficiente di $x^2$ è positivo, $N(x) > 0$ per $x < 1 - \sqrt{3}$ o $x > 1 + \sqrt{3}$, mentre $N(x) < 0$ per $1 - \sqrt{3} < x < 1 + \sqrt{3}$. Il denominatore $D(x) = x - 1$ è positivo per $x > 1$, negativo per $x < 1$. Consideriamo gli intervalli: $(-\infty, 1-\sqrt{3})$, $(1-\sqrt{3}, 1)$, $(1, 1+\sqrt{3})$, $(1+\sqrt{3}, +\infty)$. Il rapporto è positivo su $(1-\sqrt{3}, 1)$ e su $(1+\sqrt{3}, +\infty)$. Poiché la disequazione è $\ge 0$, includiamo gli zeri del numeratore $1 \pm \sqrt{3}$, mentre $x = 1$ è escluso. Soluzione: $[1-\sqrt{3}, 1) \cup [1+\sqrt{3}, +\infty)$.
