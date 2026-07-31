---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado"
difficulty: 3
ai_generated: true
tags:
  - "equazioni di secondo grado"
  - "equazioni parametriche"
  - "relazione radici-coefficienti"
  - "discriminante"
---
# Problem Text
Determina per quale valore del parametro reale $k$ l'equazione di secondo grado

$$
(k - 1)x^2 - 2kx + k + 2 = 0
$$

ammette due soluzioni reali distinte tali che la somma dei loro reciproci sia uguale a $3$.

# Solution
**1. Condizione di secondo grado**
Affinché l'equazione sia effettivamente di secondo grado, il coefficiente del termine $x^2$ non deve annullarsi:

$$
k - 1 \neq 0 \implies k \neq 1
$$

**2. Condizione per soluzioni reali e distinte**
Calcoliamo il discriminante ridotto $\frac{\Delta}{4}$ e imponiamo che sia strettamente positivo:

$$
\frac{\Delta}{4} = (-k)^2 - (k - 1)(k + 2) = k^2 - (k^2 + k - 2) = -k + 2
$$

$$
-k + 2 > 0 \implies k < 2
$$

Le soluzioni sono reali e distinte per $k < 2$ con $k \neq 1$.

**3. Condizione sulla somma dei reciproci**
La somma dei reciproci delle soluzioni $x_1$ e $x_2$ si esprime come:

$$
\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 \cdot x_2}
$$

Sfruttando le relazioni tra le soluzioni e i coefficienti dell'equazione:

$$
x_1 + x_2 = -\frac{b}{a} = \frac{2k}{k - 1}
$$

$$
x_1 \cdot x_2 = \frac{c}{a} = \frac{k + 2}{k - 1}
$$

Affinché i reciproci existano, deve essere $x_1 \cdot x_2 \neq 0$, ovvero $k + 2 \neq 0 \implies k \neq -2$.

Sostituendo le relazioni nell'uguaglianza richiesta:

$$
\frac{\frac{2k}{k - 1}}{\frac{k + 2}{k - 1}} = 3 \implies \frac{2k}{k + 2} = 3
$$

Risolviamo l'equazione rispetto a $k$:

$$
2k = 3(k + 2) \implies 2k = 3k + 6 \implies k = -6
$$

**4. Verifica dell'accettabilità**
Il valore $k = -6$ soddisfa tutte le condizioni di accettabilità previste ($k < 2$, $k \neq 1$, $k \neq -2$).

La soluzione cercata è $k = -6$.
