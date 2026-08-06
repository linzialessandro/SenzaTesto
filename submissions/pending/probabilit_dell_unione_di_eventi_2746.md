---
year: 4
macro_area: "Probabilit\u00e0"
topic: "Probabilit\u00e0 dell'unione di eventi"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:57:55+00:00"
tags:
  - "probabilit\u00e0"
  - "unione"
  - "intersezione"
---
# Problem Text
In una classe, il 60% degli studenti ama la matematica (evento M), il 50% ama la fisica (evento F) e il 30% ama entrambe. Scegliendo a caso uno studente, qual è la probabilità che ami almeno una delle due materie?

# Solution
Sia $M$ l'evento "ama la matematica" e $F$ l'evento "ama la fisica". Dati: $P(M)=0.6$, $P(F)=0.5$, $P(M\cap F)=0.3$. La probabilità dell'unione è:

$$
P(M\cup F)=P(M)+P(F)-P(M\cap F)
$$

Sostituendo:

$$
P(M\cup F)=0.6+0.5-0.3=0.8
$$

Quindi la probabilità che ami almeno una delle due materie è $0.8$.
