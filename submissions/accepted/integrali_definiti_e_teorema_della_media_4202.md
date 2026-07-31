---
year: 5
macro_area: "Calcolo Integrale"
topic: "Integrali definiti e Teorema della Media"
difficulty: 2
ai_generated: true
tags:
  - "integrali definiti"
  - "teorema della media"
  - "Torricelli-Barrow"
  - "valore medio integrale"
---
# Problem Text
Si consideri la funzione $f(x) = 3x^2 - 6x + 4$ definita nell'intervallo $[0, 3]$. Calcola il valore medio $z$ della funzione in tale intervallo e determina tutti i valori $c \in [0, 3]$ per i quali $f(c) = z$, in accordo con il Teorema della Media Integrale.

# Solution
**Passaggio 1: Verifica delle ipotesi del Teorema della Media Integrale**  
La funzione $f(x) = 3x^2 - 6x + 4$ è polinomiale, pertanto è continua su tutto $\mathbb{R}$ e in particolare nell'intervallo chiuso e limitato $[0, 3]$. Per il Teorema della Media Integrale, esiste almeno un punto $c \in [0, 3]$ tale che:

$$
f(c) = \frac{1}{b - a} \int_a^b f(x) \, dx
$$

**Passaggio 2: Calcolo dell'integrale definito**  
Utilizzando il Teorema Fondamentale del Calcolo Integrale (formula di Torricelli-Barrow), individuiamo una primitiva $F(x) = x^3 - 3x^2 + 4x$ e calcoliamo:

$$
\int_0^3 (3x^2 - 6x + 4) \, dx = \left[ x^3 - 3x^2 + 4x \right]_0^3 = (3^3 - 3 \cdot 3^2 + 4 \cdot 3) - 0 = 12
$$

**Passaggio 3: Determinazione del valore medio $z$**  
Sostituendo il valore dell'integrale e la lunghezza dell'intervallo $b - a = 3 - 0 = 3$, si ottiene il valore medio $z$:

$$
z = \frac{1}{3} \cdot 12 = 4
$$

**Passaggio 4: Ricerca dei punti $c \in [0, 3]$**  
Impostiamo l'equazione $f(c) = z$:

$$
3c^2 - 6c + 4 = 4
$$

$$
3c^2 - 6c = 0 \implies 3c(c - 2) = 0
$$

**Passaggio 5: Conclusione**  
L'equazione ammette due soluzioni: $c_1 = 0$ e $c_2 = 2$. Entrambi i valori appartengono all'intervallo $[0, 3]$ e soddisfano la tesi del teorema.
