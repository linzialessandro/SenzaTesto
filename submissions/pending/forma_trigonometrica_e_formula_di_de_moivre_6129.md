---
year: 5
macro_area: "Algebra"
topic: "Forma trigonometrica e formula di De Moivre"
difficulty: 2
tags:
  - "numeri complessi"
  - "formula di de moivre"
  - "forma trigonometrica"
  - "potenza di un numero complesso"
---
# Problem Text
Calcola la sesta potenza del numero complesso $z = 1 - i$ utilizzando la formula di De Moivre, esprimendo il risultato finale in forma algebrica.

# Solution
1. **Calcolo del modulo di $z$**:
Il modulo di $z = 1 - i$ è:

$$
|z| = \sqrt{1^2 + (-1)^2} = \sqrt{2}
$$

2. **Calcolo dell'argomento di $z$**:
La parte reale è $a = 1$ e la parte immaginaria è $b = -1$. Poiché il punto si trova nel quarto quadrante del piano di Argand-Gauss, l'argomento principale è:

$$
\theta = -\frac{\pi}{4}
$$

3. **Forma trigonometrica di $z$**:
Scriviamo il numero complesso $z$ in forma trigonometrica:

$$
z = \sqrt{2} \left[ \cos\left(-\frac{\pi}{4}\right) + i \sin\left(-\frac{\pi}{4}\right) \right]
$$

4. **Applicazione della formula di De Moivre**:
Per calcolare $z^6$, applichiamo la formula di De Moivre $z^n = |z|^n [ \cos(n\theta) + i \sin(n\theta) ]$ con $n = 6$:

$$
z^6 = \left(\sqrt{2}\right)^6 \left[ \cos\left(6 \cdot \left(-\frac{\pi}{4}\right)\right) + i \sin\left(6 \cdot \left(-\frac{\pi}{4}\right)\right) \right]
$$

5. **Semplificazione del modulo e dell'argomento**:
Calcoliamo la potenza del modulo:

$$
\left(\sqrt{2}\right)^6 = 2^3 = 8
$$

E semplifichiamo l'argomento:

$$
6 \cdot \left(-\frac{\pi}{4}\right) = -\frac{3\pi}{2}
$$

Poiché l'angolo $-\frac{3\pi}{2}$ è equivalente all'angolo principale $\frac{\pi}{2}$ (ottenuto aggiungendo un giro completo $2\pi$), possiamo scrivere:

$$
z^6 = 8 \left[ \cos\left(\frac{\pi}{2}\right) + i \sin\left(\frac{\pi}{2}\right) \right]
$$

6. **Conversione in forma algebrica**:
Sostituendo i valori noti delle funzioni trigonometriche, ossia $\cos\left(\frac{\pi}{2}\right) = 0$ e $\sin\left(\frac{\pi}{2}\right) = 1$, otteniamo il risultato finale:

$$
z^6 = 8 (0 + i) = 8i
$$
