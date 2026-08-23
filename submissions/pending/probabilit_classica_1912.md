---
year: 2
macro_area: "Calcolo delle Probabilità"
topic: "Probabilità classica"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:42:47+00:00"
tags:
  - "probabilità"
  - "combinazioni"
  - "estrazione senza reimmissione"
  - "eventi"
---
# Problem Text
In un sacchetto ci sono 5 palline bianche, 4 nere e 3 rosse. Se si estraggono due palline a caso senza reimmissione, qual è la probabilità che le due palline siano di colore diverso?

# Solution
Il numero totale di modi per estrarre 2 palline su 12 è $\binom{12}{2}=66$. Calcoliamo prima la probabilità dell'evento complementare: le due palline hanno lo stesso colore. I casi favorevoli sono: due bianche: $\binom{5}{2}=10$; due nere: $\binom{4}{2}=6$; due rosse: $\binom{3}{2}=3$. Quindi i casi favorevoli all'evento complementare sono $10+6+3=19$. La probabilità dell'evento complementare è $\frac{19}{66}$. Pertanto la probabilità richiesta è $1-\frac{19}{66}=\frac{47}{66}$.
