---
year: 5
macro_area: "Equazioni differenziali"
topic: "Equazioni differenziali del primo ordine a variabili separabili e lineari"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T18:10:49+00:00"
tags:
  - "equazioni differenziali"
  - "primo ordine"
  - "lineare"
  - "fattore integrante"
---
# Problem Text
Risolvi l'equazione differenziale lineare del primo ordine $y' + y = e^{-x}$.

# Solution
L'equazione è lineare del primo ordine. Il fattore integrante è $e^{\int 1\, dx} = e^{x}$.
Moltiplicando entrambi i membri per $e^{x}$ si ottiene:

$$
e^{x} y' + e^{x} y = e^{x} e^{-x} = 1
$$

Il primo membro è la derivata del prodotto $e^{x} y$:

$$
(e^{x} y)' = 1
$$

Integrando ambo i membri rispetto a $x$:

$$
e^{x} y = x + C
$$

Dividendo per $e^{x}$ si ha la soluzione generale:

$$
y = e^{-x}(x + C)
$$

dove $C$ è una costante arbitraria.
