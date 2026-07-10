---
year: 1
macro_area: Calcolo letterale
topic: polinomi
difficulty: 4
tags:
  - teorema del resto
  - scomposizione
  - regola di ruffini
ai_generated: true
---
# Problem Text
Un polinomio $P(x) = x^3 + ax^2 + bx + 6$ risulta esattamente divisibile per il binomio $(x-2)$, mentre se viene diviso per $(x+1)$ dà come resto $12$. Determina i valori dei parametri $a$ e $b$ e procedi a scomporre completamente il polinomio in fattori lineari.

# Solution
Applichiamo il Teorema del Resto, secondo il quale il resto della divisione di un polinomio $P(x)$ per $(x-k)$ è pari a $P(k)$.

**1. Condizione di divisibilità per $(x-2)$:**
Essendo divisibile, il resto della divisione per $(x-2)$ deve essere zero. Quindi imponiamo $P(2) = 0$.
$$
P(2) = (2)^3 + a(2)^2 + b(2) + 6 = 0
$$
$$
8 + 4a + 2b + 6 = 0 \implies 4a + 2b = -14 \implies 2a + b = -7
$$

**2. Condizione sul resto della divisione per $(x+1)$:**
Il resto fornito è $12$, quindi sempre per il teorema del resto si ha $P(-1) = 12$.
$$
P(-1) = (-1)^3 + a(-1)^2 + b(-1) + 6 = 12
$$
$$
-1 + a - b + 6 = 12 \implies a - b = 7
$$

**3. Determinazione dei parametri $a$ e $b$:**
Risolviamo il sistema formato dalle due equazioni lineari ottenute:
$$
\begin{cases} 2a + b = -7 \\ a - b = 7 \end{cases}
$$
Sommando membro a membro:
$$
(2a + a) + (b - b) = -7 + 7 \implies 3a = 0 \implies a = 0
$$
Sostituendo il valore $a = 0$ nella seconda equazione:
$$
0 - b = 7 \implies b = -7
$$
Il polinomio cercato è quindi:
$$
P(x) = x^3 - 7x + 6
$$

**4. Scomposizione del polinomio:**
Sappiamo sin dall'inizio che $P(x)$ è divisibile per $(x-2)$, dato che $P(2) = 0$. Utilizziamo la regola di Ruffini per dividere $x^3 - 7x + 6$ per $(x-2)$.
I coefficienti del polinomio ordinato e completo sono $1$ (per $x^3$), $0$ (per $x^2$), $-7$ (per $x$), $6$ (termine noto).
$$
\begin{array}{c|ccc|c}
 & 1 & 0 & -7 & 6 \\
 2 & & 2 & 4 & -6 \\
\hline
 & 1 & 2 & -3 & 0
\end{array}
$$
Il polinomio quoziente è $x^2 + 2x - 3$. Dunque possiamo scrivere:
$$
P(x) = (x-2)(x^2 + 2x - 3)
$$
Scomponiamo ora il trinomio $x^2 + 2x - 3$. Dobbiamo cercare due numeri la cui somma algebrica sia $2$ e il cui prodotto sia $-3$. I due numeri cercati sono chiaramente $3$ e $-1$.
Pertanto il trinomio si scompone come $x^2 + 2x - 3 = (x+3)(x-1)$.

La scomposizione finale e completa in fattori di primo grado del polinomio è:
$$
P(x) = (x-2)(x-1)(x+3)
$$
