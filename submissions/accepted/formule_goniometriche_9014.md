---
year: 4
macro_area: "Goniometria"
topic: "Formule goniometriche"
difficulty: 3
tags:
  - "goniometria"
  - "formule goniometriche"
  - "archi associati"
  - "formule di duplicazione"
  - "semplificazione goniometrica"
  - "quarto anno"
---
# Problem Text
Semplificare la seguente espressione goniometrica dopo averne determinato le condizioni di esistenza (C.E.):

$$
E = \frac{\cos\left(\frac{\pi}{2} - x\right) + \sin(2x)}{\cos(2x) + \sin\left(\frac{\pi}{2} + x\right) + 1}
$$

# Solution
Per semplificare l'espressione goniometrica proposta, procediamo passo dopo passo applicando le formule degli archi associati, le formule di duplicazione e le scomposizioni algebriche.

---

### 1. Applicazione delle formule degli archi associati

Utilizziamo le relazioni degli archi associati per ricondurre tutte le funzioni goniometriche all'argomento semplice $x$:

- Per il numeratore, ricordando che l'angolo $\frac{\pi}{2} - x$ si trova nel primo quadrante:

$$
\cos\left(\frac{\pi}{2} - x\right) = \sin(x)
$$

- Per il denominatore, ricordando che l'angolo $\frac{\pi}{2} + x$ si trova nel secondo quadrante (dove il seno è positivo):

$$
\sin\left(\frac{\pi}{2} + x\right) = \cos(x)
$$

Sostituendo queste due espressioni, l'espressione iniziale $E$ diventa:

$$
E = \frac{\sin(x) + \sin(2x)}{\cos(2x) + \cos(x) + 1}
$$

---

### 2. Applicazione delle formule di duplicazione

Per uniformare tutti gli argomenti a $x$, applichiamo le formule di duplicazione del seno e del coseno:

- Per il seno di $2x$:

$$
\sin(2x) = 2\sin(x)\cos(x)
$$

- Per il coseno di $2x$, utilizziamo la forma contenente solo il coseno in modo da semplificare il termine costante $+1$ a denominatore:

$$
\cos(2x) = 2\cos^2(x) - 1
$$

Sostituiamo queste formule nell'espressione:

$$
E = \frac{\sin(x) + 2\sin(x)\cos(x)}{(2\cos^2(x) - 1) + \cos(x) + 1}
$$

Semplificando i termini costanti $-1$ e $+1$ al denominatore, otteniamo:

$$
E = \frac{\sin(x) + 2\sin(x)\cos(x)}{2\cos^2(x) + \cos(x)}
$$

---

### 3. Condizioni di Esistenza (C.E.)

L'espressione è definita se e solo se il denominatore è diverso da zero. Scomponiamo il denominatore raccogliendo a fattore comune $\cos(x)$:

$$
2\cos^2(x) + \cos(x) = \cos(x)(2\cos(x) + 1)
$$

Imponiamo che tale espressione sia diversa da zero:

$$
\cos(x)(2\cos(x) + 1) \neq 0
$$

Questo si traduce in due condizioni distinte che devono essere verificate contemporaneamente:

1. $\cos(x) \neq 0$:

$$
x \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}
$$

2. $2\cos(x) + 1 \neq 0 \implies \cos(x) \neq -\frac{1}{2}$:

$$
x \neq \frac{2}{3}\pi + 2k\pi \quad \text{e} \quad x \neq \frac{4}{3}\pi + 2k\pi, \quad k \in \mathbb{Z}
$$

Possiamo compattare la seconda condizione scrivendo:

$$
x \neq \pm \frac{2}{3}\pi + 2k\pi, \quad k \in \mathbb{Z}
$$

Pertanto, le Condizioni di Esistenza sono:

$$
\text{C.E.: } x \neq \frac{\pi}{2} + k\pi \quad \wedge \quad x \neq \pm \frac{2}{3}\pi + 2k\pi, \quad k \in \mathbb{Z}
$$

---

### 4. Semplificazione dell'espressione

Riprendiamo l'espressione:

$$
E = \frac{\sin(x) + 2\sin(x)\cos(x)}{2\cos^2(x) + \cos(x)}
$$

Scomponiamo sia il numeratore (raccogliendo $\sin(x)$) sia il denominatore (raccogliendo $\cos(x)$):

- Al numeratore:

$$
\sin(x) + 2\sin(x)\cos(x) = \sin(x)(1 + 2\cos(x))
$$

- Al denominatore:

$$
2\cos^2(x) + \cos(x) = \cos(x)(2\cos(x) + 1)
$$

L'espressione diventa quindi:

$$
E = \frac{\sin(x)(2\cos(x) + 1)}{\cos(x)(2\cos(x) + 1)}
$$

Sotto le ipotesi stabilite nelle Condizioni di Esistenza, in particolare $2\cos(x) + 1 \neq 0$, possiamo semplificare il fattore comune $(2\cos(x) + 1)$ presente sia al numeratore che al denominatore:

$$
E = \frac{\sin(x)}{\cos(x)}
$$

Utilizzando la definizione fondamentale della tangente, l'espressione semplificata è:

$$
E = \tan(x)
$$
