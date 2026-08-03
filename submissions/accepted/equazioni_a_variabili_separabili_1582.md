---
year: 5
macro_area: "Equazioni differenziali"
topic: "Equazioni a variabili separabili"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:49:42+00:00"
tags:
  - "equazioni differenziali"
  - "variabili separabili"
---
# Problem Text
Risolvi l'equazione differenziale del primo ordine a variabili separabili $y' = 2xy$.

# Solution
Scriviamo l'equazione come $\frac{dy}{dx} = 2xy$. Per $y \neq 0$, separiamo le variabili:

$$
\frac{dy}{y} = 2x\,dx
$$

Integriamo ambo i membri:

$$
\int \frac{dy}{y} = \int 2x\,dx \quad \Rightarrow \quad \ln|y| = x^2 + C
$$

Esplicitiamo $y$: $|y| = e^{x^2+C} = e^C e^{x^2}$, quindi $y = \pm e^C e^{x^2}$. Posto $C_1 = \pm e^C$, otteniamo $y = C_1 e^{x^2}$ con $C_1 \in \mathbb{R} \setminus \{0\}$. La soluzione $y=0$ è anch'essa soluzione (si verifica direttamente), quindi la soluzione generale è:

$$
y = C e^{x^2}, \quad C \in \mathbb{R}
$$
