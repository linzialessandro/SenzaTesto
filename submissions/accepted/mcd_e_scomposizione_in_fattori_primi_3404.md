---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "MCD e scomposizione in fattori primi"
difficulty: 4
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:55:52+00:00"
tags:
  - "MCD"
  - "scomposizione"
  - "divisori"
  - "potenze"
---
# Problem Text
Un numero intero positivo $n$ ha esattamente 12 divisori positivi. La sua scomposizione in fattori primi è del tipo $n = 2^a \cdot 3^b$ (con $a,b$ interi non negativi). Sapendo che $\operatorname{MCD}(n, 12) = 6$, determina $n$.

# Solution
Il numero di divisori di $n$ è $(a+1)(b+1)$, quindi $(a+1)(b+1)=12$. Poiché $12=2^2\cdot 3$, il MCD di $n$ e 12 ha esponenti $\min(a,2)$ per il 2 e $\min(b,1)$ per il 3. Affinché sia $6=2\cdot 3$, dobbiamo avere $\min(a,2)=1$ e $\min(b,1)=1$. La prima condizione implica $a=1$ (se $a=0$ il minimo è 0, se $a\ge2$ il minimo è 2). La seconda implica $b\ge1$. Sostituendo $a=1$ in $(a+1)(b+1)=12$ otteniamo $2(b+1)=12$, da cui $b+1=6$ e $b=5$. Quindi $n = 2^1 \cdot 3^5 = 2 \cdot 243 = 486$. Verifichiamo: $486=2\cdot 3^5$, $12=2^2\cdot 3$, MCD $= 2^{\min(1,2)} \cdot 3^{\min(5,1)} = 2\cdot 3 = 6$. Inoltre il numero di divisori è $(1+1)(5+1)=2\cdot 6=12$. La soluzione è $n=486$.
