---
year: 5
macro_area: "Analisi Matematica"
topic: "Equazioni differenziali del primo ordine lineari"
difficulty: 2
ai_generated: true
tags:
  - "equazioni differenziali"
  - "problema di Cauchy"
  - "equazioni lineari"
  - "quinto anno"
---
# Problem Text
Risolvere il seguente problema di Cauchy associato a un'equazione differenziale lineare del primo ordine:

$$
\begin{cases}
y' - 2xy = x \\
y(0) = \frac{1}{2}
\end{cases}
$$

# Solution
Il problema di Cauchy si risolve determinando prima l'integrale generale dell'equazione differenziale e poi imponendo la condizione iniziale.

1. **Classificazione**: L'equazione differenziale è lineare del primo ordine della forma $y' + a(x)y = f(x)$, con $a(x) = -2x$ e $f(x) = x$.

2. **Fattore integrante**: Calcoliamo il fattore integrante $\lambda(x) = e^{\int a(x) \, dx}$:

$$
\lambda(x) = e^{\int -2x \, dx} = e^{-x^2}
$$

3. **Moltiplicazione**: Moltiplichiamo entrambi i membri dell'equazione differenziale per $\lambda(x)$ in modo da riconoscere al membro sinistro la derivata del prodotto $y(x) \cdot e^{-x^2}$:

$$
(y' - 2xy)e^{-x^2} = x e^{-x^2} \implies \frac{d}{dx} \left( y e^{-x^2} \right) = x e^{-x^2}
$$

4. **Integrazione**: Integriamo entrambi i membri rispetto a $x$:

$$
y e^{-x^2} = \int x e^{-x^2} \, dx = -\frac{1}{2} \int -2x e^{-x^2} \, dx = -\frac{1}{2} e^{-x^2} + c
$$

con $c \in \mathbb{R}$.

5. **Integrale generale**: Moltiplichiamo per $e^{x^2}$ per esplicitare la funzione $y(x)$:

$$
y(x) = -\frac{1}{2} + c e^{x^2}
$$

6. **Determinazione della costante**: Imponiamo la condizione iniziale $y(0) = \frac{1}{2}$ nell'integrale generale:

$$
\frac{1}{2} = -\frac{1}{2} + c e^0 \implies c = 1
$$

7. **Soluzione particolare**: Sostituendo la costante $c = 1$, la soluzione unica del problema di Cauchy è:

$$
y(x) = e^{x^2} - \frac{1}{2}
$$
