---
year: 2
macro_area: "Algebra"
topic: "Equazioni di primo grado letterali"
difficulty: 2
ai_generated: true
tags:
  - "equazioni letterali"
  - "discussione parametro"
  - "equazioni di primo grado"
  - "algebra"
---
# Problem Text
Risolvi e discuti la seguente equazione letterale nell'incognita $x$ al variare del parametro reale $a$:

$$
a^2 x - 1 = a + x
$$

# Solution
**Passaggio 1:** Trasportiamo i termini contenenti l'incognita $x$ al primo membro e i termini noti al secondo membro:

$$
a^2 x - x = a + 1
$$

**Passaggio 2:** Raccogliamo $x$ a fattor comune al primo membro:

$$
(a^2 - 1)x = a + 1
$$

**Passaggio 3:** Scomponiamo il coefficiente $(a^2 - 1)$ utilizzando la regola della differenza di quadrati:

$$
(a - 1)(a + 1)x = a + 1
$$

**Passaggio 4:** Discutiamo l'equazione al variare del parametro $a$:

- **Caso 1 ($a \neq 1$ e $a \neq -1$):**
Il coefficiente dell'incognita è diverso da zero, quindi dividiamo entrambi i membri per $(a - 1)(a + 1)$ e semplifichiamo:

$$
x = \frac{a + 1}{(a - 1)(a + 1)} = \frac{1}{a - 1}
$$

L'equazione è **determinata**.

- **Caso 2 ($a = 1$):**
Sostituendo $a = 1$ otteniamo:

$$
(0 \cdot 2)x = 2 \implies 0 \cdot x = 2
$$

L'equazione è **impossibile**.

- **Caso 3 ($a = -1$):**
Sostituendo $a = -1$ otteniamo:

$$
(-2 \cdot 0)x = 0 \implies 0 \cdot x = 0
$$

L'equazione è **indeterminata**.

**Passaggio 5 (Sintesi dei risultati):**
- Per $a \neq \pm 1$: $x = \frac{1}{a - 1}$ (determinata)
- Per $a = 1$: impossibile
- Per $a = -1$: indeterminata
