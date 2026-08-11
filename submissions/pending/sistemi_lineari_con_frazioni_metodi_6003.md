---
year: 2
macro_area: "Sistemi lineari"
topic: "Metodi di risoluzione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: recycle_rejected
  generated_at: "2026-08-11T15:43:52+00:00"
  source: submissions/rejected salvage
tags:
  - "sistemi lineari"
  - "frazioni"
  - "sostituzione"
---
# Problem Text
Risolvi il sistema lineare:

$$
\begin{cases} \dfrac{x}{2}-\dfrac{y}{3}=4 \\ \dfrac{x}{3}+\dfrac{y}{4}=3 \end{cases}
$$

# Solution
Moltiplichiamo la prima equazione per $6$ e la seconda per $12$:

$$
\begin{cases} 3x-2y=24 \\ 4x+3y=36 \end{cases}
$$

Dalla prima: $3x=24+2y$, $x=8+\dfrac{2}{3}y$. Sostituendo nella seconda:

$$
4\left(8+\dfrac{2}{3}y\right)+3y=36 \Rightarrow 32+\dfrac{8}{3}y+3y=36 \Rightarrow \dfrac{8}{3}y+\dfrac{9}{3}y=4 \Rightarrow \dfrac{17}{3}y=4 \Rightarrow y=\dfrac{12}{17}.
$$

Quindi $x=8+\dfrac{2}{3}\cdot\dfrac{12}{17}=8+\dfrac{8}{17}=\dfrac{144}{17}$. Soluzione: $\left(\dfrac{144}{17},\dfrac{12}{17}\right)$.
