---
year: 1
macro_area: "Algebra"
topic: "Scomposizione di polinomi con la regola di Ruffini"
difficulty: 2
tags:
  - "polinomi"
  - "regola di Ruffini"
  - "scomposizione in fattori"
  - "algebra"
ai_generated: true
---
# Problem Text
Scomponi in fattori il seguente polinomio di terzo grado utilizzando la regola di Ruffini:

$$
P(x) = x^3 - 3x^2 - x + 3
$$

# Solution
**Fase 1: Ricerca degli zeri del polinomio**
I possibili zeri interi del polinomio si trovano tra i divisori del termine noto $3$, ovvero: $\pm 1, \pm 3$.
Valutiamo il polinomio per $x = 1$:

$$
P(1) = 1^3 - 3(1)^2 - 1 + 3 = 1 - 3 - 1 + 3 = 0
$$

Poiché $P(1) = 0$, per il teorema di Ruffini il polinomio è divisibile per il binomio $(x - 1)$.

---

**Fase 2: Divisione con la regola di Ruffini**
Eseguiamo la divisione di $P(x)$ per $(x - 1)$ utilizzando lo schema di Ruffini con i coefficienti $[1, -3, -1, 3]$ e la radice $1$:

```text
    |  1   -3   -1 |  3
  1 |       1   -2 | -3
----+--------------+---
    |  1   -2   -3 |  0
```

I coefficienti del quoziente sono $1, -2, -3$. Pertanto, il quoziente della divisione è $Q(x) = x^2 - 2x - 3$, e possiamo scrivere:

$$
P(x) = (x - 1)(x^2 - 2x - 3)
$$

---

**Fase 3: Scomposizione del quoziente di secondo grado**
Scomponiamo il trinomio $x^2 - 2x - 3$ cercando due numeri la cui somma sia $s = -2$ e il cui prodotto sia $p = -3$. I due numeri sono $-3$ e $1$.
Otteniamo quindi:

$$
x^2 - 2x - 3 = (x - 3)(x + 1)
$$

---

**Fase 4: Scrittura del risultato finale**
Sostituendo la scomposizione del trinomio nel polinomio iniziale, otteniamo la scomposizione completa in fattori di primo grado:

$$
P(x) = (x - 1)(x + 1)(x - 3)
$$
