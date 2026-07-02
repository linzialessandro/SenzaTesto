---
year: 1
macro_area: Calcolo letterale
topic: Divisioni tra polinomi e Ruffini
difficulty: 2
tags:
  - divisione
  - polinomi
  - teorema del resto
---
# Problem Text
Esegui la seguente divisione tra polinomi utilizzando il metodo di Ruffini e verifica il risultato ottenuto (il resto) applicando il Teorema del Resto:
$(2x^3 - 5x^2 + 4x - 1) : (x - 2)$

# Solution
**1. Applichiamo la regola di Ruffini:**
Disponiamo i coefficienti del dividendo $2x^3 - 5x^2 + 4x - 1$ sulla griglia di Ruffini, e inseriamo il termine noto del divisore cambiato di segno, ovvero $+2$, in basso a sinistra.

$$
\begin{array}{c|rrr|r}
  & 2 & -5 &  4 & -1 \\
2 &   &  4 & -2 &  4 \\
\hline
  & 2 & -1 &  2 &  3
\end{array}
$$

Il quoziente della divisione è un polinomio di grado abbassato di uno rispetto al dividendo:
$Q(x) = 2x^2 - x + 2$
Il resto è $R = 3$.

**2. Verifica con il Teorema del Resto:**
Il teorema del resto afferma che il resto della divisione di $P(x)$ per $(x-a)$ è pari a $P(a)$. 
Calcoliamo quindi $P(2)$:
$P(2) = 2(2)^3 - 5(2)^2 + 4(2) - 1$
$P(2) = 2(8) - 5(4) + 8 - 1$
$P(2) = 16 - 20 + 8 - 1 = 3$

Il resto calcolato con il teorema corrisponde a quello ottenuto con la regola di Ruffini.
