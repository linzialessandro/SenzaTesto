---
year: 3
macro_area: "Equazioni e disequazioni"
topic: "Equazioni e disequazioni irrazionali"
difficulty: 3
ai_generated: true
tags:
  - "disequazioni irrazionali"
  - "radicali"
  - "sistemi di disequazioni"
  - "algebra"
---
# Problem Text
Risolvi la seguente disequazione irrazionale nell'insieme dei numeri reali:

$$
\sqrt{x^2 - x - 2} \le x + 1
$$

# Solution
La disequazione è della forma $\sqrt{A(x)} \le B(x)$, equivalente al sistema:

$$
\begin{cases}
x^2 - x - 2 \ge 0 \\
x + 1 \ge 0 \\
x^2 - x - 2 \le (x + 1)^2
\end{cases}
$$

Risolviamo ciascuna condizione:

1. **Condizione di realtà del radicale:**

$$
x^2 - x - 2 \ge 0
$$

L'equazione associata ha radici $x = -1$ e $x = 2$. Trattandosi di una disequazione di secondo grado con verso $\ge$, la soluzione è costituita dai valori esterni:

$$
x \le -1 \quad \lor \quad x \ge 2
$$

2. **Concordanza di segno:**

$$
x + 1 \ge 0 \iff x \ge -1
$$

3. **Elevamento al quadrato:**

$$
x^2 - x - 2 \le x^2 + 2x + 1
$$

Semplificando i termini di secondo grado e isolando la $x$:

$$
-3x \le 3 \iff x \ge -1
$$

**Intersezione delle soluzioni:**
Mettiamo a sistema le condizioni ottenute:

$$
\begin{cases}
x \le -1 \quad \lor \quad x \ge 2 \\
x \ge -1
\end{cases}
$$

Intersectando l'insieme $(-\infty, -1] \cup [2, +\infty)$ con l'intervallo $[-1, +\infty)$, si individuano:
- Il valore isolato $x = -1$ (unico punto comune tra $x \le -1$ e $x \ge -1$);
- L'intervallo illimitato $x \ge 2$.

L'insieme soluzione della disequazione è:

$$
S = \{-1\} \cup [2, +\infty)
$$
