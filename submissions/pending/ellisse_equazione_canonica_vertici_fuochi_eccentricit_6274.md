---
year: 3
macro_area: "Coniche"
topic: "Ellisse: equazione canonica, vertici, fuochi, eccentricit\u00e0"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:12:20+00:00"
tags:
  - "ellisse"
  - "equazione canonica"
  - "fuochi"
  - "eccentricit\u00e0"
---
# Problem Text
Un'ellisse ha i fuochi in $F_1(-3,0)$ e $F_2(3,0)$ e il suo asse maggiore misura 10. Determina l'equazione canonica dell'ellisse, le coordinate dei vertici e l'eccentricità.

# Solution
Dalla posizione dei fuochi (sull'asse x) segue che l'asse maggiore è orizzontale, quindi l'equazione canonica è $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $a > b > 0$.

La distanza focale è $2c$, dove $c = 3$ (poiché i fuochi hanno coordinate $(-c,0)$ e $(c,0)$), quindi $c = 3$. Il semiasse maggiore $a$ è la metà dell'asse maggiore: $2a = 10 \Rightarrow a = 5$.

Usando la relazione $b^2 = a^2 - c^2$:

$$
b^2 = 5^2 - 3^2 = 25 - 9 = 16
$$

Quindi $b = 4$.

L'equazione canonica è:

$$
\frac{x^2}{25} + \frac{y^2}{16} = 1
$$

I vertici sono i punti di intersezione dell'ellisse con gli assi: sull'asse x: $(\pm a, 0) = (\pm 5, 0)$; sull'asse y: $(0, \pm b) = (0, \pm 4)$.

L'eccentricità è:

$$
e = \frac{c}{a} = \frac{3}{5}
$$

Quindi l'ellisse ha equazione $\frac{x^2}{25} + \frac{y^2}{16} = 1$, vertici in $(\pm 5,0)$ e $(0,\pm 4)$, eccentricità $\frac{3}{5}$.
