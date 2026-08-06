---
year: 4
macro_area: "Stereometria"
topic: "Volume del cono"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:07:25+00:00"
tags:
  - "cono"
  - "volume"
  - "solido di rotazione"
  - "apotema"
---
# Problem Text
Calcola il volume di un cono circolare retto con raggio di base di 4 cm e apotema di 5 cm.

# Solution
L'apotema del cono è la distanza dal vertice a un punto della circonferenza di base, quindi il raggio, l'altezza e l'apotema formano un triangolo rettangolo. Con $r = 4$ cm e $a = 5$ cm, si calcola l'altezza $h$ con il teorema di Pitagora:

$$
h = \sqrt{a^2 - r^2} = \sqrt{5^2 - 4^2} = \sqrt{25 - 16} = \sqrt{9} = 3 \text{ cm}
$$

Il volume del cono è $V = \frac{1}{3} \pi r^2 h = \frac{1}{3} \pi (16) (3) = 16\pi \text{ cm}^3$.
