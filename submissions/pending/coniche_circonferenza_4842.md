---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche \u2014 Circonferenza"
difficulty: 3
ai_generated: true
tags:
  - "circonferenza"
  - "centro e raggio"
  - "distanza punto-retta"
  - "tangenti"
---
# Problem Text
Determina il centro e il raggio della circonferenza $\gamma$ di equazione $x^2 + y^2 - 4x - 6y + 4 = 0$ e trova le equazioni delle rette tangenti a $\gamma$ passanti per il punto $P(5, 0)$.

# Solution
Dall'equazione della circonferenza $\gamma: x^2 + y^2 - 4x - 6y + 4 = 0$, si ricavano i coefficienti $a = -4$, $b = -6$ e $c = 4$.

Le coordinate del centro $C(\alpha, \beta)$ sono:

$$
\alpha = -\frac{a}{2} = 2, \quad \beta = -\frac{b}{2} = 3 \implies C(2, 3)
$$

Il raggio $R$ è espresso da:

$$
R = \sqrt{\alpha^2 + \beta^2 - c} = \sqrt{2^2 + 3^2 - 4} = \sqrt{9} = 3
$$

Calcoliamo la distanza tra il centro $C(2,3)$ e il punto $P(5,0)$:

$$
CP = \sqrt{(5-2)^2 + (0-3)^2} = \sqrt{18} = 3\sqrt{2} > R
$$

Il punto $P$ è esterno alla circonferenza, pertanto esistono due rette tangenti.

Le rette del fascio per $P(5,0)$ non verticali hanno equazione:

$$
y - 0 = m(x - 5) \implies mx - y - 5m = 0
$$

Imponiamo che la distanza del centro $C(2,3)$ dalla retta del fascio sia pari al raggio $R = 3$:

$$
d(C, r) = \frac{|m(2) - 3 - 5m|}{\sqrt{m^2 + 1}} = \frac{|-3m - 3|}{\sqrt{m^2 + 1}} = 3
$$

Semplificando per $3$:

$$
|-m - 1| = \sqrt{m^2 + 1}
$$

Elevando al quadrato ed eliminando il valore assoluto:

$$
(m + 1)^2 = m^2 + 1 \implies m^2 + 2m + 1 = m^2 + 1 \implies 2m = 0 \implies m = 0
$$

Otteniamo la prima retta tangente $t_1: y = 0$.

La seconda retta tangente appartiene alla retta verticale del fascio per $P(5,0)$, ossia $t_2: x = 5$. Verifichiamo la distanza dal centro:

$$
d(C, x=5) = |2 - 5| = 3 = R
$$

Le equazioni delle rette tangenti cercate sono $y = 0$ e $x = 5$.
