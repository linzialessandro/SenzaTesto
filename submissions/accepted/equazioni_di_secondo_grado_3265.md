---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado"
difficulty: 4
ai_generated: true
tags:
  - "equazioni parametriche"
  - "relazioni tra radici e coefficienti"
  - "discussione del parametro"
  - "secondo grado"
---
# Problem Text
Data l'equazione parametrica nell'incognita $x$:

$$
(k-1)x^2 - 2kx + k + 2 = 0
$$

determina per quali valori del parametro reale $k$ l'equazione ammette due soluzioni reali e distinte $x_1$ e $x_2$ tali che la somma dei loro quadrati sia uguale a $6$, ovvero $x_1^2 + x_2^2 = 6$.

# Solution
Per risolvere il problema occorre imporre la condizione di esistenza di due soluzioni reali e distinte e applicare le relazioni tra radici e coefficienti.

**1. Condizione sui coefficienti e sul discriminante**
Affinché l'equazione sia di secondo grado, il coefficiente di $x^2$ non deve annullarsi:

$$
a \neq 0 \iff k - 1 \neq 0 \iff k \neq 1
$$

Calcoliamo il discriminante ridotto $\frac{\Delta}{4}$:

$$
\frac{\Delta}{4} = (-k)^2 - (k-1)(k+2) = k^2 - (k^2 + k - 2) = 2 - k
$$

Affinché l'equazione ammetta due soluzioni reali e distinte, deve essere $\frac{\Delta}{4} > 0$:

$$
2 - k > 0 \iff k < 2
$$

Quindi la condizione di accettabilità per il parametro è:

$$
k < 2 \quad \text{con} \quad k \neq 1
$$

**2. Applicazione delle relazioni tra radici e coefficienti**
Dalle relazioni di Viète sappiamo che:

$$
x_1 + x_2 = -\frac{b}{a} = \frac{2k}{k-1}
$$

$$
x_1 x_2 = \frac{c}{a} = \frac{k+2}{k-1}
$$

Esprimiamo la somma dei quadrati delle radici mediante somma e prodotto:

$$
x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2
$$

Sostituendo la condizione $x_1^2 + x_2^2 = 6$:

$$
\left(\frac{2k}{k-1}\right)^2 - 2\left(\frac{k+2}{k-1}\right) = 6
$$

**3. Risoluzione dell'equazione in $k$**
Moltiplichiamo entrambi i membri per $(k-1)^2 \neq 0$:

$$
4k^2 - 2(k+2)(k-1) = 6(k-1)^2
$$

$$
4k^2 - 2(k^2 + k - 2) = 6(k^2 - 2k + 1)
$$

$$
2k^2 - 2k + 4 = 6k^2 - 12k + 6
$$

$$
4k^2 - 10k + 2 = 0 \iff 2k^2 - 5k + 1 = 0
$$

Applicando la formula risolutiva:

$$
k = \frac{5 \pm \sqrt{25 - 8}}{4} = \frac{5 \pm \sqrt{17}}{4}
$$

**4. Verifica dell'accettabilità**
Poiché $4 < \sqrt{17} < 5$:
- Per $k_1 = \frac{5 - \sqrt{17}}{4}$: si ha $0 < k_1 < \frac{1}{4} < 2$ (con $k_1 \neq 1$). La soluzione è **accettabile**.
- Per $k_2 = \frac{5 + \sqrt{17}}{4}$: si ha $k_2 > \frac{9}{4} = 2{,}25 > 2$. La soluzione è **non accettabile** poiché renderebbe il discriminante negativo.

Il valore cercato è $k = \frac{5 - \sqrt{17}}{4}$.
