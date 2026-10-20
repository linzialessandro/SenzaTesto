---
year: 3
macro_area: "Geometria analitica"
topic: "La retta: parallelismo, intersezione e distanza punto-retta"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:57:57+00:00"
tags:
  - "retta"
  - "coefficiente angolare"
  - "parallelismo"
  - "intersezione"
  - "distanza punto-retta"
---
# Problem Text
Data la retta $r: 3x - 4y + 5 = 0$, sia $s$ la retta passante per $P(2, -1)$ e parallela a $r$. Determina l'equazione di $s$ e calcola la distanza del punto $A$, intersezione di $s$ con la retta $t: x + 2y - 3 = 0$, dalla retta $r$.

# Solution
Scrivo $r$ in forma esplicita: $3x - 4y + 5 = 0 \Rightarrow y = \frac{3}{4}x + \frac{5}{4}$, quindi il coefficiente angolare è $m_r = \frac{3}{4}$. La retta $s$, parallela a $r$, ha lo stesso coefficiente angolare: $m_s = \frac{3}{4}$. Poiché $s$ passa per $P(2, -1)$, impongo $-1 = \frac{3}{4}\cdot 2 + q$, da cui $q = -1 - \frac{3}{2} = -\frac{5}{2}$. Quindi $s: y = \frac{3}{4}x - \frac{5}{2}$.

Interseco $s$ con $t$: $x + 2y - 3 = 0$. Sostituisco $y$: $x + 2\left(\frac{3}{4}x - \frac{5}{2}\right) - 3 = 0 \Rightarrow x + \frac{3}{2}x - 5 - 3 = 0 \Rightarrow \frac{5}{2}x - 8 = 0 \Rightarrow x = \frac{16}{5}$. Allora $y = \frac{3}{4}\cdot\frac{16}{5} - \frac{5}{2} = \frac{12}{5} - \frac{5}{2} = \frac{24-25}{10} = -\frac{1}{10}$. Il punto è $A\left(\frac{16}{5}, -\frac{1}{10}\right)$.

La distanza di $A$ dalla retta $r: 3x - 4y + 5 = 0$ è:
$$d = \frac{|3\cdot\frac{16}{5} - 4\cdot\left(-\frac{1}{10}\right) + 5|}{\sqrt{3^2 + (-4)^2}} = \frac{\left|\frac{48}{5} + \frac{2}{5} + 5\right|}{5} = \frac{|10 + 5|}{5} = \frac{15}{5} = 3.$$
Quindi la distanza richiesta è $3$.
