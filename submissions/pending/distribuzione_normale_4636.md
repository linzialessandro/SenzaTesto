---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Distribuzione Normale"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:50:40+00:00"
tags:
  - "distribuzione normale"
  - "probabilit\u00e0"
  - "variabile aleatoria continua"
---
# Problem Text
Le altezze degli studenti di una scuola sono distribuite normalmente con media 170 cm e deviazione standard 10 cm. Calcola la probabilità che uno studente scelto a caso abbia un'altezza compresa tra 160 cm e 180 cm.

# Solution
Standardizziamo i valori della variabile $X$ (altezza) usando la formula $Z = \frac{X - \mu}{\sigma}$, con $\mu = 170$ cm e $\sigma = 10$ cm. Per $X = 160$ cm otteniamo $Z = \frac{160 - 170}{10} = -1$; per $X = 180$ cm otteniamo $Z = \frac{180 - 170}{10} = 1$. La probabilità richiesta è quindi $P(160 \le X \le 180) = P(-1 \le Z \le 1) = \Phi(1) - \Phi(-1)$. Per la simmetria della normale standard, $\Phi(-1) = 1 - \Phi(1)$. Dai valori noti (tavole) $\Phi(1) = 0.8413$. Allora $P = 0.8413 - (1 - 0.8413) = 2 \cdot 0.8413 - 1 = 0.6826$, ovvero circa il 68,26%.
