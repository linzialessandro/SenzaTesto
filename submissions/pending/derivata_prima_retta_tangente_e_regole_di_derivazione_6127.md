---
year: 5
macro_area: "Derivate"
topic: "Derivata prima, retta tangente e regole di derivazione"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:08+00:00"
tags:
  - "derivate"
  - "regola del quoziente"
  - "retta tangente"
  - "significato geometrico"
  - "dominio"
---
# Problem Text
Determina le equazioni delle rette tangenti al grafico della funzione
$$f(x) = \frac{x^2-3}{x+1}$$
che risultano parallele alla retta di equazione $y = 2x$.

# Solution
Il dominio è $D = \mathbb{R}\setminus\{-1\}$. Per la regola del quoziente:
$$f'(x) = \frac{2x(x+1)-(x^2-3)}{(x+1)^2} = \frac{x^2+2x+3}{(x+1)^2}.$$
Il coefficiente angolare della tangente in $x$ è $f'(x)$; dovendo essere parallela a $y=2x$ (coefficiente angolare $2$), imponiamo $f'(x)=2$:
$$\frac{x^2+2x+3}{(x+1)^2}=2 \iff x^2+2x+3 = 2(x+1)^2 \iff x^2+2x-1=0,$$
da cui $x = -1 \pm \sqrt{2}$, entrambe accettabili perché $\neq -1$.
Calcoliamo l'ordinata nei due punti: posto $t = x+1 = \pm\sqrt{2}$, risulta
$$f(x) = \frac{x^2-3}{x+1} = \frac{t^2-2t-2}{t} = t-2-\frac{2}{t} = \pm\sqrt{2}-2\mp\sqrt{2} = -2.$$
Tangente in $x_1 = -1+\sqrt{2}$:
$$y+2 = 2\bigl(x+1-\sqrt{2}\bigr) \Rightarrow y = 2x - 2\sqrt{2}.$$
Tangente in $x_2 = -1-\sqrt{2}$:
$$y+2 = 2\bigl(x+1+\sqrt{2}\bigr) \Rightarrow y = 2x + 2\sqrt{2}.$$
Le due rette tangenti cercate sono $y = 2x-2\sqrt{2}$ e $y = 2x+2\sqrt{2}$.
