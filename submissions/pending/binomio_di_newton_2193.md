---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Binomio di Newton"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:51:51+00:00"
tags:
  - "combinatoria"
  - "coefficiente binomiale"
  - "binomio di Newton"
---
# Problem Text
Calcola il coefficiente del termine in $x^3$ nello sviluppo di $(2x-1)^5$.

# Solution
Per il binomio di Newton, il termine generale è $\binom{5}{k}(2x)^k(-1)^{5-k}$. Per ottenere $x^3$, prendiamo $k=3$, quindi:

$$
\binom{5}{3}(2x)^3(-1)^2 = 10 \cdot 8x^3 \cdot 1 = 80x^3.
$$

Il coefficiente richiesto è $80$.
