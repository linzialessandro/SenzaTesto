---
year: 5
macro_area: Analisi Matematica (Limiti)
topic: forme indeterminate
difficulty: 2
tags:
  - scomposizione
  - forma indeterminata 0/0
---
# Problem Text
Calcola il valore del seguente limite in un punto:
$$ \lim_{x \to 2} \frac{x^2 - 4}{x^2 - x - 2} $$

# Solution
Come primo passo, proviamo a sostituire direttamente il valore $x=2$ nell'espressione. Otteniamo al numeratore $2^2 - 4 = 4 - 4 = 0$ e al denominatore $2^2 - 2 - 2 = 4 - 2 - 2 = 0$.
Ci troviamo in presenza della forma indeterminata $\frac{0}{0}$.

Per risolvere l'indeterminazione, procediamo scomponendo in fattori i due polinomi. Sappiamo dal teorema di Ruffini che entrambi sono sicuramente divisibili per il binomio $(x-2)$.
**Numeratore:** È una tipica differenza di quadrati.
$$ x^2 - 4 = (x - 2)(x + 2) $$
**Denominatore:** È un trinomio notevole (la cui somma è $-1$ e il prodotto è $-2$). I due numeri che lo definiscono sono $-2$ e $+1$.
$$ x^2 - x - 2 = (x - 2)(x + 1) $$

Sostituiamo le espressioni scomposte nel limite originale:
$$ \lim_{x \to 2} \frac{(x - 2)(x + 2)}{(x - 2)(x + 1)} $$
Possiamo semplificare il fattore comune $(x-2)$, una mossa algebricamente lecita poiché nel calcolo del limite per $x \to 2$ stiamo considerando valori infinitamente vicini a $2$, ma mai strettamente uguali (quindi $x-2 \neq 0$):
$$ \lim_{x \to 2} \frac{x + 2}{x + 1} $$

A questo punto la forma indeterminata è scomparsa e possiamo sostituire di nuovo $x = 2$:
$$ \frac{2 + 2}{2 + 1} = \frac{4}{3} $$
Il limite converge a $\frac{4}{3}$.
