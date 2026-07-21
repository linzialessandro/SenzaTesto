---
year: 2
macro_area: "Geometria piana"
topic: "Circonferenza, teoremi di Euclide e Pitagora"
difficulty: 3
ai_generated: true
tags:
  - "circonferenza"
  - "tangenti"
  - "teorema di Pitagora"
  - "teorema di Euclide"
  - "quadrilatero"
---
# Problem Text
In una circonferenza di centro $O$ e raggio $r = 15\text{ cm}$, una corda $AB$ dista $9\text{ cm}$ dal centro. Condotte da $A$ e da $B$ le rette tangenti alla circonferenza, sia $P$ il loro punto d'intersezione. Calcola il perimetro e l'area del quadrilatero $OAPB$.

# Solution
Sia $H$ il punto medio della corda $AB$, corrispondente al piede della perpendicolare condotta da $O$ ad $AB$. Il triangolo $OHA$ è rettangolo in $H$.

Applichiamo il teorema di Pitagora al triangolo $OHA$:

$$
AH = \sqrt{OA^2 - OH^2} = \sqrt{15^2 - 9^2} = \sqrt{225 - 81} = 12\text{ cm}
$$

Poiché la retta $PA$ è tangente alla circonferenza nel punto $A$, il raggio $OA$ è perpendicolare al segmento di tangenza $PA$. Di conseguenza, il triangolo $OAP$ è rettangolo in $A$, e $AH$ rappresenta l'altezza relativa all'ipotenusa $OP$.

Applichiamo il primo teorema di Euclide al triangolo $OAP$:

$$
OA^2 = OH \cdot OP
$$

Ricaviamo la lunghezza dell'ipotenusa $OP$:

$$
OP = \frac{OA^2}{OH} = \frac{15^2}{9} = \frac{225}{9} = 25\text{ cm}
$$

Applichiamo il teorema di Pitagora al triangolo rettangolo $OAP$ per determinare la lunghezza del segmento $PA$:

$$
PA = \sqrt{OP^2 - OA^2} = \sqrt{25^2 - 15^2} = \sqrt{625 - 225} = \sqrt{400} = 20\text{ cm}
$$

Per le proprietà dei segmenti di tangenza condotti da un punto esterno, $PB = PA = 20\text{ cm}$. Inoltre $OB = OA = 15\text{ cm}$.

Calcoliamo il perimetro $P_{OAPB}$ del quadrilatero:

$$
P_{OAPB} = OA + AP + PB + BO = 15 + 20 + 20 + 15 = 70\text{ cm}
$$

L'area $A_{OAPB}$ del quadrilatero è data dalla somma delle aree dei due triangoli rettangoli congruenti $OAP$ e $OBP$:

$$
A_{OAPB} = 2 \cdot \left(\frac{1}{2} \cdot OA \cdot PA\right) = 15 \cdot 20 = 300\text{ cm}^2
$$
