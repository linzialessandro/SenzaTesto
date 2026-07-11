---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine lineari"
difficulty: 4
ai_generated: true
tags:
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "equazioni lineari primo ordine"
  - "quinto anno"
---
# Problem Text
Determinare la soluzione $y(x)$ del seguente problema di Cauchy, specificandone l'intervallo massimale di definizione:

$$
\begin{cases}
y' - y\tan(x) = 2\sin(x) \\
y(0) = 1
\end{cases}
$$

# Solution
L'equazione differenziale è lineare del primo ordine della forma $y' + a(x)y = f(x)$, con $a(x) = -\tan(x)$ e $f(x) = 2\sin(x)$. Poiché la condizione iniziale è posta in $x_0 = 0$, consideriamo l'intervallo contenente lo zero in cui i coefficienti sono continui, ossia $x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, dove $\cos(x) > 0$.

Calcoliamo una primitiva di $a(x)$ per trovare il fattore integrante:

$$
A(x) = \int -\tan(x) \, dx = \ln(\cos(x))
$$

Moltiplicando l'equazione differenziale per il fattore integrante $e^{A(x)} = \cos(x)$, si ha:

$$
y'\cos(x) - y\sin(x) = 2\sin(x)\cos(x)
$$

Riconoscendo la regola di derivazione del prodotto a sinistra e usando la formula di duplicazione del seno a destra, riscriviamo come:

$$
\frac{d}{dx}[y(x)\cos(x)] = \sin(2x)
$$

Integrando entrambi i membri rispetto a $x$:

$$
y(x)\cos(x) = \int \sin(2x) \, dx = -\frac{1}{2}\cos(2x) + C
$$

Imponiamo la condizione iniziale $y(0) = 1$:

$$
1 \cdot \cos(0) = -\frac{1}{2}\cos(0) + C \implies 1 = -\frac{1}{2} + C \implies C = \frac{3}{2}
$$

Sostituendo il valore di $C$:

$$
y(x)\cos(x) = -\frac{1}{2}\cos(2x) + \frac{3}{2}
$$

Sviluppiamo $\cos(2x) = 2\cos^2(x) - 1$:

$$
y(x)\cos(x) = -\frac{1}{2}(2\cos^2(x) - 1) + \frac{3}{2} = 2 - \cos^2(x)
$$

Dividendo per $\cos(x)$ (lecito poiché $\cos(x) \neq 0$ nell'intervallo considerato):

$$
y(x) = \frac{2}{\cos(x)} - \cos(x)
$$

L'intervallo massimale di definizione contenente $x_0 = 0$ è:

$$
I = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
$$
