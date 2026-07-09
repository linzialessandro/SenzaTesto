---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale (Rolle, Lagrange, Cauchy, De L'H\u00f4pital)"
difficulty: 4
tags:
  - "Teorema di Rolle"
  - "Funzioni definite a tratti"
  - "Parametri reali"
  - "Continuit\u00e0 e derivabilit\u00e0"
---
# Problem Text
Determinare i valori dei parametri reali $a$ e $b$ affinché la funzione

$$
f(x) = \begin{cases} a \ln(1+x^2) + bx + 1 & \text{se } -1 \le x \le 0 \\ e^{2x} - x & \text{se } 0 < x \le 1 \end{cases}
$$

soddisfi le ipotesi del teorema di Rolle nell'intervallo $[-1, 1]$, e calcolare il punto $c \in (-1, 1)$ la cui esistenza è garantita dal teorema.

# Solution
La funzione $f(x)$ deve soddisfare le tre ipotesi del teorema di Rolle nell'intervallo $[-1, 1]$: continuità nell'intervallo chiuso, derivabilità nell'intervallo aperto e l'uguaglianza agli estremi $f(-1) = f(1)$.

1. **Continuità**: Negli intervalli $[-1, 0)$ e $(0, 1]$ la funzione è continua. Nel punto di raccordo $x = 0$ abbiamo:

$$
\lim_{x \to 0^-} f(x) = a \ln(1) + 1 = 1
$$

$$
\lim_{x \to 0^+} f(x) = e^0 - 0 = 1
$$

Poiché $f(0) = 1$, la funzione è continua in $[-1, 1]$ per qualunque $a, b \in \mathbb{R}$.

2. **Derivabilità**: Calcoliamo la derivata prima per $x \neq 0$:

$$
f'(x) = \begin{cases} \frac{2ax}{1+x^2} + b & \text{se } -1 < x < 0 \\ 2e^{2x} - 1 & \text{se } 0 < x < 1 \end{cases}
$$

La funzione è derivabile in $x=0$ se i limiti della derivata coincidono:

$$
\lim_{x \to 0^-} f'(x) = b
$$

$$
\lim_{x \to 0^+} f'(x) = 2e^0 - 1 = 1
$$

Quindi dobbiamo avere $b = 1$.

3. **Uguaglianza agli estremi**: Sostituendo $b = 1$, imponiamo $f(-1) = f(1)$:

$$
f(-1) = a\ln(2), \quad f(1) = e^2 - 1 \implies a = \frac{e^2 - 1}{\ln(2)}
$$

4. **Ricerca del punto $c$**: Cerchiamo $c \in (-1, 1)$ tale che $f'(c) = 0$.
- Se $c \in (0, 1)$, l'equazione $2e^{2c} - 1 = 0 \implies c = -\frac{\ln(2)}{2} < 0$, non accettabile in questo intervallo.
- Se $c \in (-1, 0)$:

$$
\frac{2ac}{1+c^2} + 1 = 0 \implies c^2 + 2ac + 1 = 0 \implies c = -a \pm \sqrt{a^2 - 1}
$$

Essendo $a \approx 9.22 > 1$, la soluzione $c = -a - \sqrt{a^2-1} < -1$ è esclusa. La soluzione accettabile è:

$$
c = -a + \sqrt{a^2 - 1}
$$

Infatti, si verifica facilmente che $-1 < -a + \sqrt{a^2-1} < 0$ poiché $\sqrt{a^2-1} > a-1$ equivale a $a^2-1 > a^2-2a+1 \iff a > 1$.
