---
year: 4
macro_area: "Goniometria e Trigonometria"
topic: "Equazioni goniometriche lineari"
difficulty: 2
tags:
  - "equazioni goniometriche"
  - "equazioni lineari"
  - "angolo aggiunto"
  - "seno e coseno"
---
# Problem Text
Risolvi la seguente equazione goniometrica lineare nell'insieme dei numeri reali $\mathbb{R}$:

$$
\sin x + \sqrt{3}\cos x = 1
$$

# Solution
**Soluzione passo-passo:**

**Passo 1: Utilizzo del metodo dell'angolo aggiunto**
Dividiamo entrambi i membri dell'equazione per $2$ per ricondurla alla forma dell'angolo aggiunto:

$$
\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x = \frac{1}{2}
$$

**Passo 2: Applicazione della formula di addizione del seno**
Ricordiamo che $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$ e $\sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$. Sostituendo questi valori nel primo membro, otteniamo:

$$
\sin x \cos\left(\frac{\pi}{3}\right) + \cos x \sin\left(\frac{\pi}{3}\right) = \frac{1}{2}
$$

Utilizzando la formula di addizione del seno $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$, l'equazione diventa:

$$
\sin\left(x + \frac{\pi}{3}\right) = \frac{1}{2}
$$

**Passo 3: Risoluzione dell'equazione goniometrica elementare**
L'equazione elementare $\sin(\theta) = \frac{1}{2}$ ammette come soluzioni generali:

$$
\theta = \frac{\pi}{6} + 2k\pi \quad \lor \quad \theta = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
$$

**Passo 4: Determinazione dei valori di $x$**
Sostituiamo $\theta = x + \frac{\pi}{3}$ per ricavare la variabile $x$:

1. Primo caso:

$$
x + \frac{\pi}{3} = \frac{\pi}{6} + 2k\pi \implies x = \frac{\pi}{6} - \frac{\pi}{3} + 2k\pi \implies x = -\frac{\pi}{6} + 2k\pi
$$

2. Secondo caso:

$$
x + \frac{\pi}{3} = \frac{5\pi}{6} + 2k\pi \implies x = \frac{5\pi}{6} - \frac{\pi}{3} + 2k\pi \implies x = \frac{\pi}{2} + 2k\pi
$$

**Soluzione finale:**

$$
x = -\frac{\pi}{6} + 2k\pi \quad \lor \quad x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}
$$
