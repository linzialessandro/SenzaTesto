---
year: 2
macro_area: Algebra
topic: Disequazioni fratte e di grado superiore
difficulty: 3
tags:
  - disequazioni fratte
  - disequazioni di grado superiore
  - metodo dei segni
  - scomposizione in fattori
  - condizioni di esistenza
ai_generated: true
---
# Problem Text
Risolvere la seguente disequazione razionale fratta:
$$\frac{x^3 - x^2 - 4x + 4}{2x^2 - 5x + 2} \le 0$$

# Solution
Per risolvere la disequazione, procediamo attraverso l'analisi del dominio, la scomposizione in fattori di numeratore e denominatore, e lo studio del segno della frazione.

1. **Condizioni di Esistenza (C.E.):**
Il denominatore della frazione non può mai annullarsi. Poniamo quindi:
$$2x^2 - 5x + 2 \neq 0$$
Risolviamo l'equazione associata $2x^2 - 5x + 2 = 0$ utilizzando la formula del discriminante:
$$\Delta = (-5)^2 - 4 \cdot 2 \cdot 2 = 25 - 16 = 9$$
Le radici sono:
$$x_{1,2} = \frac{5 \pm \sqrt{9}}{2 \cdot 2} = \frac{5 \pm 3}{4} \implies x_1 = \frac{1}{2}, \quad x_2 = 2$$
Pertanto, le condizioni di esistenza sono:
$$x \neq \frac{1}{2} \quad \text{e} \quad x \neq 2$$

2. **Scomposizione in fattori di numeratore e denominatore:**
* Scomponiamo il numeratore $P(x) = x^3 - x^2 - 4x + 4$ mediante raccoglimento parziale:
$$P(x) = x^2(x - 1) - 4(x - 1) = (x^2 - 4)(x - 1)$$
Riconoscendo la differenza di quadrati $x^2 - 4 = (x - 2)(x + 2)$, otteniamo:
$$P(x) = (x - 2)(x + 2)(x - 1)$$

* Scomponiamo il denominatore $Q(x) = 2x^2 - 5x + 2$ utilizzando le radici precedentemente trovate:
$$Q(x) = 2\left(x - \frac{1}{2}\right)(x - 2) = (2x - 1)(x - 2)$$

La disequazione originaria si riscrive come:
$$\frac{(x - 2)(x + 2)(x - 1)}{(2x - 1)(x - 2)} \le 0$$

Sotto le ipotesi delle condizioni di esistenza ($x \neq 2$), possiamo semplificare il fattore comune $(x - 2)$ presente al numeratore e al denominatore, riducendo la disequazione alla forma equivalente:
$$\frac{(x + 2)(x - 1)}{2x - 1} \le 0 \quad \text{con} \quad x \neq 2$$

3. **Studio dei segni dei singoli fattori:**
Studiamo ora dove ciascun fattore è strettamente maggiore o uguale a zero:
* Primo fattore del numeratore:
$$N_1: x + 2 \ge 0 \implies x \ge -2$$
* Secondo fattore del numeratore:
$$N_2: x - 1 \ge 0 \implies x \ge 1$$
* Denominatore:
$$D: 2x - 1 > 0 \implies x > \frac{1}{2}$$

4. **Costruzione della tabella dei segni:**
Riportiamo i risultati su un grafico dei segni per calcolare il segno complessivo della frazione negli intervalli delimitati dai capisaldi $-2$, $\frac{1}{2}$, $1$ e tenendo conto dell'esclusione di $2$:

* Per $x < -2$:
  * $N_1$ è negativo $(-)$
  * $N_2$ è negativo $(-)$
  * $D$ è negativo $(-)$
  * Segno complessivo della frazione: $\frac{(-) \cdot (-)}{(-)} = (-)$

* Per $x = -2$: la frazione si annulla ($0$).

* Per $-2 < x < \frac{1}{2}$:
  * $N_1$ è positivo $(+)$
  * $N_2$ è negativo $(-)$
  * $D$ è negativo $(-)$
  * Segno complessivo della frazione: $\frac{(+) \cdot (-)}{(-)} = (+)$

* Per $x = \frac{1}{2}$: la frazione non è definita (C.E.).

* Per $\frac{1}{2} < x < 1$:
  * $N_1$ è positivo $(+)$
  * $N_2$ è negativo $(-)$
  * $D$ è positivo $(+)$
  * Segno complessivo della frazione: $\frac{(+) \cdot (-)}{(+)} = (-)$

* Per $x = 1$: la frazione si annulla ($0$).

* Per $1 < x < 2$:
  * $N_1$ è positivo $(+)$
  * $N_2$ è positivo $(+)$
  * $D$ è positivo $(+)$
  * Segno complessivo della frazione: $\frac{(+) \cdot (+)}{(+)} = (+)$

* Per $x = 2$: la frazione non è definita (C.E.).

* Per $x > 2$:
  * $N_1$, $N_2$ e $D$ sono tutti positivi $(+)$
  * Segno complessivo della frazione: $(+)$

5. **Determinazione dell'intervallo delle soluzioni:**
La disequazione richiede che il segno della frazione sia minore o uguale a zero ($\le 0$). Dall'analisi della tabella dei segni, gli intervalli favorevoli (inclusi gli estremi in cui la frazione si annulla) sono:
$$x \le -2 \quad \text{oppure} \quad \frac{1}{2} < x \le 1$$

In conclusione, l'insieme delle soluzioni $S$ è dato da:
$$S = \{ x \in \mathbb{R} \mid x \le -2 \;\lor\; \frac{1}{2} < x \le 1 \}$$

In notazione ad intervalli:
$$S = (-\infty, -2] \cup \left(\frac{1}{2}, 1\right]$$
