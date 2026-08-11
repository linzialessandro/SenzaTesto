---
year: 1
macro_area: "Calcolo letterale"
topic: "Scomposizione di polinomi con Ruffini"
difficulty: 3
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
  - "polinomi"
  - "Ruffini"
  - "scomposizione"
  - "fattorizzazione"
---
# Problem Text
Scomponi in fattori il polinomio $P(x) = x^3 - 4x^2 + x + 6$.

# Solution
Cerchiamo gli zeri interi tra i divisori di 6: $\pm 1, \pm 2, \pm 3, \pm 6$. Notiamo che $P(-1) = -1 - 4 - 1 + 6 = 0$. Usiamo la regola di Ruffini con $c = -1$. Otteniamo il quoziente $Q(x) = x^2 - 5x + 6$. Quindi $P(x) = (x+1)(x^2 - 5x + 6)$. Scomponendo il trinomio notevole otteniamo la fattorizzazione finale: $P(x) = (x+1)(x-2)(x-3)$.
