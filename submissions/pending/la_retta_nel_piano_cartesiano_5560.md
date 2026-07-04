---
year: 3
macro_area: "Geometria analitica"
topic: "La retta nel piano cartesiano"
difficulty: 3
tags:
  - "fascio di rette"
  - "distanza punto retta"
  - "messa in comune delle rette"
  - "allineamento punti"
  - "geometria analitica piano"
---
# Problem Text
Si consideri il fascio di rette generico del piano cartesiano descritto dall'equazione dipendente dal parametro reale $k$:

$$
r_k: (k+2)x + (1-k)y + 3k - 9 = 0
$$

1. Dimostrare che il fascio è proprio e determinare le coordinate del suo centro $C$.
2. Determinare le equazioni delle rette del fascio che hanno distanza pari a $\sqrt{5}$ dal punto $P(6, 2)$.
3. Siano $A$ e $B$ i punti di intersezione della retta $r_0$ (corrispondente a $k=0$) con gli assi cartesiani. Spiegare attraverso considerazioni puramente teoriche, senza ricorrere al calcolo di distanze o di coefficienti angolari, perché i punti $A$, $B$ e il centro $C$ del fascio sono necessariamente allineati.

# Solution
**Soluzione della richiesta 1**

Per analizzare la natura del fascio di rette, isoliamo il parametro $k$ nell'equazione generale:

$$
(k+2)x + (1-k)y + 3k - 9 = 0 \implies kx + 2x + y - ky + 3k - 9 = 0
$$

Raggruppiamo i termini con il parametro $k$ e i termini noti:

$$
(2x + y - 9) + k(x - y + 3) = 0
$$

L'equazione rappresenta la combinazione lineare di due rette generatrici:

$$
g_1: 2x + y - 9 = 0
$$

$$
g_2: x - y + 3 = 0
$$

Poiché le due generatrici non sono parallele (infatti i loro coefficienti angolari sono rispettivamente $m_1 = -2$ e $m_2 = 1$), esse si intersecano in un unico punto. Il fascio è dunque un fascio proprio, il cui centro $C$ è il punto di intersezione delle due rette generatrici. 

Risolviamo il sistema lineare composto dalle loro equazioni:

$$
\begin{cases}
2x + y - 9 = 0 \\
x - y + 3 = 0
\end{cases}
$$

Sommando membro a membro le due equazioni otteniamo:

$$
3x - 6 = 0 \implies x = 2
$$

Sostituendo $x = 2$ nella seconda equazione:

$$
2 - y + 3 = 0 \implies y = 5
$$

Le coordinate del centro del fascio sono dunque:

$$
C(2, 5)
$$

---

**Soluzione della richiesta 2**

Per trovare le rette del fascio aventi distanza $\sqrt{5}$ dal punto $P(6, 2)$, applichiamo la formula della distanza di un punto da una retta in forma implicita:

$$
d(P, r_k) = \frac{|a x_P + b y_P + c|}{\sqrt{a^2 + b^2}}
$$

Sostituendo $a = k+2$, $b = 1-k$, $c = 3k-9$ e le coordinate di $P(6, 2)$:

$$
d(P, r_k) = \frac{|(k+2)6 + (1-k)2 + 3k - 9|}{\sqrt{(k+2)^2 + (1-k)^2}}
$$

Sviluppiamo il numeratore e il denominatore:

$$
d(P, r_k) = \frac{|6k + 12 + 2 - 2k + 3k - 9|}{\sqrt{k^2 + 4k + 4 + 1 - 2k + k^2}} = \frac{|7k + 5|}{\sqrt{2k^2 + 2k + 5}}
$$

Imponiamo che tale distanza sia pari a $\sqrt{5}$:

$$
\frac{|7k + 5|}{\sqrt{2k^2 + 2k + 5}} = \sqrt{5}
$$

Poiché il denominatore è sempre strettamente positivo (il radicando ha $\Delta = 4 - 40 < 0$), possiamo elevare entrambi i membri al quadrato:

$$
\frac{(7k + 5)^2}{2k^2 + 2k + 5} = 5 \implies (7k + 5)^2 = 5(2k^2 + 2k + 5)
$$

$$
49k^2 + 70k + 25 = 10k^2 + 10k + 25
$$

Semplificando e portando tutti i termini a sinistra:

$$
39k^2 + 60k = 0 \implies 3k(13k + 20) = 0
$$

Le soluzioni per il parametro $k$ sono:

$$
k_1 = 0 \quad \text{e} \quad k_2 = -\frac{20}{13}
$$

Sostituiamo ora questi valori nell'equazione del fascio per determinare le equazioni delle rette:

* **Caso $k = 0$**:

$$
2x + y - 9 = 0
$$

* **Caso $k = -\frac{20}{13}$**:

$$
\left(-\frac{20}{13} + 2\right)x + \left(1 + \frac{20}{13}\right)y + 3\left(-\frac{20}{13}\right) - 9 = 0 \implies \frac{6}{13}x + \frac{33}{13}y - \frac{177}{13} = 0
$$

Moltiplicando l'equazione per $13$ e dividendo successivamente per $3$, otteniamo:

$$
2x + 11y - 59 = 0
$$

*Nota di verifica sulla retta esclusa dal fascio:*
La formula parametrica esclude la retta generatrice limitante $g_2: x - y + 3 = 0$ (corrispondente al limite per $k \to \infty$). Calcoliamo la distanza di $P$ da $g_2$:

$$
d(P, g_2) = \frac{|1 \cdot 6 - 1 \cdot 2 + 3|}{\sqrt{1^2 + (-1)^2}} = \frac{7}{\sqrt{2}} \neq \sqrt{5}
$$

La retta esclusa non soddisfa la condizione. Di conseguenza, le uniche due soluzioni sono le rette trovate per $k_1$ e $k_2$.

---

**Soluzione della richiesta 3**

La spiegazione teorica si basa sulle definizioni geometriche degli elementi in gioco:

1. Per definizione di fascio proprio di rette, tutte le rette che lo costituiscono passano necessariamente per il centro del fascio stesso.
2. La retta $r_0$ si ottiene ponendo il valore specifico $k=0$ nell'equazione del fascio. Pertanto, $r_0$ appartiene al fascio medesimo e, di conseguenza, passa per il suo centro $C$.
3. I punti $A$ e $B$ sono definiti come le intersezioni della retta $r_0$ con gli assi cartesiani. Per costruzione, quindi, sia $A$ sia $B$ giacciono sulla retta $r_0$.
4. Poiché il centro $C$, il punto $A$ e il punto $B$ sono tutti e tre punti appartenenti alla medesima retta $r_0$, essi sono necessariamente allineati.
