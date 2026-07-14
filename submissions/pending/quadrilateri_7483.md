---
year: 1
macro_area: "Geometria"
topic: "Quadrilateri"
difficulty: 2
ai_generated: true
tags:
  - "parallelogramma"
  - "angoli interni"
  - "altezza"
  - "triangolo rettangolo"
---
# Problem Text
In un parallelogramma $ABCD$, l'altezza $DH$ relativa al lato $AB$ (con $H$ appartenente al segmento $AB$) forma con il lato obliquo $AD$ un angolo $\widehat{ADH}$ pari alla metà dell'angolo $\widehat{HDC}$. Determina le ampiezze dei quattro angoli interni del parallelogramma.

# Solution
Poiché $ABCD$ è un parallelogramma, le basi $AB$ e $CD$ sono parallele. L'altezza $DH$ è, per definizione, perpendicolare ad $AB$, ovvero:

$$
\widehat{AHD} = 90^\circ
$$

Di conseguenza, essendo $AB \parallel CD$, l'altezza $DH$ è perpendicolare anche alla retta contenente $CD$. L'angolo $\widehat{HDC}$ è quindi un angolo retto:

$$
\widehat{HDC} = 90^\circ
$$

Dal testo sappiamo che l'angolo $\widehat{ADH}$ è la metà dell'angolo $\widehat{HDC}$. Possiamo quindi calcolare la sua ampiezza:

$$
\widehat{ADH} = \frac{90^\circ}{2} = 45^\circ
$$

Consideriamo ora il triangolo $AHD$. Poiché $\widehat{AHD} = 90^\circ$, si tratta di un triangolo rettangolo. Gli angoli acuti di un triangolo rettangolo sono complementari, quindi l'angolo interno $\widehat{A}$ vale:

$$
\widehat{A} = 90^\circ - \widehat{ADH} = 90^\circ - 45^\circ = 45^\circ
$$

Utilizzando le proprietà dei parallelogrammi, determiniamo gli altri angoli interni:
- Gli angoli opposti sono uguali, per cui l'angolo $\widehat{C}$ è pari a:

$$
\widehat{C} = \widehat{A} = 45^\circ
$$

- Gli angoli adiacenti a uno stesso lato sono supplementari (la loro somma è $180^\circ$). Pertanto, per gli angoli $\widehat{B}$ e $\widehat{D}$:

$$
\widehat{B} = \widehat{D} = 180^\circ - 45^\circ = 135^\circ
$$

I quattro angoli interni del parallelogramma misurano quindi $45^\circ$, $135^\circ$, $45^\circ$ e $135^\circ$.
