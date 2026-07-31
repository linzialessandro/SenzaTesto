---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Calcolo letterale"
difficulty: 4
ai_generated: true
tags:
  - "polinomi"
  - "scomposizione in fattori"
  - "regola di Ruffini"
  - "teorema del resto"
  - "prodotti notevoli"
---
# Problem Text
Scomponi in fattori irriducibili il seguente polinomio:

$$
P(x) = 2x^4 - 3x^3 - 7x^2 + 12x - 4
$$

# Solution
Per scomporre il polinomio $P(x) = 2x^4 - 3x^3 - 7x^2 + 12x - 4$, utilizziamo combinatamente il Teorema del resto, la Regola di Ruffini, il raccoglimento parziale e la differenza di quadrati.

**Passo 1: Ricerca dei possibili zeri razionali**
I possibili zeri razionali di $P(x)$ si cercano tra le frazioni $\pm \frac{p}{q}$, dove $p$ è un divisore del termine noto ($-4$) e $q$ è un divisore del coefficiente principale ($2$):

$$
x \in \left\{ \pm 1, \pm 2, \pm 4, \pm \frac{1}{2} \right\}
$$

Verifichiamo se $x = 1$ è uno zero applicando il Teorema del resto:

$$
P(1) = 2(1)^4 - 3(1)^3 - 7(1)^2 + 12(1) - 4 = 2 - 3 - 7 + 12 - 4 = 0
$$

Poiché $P(1) = 0$, per il Teorema di Ruffini il polinomio $P(x)$ è divisibile per $(x - 1)$.

**Passo 2: Divisione con la Regola di Ruffini**
Eseguiamo la divisione di $P(x)$ per $(x - 1)$:

$$
\begin{array}{c|cccc|c}
 & 2 & -3 & -7 & 12 & -4 \\
1 & & 2 & -1 & -8 & 4 \\
\hline
 & 2 & -1 & -8 & 4 & 0
\end{array}
$$

I coefficienti del quoziente sono $2, -1, -8, 4$, quindi il quoziente è:

$$
Q(x) = 2x^3 - x^2 - 8x + 4
$$

Possiamo dunque riscrivere $P(x)$ come:

$$
P(x) = (x - 1)(2x^3 - x^2 - 8x + 4)
$$

**Passo 3: Scomposizione del quoziente mediante raccoglimento parziale**
Scomponiamo il polinomio di terzo grado $Q(x) = 2x^3 - x^2 - 8x + 4$ raggruppando a coppie:
- tra i primi due termini raccogliamo $x^2$;
- tra gli ultimi due termini raccogliamo $-4$.

$$
Q(x) = x^2(2x - 1) - 4(2x - 1)
$$

Raccogliendo il fattore comune $(2x - 1)$, otteniamo:

$$
Q(x) = (2x - 1)(x^2 - 4)
$$

**Passo 4: Scomposizione con il prodotto notevole (differenza di quadrati)**
Il binomio $(x^2 - 4)$ è una differenza di due quadrati:

$$
x^2 - 4 = (x - 2)(x + 2)
$$

Quindi il quoziente $Q(x)$ diventa:

$$
Q(x) = (2x - 1)(x - 2)(x + 2)
$$

**Passo 5: Conclusione**
Sostituendo la scomposizione di $Q(x)$ nel polinomio iniziale $P(x)$, otteniamo la scomposizione completa in fattori di primo grado:

$$
P(x) = (x - 1)(2x - 1)(x - 2)(x + 2)
$$
