---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Circonferenza goniometrica e funzioni goniometriche"
difficulty: 3
tags:
  - "circonferenza goniometrica"
  - "funzioni goniometriche"
  - "dominio"
  - "secante"
  - "equazioni goniometriche"
  - "disequazioni goniometriche"
---
# Problem Text
Determinare il dominio della funzione $f(x) = \frac{\sqrt{2\sin(x) - 1}}{\sec(x) + \sqrt{2}}$ nell'intervallo $[0, 2\pi]$.

# Solution
Per determinare il dominio della funzione nell'intervallo $[0, 2\pi]$, occorre impostare le seguenti condizioni di esistenza:

1. L'argomento della radice quadrata al numeratore deve essere non negativo:

$$
2\sin(x) - 1 \ge 0 \implies \sin(x) \ge \frac{1}{2}
$$

Nell'intervallo $[0, 2\pi]$, questa disequazione è soddisfatta per:

$$
x \in \left[\frac{\pi}{6}, \frac{5\pi}{6}\right]
$$

2. La funzione secante al denominatore, definita come $\sec(x) = \frac{1}{\cos(x)}$, richiede che il coseno non si annulli:

$$
\cos(x) \neq 0 \implies x \neq \frac{\pi}{2} \quad \text{e} \quad x \neq \frac{3\pi}{2}
$$

3. Il denominatore complessivo deve essere diverso da zero:

$$
\sec(x) + \sqrt{2} \neq 0 \implies \sec(x) \neq -\sqrt{2} \implies \cos(x) \neq -\frac{\sqrt{2}}{2}
$$

Nell'intervallo $[0, 2\pi]$, la condizione $\cos(x) = -\frac{\sqrt{2}}{2}$ si verifica nei punti:

$$
x = \frac{3\pi}{4} \quad \text{e} \quad x = \frac{5\pi}{4}
$$

Pertanto, dobbiamo escludere questi valori.

Infine, determiniamo l'intersezione di tutte le condizioni all'interno di $[0, 2\pi]$. Partendo dall'intervallo ottenuto per il numeratore $\left[\frac{\pi}{6}, \frac{5\pi}{6}\right]$, escludiamo i punti di non esistenza del denominatore:
* I punti $x = \frac{3\pi}{2}$ e $x = \frac{5\pi}{4}$ non appartengono a tale intervallo, quindi non lo influenzano.
* I punti $x = \frac{\pi}{2}$ e $x = \frac{3\pi}{4}$ appartengono all'intervallo $\left[\frac{\pi}{6}, \frac{5\pi}{6}\right]$ e devono essere esclusi.

Il dominio della funzione nell'intervallo richiesto è dunque:

$$
D = \left[\frac{\pi}{6}, \frac{\pi}{2}\right) \cup \left(\frac{\pi}{2}, \frac{3\pi}{4}\right) \cup \left(\frac{3\pi}{4}, \frac{5\pi}{6}\right]
$$
