---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 2
ai_generated: true
tags:
  - "fasci di rette"
  - "parallelismo"
  - "distanza punto-retta"
  - "equazione esplicita"
---
# Problem Text
Determina l'equazione in forma esplicita della retta $s$ appartenente al fascio improprio di rette parallele a $r: 2x - y + 3 = 0$, avente ordinata all'origine positiva, la cui distanza dall'origine degli assi $O(0,0)$ è pari a $\sqrt{5}$.

# Solution
La retta $r$ è espressa in forma implicita come $2x - y + 3 = 0$. Esplicitandola rispetto a $y$:

$$
y = 2x + 3
$$

Il suo coefficiente angolare è $m = 2$.

Il fascio improprio di rette parallele a $r$ è formato da rette con lo stesso coefficiente angolare $m = 2$. La sua equazione generica in forma implicita è:

$$
2x - y + q = 0
$$

La formula per la distanza di un punto $P(x_0, y_0)$ da una retta in forma implicita $ax + by + c = 0$ è:

$$
d = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}}
$$

Applichiamo la formula per calcolare la distanza tra l'origine $O(0,0)$ e la generica retta del fascio $s$:

$$
d(O, s) = \frac{|2(0) - (0) + q|}{\sqrt{2^2 + (-1)^2}} = \frac{|q|}{\sqrt{5}}
$$

Imponiamo che tale distanza sia pari a $\sqrt{5}$:

$$
\frac{|q|}{\sqrt{5}} = \sqrt{5} \implies |q| = 5 \implies q = \pm 5
$$

L'ordinata all'origine corrisponde al valore del termine noto quando la retta è scritta in forma esplicita, ossia $y = 2x + q$. Poiché la richiesta impone un'ordinata all'origine positiva, scegliamo $q = 5$.

L'equazione in forma esplicita della retta $s$ cercata è:

$$
y = 2x + 5
$$
