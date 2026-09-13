---
year: 2
macro_area: "Numeri reali e Radicali"
topic: "Equazioni con radicali e razionalizzazione"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:45+00:00"
tags:
  - "radicali"
  - "equazioni irrazionali"
  - "razionalizzazione"
  - "dominio"
---
# Problem Text
Risolvi l'equazione $\sqrt{x+3} - \sqrt{x} = \sqrt{x-2}$.

# Solution
Imponiamo le condizioni di esistenza: $x+3 \ge 0$, $x \ge 0$, $x-2 \ge 0$, da cui $x \ge 2$.
Quadrando membro a membro:

$$
(\sqrt{x+3} - \sqrt{x})^2 = (\sqrt{x-2})^2
$$

$$
2x+3 - 2\sqrt{x^2+3x} = x-2
$$

$$
x+5 = 2\sqrt{x^2+3x}
$$

Quadrando ancora:

$$
(x+5)^2 = 4(x^2+3x)
$$

$$
x^2+10x+25 = 4x^2+12x
$$

$$
3x^2+2x-25 = 0
$$

Risolvendo:

$$
x = \frac{-2 \pm \sqrt{4+300}}{6} = \frac{-2 \pm 4\sqrt{19}}{6} = \frac{-1 \pm 2\sqrt{19}}{3}
$$

La soluzione negativa è esclusa dal dominio ($x \ge 2$). Pertanto:

$$
x = \frac{2\sqrt{19}-1}{3}
$$

Verifica: sostituendo nell'equazione originale, entrambi i membri sono positivi e l'uguaglianza è soddisfatta.
