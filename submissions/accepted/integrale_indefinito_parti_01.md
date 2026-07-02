---
year: 5
macro_area: Analisi
topic: integrali indefiniti
difficulty: 2
tags:
  - per parti
---
# Problem Text
Calcola il seguente integrale indefinito: 
$$ \int x \cos(x) \, dx $$

# Solution
Integriamo per parti usando la formula $\int f'(x)g(x) dx = f(x)g(x) - \int f(x)g'(x) dx$.

Scegliamo:
- Fattore differenziale: $f'(x) = \cos(x) \implies f(x) = \sin(x)$
- Fattore finito: $g(x) = x \implies g'(x) = 1$

Applicando la formula otteniamo:
$$ \int x \cos(x) \, dx = x \sin(x) - \int 1 \cdot \sin(x) \, dx $$
$$ = x \sin(x) - (-\cos(x)) + C $$
$$ = x \sin(x) + \cos(x) + C $$
