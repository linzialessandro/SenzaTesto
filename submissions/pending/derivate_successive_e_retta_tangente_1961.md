---
year: 5
macro_area: "Derivate"
topic: "Derivate successive e retta tangente"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:47:06+00:00"
tags:
  - "derivate"
  - "regola della catena"
  - "derivate di ordine superiore"
  - "retta tangente"
  - "teorema di Fermat"
---
# Problem Text
Sia $f$ una funzione reale derivabile infinite volte su $\mathbb{R}$, tale che $f(0)=0$. Si sa che per ogni $x \in \mathbb{R}$ vale l'identità

$$
f''(x) - 2f'(x) + f(x) = 0
$$

e che la retta tangente al grafico di $f$ nel punto di ascissa $x=0$ è orizzontale. Determina l'espressione esplicita di $f$ e scrivi l'equazione della tangente al grafico di $f$ nel punto di ascissa $x=1$.

# Solution
L'equazione differenziale $f''-2f'+f=0$ ha polinomio caratteristico $\lambda^2-2\lambda+1=(\lambda-1)^2=0$, con radice doppia $\lambda=1$. Dunque la soluzione generale è $f(x)=(ax+b)e^x$ con $a,b \in \mathbb{R}$. Imponiamo le condizioni iniziali. Poiché $f(0)=0$, si ha $b=0$, quindi $f(x)=ax e^x$. La derivata è $f'(x)=a e^x + ax e^x = a(x+1)e^x$. La tangente in $x=0$ è orizzontale, quindi $f'(0)=0$, da cui $a(0+1)e^0=a=0$. Quindi $a=0$ e $f$ è identicamente nulla: $f(x)=0$. La retta tangente al grafico nel punto di ascissa $x=1$ è quindi l'asse $x$, cioè $y=0$. Verifica: la funzione nulla soddisfa l'equazione differenziale e le condizioni iniziali. La risposta finale è $f(x)=0$ e la tangente in $x=1$ è $y=0$.
