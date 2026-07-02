---
year: 4
macro_area: Algebra
topic: disequazioni
difficulty: 4
tags:
  - valore assoluto
  - sistemi
  - irrazionali
---
# Problem Text
Risolvi la seguente disequazione irrazionale fratta con valore assoluto:
$$
\left| x^2 - 4x + 3 \right| < 2x - 3
$$

# Solution
Una disequazione contenente un valore assoluto nella forma $|f(x)| < g(x)$ si può risolvere in modo rapido imponendo il seguente sistema di disequazioni:
$$
\begin{cases}
f(x) < g(x) \\
f(x) > -g(x)
\end{cases}
$$
Applichiamo questa regola generale al nostro caso, dove $f(x) = x^2 - 4x + 3$ e $g(x) = 2x - 3$:
$$
\begin{cases}
x^2 - 4x + 3 < 2x - 3 \\
x^2 - 4x + 3 > -(2x - 3)
\end{cases}
$$

**1. Risolviamo la prima disequazione del sistema:**
$$
x^2 - 4x + 3 < 2x - 3 \implies x^2 - 6x + 6 < 0
$$
Calcoliamo le radici dell'equazione associata $x^2 - 6x + 6 = 0$:
$$
x_{1,2} = \frac{6 \pm \sqrt{36 - 24}}{2} = \frac{6 \pm \sqrt{12}}{2} = \frac{6 \pm 2\sqrt{3}}{2} = 3 \pm \sqrt{3}
$$
Poiché la parabola è concava verso l'alto (coefficiente direttivo positivo) ed è richiesta la negatività, le soluzioni corrispondono ai valori interni all'intervallo delle radici:
$$
3 - \sqrt{3} < x < 3 + \sqrt{3}
$$

**2. Risolviamo la seconda disequazione del sistema:**
$$
x^2 - 4x + 3 > -2x + 3 \implies x^2 - 2x > 0
$$
Scomponendo in fattori otteniamo $x(x - 2) > 0$.
Le radici dell'equazione associata sono palesemente $0$ e $2$. Essendo richiesto il verso maggiore, le soluzioni sono costituite dai valori esterni all'intervallo delle radici:
$$
x < 0 \quad \cup \quad x > 2
$$

**3. Intersezione delle soluzioni:**
Dobbiamo ora intersecare le soluzioni delle due disequazioni appena risolte. Ricordiamo l'approssimazione $\sqrt{3} \approx 1.732$, utile per posizionare i numeri sulla retta reale:
$3 - \sqrt{3} \approx 1.268$
$3 + \sqrt{3} \approx 4.732$

Mettendo a sistema e incrociando i risultati:
$$
\begin{cases}
3 - \sqrt{3} < x < 3 + \sqrt{3} \\
x < 0 \cup x > 2
\end{cases}
$$
Poiché $3 - \sqrt{3} > 0$, l'intervallo di limitazione della prima disequazione non ha alcuna intersezione con la semiretta $x < 0$.
L'intersezione avviene unicamente per la porzione $x > 2$. Dato che il numero $2$ è compreso strettamente tra $3 - \sqrt{3}$ e $3 + \sqrt{3}$, la soluzione finale del sistema sarà data dalla limitazione:
$$
2 < x < 3 + \sqrt{3}
$$
