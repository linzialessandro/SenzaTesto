---
year: 5
macro_area: "Calcolo integrale"
topic: "Teorema della media integrale"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:27:19+00:00"
tags:
  - "integrali definiti"
  - "teorema della media"
  - "Torricelli-Barrow"
  - "equazioni di secondo grado"
---
# Problem Text
Determina i punti $c \in [0,2]$ che soddisfano il teorema della media integrale per la funzione $f(x) = x^2 - 2x + 2$ sull'intervallo $[0,2]$.

# Solution
La funzione $f(x) = x^2 - 2x + 2$ è continua su $[0,2]$, quindi il teorema della media integrale garantisce l'esistenza di almeno un punto $c \in (0,2)$ tale che $f(c) = \frac{1}{2-0} \int_0^2 f(x)\,dx$. Calcoliamo l'integrale definito con il teorema di Torricelli-Barrow: $$\int_0^2 (x^2 - 2x + 2)\,dx = \left[ \frac{x^3}{3} - x^2 + 2x \right]_0^2 = \left( \frac{8}{3} - 4 + 4 \right) - 0 = \frac{8}{3}.$$ Il valore medio è quindi $\frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$. Impostiamo l'equazione $f(c) = \frac{4}{3}$: $$c^2 - 2c + 2 = \frac{4}{3} \implies 3c^2 - 6c + 2 = 0.$$ Il discriminante è $\Delta = 36 - 24 = 12$, quindi $c = \frac{6 \pm \sqrt{12}}{6} = \frac{6 \pm 2\sqrt{3}}{6} = 1 \pm \frac{\sqrt{3}}{3}$. Poiché $\frac{\sqrt{3}}{3} \approx 0{,}577$, entrambe le soluzioni appartengono a $[0,2]$: $c_1 = 1 - \frac{\sqrt{3}}{3} \approx 0{,}423$ e $c_2 = 1 + \frac{\sqrt{3}}{3} \approx 1{,}577$. I punti richiesti sono quindi $c = 1 \pm \frac{\sqrt{3}}{3}$.
