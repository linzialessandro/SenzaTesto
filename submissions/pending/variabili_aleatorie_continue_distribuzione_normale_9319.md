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
  generated_at: "2026-08-06T18:12:02+00:00"
tags:
  - "variabili aleatorie"
  - "distribuzione normale"
  - "probabilit\u00e0"
  - "z-score"
---
# Problem Text
Sia $X$ l'altezza di un individuo di una popolazione, distribuita secondo una variabile casuale normale con media $\mu = 170$ cm e deviazione standard $\sigma = 8$ cm. Si determini la probabilità che un individuo scelto a caso abbia un'altezza compresa tra 160 cm e 180 cm.

# Solution
Standardizziamo la variabile: $Z = \frac{X - \mu}{\sigma}$. Quindi per $x_1 = 160$: $z_1 = \frac{160 - 170}{8} = -1.25$. Per $x_2 = 180$: $z_2 = \frac{180 - 170}{8} = 1.25$. Allora la probabilità richiesta è $P(160 \le X \le 180) = P(-1.25 \le Z \le 1.25)$. Per la simmetria della normale standard, $P(-1.25 \le Z \le 1.25) = 2\Phi(1.25) - 1$, dove $\Phi$ è la funzione di ripartizione della normale standard. Dalle tavole, $\Phi(1.25) = 0.8944$. Quindi la probabilità è $2 \cdot 0.8944 - 1 = 0.7888$. Conclusione: c'è una probabilità del $78.88\%$ che un individuo scelto a caso abbia un'altezza tra 160 e 180 cm.
