---
year: 5
macro_area: "Analisi Matematica"
topic: "Topologia e Funzioni"
difficulty: 3
ai_generated: true
tags:
  - "dominio"
  - "parit\u00e0"
  - "topologia"
  - "punti di accumulazione"
  - "frontiera"
---
# Problem Text
Determinare il dominio $D \subset \mathbb{R}$ della funzione reale

$$
f(x) = \sqrt{\frac{x^2 - 4}{|x| - 3}}
$$

e, dopo averne verificato la parità, determinarne l'insieme dei punti di accumulazione $D'$ e la frontiera $\partial D$.

# Solution
Il dominio $D$ è definito dalle condizioni di realtà della radice quadrata e di non annullamento del denominatore:

$$
\frac{x^2 - 4}{|x| - 3} \ge 0 \quad \text{con} \quad |x| \neq 3
$$

Posto $t = |x| \ge 0$, la disequazione si riconduce a:

$$
\frac{t^2 - 4}{t - 3} \ge 0 \iff \frac{(t - 2)(t + 2)}{t - 3} \ge 0
$$

Poiché $t + 2 > 0$ per ogni $t \ge 0$, il segno della frazione coincide con il segno di:

$$
\frac{t - 2}{t - 3} \ge 0 \implies t \le 2 \quad \text{oppure} \quad t > 3
$$

Esplicitando in funzione di $x$:
- $0 \le |x| \le 2 \iff -2 \le x \le 2$
- $|x| > 3 \iff x < -3 \quad \text{oppure} \quad x > 3$

Il dominio della funzione è pertanto:

$$
D = (-\infty, -3) \cup [-2, 2] \cup (3, +\infty)
$$

Poiché $x \in D \iff -x \in D$, l'insieme $D$ è simmetrico rispetto all'origine. Calcolando la funzione in $-x$:

$$
f(-x) = \sqrt{\frac{(-x)^2 - 4}{|-x| - 3}} = \sqrt{\frac{x^2 - 4}{|x| - 3}} = f(x)
$$

Si conclude che $f$ è una funzione **pari**.

Dalla definizione topologica, un punto $x_0 \in \mathbb{R}$ è di accumulazione per $D$ se ogni suo intorno completo $I(x_0)$ contiene almeno un punto di $D$ distinto da $x_0$. Poiché $D$ è un'unione di intervalli non banali, l'insieme dei punti di accumulazione include gli intervalli stessi e i relativi estremi:

$$
D' = (-\infty, -3] \cup [-2, 2] \cup [3, +\infty)
$$

Infine, la frontiera $\partial D$ comprende i punti del piano reale per i quali ogni intorno contiene sia punti appartenenti a $D$ sia punti appartenenti al suo complementare $\mathbb{R} \setminus D$:

$$
\partial D = \{-3, -2, 2, 3\}
$$
