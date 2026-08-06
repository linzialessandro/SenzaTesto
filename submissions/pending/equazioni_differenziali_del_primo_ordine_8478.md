---
year: 5
macro_area: "Equazioni differenziali"
topic: "Equazioni differenziali del primo ordine"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:14:30+00:00"
tags:
  - "equazioni differenziali"
  - "variabili separabili"
  - "problema di Cauchy"
---
# Problem Text
Risolvere il problema di Cauchy $y' = 2xy$, con $y(0) = 1$.

# Solution
L'equazione è a variabili separabili. Riscriviamo $y' = \frac{dy}{dx}$, quindi: $\frac{dy}{dx} = 2xy$. Separando le variabili: $\frac{1}{y}\,dy = 2x\,dx$ (per $y \neq 0$). Integriamo ambo i membri:

$$
\int \frac{1}{y}\,dy = \int 2x\,dx
$$

Si ottiene $\ln|y| = x^2 + C$, con $C$ costante arbitraria. Esponenziamo: $|y| = e^{x^2+C} = e^C e^{x^2}$. Poniamo $A = \pm e^C$, allora $y = A e^{x^2}$. Imponiamo la condizione iniziale $y(0)=1$:

$$
1 = A e^0 = A \Rightarrow A = 1
$$

Quindi la soluzione è $y = e^{x^2}$. La funzione è definita su tutto $\mathbb{R}$ ed è positiva, quindi non ci sono problemi di dominio. Risposta: $y(x)=e^{x^2}$.
