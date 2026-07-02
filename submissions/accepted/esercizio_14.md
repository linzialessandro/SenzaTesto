---
year: 1
macro_area: Calcolo letterale
topic: polinomi
difficulty: 2
tags:
  - ruffini
  - divisione
---
# Problem Text
Esegui la divisione del polinomio $P(x) = x^3 - 2x^2 - 5x + 6$ per il binomio $(x-1)$ utilizzando la regola di Ruffini e indica quoziente e resto.

# Solution
Prepariamo lo schema di Ruffini con i coefficienti del polinomio ordinato e completo ($1, -2, -5, 6$) e la radice del divisore ($x=1$):
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
 1 & & 1 & -1 & -6 \\
\hline
 & 1 & -1 & -6 & 0
\end{array}
$$
Il resto della divisione è l'ultimo numero in basso a destra, ed è uguale a $0$ (il polinomio è quindi divisibile).
I numeri restanti ($1, -1, -6$) sono i coefficienti del polinomio quoziente, che avrà grado abbassato di uno rispetto a $P(x)$:
$$ Q(x) = x^2 - x - 6 $$
$$ R = 0 $$
