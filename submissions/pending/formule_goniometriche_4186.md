---
year: 4
macro_area: "Goniometria"
topic: "Formule goniometriche"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:10:25+00:00"
tags:
  - "goniometria"
  - "formule di addizione"
  - "coseno"
---
# Problem Text
Calcola il valore esatto di $\cos 75^\circ$ utilizzando la formula di addizione del coseno.

# Solution
Osserviamo che $75^\circ = 45^\circ + 30^\circ$. La formula di addizione del coseno è $\cos(a+b)=\cos a \cos b - \sin a \sin b$. Quindi:

$$
\cos 75^\circ = \cos(45^\circ+30^\circ) = \cos 45^\circ \cos 30^\circ - \sin 45^\circ \sin 30^\circ.
$$

Sostituiamo i valori noti: $\cos 45^\circ = \frac{\sqrt{2}}{2}$, $\sin 45^\circ = \frac{\sqrt{2}}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\sin 30^\circ = \frac{1}{2}$. Allora:

$$
\cos 75^\circ = \left(\frac{\sqrt{2}}{2}\right)\left(\frac{\sqrt{3}}{2}\right) - \left(\frac{\sqrt{2}}{2}\right)\left(\frac{1}{2}\right) = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6}-\sqrt{2}}{4}.
$$

Quindi $\cos 75^\circ = \frac{\sqrt{6}-\sqrt{2}}{4}$.
