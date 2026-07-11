---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di Funzione - Dominio"
difficulty: 2
ai_generated: true
tags:
  - "dominio"
  - "funzioni reali"
  - "logaritmo"
  - "disequazioni"
---
# Problem Text
Determinare il dominio della seguente funzione reale di variabile reale:

$$
f(x) = \ln(x^2 - 4) + \frac{1}{\sqrt{9 - x^2}}
$$

# Solution
Per determinare il dominio della funzione, dobbiamo imporre contemporaneamente le seguenti condizioni di esistenza:

1. L'argomento del logaritmo deve essere strettamente positivo:

$$
x^2 - 4 > 0
$$

2. Il termine sotto radice quadrata al denominatore deve essere strettamente positivo (per garantire sia l'esistenza della radice che la non nullità del denominatore):

$$
9 - x^2 > 0
$$

Risolviamo individualmente le due disequazioni di secondo grado:

**Passo 1: Studio della prima disequazione**

$$
x^2 - 4 > 0
$$

L'equazione associata $x^2 - 4 = 0$ ha soluzioni $x = \pm 2$. Essendo il coefficiente di $x^2$ positivo e il verso maggiore, la disequazione è soddisfatta per valori esterni:

$$
x < -2 \quad \text{oppure} \quad x > 2
$$

**Passo 2: Studio della seconda disequazione**

$$
9 - x^2 > 0
$$

L'equazione associata $9 - x^2 = 0$ ha soluzioni $x = \pm 3$. Essendo il coefficiente di $x^2$ negativo e il verso maggiore, la disequazione è soddisfatta per valori interni:

$$
-3 < x < 3
$$

**Passo 3: Determinazione del dominio**
Il dominio $D$ è dato dall'intersezione delle soluzioni delle due disequazioni risolte in precedenza:

$$
\begin{cases}
x < -2 \ \lor \ x > 2 \\
-3 < x < 3
\end{cases}
$$

Intersecando i due intervalli di soluzioni, otteniamo il dominio della funzione:

$$
D = (-3, -2) \cup (2, 3)
$$

Pertanto, la funzione è definita per:

$$
-3 < x < -2 \quad \text{oppure} \quad 2 < x < 3
$$
