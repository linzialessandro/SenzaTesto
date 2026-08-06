---
year: 5
macro_area: "Statistica e Probabilit\u00e0 (cenni continui)"
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
  generated_at: "2026-08-06T14:10:27+00:00"
tags:
  - "distribuzione normale"
  - "probabilit\u00e0"
  - "standardizzazione"
  - "variabile casuale continua"
---
# Problem Text
Sia $X$ una variabile aleatoria continua con distribuzione normale di media $\mu = 100$ e deviazione standard $\sigma = 15$. Calcola la probabilità che $X$ assuma valori compresi tra 85 e 130.

# Solution
Per calcolare $P(85 \le X \le 130)$, standardizziamo la variabile $X$ utilizzando la trasformazione

$$
Z = \frac{X - \mu}{\sigma}
$$

con $\mu = 100$ e $\sigma = 15$. Calcoliamo i valori standardizzati:

- Per $X = 85$: $z_1 = \frac{85 - 100}{15} = \frac{-15}{15} = -1$.
- Per $X = 130$: $z_2 = \frac{130 - 100}{15} = \frac{30}{15} = 2$.

Quindi

$$
P(85 \le X \le 130) = P(-1 \le Z \le 2) = \Phi(2) - \Phi(-1)
$$

dove $\Phi(z)$ è la funzione di ripartizione della normale standard. Dalle tavole standard:

- $\Phi(2) \approx 0.9772$,
- $\Phi(-1) = 1 - \Phi(1) \approx 1 - 0.8413 = 0.1587$.

Sostituendo otteniamo:

$$
P(-1 \le Z \le 2) = 0.9772 - 0.1587 = 0.8185.
$$

Pertanto la probabilità richiesta è circa $0.8185$, cioè circa $81.85\%$.
