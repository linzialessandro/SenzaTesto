---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 3
ai_generated: true
tags:
  - "retta"
  - "coefficiente angolare"
  - "parallelismo"
  - "perpendicolarit\u00e0"
  - "distanza punto-retta"
  - "fascio di rette"
---
# Problem Text
Nel piano cartesiano, considera la retta $r$ di equazione $2x - y + 3 = 0$ e il punto $P(4, -1)$. Determina l'equazione della retta $s$ passante per $P$, parallela a $r$. Sia $Q$ il punto di intersezione tra $r$ e la retta $t$ di equazione $x + 2y - 1 = 0$. Verifica che $s$ e $t$ sono perpendicolari. Calcola poi l'area del triangolo $PQR$, dove $R$ è il punto di intersezione tra $s$ e $t$.

# Solution
La retta $r$: $2x - y + 3 = 0$ ha coefficiente angolare $m_r = 2$ (dalla forma esplicita $y = 2x + 3$). Poiché $s$ è parallela a $r$, $m_s = 2$. La retta $s$ passante per $P(4,-1)$ ha equazione $y + 1 = 2(x - 4)$, quindi $y = 2x - 9$. In forma implicita: $2x - y - 9 = 0$.

Intersezione $Q$ tra $r$ e $t$: risolviamo il sistema

$$
\begin{cases}
2x - y + 3 = 0 \\
x + 2y - 1 = 0
\end{cases}
$$

Dalla prima $y = 2x + 3$; sostituendo nella seconda: $x + 2(2x + 3) - 1 = 0 \Rightarrow x + 4x + 6 - 1 = 0 \Rightarrow 5x + 5 = 0 \Rightarrow x = -1$. Allora $y = 2(-1)+3 = 1$. Quindi $Q(-1, 1)$.

La retta $t$ ha coefficiente angolare $m_t = -\frac{1}{2}$ (da $y = -\frac{1}{2}x + \frac{1}{2}$). Il prodotto $m_s \cdot m_t = 2 \cdot \left(-\frac{1}{2}\right) = -1$, quindi $s$ e $t$ sono perpendicolari.

Intersezione $R$ tra $s$ e $t$: dalla $s$: $y = 2x - 9$; dalla $t$: $y = -\frac{1}{2}x + \frac{1}{2}$. Uguagliando: $2x - 9 = -\frac{1}{2}x + \frac{1}{2}$. Moltiplicando per 2: $4x - 18 = -x + 1 \Rightarrow 5x = 19 \Rightarrow x = \frac{19}{5}$. Allora $y = 2\cdot \frac{19}{5} - 9 = \frac{38}{5} - \frac{45}{5} = -\frac{7}{5}$. Quindi $R\left(\frac{19}{5}, -\frac{7}{5}\right)$.

Ora calcoliamo l'area del triangolo $PQR$ con $P(4,-1)$, $Q(-1,1)$, $R\left(\frac{19}{5}, -\frac{7}{5}\right)$. Usiamo la formula: 

$$
\text{Area} = \frac{1}{2} |x_P(y_Q - y_R) + x_Q(y_R - y_P) + x_R(y_P - y_Q)|
$$

Calcoliamo:

$$
x_P(y_Q - y_R) = 4\left(1 - \left(-\frac{7}{5}\right)\right) = 4\left(1 + \frac{7}{5}\right) = 4 \cdot \frac{12}{5} = \frac{48}{5}
$$

$$
x_Q(y_R - y_P) = -1\left(-\frac{7}{5} - (-1)\right) = -1\left(-\frac{7}{5} + 1\right) = -1\left(-\frac{2}{5}\right) = \frac{2}{5}
$$

$$
x_R(y_P - y_Q) = \frac{19}{5}\left(-1 - 1\right) = \frac{19}{5}(-2) = -\frac{38}{5}
$$

La somma: $\frac{48}{5} + \frac{2}{5} - \frac{38}{5} = \frac{12}{5}$. Il valore assoluto è $\frac{12}{5}$, quindi l'area è $\frac{1}{2} \cdot \frac{12}{5} = \frac{6}{5}$.
