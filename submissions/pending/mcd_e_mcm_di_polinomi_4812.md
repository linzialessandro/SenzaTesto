---
year: 1
macro_area: "Calcolo letterale"
topic: "MCD e mcm di polinomi"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:11:27+00:00"
tags:
  - "polinomi"
  - "scomposizione"
  - "MCD"
  - "mcm"
  - "Ruffini"
---
# Problem Text
Calcola il MCD e il mcm dei polinomi $P(x) = x^3 - 7x - 6$ e $Q(x) = x^2 - 5x + 6$.

# Solution
Scomponiamo $P(x)$. Proviamo le radici razionali tra i divisori di $-6$: $\pm 1, \pm 2, \pm 3, \pm 6$. Verifichiamo $x=-1$: $P(-1)=(-1)^3 - 7(-1) - 6 = -1+7-6=0$, quindi $x+1$ è un fattore. Usiamo la regola di Ruffini con coefficienti $1, 0, -7, -6$ (manca il termine in $x^2$):

$$
\begin{array}{c|cccc}
-1 & 1 & 0 & -7 & -6 \\
   &   & -1 & 1 & 6 \\
\hline
   & 1 & -1 & -6 & 0
\end{array}
$$

Il quoziente è $x^2 - x - 6$, che si scompone come $(x-3)(x+2)$. Quindi $P(x) = (x+1)(x-3)(x+2)$.

Scomponiamo $Q(x)$: $x^2 - 5x + 6 = (x-2)(x-3)$.

I due polinomi hanno in comune il fattore $(x-3)$, quindi il MCD è $x-3$.

Il mcm è il prodotto di tutti i fattori distinti con il massimo esponente: $(x+1)(x-3)(x+2)(x-2)$.

Pertanto il MCD è $x-3$ e il mcm è $(x+1)(x+2)(x-3)(x-2)$.
