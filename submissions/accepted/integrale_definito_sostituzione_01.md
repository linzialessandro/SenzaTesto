---
year: 5
macro_area: Analisi
topic: integrali definiti
difficulty: 3
tags:
  - per sostituzione
  - funzioni goniometriche
---
# Problem Text
Calcola il seguente integrale definito: 
$$ \int_{0}^{\frac{\pi}{2}} \sin^2(x) \cos(x) \, dx $$

# Solution
Risolviamo l'integrale tramite la sostituzione di variabile. Poniamo $t = \sin(x)$.
Il differenziale risulta essere $dt = \cos(x) \, dx$.

Per l'integrale definito, cambiamo anche gli estremi di integrazione rispetto alla nuova variabile $t$:
- Estremo inferiore: per $x = 0$, $t = \sin(0) = 0$
- Estremo superiore: per $x = \frac{\pi}{2}$, $t = \sin\left(\frac{\pi}{2}\right) = 1$

Sostituendo nell'integrale originario, l'espressione si semplifica notevolmente in:
$$ \int_{0}^{\frac{\pi}{2}} \sin^2(x) \cos(x) \, dx = \int_{0}^{1} t^2 \, dt $$

Calcoliamo l'integrale polinomiale nella nuova variabile:
$$ \int_{0}^{1} t^2 \, dt = \left[ \frac{t^3}{3} \right]_0^1 = \frac{1}{3} - 0 = \frac{1}{3} $$
