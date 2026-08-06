---
year: 3
macro_area: "Coniche"
topic: "Ellisse"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:10:56+00:00"
tags:
  - "ellisse"
  - "eccentricit\u00e0"
  - "fuochi"
---
# Problem Text
Un'ellisse ha centro nell'origine, un fuoco nel punto $F_1(4;0)$ e eccentricità $e = \frac{2}{3}$. Determina la sua equazione, le coordinate dell'altro fuoco e dei suoi vertici.

# Solution
Poiché il fuoco è sull'asse $x$, l'ellisse ha semiassi $a$ (orizzontale) e $b$ (verticale), con $c = 4$ (distanza focale). L'eccentricità è $e = \frac{c}{a}$, quindi $a = \frac{c}{e} = \frac{4}{\frac{2}{3}} = 6$. Allora $b^2 = a^2 - c^2 = 36 - 16 = 20$. L'equazione è:

$$
\frac{x^2}{36} + \frac{y^2}{20} = 1
$$

I vertici sull'asse maggiore sono $(\pm 6;0)$, mentre i vertici sull'asse minore sono $(0; \pm \sqrt{20}) = (0; \pm 2\sqrt{5})$. L'altro fuoco è $(-4;0)$.
