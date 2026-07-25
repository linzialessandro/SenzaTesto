---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado"
difficulty: 3
ai_generated: true
tags:
  - "equazioni di secondo grado"
  - "equazioni parametriche"
  - "relazioni radici-coefficienti"
---
# Problem Text
Determina per quali valori del parametro reale $k$ l'equazione di secondo grado

$$
x^2 - 2kx + k^2 - k - 2 = 0
$$

ammette due soluzioni reali $x_1$ e $x_2$ tali che la somma dei loro quadrati sia uguale a $16$, cioè $x_1^2 + x_2^2 = 16$.

# Solution
Per risolvere il problema, seguiamo i seguenti passaggi:

**1. Condizione di esistenza delle soluzioni reali**
L'equazione ammette soluzioni reali se il discriminante ridotto $\frac{\Delta}{4}$ è non negativo:

$$
\frac{\Delta}{4} = (-k)^2 - 1 \cdot (k^2 - k - 2) \ge 0
$$

$$
k^2 - k^2 + k + 2 \ge 0 \implies k \ge -2
$$

**2. Relazione tra soluzioni e coefficienti**
Dalle formule di Viète, la somma $S$ e il prodotto $P$ delle radici dell'equazione sono:

$$
S = x_1 + x_2 = -\frac{b}{a} = 2k
$$

$$
P = x_1 \cdot x_2 = \frac{c}{a} = k^2 - k - 2
$$

**3. Espressione della somma dei quadrati**
Possiamo esprimere $x_1^2 + x_2^2$ mediante somma e prodotto:

$$
x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = S^2 - 2P
$$

Sostituendo le espressioni trovate:

$$
x_1^2 + x_2^2 = (2k)^2 - 2(k^2 - k - 2) = 4k^2 - 2k^2 + 2k + 4 = 2k^2 + 2k + 4
$$

**4. Risoluzione dell'equazione nel parametro $k$**
Imponiamo la condizione richiesta $x_1^2 + x_2^2 = 16$:

$$
2k^2 + 2k + 4 = 16 \implies 2k^2 + 2k - 12 = 0
$$

Dividendo tutti i termini per $2$:

$$
k^2 + k - 6 = 0
$$

Scomponendo il trinomio $(k+3)(k-2) = 0$ oppure usando la formula risolutiva, otteniamo:

$$
k_1 = 2, \quad k_2 = -3
$$

**5. Discussione delle soluzioni**
Confrontiamo i valori di $k$ trovati con la condizione di realtà $k \ge -2$:
- Per $k = 2$: $2 \ge -2$, quindi la soluzione è **accettabile**.
- Per $k = -3$: $-3 < -2$, quindi la soluzione **non è accettabile** (l'equazione avrebbe radici complesse coniugate).

Il valore cercato del parametro è $k = 2$.
