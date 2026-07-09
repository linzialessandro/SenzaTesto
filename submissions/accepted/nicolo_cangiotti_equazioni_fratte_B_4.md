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
\frac{x+2}{x^2-5x+6}=0
$$

# Solution
Il Campo di Esistenza di una frazione algebrica (e quindi di un'equazione fratta) si calcola imponendo che il denominatore sia diverso da zero, per evitare l'operazione non definita di divisione per zero.

Poniamo:
$$
x^2 - 5x + 6 \neq 0
$$

Possiamo determinare quali valori annullano il denominatore risolvendo l'equazione associata $$x^2 - 5x + 6 = 0$$. Possiamo scomporre il polinomio come trinomio speciale (somma e prodotto) cercando due numeri che sommati facciano $$-5$$ e moltiplicati diano $$+6$$. I due numeri sono $$-2$$ e $$-3$$.
Otteniamo quindi:
$$
(x - 2)(x - 3) = 0
$$

I valori per cui questo prodotto si annulla sono $$x = 2$$ e $$x = 3$$.
Di conseguenza, affinché l'espressione abbia senso, dobbiamo porre:
$$
x \neq 2 \quad \wedge \quad x \neq 3
$$

In termini insiemistici, il Campo di Esistenza (C.E.) è $$\mathbb{R} \setminus \{2, 3\}$$.
