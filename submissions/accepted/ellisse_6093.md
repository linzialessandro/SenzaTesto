---
year: 3
macro_area: "Geometria Analitica"
topic: "Ellisse"
difficulty: 5
ai_generated: true
tags:
  - "ellisse"
  - "eccentricit\u00e0"
  - "fuochi"
  - "geometria analitica"
  - "dimostrazione"
  - "triangolo focale"
---
# Problem Text
Data l'ellisse $\mathcal{E}$ di equazione canonica

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

con $a > b > 0$ e fuochi $F_1, F_2$, dimostra che esiste un punto $P \in \mathcal{E}$ tale che il triangolo $F_1 P F_2$ sia rettangolo in $P$ se e solo se l'eccentricità $e$ dell'ellisse soddisfa la condizione $e > \frac{\sqrt{2}}{2}$, e calcola l'area di tale triangolo in funzione di $b$.

# Solution
I fuochi dell'ellisse hanno coordinate $F_1(-c, 0)$ e $F_2(c, 0)$, con $c = \sqrt{a^2 - b^2}$.

Un punto $P(x, y)$ forma un triangolo $F_1 P F_2$ rettangolo in $P$ se e solo se appartiene alla circonferenza di diametro $F_1 F_2$, centrata nell'origine e di raggio $c$:

$$
x^2 + y^2 = c^2
$$

Determiniamo le intersezioni tra l'ellisse e la circonferenza considerando il sistema:

$$
\begin{cases}
x^2 + y^2 = c^2 \\
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
\end{cases}
$$

Sostituendo $x^2 = c^2 - y^2$ nell'equazione dell'ellisse si ottiene:

$$
\frac{c^2 - y^2}{a^2} + \frac{y^2}{b^2} = 1 \implies b^2 c^2 - b^2 y^2 + a^2 y^2 = a^2 b^2
$$

Raggruppando i termini in $y^2$ e ricordando che $a^2 - b^2 = c^2$ e $a^2 - c^2 = b^2$:

$$
y^2 (a^2 - b^2) = b^2 (a^2 - c^2) \implies y^2 c^2 = b^4 \implies y^2 = \frac{b^4}{c^2}
$$

da cui $y = \pm \frac{b^2}{c}$. Sostituendo $y^2$ nell'equazione della circonferenza si ricava $x^2$:

$$
x^2 = c^2 - \frac{b^4}{c^2} = \frac{c^4 - b^4}{c^2} = \frac{(c^2 - b^2)(c^2 + b^2)}{c^2} = \frac{(a^2 - 2b^2) a^2}{c^2}
$$

L'esistenza di punti $P$ reali (non giacenti sull'asse $y$) richiede che $x^2 > 0$, ovvero:

$$
a^2 - 2b^2 > 0 \iff \frac{b^2}{a^2} < \frac{1}{2}
$$

Esprimendo l'eccentricità come $e = \frac{c}{a} = \sqrt{1 - \frac{b^2}{a^2}}$, si ha $e^2 = 1 - \frac{b^2}{a^2}$. La condizione si traduce quindi in:

$$
1 - e^2 < \frac{1}{2} \iff e^2 > \frac{1}{2} \iff e > \frac{\sqrt{2}}{2}
$$

Infine, considerando la base $F_1 F_2 = 2c$ e l'altezza $|y| = \frac{b^2}{c}$, l'area del triangolo $F_1 P F_2$ è:

$$
\text{Area} = \frac{1}{2} \cdot 2c \cdot \frac{b^2}{c} = b^2
$$
