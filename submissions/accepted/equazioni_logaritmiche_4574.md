---
year: 4
macro_area: "Esponenziali e logaritmi"
topic: "Equazioni logaritmiche"
difficulty: 2
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:54:38+00:00"
tags:
  - "logaritmi"
  - "equazioni"
  - "propriet\u00e0 dei logaritmi"
---
# Problem Text
Risolvi l'equazione: $\log_2(x) + \log_2(x-2) = 3$.

# Solution
Utilizziamo la proprietà del prodotto dei logaritmi: $\log_a b + \log_a c = \log_a(bc)$, quindi l'equazione diventa:

$$
\log_2(x(x-2)) = 3
$$

Passiamo alla forma esponenziale: $x(x-2) = 2^3 = 8$. Otteniamo l'equazione di secondo grado $x^2 - 2x - 8 = 0$, che si riscrive come $(x-4)(x+2)=0$, da cui $x=4$ oppure $x=-2$.
Controlliamo le condizioni di esistenza: richiediamo $x>0$ e $x-2>0$, cioè $x>2$. La soluzione $x=-2$ non è accettabile, mentre $x=4$ è valida. Quindi l'unica soluzione è $x=4$.
