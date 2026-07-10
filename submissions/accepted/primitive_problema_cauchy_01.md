---
year: 5
macro_area: Analisi
topic: integrali indefiniti
difficulty: 2
tags:
  - primitive
  - problema di Cauchy
ai_generated: true
---
# Problem Text
Determina la primitiva $F(x)$ della funzione $f(x) = 3e^x + 2x$ il cui grafico passa per il punto $P(0, 5)$.

# Solution
Calcoliamo innanzitutto l'integrale indefinito di $f(x)$ per trovare la famiglia delle primitive:
$$ \int (3e^x + 2x) \, dx = 3e^x + x^2 + C $$
Dunque le primitive sono della forma $F(x) = 3e^x + x^2 + C$.

Imponiamo ora il passaggio del grafico per il punto $P(0, 5)$, ovvero $F(0) = 5$:
$$ F(0) = 3e^0 + 0^2 + C = 3 + C $$
$$ 3 + C = 5 \implies C = 2 $$

Sostituendo il valore di $C$ trovato, la primitiva cercata è:
$$ F(x) = 3e^x + x^2 + 2 $$
