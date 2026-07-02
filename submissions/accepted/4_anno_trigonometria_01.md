---
year: 4
macro_area: Trigonometria
topic: Equazioni goniometriche
difficulty: 4
tags:
  - equazione lineare
  - seno
  - coseno
---
# Problem Text
Risolvi la seguente equazione goniometrica lineare nell'intervallo $[0, 2\pi]$:
$\sqrt{3}\sin x - \cos x = 1$

# Solution
**1. Scelta del metodo:**
L'equazione è lineare in seno e coseno della forma $a\sin x + b\cos x = c$. Possiamo risolverla dividendo tutto per $\sqrt{a^2+b^2}$ (metodo dell'angolo aggiunto).
Calcoliamo $\sqrt{(\sqrt{3})^2 + (-1)^2} = \sqrt{3 + 1} = \sqrt{4} = 2$.

**2. Trasformazione dell'equazione:**
Dividiamo ambo i membri per $2$:
$$ \frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x = \frac{1}{2} $$
Possiamo riconoscere i valori seno e coseno di un angolo noto:
$\cos\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}$ e $\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$
Pertanto l'equazione diventa:
$$ \sin x \cos\left(\frac{\pi}{6}\right) - \cos x \sin\left(\frac{\pi}{6}\right) = \frac{1}{2} $$
Applicando la formula di sottrazione del seno, otteniamo:
$$ \sin\left(x - \frac{\pi}{6}\right) = \frac{1}{2} $$

**3. Risoluzione dell'equazione elementare:**
Il seno assume il valore $\frac{1}{2}$ in due casi principali nel primo giro: per l'angolo $\frac{\pi}{6}$ e per l'angolo $\frac{5\pi}{6}$.
Quindi:
Caso 1: $x - \frac{\pi}{6} = \frac{\pi}{6} + 2k\pi \implies x = \frac{\pi}{6} + \frac{\pi}{6} + 2k\pi \implies x = \frac{\pi}{3} + 2k\pi$
Caso 2: $x - \frac{\pi}{6} = \frac{5\pi}{6} + 2k\pi \implies x = \frac{5\pi}{6} + \frac{\pi}{6} + 2k\pi \implies x = \pi + 2k\pi$

**4. Soluzioni nell'intervallo $[0, 2\pi]$:**
Cerchiamo le soluzioni per $k=0$ che ricadono nell'intervallo richiesto.
Per $k=0$: $x_1 = \frac{\pi}{3}$ e $x_2 = \pi$.
Entrambe appartengono a $[0, 2\pi]$.

Le soluzioni sono $S = \left\{\frac{\pi}{3}, \pi\right\}$.
