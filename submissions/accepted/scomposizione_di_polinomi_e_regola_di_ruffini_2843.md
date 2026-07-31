---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Scomposizione di polinomi e regola di Ruffini"
difficulty: 4
ai_generated: true
tags:
  - "polinomi"
  - "teorema del resto"
  - "regola di Ruffini"
  - "scomposizione in fattori"
  - "prodotti notevoli"
---
# Problem Text
Determina il valore del parametro reale $a$ affinché il polinomio

$$
P(x) = x^4 - 2x^3 - a x^2 + 8x - 8
$$

sia divisibile per $x - 2$ e, in corrispondenza del valore trovato, scomponi completamente $P(x)$ in fattori irriducibili in $\mathbb{R}$.

# Solution
Per la condizione di divisibilità, utilizziamo il **teorema del resto**: il polinomio $P(x)$ è divisibile per $x - 2$ se e solo se $P(2) = 0$.

Calcoliamo $P(2)$:

$$
P(2) = 2^4 - 2 \cdot 2^3 - a \cdot 2^2 + 8 \cdot 2 - 8 = 16 - 16 - 4a + 16 - 8 = -4a + 8
$$

Imponendo la condizione di divisibilità $P(2) = 0$:

$$
-4a + 8 = 0 \implies a = 2
$$

Sostituendo $a = 2$, il polinomio diventa:

$$
P(x) = x^4 - 2x^3 - 2x^2 + 8x - 8
$$

Eseguiamo la prima divisione con la **regola di Ruffini** dividendo $P(x)$ per $x - 2$:

$$
\begin{array}{c|cccc|c}
 & 1 & -2 & -2 & 8 & -8 \\
2 & & 2 & 0 & -4 & 8 \\
\hline
 & 1 & 0 & -2 & 4 & 0
\end{array}
$$

Il quoziente ottenuto è $Q_1(x) = x^3 - 2x + 4$, quindi possiamo scrivere:

$$
P(x) = (x - 2)(x^3 - 2x + 4)
$$

Scomponiamo ora il fattore di terzo grado $Q_1(x) = x^3 - 2x + 4$. Cerchiamo i suoi possibili zeri razionali tra i divisori del termine noto $4$ ($\pm 1, \pm 2, \pm 4$):
- $Q_1(1) = 1 - 2 + 4 = 3 \neq 0$
- $Q_1(-1) = -1 + 2 + 4 = 5 \neq 0$
- $Q_1(2) = 8 - 4 + 4 = 8 \neq 0$
- $Q_1(-2) = (-2)^3 - 2(-2) + 4 = -8 + 4 + 4 = 0$

Poiché $Q_1(-2) = 0$, il polinomio $Q_1(x)$ è divisibile per $x + 2$. Dividiamo $Q_1(x)$ per $x + 2$ tramite Ruffini:

$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -2 & 4 \\
-2 & & -2 & 4 & -4 \\
\hline
 & 1 & -2 & 2 & 0
\end{array}
$$

Il quoziente ottenuto è $Q_2(x) = x^2 - 2x + 2$, per cui:

$$
Q_1(x) = (x + 2)(x^2 - 2x + 2)
$$

Analizziamo il trinomio $x^2 - 2x + 2$ completando il quadrato:

$$
x^2 - 2x + 2 = (x - 1)^2 + 1
$$

Poiché $(x - 1)^2 \ge 0$ per qualsiasi valore reale di $x$, la somma $(x - 1)^2 + 1 \ge 1 > 0$ è sempre strettamente positiva. Di conseguenza, il trinomio non possiede zeri reali ed è irriducibile in $\mathbb{R}$.

La scomposizione completa di $P(x)$ in fattori irriducibili è:

$$
P(x) = (x - 2)(x + 2)(x^2 - 2x + 2)
$$
