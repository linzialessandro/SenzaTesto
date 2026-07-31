---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 3
ai_generated: true
tags:
  - "La retta"
  - "Fasci di rette"
  - "Perpendicolarit\u00e0"
  - "Intersezione tra rette"
  - "Area nel piano cartesiano"
---
# Problem Text
Nel fascio proprio di rette di equazione
$$ (k+1)x + (3-k)y - k - 5 = 0 $$
con $k \in \mathbb{R}$, determina la retta $r$ perpendicolare alla retta $s$ di equazione $x - 2y = 0$ e calcola l'area del triangolo formato dalle rette $r$, $s$ e dall'asse delle ordinate.

# Solution
Scriviamo l'equazione della retta $s$ in forma esplicita per individuarne il coefficiente angolare:
$$ y = \frac{1}{2}x \implies m_s = \frac{1}{2} $$

La retta $r$ deve essere perpendicolare a $s$, pertanto il suo coefficiente angolare $m_r$ deve soddisfare la condizione di perpendicolarità:
$$ m_r = -\frac{1}{m_s} = -2 $$

Dal fascio di rette ricaviamo il coefficiente angolare generale in funzione di $k$:
$$ m(k) = -\frac{k+1}{3-k} $$

Imponiamo $m(k) = -2$:
$$ -\frac{k+1}{3-k} = -2 \implies k + 1 = 2(3 - k) \implies k + 1 = 6 - 2k \implies 3k = 5 \implies k = \frac{5}{3} $$

Sostituendo $k = \frac{5}{3}$ nell'equazione del fascio:
$$ \left(\frac{5}{3}+1\right)x + \left(3-\frac{5}{3}\right)y - \frac{5}{3} - 5 = 0 \implies \frac{8}{3}x + \frac{4}{3}y - \frac{20}{3} = 0 $$

Moltiplicando l'equazione per $\frac{3}{4}$, otteniamo la retta $r$:
$$ 2x + y - 5 = 0 $$

Per calcolare l'area del triangolo, individuiamo i vertici:
1. Il punto di intersezione $P$ tra $r$ e $s$:

$$
\begin{cases} 2x + y - 5 = 0 \\ x - 2y = 0 \end{cases} \implies \begin{cases} 2(2y) + y - 5 = 0 \\ x = 2y \end{cases} \implies \begin{cases} 5y = 5 \implies y = 1 \\ x = 2 \end{cases} \implies P(2; 1)
$$

2. L'intersezione di $r$ con l'asse $y$ ($x=0$):
$$ 2(0) + y - 5 = 0 \implies A(0; 5) $$

3. L'intersezione di $s$ con l'asse $y$ ($x=0$):
$$ 0 - 2y = 0 \implies B(0; 0) $$

La base $AB$ situata sull'asse $y$ ha lunghezza:
$$ b = |y_A - y_B| = |5 - 0| = 5 $$

L'altezza $h$ relativa a tale base equivale al valore assoluto dell'ascissa di $P$:
$$ h = |x_P| = 2 $$

L'area del triangolo è:
$$ \text{Area} = \frac{b \cdot h}{2} = \frac{5 \cdot 2}{2} = 5 $$
