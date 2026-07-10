---
year: 3
macro_area: Geometria Analitica
topic: la retta
difficulty: 4
tags:
  - intersezioni
  - triangolo
  - area
ai_generated: true
---
# Problem Text
Determina l'area del triangolo formato dall'intersezione delle rette $r: 2x - y + 1 = 0$, $s: x + y - 4 = 0$ e dall'asse delle ascisse ($y=0$).

# Solution
Troviamo le coordinate dei tre vertici del triangolo, intersecando le rette a due a due.

**Vertice A (intersezione tra $r$ e l'asse $x$):**
Mettiamo a sistema l'equazione della retta $r$ con l'equazione dell'asse $x$ ($y=0$):
$$
\begin{cases} 2x - y + 1 = 0 \\ y = 0 \end{cases} \implies 2x + 1 = 0 \implies x = -\frac{1}{2}
$$
Il vertice $A$ ha coordinate $\left(-\frac{1}{2}, 0\right)$.

**Vertice B (intersezione tra $s$ e l'asse $x$):**
Mettiamo a sistema l'equazione della retta $s$ con $y=0$:
$$
\begin{cases} x + y - 4 = 0 \\ y = 0 \end{cases} \implies x - 4 = 0 \implies x = 4
$$
Il vertice $B$ ha coordinate $(4, 0)$.

**Vertice C (intersezione tra $r$ e $s$):**
Mettiamo a sistema le equazioni delle due rette:
$$
\begin{cases} 2x - y + 1 = 0 \\ x + y - 4 = 0 \end{cases}
$$
Sommando membro a membro le due equazioni (metodo di riduzione):
$$
(2x + x) + (-y + y) + (1 - 4) = 0 \implies 3x - 3 = 0 \implies x = 1
$$
Sostituendo $x=1$ nella seconda equazione: $1 + y - 4 = 0 \implies y = 3$.
Il vertice $C$ ha coordinate $(1, 3)$.

**Calcolo dell'area:**
Poiché la base $AB$ del triangolo giace sull'asse $x$, la sua lunghezza è la differenza in valore assoluto delle ascisse di $A$ e $B$:
$$
b = \left| 4 - \left(-\frac{1}{2}\right) \right| = \left| 4 + \frac{1}{2} \right| = \frac{9}{2}
$$
L'altezza relativa a questa base è semplicemente il valore assoluto dell'ordinata del vertice $C$, poiché è la distanza di $C$ dall'asse $x$:
$$
h = |y_C| = 3
$$
L'area del triangolo è:
$$
\text{Area} = \frac{1}{2} \cdot b \cdot h = \frac{1}{2} \cdot \frac{9}{2} \cdot 3 = \frac{27}{4}
$$
