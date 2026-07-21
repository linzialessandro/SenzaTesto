---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine"
difficulty: 3
ai_generated: true
tags:
  - "equazioni differenziali"
  - "lineari primo ordine"
  - "problema di Cauchy"
  - "intervallo di esistenza"
---
# Problem Text
Si determini la soluzione del seguente problema di Cauchy e si specifichi il suo intervallo massimo di esistenza $I \subset \mathbb{R}$:

$$
\begin{cases}
y' + y \tan x = \cos^2 x \\
y(0) = 2
\end{cases}
$$

# Solution
L'equazione differenziale data è lineare del primo ordine della forma $y' + a(x)y = b(x)$, con $a(x) = \tan x$ e $b(x) = \cos^2 x$.

I coefficienti $a(x)$ e $b(x)$ sono funzioni continue nell'intervallo aperto contenente il dato iniziale $x_0 = 0$:

$$
I = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
$$

Per il teorema di esistenza e unicità globale per le equazioni differenziali lineari del primo ordine, la soluzione del problema di Cauchy esiste ed è unica nell'intervallo $I$.

Determiniamo una primitiva di $a(x)$ in $I$, dove $\cos x > 0$:

$$
A(x) = \int \tan x \, dx = -\ln(\cos x)
$$

Il fattore integrante è dunque:

$$
e^{A(x)} = e^{-\ln(\cos x)} = \frac{1}{\cos x}
$$

Applicando la formula risolutiva per le equazioni lineari del primo ordine $y(x) = e^{-A(x)} \left[ \int b(x) e^{A(x)} \, dx + C \right]$, si ottiene:

$$
\int b(x) e^{A(x)} \, dx = \int \cos^2 x \cdot \frac{1}{\cos x} \, dx = \int \cos x \, dx = \sin x
$$

L'integrale generale dell'equazione differenziale è pertanto:

$$
y(x) = \cos x (\sin x + C)
$$

Imponiamo la condizione iniziale $y(0) = 2$ per ricavare la costante $C$:

$$
y(0) = \cos(0) \cdot (\sin(0) + C) = 1 \cdot (0 + C) = C \implies C = 2
$$

La soluzione del problema di Cauchy è:

$$
y(x) = \cos x (\sin x + 2)
$$

definita nell'intervallo massimo di esistenza $I = \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.
