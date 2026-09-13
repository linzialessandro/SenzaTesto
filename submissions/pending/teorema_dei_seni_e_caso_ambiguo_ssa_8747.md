---
year: 4
macro_area: "Risoluzione dei triangoli"
topic: "Teorema dei seni e caso ambiguo (SSA)"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:29+00:00"
tags:
  - "trigonometria"
  - "teorema dei seni"
  - "triangoli"
  - "caso ambiguo"
  - "SSA"
---
# Problem Text
Nel triangolo $ABC$, il lato $a=BC$ misura $5$, il lato $b=AC$ misura $7$ e l'angolo $\widehat{A}=30^\circ$. Determina tutti i possibili valori del lato $c=AB$.

# Solution
Applichiamo il teorema dei seni:

$$
\frac{a}{\sin A} = \frac{b}{\sin B} \implies \sin B = \frac{b \sin A}{a} = \frac{7 \cdot \frac{1}{2}}{5} = \frac{7}{10}.
$$

Poiché $\sin B > 0$ e $A=30^\circ$, esistono due possibili valori per $B$:

$$
B_1 = \arcsin\frac{7}{10} \quad \text{(acuto)}, \qquad B_2 = 180^\circ - \arcsin\frac{7}{10} \quad \text{(ottuso)}.
$$

Entrambi sono accettabili perché $A+B < 180^\circ$ in entrambi i casi.
Per ciascuno, calcoliamo $C = 180^\circ - 30^\circ - B = 150^\circ - B$.
Dal teorema dei seni, $\frac{c}{\sin C} = \frac{a}{\sin A} = 10$, quindi

$$
c = 10 \sin C = 10 \sin(150^\circ - B) = 10\left(\frac{1}{2}\cos B + \frac{\sqrt{3}}{2}\sin B\right) = 5\cos B + \frac{7\sqrt{3}}{2},
$$

dove abbiamo usato $\sin B = \frac{7}{10}$ e la formula di sottrazione del seno.
Ora $\cos B = \pm \sqrt{1 - \left(\frac{7}{10}\right)^2} = \pm \frac{\sqrt{51}}{10}$, con il segno positivo per $B_1$ (acuto) e negativo per $B_2$ (ottuso).
Pertanto:

$$
c_1 = 5 \cdot \frac{\sqrt{51}}{10} + \frac{7\sqrt{3}}{2} = \frac{\sqrt{51}}{2} + \frac{7\sqrt{3}}{2} = \frac{7\sqrt{3} + \sqrt{51}}{2},
$$

$$
c_2 = 5 \cdot \left(-\frac{\sqrt{51}}{10}\right) + \frac{7\sqrt{3}}{2} = -\frac{\sqrt{51}}{2} + \frac{7\sqrt{3}}{2} = \frac{7\sqrt{3} - \sqrt{51}}{2}.
$$

I due valori sono entrambi positivi e soddisfano le disuguaglianze triangolari. Quindi i possibili valori di $c$ sono $\frac{7\sqrt{3} + \sqrt{51}}{2}$ e $\frac{7\sqrt{3} - \sqrt{51}}{2}$.
