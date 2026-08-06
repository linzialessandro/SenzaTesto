---
year: 4
macro_area: "Equazioni logaritmiche"
topic: "Propriet\u00e0 dei logaritmi"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:58:36+00:00"
tags:
  - "logaritmi"
  - "equazioni logaritmiche"
  - "dominio"
---
# Problem Text
Risolvi l'equazione logaritmica: $\log_2(x) + \log_2(x-2) = 3$.

# Solution
Determiniamo il dominio: deve essere $x>0$ e $x-2>0$, cioè $x>2$. Applichiamo la proprietà del prodotto: $\log_2(x) + \log_2(x-2) = \log_2(x(x-2))$. L'equazione diventa $\log_2(x(x-2)) = 3$, da cui $x(x-2) = 2^3 = 8$. Quindi $x^2 - 2x - 8 = 0$. Risolvendo: $x = \frac{2 \pm \sqrt{4 + 32}}{2} = \frac{2 \pm 6}{2}$, otteniamo $x = 4$ o $x = -2$. La soluzione $x = -2$ non è accettabile perché non appartiene al dominio ($x>2$). Pertanto l'unica soluzione è $x = 4$.
