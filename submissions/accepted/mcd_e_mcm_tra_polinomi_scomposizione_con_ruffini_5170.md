---
year: 1
macro_area: "Calcolo letterale"
topic: "MCD e mcm tra polinomi, scomposizione con Ruffini"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:56:12+00:00"
tags:
  - "polinomi"
  - "MCD"
  - "mcm"
  - "Ruffini"
  - "scomposizione"
---
# Problem Text
Determina i valori di $a$ e $b$ per cui il polinomio $x-2$ è un fattore comune dei polinomi $A(x) = 2x^3 - 3x^2 + ax - 2$ e $B(x) = x^3 - 4x^2 + bx + 6$. Dopo averli scomposti in fattori, calcola il MCD e il mcm dei due polinomi.

# Solution
Poiché $x-2$ è un fattore comune, si ha $A(2)=0$ e $B(2)=0$. Calcoliamo:
$A(2) = 2 \cdot 8 - 3 \cdot 4 + 2a - 2 = 16 - 12 + 2a - 2 = 2 + 2a = 0 \Rightarrow a = -1$.
$B(2) = 8 - 4 \cdot 4 + 2b + 6 = 8 - 16 + 2b + 6 = -2 + 2b = 0 \Rightarrow b = 1$.
Sostituiamo: $A(x) = 2x^3 - 3x^2 - x - 2$, $B(x) = x^3 - 4x^2 + x + 6$.
Scomponiamo $A(x)$ con la regola di Ruffini: dividendo per $x-2$ otteniamo $2x^2 + x + 1$, quindi $A(x) = (x-2)(2x^2 + x + 1)$. Il discriminante di $2x^2+x+1$ è $\Delta = 1 - 8 = -7 < 0$, quindi è irriducibile.
Scomponiamo $B(x)$: dividendo per $x-2$ otteniamo $x^2 - 2x - 3 = (x-3)(x+1)$, quindi $B(x) = (x-2)(x-3)(x+1)$.
Il MCD è dato dai fattori comuni con il minimo esponente, quindi $MCD = x-2$.
Il mcm è dato da tutti i fattori con il massimo esponente: $mcm = (x-2)(2x^2 + x + 1)(x-3)(x+1)$.
