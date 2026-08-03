---
year: 4
macro_area: "Probabilit\u00e0"
topic: "Probabilit\u00e0 dell'unione di eventi"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:49:30+00:00"
tags:
  - "probabilit\u00e0"
  - "unione"
  - "eventi non mutuamente esclusivi"
---
# Problem Text
In una classe, la probabilità che uno studente superi l'esame di matematica è $0.8$, che superi l'esame di fisica è $0.6$, e che superi entrambi gli esami è $0.5$. Qual è la probabilità che uno studente, scelto a caso, superi almeno uno dei due esami?

# Solution
Indichiamo con $M$ l'evento "superare matematica" e con $F$ l'evento "superare fisica". I dati sono:
$P(M)=0.8$, $P(F)=0.6$, $P(M \cap F)=0.5$.
L'evento "superare almeno uno" è l'unione $M \cup F$. Per la formula dell'unione di due eventi (non mutuamente esclusivi):

$$
P(M \cup F) = P(M) + P(F) - P(M \cap F)
$$

Sostituendo i valori:

$$
P(M \cup F) = 0.8 + 0.6 - 0.5 = 0.9
$$

Quindi la probabilità è $0.9$ (cioè il 90%).
