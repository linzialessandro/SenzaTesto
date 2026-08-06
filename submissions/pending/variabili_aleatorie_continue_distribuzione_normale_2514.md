---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue, distribuzione Normale"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:20:52+00:00"
tags:
  - "variabile aleatoria continua"
  - "distribuzione normale"
  - "standardizzazione"
---
# Problem Text
Sia X una variabile aleatoria continua con distribuzione normale di media μ = 10 e deviazione standard σ = 2. Calcolare P(8 ≤ X ≤ 12).

# Solution
Standardizziamo X: $Z = \frac{X - \mu}{\sigma}$. Per $x = 8$ otteniamo $z_1 = \frac{8 - 10}{2} = -1$; per $x = 12$ otteniamo $z_2 = \frac{12 - 10}{2} = 1$. Quindi $P(8 \leq X \leq 12) = P(-1 \leq Z \leq 1)$, dove $Z$ ha distribuzione normale standard. Dalla tabella della normale standard, $P(-1 \leq Z \leq 1) = 2\Phi(1) - 1$. Essendo $\Phi(1) = 0.8413$, si ha $P(8 \leq X \leq 12) = 2 \cdot 0.8413 - 1 = 0.6826$. La probabilità cercata è quindi $0.6826$ (circa $68.3\%$).
