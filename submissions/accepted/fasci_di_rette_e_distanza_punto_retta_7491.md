---
year: 3
macro_area: "La retta"
topic: "Fasci di rette e distanza punto-retta"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:24+00:00"
tags:
  - "retta"
  - "fascio proprio"
  - "distanza punto-retta"
  - "coefficiente angolare"
  - "retta verticale"
---
# Problem Text
Nel fascio proprio di rette di centro $C(2,-1)$, determina le equazioni delle rette che hanno distanza $3$ dal punto $P(5,2)$.

# Solution
Le rette del fascio passanti per $C(2,-1)$ si scrivono come $y+1 = m(x-2)$ per le rette non verticali, e come $x=2$ per la retta verticale.
Caso 1: retta verticale $x=2$. La distanza da $P(5,2)$ è $|5-2|=3$, che coincide con il valore richiesto. Quindi $x=2$ è una soluzione.
Caso 2: rette non verticali: $mx - y -2m -1 =0$. La distanza da $P(5,2)$ è

$$
\frac{|5m - 2 -2m -1|}{\sqrt{m^2+1}} = \frac{|3m-3|}{\sqrt{m^2+1}} = 3.
$$

Elevando al quadrato (i due membri sono non negativi): $(3m-3)^2 = 9(m^2+1) \Rightarrow 9(m-1)^2 = 9(m^2+1) \Rightarrow (m-1)^2 = m^2+1 \Rightarrow m^2 -2m +1 = m^2 +1 \Rightarrow -2m =0 \Rightarrow m=0$.
La retta è $y+1 = 0 \Rightarrow y = -1$.
Verifica: distanza da $P(5,2)$ a $y=-1$ è $|2-(-1)|=3$. OK.
Pertanto le rette richieste sono $x=2$ e $y=-1$.
