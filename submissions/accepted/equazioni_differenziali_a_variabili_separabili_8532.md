---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali a variabili separabili"
difficulty: 2
tags:
  - "equazioni differenziali"
  - "variabili separabili"
  - "problema di Cauchy"
  - "quinto anno"
---
# Problem Text
Risolvi il seguente problema di Cauchy del primo ordine a variabili separabili:

$$
\begin{cases}
y' = 3x^2 y \\
y(0) = 2
\end{cases}
$$

# Solution
1. **Separazione delle variabili**:
Riscriviamo l'equazione differenziale $y' = 3x^2 y$ esprimendo la derivata come $\frac{dy}{dx} = 3x^2 y$. Supponendo $y \neq 0$, separiamo le variabili dividendo per $y$ e moltiplicando per $dx$:

$$
\frac{1}{y} dy = 3x^2 dx
$$

2. **Integrazione**:
Integriamo entrambi i membri dell'equazione rispetto alle rispettive variabili:

$$
\int \frac{1}{y} dy = \int 3x^2 dx
$$

Calcolando gli integrali indefiniti otteniamo:

$$
\ln|y| = x^3 + C
$$

dove $C \in \mathbb{R}$ rappresenta la costante di integrazione.

3. **Esplicitazione della soluzione generale**:
Applichiamo la funzione esponenziale a entrambi i membri per ricavare la funzione $y(x)$:

$$
|y| = e^{x^3 + C} = e^C e^{x^3}
$$

Risolvendo il valore assoluto e introducendo una costante reale $k = \pm e^C$ (includendo anche la soluzione stazionaria $y = 0$ per $k = 0$), otteniamo la soluzione generale dell'equazione differenziale:

$$
y(x) = k e^{x^3} \quad \text{con } k \in \mathbb{R}
$$

4. **Determinazione della costante con la condizione iniziale**:
Imponiamo la condizione iniziale $y(0) = 2$ sostituendo $x = 0$ e $y = 2$ nella soluzione generale:

$$
2 = k e^{0^3} \implies k = 2
$$

5. **Soluzione finale**:
Sostituiamo il valore di $k = 2$ nell'equazione della soluzione generale per trovare la soluzione esclusiva al problema di Cauchy:

$$
y(x) = 2 e^{x^3}
$$
