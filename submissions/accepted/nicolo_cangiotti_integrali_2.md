---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 2
tags:
  - "integrale indefinito"
  - "integrazione per parti"
---
# Problem Text
Calcolare il seguente integrale indefinito:
$$ \int x\cdot e^{4x} \,\textrm{d}x $$

# Solution
L'integrale si presenta come il prodotto tra una funzione polinomiale ($$x$$) e una funzione esponenziale ($$e^{4x}$$). Il metodo risolutivo più adatto è l'**integrazione per parti**, la cui formula è:
$$ \int f(x)g'(x) \, dx = f(x)g(x) - \int f'(x)g(x) \, dx $$

Scegliamo:
- Il fattore finito (da derivare) $$f(x) = x \implies f'(x) = 1$$
- Il fattore differenziale (da integrare) $$g'(x) = e^{4x} \implies g(x) = \frac{1}{4}e^{4x}$$

Applicando la formula otteniamo:
$$ \int x \cdot e^{4x} \, dx = x \cdot \left(\frac{1}{4}e^{4x}\right) - \int 1 \cdot \left(\frac{1}{4}e^{4x}\right) \, dx $$
$$ = \frac{1}{4}x e^{4x} - \frac{1}{4} \int e^{4x} \, dx $$

Risolviamo l'ultimo integrale elementare rimasto:
$$ \int e^{4x} \, dx = \frac{1}{4}e^{4x} $$

Sostituendo quest'ultimo risultato:
$$ = \frac{1}{4}x e^{4x} - \frac{1}{4} \left(\frac{1}{4}e^{4x}\right) + c $$
$$ = \frac{1}{4}x e^{4x} - \frac{1}{16}e^{4x} + c $$

Raccogliendo a fattor comune, il risultato finale si può scrivere come:
$$ \frac{e^{4x}}{4} \left(x - \frac{1}{4}\right) + c $$
