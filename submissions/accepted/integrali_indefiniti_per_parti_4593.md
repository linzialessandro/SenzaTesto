---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali indefiniti per parti"
difficulty: 2
ai_generated: true
tags:
  - "integrali indefiniti"
  - "integrazione per parti"
  - "quinto anno"
---
# Problem Text
Calcolare il seguente integrale indefinito per $x > 0$:

$$
\int x \ln(x) \, dx
$$

# Solution
Per risolvere l'integrale si applica il metodo di integrazione per parti, la cui formula è:

$$
\int f(x) g'(x) \, dx = f(x) g(x) - \int f'(x) g(x) \, dx
$$

Scegliamo i fattori nel modo seguente:
- Fattore finito: $f(x) = \ln(x)$, da cui derivando si ottiene $f'(x) = \frac{1}{x}$
- Fattore differenziale: $g'(x) = x$, da cui integrando si ottiene $g(x) = \frac{x^2}{2}$

Sostituendo nella formula si ha:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \int \frac{1}{x} \cdot \frac{x^2}{2} \, dx
$$

Semplifichiamo l'integrando del secondo termine:

$$
\int \frac{1}{x} \cdot \frac{x^2}{2} \, dx = \frac{1}{2} \int x \, dx
$$

Calcoliamo l'integrale immediato rimanente:

$$
\frac{1}{2} \int x \, dx = \frac{1}{2} \cdot \left( \frac{x^2}{2} \right) = \frac{x^2}{4}
$$

Combinando i risultati e aggiungendo la costante d'integrazione $c \in \mathbb{R}$, si ottiene la soluzione finale:

$$
\int x \ln(x) \, dx = \frac{x^2}{2} \ln(x) - \frac{x^2}{4} + c
$$
