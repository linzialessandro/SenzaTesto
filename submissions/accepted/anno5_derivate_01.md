---
year: 5
macro_area: Derivate
topic: Retta Tangente
difficulty: 3
tags:
  - derivate
  - retta tangente
  - funzioni razionali
ai_generated: true
---
# Problem Text

Data la funzione $f(x) = \frac{2x - 1}{x + 3}$, determinare l'equazione della retta tangente al grafico della funzione nel suo punto di ascissa $x_0 = 1$.

# Solution

**1. Calcolo dell'ordinata del punto di tangenza:**
Sostituiamo $x_0 = 1$ nell'espressione della funzione per trovare la coordinata $y_0 = f(x_0)$ del punto di tangenza $P(x_0, y_0)$:
$$
f(1) = \frac{2(1) - 1}{1 + 3} = \frac{1}{4}
$$
Il punto di tangenza è $P\left(1, \frac{1}{4} \right)$.

**2. Calcolo della derivata prima (coefficiente angolare):**
Per trovare il coefficiente angolare $m$ della retta tangente, dobbiamo calcolare la derivata prima della funzione $f'(x)$ e valutarla in $x_0 = 1$. 
Poiché $f(x)$ è un quoziente di due funzioni, applichiamo la regola di derivazione del rapporto: 
$$
\left(\frac{g(x)}{h(x)} \right)' = \frac{g'(x)h(x) - g(x)h'(x)}{[h(x)]^2}
$$
Con $g(x) = 2x - 1$ e $h(x) = x + 3$. Abbiamo $g'(x) = 2$ e $h'(x) = 1$.
$$
f'(x) = \frac{2 \cdot (x + 3) - (2x - 1) \cdot 1}{(x + 3)^2} = \frac{2x + 6 - 2x + 1}{(x + 3)^2} = \frac{7}{(x + 3)^2}
$$

**3. Calcolo di $m$ in $x_0 = 1$:**
Sostituiamo $x = 1$ nella derivata:
$$
m = f'(1) = \frac{7}{(1 + 3)^2} = \frac{7}{4^2} = \frac{7}{16}
$$

**4. Equazione della retta tangente:**
L'equazione di una retta passante per un punto $P(x_0, y_0)$ con coefficiente angolare $m$ è data dalla formula:
$$
y - y_0 = m(x - x_0)
$$
Sostituendo i valori trovati:
$$
y - \frac{1}{4} = \frac{7}{16}(x - 1)
$$
Esplicitando rispetto a $y$:
$$
y = \frac{7}{16}x - \frac{7}{16} + \frac{1}{4} = \frac{7}{16}x - \frac{7}{16} + \frac{4}{16} = \frac{7}{16}x - \frac{3}{16}
$$

**Soluzione:**
L'equazione della retta tangente è $y = \frac{7}{16}x - \frac{3}{16}$, oppure in forma implicita $7x - 16y - 3 = 0$.
