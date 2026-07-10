---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine lineari"
difficulty: 3
tags:
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "limiti"
  - "analisi matematica"
ai_generated: true
---
# Problem Text
Determinare la soluzione $y(x)$ del seguente problema di Cauchy per $x > 0$:

$$
\begin{cases}
y' - \frac{2}{x} y = x^3 e^x \\
y(1) = e
\end{cases}
$$

e calcolare il valore del limite:

$$
\lim_{x \to 0^+} \frac{y(x)}{x^2}
$$

# Solution
L'equazione differenziale è lineare del primo ordine della forma $y' + a(x)y = f(x)$, con $a(x) = -\frac{2}{x}$ e $f(x) = x^3 e^x$.

Un fattore integrante per l'equazione è dato da:

$$
e^{\int a(x) \, dx} = e^{-\int \frac{2}{x} \, dx} = e^{-2 \ln(x)} = \frac{1}{x^2}
$$

Moltiplicando entrambi i membri dell'equazione differenziale per il fattore integrante $\frac{1}{x^2}$, si ottiene:

$$
\frac{y'}{x^2} - \frac{2}{x^3} y = x e^x
$$

Riconoscendo la derivata del prodotto al primo membro:

$$
\frac{d}{dx} \left( \frac{y}{x^2} \right) = x e^x
$$

Integrando rispetto a $x$, e applicando l'integrazione per parti per il secondo membro:

$$
\frac{y(x)}{x^2} = \int x e^x \, dx = (x - 1) e^x + C
$$

Da cui ricaviamo l'integrale generale per $x > 0$:

$$
y(x) = x^2 (x - 1) e^x + C x^2
$$

Imponiamo la condizione iniziale $y(1) = e$:

$$
y(1) = 1^2 (1 - 1) e^1 + C \cdot 1^2 = e \implies C = e
$$

La soluzione particolare del problema di Cauchy è:

$$
y(x) = x^2 (x - 1) e^x + e x^2
$$

Infine, calcoliamo il limite richiesto sostituendo la soluzione particolare appena trovata:

$$
\lim_{x \to 0^+} \frac{y(x)}{x^2} = \lim_{x \to 0^+} \frac{x^2 (x - 1) e^x + e x^2}{x^2} = \lim_{x \to 0^+} \left[ (x - 1) e^x + e \right] = -1 + e = e - 1
$$
