---
year: 5
macro_area: Integrali definiti
topic: Calcolo delle Aree
difficulty: 4
tags:
  - integrali
  - area
  - parabole
---
# Problem Text

Calcolare l'area della regione finita di piano delimitata dalla parabola di equazione $y = -x^2 + 4x$ e dalla retta di equazione $y = x$.

# Solution

**1. Ricerca dei punti di intersezione:**
Per prima cosa, determiniamo i punti di intersezione tra la parabola e la retta mettendo a sistema le loro equazioni:
$$
\begin{cases}
y = -x^2 + 4x \
y = x
\end{cases}
$$
Eguagliando le $y$:
$$
-x^2 + 4x = x \implies x^2 - 3x = 0 \implies x(x - 3) = 0
$$
Le ascisse dei punti di intersezione sono $x_1 = 0$ e $x_2 = 3$. L'area richiesta si trova dunque nell'intervallo $[0, 3]$.

**2. Determinazione della funzione "maggiore":**
Nell'intervallo $(0, 3)$, dobbiamo stabilire quale grafico "sta sopra" l'altro per impostare correttamente l'integrale (Area = Integrale(funzione superiore - funzione inferiore)).
Scegliamo un punto test interno, ad esempio $x = 1$:
- Ordinata sulla parabola: $y = -1^2 + 4(1) = 3$
- Ordinata sulla retta: $y = 1$
Poiché $3 > 1$, la parabola è posta al di sopra della retta nell'intervallo di integrazione.

**3. Impostazione dell'integrale:**
L'area $A$ è data dall'integrale definito della differenza tra la funzione superiore e quella inferiore, tra gli estremi trovati:
$$
A = \int_{0}^{3} [(-x^2 + 4x) - (x)] \, dx = \int_{0}^{3} (-x^2 + 3x) \, dx
$$

**4. Calcolo dell'integrale definito:**
Calcoliamo la primitiva della funzione integranda:
$$
\int (-x^2 + 3x) \, dx = -\frac{x^3}{3} + \frac{3x^2}{2} + C
$$
Valutiamo la primitiva tra 0 e 3 utilizzando il Teorema Fondamentale del Calcolo (Torricelli-Barrow):
$$
A = \left[ -\frac{x^3}{3} + \frac{3x^2}{2} \right]_{0}^{3} = \left( -\frac{3^3}{3} + \frac{3(3^2)}{2} \right) - (0 + 0)
$$
$$
A = -9 + \frac{27}{2} = \frac{-18 + 27}{2} = \frac{9}{2}
$$

**Soluzione:** L'area della regione di piano delimitata dalle due curve è $\frac{9}{2}$.
