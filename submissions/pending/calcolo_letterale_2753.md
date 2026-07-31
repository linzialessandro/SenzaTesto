---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Calcolo letterale"
difficulty: 5
ai_generated: true
tags:
  - "scomposizione di polinomi"
  - "prodotti notevoli"
  - "teorema del resto"
  - "sviluppo del cubo"
---
# Problem Text
Scomponi in fattori irriducibili il seguente polinomio nelle tre variabili $a$, $b$ e $c$:

$$
P(a, b, c) = (a + b + c)^3 - a^3 - b^3 - c^3
$$

# Solution
Per scomporre il polinomio $P(a, b, c) = (a + b + c)^3 - a^3 - b^3 - c^3$, si possono utilizzare due approcci algebrici distinti.

**Metodo 1: Sviluppo algebrico e raggruppamento parziale**

Consideriamo $(a+b+c)^3$ come il cubo del binomio $[(a+b)+c]^3$:

$$
[(a+b)+c]^3 = (a+b)^3 + 3(a+b)^2 c + 3(a+b)c^2 + c^3
$$

Sviluppando $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ e sostituendo nell'espressione di $P(a,b,c)$:

$$
P(a,b,c) = a^3 + 3a^2b + 3ab^2 + b^3 + 3(a+b)^2 c + 3(a+b)c^2 + c^3 - a^3 - b^3 - c^3
$$

Semplificando i termini opposti $a^3$, $b^3$ e $c^3$:

$$
P(a,b,c) = 3ab(a+b) + 3(a+b)^2 c + 3(a+b)c^2
$$

Raccogliamo a fattor comune totale $3(a+b)$:

$$
P(a,b,c) = 3(a+b) \left[ ab + c(a+b) + c^2 \right]
$$

Espandiamo e raggruppiamo i termini all'interno della parentesi quadra:

$$
ab + ac + bc + c^2 = a(b+c) + c(b+c) = (a+c)(b+c)
$$

Otteniamo la scomposizione finale in fattori irriducibili:

$$
P(a,b,c) = 3(a+b)(b+c)(c+a)
$$

**Metodo 2: Applicazione del Teorema del Resto**

Consideriamo $P(a,b,c)$ come polinomio nella sola variabile $a$. Ponendo $a = -b$:

$$
P(-b, b, c) = (-b + b + c)^3 - (-b)^3 - b^3 - c^3 = c^3 + b^3 - b^3 - c^3 = 0
$$

Per il Teorema del Resto, $P$ è divisibile per il binomio $(a+b)$. Per la simmetria del polinomio rispetto alle tre variabili, $P$ deve essere divisibile anche per $(b+c)$ e $(c+a)$.

Essendo $P(a,b,c)$ un polinomio omogeneo di terzo grado, la sua scomposizione deve avere la forma:

$$
P(a,b,c) = k(a+b)(b+c)(c+a)
$$

dove $k$ è un numero reale. Per determinare $k$, poniamo ad esempio $a = 1$, $b = 1$, $c = 1$:

$$
(1+1+1)^3 - 1^3 - 1^3 - 1^3 = k(1+1)(1+1)(1+1) \implies 27 - 3 = 8k \implies k = 3
$$

Si conferma la scomposizione $P(a,b,c) = 3(a+b)(b+c)(c+a)$.
