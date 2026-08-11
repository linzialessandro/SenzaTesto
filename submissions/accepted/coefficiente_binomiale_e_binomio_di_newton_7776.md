---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Coefficiente binomiale e binomio di Newton"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:51:31+00:00"
tags:
  - "calcolo combinatorio"
  - "binomio di Newton"
  - "coefficienti binomiali"
---
# Problem Text
Determina il coefficiente del termine in $x^4$ nello sviluppo di $(2x-1)^6$.

# Solution
Per il binomio di Newton, il termine generale dello sviluppo di $(a+b)^n$ è

$$
\binom{n}{k} a^{n-k} b^k.
$$

Nel nostro caso $a=2x$, $b=-1$ e $n=6$. Il termine generale diventa

$$
\binom{6}{k} (2x)^{6-k} (-1)^k.
$$

La potenza di $x$ è $6-k$; per ottenere $x^4$ dobbiamo avere $6-k=4$, quindi $k=2$. Il coefficiente cercato è

$$
\binom{6}{2} \cdot 2^{6-2} \cdot (-1)^2 = \binom{6}{2} \cdot 2^4 \cdot 1 = 15 \cdot 16 = 240.
$$

Quindi il coefficiente del termine in $x^4$ è $240$.
