---
year: 2
macro_area: "Frazioni algebriche"
topic: "Semplificazione, operazioni, equazioni razionali fratte"
difficulty: 4
ai_generated: true
tags:
  - "frazioni algebriche"
  - "condizioni di esistenza"
  - "equazioni fratte"
---
# Problem Text
Risolvi la seguente equazione razionale fratta, ricordando di stabilire le condizioni di esistenza e di verificare le soluzioni trovate:

$$\frac{2x+1}{x^2-1} - \frac{3}{x-1} = \frac{x-2}{x+1}$$

# Solution
**Condizioni di esistenza:** I denominatori non devono annullarsi.
- $x^2 - 1 \neq 0 \Rightarrow (x-1)(x+1) \neq 0 \Rightarrow x \neq 1$ e $x \neq -1$
- $x-1 \neq 0 \Rightarrow x \neq 1$
- $x+1 \neq 0 \Rightarrow x \neq -1$
Quindi C.E.: $x \neq \pm 1$.

**Risoluzione:** Scomponiamo $x^2 - 1 = (x-1)(x+1)$. Il minimo comune denominatore è $(x-1)(x+1)$. Moltiplichiamo entrambi i membri per il m.c.d. (che, grazie alle C.E., è non nullo):

$$(x-1)(x+1) \left[ \frac{2x+1}{(x-1)(x+1)} - \frac{3}{x-1} \right] = (x-1)(x+1) \cdot \frac{x-2}{x+1}$$

Semplificando:

$$(2x+1) - 3(x+1) = (x-2)(x-1)$$

Sviluppiamo i calcoli:

$$2x+1 - 3x - 3 = x^2 - 3x + 2$$

$$-x - 2 = x^2 - 3x + 2$$

Portiamo tutto a secondo membro:

$$0 = x^2 - 3x + 2 + x + 2 \Rightarrow x^2 - 2x + 4 = 0$$

Calcoliamo il discriminante:

$$\Delta = (-2)^2 - 4 \cdot 1 \cdot 4 = 4 - 16 = -12 < 0$$

Il discriminante è negativo, quindi l'equazione non ha soluzioni reali. Poiché non abbiamo ottenuto alcun valore da scartare, concludiamo che l'equazione è impossibile nell'insieme dei numeri reali.

**Soluzione:** Nessuna soluzione reale.
