---
year: 1
macro_area: "Calcolo letterale"
topic: "Scomposizione di polinomi in fattori"
difficulty: 2
ai_generated: true
tags:
  - "Scomposizione"
  - "Polinomi"
  - "Regola di Ruffini"
  - "Algebra"
---
# Problem Text
Scomponi in fattori il seguente polinomio utilizzando la regola di Ruffini:

$$
P(x) = x^3 - 4x^2 + x + 6
$$

# Solution
1. **Ricerca degli zeri del polinomio**:
   Cerchiamo i possibili zeri del polinomio tra i divisori del termine noto $6$, ovvero $\{\pm 1, \pm 2, \pm 3, \pm 6\}$.
   Verifichiamo i valori calcolando $P(x)$:
   - Per $x = 1$:

$$
P(1) = 1^3 - 4(1)^2 + 1 + 6 = 1 - 4 + 1 + 6 = 4 \neq 0
$$

   - Per $x = -1$:

$$
P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0
$$

   Poiché $P(-1) = 0$, il valore $x = -1$ è uno zero del polinomio. Di conseguenza, per il teorema di Ruffini, $P(x)$ è divisibile per il binomio $(x + 1)$.

2. **Divisione con la regola di Ruffini**:
   Eseguiamo la divisione di $P(x)$ per il binomio $(x + 1)$ applicando lo schema di Ruffini con i coefficienti del polinomio $[1, -4, 1, 6]$:

$$
\begin{array}{r|rrr|r}
 & 1 & -4 & 1 & 6 \\
-1 & & -1 & 5 & -6 \\
\hline
 & 1 & -5 & 6 & 0
\end{array}
$$

   I valori della riga inferiore rappresentano i coefficienti del quoziente $Q(x) = x^2 - 5x + 6$ con resto nullo. Possiamo ora riscrivere il polinomio come:

$$
P(x) = (x + 1)(x^2 - 5x + 6)
$$

3. **Scomposizione del trinomio di secondo grado**:
   Scomponiamo il trinomio $x^2 - 5x + 6$ trovando due numeri interi la cui somma sia $-5$ e il cui prodotto sia $6$. I numeri adatti sono $-2$ e $-3$.
   Di conseguenza:

$$
x^2 - 5x + 6 = (x - 2)(x - 3)
$$

4. **Scomposizione finale**:
   Unendo i fattori ricavati nei passaggi precedenti, otteniamo la scomposizione finale completa di $P(x)$:

$$
P(x) = (x + 1)(x - 2)(x - 3)
$$
