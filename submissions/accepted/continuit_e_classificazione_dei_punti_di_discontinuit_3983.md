---
year: 5
macro_area: "Limiti e Continuità"
topic: "Continuità e classificazione dei punti di discontinuità"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-09-13T09:24:38+00:00"
tags:
  - "limiti"
  - "continuità"
  - "discontinuità"
  - "funzioni a tratti"
  - "successioni"
---
# Problem Text
Data la funzione $f(x) = \lim_{n\to\infty} \frac{x^{2n} - 1}{x^{2n} + 1}$, studia la continuità di $f$ su $\mathbb{R}$ e classifica gli eventuali punti di discontinuità.

# Solution
Calcoliamo il limite al variare di $x \in \mathbb{R}$.

Se $|x| < 1$, allora $x^{2n} \to 0$, quindi

$$
f(x) = \frac{0 - 1}{0 + 1} = -1.
$$

Se $|x| > 1$, allora $x^{2n} \to +\infty$. Dividendo numeratore e denominatore per $x^{2n}$:

$$
f(x) = \lim_{n\to\infty} \frac{1 - \frac{1}{x^{2n}}}{1 + \frac{1}{x^{2n}}} = 1.
$$

Se $x = 1$, $x^{2n} = 1$, quindi $f(1) = \frac{1-1}{1+1} = 0$.

Se $x = -1$, $(-1)^{2n} = 1$, quindi $f(-1) = 0$.

Pertanto

$$
f(x) = \begin{cases}
-1 & |x| < 1 \\
1 & |x| > 1 \\
0 & x = \pm 1
\end{cases}
$$

Studiamo la continuità nei punti $x = 1$ e $x = -1$.

In $x = 1$: $\lim_{x\to 1^-} f(x) = -1$, $\lim_{x\to 1^+} f(x) = 1$, $f(1) = 0$. I limiti laterali sono finiti ma diversi, quindi $x=1$ è un punto di discontinuità di prima specie (salto).

In $x = -1$: $\lim_{x\to -1^-} f(x) = 1$ (poiché per $x < -1$ si ha $|x| > 1$), $\lim_{x\to -1^+} f(x) = -1$ (poiché per $-1 < x < 1$ si ha $|x| < 1$), $f(-1) = 0$. Anche qui salto finito, quindi discontinuità di prima specie.

Per $x \neq \pm 1$, la funzione è costante a tratti, quindi continua.

In conclusione, $f$ è continua su $\mathbb{R} \setminus \{-1, 1\}$ e presenta due punti di discontinuità di prima specie (salto) in $x = -1$ e $x = 1$.
