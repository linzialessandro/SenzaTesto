---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine"
difficulty: 3
ai_generated: true
tags:
  - "equazioni differenziali"
  - "primo ordine"
  - "equazioni lineari"
  - "problema di Cauchy"
  - "studio di funzione"
---
# Problem Text
Risolvi il seguente problema di Cauchy per l'equazione differenziale lineare del primo ordine:

$$
\begin{cases}
y' + \dfrac{1}{x} y = \dfrac{\ln x}{x} \\[2ex]
y(1) = 0
\end{cases}
$$

definita per $x \in (0, +\infty)$, e determina le coordinate dell'unico punto di estremo relativo della funzione soluzione $y(x)$, specificandone la natura.

# Solution
L'equazione differenziale data è una lineare del primo ordine della forma $y' + a(x)y = b(x)$, con $a(x) = \dfrac{1}{x}$ e $b(x) = \dfrac{\ln x}{x}$, entrambe funzioni continue nell'intervallo $I = (0, +\infty)$.

**1. Determinazione dell'integrale generale**
Calcoliamo una primitiva di $a(x)$:

$$
A(x) = \int \frac{1}{x} \, dx = \ln x \quad (\text{poiché } x > 0)
$$

Il fattore integrante è $e^{A(x)} = e^{\ln x} = x$. Moltiplicando l'equazione differenziale per $x$, otteniamo:

$$
x y' + y = \ln x
$$

Riconoscendo la regola di derivazione del prodotto al primo membro, l'equazione si riscrive come:

$$
\frac{d}{dx}(x y) = \ln x
$$

Integrando entrambi i membri rispetto a $x$ (utilizzando l'integrazione per parti per la funzione logaritmo):

$$
x y = \int \ln x \, dx = x \ln x - x + C, \quad C \in \mathbb{R}
$$

Dividendo per $x > 0$, si ottiene l'integrale generale:

$$
y(x) = \ln x - 1 + \frac{C}{x}
$$

**2. Applicazione della condizione iniziale**
Imponiamo la condizione del problema di Cauchy $y(1) = 0$:

$$
y(1) = \ln 1 - 1 + \frac{C}{1} = 0 \implies -1 + C = 0 \implies C = 1
$$

La soluzione del problema di Cauchy è dunque:

$$
y(x) = \ln x - 1 + \frac{1}{x}, \quad x \in (0, +\infty)
$$

**3. Ricerca dell'estremo relativo**
Calcoliamo la derivata prima $y'(x)$:

$$
y'(x) = \frac{1}{x} - \frac{1}{x^2} = \frac{x - 1}{x^2}
$$

Studiamo il segno di $y'(x)$ per $x > 0$:
- $y'(x) = 0 \iff x = 1$
- $y'(x) > 0 \iff x > 1$
- $y'(x) < 0 \iff 0 < x < 1$

Per il criterio del segno della derivata prima, la funzione è strettamente decrescente in $(0, 1)$ e strettamente crescente in $(1, +\infty)$. Di conseguenza, $x = 1$ è un punto di minimo relativo (e assoluto).

Calcoliamo l'ordinata corrispondente:

$$
y(1) = \ln 1 - 1 + \frac{1}{1} = 0
$$

Il punto di estremo relativo è il punto di minimo $M(1, 0)$.
