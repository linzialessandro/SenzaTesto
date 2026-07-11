---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Binomio di Newton"
difficulty: 2
ai_generated: true
tags:
  - "binomio di Newton"
  - "coefficiente binomiale"
  - "calcolo combinatorio"
  - "algebra"
---
# Problem Text
Determinare il coefficiente del termine $x^3$ nello sviluppo del binomio $(x + 3)^5$.

# Solution
Ricordiamo la formula dello sviluppo del binomio di Newton:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

Nel nostro caso, poniamo $a = x$, $b = 3$ e $n = 5$:

$$
(x + 3)^5 = \sum_{k=0}^{5} \binom{5}{k} x^{5-k} 3^k
$$

Per trovare il coefficiente del termine in $x^3$, impostiamo l'esponente di $x$ pari a $3$:

$$
5 - k = 3 \implies k = 2
$$

Sostituiamo $k = 2$ nell'espressione del termine generale:

$$
\binom{5}{2} x^3 \cdot 3^2
$$

Calcoliamo il coefficiente binomiale $\binom{5}{2}$:

$$
\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5 \cdot 4}{2 \cdot 1} = 10
$$

Calcoliamo la potenza del termine noto:

$$
3^2 = 9
$$

Moltiplichiamo i valori ottenuti per trovare il coefficiente finale:

$$
10 \cdot 9 = 90
$$

Il coefficiente del termine $x^3$ è quindi $90$.
