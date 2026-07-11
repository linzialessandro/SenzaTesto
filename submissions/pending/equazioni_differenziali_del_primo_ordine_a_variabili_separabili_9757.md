---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine a variabili separabili"
difficulty: 2
ai_generated: true
tags:
  - "Equazioni differenziali"
  - "Primo ordine"
  - "Variabili separabili"
  - "Problema di Cauchy"
---
# Problem Text
Risolvi il seguente problema di Cauchy con un'equazione differenziale a variabili separabili:

$$
\begin{cases}
y' = 2x y \\
y(0) = 3
\end{cases}
$$

# Solution
**Passo 1: Separazione delle variabili**
Poiché la condizione iniziale impone $y(0) = 3 \neq 0$, possiamo dividere entrambi i membri per $y$ assumendo $y \neq 0$. Scrivendo $y' = \frac{dy}{dx}$ otteniamo:

$$
\frac{1}{y} dy = 2x dx
$$

**Passo 2: Impostazione dell'integrazione**
Incolonniamo e integriamo entrambi i membri dell'equazione rispetto alle rispettive variabili:

$$
\int \frac{1}{y} \, dy = \int 2x \, dx
$$

**Passo 3: Calcolo delle primitive**
Risolvendo ciascun integrale indefinito otteniamo:

$$
\ln|y| = x^2 + C_0
$$

con $C_0 \in \mathbb{R}$.

**Passo 4: Esplicitazione di $y$**
Applicando l'esponenziale ad ambo i membri e considerando che, data la condizione iniziale $y(0) = 3 > 0$, la funzione $y(x)$ assume valori positivi (quindi $|y| = y$):

$$
y(x) = e^{x^2 + C_0} = e^{C_0} e^{x^2} = k e^{x^2}
$$

dove $k = e^{C_0} > 0$ è una costante reale positiva.

**Passo 5: Applicazione della condizione iniziale**
Imponiamo la condizione $y(0) = 3$ per trovare la costante $k$:

$$
3 = k e^{0^2} \implies k = 3
$$

**Passo 6: Soluzione finale**
Sostituendo la costante $k = 3$ nella soluzione generale, si ottiene la soluzione particolare del problema di Cauchy:

$$
y(x) = 3 e^{x^2}
$$
