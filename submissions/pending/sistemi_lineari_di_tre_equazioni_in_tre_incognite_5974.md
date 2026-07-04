---
year: 2
macro_area: "Algebra"
topic: "Sistemi lineari di tre equazioni in tre incognite"
difficulty: 3
tags:
  - "sistemi lineari"
  - "metodo di sostituzione"
  - "equazioni di primo grado"
  - "frazioni"
  - "3 variabili"
---
# Problem Text
$$
\begin{cases}
\frac{x-y}{3} + \frac{y+z}{2} = z - \frac{3}{2} \\[1.5ex]
\frac{2x-y}{4} - \frac{z-x}{2} = y + 2 \\[1.5ex]
\frac{x+y+z}{2} + \frac{2x-z}{3} = 3x + y - \frac{1}{3}
\end{cases}
$$

# Solution
### Risoluzione del Sistema Lineare Fratto

Il sistema di partenza è:

$$
\begin{cases}
\frac{x-y}{3} + \frac{y+z}{2} = z - \frac{3}{2} \\[1.5ex]
\frac{2x-y}{4} - \frac{z-x}{2} = y + 2 \\[1.5ex]
\frac{x+y+z}{2} + \frac{2x-z}{3} = 3x + y - \frac{1}{3}
\end{cases}
$$

#### 1. Semplificazione del sistema e riduzione in forma normale

Riduciamo ciascuna delle tre equazioni eliminando i denominatori tramite il minimo comune multiplo (m.c.m.).

**Prima equazione:**
Il m.c.m. tra i denominatori $3$, $2$ e $2$ è $6$. Moltiplicando entrambi i membri per $6$, otteniamo:

$$
2(x - y) + 3(y + z) = 6z - 9
$$

Sviluppiamo le parentesi e semplifichiamo:

$$
2x - 2y + 3y + 3z = 6z - 9
$$

$$
2x + y - 3z = -9
$$

**Seconda equazione:**
Il m.c.m. tra i denominatori $4$ e $2$ è $4$. Moltiplicando entrambi i membri per $4$, otteniamo:

$$
(2x - y) - 2(z - x) = 4(y + 2)
$$

Sviluppiamo e semplifichiamo:

$$
2x - y - 2z + 2x = 4y + 8
$$

$$
4x - 5y - 2z = 8
$$

**Terza equazione:**
Il m.c.m. tra i denominatori $2$, $3$ e $3$ è $6$. Moltiplicando entrambi i membri per $6$, otteniamo:

$$
3(x + y + z) + 2(2x - z) = 6(3x + y) - 2
$$

Sviluppiamo e raccogliamo i termini:

$$
3x + 3y + 3z + 4x - 2z = 18x + 6y - 2
$$

$$
7x + 3y + z = 18x + 6y - 2
$$

Portando tutte le incognite a sinistra:

$$
7x - 18x + 3y - 6y + z = -2
$$

$$
-11x - 3y + z = -2
$$

Moltiplicando per $-1$ per avere coefficienti interi positivi e più semplici:

$$
11x + 3y - z = 2
$$

Il sistema ridotto in forma normale è quindi:

$$
\begin{cases}
2x + y - 3z = -9 \\
4x - 5y - 2z = 8 \\
11x + 3y - z = 2
\end{cases}
$$

---

#### 2. Risoluzione tramite il metodo di sostituzione

Dalla prima equazione del sistema ridotto, ricaviamo l'incognita $y$:

$$
y = -2x + 3z - 9
$$

Sostituiamo questa espressione per $y$ nella seconda e nella terza equazione.

**Sostituzione nella seconda equazione:**

$$
4x - 5(-2x + 3z - 9) - 2z = 8
$$

$$
4x + 10x - 15z + 45 - 2z = 8
$$

$$
14x - 17z = -37
$$

**Sostituzione nella terza equazione:**

$$
11x + 3(-2x + 3z - 9) - z = 2
$$

$$
11x - 6x + 9z - 27 - z = 2
$$

$$
5x + 8z = 29
$$

---

#### 3. Risoluzione del sistema a due incognite in $x$ e $z$

Consideriamo ora il sistema a due incognite così ottenuto:

$$
\begin{cases}
14x - 17z = -37 \\
5x + 8z = 29
\end{cases}
$$

Risolviamo questa parte esplicitando $x$ dalla seconda equazione:

$$
5x = 29 - 8z \implies x = \frac{29 - 8z}{5}
$$

Sostituiamo $x$ nella prima equazione:

$$
14\left(\frac{29 - 8z}{5}\right) - 17z = -37
$$

Moltiplichiamo per $5$ per eliminare il denominatore:

$$
14(29 - 8z) - 85z = -185
$$

$$
406 - 112z - 85z = -185
$$

$$
-197z = -185 - 406
$$

$$
-197z = -591
$$

$$
z = \frac{-591}{-197} = 3
$$

---

#### 4. Calcolo delle rimanenti incognite ($x$ e $y$)

Sostituiamo $z = 3$ nell'espressione per $x$:

$$
x = \frac{29 - 8(3)}{5} = \frac{29 - 24}{5} = \frac{5}{5} = 1
$$

Ora sostituiamo $x = 1$ e $z = 3$ nell'espressione per $y$:

$$
y = -2(1) + 3(3) - 9 = -2 + 9 - 9 = -2
$$

---

#### 5. Conclusione

La soluzione del sistema lineare è la terna ordinata:

$$
(x, y, z) = (1, -2, 3)
$$
