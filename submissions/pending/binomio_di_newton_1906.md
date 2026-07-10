---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Binomio di Newton"
difficulty: 2
tags:
  - "binomio di Newton"
  - "coefficiente binomiale"
  - "calcolo combinatorio"
  - "esercizi liceo"
---
# Problem Text
Determinare il coefficiente del termine contenente $x^3$ nello sviluppo del binomio di Newton $(2x - 3)^5$.

# Solution
Per trovare il termine richiesto, applichiamo la formula dello sviluppo del binomio di Newton per $(a + b)^n$:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

Nel nostro caso, abbiamo $a = 2x$, $b = -3$ e $n = 5$. Il termine generico dello sviluppo è:

$$
\binom{5}{k} (2x)^{5-k} (-3)^k = \binom{5}{k} 2^{5-k} (-3)^k x^{5-k}
$$

Poiché cerchiamo il termine in $x^3$, imponiamo che l'esponente di $x$ sia uguale a $3$:

$$
5 - k = 3 \implies k = 2
$$

Sostituiamo $k = 2$ nell'espressione del termine generico per determinarne il coefficiente:

$$
\binom{5}{2} 2^{5-2} (-3)^2 = \binom{5}{2} 2^3 (-3)^2
$$

Calcoliamo ora i singoli fattori del coefficiente:

1. Il coefficiente binomiale:

$$
\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5 \cdot 4}{2 \cdot 1} = 10
$$

2. Le potenze dei coefficienti numerici:

$$
2^3 = 8
$$

$$
(-3)^2 = 9
$$

Moltiplichiamo i valori ottenuti:

$$
10 \cdot 8 \cdot 9 = 720
$$

Il coefficiente del termine contenente $x^3$ è quindi $720$.
