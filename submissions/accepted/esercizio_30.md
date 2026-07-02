---
year: 5
macro_area: Analisi Matematica (Integrali)
topic: integrali indefiniti
difficulty: 2
tags:
  - primitive elementari
  - calcolo integrale
---
# Problem Text
Calcola il seguente integrale indefinito di funzioni elementari:
$$ \int \left( 4x^3 - \frac{1}{x^2} + \sin x \right) dx $$

# Solution
L'operatore di integrazione è lineare: l'integrale di una somma è pari alla somma degli integrali delle singole funzioni. Riscriviamo anzitutto la frazione algebrica come potenza con esponente negativo per rendere evidente la regola da applicare:
$$ \int (4x^3 - x^{-2} + \sin x) \, dx $$

Calcoliamo le singole primitive termine a termine, richiamando dalla tabella le regole fondamentali degli integrali indefiniti:
- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + c$
- $\int \sin x \, dx = -\cos x + c$

**Primo termine:**
$$ \int 4x^3 \, dx = 4 \left( \frac{x^4}{4} \right) = x^4 $$

**Secondo termine:**
Facendo molta attenzione ai segni negativi:
$$ \int -x^{-2} \, dx = - \frac{x^{-2+1}}{-2+1} = - \frac{x^{-1}}{-1} = + x^{-1} = \frac{1}{x} $$

**Terzo termine:**
$$ \int \sin x \, dx = -\cos x $$

Al termine dell'integrazione, sommiamo i tre contributi appena calcolati e accodiamo la costante arbitraria reale di integrazione $C$:
$$ \int \left( 4x^3 - \frac{1}{x^2} + \sin x \right) dx = x^4 + \frac{1}{x} - \cos x + C $$
