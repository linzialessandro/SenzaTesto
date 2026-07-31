---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate e regole di derivazione"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "regola del rapporto"
  - "analisi matematica"
---
# Problem Text
Determina l'equazione della retta tangente al grafico della funzione

$$
f(x) = \frac{x^2 - 1}{e^x}
$$

nel punto di ascissa $x_0 = 0$.

# Solution
Per determinare l'equazione della retta tangente al grafico della funzione $f(x)$ nel punto di ascissa $x_0 = 0$, utilizziamo la formula generale:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

**1. Calcolo dell'ordinata del punto di tangenza $f(0)$:**
Sostituiamo $x_0 = 0$ nell'espressione della funzione:

$$
f(0) = \frac{0^2 - 1}{e^0} = \frac{-1}{1} = -1
$$

Il punto di tangenza è dunque $P(0, -1)$.

**2. Calcolo della derivata prima $f'(x)$:**
Applichiamo la regola di derivazione del quoziente $D\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$:

$$
f'(x) = \frac{2x \cdot e^x - (x^2 - 1) \cdot e^x}{(e^x)^2}
$$

Raccogliendo $e^x$ al numeratore e semplificando con il denominatore:

$$
f'(x) = \frac{e^x(2x - x^2 + 1)}{e^{2x}} = \frac{-x^2 + 2x + 1}{e^x}
$$

**3. Calcolo del coefficiente angolare $m = f'(0)$:**
Valutiamo la derivata prima in $x_0 = 0$:

$$
f'(0) = \frac{-0^2 + 2(0) + 1}{e^0} = \frac{1}{1} = 1
$$

**4. Equazione della retta tangente:**
Sostituiamo i valori ottenuti $f(0) = -1$ e $f'(0) = 1$ nell'equazione della retta:

$$
y - (-1) = 1 \cdot (x - 0) \implies y + 1 = x \implies y = x - 1
$$

L'equazione della retta tangente al grafico nel punto di ascissa $x_0 = 0$ è $y = x - 1$.
