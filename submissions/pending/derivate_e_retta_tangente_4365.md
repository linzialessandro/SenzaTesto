---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate e retta tangente"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "funzione fratta"
  - "funzione composta"
  - "quinto anno"
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione

$$
f(x) = \frac{e^{2x}}{x + 1}
$$

nel punto di ascissa $x_0 = 0$.

# Solution
Per determinare l'equazione della retta tangente al grafico di $f(x)$ nel punto di ascissa $x_0 = 0$, si procede nei seguenti passaggi:

1. **Calcolo dell'ordinata del punto di tangenza $P(x_0, y_0)$:**
Sostituendo $x_0 = 0$ nella funzione originale $f(x)$:

$$
y_0 = f(0) = \frac{e^{2 \cdot 0}}{0 + 1} = \frac{1}{1} = 1
$$

Il punto di tangenza è quindi $P(0, 1)$.

2. **Calcolo della derivata prima $f'(x)$:**
Applicando la regola di derivazione del quoziente $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ e la regola di derivazione delle funzioni composte per $D[e^{2x}] = 2e^{2x}$:

$$
f'(x) = \frac{D[e^{2x}] \cdot (x + 1) - e^{2x} \cdot D[x + 1]}{(x + 1)^2}
$$

$$
f'(x) = \frac{2e^{2x}(x + 1) - e^{2x} \cdot 1}{(x + 1)^2} = \frac{e^{2x}(2x + 2 - 1)}{(x + 1)^2} = \frac{e^{2x}(2x + 1)}{(x + 1)^2}
$$

3. **Calcolo del coefficiente angolare $m$ della tangente:**
Per il significato geometrico della derivata prima, il coefficiente angolare $m$ è pari al valore assunto da $f'(x)$ in $x_0 = 0$:

$$
m = f'(0) = \frac{e^0 \cdot (2 \cdot 0 + 1)}{(0 + 1)^2} = \frac{1 \cdot 1}{1} = 1
$$

4. **Equazione della retta tangente:**
Utilizzando la formula della retta passante per il punto $P(x_0, y_0)$ con coefficiente angolare $m$:

$$
y - y_0 = m(x - x_0)
$$

$$
y - 1 = 1 \cdot (x - 0) \implies y = x + 1
$$

L'equazione della retta tangente è $y = x + 1$.
