---
year: 5
macro_area: "Topologia e Funzioni"
topic: "Dominio, simmetrie e intersezioni con gli assi"
difficulty: 2
ai_generated: true
tags:
  - "dominio"
  - "parit\u00e0 e disparit\u00e0"
  - "intersezioni con gli assi"
  - "funzione logaritmica"
---
# Problem Text
Determinare il dominio di definizione, studiare le simmetrie (parità o disparità) e calcolare le coordinate dei punti di intersezione con gli assi cartesiani della funzione reale di variabile reale:

$$
f(x) = \frac{\ln(x^2 - 3)}{x}
$$

# Solution
La risoluzione si articola nei seguenti passaggi:

1. **Determinazione del dominio ($D$):**
Per l'esistenza della funzione dobbiamo imporre l'argomento del logaritmo strettamente positivo e il denominatore diverso da zero:

$$
\begin{cases}
x^2 - 3 > 0 \\
x \neq 0
\end{cases}
$$

Risolvendo la disequazione di secondo grado, otteniamo $x < -\sqrt{3}$ oppure $x > \sqrt{3}$. Poiché lo zero non appartiene a questi intervalli, il dominio è simmetrico rispetto all'origine ed è espresso da:

$$
D = (-\infty, -\sqrt{3}) \cup (\sqrt{3}, +\infty)
$$

2. **Studio della parità o disparità:**
Verifichiamo il comportamento della funzione in corrispondenza di $-x$, ricordando che il dominio $D$ è simmetrico:

$$
f(-x) = \frac{\ln((-x)^2 - 3)}{-x} = \frac{\ln(x^2 - 3)}{-x} = -\frac{\ln(x^2 - 3)}{x} = -f(x)
$$

Poiché $f(-x) = -f(x)$ per ogni $x \in D$, la funzione è **dispari**. Il suo grafico risulta simmetrico rispetto all'origine degli assi cartesiani.

3. **Intersezione con l'asse delle ordinate ($y$):**
Dovremmo porre $x = 0$. Tuttavia, poiché $0 \notin D$, non esiste alcuna intersezione con l'asse $y$.

4. **Intersezione con l'asse delle ascisse ($x$):**
Imponiamo $f(x) = 0$:

$$
\frac{\ln(x^2 - 3)}{x} = 0 \implies \ln(x^2 - 3) = 0
$$

Applicando la definizione di logaritmo, si ha:

$$
x^2 - 3 = 1 \implies x^2 = 4 \implies x = \pm 2
$$

Poiché sia $x = -2$ che $x = 2$ appartengono al dominio $D$ (essendo $2 > \sqrt{3} \approx 1.732$), la funzione interseca l'asse delle ascisse nei punti:

$$
A(-2, 0) \quad \text{e} \quad B(2, 0)
$$
