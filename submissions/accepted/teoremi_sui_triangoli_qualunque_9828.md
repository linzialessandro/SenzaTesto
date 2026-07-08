---
year: 4
macro_area: "Trigonometria"
topic: "Teoremi sui triangoli qualunque"
difficulty: 2
tags:
  - "Teorema di Carnot"
  - "Teorema dei coseni"
  - "Risoluzione dei triangoli qualunque"
  - "Trigonometria"
---
# Problem Text
In un triangolo qualunque $ABC$, le misure dei lati $BC$ e $AC$ sono rispettivamente $a = 3\text{ cm}$ e $b = 8\text{ cm}$. Sapendo che l'angolo compreso tra essi è $\widehat{C} = 60^\circ$, determina la lunghezza del terzo lato $AB$.

# Solution
Per calcolare la lunghezza del terzo lato $c = AB$, si applica il teorema del coseno (o teorema di Carnot):

$$
c^2 = a^2 + b^2 - 2ab \cos(\widehat{C})
$$

Si sostituiscono i valori noti all'interno della formula ($a = 3$, $b = 8$, $\widehat{C} = 60^\circ$):

$$
c^2 = 3^2 + 8^2 - 2 \cdot 3 \cdot 8 \cdot \cos(60^\circ)
$$

Si calcolano i quadrati e si ricorda che il coseno di $60^\circ$ è pari a $\frac{1}{2}$:

$$
c^2 = 9 + 64 - 48 \cdot \frac{1}{2}
$$

Si semplifica il prodotto e si esegue la sottrazione:

$$
c^2 = 73 - 24 = 49
$$

Si estrae la radice quadrata per trovare la misura lineare del lato $c$ (considerando solo il valore positivo):

$$
c = \sqrt{49} = 7\text{ cm}
$$
