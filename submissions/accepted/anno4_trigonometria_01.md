---
year: 4
macro_area: Trigonometria e Goniometria
topic: Equazioni goniometriche
difficulty: 4
tags:
  - equazioni goniometriche
  - formule di addizione
  - seno e coseno
---
# Problem Text

Risolvere la seguente equazione goniometrica nell'intervallo $[0, 2\pi]$:
$$
\sin(x) + \cos(x) = 1
$$

# Solution

L'equazione è una lineare in seno e coseno del tipo $a\sin(x) + b\cos(x) = c$. Possiamo risolverla in più modi. Scegliamo il metodo dell'arco aggiunto (o trasformazione).

**1. Metodo dell'arco aggiunto:**
Dividiamo per $\sqrt{a^2 + b^2} = \sqrt{1^2 + 1^2} = \sqrt{2}$:
$$
\frac{1}{\sqrt{2}}\sin(x) + \frac{1}{\sqrt{2}}\cos(x) = \frac{1}{\sqrt{2}}
$$
Sappiamo che $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$, che corrisponde al coseno e al seno di $\frac{\pi}{4}$. Possiamo scrivere:
$$
\cos\left(\frac{\pi}{4} \right)\sin(x) + \sin\left(\frac{\pi}{4} \right)\cos(x) = \frac{\sqrt{2}}{2}
$$

**2. Applicazione della formula di addizione:**
Ricordando la formula del seno della somma, $\sin(lpha + \beta) = \sinlpha\cos\beta + \coslpha\sin\beta$, otteniamo:
$$
\sin\left(x + \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2}
$$

**3. Risoluzione dell'equazione elementare:**
Il seno assume il valore $\frac{\sqrt{2}}{2}$ in due angoli fondamentali nel primo giro: $\frac{\pi}{4}$ e $\frac{3\pi}{4}$.
Pertanto, abbiamo due famiglie di soluzioni:

Caso A:
$$
x + \frac{\pi}{4} = \frac{\pi}{4} + 2k\pi \implies x = 2k\pi
$$

Caso B:
$$
x + \frac{\pi}{4} = \frac{3\pi}{4} + 2k\pi \implies x = \frac{3\pi}{4} - \frac{\pi}{4} + 2k\pi \implies x = \frac{\pi}{2} + 2k\pi
$$

**4. Limitazione all'intervallo richiesto:**
Dobbiamo selezionare le soluzioni che cadono in $[0, 2\pi]$:
- Dalla famiglia $x = 2k\pi$, per $k=0$ abbiamo $x = 0$, per $k=1$ abbiamo $x = 2\pi$. Entrambi sono accettabili.
- Dalla famiglia $x = \frac{\pi}{2} + 2k\pi$, per $k=0$ abbiamo $x = \frac{\pi}{2}$.

**Soluzione:**
Le soluzioni nell'intervallo $[0, 2\pi]$ sono $x \in \left\{ 0, \frac{\pi}{2}, 2\pi 
ight\}$.
