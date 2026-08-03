---
year: 2
macro_area: "Frazioni algebriche"
topic: "Equazioni razionali fratte"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:52:38+00:00"
tags:
  - "frazioni algebriche"
  - "equazioni razionali"
  - "condizioni di esistenza"
---
# Problem Text
Risolvi l'equazione razionale: $\frac{x}{x-1} + \frac{2}{x+1} = \frac{3x}{x^2-1}$.

# Solution
Le condizioni di esistenza si impongono imponendo che i denominatori siano diversi da zero: $x-1 \neq 0$, $x+1 \neq 0$ e $x^2-1 \neq 0$. Poiché $x^2-1 = (x-1)(x+1)$, la condizione è $x \neq \pm 1$. 

Portiamo le frazioni al denominatore comune $x^2-1$: il primo membro diventa

$$
\frac{x(x+1)}{(x-1)(x+1)} + \frac{2(x-1)}{(x+1)(x-1)} = \frac{x^2+x + 2x - 2}{x^2-1} = \frac{x^2+3x-2}{x^2-1}.
$$

L'equazione diventa quindi

$$
\frac{x^2+3x-2}{x^2-1} = \frac{3x}{x^2-1}.
$$

Poiché il denominatore non è nullo (per le CE), moltiplichiamo entrambi i membri per $x^2-1$, ottenendo

$$
x^2+3x-2 = 3x.
$$

Sottraendo $3x$ da entrambi i membri:

$$
x^2 - 2 = 0 \implies x^2 = 2.
$$

Quindi $x = \pm \sqrt{2}$. Entrambi i valori soddisfano le condizioni di esistenza ($\pm \sqrt{2} \neq \pm 1$).

Pertanto le soluzioni sono $x = \sqrt{2}$ e $x = -\sqrt{2}$.
