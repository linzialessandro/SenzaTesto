---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e Continuit\u00e0"
difficulty: 2
tags:
  - "Limiti"
  - "Continuit\u00e0"
  - "Funzioni definite a tratti"
  - "Limiti notevoli"
  - "Parametri"
---
# Problem Text
Determinare il valore del parametro reale $k$ affinché la seguente funzione definita a tratti sia continua in tutto il suo dominio $\mathbb{R}$:

$$
f(x) = \begin{cases} \frac{\sin(kx)}{x} & \text{se } x < 0 \\ x^2 - x + 4 & \text{se } x \ge 0 \end{cases}
$$

# Solution
Per garantire la continuità della funzione in tutto il suo dominio, dobbiamo analizzare il comportamento nei singoli intervalli e nel punto di raccordo $x = 0$.

1. **Continuità per $x \neq 0$**:
- Per $x > 0$, il ramo $f(x) = x^2 - x + 4$ è un polinomio, quindi è continuo.
- Per $x < 0$, il ramo $f(x) = \frac{\sin(kx)}{x}$ è il rapporto di due funzioni continue con denominatore non nullo, quindi è continuo per ogni $k \in \mathbb{R}$.

2. **Continuità nel punto di raccordo $x = 0$**:
La funzione è continua in $x = 0$ se e solo se esiste il limite per $x \to 0$ ed è uguale al valore di $f(0)$:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)
$$

3. **Calcolo del valore della funzione e dei limiti**:
- Il valore di $f(0)$ è:

$$
f(0) = 0^2 - 0 + 4 = 4
$$

- Il limite destro vale:

$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x^2 - x + 4) = 4
$$

- Il limite sinistro richiede l'applicazione del limite notevole $\lim_{t \to 0} \frac{\sin(t)}{t} = 1$:

$$
\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \frac{\sin(kx)}{x} = \lim_{x \to 0^-} \left( k \cdot \frac{\sin(kx)}{kx} \right) = k \cdot 1 = k
$$

4. **Determinazione di $k$**:
Uguagliando il limite sinistro al limite destro (e al valore della funzione), si ottiene:

$$
k = 4
$$

Conclusione: la funzione è continua su tutto $\mathbb{R}$ se e solo se $k = 4$.
