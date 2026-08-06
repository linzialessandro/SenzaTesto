---
year: 4
macro_area: "Goniometria"
topic: "Formule di addizione e sottrazione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:49:37+00:00"
tags:
  - "goniometria"
  - "formule di addizione"
  - "valori esatti"
---
# Problem Text
Calcola il valore esatto di $\sin 75^\circ$ utilizzando la formula di addizione del seno.

# Solution
Osserviamo che $75^\circ = 45^\circ + 30^\circ$. Applicando la formula di addizione del seno:

$$
\sin(\alpha + \beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta
$$

con $\alpha = 45^\circ$ e $\beta = 30^\circ$, otteniamo:

$$
\sin 75^\circ = \sin 45^\circ \cos 30^\circ + \cos 45^\circ \sin 30^\circ
$$

Sostituendo i valori noti:

$$
\sin 45^\circ = \frac{\sqrt{2}}{2}, \quad \cos 30^\circ = \frac{\sqrt{3}}{2}, \quad \cos 45^\circ = \frac{\sqrt{2}}{2}, \quad \sin 30^\circ = \frac{1}{2}
$$

Quindi:

$$
\sin 75^\circ = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6} + \sqrt{2}}{4}
$$

Pertanto il valore esatto è $\frac{\sqrt{6} + \sqrt{2}}{4}$.
