---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Continuit\u00e0 delle funzioni a tratti e classificazione delle discontinuit\u00e0"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:12:33+00:00"
tags:
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "discontinuit\u00e0 eliminabile"
---
# Problem Text
Sia data la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da $f(x) = \begin{cases} \frac{x^2 - 1}{x - 1} & \text{se } x \neq 1 \\ a & \text{se } x = 1 \end{cases}$. Determina il valore di $a$ affinché $f$ sia continua in $x=1$. Se invece $a$ assume un valore diverso, classifica il punto di discontinuità.

# Solution
Per $x \neq 1$, la funzione si semplifica: $\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x+1$. Calcoliamo il limite per $x \to 1$: $$\lim_{x \to 1} f(x) = \lim_{x \to 1} (x+1) = 2.$$ Affinché $f$ sia continua in $x=1$, occorre che $f(1) = \lim_{x \to 1} f(x)$, quindi $a = 2$. Se $a \neq 2$, il limite esiste finito ma è diverso dal valore della funzione nel punto, quindi la discontinuità è eliminabile (o di terza specie).
