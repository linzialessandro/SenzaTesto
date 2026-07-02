---
year: 1
macro_area: Calcolo letterale
topic: Divisione tra polinomi
difficulty: 3
tags:
  - polinomi
  - divisione
---
# Problem Text

Esegui la seguente divisione tra polinomi e scrivi il risultato nella forma $A(x) = B(x) \cdot Q(x) + R(x)$:
$$
(2x^4 - 3x^3 + 5x - 4) \div (x^2 - x + 1)
$$

# Solution

Impostiamo la divisione in colonna. Ordinamo e completiamo il polinomio dividendo: $2x^4 - 3x^3 + 0x^2 + 5x - 4$.
Il polinomio divisore è $x^2 - x + 1$.

**Passo 1:**
Dividiamo il termine di grado massimo del dividendo ($2x^4$) per il termine di grado massimo del divisore ($x^2$).
$$ \frac{2x^4}{x^2} = 2x^2 $$
Questo è il primo termine del quoziente.
Moltiplichiamo $2x^2$ per il divisore $(x^2 - x + 1)$, ottenendo $2x^4 - 2x^3 + 2x^2$.
Sottraiamo questo risultato dal dividendo:
$$ (2x^4 - 3x^3 + 0x^2) - (2x^4 - 2x^3 + 2x^2) = -x^3 - 2x^2 $$
Abbassiamo i restanti termini: $-x^3 - 2x^2 + 5x - 4$.

**Passo 2:**
Dividiamo $-x^3$ per $x^2$, ottenendo $-x$.
Moltiplichiamo $-x$ per il divisore: $-x^3 + x^2 - x$.
Sottraiamo:
$$ (-x^3 - 2x^2 + 5x) - (-x^3 + x^2 - x) = -3x^2 + 6x $$
Abbassiamo il -4: $-3x^2 + 6x - 4$.

**Passo 3:**
Dividiamo $-3x^2$ per $x^2$, ottenendo $-3$.
Moltiplichiamo $-3$ per il divisore: $-3x^2 + 3x - 3$.
Sottraiamo:
$$ (-3x^2 + 6x - 4) - (-3x^2 + 3x - 3) = 3x - 1 $$

Il grado del resto ($3x - 1$) è 1, inferiore al grado del divisore (2). La divisione termina qui.

**Risultato:**
Quoziente: $Q(x) = 2x^2 - x - 3$
Resto: $R(x) = 3x - 1$
$$ 2x^4 - 3x^3 + 5x - 4 = (x^2 - x + 1)(2x^2 - x - 3) + (3x - 1) $$
