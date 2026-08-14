---
year: 3
macro_area: "Coniche"
topic: "Posizione reciproca retta-circonferenza"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-14T11:02:17+00:00"
tags:
  - "circonferenza"
  - "retta"
  - "posizione reciproca"
  - "parametro"
  - "distanza punto-retta"
---
# Problem Text
Data la circonferenza $\Gamma$ di equazione $x^2 + y^2 - 4x - 6y + 9 = 0$, determina per quali valori del parametro reale $m$ la retta $r: y = mx + 1$ è secante, tangente o esterna a $\Gamma$.

# Solution
Completiamo i quadrati: $(x-2)^2 + (y-3)^2 = 4$, quindi centro $C(2,3)$ e raggio $r=2$. La distanza da $C$ alla retta $r$ è $d = \frac{|2m - 3 + 1|}{\sqrt{m^2+1}} = \frac{|2m-2|}{\sqrt{m^2+1}} = \frac{2|m-1|}{\sqrt{m^2+1}}$. La retta è secante se $d < r$, cioè $\frac{2|m-1|}{\sqrt{m^2+1}} < 2$, ossia $|m-1| < \sqrt{m^2+1}$. Elevando al quadrato (entrambi i membri sono non negativi) otteniamo $(m-1)^2 < m^2+1$, cioè $m^2 -2m +1 < m^2 +1$, da cui $-2m < 0$, quindi $m > 0$. Per $m=0$, $d=2 = r$, quindi la retta è tangente. Per $m<0$, $d>2$, quindi esterna. In conclusione: secante per $m>0$, tangente per $m=0$, esterna per $m<0$.
