---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di Funzione"
difficulty: 1
tags:
  - "asintoti"
  - "polinomi"
  - "studio di funzione"
---
# Problem Text
La funzione $$f(x)=2x^4+3x^2+1$$ ammette asintoti (orizzontali/verticali/obliqui)?

# Solution
Analizziamo sistematicamente la ricerca di tutti i tipi di asintoti possibili per la funzione polinomale data $$f(x) = 2x^4 + 3x^2 + 1$$.

**1. Asintoti Verticali**
Gli asintoti verticali si ricercano nei punti di discontinuità o agli estremi esclusi del dominio.
Il dominio di una funzione polinomiale è sempre tutto l'insieme dei numeri reali, ovvero $$\mathcal{D} = (-\infty, +\infty)$$.
Non essendoci punti singolari o esclusi, **la funzione non ammette asintoti verticali**.

**2. Asintoti Orizzontali**
Gli asintoti orizzontali si verificano calcolando il limite agli estremi infiniti del dominio:
$$ \lim_{x \to \pm\infty} (2x^4 + 3x^2 + 1) $$
Per valutare il limite si considera il termine di grado massimo:
$$ \lim_{x \to \pm\infty} 2x^4 = 2(\pm\infty)^4 = +\infty $$
Essendo il risultato un infinito (non un numero finito $$l$$), **la funzione non ammette asintoti orizzontali**.

**3. Asintoti Obliqui**
Poiché il limite all'infinito vale infinito, potrebbero sussistere degli asintoti obliqui della forma $$y = mx + q$$. Calcoliamo il potenziale coefficiente angolare $$m$$:
$$ m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{2x^4 + 3x^2 + 1}{x} $$
Considerando solo i gradi massimi a numeratore e denominatore:
$$ m = \lim_{x \to \pm\infty} \frac{2x^4}{x} = \lim_{x \to \pm\infty} 2x^3 = \pm\infty $$
Poiché $$m$$ risulta essere infinito e non un numero reale finito diverso da zero, si conclude che **la funzione non ammette asintoti obliqui**.

In conclusione, **la funzione polinomiale data non ammette alcun tipo di asintoto**. (Questa è peraltro una proprietà generale di tutti i polinomi di grado strettamente maggiore di uno).
