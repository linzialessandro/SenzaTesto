---
year: 3
macro_area: "Geometria Analitica"
topic: "La retta"
difficulty: 5
ai_generated: true
tags:
  - "la retta"
  - "fascio di rette"
  - "distanza punto-retta"
  - "perpendicolarita"
  - "parametri"
---
# Problem Text
Nel piano cartesiano è dato il fascio di rette di equazione
$$ (k+2)x + (1-k)y - 3k - 3 = 0, \quad k \in \mathbb{R} $$
Determina il valore del parametro $k$ corrispondente alla retta del fascio che si trova alla massima distanza dal punto $P(4, 1)$, fornendo l'equazione di tale retta in forma implicita e giustificando il risultato mediante la relazione di perpendicolarità.

# Solution
Riscriviamo l'equazione del fascio isolando il parametro $k$:
$$ 2x + y - 3 + k(x - y - 3) = 0 $$

Il centro $C$ del fascio si trova risolvendo il sistema formato dalle generatrici:

$$
\begin{cases} 2x + y - 3 = 0 \\ x - y - 3 = 0 \end{cases}
$$

Sommando le due equazioni si ottiene $3x - 6 = 0 \implies x = 2$. Sostituendo nella seconda equazione si trova $y = -1$. Il centro del fascio è dunque $C(2, -1)$.

Per qualsiasi retta $r$ del fascio passante per $C$, la distanza $d(P, r)$ è un cateto del triangolo rettangolo avente come ipotenusa il segmento $PC$. Pertanto vale la disuguaglianza $d(P, r) \le PC$. La distanza massima si ottiene quando la retta $r$ è perpendicolare al segmento $PC$.

Calcoliamo il coefficiente angolare della retta passante per $P$ e $C$:
$$ m_{PC} = \frac{y_P - y_C}{x_P - x_C} = \frac{1 - (-1)}{4 - 2} = 1 $$

La retta $r$ del fascio deve essere perpendicolare a $PC$, quindi il suo coefficiente angolare deve essere:
$$ m_r = -\frac{1}{m_{PC}} = -1 $$

Il coefficiente angolare della generica retta del fascio (con $k \neq 1$) è:
$$ m(k) = \frac{k+2}{k-1} $$

Imponiamo la condizione $m(k) = -1$:
$$ \frac{k+2}{k-1} = -1 \implies k + 2 = -k + 1 \implies 2k = -1 \implies k = -\frac{1}{2} $$

Sostituendo $k = -\frac{1}{2}$ nell'equazione del fascio:
$$ \left(-\frac{1}{2} + 2\right)x + \left(1 + \frac{1}{2}\right)y + \frac{3}{2} - 3 = 0 \implies \frac{3}{2}x + \frac{3}{2}y - \frac{3}{2} = 0 $$

Moltiplicando per $\frac{2}{3}$, l'equazione implicita della retta richiesta è:
$$ x + y - 1 = 0 $$
(La massima distanza è pari a $PC = 2\sqrt{2}$).
