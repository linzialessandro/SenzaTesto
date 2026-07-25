---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e Continuit\u00e0"
difficulty: 3
ai_generated: true
tags:
  - "limiti"
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "punti di discontinuit\u00e0"
  - "limiti notevoli"
---
# Problem Text
Si consideri la funzione $f: \mathbb{R} \setminus \{1\} \to \mathbb{R}$ definita da:

$$
f(x) = \begin{cases} \dfrac{\sin(2x)}{x} & \text{se } x < 0 \\[2ex] k e^x + 1 & \text{se } 0 \le x < 1 \\[2ex] \dfrac{1}{x-1} & \text{se } x > 1 \end{cases}
$$

Determinare il valore del parametro reale $k$ affinché la funzione $f$ sia continua nel punto $x = 0$ e classificare il punto di discontinuità $x = 1$ per tale valore di $k$.

# Solution
Per garantire la continuità della funzione nel punto $x = 0$, è necessario e sufficiente che i limiti sinistro e destro per $x \to 0$ coincidano tra loro e siano uguali al valore asserito dalla funzione nel punto, ovvero:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)
$$

Calcoliamo il limite sinistro utilizzando il limite notevole $\lim_{t \to 0} \frac{\sin t}{t} = 1$:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \dfrac{\sin(2x)}{x} = \lim_{x \to 0^-} 2 \cdot \dfrac{\sin(2x)}{2x} = 2 \cdot 1 = 2
$$

Calcoliamo il limite destro e la valutazione di $f(0)$:

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (k e^x + 1) = k \cdot e^0 + 1 = k + 1 = f(0)
$$

Uguagliando i limiti laterali per la condizione di continuità si ottiene:

$$
k + 1 = 2 \implies k = 1
$$

Per $k = 1$, analizziamo il comportamento limite nel punto $x = 1$:

$$
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (e^x + 1) = e + 1
$$

$$
\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} \dfrac{1}{x-1} = +\infty
$$

Poiché almeno uno dei due limiti laterali per $x \to 1$ è infinito, il punto $x = 1$ è un punto di discontinuità di II specie (seconda specie).
