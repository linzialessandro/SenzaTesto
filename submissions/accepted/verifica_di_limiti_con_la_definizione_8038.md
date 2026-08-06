---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Verifica di limiti con la definizione"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:12:43+00:00"
tags:
  - "limiti"
  - "definizione"
  - "epsilon-delta"
---
# Problem Text
Verifica, usando la definizione di limite, che $\lim_{x \to 2} (3x+1) = 7$.

# Solution
Dobbiamo dimostrare che per ogni $\epsilon > 0$ esiste $\delta > 0$ tale che se $0 < |x-2| < \delta$ allora $|(3x+1)-7| < \epsilon$. Osserviamo che $|(3x+1)-7| = |3x-6| = 3|x-2|$. Scegliamo $\delta = \epsilon/3$. Allora, se $0 < |x-2| < \delta$, si ha $|(3x+1)-7| = 3|x-2| < 3\delta = \epsilon$. Quindi il limite è verificato.
