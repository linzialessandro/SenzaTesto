---
year: 4
macro_area: Trigonometria
topic: equazioni goniometriche
difficulty: 4
tags:
  - seno e coseno
  - formula fondamentale
ai_generated: true
---
# Problem Text
Risolvi la seguente equazione goniometrica, fornendo tutte e sole le soluzioni appartenenti all'intervallo $[0, 2\pi]$:
$$
2\cos^2 x - \sin x = 1
$$

# Solution
L'equazione presenta al suo interno due funzioni goniometriche diverse (seno e coseno). Per poterla risolvere in modo agevole, conviene esprimere tutti i termini rispetto a un'unica funzione. 
Sappiamo dalla prima identità fondamentale della goniometria che vale la relazione:
$$
\cos^2 x = 1 - \sin^2 x
$$

Sostituiamo questa espressione nell'equazione di partenza:
$$
2(1 - \sin^2 x) - \sin x = 1
$$
Sviluppiamo il prodotto e riordiniamo i termini secondo le potenze decrescenti del seno:
$$
2 - 2\sin^2 x - \sin x = 1
$$
$$
-2\sin^2 x - \sin x + 1 = 0
$$
Moltiplichiamo per $-1$ ambo i membri per avere il coefficiente di grado massimo positivo:
$$
2\sin^2 x + \sin x - 1 = 0
$$

Possiamo trattare l'espressione ottenuta come una semplice equazione di secondo grado nell'incognita $\sin x$. A tale scopo, poniamo $t = \sin x$:
$$
2t^2 + t - 1 = 0
$$
Calcoliamo il discriminante $\Delta$:
$$
\Delta = (1)^2 - 4(2)(-1) = 1 + 8 = 9
$$
Troviamo i valori dell'incognita ausiliaria $t$:
$$
t_{1,2} = \frac{-1 \pm \sqrt{9}}{4} = \frac{-1 \pm 3}{4}
$$
Le due soluzioni algebriche sono:
$$
t_1 = \frac{-1 - 3}{4} = -1 \quad \text{e} \quad t_2 = \frac{-1 + 3}{4} = \frac{1}{2}
$$

Ritorniamo alla variabile goniometrica originaria, studiando i due casi in modo separato.

**Caso 1: $\sin x = -1$**
Dovendo limitare la ricerca delle soluzioni all'intervallo richiesto $[0, 2\pi]$, notiamo che il seno assume il valore $-1$ in un solo punto della circonferenza goniometrica:
$$
x = \frac{3\pi}{2}
$$

**Caso 2: $\sin x = \frac{1}{2}$**
Sempre ragionando nell'intervallo $[0, 2\pi]$, il seno è positivo nel primo e nel secondo quadrante. Assume il valore $\frac{1}{2}$ in due punti esatti, corrispondenti agli angoli:
$$
x = \frac{\pi}{6} \quad \text{e} \quad x = \pi - \frac{\pi}{6} = \frac{5\pi}{6}
$$

Le soluzioni complessive dell'equazione goniometrica, per l'intervallo indicato, costituiscono quindi il seguente insieme:
$$
x \in \left\{ \frac{\pi}{6}, \frac{5\pi}{6}, \frac{3\pi}{2} \right\}
$$
