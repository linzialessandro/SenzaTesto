---
year: 2
macro_area: "Equazioni di secondo grado"
topic: "Equazioni parametriche e discussione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-14T11:06:26+00:00"
tags:
  - "equazioni di secondo grado"
  - "parametriche"
  - "relazione tra radici e coefficienti"
  - "discriminante"
---
# Problem Text
Determina per quali valori del parametro reale $k$ l'equazione $x^2 - (2k+1)x + (k^2 - 2) = 0$ ammette due soluzioni reali e distinte tali che una sia il doppio dell'altra.

# Solution
Indichiamo con $\alpha$ e $\beta$ le due radici, con $\alpha = 2\beta$. Per le relazioni tra radici e coefficienti si ha:

$$
\alpha + \beta = 2k+1, \quad \alpha\beta = k^2 - 2.
$$

Ponendo $\alpha = 2\beta$, otteniamo $3\beta = 2k+1$, quindi $\beta = \frac{2k+1}{3}$. Allora $\alpha\beta = 2\beta^2 = 2\left(\frac{2k+1}{3}\right)^2 = k^2 - 2$.
Sviluppando:

$$
\frac{2(4k^2+4k+1)}{9} = k^2 - 2,
$$

da cui $8k^2+8k+2 = 9k^2 - 18$, cioè $k^2 -8k -20 = 0$.
Le soluzioni sono:

$$
k = \frac{8 \pm \sqrt{64+80}}{2} = \frac{8 \pm 12}{2},
$$

quindi $k=10$ oppure $k=-2$.
Verifichiamo che per questi valori l'equazione abbia due soluzioni reali distinte. Il discriminante è $\Delta = (2k+1)^2 - 4(k^2-2) = 4k+9$. Per $k=10$, $\Delta = 49 > 0$; per $k=-2$, $\Delta = 1 > 0$.
In entrambi i casi le radici sono reali e distinte; si controlla che una sia il doppio dell'altra. Pertanto l'equazione ammette due soluzioni reali distinte una doppia dell'altra per $k=10$ oppure $k=-2$.
