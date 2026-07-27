---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine"
difficulty: 3
ai_generated: true
tags:
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "studio di funzioni"
  - "funzioni trigonometriche"
  - "massimo assoluto"
---
# Problem Text
Risolvere il seguente problema di Cauchy per un'equazione differenziale lineare del primo ordine nell'intervallo $[0, \pi/2)$:

$$
\begin{cases}
y' + y \tan x = \cos^2 x \\
y(0) = 1
\end{cases}
$$

e determinare il valore massimo assoluto di $y(x)$ nell'intervallo $[0, \pi/2)$ di definizione del problema.

# Solution
L'equazione differenziale è lineare del primo ordine nella forma $y' + p(x)y = q(x)$, con $p(x) = \tan x$ e $q(x) = \cos^2 x$ continue nell'intervallo aperto a destra $I = [0, \pi/2)$.

Un fattore integrante per l'equazione è fornito da:

$$
e^{\int \tan x \, dx} = e^{-\ln(\cos x)} = \frac{1}{\cos x}
$$

ove si omette il valore assoluto poiché $\cos x > 0$ per ogni $x \in I$.

Moltiplicando entrambi i membri dell'equazione differenziale per il fattore integrante, si ottiene:

$$
\frac{y'}{\cos x} + y \frac{\sin x}{\cos^2 x} = \cos x \implies \frac{d}{dx} \left( \frac{y}{\cos x} \right) = \cos x
$$

Integrando ambo i membri rispetto a $x$:

$$
\frac{y}{\cos x} = \sin x + C \implies y(x) = \sin x \cos x + C \cos x
$$

Imponendo la condizione iniziale $y(0) = 1$ si determina la costante di integrazione $C$:

$$
1 = \sin(0)\cos(0) + C\cos(0) \implies C = 1
$$

La soluzione particolare del problema di Cauchy è:

$$
y(x) = (\sin x + 1)\cos x
$$

Per trovare il valore massimo assoluto di $y(x)$ nell'intervallo $[0, \pi/2)$, studiamo il segno della derivata prima:

$$
y'(x) = \cos^2 x - \sin x(1 + \sin x) = 1 - 2\sin^2 x - \sin x
$$

Ponendo $y'(x) \ge 0$, si ottiene la disequazione di secondo grado in $\sin x$:

$$
2\sin^2 x + \sin x - 1 \le 0 \implies (2\sin x - 1)(\sin x + 1) \le 0
$$

Dato che $x \in [0, \pi/2)$, il fattore $(\sin x + 1)$ è strettamente positivo. Pertanto:

$$
2\sin x - 1 \le 0 \implies \sin x \le \frac{1}{2} \implies 0 \le x \le \frac{\pi}{6}
$$

Ne segue che:
- per $0 \le x < \frac{\pi}{6}$, si ha $y'(x) > 0$ (la funzione è strettamente crescente);
- per $\frac{\pi}{6} < x < \frac{\pi}{2}$, si ha $y'(x) < 0$ (la funzione è strettamente decrescente).

In virtù del teorema di monotonia, il punto $x_0 = \frac{\pi}{6}$ è di massimo assoluto per $y(x)$ in $I$. Il valore massimo assoluto assunto dalla soluzione è:

$$
y\left(\frac{\pi}{6}\right) = \left(\sin\frac{\pi}{6} + 1\right)\cos\frac{\pi}{6} = \left(\frac{1}{2} + 1\right)\frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{4}
$$
