---
year: 5
macro_area: "Analisi Matematica"
topic: "Teorema della media integrale"
difficulty: 2
tags:
  - "teorema della media integrale"
  - "integrale definito"
  - "calcolo integrale"
ai_generated: true
---
# Problem Text
Determinare il valore $c \in [0, 3]$ garantito dal teorema della media integrale per la funzione $f(x) = x^2$ nell'intervallo $[0, 3]$.

# Solution
1. **Verifica delle ipotesi**: La funzione $f(x) = x^2$ è una funzione polinomiale, pertanto è continua in tutto il dominio dei numeri reali $\mathbb{R}$ e, in particolare, nell'intervallo chiuso e limitato $[0, 3]$. Le ipotesi del teorema della media integrale sono dunque verificate.

2. **Calcolo dell'integrale definito**: Calcoliamo l'integrale della funzione nell'intervallo dato utilizzando la formula fondamentale del calcolo integrale:

$$
\int_{0}^{3} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{3} = \frac{3^3}{3} - \frac{0^3}{3} = 9
$$

3. **Calcolo del valore medio integrale**: Applichiamo la definizione di valore medio integrale $\mu$ nell'intervallo $[a, b] = [0, 3]$:

$$
\mu = \frac{1}{b-a} \int_{a}^{b} f(x) \, dx = \frac{1}{3-0} \cdot 9 = 3
$$

4. **Applicazione della tesi del teorema**: Il teorema garantisce l'esistenza di un punto $c \in [a, b]$ tale che $f(c) = \mu$. Imponiamo quindi l'uguaglianza:

$$
c^2 = 3
$$

Le soluzioni di questa equazione di secondo grado sono:

$$
c = -\sqrt{3} \quad \text{oppure} \quad c = \sqrt{3}
$$

5. **Verifica dell'appartenenza all'intervallo**: Poiché l'intervallo di integrazione considerato è $[0, 3]$, escludiamo il valore negativo $c = -\sqrt{3}$ in quanto esterno all'intervallo. Il punto cercato è:

$$
c = \sqrt{3} \approx 1.732 \in [0, 3]
$$
