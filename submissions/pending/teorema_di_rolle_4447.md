---
year: 5
macro_area: "Teoremi del calcolo differenziale"
topic: "Teorema di Rolle"
difficulty: 1
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T14:29:06+00:00"
tags:
  - "teorema di Rolle"
  - "derivate"
  - "continuit\u00e0"
---
# Problem Text
Verifica che la funzione $f(x) = x^2 - 4x + 5$ soddisfa le ipotesi del teorema di Rolle sull'intervallo $[0,4]$ e trova il punto $c$ di cui il teorema garantisce l'esistenza.

# Solution
La funzione è un polinomio, quindi è continua su $[0,4]$ e derivabile su $(0,4)$. Inoltre $f(0) = 0 - 0 + 5 = 5$ e $f(4) = 16 - 16 + 5 = 5$, quindi $f(0) = f(4)$. Per il teorema di Rolle, esiste $c \in (0,4)$ tale che $f'(c) = 0$. Calcoliamo la derivata: $f'(x) = 2x - 4$. Imponiamo $f'(c) = 0$: 

$$
2c - 4 = 0 \Rightarrow c = 2.
$$

Quindi $c = 2$ appartiene all'intervallo $(0,4)$.
