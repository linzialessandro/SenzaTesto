---
year: 4
macro_area: "Algebra ed Equazioni"
topic: "Esponenziali e logaritmi"
difficulty: 5
ai_generated: true
tags:
  - "logaritmi"
  - "esponenziali"
  - "equazioni parametriche"
  - "relazioni di Vi\u00e8te"
  - "campo di esistenza"
---
# Problem Text
Determina tutti i valori del parametro reale $k$ per i quali l'equazione:

$$
\log_2\left(4^x - k \cdot 2^{x+2} + 3k\right) = x + 1
$$

ammette due soluzioni reali distinte $x_1$ e $x_2$ tali che la loro somma soddisfi la condizione $x_1 + x_2 > 3$.

# Solution
Per la definizione di logaritmo, l'equazione è equivalente a:

$$
4^x - k \cdot 2^{x+2} + 3k = 2^{x+1}
$$

Poiché $2^{x+1} > 0$ per ogni $x \in \mathbb{R}$, l'argomento del logaritmo risulta strettamente positivo per qualunque eventuale soluzione, rendendo le condizioni di esistenza automaticamente soddisfatte.

Riscriviamo l'equazione ponendo in evidenza le potenze di base $2$:

$$
(2^x)^2 - 4k \cdot 2^x + 3k = 2 \cdot 2^x \iff (2^x)^2 - 2(2k + 1) \cdot 2^x + 3k = 0
$$

Effettuando la sostituzione $t = 2^x$ (con la condizione $t > 0$), si ottiene l'equazione quadratica:

$$
t^2 - 2(2k + 1)t + 3k = 0
$$

Affinché l'equazione in $x$ ammetta due soluzioni reali distinte $x_1, x_2$, l'equazione in $t$ deve ammettere due radici reali distinte e strettamente positive $t_1, t_2 > 0$.

Le tre condizioni per avere due radici $t_1, t_2 > 0$ distinte sono:
1. Discriminante ridotto strettamente positivo:

$$
\Delta' = (2k + 1)^2 - 3k = 4k^2 + k + 1 > 0
$$

Poiché il trinomio $4k^2 + k + 1$ ha discriminante negativo ($\Delta_k = -15 < 0$) e primo coefficiente positivo, la disequazione $\Delta' > 0$ è verificata per ogni $k \in \mathbb{R}$.

2. Prodotto delle radici positivo (teorema di Viète):

$$
P = t_1 \cdot t_2 = 3k > 0 \iff k > 0
$$

3. Somma delle radici positiva:

$$
S = t_1 + t_2 = 2(2k + 1) > 0 \iff k > -\frac{1}{2}
$$

Dall'intersezione di queste condizioni si ricava $k > 0$.

Calcoliamo ora la somma delle soluzioni $x_1 + x_2$ sfruttando le proprietà delle potenze e dei logaritmi:

$$
t_1 \cdot t_2 = 2^{x_1} \cdot 2^{x_2} = 2^{x_1 + x_2} = 3k \implies x_1 + x_2 = \log_2(3k)
$$

Imponendo la richiesta del problema $x_1 + x_2 > 3$:

$$
\log_2(3k) > 3 \iff 3k > 2^3 \iff k > \frac{8}{3}
$$

Intersecando $k > \frac{8}{3}$ con la condizione di ammissibilità $k > 0$, si ottiene l'insieme finale dei valori del parametro:

$$
k \in \left(\frac{8}{3}, +\infty\right)
$$
