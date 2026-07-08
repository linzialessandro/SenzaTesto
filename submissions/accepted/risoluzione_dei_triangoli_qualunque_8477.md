---
year: 4
macro_area: "Trigonometria"
topic: "Risoluzione dei triangoli qualunque"
difficulty: 3
tags:
  - "trigonometria"
  - "teorema dei seni"
  - "teorema di carnot"
  - "risoluzione dei triangoli"
  - "bisettrice"
---
# Problem Text
Dato un triangolo $ABC$ in cui i lati $AB$ e $AC$ misurano rispettivamente $6$ e $4$, e l'angolo compreso $\widehat{A}$ è pari a $60^\circ$, si tracci la bisettrice $AD$ dell'angolo $\widehat{A}$ con $D$ situato sul lato $BC$. Determinare la lunghezza del segmento $AD$ applicando i teoremi di trigonometria sui triangoli.

# Solution
1. Calcoliamo la lunghezza del lato $BC$ applicando il teorema del coseno (teorema di Carnot) al triangolo $ABC$:

$$
BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos(\widehat{A})
$$

$$
BC^2 = 6^2 + 4^2 - 2 \cdot 6 \cdot 4 \cdot \cos(60^\circ) = 36 + 16 - 48 \cdot \frac{1}{2} = 28
$$

$$
BC = \sqrt{28} = 2\sqrt{7}
$$

2. Applichiamo il teorema dei seni al triangolo $ABC$ per ricavare il seno dell'angolo $\widehat{B}$:

$$
\frac{BC}{\sin(\widehat{A})} = \frac{AC}{\sin(\widehat{B})} \implies \sin(\widehat{B}) = \frac{AC \cdot \sin(\widehat{A})}{BC}
$$

$$
\sin(\widehat{B}) = \frac{4 \cdot \sin(60^\circ)}{2\sqrt{7}} = \frac{4 \cdot \frac{\sqrt{3}}{2}}{2\sqrt{7}} = \frac{\sqrt{3}}{\sqrt{7}}
$$

Poiché $AC < AB$, l'angolo $\widehat{B}$ è acuto, pertanto il suo coseno è positivo:

$$
\cos(\widehat{B}) = \sqrt{1 - \sin^2(\widehat{B})} = \sqrt{1 - \frac{3}{7}} = \frac{2}{\sqrt{7}}
$$

3. Consideriamo ora il triangolo $ABD$. Poiché $AD$ è la bisettrice di $\widehat{A}$, si ha $\widehat{DAB} = 30^\circ$. L'angolo $\widehat{ADB}$ è dunque pari a:

$$
\widehat{ADB} = 180^\circ - (30^\circ + \widehat{B})
$$

Utilizzando le formule di addizione, calcoliamo $\sin(\widehat{ADB})$:

$$
\sin(\widehat{ADB}) = \sin(30^\circ + \widehat{B}) = \sin(30^\circ)\cos(\widehat{B}) + \cos(30^\circ)\sin(\widehat{B})
$$

$$
\sin(\widehat{ADB}) = \frac{1}{2} \cdot \frac{2}{\sqrt{7}} + \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{\sqrt{7}} = \frac{2 + 3}{2\sqrt{7}} = \frac{5}{2\sqrt{7}}
$$

4. Applichiamo infine il teorema dei seni al triangolo $ABD$ per determinare la lunghezza del segmento $AD$:

$$
\frac{AD}{\sin(\widehat{B})} = \frac{AB}{\sin(\widehat{ADB})} \implies AD = AB \cdot \frac{\sin(\widehat{B})}{\sin(\widehat{ADB})}
$$

$$
AD = 6 \cdot \frac{\frac{\sqrt{3}}{\sqrt{7}}}{\frac{5}{2\sqrt{7}}} = 6 \cdot \frac{\sqrt{3}}{\sqrt{7}} \cdot \frac{2\sqrt{7}}{5} = \frac{12\sqrt{3}}{5}
$$
