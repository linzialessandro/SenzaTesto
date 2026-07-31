---
year: 2
macro_area: "Algebra"
topic: "Equazioni di primo grado letterali"
difficulty: 5
ai_generated: true
tags:
  - "equazioni di primo grado"
  - "equazioni letterali"
  - "discussione parametrica"
  - "regola di ruffini"
  - "algebra"
---
# Problem Text
Risolvi e discuti la seguente equazione lineare intera al variare del parametro reale $a$:

$$
a(a^2 - 5)x + 6x + 4a = 2a^2 x + a^2 + 3
$$

# Solution
**1. Isolamento dei termini con l'incognita $x$**

Trasportiamo i termini contenenti l'incognita $x$ al primo membro e i termini noti al secondo membro:

$$
a(a^2 - 5)x + 6x - 2a^2 x = a^2 - 4a + 3
$$

Raccogliamo $x$ a fattor comune al primo membro:

$$
(a^3 - 2a^2 - 5a + 6)x = a^2 - 4a + 3
$$

---

**2. Scomposizione dei coefficienti in fattori**

Scomponiamo il coefficiente dell'incognita $A(a) = a^3 - 2a^2 - 5a + 6$. Notando che $A(1) = 1 - 2 - 5 + 6 = 0$, possiamo dividere per $(a - 1)$ tramite la regola di Ruffini:

$$
a^3 - 2a^2 - 5a + 6 = (a - 1)(a^2 - a - 6) = (a - 1)(a - 3)(a + 2)
$$

Scomponiamo il termine noto $B(a) = a^2 - 4a + 3$:

$$
a^2 - 4a + 3 = (a - 1)(a - 3)
$$

L'equazione ridotta in forma normale $A(a)x = B(a)$ diventa:

$$
(a - 1)(a - 3)(a + 2)x = (a - 1)(a - 3)
$$

---

**3. Discussione al variare di $a \in \mathbb{R}$**

- **Caso 1: $a \neq 1 \land a \neq 3 \land a \neq -2$**
  Poiché il coefficiente di $x$ è diverso da zero, l'equazione è **determinata**. Dividendo ambo i membri per $(a - 1)(a - 3)(a + 2)$, otteniamo:
  
$$
x = \frac{(a - 1)(a - 3)}{(a - 1)(a - 3)(a + 2)} = \frac{1}{a + 2}
$$

- **Caso 2: $a = 1$**
  Sostituendo $a = 1$, l'equazione diventa:
  
$$
0 \cdot x = 0
$$

  L'equazione è **indeterminata** ($S = \mathbb{R}$).

- **Caso 3: $a = 3$**
  Sostituendo $a = 3$, l'equazione diventa:
  
$$
0 \cdot x = 0
$$

  L'equazione è **indeterminata** ($S = \mathbb{R}$).

- **Caso 4: $a = -2$**
  Sostituendo $a = -2$, l'equazione diventa:
  
$$
0 \cdot x = 15
$$

  L'equazione è **impossibile** ($S = \emptyset$).
