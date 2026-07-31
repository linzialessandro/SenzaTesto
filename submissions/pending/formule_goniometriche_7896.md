---
year: 4
macro_area: "Goniometria"
topic: "Formule goniometriche"
difficulty: 5
ai_generated: true
tags:
  - "Formule di Werner"
  - "Archi associati"
  - "Formule goniometriche"
  - "Semplificazione goniometrica"
---
# Problem Text
Determinare il valore esatto dell'espressione goniometrica:

$$
\sin(20^\circ) \cdot \sin(40^\circ) \cdot \sin(80^\circ)
$$

utilizzando rigorosamente le formule goniometriche (Werner, archi associati) senza far uso della calcolatrice.

# Solution
Consideriamo l'espressione:

$$
P = \sin(20^\circ) \cdot \sin(40^\circ) \cdot \sin(80^\circ)
$$

Applichiamo la prima formula di Werner per trasformare il prodotto $\sin(40^\circ) \sin(80^\circ)$ in una differenza di coseni:

$$
\sin \alpha \sin \beta = \frac{1}{2} \left[ \cos(\alpha - \beta) - \cos(\alpha + \beta) \right]
$$

Ponendo $\alpha = 40^\circ$ e $\beta = 80^\circ$, si ha:

$$
\sin(40^\circ) \sin(80^\circ) = \frac{1}{2} \left[ \cos(-40^\circ) - \cos(120^\circ) \right]
$$

Per la parità del coseno si ha $\cos(-40^\circ) = \cos(40^\circ)$, mentre per gli archi associati nel secondo quadrante:

$$
\cos(120^\circ) = \cos(180^\circ - 60^\circ) = -\cos(60^\circ) = -\frac{1}{2}
$$

Sostituendo nell'uguaglianza:

$$
\sin(40^\circ) \sin(80^\circ) = \frac{1}{2} \left( \cos(40^\circ) + \frac{1}{2} \right) = \frac{1}{2} \cos(40^\circ) + \frac{1}{4}
$$

Moltiplichiamo il risultato per $\sin(20^\circ)$:

$$
P = \sin(20^\circ) \left( \frac{1}{2} \cos(40^\circ) + \frac{1}{4} \right) = \frac{1}{2} \sin(20^\circ) \cos(40^\circ) + \frac{1}{4} \sin(20^\circ)
$$

Applichiamo la formula di Werner per il prodotto seno-coseno a $\sin(20^\circ) \cos(40^\circ)$:

$$
\sin \alpha \cos \beta = \frac{1}{2} \left[ \sin(\alpha + \beta) + \sin(\alpha - \beta) \right]
$$

con $\alpha = 20^\circ$ e $\beta = 40^\circ$:

$$
\sin(20^\circ) \cos(40^\circ) = \frac{1}{2} \left[ \sin(60^\circ) + \sin(-20^\circ) \right]
$$

Essendo la funzione seno dispari, $\sin(-20^\circ) = -\sin(20^\circ)$. Quindi:

$$
\sin(20^\circ) \cos(40^\circ) = \frac{1}{2} \sin(60^\circ) - \frac{1}{2} \sin(20^\circ)
$$

Sostituendo nell'espressione $P$:

$$
P = \frac{1}{2} \left( \frac{1}{2} \sin(60^\circ) - \frac{1}{2} \sin(20^\circ) \right) + \frac{1}{4} \sin(20^\circ)
$$

$$
P = \frac{1}{4} \sin(60^\circ) - \frac{1}{4} \sin(20^\circ) + \frac{1}{4} \sin(20^\circ) = \frac{1}{4} \sin(60^\circ)
$$

Poiché $\sin(60^\circ) = \frac{\sqrt{3}}{2}$, il valore esatto del prodotto è:

$$
P = \frac{1}{4} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{8}
$$
