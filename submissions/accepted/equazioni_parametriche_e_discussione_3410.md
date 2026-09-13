---
year: 2
macro_area: "Equazioni di secondo grado"
topic: "Equazioni parametriche e discussione"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:16+00:00"
tags:
  - "equazioni"
  - "parametriche"
  - "discriminante"
  - "discussione"
---
# Problem Text
Discuti e risolvi l'equazione $(k-1)x^2 - 2(k+1)x + (k+2) = 0$ al variare del parametro reale $k$.

# Solution
L'equazione è parametrica. Consideriamo separatamente il caso in cui il coefficiente di $x^2$ si annulla.

Se $k-1=0$, cioè $k=1$, l'equazione diventa lineare: $-4x + 3 = 0 \Rightarrow x = \frac{3}{4}$.

Se $k \neq 1$, è un'equazione di secondo grado. Calcoliamo il discriminante:
$$ \Delta = [-2(k+1)]^2 - 4(k-1)(k+2) = 4(k+1)^2 - 4(k^2 + k - 2) = 4[(k^2+2k+1) - (k^2+k-2)] = 4(k+3). $$

Studiamo il segno di $\Delta$:
- Se $\Delta > 0 \iff k > -3$, con $k \neq 1$, l'equazione ammette due soluzioni reali e distinte:
$$ x_{1,2} = \frac{2(k+1) \pm \sqrt{4(k+3)}}{2(k-1)} = \frac{(k+1) \pm \sqrt{k+3}}{k-1}. $$
- Se $\Delta = 0 \iff k = -3$, l'equazione ammette una soluzione reale doppia. Sostituendo $k=-3$ nell'equazione originale si ha:
$$ -4x^2 + 4x - 1 = 0 \Rightarrow 4x^2 - 4x + 1 = 0 \Rightarrow (2x-1)^2=0 \Rightarrow x = \frac{1}{2}. $$
- Se $\Delta < 0 \iff k < -3$, l'equazione non ammette soluzioni reali.

Riepilogo:
- $k=1$: una soluzione $x = \frac{3}{4}$.
- $k=-3$: una soluzione doppia $x = \frac{1}{2}$.
- $k > -3$ e $k \neq 1$: due soluzioni reali e distinte $x = \frac{(k+1) \pm \sqrt{k+3}}{k-1}$.
- $k < -3$: nessuna soluzione reale.
