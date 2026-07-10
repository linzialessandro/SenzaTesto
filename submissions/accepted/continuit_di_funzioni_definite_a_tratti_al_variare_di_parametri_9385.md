---
year: 5
macro_area: "Limiti e Continuit\u00e0"
topic: "Continuit\u00e0 di funzioni definite a tratti al variare di parametri"
difficulty: 3
tags:
  - "limiti"
  - "continuit\u00e0"
  - "funzioni a tratti"
  - "parametri"
ai_generated: true
---
# Problem Text
Determinare per quali valori dei parametri reali $a$ e $b$ la funzione $f: \mathbb{R} \to \mathbb{R}$ così definita:

$$
f(x) = \begin{cases} \frac{\ln(1 + ax)}{x} & \text{se } x < 0 \\ b \cos(x) + 2 & \text{se } 0 \le x \le \pi \\ \frac{x^2 - \pi^2}{x - \pi} & \text{se } x > \pi \end{cases}
$$

risulta continua in ogni punto di $\mathbb{R}$.

# Solution
La funzione $f(x)$ è composta da funzioni continue nei rispettivi intervalli aperti. Gli unici punti in cui la continuità va verificata e imposta sono i punti di raccordo $x = 0$ e $x = \pi$.

**Continuità in $x = 0$**:
Imponiamo l'eguaglianza tra limite sinistro, limite destro e valore della funzione:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)
$$

Calcoliamo il limite sinistro tramite il limite notevole del logaritmo:

$$
\lim_{x \to 0^-} \frac{\ln(1 + ax)}{x} = \lim_{x \to 0^-} a \cdot \frac{\ln(1 + ax)}{ax} = a
$$

Il valore e il limite destro sono:

$$
f(0) = \lim_{x \to 0^+} (b \cos(x) + 2) = b + 2
$$

Otteniamo la prima relazione:

$$
a = b + 2
$$

**Continuità in $x = \pi$**:
Imponiamo la continuità nel secondo punto di raccordo:

$$
\lim_{x \to \pi^-} f(x) = \lim_{x \to \pi^+} f(x) = f(\pi)
$$

Il valore in $\pi$ e il limite sinistro sono:

$$
f(\pi) = \lim_{x \to \pi^-} (b \cos(x) + 2) = -b + 2
$$

Il limite destro, semplificando la frazione per $x \neq \pi$, è:

$$
\lim_{x \to \pi^+} \frac{x^2 - \pi^2}{x - \pi} = \lim_{x \to \pi^+} \frac{(x - \pi)(x + \pi)}{x - \pi} = \lim_{x \to \pi^+} (x + \pi) = 2\pi
$$

Otteniamo la seconda relazione:

$$
-b + 2 = 2\pi \implies b = 2 - 2\pi
$$

**Determinazione delle soluzioni**:
Sostituendo $b$ nella prima relazione otteniamo il valore di $a$:

$$
a = (2 - 2\pi) + 2 = 4 - 2\pi
$$

In conclusione, la funzione è continua su tutto $\mathbb{R}$ per:

$$
a = 4 - 2\pi, \quad b = 2 - 2\pi
$$
