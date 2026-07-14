---
year: 4
macro_area: "Goniometria"
topic: "Formule goniometriche"
difficulty: 2
ai_generated: true
tags:
  - "archi associati"
  - "formule di duplicazione"
  - "semplificazione goniometrica"
  - "condizioni di esistenza"
---
# Problem Text
Semplifica la seguente espressione goniometrica, determinando prima le condizioni di esistenza:

$$
E(x) = \frac{\sin(\pi - x) \cos\left(\frac{\pi}{2} + x\right) + \cos(\pi + x) \sin\left(\frac{3}{2}\pi - x\right)}{\cos(2x)}
$$

# Solution
### 1. Condizioni di esistenza (C.E.)
La frazione algebrica è definita se e solo se il denominatore è diverso da zero:

$$
\cos(2x) \neq 0
$$

Da cui ricaviamo:

$$
2x \neq \frac{\pi}{2} + k\pi \implies x \neq \frac{\pi}{4} + k\frac{\pi}{2}, \quad k \in \mathbb{Z}
$$

---

### 2. Semplificazione del numeratore tramite archi associati
Utilizziamo le relazioni degli archi associati per riscrivere ciascun termine del numeratore in funzione di $x$:
- Primo termine: 

$$
\sin(\pi - x) = \sin(x)
$$

- Secondo termine: 

$$
\cos\left(\frac{\pi}{2} + x\right) = -\sin(x)
$$

- Terzo termine: 

$$
\cos(\pi + x) = -\cos(x)
$$

- Quarto termine: 

$$
\sin\left(\frac{3}{2}\pi - x\right) = -\cos(x)
$$

---

### 3. Sostituzione dei termini semplificati
Sostituendo le relazioni ottenute al numeratore dell'espressione, abbiamo:

$$
[\sin(x)] \cdot [-\sin(x)] + [-\cos(x)] \cdot [-\cos(x)]
$$

Sviluppando i prodotti algebrici:

$$
-\sin^2(x) + \cos^2(x) = \cos^2(x) - \sin^2(x)
$$

---

### 4. Applicazione della formula di duplicazione
Riconosciamo al numeratore la formula di duplicazione del coseno:

$$
\cos^2(x) - \sin^2(x) = \cos(2x)
$$

---

### 5. Sintesi e risultato finale
Sotto le C.E. stabilite al punto 1, sostituiamo il numeratore semplificato nella frazione originaria:

$$
E(x) = \frac{\cos(2x)}{\cos(2x)} = 1
$$

Il valore dell'espressione semplificata è costante e pari a $1$ per ogni $x \neq \frac{\pi}{4} + k\frac{\pi}{2}$, con $k \in \mathbb{Z}$.
