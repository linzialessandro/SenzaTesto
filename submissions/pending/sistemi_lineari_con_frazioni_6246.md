---
year: 2
macro_area: "Sistemi lineari"
topic: "Sistemi di due equazioni di primo grado"
difficulty: 2
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
  - "equazioni"
  - "frazioni"
  - "riduzione"
---
# Problem Text
Risolvi il seguente sistema lineare, mostrando esplicitamente tutti i passaggi algebrici:

$$
\begin{cases} \dfrac{x}{2}-\dfrac{y}{3}=4 \\[6pt] \dfrac{x}{3}+\dfrac{y}{2}=1 \end{cases}
$$

# Solution
Moltiplichiamo la prima equazione per $6$ e la seconda per $6$:

$$
\begin{cases} 3x-2y=24 \\ 2x+3y=6 \end{cases}
$$

Dalla seconda: $x=\dfrac{6-3y}{2}$. Sostituendo nella prima:

$$
3\cdot\dfrac{6-3y}{2}-2y=24 \Rightarrow \dfrac{18-9y}{2}-2y=24 \Rightarrow 18-9y-4y=48 \Rightarrow -13y=30 \Rightarrow y=-\dfrac{30}{13}.
$$

Allora $x=\dfrac{6-3(-30/13)}{2}=\dfrac{6+90/13}{2}=\dfrac{(78+90)/13}{2}=\dfrac{168}{26}=\dfrac{84}{13}$.

Soluzione: $\left(\dfrac{84}{13},-\dfrac{30}{13}\right)$.
