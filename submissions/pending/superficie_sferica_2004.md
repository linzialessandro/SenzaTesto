---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Superficie sferica"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:54:52+00:00"
tags:
  - "sfere"
  - "completamento del quadrato"
  - "centro e raggio"
---
# Problem Text
Determina centro e raggio della superficie sferica di equazione $x^2 + y^2 + z^2 - 4x + 6y - 2z - 11 = 0$.

# Solution
Raccogliamo i termini quadratici e completiamo i quadrati:

$x^2 - 4x = (x-2)^2 - 4$

$y^2 + 6y = (y+3)^2 - 9$

$z^2 - 2z = (z-1)^2 - 1$

Sostituendo nell'equazione:

$$(x-2)^2 - 4 + (y+3)^2 - 9 + (z-1)^2 - 1 - 11 = 0$$

$$(x-2)^2 + (y+3)^2 + (z-1)^2 = 25$$

Questa è la forma canonica della sfera con centro $C(2, -3, 1)$ e raggio $r = \sqrt{25} = 5$.

Quindi il centro è $C(2, -3, 1)$ e il raggio è $5$.
