---
year: 3
macro_area: "Geometria Analitica"
topic: "Iperbole e funzione omografica"
difficulty: 5
ai_generated: true
tags:
  - "iperbole"
  - "funzione omografica"
  - "asintoti"
  - "tangente"
  - "geometria analitica"
---
# Problem Text
Determinare i valori del parametro reale $k$ per cui le rette asintotiche della funzione omografica

$$
y = \frac{kx + 2}{x - 1}
$$

e la retta ad essa tangente nel suo punto di intersezione con l'asse $y$ delimitano un triangolo di area pari a $4$.

# Solution
Affinché l'equazione rappresenti un'iperbole equilatera non degenerata, il determinante $ad - bc$ deve essere diverso da zero:

$$
k(-1) - 2(1) \neq 0 \implies k \neq -2
$$

**1. Gli asintoti dell'iperbole**
Gli asintoti della funzione omografica sono la retta verticale $x = 1$ e la retta orizzontale $y = k$. Il loro punto di intersezione è il centro di simmetria $C(1, k)$.

**2. Equazione della retta tangente**
L'intersezione dell'iperbole con l'asse $y$ ($x = 0$) è il punto $P(0, -2)$. Il fascio di rette per $P$ ha equazione $y = mx - 2$.
Mettendo a sistema con l'iperbole:

$$
mx - 2 = \frac{kx + 2}{x - 1} \implies mx^2 - (m + k + 2)x = 0
$$

Poiché $x = 0$ è già una soluzione, la condizione di tangenza (due soluzioni reali e coincidenti $x = 0$) richiede l'annullamento del coefficiente del termine di primo grado:

$$
m + k + 2 = 0 \implies m = -(k + 2)
$$

La retta tangente $t$ ha quindi equazione $y = -(k + 2)x - 2$.

**3. Vertici del triangolo**
I tre vertici del triangolo formato dagli asintoti e dalla tangente $t$ sono:
- $C(1, k)$, intersezione tra i due asintoti.
- $Q(1, -k - 4)$, intersezione tra $x = 1$ e $t$.
- $R(-1, k)$, intersezione tra $y = k$ e $t$ (valida per $k \neq -2$).

**4. Calcolo dell'area e determinazione di $k$**
Il triangolo $CQR$ è rettangolo in $C$. Le lunghezze dei cateti sono:

$$
CR = |1 - (-1)| = 2
$$

$$
CQ = |k - (-k - 4)| = |2k + 4| = 2|k + 2|
$$

L'area del triangolo è:

$$
\text{Area} = \frac{1}{2} \cdot CR \cdot CQ = \frac{1}{2} \cdot 2 \cdot 2|k + 2| = 2|k + 2|
$$

Imponendo che l'area sia pari a $4$:

$$
2|k + 2| = 4 \implies |k + 2| = 2
$$

Da cui si ottengono due soluzioni:

$$
k + 2 = 2 \implies k = 0
$$

$$
k + 2 = -2 \implies k = -4
$$

Entrambi i valori sono accettabili in quanto diversi da $-2$.
