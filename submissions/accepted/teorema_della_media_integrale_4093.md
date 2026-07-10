---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema della media integrale"
difficulty: 2
tags:
  - "Teorema della media integrale"
  - "Teorema fondamentale del calcolo integrale"
  - "Integrale definito"
  - "Quinto anno"
ai_generated: true
---
# Problem Text
Data la funzione $f(x) = \frac{1}{x^2}$ definita nell'intervallo $[1, 2]$, determinare il valore medio $\mu$ della funzione nell'intervallo e il valore del punto $c \in [1, 2]$ garantito dal teorema della media integrale.

# Solution
**Passo 1: Definizione del valore medio integrale**
Il teorema della media integrale stabilisce che, se una funzione $f(x)$ è continua in un intervallo chiuso e limitato $[a, b]$, esiste almeno un punto $c \in [a, b]$ tale che:

$$
f(c) = \mu = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx
$$

Nel nostro caso, abbiamo l'intervallo $[a, b] = [1, 2]$ e la funzione continua $f(x) = \frac{1}{x^2}$.

**Passo 2: Calcolo dell'integrale definito**
Calcoliamo l'integrale definito della funzione nell'intervallo dato applicando il teorema fondamentale del calcolo integrale (formula di Torricelli-Barrow):

$$
\int_{1}^{2} \frac{1}{x^2} \, dx = \left[ -\frac{1}{x} \right]_{1}^{2} = \left( -\frac{1}{2} \right) - \left( -\frac{1}{1} \right) = -\frac{1}{2} + 1 = \frac{1}{2}
$$

**Passo 3: Calcolo del valore medio $\mu$**
Sostituiamo il valore dell'integrale appena calcolato nella formula del teorema della media, con l'ampiezza dell'intervallo $b - a = 2 - 1 = 1$:

$$
\mu = \frac{1}{2-1} \cdot \frac{1}{2} = 1 \cdot \frac{1}{2} = \frac{1}{2}
$$

**Passo 4: Ricerca del punto $c$**
Per trovare il valore $c$, imponiamo l'uguaglianza $f(c) = \mu$:

$$
\frac{1}{c^2} = \frac{1}{2}
$$

Risolvendo rispetto a $c$:

$$
c^2 = 2 \implies c = \pm \sqrt{2}
$$

**Passo 5: Scelta della soluzione ammissibile**
Poiché l'intervallo considerato è $[1, 2]$, accettiamo unicamente il valore positivo di $c$:

$$
c = \sqrt{2} \approx 1.414 \in [1, 2]
$$

Il valore medio della funzione nell'intervallo è $\mu = \frac{1}{2}$ ed il valore garantito dal teorema della media è $c = \sqrt{2}$.
