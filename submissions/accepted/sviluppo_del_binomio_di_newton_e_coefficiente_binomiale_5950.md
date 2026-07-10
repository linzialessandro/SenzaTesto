---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Sviluppo del binomio di Newton e coefficiente binomiale"
difficulty: 2
tags:
  - "binomio di Newton"
  - "coefficiente binomiale"
  - "calcolo combinatorio"
  - "quarto anno"
ai_generated: true
---
# Problem Text
Determinare il coefficiente del termine in $x^3$ nello sviluppo del seguente binomio:

$$
(2x - 1)^5
$$

# Solution
L'esercizio si risolve applicando la formula dello sviluppo del binomio di Newton.

1. La formula del termine generale dello sviluppo del binomio $(a + b)^n$ è:

$$
T_{k+1} = \binom{n}{k} a^{n-k} b^k
$$

2. Nel nostro caso abbiamo $a = 2x$, $b = -1$ e $n = 5$. Sostituendo questi valori, la formula diventa:

$$
T_{k+1} = \binom{5}{k} (2x)^{5-k} (-1)^k
$$

3. Separando la parte numerica dalla variabile $x$, l'espressione si scrive come:

$$
T_{k+1} = \binom{5}{k} 2^{5-k} (-1)^k x^{5-k}
$$

4. Poiché cerchiamo il coefficiente del termine in $x^3$, imponiamo che l'esponente di $x$ sia uguale a $3$:

$$
5 - k = 3 \implies k = 2
$$

5. Sostituiamo $k = 2$ nell'espressione del termine generale:

$$
T_3 = \binom{5}{2} 2^{5-2} (-1)^2 x^3 = \binom{5}{2} 2^3 (-1)^2 x^3
$$

6. Calcoliamo il coefficiente binomiale $\binom{5}{2}$:

$$
\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5 \cdot 4}{2 \cdot 1} = 10
$$

7. Sostituiamo i valori numerici per trovare il termine cercato:

$$
T_3 = 10 \cdot 8 \cdot 1 \cdot x^3 = 80x^3
$$

Il coefficiente del termine in $x^3$ è quindi $80$.
