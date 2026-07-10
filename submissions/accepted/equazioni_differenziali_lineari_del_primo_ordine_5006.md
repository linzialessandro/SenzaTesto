---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali lineari del primo ordine"
difficulty: 2
tags:
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "equazioni lineari"
---
# Problem Text
Risolvere il seguente problema di Cauchy per un'equazione differenziale lineare del primo ordine:

$$
\begin{cases}
y' - y = e^{2x} \\
y(0) = 2
\end{cases}
$$

# Solution
1. **Identificazione del tipo di equazione**:
L'equazione differenziale del primo ordine è lineare della forma $y' + a(x)y = f(x)$, con $a(x) = -1$ e $f(x) = e^{2x}$.

2. **Calcolo del fattore integrante**:
Determiniamo il fattore integrante $e^{A(x)}$ dove $A(x) = \int a(x) \, dx$:

$$
e^{\int -1 \, dx} = e^{-x}
$$

3. **Moltiplicazione per il fattore integrante**:
Moltiplicando entrambi i membri dell'equazione differenziale per $e^{-x}$ otteniamo:

$$
e^{-x}y' - e^{-x}y = e^{-x} e^{2x}
$$

Riconoscendo la derivata del prodotto al primo membro:

$$
\frac{d}{dx} \left( y e^{-x} \right) = e^x
$$

4. **Integrazione di entrambi i membri**:
Integrando rispetto a $x$:

$$
y e^{-x} = \int e^x \, dx
$$

$$
y e^{-x} = e^x + c
$$

con $c \in \mathbb{R}$.

5. **Determinazione dell'integrale generale**:
Moltiplicando per $e^x$, isoliamo la funzione $y(x)$:

$$
y(x) = e^{2x} + c e^x
$$

6. **Applicazione della condizione iniziale**:
Imponiamo la condizione $y(0) = 2$ per determinare la costante $c$:

$$
y(0) = e^0 + c e^0 = 2 \implies 1 + c = 2 \implies c = 1
$$

7. **Soluzione del problema di Cauchy**:
Sostituendo $c = 1$ nell'integrale generale, si ottiene la soluzione cercata:

$$
y(x) = e^{2x} + e^x
$$
