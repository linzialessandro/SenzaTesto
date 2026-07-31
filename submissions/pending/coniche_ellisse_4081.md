---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche - Ellisse"
difficulty: 5
ai_generated: true
tags:
  - "ellisse"
  - "geometria analitica"
  - "coniche"
  - "eccentricit\u00e0"
  - "parametri"
  - "posizioni reciproche"
---
# Problem Text
Determina per quali valori del parametro reale $k > 0$ l'ellisse $\mathcal{E}_k$ di equazione

$$
\frac{x^2}{k+5} + \frac{y^2}{k} = 1
$$

ha eccentricità $e \ge \frac{\sqrt{5}}{3}$ ed è secante la retta $r: y = x + k - 1$ in due punti distinti.

# Solution
**1. Analisi delle caratteristiche dell'ellisse**
Dall'equazione canonica dell'ellisse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, con $k > 0$, identifichiamo i quadrati dei semiassi:

$$
a^2 = k + 5, \quad b^2 = k
$$

Poiché $k + 5 > k$, risulta $a > b > 0$, dunque i fuochi si trovano sull'asse $x$. La semidistanza focale $c$ è:

$$
c = \sqrt{a^2 - b^2} = \sqrt{(k + 5) - k} = \sqrt{5}
$$

L'eccentricità $e = \frac{c}{a}$ è data da:

$$
e = \frac{\sqrt{5}}{\sqrt{k+5}}
$$

**2. Condizione sull'eccentricità**
Imponiamo la disuguaglianza $e \ge \frac{\sqrt{5}}{3}$:

$$
\frac{\sqrt{5}}{\sqrt{k+5}} \ge \frac{\sqrt{5}}{3} \iff \sqrt{k+5} \le 3 \iff k + 5 \le 9 \iff k \le 4
$$

Considerando il vincolo del problema $k > 0$, si ottiene la prima condizione:

$$
0 < k \le 4
$$

**3. Condizione di intersezione in due punti distinti**
Sostituiamo $y = x + k - 1$ nell'equazione dell'ellisse moltiplicata per $k(k+5)$:

$$
k x^2 + (k+5)(x + k - 1)^2 = k(k+5)
$$

Sviluppando e riordinando i termini rispetto a $x$:

$$
(2k+5) x^2 + 2(k+5)(k-1) x + (k+5)(k^2 - 3k + 1) = 0
$$

Il discriminante ridotto $\Delta/4$ di questa equazione di secondo grado è:

$$
\frac{\Delta}{4} = [(k+5)(k-1)]^2 - (2k+5)(k+5)(k^2 - 3k + 1) = k(k+5)(4 + 4k - k^2)
$$

Affinché la retta sia secante in due punti distinti, occorre che $\Delta > 0$. Essendo $k > 0$ e $k+5 > 0$, la condizione si riduce a:

$$
4 + 4k - k^2 > 0 \iff k^2 - 4k - 4 < 0
$$

Le radici dell'equazione associata sono $k = 2 \pm 2\sqrt{2}$. La disequazione è verificata per:

$$
2 - 2\sqrt{2} < k < 2 + 2\sqrt{2}
$$

Intersecando con $k > 0$, otteniamo la seconda condizione:

$$
0 < k < 2 + 2\sqrt{2}
$$

**4. Conclusione**
Mettendo a sistema le due condizioni ($0 < k \le 4$ e $0 < k < 2 + 2\sqrt{2}$) e notando che $2 + 2\sqrt{2} \approx 4{,}83 > 4$, l'intersezione degli intervalli fornisce la soluzione finale:

$$
0 < k \le 4
$$
