---
year: 5
macro_area: "Analisi Matematica"
topic: "Integrali"
difficulty: 2
tags:
  - "integrale indefinito"
  - "integrazione per sostituzione"
---
# Problem Text
Calcolare il seguente integrale indefinito:
$$ \int e^x\cdot\cos(e^x) \,\textrm{d}x $$

# Solution
Osserviamo che la funzione integranda contiene la composizione di due funzioni, $$\cos(e^x)$$, e il termine $$e^x$$ che corrisponde esattamente alla derivata dell'argomento del coseno.
Questo suggerisce di utilizzare il **metodo di sostituzione**.

Poniamo:
$$ t = e^x $$
Calcolando il differenziale di $$t$$ rispetto a $$x$$, otteniamo:
$$ dt = e^x \, dx $$

Sostituendo nell'integrale originale, l'espressione si semplifica notevolmente:
$$ \int \cos(t) \, dt $$

Questo è un integrale fondamentale la cui primitiva è il seno:
$$ \int \cos(t) \, dt = \sin(t) + c $$

Tornando alla variabile originale $$x$$ tramite la relazione $$t = e^x$$, il risultato finale è:
$$ \sin(e^x) + c $$
