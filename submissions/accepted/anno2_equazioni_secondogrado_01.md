---
year: 2
macro_area: Equazioni di secondo grado
topic: Equazioni parametriche
difficulty: 4
tags:
  - equazioni parametriche
  - relazioni radici coefficienti
ai_generated: true
---
# Problem Text

Data l'equazione di secondo grado in $x$, parametrica in $k$:
$$
x^2 - (k-1)x + (k-2) = 0
$$
Determinare per quali valori di $k \in \mathbb{R}$ l'equazione ammette:
a) due radici reali distinte;
b) due radici la cui somma è pari a 4;
c) due radici il cui prodotto è pari a 0.

# Solution

**a) Due radici reali distinte**
Affinché l'equazione abbia due radici reali distinte, il discriminante $\Delta$ deve essere strettamente maggiore di zero.
Calcoliamo $\Delta = b^2 - 4ac$:
$$
\Delta = [-(k-1)]^2 - 4(1)(k-2) = (k-1)^2 - 4k + 8 = k^2 - 2k + 1 - 4k + 8 = k^2 - 6k + 9
$$
Notiamo che $\Delta = (k-3)^2$.
Imponiamo $\Delta > 0$:
$$
(k-3)^2 > 0
$$
Un quadrato è strettamente positivo per ogni valore reale eccetto quando la base si annulla. Quindi la disuguaglianza è verificata per $k \neq 3$.
*Risposta a):* L'equazione ammette due radici reali distinte per $k \in \mathbb{R} \setminus \{3\}$.

**b) Due radici la cui somma è pari a 4**
La somma delle radici di un'equazione $ax^2 + bx + c = 0$ è data da $s = x_1 + x_2 = -\frac{b}{a}$.
Nel nostro caso, $-\frac{-(k-1)}{1} = k-1$.
Imponiamo $s = 4$:
$$
k - 1 = 4 \implies k = 5
$$
Dobbiamo verificare che per $k=5$ le radici siano reali ($\Delta \ge 0$). Essendo $k \neq 3$, questa condizione è soddisfatta.
*Risposta b):* $k = 5$.

**c) Due radici il cui prodotto è pari a 0**
Il prodotto delle radici è $p = x_1 \cdot x_2 = \frac{c}{a}$.
Nel nostro caso, $p = k - 2$.
Imponiamo $p = 0$:
$$
k - 2 = 0 \implies k = 2
$$
Per $k=2$ il discriminante è $(2-3)^2 = 1 > 0$, quindi le radici sono reali.
*Risposta c):* $k = 2$.
