---
year: 3
macro_area: "Equazioni e disequazioni di grado superiore"
topic: "Equazioni biquadratiche"
difficulty: 5
ai_generated: true
tags:
  - "equazioni biquadratiche"
  - "parametro"
  - "progressione aritmetica"
  - "grado superiore"
---
# Problem Text
Determina tutti i valori del parametro reale $k$ per i quali l'equazione biquadratica

$$
x^4 - 2(k+1)x^2 + (k-1)^2 = 0
$$

ammette quattro radici reali distinte $x_1 < x_2 < x_3 < x_4$ in progressione aritmetica, ossia tali che la differenza tra due radici consecutive sia costante ($x_4 - x_3 = x_3 - x_2 = x_2 - x_1$).

# Solution
Pongo $t = x^2$ con $t \ge 0$. L'equazione ausiliaria di secondo grado in $t$ è:

$$
t^2 - 2(k+1)t + (k-1)^2 = 0
$$

Affinché l'equazione biquadratica ammetta quattro radici reali distinte, l'equazione ausiliaria deve avere due soluzioni reali distinte e strettamente positive $t_1 > t_2 > 0$.

Imponiamo che il discriminante ridotto sia positivo:

$$
\frac{\Delta}{4} = (k+1)^2 - (k-1)^2 = 4k > 0 \implies k > 0
$$

Per le relazioni di Viète, la somma e il prodotto delle soluzioni dell'ausiliaria devono essere positivi:

$$
t_1 + t_2 = 2(k+1) > 0 \implies k > -1
$$

$$
t_1 t_2 = (k-1)^2 > 0 \implies k \neq 1
$$

Quindi il parametro deve appartenere all'insieme $k \in (0, 1) \cup (1, +\infty)$.

Risolvendo l'equazione ausiliaria:

$$
t_{1,2} = (k+1) \pm \sqrt{4k} = (\sqrt{k} \pm 1)^2
$$

Ponendo $t_1 > t_2$, abbiamo:

$$
t_1 = (\sqrt{k} + 1)^2, \quad t_2 = (\sqrt{k} - 1)^2
$$

Le quattro soluzioni ordinate dell'equazione originaria sono:

$$
x_1 = -\sqrt{t_1}, \quad x_2 = -\sqrt{t_2}, \quad x_3 = \sqrt{t_2}, \quad x_4 = \sqrt{t_1}
$$

La condizione di progressione aritmetica impone che $x_4 - x_3 = x_3 - x_2$:

$$
\sqrt{t_1} - \sqrt{t_2} = 2\sqrt{t_2} \implies \sqrt{t_1} = 3\sqrt{t_2} \implies t_1 = 9 t_2
$$

Sostituendo le espressioni di $t_1$ e $t_2$:

$$
(\sqrt{k} + 1)^2 = 9(\sqrt{k} - 1)^2 \implies \sqrt{k} + 1 = 3|\sqrt{k} - 1|
$$

Distinguiamo i due casi:

1. Se $k > 1$, si ha $|\sqrt{k} - 1| = \sqrt{k} - 1$:

$$
\sqrt{k} + 1 = 3(\sqrt{k} - 1) \implies 2\sqrt{k} = 4 \implies \sqrt{k} = 2 \implies k = 4
$$

2. Se $0 < k < 1$, si ha $|\sqrt{k} - 1| = 1 - \sqrt{k}$:

$$
\sqrt{k} + 1 = 3(1 - \sqrt{k}) \implies 4\sqrt{k} = 2 \implies \sqrt{k} = \frac{1}{2} \implies k = \frac{1}{4}
$$

I valori del parametro $k$ che soddisfano le condizioni richieste sono $k = \frac{1}{4}$ e $k = 4$.
