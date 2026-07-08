---
year: 2
macro_area: "Algebra"
topic: "Equazioni di secondo grado e parametriche"
difficulty: 2
tags:
  - "equazioni parametriche"
  - "equazioni di secondo grado"
  - "somma e prodotto delle radici"
  - "coefficienti"
---
# Problem Text
Determinare per quale valore del parametro reale $k$ la somma delle soluzioni dell'equazione di secondo grado $2x^2 - (k-1)x - 3 = 0$ è uguale a $4$.

# Solution
Per risolvere il problema, seguiamo questi passaggi:

1. **Identificazione dei coefficienti**:
Nell'equazione $2x^2 - (k-1)x - 3 = 0$, i coefficienti polonimiali in funzione del parametro $k$ sono:
- $a = 2$
- $b = -(k-1)$
- $c = -3$

2. **Verifica della realtà delle soluzioni ($\Delta > 0$)**:
Prima di procedere, assicuriamoci che l'equazione ammetta soluzioni reali. Calcoliamo il discriminante $\Delta$:

$$
\Delta = b^2 - 4ac = [-(k-1)]^2 - 4(2)(-3) = (k-1)^2 + 24
$$

Poiché $(k-1)^2 \ge 0$ per qualsiasi valore reale di $k$, abbiamo che $\Delta \ge 24 > 0$. L'equazione ammette quindi due soluzioni reali e distinte per ogni $k \in \mathbb{R}$.

3. **Utilizzo della relazione tra soluzioni e coefficienti**:
La somma delle soluzioni $x_1 + x_2$ di un'equazione di secondo grado della forma $ax^2 + bx + c = 0$ è determinata dalla relazione:

$$
x_1 + x_2 = -\frac{b}{a}
$$

4. **Sostituzione dei coefficienti**:
Sostituendo i valori dei coefficienti $a$ e $b$ nella formula, otteniamo la somma delle radici in funzione di $k$:

$$
x_1 + x_2 = -\frac{-(k-1)}{2} = \frac{k-1}{2}
$$

5. **Determinazione del parametro $k$**:
Imponiamo che la somma delle radici sia uguale a $4$:

$$
\frac{k-1}{2} = 4
$$

Moltiplichiamo entrambi i membri per $2$:

$$
k - 1 = 8
$$

Isoliamo il parametro $k$:

$$
k = 9
$$

Il valore ricercato del parametro reale è $k = 9$.
