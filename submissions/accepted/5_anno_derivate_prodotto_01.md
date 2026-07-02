---
year: 5
macro_area: Analisi Matematica (Derivate)
topic: Calcolo delle derivate
difficulty: 2
tags:
  - regola del prodotto
---
# Problem Text
Calcola la derivata prima della seguente funzione:
$f(x) = x^2 \ln x$

# Solution
**1. Regola di derivazione:**
La funzione è un prodotto tra $u(x) = x^2$ e $v(x) = \ln x$. Dobbiamo applicare la regola di derivazione del prodotto:
$(u \cdot v)' = u' \cdot v + u \cdot v'$

**2. Calcolo delle derivate dei fattori:**
$u'(x) = \frac{d}{dx} (x^2) = 2x$
$v'(x) = \frac{d}{dx} (\ln x) = \frac{1}{x}$

**3. Applicazione della formula:**
$f'(x) = (2x)(\ln x) + (x^2)\left(\frac{1}{x}\right)$
Semplifichiamo il secondo termine:
$f'(x) = 2x \ln x + x$
Volendo, si può raccogliere la $x$ a fattore comune:
$f'(x) = x(2\ln x + 1)$
