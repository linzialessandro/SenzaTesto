---
year: 5
macro_area: "Calcolo Differenziale"
topic: "Derivate e retta tangente"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "regole di derivazione"
  - "funzione composta"
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione $f(x) = e^{2x}\cos(x)$ nel punto di ascissa $x_0 = 0$.

# Solution
Per determinare l'equazione della retta tangente della forma $y - f(x_0) = m(x - x_0)$ nel punto $x_0 = 0$, procediamo nei seguenti passaggi:

1. Calcoliamo l'ordinata del punto di tangenza $f(x_0)$:

$$
f(0) = e^{2 \cdot 0}\cos(0) = 1 \cdot 1 = 1
$$

Il punto di tangenza è quindi $P(0, 1)$.

2. Calcoliamo la derivata prima $f'(x)$ utilizzando la regola del prodotto e la regola di derivazione della funzione composta per $e^{2x}$:

$$
f'(x) = \frac{\mathrm{d}}{\mathrm{d}x}\left(e^{2x}\right)\cos(x) + e^{2x}\frac{\mathrm{d}}{\mathrm{d}x}\left(\cos(x)\right)
$$

$$
f'(x) = 2e^{2x}\cos(x) - e^{2x}\sin(x) = e^{2x}\left(2\cos(x) - \sin(x)\right)
$$

3. Determiniamo il coefficiente angolare $m$ della retta tangente, sapendo che per il significato geometrico della derivata prima vale $m = f'(x_0)$:

$$
m = f'(0) = e^{0}\left(2\cos(0) - \sin(0)\right) = 1 \cdot (2 - 0) = 2
$$

4. Sostituiamo le coordinate del punto $P(0, 1)$ e il coefficiente angolare $m = 2$ nell'equazione del fascio proprio di rette:

$$
y - 1 = 2(x - 0)
$$

$$
y = 2x + 1
$$

L'equazione della retta tangente al grafico della funzione nel punto di ascissa $x_0 = 0$ è $y = 2x + 1$.
