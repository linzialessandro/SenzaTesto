---
year: 3
macro_area: "Geometria Analitica"
topic: "coniche"
difficulty: 3
tags:
  - "coniche"
  - "ellisse"
  - "parabola"
  - "intersezione"
  - "eccentricit\u00e0"
  - "fuochi"
---
# Problem Text
Si consideri un'ellisse $\mathcal{E}$ riferita ai propri assi di simmetria, avente l'asse maggiore sull'asse $x$ di misura $10$ e passante per il punto $P\left(4, \frac{9}{5}\right)$.

1. Determinare l'equazione canonica dell'ellisse $\mathcal{E}$, le coordinate dei suoi fuochi e la sua eccentricità.
2. Trovare i quattro vertici del rettangolo inscritto nell'ellisse $\mathcal{E}$ avente i lati paralleli agli assi cartesiani e di cui il punto $P$ è un vertice. Successivamente, calcolare l'area e il perimetro di tale rettangolo.
3. Determinare l'equazione della parabola $\mathcal{P}$ con asse parallelo all'asse $x$, avente il vertice nel fuoco di $\mathcal{E}$ situato sul semiasse positivo delle ascisse e passante per i vertici del semiasse minore dell'ellisse.
4. Trovare gli eventuali punti di intersezione reali tra l'ellisse $\mathcal{E}$ e la parabola $\mathcal{P}$.

# Solution
**1. Determinazione dell'equazione dell'ellisse $\mathcal{E}$**

L'equazione canonica di un'ellisse riferita ai propri assi con i fuochi sull'asse $x$ ha la forma:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

con $a > b > 0$.

Poiché la lunghezza dell'asse maggiore è $10$, la lunghezza del semiasse maggiore è:

$$
a = \frac{10}{2} = 5 \implies a^2 = 25
$$

Sostituendo $a^2 = 25$ nell'equazione dell'ellisse:

$$
\frac{x^2}{25} + \frac{y^2}{b^2} = 1
$$

Imponiamo la condizione di passaggio per il punto $P\left(4, \frac{9}{5}\right)$:

$$
\frac{4^2}{25} + \frac{\left(\frac{9}{5}\right)^2}{b^2} = 1
$$

$$
\frac{16}{25} + \frac{\frac{81}{25}}{b^2} = 1
$$

$$
\frac{16}{25} + \frac{81}{25b^2} = 1
$$

Moltiplichiamo entrambi i membri per $25b^2$ ($b \neq 0$):

$$
16b^2 + 81 = 25b^2
$$

$$
9b^2 = 81 \implies b^2 = 9 \implies b = 3
$$

L'equazione canonica dell'ellisse $\mathcal{E}$ è pertanto:

$$
\frac{x^2}{25} + \frac{y^2}{9} = 1
$$

La semidistanza focale $c$ è data da:

$$
c = \sqrt{a^2 - b^2} = \sqrt{25 - 9} = \sqrt{16} = 4
$$

Quindi, i fuochi hanno coordinate:

$$
F_1(-4, 0) \quad \text{e} \quad F_2(4, 0)
$$

L'eccentricità $e$ dell'ellisse è pari a:

$$
e = \frac{c}{a} = \frac{4}{5} = 0.8
$$

---

**2. Vertici e proprietà metriche del rettangolo inscritto**

Data la simmetria assiale dell'ellisse rispetto agli assi cartesiani, dato un punto $P\left(4, \frac{9}{5}\right)$ appartenente all'ellisse e situato nel primo quadrante, gli altri tre vertici del rettangolo inscritto avente lati paralleli agli assi si otterranno per simmetria rispetto all'origine e agli assi cartesiani:
- $Q\left(-4, \frac{9}{5}\right)$ nel secondo quadrante;
- $R\left(-4, -\frac{9}{5}\right)$ nel terzo quadrante;
- $S\left(4, -\frac{9}{5}\right)$ nel quarto quadrante.

La lunghezza della base del rettangolo (parallela all'asse $x$) è pari alla distanza tra le ascisse dei punti corrispondenti:

$$
b_{\text{rett}} = 2 \cdot 4 = 8
$$

La lunghezza dell'altezza del rettangolo (parallela all'asse $y$) è pari alla distanza tra le ordinate dei punti corrispondenti:

