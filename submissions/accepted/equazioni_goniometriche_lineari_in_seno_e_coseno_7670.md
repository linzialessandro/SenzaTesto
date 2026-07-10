---
year: 4
macro_area: "Goniometria e Trigonometria"
topic: "Equazioni goniometriche lineari in seno e coseno"
difficulty: 2
tags:
  - "equazioni goniometriche"
  - "equazioni lineari"
  - "seno e coseno"
  - "metodo dell'angolo aggiunto"
---
# Problem Text
Determinare le soluzioni della seguente equazione goniometrica lineare nell'intervallo $[0, 2\pi[$:

$$
\sin x + \sqrt{3}\cos x = 1
$$

# Solution
**Fase 1: Applicazione del metodo dell'angolo aggiunto**
Dividiamo entrambi i membri dell'equazione per $2$ (che equivale a $\sqrt{1^2 + (\sqrt{3})^2}$):

$$
\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x = \frac{1}{2}
$$

**Fase 2: Riconduzione a una funzione goniometrica singola**
Poiché $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$ e $\sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$, la formula di addizione del seno ci permette di riscrivere il membro di sinistra:

$$
\sin\left(x + \frac{\pi}{3}\right) = \frac{1}{2}
$$

**Fase 3: Ricerca degli angoli associati**
L'equazione elementare del seno ha soluzioni quando l'argomento è pari a $\frac{\pi}{6}$ o $\frac{5\pi}{6}$ (più i periodi interi):

$$
x + \frac{\pi}{3} = \frac{\pi}{6} + 2k\pi \quad \lor \quad x + \frac{\pi}{3} = \frac{5\pi}{6} + 2k\pi
$$

**Fase 4: Isolamento della variabile $x$**
Sottraendo $\frac{\pi}{3}$ da entrambi i lati per ciascun caso, otteniamo:

$$
x = \frac{\pi}{6} - \frac{\pi}{3} + 2k\pi \implies x = -\frac{\pi}{6} + 2k\pi
$$

$$
x = \frac{5\pi}{6} - \frac{\pi}{3} + 2k\pi \implies x = \frac{\pi}{2} + 2k\pi
$$

**Fase 5: Selezione dei valori nell'intervallo $[0, 2\pi[$**
Cerchiamo le soluzioni nell'intervallo richiesto $[0, 2\pi[$ per opportuni valori di $k \in \mathbb{Z}$:

- Dalla prima famiglia, ponendo $k = 1$ otteniamo:

$$
x = -\frac{\pi}{6} + 2\pi = \frac{11\pi}{6}
$$

- Dalla seconda famiglia, ponendo $k = 0$ otteniamo:

$$
x = \frac{\pi}{2}
$$

Le soluzioni finali dell'equazione nell'intervallo considerato sono:

$$
x = \frac{\pi}{2}, \quad x = \frac{11\pi}{6}
$$
