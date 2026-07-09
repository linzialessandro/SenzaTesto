---
year: 3
macro_area: "Algebra e Modelli"
topic: "Disequazioni"
difficulty: 1
tags:
  - "problema con testo"
  - "disequazioni di secondo grado"
  - "modelli matematici"
  - "scelta multipla"
---
# Problem Text
Durante il collaudo di un nuovo motore, un sensore registra la temperatura in funzione del tempo secondo la relazione:
$$ T(x) = x^2 - 12x + 65 $$
dove:
- $$T(x)$$ è la temperatura in gradi Celsius ($$^\circ\text{C}$$);
- $$x$$ è il tempo in minuti.

Per motivi di sicurezza il motore non deve superare i $$45^\circ\text{C}$$, altrimenti il sistema deve essere spento automaticamente. Il modello matematico che rappresenta il problema descritto è:
- $$x^2 - 12x + 65 \le 45$$
- $$x^2 - 12x + 65 \ge 45$$

Il responsabile dell'officina vuole quindi sapere per quali valori del tempo il motore può funzionare senza superare il limite di sicurezza. Sfrutta il modello matematico precedentemente determinato per rispondere al quesito.

# Solution
**1. Scelta del modello matematico**
La condizione di sicurezza indica che la temperatura $$T(x)$$ debba mantenersi rigorosamente al di sotto (o al massimo eguagliare) la soglia termica dei $$45^\circ\text{C}$$.
Si tradurrà perciò in una disequazione di segno minore o uguale. Il modello corretto è il primo:
$$ x^2 - 12x + 65 \le 45 $$

**2. Ricerca dell'intervallo temporale**
Trattandosi di un'espressione di secondo grado, la riordiniamo portando tutto a primo membro e confrontandola con lo zero:
  $$ x^2 - 12x + 65 - 45 \le 0 $$
  $$ x^2 - 12x + 20 \le 0 $$
Le radici dell'equazione omogenea associata ($$x^2 - 12x + 20 = 0$$) si trovano applicando la nota formula di risoluzione:
  $$ \Delta = (-12)^2 - 4(1)(20) = 144 - 80 = 64 $$
  $$ x_{1,2} = \frac{12 \pm 8}{2} $$
Si ottengono due radici temporali, $$x_1 = 2$$ e $$x_2 = 10$$.
Poiché il coefficiente del termine quadrato è positivo e la disequazione chiede il minore o uguale a zero ($$\le 0$$), le soluzioni sono i valori interni all'intervallo compreso tra le due radici.
La soluzione analitica è:
  $$ 2 \le x \le 10 $$

Nel collaudo reale, questo significa che il motore resterà sicuro e al di sotto dei 45 gradi **dal minuto $$2$$ al minuto $$10$$**.
