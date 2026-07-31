---
year: 5
macro_area: "Analisi Matematica"
topic: "Calcolo dei Limiti e Teoremi sulle Funzioni Continue"
difficulty: 3
ai_generated: true
tags:
  - "limiti"
  - "asintoti"
  - "teorema del confronto"
  - "teorema degli zeri"
  - "continuit\u00e0"
---
# Problem Text
Determinare i parametri reali $a$ e $b$ affinché la funzione

$$
f(x) = \frac{a x^2 + b x + \sin x}{x + 1}
$$

ammetta la retta $y = x + 2$ come asintoto obliquo per $x \to +\infty$, e verificare che la funzione così ottenuta ammette almeno un punto di intersezione con l'asse $x$ nell'intervallo $\left[-\pi, -\frac{\pi}{2}\right]$.

# Solution
Per la definizione di asintoto obliquo $y = mx + q$, imponiamo $m = 1$ e $q = 2$.

Calcoliamo il coefficiente angolare $m$:

$$
m = \lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{a x^2 + b x + \sin x}{x(x + 1)} = \lim_{x \to +\infty} \left( \frac{a x^2 + b x}{x^2 + x} + \frac{\sin x}{x^2 + x} \right)
$$

Poiché $-1 \le \sin x \le 1$, per il teorema del confronto si ha $\lim_{x \to +\infty} \frac{\sin x}{x^2 + x} = 0$. Pertanto:

$$
m = \lim_{x \to +\infty} \frac{a x^2 + b x}{x^2 + x} = a \implies a = 1
$$

Calcoliamo il termine noto $q$:

$$
q = \lim_{x \to +\infty} [f(x) - x] = \lim_{x \to +\infty} \left( \frac{x^2 + b x + \sin x}{x + 1} - x \right) = \lim_{x \to +\infty} \frac{(b - 1)x + \sin x}{x + 1}
$$

Analogamente, per il teorema del confronto $\lim_{x \to +\infty} \frac{\sin x}{x + 1} = 0$, quindi:

$$
q = \lim_{x \to +\infty} \frac{(b - 1)x}{x + 1} = b - 1 \implies b - 1 = 2 \implies b = 3
$$

La funzione cercata è dunque $f(x) = \frac{x^2 + 3x + \sin x}{x + 1}$.

Per verificare l'esistenza di uno zero nell'intervallo $I = \left[-\pi, -\frac{\pi}{2}\right]$, utilizziamo il teorema di esistenza degli zeri:
1. **Continuità**: $f(x)$ è continua in $\mathbb{R} \setminus \{-1\}$. Poiché $-1 \notin I$ (infatti $-1 > -\frac{\pi}{2} \approx -1{,}57$), $f$ è continua nell'intervallo chiuso $\left[-\pi, -\frac{\pi}{2}\right]$.
2. **Segno agli estremi**:
- $f(-\pi) = \frac{\pi^2 - 3\pi + 0}{1 - \pi} = \frac{\pi(\pi - 3)}{1 - \pi} < 0$, essendo $\pi > 3$ e $1 - \pi < 0$.
- $f\left(-\frac{\pi}{2}\right) = \frac{\frac{\pi^2}{4} - \frac{3\pi}{2} - 1}{1 - \frac{\pi}{2}} = \frac{\pi^2 - 6\pi - 4}{4\left(1 - \frac{\pi}{2}\right)} > 0$, poiché numeratore ($\pi^2 - 6\pi - 4 < 0$) e denominatore ($1 - \frac{\pi}{2} < 0$) sono entrambi negativi.

Poiché $f(-\pi)$ e $f\left(-\frac{\pi}{2}\right)$ assumono valori di segno opposto, per il teorema di esistenza degli zeri esiste almeno un punto $c \in \left]-\pi, -\frac{\pi}{2}\right[$ tale che $f(c) = 0$, ossia un punto di intersezione con l'asse $x$.
