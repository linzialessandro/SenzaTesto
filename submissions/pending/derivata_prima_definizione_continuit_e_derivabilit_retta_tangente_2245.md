---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivata prima: definizione, continuità e derivabilità, retta tangente"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:28:37+00:00"
tags:
  - "derivate"
  - "definizione"
  - "continuità"
  - "derivabilità"
  - "retta tangente"
  - "parametri"
---
# Problem Text
Considera la funzione

$$
f(x) = \begin{cases} x^2 + ax + b & \text{se } x \le 1 \\ \frac{c}{x} & \text{se } x > 1 \end{cases}
$$

Determina i parametri reali $a, b, c$ in modo che $f$ sia derivabile in $x=1$ e la retta tangente al grafico di $f$ nel punto di ascissa $x=1$ sia perpendicolare alla retta $y = 2x + 3$.

# Solution
Per la derivabilità in $x=1$ è necessaria la continuità in tale punto. Imponiamo la continuità:

$$
\lim_{x\to 1^-} f(x) = 1 + a + b, \quad \lim_{x\to 1^+} f(x) = c, \quad f(1) = 1 + a + b
$$

quindi $1 + a + b = c$.

Calcoliamo le derivate laterali in $x=1$. Per $x<1$, $f'(x) = 2x + a$, quindi $f'_-(1) = 2 + a$. Per $x>1$, $f'(x) = -\frac{c}{x^2}$, quindi $f'_+(1) = -c$. La derivabilità in $x=1$ richiede $2 + a = -c$.

Il coefficiente angolare della retta tangente in $x=1$ è $m = f'(1) = -c$. La retta data ha coefficiente angolare $2$. La condizione di perpendicolarità è $m \cdot 2 = -1$, da cui $-2c = -1 \Rightarrow c = \frac{1}{2}$.

Sostituendo in $2 + a = -c$ si ha $2 + a = -\frac{1}{2} \Rightarrow a = -\frac{5}{2}$. Infine, dalla condizione di continuità $1 + a + b = c$: $1 - \frac{5}{2} + b = \frac{1}{2} \Rightarrow b = 2$.

Quindi i parametri richiesti sono $a = -\frac{5}{2}$, $b = 2$, $c = \frac{1}{2}$.
