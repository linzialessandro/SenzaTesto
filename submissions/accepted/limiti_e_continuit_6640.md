---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti e Continuit\u00e0"
difficulty: 5
ai_generated: true
tags:
  - "Limiti e Continuit\u00e0"
  - "Definizione di limite"
  - "Discontinuit\u00e0"
  - "Funzione parte intera"
  - "Funzioni a tratti"
---
# Problem Text
Determina per quale valore del parametro reale $a$ la funzione $f: \mathbb{R} \to \mathbb{R}$ definita da

$$
f(x) = \begin{cases} x \left\lfloor \frac{a}{x} \right\rfloor & \text{se } x \neq 0 \\ 1 & \text{se } x = 0 \end{cases}
$$

è continua nel punto $x_0 = 0$, verificando la continuità in tale punto tramite la definizione rigorosa $\varepsilon$-$\delta$ di limite e classificando la tipologia dei punti di discontinuità di $f$ su $\mathbb{R}$.

# Solution
**Determinazione del parametro $a$:**
Esprimendo la parte intera tramite la parte frazionaria $\{y\} = y - \lfloor y \rfloor \in [0, 1)$, per $x \neq 0$ la funzione si riscrive come:

$$
f(x) = x \left( \frac{a}{x} - \left\{ \frac{a}{x} \right\} \right) = a - x \left\{ \frac{a}{x} \right\}
$$

Essendo $0 \le \left\{ \frac{a}{x} \right\} < 1$, per il teorema del confronto risulta $\lim_{x \to 0} x \left\{ \frac{a}{x} \right\} = 0$, da cui $\lim_{x \to 0} f(x) = a$. Affinché $f$ sia continua in $x_0 = 0$, occorre che $\lim_{x \to 0} f(x) = f(0) = 1$, pertanto $a = 1$.

**Verifica tramite la definizione $\varepsilon$-$\delta$:**
Per $a = 1$, occorre provare che $\forall \varepsilon > 0, \exists \delta > 0$ tale che $0 < |x| < \delta \implies |f(x) - 1| < \varepsilon$. 
Valutando la scarto:

$$
|f(x) - 1| = \left| 1 - x \left\{ \frac{1}{x} \right\} - 1 \right| = |x| \cdot \left\{ \frac{1}{x} \right\}
$$

Poiché $0 \le \left\{ \frac{1}{x} \right\} < 1$, si ha $|f(x) - 1| < |x|$. Scegliendo $\delta = \varepsilon$, per ogni $0 < |x| < \delta$ segue che $|f(x) - 1| < |x| < \delta = \varepsilon$. La continuità in $x_0 = 0$ è così verificata.

**Classificazione dei punti di discontinuità:**
Per $x \neq 0$, la funzione presenta punti di discontinuità laddove la parte intera $\lfloor 1/x \rfloor$ compie dei salti, ovvero nei punti $x_k = 1/k$ con $k \in \mathbb{Z} \setminus \{0\}$.
Per $k > 0$, calcoliamo i limiti destro e sinistro in $x_k$:
- Per $x \to (1/k)^+$, si ha $1/x < k$, quindi $\lfloor 1/x \rfloor = k - 1$:

$$
\lim_{x \to (1/k)^+} f(x) = \frac{1}{k}(k - 1) = 1 - \frac{1}{k}
$$

- Per $x \to (1/k)^-$, si ha $k < 1/x < k + 1$, quindi $\lfloor 1/x \rfloor = k$:

$$
\lim_{x \to (1/k)^-} f(x) = \frac{1}{k} \cdot k = 1
$$

I limiti destro e sinistro esistono finiti ma sono diversi tra loro ($\Delta = 1/k \neq 0$). Di conseguenza, tutti i punti $x_k = 1/k$ con $k \in \mathbb{Z} \setminus \{0\}$ sono **punti di discontinuità di I specie** (salti).
