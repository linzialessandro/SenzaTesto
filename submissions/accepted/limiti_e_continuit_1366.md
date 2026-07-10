---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e continuit\u00e0"
difficulty: 3
tags:
  - "limiti"
  - "continuit\u00e0"
  - "punti di discontinuit\u00e0"
  - "funzioni a tratti"
  - "limiti notevoli"
  - "parametri"
ai_generated: true
---
# Problem Text
Determinare i valori dei parametri reali $a$ e $b$ affinché la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da:

$$
f(x) = \begin{cases} \frac{\sin(ax)}{3x} & \text{se } x < 0 \\ a - b & \text{se } x = 0 \\ e^{bx} - b & \text{se } x > 0 \end{cases}
$$

sia continua su tutto $\mathbb{R}$. Determinare inoltre la natura della discontinuità nel punto $x = 0$ qualora si ponga $a = 3$ e $b = 2$.

# Solution
La funzione è composta da funzioni continue nei sottointervalli $x < 0$ e $x > 0$. Pertanto, l'unico punto in cui la continuità deve essere discussa è $x = 0$.

Calcoliamo i limiti unilaterali e il valore della funzione nel punto $x = 0$:

1. **Limite sinistro ($x \to 0^-$):**
Applicando il limite notevole del seno $\lim_{t \to 0} \frac{\sin t}{t} = 1$, si ottiene:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \frac{\sin(ax)}{3x} = \lim_{x \to 0^-} \frac{a}{3} \cdot \frac{\sin(ax)}{ax} = \frac{a}{3}
$$

2. **Limite destro ($x \to 0^+$):**

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \left( e^{bx} - b \right) = e^0 - b = 1 - b
$$

3. **Valore della funzione in $x = 0$:**

$$
f(0) = a - b
$$

Affinché $f(x)$ sia continua nel punto $x = 0$, i limiti destro e sinistro devono coincidere con il valore della funzione:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)
$$

Impostiamo quindi il sistema di equazioni:

$$
\begin{cases} \frac{a}{3} = 1 - b \\ \frac{a}{3} = a - b \end{cases}
$$

Dalla seconda equazione ricaviamo:

$$
b = a - \frac{a}{3} = \frac{2}{3}a
$$

Sostituendo questa espressione nella prima equazione, otteniamo:

$$
\frac{a}{3} = 1 - \frac{2}{3}a \implies a = 1
$$

Di conseguenza, troviamo il valore di $b$:

$$
b = \frac{2}{3}
$$

La funzione è continua su tutto $\mathbb{R}$ se e solo se $a = 1$ e $b = \frac{2}{3}$.

---

**Analisi del caso $a = 3$ e $b = 2$:**

Sostituendo i valori forniti, ricalcoliamo i limiti unilaterali nel punto di discontinuità $x = 0$:

$$
\lim_{x \to 0^-} f(x) = \frac{3}{3} = 1
$$

$$
\lim_{x \to 0^+} f(x) = 1 - 2 = -1
$$

Poiché i limiti destro e sinistro in $x = 0$ esistono finiti ma assumono valori diversi ($1 \neq -1$), il punto $x = 0$ è un **punto di discontinuità di prima specie** (discontinuità con salto).

Il **salto** della funzione è dato dalla differenza assoluta tra i due limiti:

$$
S = \left| \lim_{x \to 0^+} f(x) - \lim_{x \to 0^-} f(x) \right| = |1 - (-1)| = 2
$$
