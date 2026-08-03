---
year: 3
macro_area: "Equazioni e disequazioni irrazionali"
topic: "Equazioni irrazionali"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-03T17:50:30+00:00"
tags:
  - "equazioni irrazionali"
  - "radicali"
  - "verifica soluzioni"
---
# Problem Text
Risolvi l'equazione irrazionale $\sqrt{2x+1} = x-1$.

# Solution
Poiché il primo membro è una radice quadrata, deve essere non negativo, quindi $x-1 \ge 0 \Rightarrow x \ge 1$. Eleviamo al quadrato entrambi i membri:

$$
(\sqrt{2x+1})^2 = (x-1)^2 \Rightarrow 2x+1 = x^2 -2x +1 \Rightarrow x^2 -4x =0
$$

Quindi $x(x-4)=0$, da cui $x=0$ o $x=4$. La condizione $x\ge1$ esclude $x=0$. Verifichiamo $x=4$: $\sqrt{2\cdot4+1} = \sqrt{9}=3$ e $4-1=3$, quindi è valida. La soluzione è $x=4$.
