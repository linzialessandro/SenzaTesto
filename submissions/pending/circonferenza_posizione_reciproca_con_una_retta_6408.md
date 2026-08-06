---
year: 3
macro_area: "Geometria Analitica"
topic: "Circonferenza: posizione reciproca con una retta"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:29:20+00:00"
tags:
  - "circonferenza"
  - "retta"
  - "completamento del quadrato"
  - "distanza punto-retta"
---
# Problem Text
Stabilisci se la retta $r: 3x - 4y + 5 = 0$ è tangente, secante o esterna alla circonferenza di equazione $x^2 + y^2 - 4x + 6y - 12 = 0$.

# Solution
Il completamento del quadrato dà:

$$
(x-2)^2 + (y+3)^2 = 25
$$

quindi il centro è $C(2,-3)$ e il raggio $r=5$. La distanza di $C$ dalla retta $3x-4y+5=0$ è:

$$
d = \frac{|3\cdot 2 -4\cdot (-3)+5|}{\sqrt{3^2+(-4)^2}} = \frac{|6+12+5|}{5} = \frac{23}{5}
$$

Poiché $d = 4.6 < 5 = r$, la retta è secante.
