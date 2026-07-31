---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche"
difficulty: 4
ai_generated: true
tags:
  - "coniche"
  - "ellisse"
  - "traslazione"
  - "fuochi"
  - "discussione parametrica"
---
# Problem Text
Determinare per quali valori del parametro reale $k$ l'equazione

$$
(k-1)x^2 + (3-k)y^2 + 2(k-1)x = 0
$$

rappresenta un'ellisse reale con fuochi distinti appartenenti all'asse delle ascisse.

# Solution
Completiamo il quadrato rispetto alla variabile $x$:

$$
(k-1)(x^2 + 2x + 1) - (k-1) + (3-k)y^2 = 0
$$

$$
(k-1)(x+1)^2 + (3-k)y^2 = k-1
$$

Affinché l'equazione rappresenti un'ellisse reale, i coefficienti dei termini quadratici e il termine noto devono avere lo stesso segno e non annullarsi. Imponiamo dunque:

$$
k - 1 > 0 \implies k > 1
$$

$$
3 - k > 0 \implies k < 3
$$

ovvero $1 < k < 3$.

Dividendo per $k-1$, riduciamo l'equazione alla forma canonica con centro traslato $C(-1,0)$:

$$
\frac{(x+1)^2}{1} + \frac{y^2}{\frac{k-1}{3-k}} = 1
$$

Posto $a^2 = 1$ e $b^2 = \frac{k-1}{3-k}$, notiamo che il centro $C(-1,0)$ giace sull'asse delle ascisse. Affinché i fuochi siano distinti e appartengano all'asse $x$ (asse di simmetria orizzontale), l'ellisse deve avere il semiasse orizzontale maggiore di quello verticale, ossia $a^2 > b^2$:

$$
1 > \frac{k-1}{3-k}
$$

Essendo $3-k > 0$ nell'intervallo $(1,3)$, la disequazione equivale a:

$$
3 - k > k - 1 \iff 2k < 4 \iff k < 2
$$

Mettendo a sistema la condizione di esistenza dell'ellisse ($1 < k < 3$) con la condizione sui fuochi ($k < 2$), si ottiene la soluzione finale:

$$
1 < k < 2
$$
