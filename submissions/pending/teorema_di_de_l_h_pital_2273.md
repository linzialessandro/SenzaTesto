---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema di De L'H\u00f4pital"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:11:08+00:00"
tags:
  - "limiti"
  - "de l'hopital"
  - "forme indeterminate"
---
# Problem Text
Calcolare il seguente limite utilizzando il teorema di De L'Hôpital: 

$$
\lim_{x \to 0} \frac{e^x - 1}{x}
$$

Giustificare l'applicabilità del teorema.

# Solution
Osserviamo che il limite si presenta nella forma indeterminata $\frac{0}{0}$, poiché sia il numeratore $f(x) = e^x - 1$ che il denominatore $g(x) = x$ tendono a zero per $x \to 0$. Inoltre, $f$ e $g$ sono derivabili in un intorno di $0$ (escluso al più $0$) e $g'(x) = 1 \neq 0$ in tale intorno. Possiamo quindi applicare il teorema di De L'Hôpital: 

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{(e^x - 1)'}{(x)'} = \lim_{x \to 0} \frac{e^x}{1} = e^0 = 1.
$$

Pertanto il limite richiesto è $1$.
