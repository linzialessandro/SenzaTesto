---
year: 5
macro_area: Analisi Matematica
topic: derivate
difficulty: 2
tags:
  - funzione composta
  - regola della catena
ai_generated: true
---
# Problem Text
Calcola la derivata prima della seguente funzione composta:
$$
f(x) = \ln(x^2 + 3x)
$$

# Solution
**1. Regola di derivazione delle funzioni composte (Chain Rule):**
La derivata di una funzione composta $g(h(x))$ è data da:
$$
D[g(h(x))] = g'(h(x)) \cdot h'(x)
$$

**2. Applicazione al nostro caso:**
La funzione esterna è il logaritmo naturale $g(t) = \ln(t)$, la cui derivata è $g'(t) = \frac{1}{t}$.
La funzione interna è il polinomio $h(x) = x^2 + 3x$, la cui derivata è $h'(x) = 2x + 3$.

**3. Calcolo della derivata:**
Sostituendo nella formula della regola della catena otteniamo:
$$
f'(x) = \frac{1}{x^2 + 3x} \cdot (2x + 3)
$$

Riordinando i termini:
$$
f'(x) = \frac{2x + 3}{x^2 + 3x}
$$
