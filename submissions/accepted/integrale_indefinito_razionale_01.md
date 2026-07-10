---
year: 5
macro_area: Analisi
topic: integrali indefiniti
difficulty: 3
tags:
  - funzioni razionali
  - fratti semplici
ai_generated: true
---
# Problem Text
Calcola il seguente integrale indefinito di una funzione razionale:
$$ \int \frac{2x + 1}{x^2 - x - 2} \, dx $$

# Solution
Scomponiamo il denominatore del radicando: $x^2 - x - 2 = (x - 2)(x + 1)$.

Cerchiamo la scomposizione in fratti semplici:
$$ \frac{2x + 1}{(x - 2)(x + 1)} = \frac{A}{x - 2} + \frac{B}{x + 1} $$

Moltiplicando per il minimo comune multiplo si ha l'identità:
$$ 2x + 1 = A(x + 1) + B(x - 2) $$

Per il Principio di identità dei polinomi, possiamo assegnare valori ad $x$ che annullano i singoli termini:
- Per $x = 2$, otteniamo $5 = 3A \implies A = \frac{5}{3}$.
- Per $x = -1$, otteniamo $-1 = -3B \implies B = \frac{1}{3}$.

Possiamo così spezzare l'integrale:
$$ \int \frac{2x + 1}{x^2 - x - 2} \, dx = \frac{5}{3} \int \frac{1}{x - 2} \, dx + \frac{1}{3} \int \frac{1}{x + 1} \, dx $$

Calcolando gli integrali si ottiene il risultato:
$$ \frac{5}{3} \ln|x - 2| + \frac{1}{3} \ln|x + 1| + C $$
