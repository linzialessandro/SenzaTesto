---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta nel piano cartesiano"
difficulty: 2
ai_generated: true
tags:
  - "retta"
  - "fascio improprio"
  - "intersezione"
  - "distanza punto-retta"
  - "geometria analitica"
---
# Problem Text
Dato il fascio improprio di rette di equazione $y = 2x + q$, determina l'equazione della retta $r$ del fascio passante per il punto $P$, punto di intersezione delle due rette di equazioni $a: x + y - 5 = 0$ e $b: 3x - y - 3 = 0$. Calcola quindi la distanza del punto $A(1, -1)$ dalla retta $r$ trovata.

# Solution
Per determinare la retta $r$ e calcolare la distanza richiesta, seguiamo passo dopo passo i seguenti passaggi risolutivi:

1. **Determinazione del punto di intersezione $P$:**
Mettiamo a sistema le equazioni delle rette $a$ e $b$ per determinarne il punto comune:

$$
\begin{cases}
x + y - 5 = 0 \\
3x - y - 3 = 0
\end{cases}
$$

Utilizzando il metodo di addizione, sommiamo membro a membro le due equazioni:

$$
(x + 3x) + (y - y) + (-5 - 3) = 0 \implies 4x - 8 = 0 \implies x = 2
$$

Sostituiamo il valore di $x = 2$ nella prima equazione per trovare l'ordinata:

$$
2 + y - 5 = 0 \implies y = 3
$$

Il punto di intersezione è quindi $P(2, 3)$.

2. **Ricerca della retta $r$ del fascio:**
Le rette del fascio improprio hanno tutte lo stesso coefficiente angolare $m = 2$. Imponiamo il passaggio per il punto $P(2, 3)$ per determinare l'ordinata all'origine $q$:

$$
3 = 2(2) + q \implies 3 = 4 + q \implies q = -1
$$

L'equazione in forma esplicita della retta $r$ è:

$$
y = 2x - 1
$$

Per calcolare la distanza da un punto, è opportuno riscrivere la retta $r$ in forma implicita:

$$
2x - y - 1 = 0
$$

3. **Calcolo della distanza del punto $A(1, -1)$ dalla retta $r$:**
Applichiamo la formula della distanza di un punto da una retta nel piano cartesiano:

$$
d(A, r) = \frac{|a x_A + b y_A + c|}{\sqrt{a^2 + b^2}}
$$

Sostituendo le coordinate di $A(1, -1)$ e i coefficienti $a = 2$, $b = -1$, $c = -1$ della retta $r$, si ha:

$$
d(A, r) = \frac{|2(1) - 1(-1) - 1|}{\sqrt{2^2 + (-1)^2}} = \frac{|2 + 1 - 1|}{\sqrt{4 + 1}} = \frac{2}{\sqrt{5}}
$$

Razionalizzando la frazione per eliminare la radice al denominatore otteniamo:

$$
d(A, r) = \frac{2\sqrt{5}}{5}
$$
