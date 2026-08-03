---
year: 2
macro_area: "Probabilit\u00e0"
topic: "Probabilit\u00e0 classica"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:43:13+00:00"
tags:
  - "probabilit\u00e0"
  - "eventi"
  - "complementare"
  - "combinazioni"
---
# Problem Text
In una classe di 30 studenti, 18 sono femmine e 12 sono maschi. Se si scelgono a caso due studenti senza rimpiazzo, qual è la probabilità che almeno uno dei due sia una femmina?

# Solution
Per calcolare la probabilità richiesta, usiamo il complementare: $P(\text{almeno una femmina}) = 1 - P(\text{nessuna femmina}) = 1 - P(\text{due maschi})$.

Numero totale di modi per scegliere 2 studenti: $\binom{30}{2} = \frac{30 \cdot 29}{2} = 435$.

Numero di modi per scegliere 2 maschi: $\binom{12}{2} = \frac{12 \cdot 11}{2} = 66$.

Quindi: $P(\text{due maschi}) = \frac{66}{435} = \frac{22}{145}$.

Infine:

$$
P(\text{almeno una femmina}) = 1 - \frac{22}{145} = \frac{123}{145}.
$$

La probabilità richiesta è quindi $\frac{123}{145}$.
