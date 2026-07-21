---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Funzioni goniometriche, secante e intersezioni tra grafici"
difficulty: 3
ai_generated: true
tags:
  - "funzioni goniometriche"
  - "secante"
  - "intersezioni"
  - "grafici"
---
# Problem Text
Determina le coordinate dei punti di intersezione nell'intervallo $[0, 2\pi]$ tra i grafici delle funzioni $f(x) = 2\cos x - 1$ e $g(x) = \sec x$.

# Solution
Per trovare le intersezioni tra i grafici di $f(x)$ e $g(x)$, poniamo prima le condizioni di esistenza per la funzione secante $g(x) = \sec x = \frac{1}{\cos x}$:

$$
\cos x \neq 0 \implies x \neq \frac{\pi}{2} \quad \text{e} \quad x \neq \frac{3\pi}{2}
$$

Impostiamo l'uguaglianza $f(x) = g(x)$:

$$
2\cos x - 1 = \frac{1}{\cos x}
$$

Moltiplicando ambo i membri per $\cos x \neq 0$, otteniamo l'equazione di secondo grado nell'incognita $\cos x$:

$$
2\cos^2 x - \cos x - 1 = 0
$$

Risolvendo l'equazione rispetto a $\cos x$:

$$
\cos x = \frac{1 \pm \sqrt{1 - 4(2)(-1)}}{4} = \frac{1 \pm 3}{4}
$$

Da cui ricaviamo due valori:

$$
\cos x = 1 \quad \lor \quad \cos x = -\frac{1}{2}
$$

Analizziamo i due casi nell'intervallo $[0, 2\pi]$ rispettando le condizioni di esistenza:

1. Per $\cos x = 1$:

$$
x_1 = 0, \quad x_2 = 2\pi
$$

L'ordinata corrispondente è $y = 1$. Troviamo i punti:

$$
A(0, 1), \quad B(2\pi, 1)
$$

2. Per $\cos x = -\frac{1}{2}$:

$$
x_3 = \frac{2\pi}{3}, \quad x_4 = \frac{4\pi}{3}
$$

L'ordinata corrispondente è $y = -2$. Troviamo i punti:

$$
C\left(\frac{2\pi}{3}, -2\right), \quad D\left(\frac{4\pi}{3}, -2\right)
$$

I punti di intersezione tra i due grafici nell'intervallo $[0, 2\pi]$ sono dunque $A(0, 1)$, $B(2\pi, 1)$, $C\left(\frac{2\pi}{3}, -2\right)$ e $D\left(\frac{4\pi}{3}, -2\right)$.
