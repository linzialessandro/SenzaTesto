---
year: 5
macro_area: "Calcolo Differenziale"
topic: "Derivate e retta tangente"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "regola del rapporto"
  - "funzione composta"
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione

$$
f(x) = \frac{e^{2x}}{x + 1}
$$

nel punto di ascissa $x_0 = 0$.

# Solution
Per determinare l'equazione della retta tangente al grafico della funzione $f(x)$ nel punto di ascissa $x_0 = 0$, si applica la formula:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

**Passaggio 1: Calcolo dell'ordinata del punto di tangenza**
Valutiamo la funzione in $x_0 = 0$:

$$
f(0) = \frac{e^{2 \cdot 0}}{0 + 1} = \frac{1}{1} = 1
$$

Il punto di tangenza è $P(0, 1)$.

**Passaggio 2: Calcolo della derivata prima $f'(x)$**
La funzione è il rapporto di due funzioni derivabili. Applicando la regola di derivazione del quoziente e la regola di derivazione delle funzioni composte per $D[e^{2x}] = 2e^{2x}$, si ha:

$$
f'(x) = \frac{2e^{2x}(x + 1) - e^{2x} \cdot 1}{(x + 1)^2}
$$

Semplificando la frazione raccogliendo $e^{2x}$ al numeratore:

$$
f'(x) = \frac{e^{2x}(2x + 2 - 1)}{(x + 1)^2} = \frac{e^{2x}(2x + 1)}{(x + 1)^2}
$$

**Passaggio 3: Calcolo del coefficiente angolare $m$**
Il coefficiente angolare della retta tangente corrisponde al valore della derivata prima calcolata in $x_0 = 0$:

$$
m = f'(0) = \frac{e^{0}(2 \cdot 0 + 1)}{(0 + 1)^2} = \frac{1 \cdot 1}{1} = 1
$$

**Passaggio 4: Scrittura dell'equazione della retta tangente**
Sostituendo $x_0 = 0$, $f(0) = 1$ e $m = 1$ nell'equazione della retta passante per $P$:

$$
y - 1 = 1 \cdot (x - 0) \implies y = x + 1
$$

L'equazione della retta tangente cercata è $y = x + 1$.
