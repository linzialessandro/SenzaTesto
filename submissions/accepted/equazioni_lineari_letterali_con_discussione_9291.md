---
year: 2
macro_area: "Equazioni di primo grado"
topic: "Equazioni lineari letterali con discussione"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:31+00:00"
tags:
  - "equazioni lineari"
  - "letterali"
  - "discussione"
  - "parametro"
  - "fattorizzazione"
---
# Problem Text
Al variare del parametro reale $k$, risolvi e discuti l'equazione letterale $(k^2 - 4)x = k^3 - 8$.

# Solution
Riscriviamo l'equazione in forma normale $a(k)x = b(k)$. Fattorizziamo: $k^2 - 4 = (k-2)(k+2)$ e $k^3 - 8 = (k-2)(k^2 + 2k + 4)$. Quindi l'equazione diventa $$(k-2)(k+2)x = (k-2)(k^2 + 2k + 4).$$ Discutiamo i casi:
1) Se $k-2 = 0$, cioè $k = 2$: l'equazione diventa $0 \cdot x = 0$, un'identità, quindi infinite soluzioni: $x \in \mathbb{R}$.
2) Se $k+2 = 0$, cioè $k = -2$: l'equazione diventa $0 \cdot x = (-2)^3 - 8 = -8 - 8 = -16$, cioè $0 = -16$, impossibile, quindi nessuna soluzione.
3) Se $k \neq 2$ e $k \neq -2$: dividiamo per $(k-2)(k+2) \neq 0$ e otteniamo $$x = \frac{k^3 - 8}{k^2 - 4} = \frac{(k-2)(k^2 + 2k + 4)}{(k-2)(k+2)} = \frac{k^2 + 2k + 4}{k+2}.$$ Quindi per $k \neq \pm 2$ la soluzione è unica: $x = \frac{k^2 + 2k + 4}{k+2}$.
In conclusione: per $k=2$ infinite soluzioni; per $k=-2$ nessuna soluzione; per $k \neq \pm 2$ soluzione unica $x = \frac{k^2 + 2k + 4}{k+2}$.
