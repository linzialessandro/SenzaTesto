---
year: 3
macro_area: "Coniche"
topic: "Iperbole e funzione omografica"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:25+00:00"
tags:
  - "iperbole"
  - "funzione omografica"
  - "parametro"
  - "fuochi"
  - "distanza focale"
  - "iperbole equilatera"
  - "asintoti"
---
# Problem Text
Determina tutti i valori reali di $k$ per cui la distanza tra i fuochi dell'iperbole di equazione $y = \dfrac{x+k}{x-1}$ è $4\sqrt{5}$.

# Solution
Riscrivo la funzione: $y = \dfrac{x+k}{x-1} = 1 + \dfrac{k+1}{x-1}$. Il centro è $C(1,1)$ e gli asintoti sono $x=1$ e $y=1$. Con la traslazione $X = x-1$, $Y = y-1$ otteniamo $XY = k+1$, che è un'iperbole equilatera riferita ai suoi asintoti (purché $k+1 \neq 0$). Per un'iperbole di equazione $XY = c$, la distanza tra i fuochi è $4\sqrt{|c|}$. Imponendo $4\sqrt{|k+1|} = 4\sqrt{5}$ si ha $|k+1| = 5$, da cui $k+1 = 5$ oppure $k+1 = -5$, cioè $k=4$ oppure $k=-6$. Entrambi i valori sono accettabili perché $k \neq -1$ (che annullerebbe il termine $XY$). Pertanto $k = -6$ oppure $k = 4$.
