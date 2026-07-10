---
year: 1
macro_area: Calcolo letterale
topic: divisione tra polinomi
difficulty: 2
tags:
  - divisione in colonna
  - quoziente
  - resto
ai_generated: true
---
# Problem Text
Esegui la seguente divisione tra polinomi e determina il quoziente $Q(x)$ e il resto $R(x)$:
$(2x^3 - x^2 + 4x - 3) : (x^2 + 1)$

# Solution
**1. Impostiamo la divisione in colonna:**
Dividiamo il primo termine del dividendo ($2x^3$) per il primo termine del divisore ($x^2$):
$2x^3 / x^2 = 2x$.

**2. Moltiplichiamo e sottraiamo:**
Moltiplichiamo $2x$ per il divisore $(x^2 + 1)$ ottenendo $2x^3 + 2x$.
Sottraiamo questo risultato dal dividendo:
$(2x^3 - x^2 + 4x - 3) - (2x^3 + 2x) = -x^2 + 2x - 3$.

**3. Ripetiamo il procedimento:**
Dividiamo il primo termine del nuovo resto ($-x^2$) per $x^2$:
$-x^2 / x^2 = -1$.
Moltiplichiamo $-1$ per $(x^2 + 1)$ ottenendo $-x^2 - 1$.
Sottraiamo dal parziale:
$(-x^2 + 2x - 3) - (-x^2 - 1) = 2x - 2$.

**4. Conclusione:**
Il grado del resto ($2x - 2$) è inferiore al grado del divisore ($x^2 + 1$), quindi la divisione è terminata.
Quoziente: $Q(x) = 2x - 1$
Resto: $R(x) = 2x - 2$
