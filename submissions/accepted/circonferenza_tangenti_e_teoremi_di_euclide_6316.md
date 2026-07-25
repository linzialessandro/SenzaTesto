---
year: 2
macro_area: "Geometria piana"
topic: "Circonferenza, tangenti e teoremi di Euclide"
difficulty: 3
ai_generated: true
tags:
  - "circonferenza"
  - "tangenti"
  - "teorema di Euclide"
  - "teorema di Pitagora"
  - "geometria piana"
---
# Problem Text
In una circonferenza di centro $O$ e raggio $r = 15\text{ cm}$, sia $AB$ un diametro. Considera un punto $C$ sulla circonferenza tale che la sua proiezione ortogonale $H$ sul diametro $AB$ disti $24\text{ cm}$ dal punto $A$. La retta tangente alla circonferenza nel punto $C$ interseca il prolungamento del diametro $AB$ oltre $B$ nel punto $T$. Calcola la lunghezza del segmento di tangente $CT$.

# Solution
**1. Calcolo dell'altezza $CH$ nel triangolo $ABC$**

Il triangolo $ABC$ è rettangolo in $C$ perché iscritto in una semicirconferenza di diametro $AB = 2r = 30\text{ cm}$. 

Calcoliamo la lunghezza della proiezione $HB$:

$$
HB = AB - AH = 30 - 24 = 6\text{ cm}
$$

Applichiamo il secondo teorema di Euclide al triangolo rettangolo $ABC$:

$$
CH^2 = AH \cdot HB = 24 \cdot 6 = 144 \implies CH = 12\text{ cm}
$$

**2. Analisi del triangolo rettangolo $OCT$**

Poiché la retta $CT$ è tangente alla circonferenza in $C$, il raggio $OC$ è perpendicolare a $CT$ ($OC \perp CT$). Di conseguenza, il triangolo $OCT$ è rettangolo in $C$ e il segmento $CH$ rappresenta l'altezza relativa all'ipotenusa $OT$.

Determiniamo la lunghezza del segmento $OH$:

$$
OH = AH - AO = 24 - 15 = 9\text{ cm}
$$

**3. Calcolo del segmento di tangente $CT$**

Applichiamo il secondo teorema di Euclide al triangolo rettangolo $OCT$:

$$
CH^2 = OH \cdot HT \implies 144 = 9 \cdot HT \implies HT = \frac{144}{9} = 16\text{ cm}
$$

Infine, applicando il teorema di Pitagora al triangolo rettangolo $CHT$:

$$
CT = \sqrt{CH^2 + HT^2} = \sqrt{12^2 + 16^2} = \sqrt{144 + 256} = \sqrt{400} = 20\text{ cm}
$$

La lunghezza del segmento di tangente $CT$ è di $20\text{ cm}$.
