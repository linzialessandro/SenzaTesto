---
year: 5
macro_area: "Applicazioni dell'integrale e cenni avanzati"
topic: "Volume di rotazione e integrali impropri"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:08:38+00:00"
tags:
  - "integrale improprio"
  - "volume di rotazione"
  - "parametro"
  - "convergenza"
---
# Problem Text
Sia $\alpha \in \mathbb{R}$. Si consideri la curva $y = x^\alpha$ per $x \in (0,1]$. Si determini per quali valori di $\alpha$ l'integrale improprio $V = \pi \int_0^1 (x^\alpha)^2 \, dx$ converge e si calcoli $V$ in tali casi.

# Solution
L'integrale improprio è $V = \pi \int_0^1 x^{2\alpha} \, dx$. Poiché l'integranda è $x^{2\alpha} = 1/x^{-2\alpha}$, la convergenza in $x=0$ richiede che $2\alpha > -1$, cioè $\alpha > -1/2$. Per $\alpha > -1/2$, l'integrale converge e vale:

$$
\int_0^1 x^{2\alpha} \, dx = \left[ \frac{x^{2\alpha+1}}{2\alpha+1} \right]_0^1 = \frac{1}{2\alpha+1},
$$

poiché $2\alpha+1 > 0$, il limite per $x \to 0^+$ è $0$. Quindi

$$
V = \frac{\pi}{2\alpha+1}.
$$

La risposta finale è: $V$ converge per $\alpha > -1/2$ e in tal caso $V = \frac{\pi}{2\alpha+1}$.
