---
year: 2
macro_area: "Calcolo delle Probabilità"
topic: "Probabilità classica e classificazione eventi"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-11T15:10:43+00:00"
tags:
  - "probabilità"
  - "eventi"
  - "classica"
---
# Problem Text
Un'urna contiene 15 palline indistinguibili al tatto: 6 bianche, 5 nere e 4 grigie. Estraendo una pallina a caso, determina la probabilità che essa non sia nera. Spiega brevemente se l'evento "pallina nera" è certo, impossibile o aleatorio e motiva la risposta.

# Solution
Il numero totale di palline è $15$. Le palline non nere sono $6+4=10$. La probabilità che la pallina estratta non sia nera è quindi $P(\text{non nera}) = \frac{10}{15} = \frac{2}{3}$.

L'evento "pallina nera" ha probabilità $P(\text{nera}) = \frac{5}{15} = \frac{1}{3}$, che è compresa strettamente tra $0$ e $1$. Poiché non è né impossibile ($0$) né certo ($1$), si tratta di un evento aleatorio: può accadere o meno a seconda dell'estrazione.
