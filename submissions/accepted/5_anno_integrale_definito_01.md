---
year: 5
macro_area: Analisi Matematica
topic: integrali
difficulty: 2
tags:
  - integrale definito
  - area
ai_generated: true
---
# Problem Text
Calcola il valore del seguente integrale definito:
$$
\int_1^2 (3x^2 - 2x + 1) \, dx
$$

# Solution
**1. Calcolo dell'integrale indefinito (primitiva):**
Troviamo la primitiva $F(x)$ della funzione integranda sfruttando la linearità dell'integrale:
$$
F(x) = \int (3x^2 - 2x + 1) \, dx = 3 \frac{x^3}{3} - 2 \frac{x^2}{2} + x = x^3 - x^2 + x
$$

**2. Applicazione del Teorema Fondamentale del Calcolo Integrale:**
L'integrale definito nell'intervallo $[a, b]$ è uguale alla differenza $F(b) - F(a)$:
$$
\int_1^2 (3x^2 - 2x + 1) \, dx = \left[ x^3 - x^2 + x \right]_1^2
$$

**3. Calcolo numerico:**
Valutiamo la primitiva nell'estremo superiore ($x=2$):
$F(2) = 2^3 - 2^2 + 2 = 8 - 4 + 2 = 6$

Valutiamo la primitiva nell'estremo inferiore ($x=1$):
$F(1) = 1^3 - 1^2 + 1 = 1 - 1 + 1 = 1$

Sottraiamo i due valori:
$$
F(2) - F(1) = 6 - 1 = 5
$$

Il valore dell'integrale definito è 5.
