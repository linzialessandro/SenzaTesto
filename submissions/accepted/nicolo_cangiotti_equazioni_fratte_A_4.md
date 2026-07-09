---
year: 2
macro_area: "Algebra"
topic: "Equazioni"
difficulty: 2
tags:
  - "equazioni fratte"
  - "campo di esistenza"
---
# Problem Text
Determina, mostrando tutti i passaggi, il **Campo di Esistenza** (**C.E.**) della seguente equazione fratta:
$$
\frac{x+6}{x^2-4x+3}=0
$$

# Solution
Il Campo di Esistenza di una frazione algebrica (o equazione fratta) si ottiene ponendo il denominatore rigorosamente diverso da zero. L'obiettivo è escludere tutti quei valori dell'incognita per i quali si incorrerebbe in una divisione per zero.

Poniamo la condizione:
$$
x^2 - 4x + 3 \neq 0
$$

Per capire quali valori escludere, risolviamo l'equazione associata $$x^2 - 4x + 3 = 0$$. Notiamo che il polinomio si può scomporre riconoscendolo come un trinomio speciale di secondo grado, la cui somma (S) è $$-4$$ e il cui prodotto (P) è $$3$$.
I due numeri cercati sono $$-1$$ e $$-3$$, quindi:
$$
(x - 1)(x - 3) = 0
$$
I valori che annullano questo prodotto (e quindi il denominatore) sono $$x = 1$$ e $$x = 3$$.

Per il Campo di Esistenza, la condizione diventa perciò:
$$
x \neq 1 \quad \wedge \quad x \neq 3
$$

Scritto in notazione insiemistica, il **C.E.** è l'insieme dei numeri reali escluso l'insieme formato dai numeri $$1$$ e $$3$$: $$\mathbb{R} \setminus \{1, 3\}$$.
