---
year: 4
macro_area: Goniometria
topic: Formule goniometriche e archi associati
difficulty: 3
tags:
  - archi associati
  - formule di sottrazione
  - semplificazione goniometrica
  - funzioni goniometriche
ai_generated: true
---
# Problem Text
Si consideri la seguente espressione goniometrica:
$$E(\alpha) = \frac{\sin\left(\frac{3}{2}\pi - \alpha\right) \cos(2\alpha) + \cos\left(\frac{\pi}{2} + \alpha\right) \sin(2\alpha)}{\sin(\pi + \alpha) \cos(2\alpha) - \cos(\pi - \alpha) \sin(2\alpha)}$$

1. Determinare le condizioni di esistenza dell'espressione.
2. Semplificare l'espressione $E(\alpha)$ utilizzando le formule degli archi associati e le formule di addizione e sottrazione.
3. Calcolare il valore di $E(\alpha)$ per $\alpha = \frac{\pi}{6}$.

# Solution
1. **Determinazione delle condizioni di esistenza:**
L'espressione $E(\alpha)$ è definita laddove il denominatore è diverso da zero. Imponiamo quindi la condizione di esistenza:
$$\sin(\pi + \alpha) \cos(2\alpha) - \cos(\pi - \alpha) \sin(2\alpha) \neq 0$$

Utilizzando le formule degli archi associati, sappiamo che:
- $\sin(\pi + \alpha) = -\sin\alpha$
- $\cos(\pi - \alpha) = -\cos\alpha$

Sostituendo queste identità nel denominatore, la condizione diventa:
$$(-\sin\alpha)\cos(2\alpha) - (-\cos\alpha)\sin(2\alpha) \neq 0$$
$$\sin(2\alpha)\cos\alpha - \cos(2\alpha)\sin\alpha \neq 0$$

Riconosciamo al primo membro la formula di sottrazione del seno, per cui $\sin(x - y) = \sin x \cos y - \cos x \sin y$. Ponendo $x = 2\alpha$ e $y = \alpha$, l'espressione si riduce a:
$$\sin(2\alpha - \alpha) \neq 0 \implies \sin\alpha \neq 0$$

La funzione seno si annulla nei multipli interi di $\pi$. Di conseguenza, le condizioni di esistenza dell'espressione sono:
$$\alpha \neq k\pi, \quad k \in \mathbb{Z}$$

---

2. **Semplificazione dell'espressione:**

* **Passo 1: Applicazione degli archi associati al numeratore**
Analizziamo il numeratore dell'espressione:
$$\text{Num} = \sin\left(\frac{3}{2}\pi - \alpha\right) \cos(2\alpha) + \cos\left(\frac{\pi}{2} + \alpha\right) \sin(2\alpha)$$
Ricordando le relazioni degli archi associati:
- $\sin\left(\frac{3}{2}\pi - \alpha\right) = -\cos\alpha$
- $\cos\left(\frac{\pi}{2} + \alpha\right) = -\sin\alpha$

Sostituiamo questi valori nel numeratore:
$$\text{Num} = (-\cos\alpha)\cos(2\alpha) + (-\sin\alpha)\sin(2\alpha) = -\left(\cos(2\alpha)\cos\alpha + \sin(2\alpha)\sin\alpha\right)$$

* **Passo 2: Utilizzo delle formule di sottrazione per il numeratore**
Applichiamo la formula di sottrazione del coseno, secondo la quale $\cos(x - y) = \cos x \cos y + \sin x \sin y$. Ponendo $x = 2\alpha$ e $y = \alpha$:
$$\cos(2\alpha)\cos\alpha + \sin(2\alpha)\sin\alpha = \cos(2\alpha - \alpha) = \cos\alpha$$
Dunque, il numeratore si semplifica in:
$$\text{Num} = -\cos\alpha$$

* **Passo 3: Semplificazione del denominatore**
Abbiamo già analizzato il denominatore durante la ricerca delle condizioni di esistenza:
$$\text{Den} = \sin(\pi + \alpha) \cos(2\alpha) - \cos(\pi - \alpha) \sin(2\alpha)$$
$$\text{Den} = \sin(2\alpha)\cos\alpha - \cos(2\alpha)\sin\alpha = \sin(2\alpha - \alpha) = \sin\alpha$$

* **Passo 4: Sintesi dell'espressione semplificata**
Riassembliamo l'espressione complessiva $E(\alpha)$:
$$E(\alpha) = \frac{\text{Num}}{\text{Den}} = \frac{-\cos\alpha}{\sin\alpha} = -\cot\alpha$$

Sotto le condizioni di esistenza $\alpha \neq k\pi$, l'espressione goniometrica originaria equivale a:
$$E(\alpha) = -\cot\alpha$$

---

3. **Calcolo del valore per $\alpha = \frac{\pi}{6}$:**

Dato il valore $\alpha = \frac{\pi}{6}$ (che soddisfa le condizioni di esistenza, in quanto $\frac{\pi}{6} \neq k\pi$), calcoliamo $E\left(\frac{\pi}{6}\right)$:
$$E\left(\frac{\pi}{6}\right) = -\cot\left(\frac{\pi}{6}\right)$$

Poiché $\cot\left(\frac{\pi}{6}\right) = \frac{\cos\left(\frac{\pi}{6}\right)}{\sin\left(\frac{\pi}{6}\right)} = \frac{\frac{\sqrt{3}}{2}}{\frac{1}{2}} = \sqrt{3}$, otteniamo infine:
$$E\left(\frac{\pi}{6}\right) = -\sqrt{3}$$
