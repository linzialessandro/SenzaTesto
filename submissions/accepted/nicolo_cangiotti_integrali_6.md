---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 3
tags:
  - "integrale definito"
  - "integrazione per sostituzione"
  - "integrazione per parti"
---
# Problem Text
Calcolare il seguente integrale definito:
$$ \int_{0}^{1} e^{\sqrt{x}} \,\textrm{d}x $$

# Solution
Per semplificare la funzione integranda, eliminiamo l'irrazionalità all'esponente operando una sostituzione:
$$ t = \sqrt{x} $$
Da questa ricaviamo la variabile $$x$$ elevando tutto al quadrato (lecito perché lavoriamo nell'intervallo positivo $$[0, 1]$$):
$$ x = t^2 $$
Calcoliamo il differenziale:
$$ dx = 2t \, dt $$

Aggiorniamo anche gli estremi di integrazione (ricordando che $$t = \sqrt{x}$$):
- Se $$x = 0$$, allora $$t = \sqrt{0} = 0$$
- Se $$x = 1$$, allora $$t = \sqrt{1} = 1$$
Gli estremi non cambiano. L'integrale diventa quindi:
$$ \int_{0}^{1} e^t (2t) \, dt = 2 \int_{0}^{1} t e^t \, dt $$

Ora abbiamo da risolvere l'integrale $$\int t e^t dt$$, che si affronta col metodo di integrazione per parti ($$\int f \cdot g' = f \cdot g - \int f' \cdot g$$).
Scegliamo:
- $$f(t) = t \implies f'(t) = 1$$
- $$g'(t) = e^t \implies g(t) = e^t$$

Applicando la formula otteniamo la primitiva:
$$ \int t e^t \, dt = t e^t - \int 1 \cdot e^t \, dt = t e^t - e^t = e^t(t - 1) $$

Calcoliamo infine l'integrale definito inserendo il fattore 2 lasciato precedentemente fuori e applicando la formula di Newton-Leibniz tra gli estremi $$0$$ e $$1$$:
$$ 2 \left[ e^t(t - 1) \right]_0^1 $$
Valutando nell'estremo superiore (1): $$2 [e^1(1 - 1)] = 0$$
Valutando nell'estremo inferiore (0): $$2 [e^0(0 - 1)] = 2(1)(-1) = -2$$
Il risultato finale è la differenza tra le valutazioni:
$$ 0 - (-2) = 2 $$
