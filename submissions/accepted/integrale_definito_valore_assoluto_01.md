---
year: 5
macro_area: Analisi
topic: integrali definiti
difficulty: 3
tags:
  - valore assoluto
---
# Problem Text
Calcola il valore del seguente integrale definito: 
$$ \int_{-2}^{3} |x - 1| \, dx $$

# Solution
La funzione integranda contiene un valore assoluto. Per poter integrare, dobbiamo prima studiare il segno del suo argomento per "spezzare" la funzione a tratti:
$$ x - 1 \ge 0 \implies x \ge 1 $$

Possiamo quindi riscrivere la funzione integranda eliminando il valore assoluto:
$$ |x - 1| = \begin{cases} -(x - 1) = 1 - x & \text{se } x < 1 \\ x - 1 & \text{se } x \ge 1 \end{cases} $$

In base al segno, dividiamo l'intervallo di integrazione $[-2, 3]$ nel punto di cambio di segno $x=1$, sfruttando la proprietà additiva dell'integrale definito:
$$ \int_{-2}^{3} |x - 1| \, dx = \int_{-2}^{1} (1 - x) \, dx + \int_{1}^{3} (x - 1) \, dx $$

Risolviamo separatamente i due integrali:
$$ \int_{-2}^{1} (1 - x) \, dx = \left[ x - \frac{x^2}{2} \right]_{-2}^1 = \left( 1 - \frac{1}{2} \right) - \left( -2 - \frac{(-2)^2}{2} \right) = \frac{1}{2} - (-4) = \frac{9}{2} $$

$$ \int_{1}^{3} (x - 1) \, dx = \left[ \frac{x^2}{2} - x \right]_{1}^3 = \left( \frac{3^2}{2} - 3 \right) - \left( \frac{1^2}{2} - 1 \right) = \frac{3}{2} - \left(-\frac{1}{2}\right) = 2 $$

Sommiamo infine i due risultati parziali per ottenere l'area totale richiesta dall'integrale:
$$ \int_{-2}^{3} |x - 1| \, dx = \frac{9}{2} + 2 = \frac{13}{2} $$
