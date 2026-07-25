---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado ed equazioni parametriche"
difficulty: 3
ai_generated: true
tags:
  - "equazioni di secondo grado"
  - "equazioni parametriche"
  - "regola di Cartesio"
  - "relazione radici e coefficienti"
---
# Problem Text
Determina per quali valori del parametro reale $k$ l'equazione di secondo grado

$$
x^2 - 2(k-1)x + k^2 - 3k = 0
$$

ammette due soluzioni reali, distinte e concordi positive.

# Solution
Per risolvere l'esercizio, imponiamo le condizioni affinché le soluzioni $x_1$ e $x_2$ siano reali, distinte e concordi positive.

**1. Condizione di esistenza di soluzioni reali e distinte ($\Delta > 0$)**
Calcoliamo il discriminante ridotto $\frac{\Delta}{4}$:

$$
\frac{\Delta}{4} = [-(k-1)]^2 - 1 \cdot (k^2 - 3k) = k^2 - 2k + 1 - k^2 + 3k = k + 1
$$

Imponiamo $\frac{\Delta}{4} > 0$:

$$
k + 1 > 0 \implies k > -1
$$

**2. Condizione sulle soluzioni (concordi e positive)**
Per la relazione tra soluzioni e coefficienti di un'equazione $ax^2 + bx + c = 0$ con $a=1$:
- Somma: $x_1 + x_2 = -\frac{b}{a} = 2(k-1) > 0 \implies k > 1$
- Prodotto: $x_1 x_2 = \frac{c}{a} = k^2 - 3k > 0 \implies k(k-3) > 0 \implies k < 0 \lor k > 3$

*(In alternativa, applicando la regola di Cartesio, per avere due radici positive servono due variazioni nella sequenza dei segni $+,-,+$, che richiedono $b < 0$ e $c > 0$).*

**3. Sistema delle condizioni**
Mettiamo a sistema le tre condizioni individuate:

$$
\begin{cases}
k > -1 \\
k > 1 \\
k < 0 \lor k > 3
\end{cases}
$$

Risolvendo il sistema sull'asse reale:
- L'intersezione tra $k > -1$ e $k > 1$ è $k > 1$.
- L'intersezione tra $k > 1$ e $(k < 0 \lor k > 3)$ fornisce $k > 3$.

**Conclusione:**
L'equazione ammette due soluzioni reali distinte e concordi positive per:

$$
k > 3
$$
