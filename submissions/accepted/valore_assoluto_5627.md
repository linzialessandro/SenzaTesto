---
year: 4
macro_area: "Algebra"
topic: "Valore assoluto"
difficulty: 2
ai_generated: true
tags:
  - "valore assoluto"
  - "disequazioni con valore assoluto"
  - "disequazioni di secondo grado"
  - "sistemi di disequazioni"
---
# Problem Text
Risolvi la seguente disequazione con valore assoluto:
$$ |x^2 - 3| \le 2x $$

# Solution
La disequazione si presenta nella forma $|f(x)| \le g(x)$. Ricordando le proprietà del valore assoluto, essa equivale al seguente sistema di disequazioni:

$$
\begin{cases}
f(x) \le g(x) \\
f(x) \ge -g(x)
\end{cases}
$$

Sostituendo le espressioni del nostro esercizio, otteniamo:

$$
\begin{cases}
x^2 - 3 \le 2x \\
x^2 - 3 \ge -2x
\end{cases}
\implies
\begin{cases}
x^2 - 2x - 3 \le 0 \\
x^2 + 2x - 3 \ge 0
\end{cases}
$$

Risolviamo la prima disequazione del sistema:
$$ x^2 - 2x - 3 \le 0 $$
L'equazione associata $x^2 - 2x - 3 = 0$ ha come soluzioni:
$$ x_1 = -1, \quad x_2 = 3 $$
Trattandosi di una disequazione di secondo grado con verso minore o uguale, la soluzione è l'intervallo interno, estremi inclusi:
$$ S_1 = [ -1, 3 ] $$

Risolviamo la seconda disequazione del sistema:
$$ x^2 + 2x - 3 \ge 0 $$
L'equazione associata $x^2 + 2x - 3 = 0$ ha come soluzioni:
$$ x_1 = -3, \quad x_2 = 1 $$
Trattandosi di una disequazione di secondo grado con verso maggiore o uguale, la soluzione è l'unione degli intervalli esterni, estremi inclusi:
$$ S_2 = (-\infty, -3] \cup [1, +\infty) $$

Per trovare la soluzione finale della disequazione di partenza, cerchiamo l'intersezione $S_1 \cap S_2$:

$$
\begin{cases}
-1 \le x \le 3 \\
x \le -3 \lor x \ge 1
\end{cases}
$$

Rappresentando graficamente le due soluzioni sulla retta dei numeri reali, osserviamo che l'intervallo in cui sono contemporaneamente verificate entrambe le condizioni è:
$$ 1 \le x \le 3 $$

Pertanto, l'insieme delle soluzioni è:
$$ S = [1, 3] $$
