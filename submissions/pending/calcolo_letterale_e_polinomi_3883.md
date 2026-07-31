---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Calcolo letterale e polinomi"
difficulty: 5
ai_generated: true
tags:
  - "polinomi"
  - "prodotti notevoli"
  - "scomposizione"
  - "principio di identit\u00e0"
  - "parametri"
---
# Problem Text
Determina tutte le coppie di parametri reali $(a, b)$ per cui il polinomio

$$
P(x) = x^4 + a x^3 + b x^2 - 8x + 4
$$

può essere espresso come il quadrato di un trinomio della forma $x^2 + kx + m$, con $k, m \in \mathbb{R}$, e scrivi la scomposizione in fattori di $P(x)$ per ciascun caso trovato.

# Solution
Calcoliamo lo sviluppo del quadrato del trinomio $(x^2 + kx + m)^2$:

$$
(x^2 + kx + m)^2 = x^4 + 2kx^3 + (k^2 + 2m)x^2 + 2kmx + m^2
$$

Uguagliamo i coefficienti di questo sviluppo con quelli di $P(x) = x^4 + ax^3 + bx^2 - 8x + 4$ per il principio di identità dei polinomi:
1. Termine noto: $m^2 = 4 \implies m = 2$ oppure $m = -2$.
2. Coefficiente di $x$: $2km = -8 \implies km = -4$.
3. Coefficiente di $x^3$: $a = 2k$.
4. Coefficiente di $x^2$: $b = k^2 + 2m$.

Distinguiamo i due casi possibili per $m$:

- **Caso 1:** $m = 2$  
Dalla relazione $km = -4$, si ottiene $2k = -4 \implies k = -2$.  
Calcoliamo i valori di $a$ e $b$:

$$
a = 2(-2) = -4
$$

$$
b = (-2)^2 + 2(2) = 4 + 4 = 8
$$

Otteniamo la coppia $(a, b) = (-4, 8)$ e il polinomio si scompone in $P(x) = (x^2 - 2x + 2)^2$.

- **Caso 2:** $m = -2$  
Dalla relazione $km = -4$, si ottiene $-2k = -4 \implies k = 2$.  
Calcoliamo i valori di $a$ e $b$:

$$
a = 2(2) = 4
$$

$$
b = 2^2 + 2(-2) = 4 - 4 = 0
$$

Otteniamo la coppia $(a, b) = (4, 0)$ e il polinomio si scompone in $P(x) = (x^2 + 2x - 2)^2$.

In conclusione, le coppie cercate sono $(-4, 8)$ con $P(x) = (x^2 - 2x + 2)^2$, e $(4, 0)$ con $P(x) = (x^2 + 2x - 2)^2$.
