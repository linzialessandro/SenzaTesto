---
year: 5
macro_area: "Integrali indefiniti"
topic: "Integrazione per sostituzione"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:53:22+00:00"
tags:
  - "integrali"
  - "sostituzione"
  - "funzioni razionali"
---
# Problem Text
Calcola l'integrale indefinito $\int \frac{1}{2x+3} \, dx$.

# Solution
Si applica la sostituzione $u = 2x+3$, da cui $du = 2\, dx$, ovvero $dx = \frac{du}{2}$. L'integrale diventa:

$$
\int \frac{1}{2x+3} \, dx = \frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln|2x+3| + C.
$$
