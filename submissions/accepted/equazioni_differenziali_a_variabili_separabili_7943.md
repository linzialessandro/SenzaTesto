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
ai_generated: true
---
# Problem Text
Determinare la soluzione del seguente problema di Cauchy con $y(x) > 0$:

$$
\begin{cases}
y' = 2xy \\
y(0) = 3
\end{cases}
$$

# Solution
**Passo 1: Separazione delle variabili**

Esprimiamo la derivata come $y' = \frac{dy}{dx}$ e separiamo le variabili dividendo per $y$ (osservando che la condizione iniziale $y(0)=3$ implica $y \neq 0$):

$$
\frac{1}{y} dy = 2x dx
$$

**Passo 2: Integrazione di entrambi i membri**

Integriamo ambo i membri rispetto alle rispettive variabili:

$$
\int \frac{1}{y} dy = \int 2x dx
$$

Risolvendo gli integrali indefiniti otteniamo:

$$
\ln|y| = x^2 + c
$$

dove $c \in \mathbb{R}$ è la costante di integrazione.

**Passo 3: Forma esplicita**

Applichiamo la funzione esponenziale a entrambi i membri:

$$
|y| = e^{x^2 + c} = e^c \cdot e^{x^2}
$$

Poiché la condizione iniziale indica che $y(0)=3 > 0$, possiamo considerare la soluzione positiva nell'intorno dell'origine e porre la nuova costante reale positiva $k = e^c > 0$, ottenendo l'integrale generale:

$$
y(x) = k e^{x^2}
$$

**Passo 4: Utilizzo della condizione iniziale**

Imponiamo la condizione $y(0) = 3$ per trovare il valore della costante $k$:

$$
3 = k e^{0} \implies k = 3
$$

**Passo 5: Soluzione finale**

Sostituendo il valore di $k$ trovato, la soluzione particolare cercata è:

$$
y(x) = 3e^{x^2}
$$
