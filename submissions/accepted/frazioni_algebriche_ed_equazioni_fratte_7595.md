---
year: 2
macro_area: "Algebra"
topic: "Frazioni algebriche ed equazioni fratte"
difficulty: 2
tags:
  - "Frazioni algebriche"
  - "Equazioni fratte"
  - "Condizioni di esistenza"
  - "Semplificazione"
ai_generated: true
---
# Problem Text
Determinare l'insieme delle soluzioni della seguente equazione razionale fratta, prestando attenzione alle condizioni di esistenza e alla semplificazione delle frazioni:

$$
\frac{x-2}{x^2 - 2x} - \frac{1}{x^2 - 4} = \frac{x-1}{x^2 + 2x}
$$

# Solution
Scomponiamo in fattori i denominatori presenti nell'equazione:

$$
x^2 - 2x = x(x-2)
$$

$$
x^2 - 4 = (x-2)(x+2)
$$

$$
x^2 + 2x = x(x+2)
$$

**1. Condizioni di Esistenza (C.E.)**
I denominatori non devono annullarsi. Imponiamo quindi che ciascun fattore sia diverso da zero:
- $x \neq 0$
- $x - 2 \neq 0 \implies x \neq 2$
- $x + 2 \neq 0 \implies x \neq -2$

Le condizioni di esistenza sono:

$$
\text{C.E.: } x \in \mathbb{R} \setminus \{-2, 0, 2\}
$$

**2. Semplificazione e risoluzione dell'equazione**
Riscriviamo l'equazione evidenziando i denominatori scomposti:

$$
\frac{x-2}{x(x-2)} - \frac{1}{(x-2)(x+2)} = \frac{x-1}{x(x+2)}
$$

Sotto le C.E. stabilite, possiamo semplificare il fattore $(x-2)$ al numeratore e al denominatore della prima frazione:

$$
\frac{1}{x} - \frac{1}{(x-2)(x+2)} = \frac{x-1}{x(x+2)}
$$

Il minimo comune multiplo dei denominatori è $x(x-2)(x+2)$. Portiamo tutti i termini ad avere lo stesso denominatore:

$$
\frac{(x-2)(x+2) - x}{x(x-2)(x+2)} = \frac{(x-1)(x-2)}{x(x-2)(x+2)}
$$

Poiché il denominatore comune è diverso da zero per le C.E., possiamo uguagliare i numeratori:

$$
(x-2)(x+2) - x = (x-1)(x-2)
$$

Sviluppiamo i prodotti:

$$
x^2 - 4 - x = x^2 - 3x + 2
$$

Sottraiamo $x^2$ da entrambi i membri e isoliamo i termini con la variabile $x$:

$$
-x - 4 = -3x + 2
$$

$$
2x = 6
$$

$$
x = 3
$$

**3. Verifica di accettabilità**
Confrontando il valore ottenuto con le Condizioni di Esistenza, verifichiamo che $3 \in \mathbb{R} \setminus \{-2, 0, 2\}$. Pertanto, la soluzione $x = 3$ è pienamente accettabile.

L'insieme delle soluzioni è:

$$
S = \{3\}
$$
