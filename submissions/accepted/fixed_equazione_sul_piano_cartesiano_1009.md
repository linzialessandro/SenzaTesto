---
year: 3
macro_area: "Geometria Analitica"
topic: "Equazione sul piano cartesiano"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:07:25+00:00"
tags:
  - "retta"
  - "perpendicolarit\u00e0"
  - "punto-pendenza"
---
# Problem Text
Trova l'equazione della retta passante per il punto $P(1, -2)$ e perpendicolare alla retta $r$ di equazione $3x + 2y - 6 = 0$.

# Solution
La retta data è $3x + 2y - 6 = 0$. Esplicitiamola rispetto a $y$: $2y = -3x + 6$, quindi $y = -\frac{3}{2}x + 3$. Il suo coefficiente angolare è $m_1 = -\frac{3}{2}$. Per la condizione di perpendicolarità, il coefficiente angolare $m_2$ della retta cercata deve soddisfare $m_1 \cdot m_2 = -1$, quindi $m_2 = -\frac{1}{m_1} = -\frac{1}{-3/2} = \frac{2}{3}$. Utilizziamo la formula punto-pendenza con $P(1, -2)$ e $m_2 = \frac{2}{3}$:

$$
y - (-2) = \frac{2}{3}(x - 1)
$$

Semplificando: $y + 2 = \frac{2}{3}x - \frac{2}{3} \Rightarrow y = \frac{2}{3}x - \frac{8}{3}$.
