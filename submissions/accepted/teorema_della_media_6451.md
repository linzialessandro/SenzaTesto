---
year: 5
macro_area: "Integrali definiti"
topic: "Teorema della media"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:48:14+00:00"
tags:
  - "integrale definito"
  - "teorema della media"
  - "valore medio"
---
# Problem Text
Calcola il valore medio della funzione $f(x) = \sqrt{x}$ sull'intervallo $[1, 4]$.

# Solution
Il valore medio di una funzione continua $f$ su $[a,b]$ è dato da $\frac{1}{b-a} \int_a^b f(x) dx$. Calcoliamo l'integrale: $\int_1^4 \sqrt{x} dx = \int_1^4 x^{1/2} dx = \left[\frac{2}{3} x^{3/2}\right]_1^4 = \frac{2}{3}(4^{3/2} - 1^{3/2}) = \frac{2}{3}(8 - 1) = \frac{14}{3}$. Quindi il valore medio è $\frac{1}{4-1} \cdot \frac{14}{3} = \frac{1}{3} \cdot \frac{14}{3} = \frac{14}{9}$.
