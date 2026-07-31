---
year: 5
macro_area: "Analisi Matematica"
topic: "Calcolo dei Limiti e Continuit\u00e0"
difficulty: 5
ai_generated: true
tags:
  - "limiti"
  - "continuit\u00e0"
  - "asintoti"
  - "teorema degli zeri"
  - "limiti notevoli"
  - "parametri"
---
# Problem Text
Si consideri la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = \begin{cases} \dfrac{\sin(ax) - 2x \cos x}{x} & \text{se } x > 0 \\[8pt] c & \text{se } x = 0 \\[8pt] \sqrt{4x^2 - 4x + 1} + k x & \text{se } x < 0 \end{cases}
$$

Determinare i valori dei parametri reali $a$, $c$ e $k$ affinché $f(x)$ sia continua in $x = 0$ e ammetta l'asintoto obliquo $y = -5x + 1$ per $x \to -\infty$. Dimostrare poi che, per tali valori, la funzione ammette almeno uno zero nell'intervallo $(0, \pi)$.

# Solution
Per $x < 0$, si nota che $4x^2 - 4x + 1 = (2x - 1)^2$. Essendo $x < 0$, la quantità $2x - 1$ è strettamente negativa, da cui $\sqrt{(2x - 1)^2} = |2x - 1| = 1 - 2x$. Pertanto, la funzione per $x < 0$ si riscrive come:
$$ f(x) = 1 - 2x + kx = (k - 2)x + 1 $$
Affinché il grafico di $f(x)$ ammetta per $x \to -\infty$ l'asintoto obliquo $y = -5x + 1$, il coefficiente angolare della retta deve coincidere con $k - 2$:
$$ k - 2 = -5 \implies k = -3 $$

Imponiamo la continuità della funzione in $x = 0$, ovvero la condizione $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0) = c$.
Dal limite sinistro si ottiene:
$$ \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} (1 - 5x) = 1 \implies c = 1 $$
Calcoliamo il limite destro sfruttando il limite notevole $\lim_{x \to 0} \frac{\sin(ax)}{x} = a$:
$$ \lim_{x \to 0^+} \frac{\sin(ax) - 2x \cos x}{x} = \lim_{x \to 0^+} \left( \frac{\sin(ax)}{x} - 2\cos x \right) = a - 2 $$
Uguagliando il limite destro al valore $c = 1$:
$$ a - 2 = 1 \implies a = 3 $$

Con i parametri trovati ($a = 3, c = 1, k = -3$), la funzione per $x > 0$ è $f(x) = \frac{\sin(3x)}{x} - 2\cos x$, ed è continua su tutto $(0, +\infty)$. Di conseguenza, $f(x)$ è continua sull'intervallo chiuso $\left[\frac{\pi}{2}, \pi\right]$.
Valutiamo $f(x)$ agli estremi dell'intervallo $\left[\frac{\pi}{2}, \pi\right]$:
- Per $x = \frac{\pi}{2}$:
$$ f\left(\frac{\pi}{2}\right) = \frac{\sin\left(\frac{3\pi}{2}\right)}{\frac{\pi}{2}} - 2\cos\left(\frac{\pi}{2}\right) = \frac{-1}{\frac{\pi}{2}} - 0 = -\frac{2}{\pi} < 0 $$
- Per $x = \pi$:
$$ f(\pi) = \frac{\sin(3\pi)}{\pi} - 2\cos(\pi) = \frac{0}{\pi} - 2(-1) = 2 > 0 $$

Poiché $f(x)$ è continua in $\left[\frac{\pi}{2}, \pi\right]$ e assume valori di segno opposto agli estremi ($f\left(\frac{\pi}{2}\right) < 0$ e $f(\pi) > 0$), per il **Teorema di Esistenza degli Zeri** esiste almeno un punto $x_0 \in \left(\frac{\pi}{2}, \pi\right) \subset (0, \pi)$ tale che $f(x_0) = 0$.
