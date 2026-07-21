---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Continuit\u00e0 per funzioni definite a tratti"
difficulty: 2
ai_generated: true
tags:
  - "limiti"
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "parametri"
---
# Problem Text
Determinare il valore del parametro reale $k$ affinché la funzione $f: \mathbb{R} \to \mathbb{R}$, definita da:

$$
f(x) = \begin{cases} \dfrac{x^2 - 9}{x - 3} & \text{se } x < 3 \\[2ex] k x - 2 & \text{se } x \ge 3 \end{cases}
$$

sia continua nel punto $x_0 = 3$.

# Solution
Per la definizione di continuità dell'analisi matematica, una funzione $f(x)$ è continua in un punto $x_0 = 3$ se e solo se il limite sinistro, il limite destro e il valore della funzione nel punto coincidono:

$$
\lim_{x \to 3^-} f(x) = \lim_{x \to 3^+} f(x) = f(3)
$$

**Passaggio 1: Calcolo del limite sinistro**
Per $x < 3$, la funzione è definita da $f(x) = \dfrac{x^2 - 9}{x - 3}$. Calcoliamo il limite per $x \to 3^-$, che si presenta nella forma indeterminata $\left[\frac{0}{0}\right]$:

$$
\lim_{x \to 3^-} \dfrac{x^2 - 9}{x - 3} = \lim_{x \to 3^-} \dfrac{(x - 3)(x + 3)}{x - 3}
$$

Semplificando per $(x - 3) \neq 0$, otteniamo:

$$
\lim_{x \to 3^-} (x + 3) = 6
$$

**Passaggio 2: Calcolo del limite destro e del valore $f(3)$**
Per $x \ge 3$, la funzione è definita dall'espressione polinomiale $f(x) = k x - 2$. Trattandosi di una funzione continua in tale intervallo, si ha:

$$
\lim_{x \to 3^+} f(x) = f(3) = 3k - 2
$$

**Passaggio 3: Uguaglianza dei limiti e riscontro del parametro**
Uguagliando il limite sinistro al limite destro (e valore della funzione), impostiamo l'equazione in $k$:

$$
3k - 2 = 6
$$

Risolvendo l'equazione lineare:

$$
3k = 8 \implies k = \dfrac{8}{3}
$$

**Conclusione**
La funzione $f(x)$ è continua in $x_0 = 3$ se e solo se $k = \dfrac{8}{3}$.
