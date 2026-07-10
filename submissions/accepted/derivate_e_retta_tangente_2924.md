---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate e retta tangente"
difficulty: 2
tags:
  - "derivate"
  - "regola del rapporto"
  - "retta tangente"
  - "analisi matematica"
ai_generated: true
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione $f(x) = \frac{2x - 1}{x + 1}$ nel punto di ascissa $x_0 = 1$.

# Solution
1. **Calcolo dell'ordinata del punto di tangenza $P(x_0, y_0)$:**
Sostituendo $x_0 = 1$ nella funzione $f(x)$, otteniamo:

$$
y_0 = f(1) = \frac{2(1) - 1}{1 + 1} = \frac{1}{2}
$$

Il punto di tangenza è quindi $P\left(1, \frac{1}{2}\right)$.

2. **Calcolo della derivata prima della funzione:**
Applicando la regola di derivazione del rapporto $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$:

$$
f'(x) = \frac{2(x + 1) - (2x - 1)(1)}{(x + 1)^2}
$$

Semplificando il numeratore:

$$
f'(x) = \frac{2x + 2 - 2x + 1}{(x + 1)^2} = \frac{3}{(x + 1)^2}
$$

3. **Calcolo del coefficiente angolare $m$ della tangente:**
Il coefficiente angolare della retta tangente è il valore della derivata prima nel punto di ascissa $x_0 = 1$:

$$
m = f'(1) = \frac{3}{(1 + 1)^2} = \frac{3}{4}
$$

4. **Scrittura dell'equazione della retta tangente:**
Utilizzando la formula del fascio di rette $y - y_0 = m(x - x_0)$ con il punto $P\left(1, \frac{1}{2}\right)$ e pendenza $m = \frac{3}{4}$:

$$
y - \frac{1}{2} = \frac{3}{4}(x - 1)
$$

Esplicitando rispetto a $y$:

$$
y = \frac{3}{4}x - \frac{3}{4} + \frac{1}{2} \implies y = \frac{3}{4}x - \frac{1}{4}
$$
