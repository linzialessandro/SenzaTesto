---
year: 5
macro_area: "Geometria dello spazio"
topic: "Solidi di rotazione inscritti e circoscritti"
difficulty: 3
tags:
  - "cono"
  - "sfera"
  - "solidi di rotazione"
  - "sezione aurea"
  - "geometria solida"
---
# Problem Text
Un cono circolare retto è inscritto in una sfera di raggio $R$. Sapendo che l'area della superficie laterale del cono è pari a $\sqrt{2}$ volte l'area di un cerchio massimo della sfera, determinare i possibili valori del rapporto $\frac{h}{R}$, dove $h$ è l'altezza del cono.

# Solution
Sia $r$ il raggio di base del cono e $h$ la sua altezza, con la condizione geometrica $0 < h < 2R$. 

Per il primo teorema di Euclide applicato al triangolo rettangolo formato dal diametro della sfera e l'apotema $a$ del cono, l'apotema soddisfa la relazione:

$$
a = \sqrt{2Rh}
$$

Applicando il teorema di Pitagora, il raggio di base $r$ è:

$$
r = \sqrt{a^2 - h^2} = \sqrt{2Rh - h^2}
$$

L'area della superficie laterale del cono è data dalla formula $A_L = \pi r a$. Sostituendo le espressioni precedentemente ricavate, si ottiene:

$$
A_L = \pi \sqrt{2Rh - h^2} \sqrt{2Rh} = \pi h \sqrt{2R(2R - h)}
$$

Introduciamo la variabile adimensionale $x = \frac{h}{R}$, con il vincolo $0 < x < 2$. Possiamo quindi riscrivere l'area laterale del cono come:

$$
A_L = \pi R^2 x \sqrt{4 - 2x}
$$

Sapendo che l'area del cerchio massimo della sfera è $A_C = \pi R^2$, imponiamo la condizione del problema $A_L = \sqrt{2} A_C$:

$$
\pi R^2 x \sqrt{4 - 2x} = \sqrt{2} \pi R^2
$$

Dividendo per $\pi R^2$, otteniamo l'equazione:

$$
x \sqrt{4 - 2x} = \sqrt{2}
$$

Dato che entrambi i membri sono positivi nell'intervallo di esistenza della figura solida, possiamo elevare al quadrato:

$$
x^2(4 - 2x) = 2 \implies 4x^2 - 2x^3 = 2 \implies x^3 - 2x^2 + 1 = 0
$$

Si osserva immediatamente che $x = 1$ è una soluzione. Scomponendo il polinomio tramite raccoglimento o regola di Ruffini, si ottiene:

$$
(x - 1)(x^2 - x - 1) = 0
$$

Risolvendo l'equazione di secondo grado $x^2 - x - 1 = 0$, si trovano le radici:

$$
x = \frac{1 \pm \sqrt{5}}{2}
$$

Verifichiamo la compatibilità fisica con la condizione $0 < x < 2$:
1. $x = 1$ è accettabile.
2. $x = \frac{1 + \sqrt{5}}{2} \approx 1,618$ è accettabile (rappresenta la sezione aurea).
3. $x = \frac{1 - \sqrt{5}}{2} < 0$ non è ammissibile.

I valori possibili per il rapporto $\frac{h}{R}$ sono pertanto $1$ e $\frac{1 + \sqrt{5}}{2}$.
