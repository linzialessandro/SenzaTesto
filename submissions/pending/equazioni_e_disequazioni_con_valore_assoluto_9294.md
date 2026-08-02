---
year: 4
macro_area: "Valore assoluto"
topic: "Equazioni e disequazioni con valore assoluto"
difficulty: 5
ai_generated: true
tags:
  - "valore assoluto"
  - "disequazioni"
  - "studio del segno"
  - "quadratiche"
---
# Problem Text
Determina tutti i valori del parametro reale \(k\) per cui la disequazione
\[ |x^2 - 4x| - |x-2| + k < 0 \]
è verificata per ogni \(x \in [0,4]\).

# Solution
Osserviamo che \(|x^2 - 4x| = |x(x-4)|\). Poiché \(x \in [0,4]\), \(x \ge 0\) e \(x-4 \le 0\), quindi il prodotto è non positivo, e il suo valore assoluto è \(-x(x-4) = 4x - x^2\). Inoltre \(|x-2| = x-2\) se \(x \ge 2\), mentre \(|x-2| = 2-x\) se \(0 \le x < 2\). Distinguiamo due casi.

**Caso 1: \(0 \le x < 2\)**  
La disequazione diventa:
\[ (4x - x^2) - (2-x) + k < 0 \quad \Rightarrow \quad 5x - x^2 - 2 + k < 0 \]
cioè \( -x^2 + 5x - 2 + k < 0 \). Il minimo di \(f_1(x) = -x^2 + 5x - 2\) su \([0,2]\) si trova all'estremo sinistro, essendo una parabola con concavità verso il basso e vertice in \(x=2.5\) (fuori dall'intervallo). Quindi \(f_1(0) = -2\). Per avere \(f_1(x) + k < 0\) per ogni \(x\) nell'intervallo, dobbiamo richiedere che il minimo di \(f_1+k\) sia negativo, cioè \(-2 + k < 0\), quindi \(k < 2\).

**Caso 2: \(2 \le x \le 4\)**  
La disequazione diventa:
\[ (4x - x^2) - (x-2) + k < 0 \quad \Rightarrow \quad 3x - x^2 + 2 + k < 0 \]
cioè \( -x^2 + 3x + 2 + k < 0 \). La funzione \(f_2(x) = -x^2 + 3x + 2\) ha vertice in \(x=1.5\) (fuori da \([2,4]\)) ed è decrescente su \([2,4]\), quindi il massimo è in \(x=2\) e il minimo in \(x=4\). Calcoliamo \(f_2(4) = -16 + 12 + 2 = -2\). Affinché \(f_2(x) + k < 0\) per ogni \(x\) in \([2,4]\), dobbiamo richiedere \(-2 + k < 0\), cioè \(k < 2\).

Quindi entrambi i casi impongono \(k < 2\). Inoltre, per \(k < 2\), la disequazione è verificata per ogni \(x\) in \([0,4]\).

**Risposta:** \(\boxed{k < 2}\).
