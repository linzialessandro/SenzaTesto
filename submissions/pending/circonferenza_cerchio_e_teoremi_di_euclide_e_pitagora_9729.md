---
year: 2
macro_area: "Geometria piana"
topic: "Circonferenza, cerchio e teoremi di Euclide e Pitagora"
difficulty: 4
ai_generated: true
tags:
  - "circonferenza"
  - "tangente"
  - "teorema di Euclide"
  - "teorema di Pitagora"
  - "triangoli rettangoli"
---
# Problem Text
Sia $AB$ un diametro di una circonferenza di centro $O$ e raggio $R$. Da un punto $P$, situato sul prolungamento del diametro $AB$ oltre il punto $B$, si traccia uno dei due segmenti di tangente alla circonferenza, indicando con $T$ il punto di contatto. Si considera la proiezione ortogonale $H$ del punto $T$ sul diametro $AB$. Sapendo che l'area del triangolo $PTH$ è il doppio dell'area del triangolo $OTH$, determinare le lunghezze del segmento di tangente $PT$ e della distanza $PB$ in funzione di $R$.

# Solution
Consideriamo il triangolo $OTP$. Poiché il segmento $PT$ è tangente alla circonferenza nel punto $T$, il raggio $OT$ è perpendicolare alla tangente $PT$. Pertanto, il triangolo $OTP$ è rettangolo in $T$, con ipotenusa $OP$ e raggio $OT = R$.

Il segmento $TH$ rappresenta l'altezza relativa all'ipotenusa $OP$. I due triangoli $OTH$ e $PTH$ condividono l'altezza $TH$, quindi il rapporto tra le loro aree è uguale al rapporto tra le rispettive basi $OH$ e $HP$:

$$
\frac{\text{Area}(PTH)}{\text{Area}(OTH)} = \frac{HP}{OH} = 2 \implies HP = 2\,OH
$$

Poiché $H$ appartiene al segmento $OP$, la lunghezza dell'ipotenusa $OP$ si esprime come:

$$
OP = OH + HP = OH + 2\,OH = 3\,OH
$$

Applicando il primo teorema di Euclide al triangolo rettangolo $OTP$, il quadrato costruito sul cateto $OT$ è equivalente al rettangolo avente per dimensioni l'ipotenusa $OP$ e la proiezione del cateto sull'ipotenusa $OH$:

$$
OT^2 = OH \cdot OP
$$

Sostituendo $OT = R$ e $OP = 3\,OH$:

$$
R^2 = OH \cdot (3\,OH) = 3\,OH^2 \implies OH^2 = \frac{R^2}{3} \implies OH = \frac{\sqrt{3}}{3}R
$$

La lunghezza dell'ipotenusa $OP$ è quindi:

$$
OP = 3 \cdot \frac{\sqrt{3}}{3}R = \sqrt{3}R
$$

Applichiamo il teorema di Pitagora al triangolo rettangolo $OTP$ per calcolare la lunghezza del segmento di tangente $PT$:

$$
PT = \sqrt{OP^2 - OT^2} = \sqrt{(\sqrt{3}R)^2 - R^2} = \sqrt{3R^2 - R^2} = \sqrt{2R^2} = \sqrt{2}R
$$

Infine, poiché $B$ appartiene al segmento $OP$ con $OB = R$, la distanza $PB$ è data da:

$$
PB = OP - OB = \sqrt{3}R - R = (\sqrt{3} - 1)R
$$
