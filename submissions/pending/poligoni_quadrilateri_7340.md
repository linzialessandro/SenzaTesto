---
year: 1
macro_area: "Geometria Piana Euclidea"
topic: "Poligoni - Quadrilateri"
difficulty: 4
ai_generated: true
tags:
  - "quadrilateri"
  - "trapezio"
  - "angoli interni"
  - "angoli esterni"
  - "bisettrici"
---
# Problem Text
In un trapezio $ABCD$ di basi $AB$ e $CD$, le bisettrici degli angoli interni $\hat{A}$ e $\hat{D}$ (adiacenti al lato non parallelo $AD$) si intersecano nel punto $P$. Sapendo che l'angolo interno $\hat{A}$ è pari ai $\frac{3}{7}$ dell'angolo interno $\hat{D}$ e che l'angolo esterno al vertice $B$ (adiacente a $\hat{B}$) misura $115^\circ$, determina l'ampiezza dell'angolo $\widehat{APD}$ e le ampiezze dei quattro angoli interni del trapezio.

# Solution
**Passo 1: Determinazione dell'angolo $\widehat{APD}$**
Le basi $AB$ e $CD$ sono parallele. Gli angoli interni $\hat{A}$ e $\hat{D}$, adiacenti al lato non parallelo $AD$, sono angoli interni coniugati formati dalle rette parallele $AB$ e $CD$ tagliate dalla trasversale $AD$. La loro somma è quindi $180^\circ$:

$$
\hat{A} + \hat{D} = 180^\circ
$$

Le bisettrici dividono gli angoli $\hat{A}$ e $\hat{D}$ a metà. Nel triangolo $APD$, la somma degli angoli alla base $AD$ vale:

$$
\widehat{PAD} + \widehat{PDA} = \frac{\hat{A}}{2} + \frac{\hat{D}}{2} = \frac{\hat{A} + \hat{D}}{2} = \frac{180^\circ}{2} = 90^\circ
$$

Poiché la somma degli angoli interni del triangolo $APD$ è $180^\circ$, l'angolo in $P$ misura:

$$
\widehat{APD} = 180^\circ - (\widehat{PAD} + \widehat{PDA}) = 180^\circ - 90^\circ = 90^\circ
$$

**Passo 2: Calcolo degli angoli interni $\hat{A}$ e $\hat{D}$**
Sapendo che $\hat{A} = \frac{3}{7}\hat{D}$, sostituiamo questa relazione nella somma $\hat{A} + \hat{D} = 180^\circ$:

$$
\frac{3}{7}\hat{D} + \hat{D} = 180^\circ \implies \frac{10}{7}\hat{D} = 180^\circ
$$

Ricaviamo $\hat{D}$:

$$
\hat{D} = 180^\circ \cdot \frac{7}{10} = 126^\circ
$$

Di conseguenza, calcoliamo $\hat{A}$:

$$
\hat{A} = 180^\circ - 126^\circ = 54^\circ
$$

**Passo 3: Calcolo degli angoli interni $\hat{B}$ e $\hat{C}$**
L'angolo interno $\hat{B}$ è supplementare al suo angolo esterno adiacente ($115^\circ$):

$$
\hat{B} = 180^\circ - 115^\circ = 65^\circ
$$

Gli angoli $\hat{B}$ e $\hat{C}$ sono interni coniugati rispetto alle basi parallele $AB$ e $CD$ tagliate dalla trasversale $BC$, quindi la loro somma è $180^\circ$:

$$
\hat{C} = 180^\circ - \hat{B} = 180^\circ - 65^\circ = 115^\circ
$$

**Risultato finale:**
- $\widehat{APD} = 90^\circ$
- $\hat{A} = 54^\circ$
- $\hat{B} = 65^\circ$
- $\hat{C} = 115^\circ$
- $\hat{D} = 126^\circ$
