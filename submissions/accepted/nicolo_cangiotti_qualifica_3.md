---
year: 3
macro_area: "Algebra e Modelli"
topic: "Disequazioni"
difficulty: 2
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
- $$x^2 - 12x + 65 = 45$$
- $$x^2 - 12x + 65 \ge 45$$

Il responsabile dell'officina vuole quindi sapere per quali valori del tempo il motore può funzionare senza superare il limite di sicurezza. Sfrutta il modello matematico precedentemente determinato per rispondere al quesito.

# Solution
**1. Scelta del modello matematico**
Il problema impone che la temperatura generata dal motore "non deve superare i $$45^\circ\text{C}$$". In termini matematici, ciò si traduce nel porre la funzione che modella la temperatura minore o uguale al limite massimo consentito.
Il modello corretto è la prima disequazione:
$$ x^2 - 12x + 65 \le 45 $$

**2. Risoluzione della disequazione**
Per sapere in quale intervallo di tempo il motore può funzionare in sicurezza, dobbiamo risolvere la disequazione di secondo grado:
- Riduciamo a forma normale portando il $$45$$ a primo membro:
  $$ x^2 - 12x + 65 - 45 \le 0 $$
  $$ x^2 - 12x + 20 \le 0 $$
- Troviamo le radici dell'equazione associata $$x^2 - 12x + 20 = 0$$ calcolando il discriminante:
  $$ \Delta = (-12)^2 - 4(1)(20) = 144 - 80 = 64 $$
- Le soluzioni dell'equazione associata sono:
  $$ x_{1,2} = \frac{12 \pm \sqrt{64}}{2} = \frac{12 \pm 8}{2} $$
  Da cui $$x_1 = \frac{4}{2} = 2$$ e $$x_2 = \frac{20}{2} = 10$$.
- Poiché la parabola associata $$y = x^2 - 12x + 20$$ volge la concavità verso l'alto (il coefficiente direttivo è $$1 > 0$$) e ci è richiesto dove sia $$\le 0$$ (minore o uguale a zero), i valori accettabili sono quelli compresi nell'intervallo "interno" tra le due radici.
  La soluzione della disequazione è:
  $$ 2 \le x \le 10 $$

Il motore può funzionare in piena sicurezza **tra il minuto $$2$$ e il minuto $$10$$**.
