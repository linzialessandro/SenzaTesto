---
year: 4
macro_area: "Goniometria"
topic: "Formule di addizione"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:56:14+00:00"
tags:
  - "formule di addizione"
  - "seno"
  - "valori notevoli"
---
# Problem Text
Calcola il valore esatto di $\sin(75^\circ)$ utilizzando la formula di addizione per il seno.

# Solution
Utilizziamo la formula di addizione per il seno: $\sin(a+b) = \sin a \cos b + \cos a \sin b$. Scegliamo $a = 45^\circ$ e $b = 30^\circ$, poiché $75^\circ = 45^\circ + 30^\circ$ e conosciamo i valori esatti per questi angoli.

Quindi:

$$
\sin(75^\circ) = \sin(45^\circ + 30^\circ) = \sin 45^\circ \cos 30^\circ + \cos 45^\circ \sin 30^\circ
$$

Sostituiamo i valori noti:

$$
\sin 45^\circ = \frac{\sqrt{2}}{2}, \quad \cos 30^\circ = \frac{\sqrt{3}}{2}, \quad \cos 45^\circ = \frac{\sqrt{2}}{2}, \quad \sin 30^\circ = \frac{1}{2}
$$

Allora:

$$
\sin(75^\circ) = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6} + \sqrt{2}}{4}
$$

Pertanto il valore esatto è $\frac{\sqrt{6} + \sqrt{2}}{4}$.
