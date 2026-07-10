---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali a variabili separabili"
difficulty: 2
tags:
  - "equazioni differenziali"
  - "variabili separabili"
  - "problema di cauchy"
  - "quinto anno"
---
# Problem Text
Determina la soluzione del seguente problema di Cauchy:

$$
\begin{cases}
y' = 3x^2 y \\
y(0) = 2
\end{cases}
$$

# Solution
Passo 1: Identificazione del tipo di equazione.
L'equazione differenziale $y' = 3x^2 y$ è a variabili separabili del tipo $y' = g(x)h(y)$, con $g(x) = 3x^2$ e $h(y) = y$. Poiché $y(0) = 2 \neq 0$, cerchiamo una soluzione nell'intorno di $y > 0$ e dividiamo per $y$.

Passo 2: Separazione delle variabili.
Riscriviamo l'equazione esprimendo $y'$ come $\frac{dy}{dx}$:

$$
\frac{dy}{dx} = 3x^2 y \implies \frac{1}{y} \, dy = 3x^2 \, dx
$$

Passo 3: Integrazione di entrambi i membri.
Integrando entrambi i membri rispetto alle rispettive variabili si ottiene:

$$
\int \frac{1}{y} \, dy = \int 3x^2 \, dx
$$

Calcolando gli integrali indefiniti:

$$
\ln|y| = x^3 + C
$$

dove $C \in \mathbb{R}$ è la costante di integrazione.

Passo 4: Ricerca dell'integrale generale.
Applichiamo la funzione esponenziale a entrambi i membri per esplicitare $y$:

$$
|y| = e^{x^3 + C} = e^C \cdot e^{x^3}
$$

Esplicitando $y$ e ponendo $K = \pm e^C$ (con $K \neq 0$), otteniamo la famiglia di soluzioni:

$$
y(x) = K e^{x^3}
$$

Includendo la soluzione stazionaria $y(x) = 0$ (che corrisponde a $K = 0$), l'integrale generale è $y(x) = K e^{x^3}$ con $K \in \mathbb{R}$.

Passo 5: Applicazione della condizione iniziale.
Imponiamo la condizione iniziale $y(0) = 2$:

$$
y(0) = K e^{0^3} \implies 2 = K \cdot 1 \implies K = 2
$$

Passo 6: Scrittura della soluzione particolare.
Sostituendo $K = 2$, otteniamo la soluzione particolare del problema di Cauchy:

$$
y(x) = 2e^{x^3}
$$
