---
year: 4
macro_area: "Goniometria"
topic: "Formule Goniometriche"
difficulty: 2
ai_generated: true
tags:
  - "goniometria"
  - "formule di duplicazione"
  - "semplificazione espressioni"
  - "tangente"
---
# Problem Text
Semplifica la seguente espressione goniometrica:

$$
E(x) = \frac{\sin(2x) + \sin x}{1 + \cos(2x) + \cos x}
$$

# Solution
Per semplificare l'espressione:

$$
E(x) = \frac{\sin(2x) + \sin x}{1 + \cos(2x) + \cos x}
$$

**Passaggio 1: Applicazione delle formule di duplicazione**
Ricordiamo le formule di duplicazione per il seno e il coseno:

$$
\sin(2x) = 2\sin x \cos x
$$

$$
\cos(2x) = 2\cos^2 x - 1
$$

**Passaggio 2: Fattorizzazione del numeratore**
Sostituiamo $\sin(2x)$ al numeratore e raccogliamo $\sin x$:

$$
\sin(2x) + \sin x = 2\sin x \cos x + \sin x = \sin x (2\cos x + 1)
$$

**Passaggio 3: Fattorizzazione del denominatore**
Sostituiamo $\cos(2x)$ al denominatore e raccogliamo $\cos x$:

$$
1 + \cos(2x) + \cos x = 1 + (2\cos^2 x - 1) + \cos x = 2\cos^2 x + \cos x = \cos x (2\cos x + 1)
$$

**Passaggio 4: Condizioni di Esistenza (C.E.)**
L'espressione è definita quando il denominatore è diverso da zero:

$$
\cos x (2\cos x + 1) \neq 0 \implies x \neq \frac{\pi}{2} + k\pi \quad \text{e} \quad x \neq \pm \frac{2\pi}{3} + 2k\pi \quad (k \in \mathbb{Z})
$$

**Passaggio 5: Semplificazione del rapporto**
Sotto le C.E., elidiamo il fattore comune $(2\cos x + 1)$:

$$
E(x) = \frac{\sin x (2\cos x + 1)}{\cos x (2\cos x + 1)} = \frac{\sin x}{\cos x}
$$

**Passaggio 6: Conclusione**
Applicando la seconda relazione fondamentale della goniometria ($\tan x = \frac{\sin x}{\cos x}$), otteniamo il risultato finale:

$$
E(x) = \tan x
$$
