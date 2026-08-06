---
year: 5
macro_area: "Calcolo dei Limiti"
topic: "Limiti notevoli e risoluzione di equazioni"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:44:54+00:00"
tags:
  - "limiti"
  - "limiti notevoli"
  - "equazioni"
---
# Problem Text
Calcola il limite $\lim_{x \to 0} \frac{1 - \cos(kx)}{x^2}$ e determina per quali valori del parametro reale $k$ tale limite è uguale a 2.

# Solution
Usiamo il limite notevole $\lim_{t \to 0} \frac{1 - \cos t}{t^2} = \frac{1}{2}$. Poniamo $t = kx$. Allora, per $k \neq 0$:

$$
\frac{1 - \cos(kx)}{x^2} = k^2 \frac{1 - \cos(kx)}{(kx)^2} = k^2 \frac{1 - \cos t}{t^2}
$$

Quindi il limite è $k^2 \cdot \frac{1}{2} = \frac{k^2}{2}$. (Se $k=0$, il limite è $0$, ma non interessa perché vogliamo che sia 2.) Imponiamo $\frac{k^2}{2} = 2$, da cui $k^2 = 4$, quindi $k = \pm 2$.
