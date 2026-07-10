---
year: 2
macro_area: Geometria piana (Euclidea avanzata)
topic: Teoremi di Euclide
difficulty: 2
tags:
  - triangolo rettangolo
  - euclide
  - pitagora
ai_generated: true
---
# Problem Text

In un triangolo rettangolo $ABC$, retto in $A$, la proiezione del cateto $AB$ sull'ipotenusa $BC$ misura $9\text{ cm}$, mentre l'altezza relativa all'ipotenusa, $AH$, misura $12\text{ cm}$. 
Calcolare la lunghezza del cateto $AC$ e del perimetro del triangolo $ABC$.

# Solution

Siano $AH = 12\text{ cm}$ l'altezza relativa all'ipotenusa e $BH = 9\text{ cm}$ la proiezione del cateto $AB$ sull'ipotenusa.

**1. Applicazione del Secondo Teorema di Euclide:**
Il secondo teorema di Euclide afferma che in un triangolo rettangolo, l'altezza relativa all'ipotenusa è media proporzionale tra le proiezioni dei due cateti sull'ipotenusa stessa. In formule:
$$
AH^2 = BH \cdot HC
$$
Sostituendo i valori noti:
$$
12^2 = 9 \cdot HC \implies 144 = 9 \cdot HC \implies HC = \frac{144}{9} = 16\text{ cm}
$$

**2. Calcolo dell'ipotenusa $BC$:**
La lunghezza dell'intera ipotenusa è la somma delle due proiezioni:
$$
BC = BH + HC = 9 + 16 = 25\text{ cm}
$$

**3. Calcolo dei cateti con il Primo Teorema di Euclide:**
Il primo teorema di Euclide afferma che un cateto è medio proporzionale tra l'intera ipotenusa e la sua proiezione sull'ipotenusa.
Per il cateto $AB$:
$$
AB^2 = BC \cdot BH \implies AB^2 = 25 \cdot 9 = 225 \implies AB = \sqrt{225} = 15\text{ cm}
$$
Per il cateto $AC$:
$$
AC^2 = BC \cdot HC \implies AC^2 = 25 \cdot 16 = 400 \implies AC = \sqrt{400} = 20\text{ cm}
$$

*(In alternativa per trovare i cateti, si poteva usare il teorema di Pitagora sui triangoli rettangoli interni $AHB$ e $AHC$).*

**4. Calcolo del perimetro:**
Il perimetro del triangolo $ABC$ è la somma dei tre lati:
$$
2p = AB + AC + BC = 15 + 20 + 25 = 60\text{ cm}
$$

**Soluzione:** La lunghezza del cateto $AC$ è $20\text{ cm}$ e il perimetro del triangolo è $60\text{ cm}$.