$$
h_{\text{rett}} = 2 \cdot \frac{9}{5} = \frac{18}{5}
$$

Determiniamo il perimetro del rettangolo:

$$
\text{Perimetro} = 2 \cdot (b_{\text{rett}} + h_{\text{rett}}) = 2 \cdot \left(8 + \frac{18}{5}\right) = 2 \cdot \left(\frac{40 + 18}{5}\right) = 2 \cdot \frac{58}{5} = \frac{116}{5}
$$

Determiniamo l'area del rettangolo:

$$
\text{Area} = b_{\text{rett}} \cdot h_{\text{rett}} = 8 \cdot \frac{18}{5} = \frac{144}{5}
$$

---

**3. Equazione della parabola $\mathcal{P}$**

Il fuoco di $\mathcal{E}$ posto sul semiasse positivo delle ascisse è $F_2(4, 0)$, che rappresenta il vertice $V$ della parabola:

$$
V(4, 0)
$$

I vertici sul semiasse minore dell'ellisse sono situati sull'asse $y$ e hanno coordinate:

$$
B_1(0, -3) \quad \text{e} \quad B_2(0, 3)
$$

Poiché l'asse della parabola è parallelo all'asse $x$, l'equazione generica è:

$$
x - x_V = a_p(y - y_V)^2
$$

Sostituendo le coordinate del vertice $V(4, 0)$:

$$
x - 4 = a_p(y - 0)^2 \implies x = a_p y^2 + 4
$$

Imponiamo il passaggio della parabola per uno dei punti caratteristici dell'asse minore dell'ellisse, ad esempio $B_2(0, 3)$:

$$
0 = a_p (3)^2 + 4
$$

$$
9a_p = -4 \implies a_p = -\frac{4}{9}
$$

Pertanto, l'equazione della parabola $\mathcal{P}$ è:

$$
x = -\frac{4}{9}y^2 + 4
$$

---

**4. Intersezioni tra l'ellisse $\mathcal{E}$ e la parabola $\mathcal{P}$**

Per trovare le coordinate dei punti comuni alle due curve, risolviamo il sistema formato dalle loro equazioni:

$$
\begin{cases}
\frac{x^2}{25} + \frac{y^2}{9} = 1 \\
x = -\frac{4}{9}y^2 + 4
\end{cases}
$$

Dall'equazione della parabola è possibile isolare il termine $y^2$:

$$
x - 4 = -\frac{4}{9}y^2 \implies y^2 = -\frac{9}{4}(x - 4) \implies y^2 = 9 - \frac{9}{4}x
$$

Sostituiamo questa espressione per $y^2$ nell'equazione dell'ellisse:

$$
\frac{x^2}{25} + \frac{9 - \frac{9}{4}x}{9} = 1
$$

Dividendo singolarmente per $9$ all'interno della seconda frazione:

$$
\frac{x^2}{25} + 1 - \frac{1}{4}x = 1
$$

Semplificando il termine $1$ in entrambi i membri:

$$
\frac{x^2}{25} - \frac{1}{4}x = 0
$$

Raccogliamo la variabile $x$:

$$
x \left( \frac{x}{25} - \frac{1}{4} \right) = 0
$$

Otteniamo due possibili soluzioni per l'ascissa $x$:

- **Prima soluzione ($x = 0$):**
Sostituendo $x = 0$ nell'espressione per $y^2$:

$$
y^2 = 9 - \frac{9}{4}(0) = 9 \implies y = \pm 3
$$

Questo produce i punti di intersezione:

$$
B_1(0, -3) \quad \text{e} \quad B_2(0, 3)
$$

- **Seconda soluzione ($\frac{x}{25} - \frac{1}{4} = 0 \implies x = \frac{25}{4}$):**
Sostituendo $x = \frac{25}{4}$ nell'espressione per $y^2$:

$$
y^2 = 9 - \frac{9}{4}\left(\frac{25}{4}\right) = 9 - \frac{225}{16} = \frac{144 - 225}{16} = -\frac{81}{16}
$$

In questo caso, poiché $y^2$ assume un valore strettamente negativo, non esistono soluzioni reali per l'ordinata $y$.

Gli unici punti reali di intersezione tra le due coniche sono dunque:

$$
B_1(0, -3) \quad \text{e} \quad B_2(0, 3)
$$
