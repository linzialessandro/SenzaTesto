---
year: 1
macro_area: Calcolo letterale
topic: mcd e mcm polinomi
difficulty: 2
tags:
  - scomposizione
  - mcd
  - mcm
---
# Problem Text
Determina il Massimo Comune Divisore (MCD) e il minimo comune multiplo (mcm) dei seguenti polinomi:
$P(x) = x^3 - 4x$
$Q(x) = x^2 - 4x + 4$
$R(x) = x^2 - 2x$

# Solution
**1. Scomponiamo in fattori ciascun polinomio:**
$P(x) = x(x^2 - 4) = x(x - 2)(x + 2)$
$Q(x) = (x - 2)^2$
$R(x) = x(x - 2)$

**2. Calcoliamo il MCD:**
Il MCD è il prodotto dei fattori comuni, presi una sola volta con l'esponente minore.
L'unico fattore comune a tutti e tre i polinomi è $(x - 2)$.
Quindi, $\text{MCD} = x - 2$.

**3. Calcoliamo il mcm:**
Il mcm è il prodotto dei fattori comuni e non comuni, presi una sola volta con l'esponente maggiore.
I fattori presenti sono $x$, $(x - 2)$ e $(x + 2)$.
L'esponente maggiore per $(x - 2)$ è $2$.
Quindi, $\text{mcm} = x(x - 2)^2(x + 2)$.
