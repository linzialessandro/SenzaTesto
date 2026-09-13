---
year: 1
macro_area: "Calcolo letterale"
topic: "Scomposizione di polinomi con parametro"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:23:54+00:00"
tags:
  - "calcolo letterale"
  - "scomposizione"
  - "Ruffini"
  - "parametro"
  - "polinomi"
---
# Problem Text
Scomponi in fattori, al variare del parametro reale $a$, il polinomio $$P(x) = x^3 - (a+1)x^2 + (a-2)x + 2a.$$

# Solution
Cerchiamo una radice indipendente da $a$. Osserviamo che $P(2) = 8 - 4(a+1) + 2(a-2) + 2a = 8 - 4a - 4 + 2a - 4 + 2a = 0$, quindi $x-2$ è un fattore. Applichiamo la regola di Ruffini con $x=2$: i coefficienti sono $1$, $-(a+1)$, $a-2$, $2a$. Abbassiamo $1$, moltiplichiamo per $2$ e sommiamo: $-(a+1)+2 = 1-a$; moltiplichiamo per $2$: $2(1-a)=2-2a$, sommiamo a $a-2$: $a-2+2-2a = -a$; moltiplichiamo per $2$: $-2a$, sommiamo a $2a$: $0$. Il quoziente è $x^2 + (1-a)x - a$. Scomponiamo il trinomio: cerchiamo due numeri il cui prodotto è $-a$ e la somma è $1-a$. I numeri sono $-a$ e $1$? Verifichiamo: $(-a)(1) = -a$ e $(-a)+1 = 1-a$. Quindi $x^2 + (1-a)x - a = (x-a)(x+1)$. Pertanto la scomposizione completa è $$P(x) = (x-2)(x+1)(x-a).$$ Se $a=2$ si ha $(x-2)^2(x+1)$; se $a=-1$ si ha $(x-2)(x+1)^2$. In ogni caso la fattorizzazione è quella indicata.
