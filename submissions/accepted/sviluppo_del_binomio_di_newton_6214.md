---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Sviluppo del binomio di Newton"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:49:34+00:00"
tags:
  - "binomio di Newton"
  - "coefficiente binomiale"
  - "termine indipendente"
  - "esponenti"
---
# Problem Text
Determina il termine indipendente da $x$ nello sviluppo di $\left(3x^2 - \frac{1}{2x}\right)^6$.

# Solution
Il termine generale dello sviluppo è:

$$
T_{k+1} = \binom{6}{k} (3x^2)^{6-k} \left(-\frac{1}{2x}\right)^k
$$

Semplificando:

$$
T_{k+1} = \binom{6}{k} 3^{6-k} (-1)^k \frac{1}{2^k} x^{2(6-k)-k} = \binom{6}{k} 3^{6-k} (-1)^k 2^{-k} x^{12-3k}
$$

Il termine è indipendente da $x$ se $12-3k=0$, cioè $k=4$. Sostituendo:

$$
T_5 = \binom{6}{4} 3^2 (-1)^4 2^{-4} = 15 \cdot 9 \cdot 1 \cdot \frac{1}{16} = \frac{135}{16}
$$

Pertanto il termine indipendente è $\frac{135}{16}$.
