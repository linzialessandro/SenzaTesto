---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:57:48+00:00"
tags:
  - "integrali indefiniti"
  - "integrali immediati"
  - "sostituzione"
  - "primitiva"
---
# Problem Text
Calcola l'integrale indefinito $\int x\sqrt{x^2+1}\, dx$.

# Solution
Poniamo $u = x^2 + 1$. Allora $du = 2x\, dx$, da cui $x\, dx = \frac{1}{2}\, du$. Sostituendo:

$$
\int x\sqrt{x^2+1}\, dx = \int \sqrt{u} \cdot \frac{1}{2}\, du = \frac{1}{2} \int u^{1/2}\, du.
$$

Usando l'integrale immediato $\int u^{\alpha}\, du = \frac{u^{\alpha+1}}{\alpha+1} + C$ per $\alpha = \frac{1}{2}$, otteniamo:

$$
\frac{1}{2} \cdot \frac{u^{3/2}}{3/2} + C = \frac{1}{3} u^{3/2} + C.
$$

Ritornando alla variabile $x$:

$$
\int x\sqrt{x^2+1}\, dx = \frac{1}{3} (x^2+1)^{3/2} + C.
$$
