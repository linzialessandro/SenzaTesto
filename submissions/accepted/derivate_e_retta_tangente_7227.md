---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate e retta tangente"
difficulty: 2
tags:
  - "derivate"
  - "funzioni composte"
  - "retta tangente"
  - "quinto anno"
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione

$$
f(x) = \ln(x^2 - 3)
$$

nel punto di ascissa $x_0 = 2$.

# Solution
1. **Calcolo dell'ordinata del punto di tangenza**:
Calcoliamo il valore della funzione in $x_0 = 2$:

$$
y_0 = f(2) = \ln(2^2 - 3) = \ln(1) = 0
$$

Il punto di tangenza è $P(2, 0)$.

2. **Calcolo della derivata prima**:
Applichiamo la regola di derivazione delle funzioni composte $D[\ln(g(x))] = \frac{g'(x)}{g(x)}$:

$$
f'(x) = \frac{2x}{x^2 - 3}
$$

3. **Determinazione del coefficiente angolare $m$**:
Il coefficiente angolare della retta tangente è pari alla derivata prima calcolata nel punto $x_0 = 2$:

$$
m = f'(2) = \frac{2 \cdot 2}{2^2 - 3} = \frac{4}{1} = 4
$$

4. **Equazione della retta tangente**:
Applichiamo la formula della retta passante per il punto $P(x_0, y_0)$ con coefficiente angolare $m$:

$$
y - y_0 = m(x - x_0)
$$

Sostituendo i valori ricavati ($x_0 = 2$, $y_0 = 0$ e $m = 4$):

$$
y - 0 = 4(x - 2)
$$

Otteniamo infine la retta cercata:

$$
y = 4x - 8
$$
