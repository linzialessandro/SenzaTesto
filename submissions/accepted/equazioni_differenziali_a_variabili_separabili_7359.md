---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali a variabili separabili"
difficulty: 2
tags:
  - "equazioni differenziali"
  - "variabili separabili"
  - "problema di Cauchy"
---
# Problem Text
Risolvi il seguente problema di Cauchy:

$$
\begin{cases}
y' = 3x^2 y \\
y(0) = 2
\end{cases}
$$

# Solution
1. **Separazione delle variabili**: Dividiamo entrambi i membri per $y$ (ipotizzando $y \neq 0$) e separiamo le variabili $x$ e $y$:

$$
\frac{dy}{y} = 3x^2 \, dx
$$

2. **Integrazione**: Integriamo ambo i membri rispetto alle rispettive variabili:

$$
\int \frac{1}{y} \, dy = \int 3x^2 \, dx
$$

da cui:

$$
\ln|y| = x^3 + c \quad (c \in \mathbb{R})
$$

3. **Esplicitazione della soluzione generale**: Elevando la costante fondamentale $e$ ad ambo i membri, ricaviamo $|y| = e^{x^3 + c} = e^c e^{x^3}$. Ponendo $k = \pm e^c$, includendo anche la soluzione stazionaria $y(x) = 0$ per $k = 0$, otteniamo l'integrale generale:

$$
y(x) = k e^{x^3} \quad (k \in \mathbb{R})
$$

4. **Applicazione della condizione iniziale**: Sostituiamo $x = 0$ e $y = 2$ nell'equazione generale per determinare il valore di $k$:

$$
y(0) = k e^{0^3} = 2 \implies k \cdot 1 = 2 \implies k = 2
$$

5. **Soluzione particolare**: Sostituendo $k = 2$ nell'integrale generale si ottiene la soluzione cercata:

$$
y(x) = 2 e^{x^3}
$$
