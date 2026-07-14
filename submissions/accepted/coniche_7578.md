---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche"
difficulty: 3
ai_generated: true
tags:
  - "coniche"
  - "parabola"
  - "circonferenza"
  - "intersezione"
  - "geometria analitica"
---
# Problem Text
Determinare per quali valori del parametro reale $k$ la retta di equazione $y = k$ interseca la parabola di equazione $y = -x^2 + 4x$ in due punti distinti $A$ e $B$ tali che il segmento $AB$ sia il diametro di una circonferenza passante per l'origine degli assi $O(0,0)$.

# Solution
Per trovare i punti di intersezione tra la retta e la parabola, impostiamo il sistema:

$$
\begin{cases}
y = -x^2 + 4x \\
y = k
\end{cases}
$$

Sostituendo la seconda equazione nella prima si ottiene l'equazione risolvente:

$$
x^2 - 4x + k = 0
$$

Affinché vi siano due punti di intersezione distinti $A(x_1, k)$ e $B(x_2, k)$, il discriminante deve essere strettamente positivo:

$$
\frac{\Delta}{4} = 4 - k > 0 \implies k < 4
$$

Le ascisse dei punti $A$ e $B$ sono le soluzioni $x_1$ e $x_2$ dell'equazione. 

La circonferenza avente per diametro il segmento $AB$ ha come centro il punto medio $C$ di $AB$. Essendo la retta orizzontale, le coordinate del centro sono:

$$
x_C = \frac{x_1 + x_2}{2} = \frac{4}{2} = 2, \quad y_C = k
$$

Il raggio $r$ della circonferenza è pari alla semidistanza tra $A$ e $B$:

$$
r = \frac{|x_2 - x_1|}{2} = \frac{\sqrt{\Delta}}{2} = \frac{\sqrt{16-4k}}{2} = \sqrt{4-k}
$$

La circonferenza passa per l'origine $O(0,0)$ se e solo se la distanza del centro dall'origine è pari al raggio, ovvero $CO^2 = r^2$:

$$
(x_C - 0)^2 + (y_C - 0)^2 = r^2 \implies 2^2 + k^2 = (\sqrt{4-k})^2
$$

Sviluppando l'equazione:

$$
4 + k^2 = 4 - k \implies k^2 + k = 0 \implies k(k+1) = 0
$$

Le soluzioni di questa equazione sono:

$$
k = 0 \quad \text{oppure} \quad k = -1
$$

Entrambi i valori soddisfano la condizione di realtà $k < 4$, pertanto i valori cercati sono $k = 0$ e $k = -1$.
