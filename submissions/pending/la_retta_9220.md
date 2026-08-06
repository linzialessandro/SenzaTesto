---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:53:21+00:00"
tags:
  - "retta"
  - "perpendicolarit\u00e0"
  - "intersezione"
  - "distanza punto-retta"
---
# Problem Text
Nel piano cartesiano è data la retta r di equazione $2x - 3y + 6 = 0$ e il punto $A(1,2)$. Determina l'equazione della retta $s$ passante per $A$ e perpendicolare a $r$. Calcola poi le coordinate del punto $P$ di intersezione tra $s$ e la retta $t$ di equazione $x + y = 0$. Infine, calcola la distanza del punto $A$ dalla retta $r$.

# Solution
La retta $r$ ha equazione implicita $2x - 3y + 6 = 0$. Il suo coefficiente angolare è $m_r = -\frac{A}{B} = -\frac{2}{-3} = \frac{2}{3}$. Una retta perpendicolare a $r$ ha coefficiente angolare $m_s = -\frac{1}{m_r} = -\frac{3}{2}$. Poiché $s$ passa per $A(1,2)$, la sua equazione in forma esplicita è $y - 2 = -\frac{3}{2}(x - 1)$, cioè $y = -\frac{3}{2}x + \frac{7}{2}$. In forma implicita: $3x + 2y - 7 = 0$.

Per trovare l'intersezione con $t: x + y = 0$ (ovvero $y = -x$), sostituiamo in $s$: $3x + 2(-x) - 7 = 0$ da cui $x = 7$ e $y = -7$. Quindi $P(7,-7)$.

La distanza di $A$ da $r$ si calcola con la formula $d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$: $d = \frac{|2\cdot 1 - 3\cdot 2 + 6|}{\sqrt{2^2 + (-3)^2}} = \frac{|2 - 6 + 6|}{\sqrt{13}} = \frac{2}{\sqrt{13}} = \frac{2\sqrt{13}}{13}$.
