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
\frac{x+4}{x^2+x-2}=0
$$

# Solution
Il Campo di Esistenza prescrive quali valori dell'incognita sono leciti affinché la frazione algebrica sia matematicamente definita (ossia non comporti una divisione per zero).

Imponiamo perciò che il denominatore non si annulli:
$$
x^2 + x - 2 \neq 0
$$

Per trovare i valori "proibiti", dobbiamo risolvere l'equazione associata $$x^2 + x - 2 = 0$$. Possiamo scomporre il polinomio ricercando due numeri aventi somma $$+1$$ e prodotto $$-2$$. I due numeri sono $$+2$$ e $$-1$$.
Il polinomio si scompone in:
$$
(x + 2)(x - 1) = 0
$$

Tale prodotto si annulla per $$x = -2$$ e per $$x = 1$$.
Dobbiamo quindi escludere questi valori e porre:
$$
x \neq -2 \quad \wedge \quad x \neq 1
$$

Concludiamo scrivendo il Campo di Esistenza: $$\mathbb{R} \setminus \{-2, 1\}$$.
