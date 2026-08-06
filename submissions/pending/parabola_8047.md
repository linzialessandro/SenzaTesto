---
year: 3
macro_area: "Coniche"
topic: "Parabola"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:08:54+00:00"
tags:
  - "parabola"
  - "vertice"
  - "fuoco"
  - "direttrice"
---
# Problem Text
Determina vertice, fuoco e direttrice della parabola di equazione $y = x^2 - 4x + 3$.

# Solution
Riscriviamo l'equazione completando il quadrato:

$$
y = (x^2 - 4x + 4) - 1 = (x-2)^2 - 1
$$

Quindi $y+1 = (x-2)^2$, che in forma standard è $(x-2)^2 = 4p(y+1)$. Confrontando, $4p = 1$, da cui $p = \frac{1}{4}$. Il vertice è $V(2, -1)$. L'asse di simmetria è la retta $x=2$. Poiché la parabola è verticale e il coefficiente di $x^2$ è positivo, la concavità è verso l'alto, quindi il fuoco è sopra il vertice: $F(2, -1+\frac{1}{4}) = (2, -\frac{3}{4})$. La direttrice è la retta orizzontale $y = -1 - \frac{1}{4} = -\frac{5}{4}$.
