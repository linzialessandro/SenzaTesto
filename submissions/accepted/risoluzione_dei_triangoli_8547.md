---
year: 4
macro_area: "Trigonometria"
topic: "Risoluzione dei triangoli"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:57:43+00:00"
tags:
  - "teorema dei coseni"
  - "teorema dei seni"
  - "triangoli"
---
# Problem Text
In un triangolo $ABC$, si sa che $AB = 7$ cm, $AC = 5$ cm e l'angolo $\hat{A} = 120^\circ$. Determina la lunghezza del lato $BC$ e l'ampiezza dell'angolo $\hat{B}$.

# Solution
Applichiamo il teorema dei coseni per trovare $BC$:

$$
BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos \hat{A}
= 7^2 + 5^2 - 2 \cdot 7 \cdot 5 \cdot \cos 120^\circ
= 49 + 25 - 70 \cdot \left(-\frac{1}{2}\right)
= 74 + 35 = 109.
$$

Quindi $BC = \sqrt{109}$ cm.

Per l'angolo $\hat{B}$, usiamo il teorema dei seni:

$$
\frac{BC}{\sin \hat{A}} = \frac{AC}{\sin \hat{B}}.
$$

Sostituendo $BC = \sqrt{109}$, $AC = 5$ e $\sin 120^\circ = \frac{\sqrt{3}}{2}$:

$$
\sin \hat{B} = \frac{AC \cdot \sin \hat{A}}{BC} = \frac{5 \cdot \frac{\sqrt{3}}{2}}{\sqrt{109}} = \frac{5\sqrt{3}}{2\sqrt{109}}.
$$

Poiché $\hat{A}$ è ottuso, $\hat{B}$ deve essere acuto, quindi

$$
\hat{B} = \arcsin\left(\frac{5\sqrt{3}}{2\sqrt{109}}\right) \approx 24.5^\circ.
$$

In definitiva:

$$
BC = \sqrt{109} \text{ cm}, \qquad \hat{B} \approx 24.5^\circ.
$$
