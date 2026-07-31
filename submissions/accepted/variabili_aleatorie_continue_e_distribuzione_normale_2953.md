---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue e distribuzione Normale"
difficulty: 5
ai_generated: true
tags:
  - "Variabili aleatorie continue"
  - "Distribuzione Normale"
  - "Integrale di Gauss"
  - "Punti di flesso"
  - "Parametri"
---
# Problem Text
Sia $X$ una variabile aleatoria continua avente densità di probabilità $f(x) = k \, e^{-a x^2 + b x}$, con $a > 0$ e $b \in \mathbb{R}$. Determinare la costante di normalizzazione $k$, il valore atteso $\mu$ e la varianza $\sigma^2$ della variabile $X$ in funzione di $a$ e $b$, e dimostrare che il valore assunto da $f(x)$ nei suoi punti di flesso è pari a $f(\mu)/\sqrt{e}$.

# Solution
Completando il quadrato all'esponente della funzione $f(x)$, si ottiene:

$$
-a x^2 + b x = -a \left(x - \frac{b}{2a}\right)^2 + \frac{b^2}{4a}
$$

La funzione di densità di probabilità si può quindi riscrivere nella forma:

$$
f(x) = k \, e^{\frac{b^2}{4a}} \exp\left( -a \left(x - \frac{b}{2a}\right)^2 \right)
$$

Confrontando questa espressione con la densità di una distribuzione Gaussiana $\mathcal{N}(\mu, \sigma^2)$, espressa da $f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$, si identificano il valore atteso $\mu$ e la varianza $\sigma^2$:

$$
\mu = \frac{b}{2a}, \quad \frac{1}{2\sigma^2} = a \implies \sigma^2 = \frac{1}{2a}
$$

Imponendo la condizione di normalizzazione $\int_{-\infty}^{+\infty} f(x) \, dx = 1$ e sfruttando l'integrale noto di Gauss $\int_{-\infty}^{+\infty} e^{-a(x-\mu)^2} dx = \sqrt{\frac{\pi}{a}}$, si ricava:

$$
k \, e^{\frac{b^2}{4a}} \sqrt{\frac{\pi}{a}} = 1 \implies k = \sqrt{\frac{a}{\pi}} \, e^{-\frac{b^2}{4a}}
$$

Per determinare i punti di flesso del grafico di $f(x)$, si calcolano le derivate prima e seconda della densità normale:

$$
f'(x) = -\frac{x-\mu}{\sigma^2} \, f(x)
$$

$$
f''(x) = -\frac{1}{\sigma^2} \, f(x) + \frac{(x-\mu)^2}{\sigma^4} \, f(x) = \frac{f(x)}{\sigma^2} \left[ \frac{(x-\mu)^2}{\sigma^2} - 1 \right]
$$

Uguagliando la derivata seconda a zero, $f''(x) = 0$, si trova $(x-\mu)^2 = \sigma^2$, da cui le ascisse dei punti di flesso risultano $x_{\pm} = \mu \pm \sigma$.

Calcolando l'ordinata dei punti di flesso $f(x_{\pm})$, si ottiene:

$$
f(\mu \pm \sigma) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(\pm \sigma)^2}{2\sigma^2}} = \frac{1}{\sigma \sqrt{2\pi}} e^{-1/2} = \frac{f(\mu)}{\sqrt{e}}
$$

La tesi è così dimostrata.
