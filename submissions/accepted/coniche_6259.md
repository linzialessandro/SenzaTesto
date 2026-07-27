---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche"
difficulty: 3
ai_generated: true
tags:
  - "coniche"
  - "parabola"
  - "circonferenza"
  - "intersezione"
  - "geometria analitica"
---
# Problem Text
Determinare l'equazione della circonferenza il cui diametro è la corda individuata dall'intersezione tra la parabola di equazione $y = -x^2 + 4x$ e la retta di equazione $y = x$.

# Solution
Per trovare i punti di intersezione tra la parabola e la retta, impostiamo il sistema di equazioni:

$$
\begin{cases}
y = -x^2 + 4x \\
y = x
\end{cases}
$$

Sostituendo la seconda equazione nella prima, si ottiene l'equazione risolvente:

$$
-x^2 + 4x = x \implies x^2 - 3x = 0 \implies x(x-3) = 0
$$

Le cui soluzioni sono $x_1 = 0$ e $x_2 = 3$. Sostituendo questi valori nell'equazione della retta, otteniamo i punti di intersezione:

$$
A(0, 0), \quad B(3, 3)
$$

Il segmento $AB$ rappresenta il diametro della circonferenza cercata. Il centro $C(x_C, y_C)$ della circonferenza è il punto medio del diametro $AB$:

$$
x_C = \frac{0 + 3}{2} = \frac{3}{2}, \quad y_C = \frac{0 + 3}{2} = \frac{3}{2} \implies C\left(\frac{3}{2}, \frac{3}{2}\right)
$$

La lunghezza del diametro $AB$ si calcola con la formula della distanza tra due punti:

$$
AB = \sqrt{(3-0)^2 + (3-0)^2} = \sqrt{18} = 3\sqrt{2}
$$

Il raggio $R$ è pari alla metà della misura del diametro:

$$
R = \frac{3\sqrt{2}}{2}
$$

L'equazione della circonferenza di centro $C$ e raggio $R$ è data da:

$$
\left(x - \frac{3}{2}\right)^2 + \left(y - \frac{3}{2}\right)^2 = \left(\frac{3\sqrt{2}}{2}\right)^2
$$

Sviluppando i quadrati ed effettuando le dovute semplificazioni, si ricava l'equazione finale:

$$
x^2 - 3x + \frac{9}{4} + y^2 - 3y + \frac{9}{4} = \frac{18}{4} \implies x^2 + y^2 - 3x - 3y = 0
$$
