---
year: 1
macro_area: "Calcolo letterale"
topic: "Scomposizione di polinomi e regola di Ruffini"
difficulty: 2
tags:
  - "polinomi"
  - "scomposizione in fattori"
  - "regola di ruffini"
  - "teorema del resto"
  - "trinomio speciale"
---
# Problem Text
Scomponi in fattori il seguente polinomio utilizzando il teorema e la regola di Ruffini:

$$
P(x) = x^3 - 4x^2 + x + 6
$$

# Solution
**Passo 1: Ricerca degli zeri del polinomio**
I possibili zeri interi del polinomio vanno cercati tra i divisori del termine noto $6$, cioè $\pm 1, \pm 2, \pm 3, \pm 6$.
Proviamo con $x = -1$:

$$
P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0
$$

Poiché il resto è $0$, per il teorema del resto il polinomio è divisibile per $(x + 1)$.

**Passo 2: Applicazione della regola di Ruffini**
Utilizziamo i coefficienti del polinomio $1, -4, 1, 6$ per eseguire la divisione per $(x + 1)$ tramite lo schema di Ruffini con lo zero $x = -1$:

$$
\begin{array}{r|ccc|c}
 & 1 & -4 & 1 & 6 \\
-1 & & -1 & 5 & -6 \\
\hline
 & 1 & -5 & 6 & 0
\end{array}
$$

Il polinomio si scrive quindi come:

$$
P(x) = (x + 1)(x^2 - 5x + 6)
$$

**Passo 3: Scomposizione del trinomio di secondo grado**
Scomponiamo il trinomio $x^2 - 5x + 6$ cercando due numeri la cui somma sia $S = -5$ e il cui prodotto sia $P = 6$.
I due numeri che soddisfano queste condizioni sono $-2$ e $-3$. Pertanto:

$$
x^2 - 5x + 6 = (x - 2)(x - 3)
$$

**Passo 4: Scomposizione finale**
Unendo i risultati ottenuti nei passi precedenti, la scomposizione completa del polinomio è:

$$
P(x) = (x + 1)(x - 2)(x - 3)
$$
