---
year: 5
macro_area: "Calcolo Differenziale"
topic: "Derivate e retta tangente"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "regola del prodotto"
  - "funzione composta"
---
# Problem Text
Determina l'equazione della retta tangente al grafico della funzione:

$$
f(x) = (x^2 - 1)e^{2x}
$$

nel suo punto di ascissa $x_0 = 0$.

# Solution
Per determinare l'equazione della retta tangente al grafico di $f(x)$ nel punto $P(x_0, f(x_0))$, si utilizza la formula:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

**Passo 1: Determinazione del punto di tangenza**
Calcoliamo l'ordinata del punto sostituendo $x_0 = 0$ nella funzione:

$$
f(0) = (0^2 - 1)e^{2 \cdot 0} = -1 \cdot 1 = -1
$$

Il punto di tangenza è $P(0, -1)$.

**Passo 2: Calcolo della derivata prima**
Applicando le regole di derivazione del prodotto e della funzione composta:

$$
f'(x) = D[x^2 - 1] \cdot e^{2x} + (x^2 - 1) \cdot D[e^{2x}]
$$

$$
f'(x) = 2x e^{2x} + (x^2 - 1) \cdot 2e^{2x} = 2e^{2x}(x^2 + x - 1)
$$

**Passo 3: Calcolo del coefficiente angolare**
Valutiamo la derivata prima in $x_0 = 0$ per trovare il coefficiente angolare $m = f'(0)$:

$$
m = f'(0) = 2e^{0}(0^2 + 0 - 1) = -2
$$

**Passo 4: Equazione della retta tangente**
Sostituendo $x_0 = 0$, $f(0) = -1$ e $m = -2$ nella formula della retta:

$$
y - (-1) = -2(x - 0) \implies y + 1 = -2x \implies y = -2x - 1
$$

L'equazione della retta tangente cercata è $y = -2x - 1$.
