---
year: 2
macro_area: "Algebra"
topic: "Equazioni di primo grado letterali"
difficulty: 5
ai_generated: true
tags:
  - "equazioni di primo grado"
  - "equazioni letterali"
  - "discussione di parametri"
  - "frazioni algebriche"
---
# Problem Text
Discussioni al variare del parametro reale $a$ la seguente equazione letterale nell'incognita $x$:

$$
\frac{a^2 x + 1}{a + 1} - \frac{a x - 2}{a - 1} = \frac{2a x + a + 3}{a^2 - 1}
$$

# Solution
**1. Condizioni di Esistenza del parametro**
I denominatori della frazione algebrica si annullano per $a = 1$ e $a = -1$.
- Se $a = 1$ oppure $a = -1$, l'equazione **perde di significato** (non è definita).

**2. Riduzione in forma normale**
Per $a \neq \pm 1$, moltiplichiamo entrambi i membri per il minimo comune denominatore $(a+1)(a-1) = a^2 - 1$:

$$
(a - 1)(a^2 x + 1) - (a + 1)(a x - 2) = 2a x + a + 3
$$

Eseguiamo i prodotti e raggruppiamo i termini:

$$
a^3 x + a - a^2 x - 1 - a^2 x + 2a - a x + 2 = 2a x + a + 3
$$

Portando tutti i termini in $x$ al primo membro e i termini noti al secondo membro:

$$
(a^3 - 2a^2 - 3a) x = 2 - 2a
$$

Scomponiamo in fattori il coefficiente di $x$ e il termine noto:

$$
a(a - 3)(a + 1) x = -2(a - 1)
$$

**3. Discussione dei casi**
Ricordando la condizione iniziale $a \neq -1$ (quindi $a + 1 \neq 0$), studiamo i valori che annullano il coefficiente dell'incognita $A(a) = a(a - 3)(a + 1)$:

- **Caso $a = 0$**: l'equazione diventa $0 \cdot x = 2$, che è **impossibile** ($\mathbb{S} = \emptyset$).
- **Caso $a = 3$**: l'equazione diventa $0 \cdot x = -4$, che è **impossibile** ($\mathbb{S} = \emptyset$).
- **Caso $a \notin \{-1, 0, 1, 3\}$**: il coefficiente di $x$ è diverso da zero, dunque l'equazione è **determinata** e ammette un'unica soluzione:

$$
x = \frac{-2(a - 1)}{a(a - 3)(a + 1)} = \frac{2(1 - a)}{a(a + 1)(a - 3)}
$$

**Sintesi delle soluzioni:**
- $a = \pm 1$: non definita;
- $a = 0 \lor a = 3$: impossibile;
- $a \in \mathbb{R} \setminus \{-1, 0, 1, 3\}$: determinata con $x = \frac{2(1 - a)}{a(a + 1)(a - 3)}$.
