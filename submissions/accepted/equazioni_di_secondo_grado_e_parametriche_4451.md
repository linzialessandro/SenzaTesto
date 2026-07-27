---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado e parametriche"
difficulty: 2
ai_generated: true
tags:
  - "equazioni di secondo grado"
  - "equazioni parametriche"
  - "relazioni tra radici e coefficienti"
  - "somma delle radici"
---
# Problem Text
Determina per quale valore del parametro reale $k$ l'equazione di secondo grado

$$
x^2 - (k + 3)x + 2k = 0
$$

ammette soluzioni reali tali che la loro somma sia uguale a $7$.

# Solution
1. **Identificazione dei coefficienti:**
Nell'equazione $x^2 - (k + 3)x + 2k = 0$, i coefficienti sono:

$$
a = 1, \quad b = -(k + 3), \quad c = 2k
$$

2. **Condizione di esistenza delle soluzioni reali:**
Calcoliamo il discriminante $\Delta$:

$$
\Delta = b^2 - 4ac = [-(k + 3)]^2 - 4(1)(2k) = k^2 + 6k + 9 - 8k = k^2 - 2k + 9
$$

Completando il quadrato, abbiamo:

$$
\Delta = (k - 1)^2 + 8
$$

Poiché $(k - 1)^2 \ge 0$ per ogni $k \in \mathbb{R}$, risulta $\Delta \ge 8 > 0$ per qualsiasi $k \in \mathbb{R}$. Pertanto, l'equazione ammette soluzioni reali per ogni valore del parametro.

3. **Relazione tra soluzioni e coefficienti:**
Per la relazione di Viète, la somma delle soluzioni $x_1 + x_2$ è data da:

$$
x_1 + x_2 = -\frac{b}{a}
$$

Sostituendo i coefficienti otteniamo:

$$
x_1 + x_2 = -\frac{-(k + 3)}{1} = k + 3
$$

4. **Impostazione dell'equazione per il parametro $k$:**
Imponiamo la condizione richiesta dal problema, cioè che la somma delle soluzioni sia pari a $7$:

$$
k + 3 = 7
$$

5. **Risoluzione e conclusione:**
Risolvendo rispetto a $k$:

$$
k = 7 - 3 \implies k = 4
$$

Poiché il discriminante è positivo per ogni $k \in \mathbb{R}$, il valore $k = 4$ è accettabile.
