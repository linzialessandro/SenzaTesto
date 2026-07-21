---
year: 4
macro_area: "Goniometria"
topic: "Equazioni e disequazioni goniometriche"
difficulty: 2
ai_generated: true
tags:
  - "equazioni goniometriche"
  - "equazioni lineari"
  - "metodo angolo ausiliario"
  - "trigonometria"
---
# Problem Text
Risolvere in $\mathbb{R}$ la seguente equazione goniometrica lineare:

$$
\sqrt{3}\sin x - \cos x = 1
$$

# Solution
Per risolvere l'equazione lineare in $\sin x$ e $\cos x$, utilizziamo il metodo dell'angolo ausiliario.

1. Dividiamo ambo i membri dell'equazione per $2$:

$$
\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x = \frac{1}{2}
$$

2. Riconosciamo i valori notevoli $\cos\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}$ e $\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$. Sostituendo:

$$
\sin x \cos\left(\frac{\pi}{6}\right) - \cos x \sin\left(\frac{\pi}{6}\right) = \frac{1}{2}
$$

3. Applichiamo la formula di sottrazione del seno $\sin(\alpha - \beta) = \sin\alpha\cos\beta - \cos\alpha\sin\beta$:

$$
\sin\left(x - \frac{\pi}{6}\right) = \frac{1}{2}
$$

4. L'equazione elementare ammette soluzioni quando l'argomento è uguale a $\frac{\pi}{6} + 2k\pi$ oppure $\pi - \frac{\pi}{6} + 2k\pi = \frac{5\pi}{6} + 2k\pi$, con $k \in \mathbb{Z}$:

$$
x - \frac{\pi}{6} = \frac{\pi}{6} + 2k\pi \quad \lor \quad x - \frac{\pi}{6} = \frac{5\pi}{6} + 2k\pi
$$

5. Isolando $x$ nel primo caso:

$$
x = \frac{\pi}{6} + \frac{\pi}{6} + 2k\pi = \frac{\pi}{3} + 2k\pi
$$

6. Isolando $x$ nel secondo caso:

$$
x = \frac{5\pi}{6} + \frac{\pi}{6} + 2k\pi = \pi + 2k\pi
$$

7. Pertanto, l'insieme delle soluzioni è:

$$
x = \frac{\pi}{3} + 2k\pi \quad \lor \quad x = \pi + 2k\pi, \quad k \in \mathbb{Z}
$$
