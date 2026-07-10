---
year: 1
macro_area: Calcolo letterale
topic: Scomposizione e Ruffini
difficulty: 3
tags:
  - polinomi
  - scomposizione
  - ruffini
ai_generated: true
---
# Problem Text

Scomporre in fattori irriducibili il seguente polinomio, utilizzando il teorema e la regola di Ruffini:
$$
P(x) = x^3 - 4x^2 + x + 6
$$

# Solution

**1. Ricerca delle radici razionali:**
Per il Teorema del resto, cerchiamo le radici tra i divisori del termine noto ($6$). 
I divisori possibili sono: $\pm 1, \pm 2, \pm 3, \pm 6$.

Valutiamo $P(x)$ in questi valori:
- $P(1) = 1^3 - 4(1)^2 + 1 + 6 = 1 - 4 + 1 + 6 = 4 \neq 0$
- $P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$

Poiché $P(-1) = 0$, il polinomio è divisibile per $(x + 1)$.

**2. Applicazione della Regola di Ruffini:**
Costruiamo la tabella per dividere $P(x)$ per $(x + 1)$:

$$
\begin{array}{c|ccc|c}
 & 1 & -4 & 1 & 6 \
-1 & & -1 & 5 & -6 \
\hline
 & 1 & -5 & 6 & 0
\end{array}
$$

Il polinomio quoziente è $Q(x) = x^2 - 5x + 6$. 
Quindi possiamo scrivere:
$$
P(x) = (x + 1)(x^2 - 5x + 6)
$$

**3. Scomposizione del quoziente:**
Il polinomio $x^2 - 5x + 6$ è un trinomio di secondo grado (trinomio notevole o speciale). Cerchiamo due numeri la cui somma sia $-5$ e il cui prodotto sia $6$.
I due numeri sono $-2$ e $-3$.
Pertanto, $x^2 - 5x + 6 = (x - 2)(x - 3)$.

**4. Risultato finale:**
La scomposizione completa in fattori irriducibili di $P(x)$ è:
$$
P(x) = (x + 1)(x - 2)(x - 3)
$$
