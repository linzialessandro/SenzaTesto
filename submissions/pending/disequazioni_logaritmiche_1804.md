---
year: 4
macro_area: "Esponenziali e logaritmi"
topic: "Disequazioni logaritmiche"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:11:49+00:00"
tags:
  - "logaritmi"
  - "disequazioni"
  - "propriet\u00e0 dei logaritmi"
---
# Problem Text
Risolvi la disequazione logaritmica: $\log_2(x-1) + \log_2(x+2) \le 3$.

# Solution
Imponiamo le condizioni di esistenza: $x-1 > 0$ e $x+2 > 0$, da cui $x > 1$. Utilizzando la proprietà del prodotto dei logaritmi: $\log_2[(x-1)(x+2)] \le 3$. Passando alla forma esponenziale: $(x-1)(x+2) \le 2^3 = 8$. Sviluppando: $x^2 + x - 2 \le 8$, cioè $x^2 + x - 10 \le 0$. Le radici dell'equazione associata sono $x = \frac{-1 \pm \sqrt{41}}{2}$. La disequazione è verificata per $\frac{-1-\sqrt{41}}{2} \le x \le \frac{-1+\sqrt{41}}{2}$. Intersecando con $x > 1$, otteniamo:

$$
1 < x \le \frac{-1+\sqrt{41}}{2}
$$
