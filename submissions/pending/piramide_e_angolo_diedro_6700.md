---
year: 4
macro_area: "Stereometria"
topic: "Piramide e angolo diedro"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:43:06+00:00"
tags:
  - "geometria solida"
  - "piramide"
  - "volume"
  - "angolo diedro"
---
# Problem Text
Considera una piramide regolare a base quadrata con spigolo di base 6 e altezza 4. Determina il volume e l'angolo diedro tra una faccia laterale e la base.

# Solution
Il volume è $V=\frac{1}{3}S_b h$, dove $S_b=6^2=36$ e $h=4$, quindi $V=\frac{1}{3}\cdot36\cdot4=48$.

Per l'angolo diedro, sia $M$ il punto medio di uno spigolo di base $AB$. L'apotema di base è $OM=3$ (metà dello spigolo), mentre l'apotema della piramide è $SM=\sqrt{4^2+3^2}=5$. L'angolo diedro $\alpha$ tra la faccia $SAB$ e la base è l'angolo tra le rette $OM$ e $SM$, entrambe perpendicolari a $AB$. Quindi $\cos\alpha=\frac{OM}{SM}=\frac{3}{5}$, da cui $\alpha=\arccos\left(\frac{3}{5}\right)\approx 53.13^\circ$.

In sintesi: $V=48$ e $\alpha=\arccos(3/5)$.
