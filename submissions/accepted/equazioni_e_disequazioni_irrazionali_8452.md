---
year: 3
macro_area: "Algebra"
topic: "Equazioni e disequazioni irrazionali"
difficulty: 4
ai_generated: true
tags:
  - "disequazioni irrazionali"
  - "disequazioni fratte"
  - "campo di esistenza"
  - "algebra"
---
# Problem Text
Determina l'insieme delle soluzioni della seguente disequazione irrazionale:

$$
\frac{\sqrt{x+3} - x - 1}{\sqrt{x^2 - 1}} \le 0
$$

# Solution
**1. Campo di Esistenza (C.E.)**
Imponiamo che i radicandi siano non negativi e che il denominatore sia diverso da zero:

$$
\begin{cases} 
x + 3 \ge 0 \\ 
x^2 - 1 > 0 
\end{cases} 
\iff 
\begin{cases} 
x \ge -3 \\ 
x < -1 \lor x > 1 
\end{cases}
$$

Il dominio di esistenza è quindi:

$$
D = [-3, -1) \cup (1, +\infty)
$$

**2. Studio del segno della frazione**
Nel dominio $D$, il denominatore $\sqrt{x^2 - 1}$ è strettamente positivo. Di conseguenza, il segno della frazione dipende unicamente dal numeratore. La disequazione equivale a:

$$
\sqrt{x+3} - (x + 1) \le 0 \iff \sqrt{x+3} \le x + 1
$$

**3. Risoluzione della disequazione irrazionale**
La disequazione $\sqrt{x+3} \le x + 1$ è della forma $\sqrt{A(x)} \le B(x)$, che equivale al sistema:

$$
\begin{cases} 
x + 3 \ge 0 \\ 
x + 1 \ge 0 \\ 
x + 3 \le (x + 1)^2 
\end{cases}
$$

Risolviamo la terza disequazione:

$$
x + 3 \le x^2 + 2x + 1 \iff x^2 + x - 2 \ge 0
$$

Le radici dell'equazione associata $x^2 + x - 2 = 0$ sono $x = 1$ e $x = -2$, per cui la soluzione è:

$$
x \le -2 \lor x \ge 1
$$

Mettendo a sistema le tre condizioni:

$$
\begin{cases} 
x \ge -3 \\ 
x \ge -1 \\ 
x \le -2 \lor x \ge 1 
\end{cases} 
\implies x \ge 1
$$

**4. Intersezione con il C.E. e conclusione**
Intersechiamo la soluzione trovata $x \ge 1$ con il dominio $D = [-3, -1) \cup (1, +\infty)$.
Poiché $x = 1$ annulla il denominatore ($1 \notin D$), il valore $x = 1$ va escluso.

L'insieme delle soluzioni della disequazione è:

$$
S = (1, +\infty) \quad \text{ovvero} \quad x > 1
$$
