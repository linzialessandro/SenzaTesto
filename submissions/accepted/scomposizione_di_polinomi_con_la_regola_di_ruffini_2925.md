---
year: 1
macro_area: "Calcolo letterale"
topic: "Scomposizione di polinomi con la regola di Ruffini"
difficulty: 2
ai_generated: true
tags:
  - "polinomi"
  - "scomposizione"
  - "Ruffini"
  - "teorema del resto"
  - "calcolo letterale"
---
# Problem Text
Scomponi in fattori il seguente polinomio applicando il teorema del resto e la regola di Ruffini:

$$
P(x) = x^3 - 4x^2 + x + 6
$$

# Solution
1. **Ricerca di una radice (zero del polinomio):**
I possibili zeri interi del polinomio $P(x)$ vanno cercati tra i divisori del termine noto $+6$, ossia $\pm 1, \pm 2, \pm 3, \pm 6$.
Calcoliamo il valore del polinomio per $x = -1$:

$$
P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0
$$

Poiché $P(-1) = 0$, per il teorema del resto il polinomio $P(x)$ è divisibile per $(x + 1)$.

2. **Applicazione della regola di Ruffini:**
Eseguiamo la divisione di $P(x)$ per $(x + 1)$ con lo schema di Ruffini sui coefficienti $[1, -4, 1, 6]$:

$$
\begin{array}{c|rrr|r}
& 1 & -4 & 1 & 6 \\
-1 & & -1 & 5 & -6 \\
\hline
& 1 & -5 & 6 & 0
\end{array}
$$

Otteniamo il quoziente $Q(x) = x^2 - 5x + 6$ e resto $R = 0$.

3. **Primo passaggio di scomposizione:**
Riscriviamo il polinomio come prodotto del divisore e del quoziente:

$$
P(x) = (x + 1)(x^2 - 5x + 6)
$$

4. **Scomposizione del trinomio di secondo grado:**
Scomponiamo il trinomio $x^2 - 5x + 6$ cercando due numeri aventi per somma $-5$ e per prodotto $+6$.
I due numeri cercati sono $-2$ e $-3$, quindi:

$$
x^2 - 5x + 6 = (x - 2)(x - 3)
$$

5. **Scomposizione finale:**
Sostituendo il trinomio con i suoi fattori, otteniamo la scomposizione in fattori irriducibili:

$$
P(x) = (x + 1)(x - 2)(x - 3)
$$
