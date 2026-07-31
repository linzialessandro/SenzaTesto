---
year: 2
macro_area: "Geometria piana"
topic: "Circonferenza, cerchio e teoremi di Euclide"
difficulty: 4
ai_generated: true
tags:
  - "circonferenza"
  - "teoremi di Euclide"
  - "tangenti"
  - "teorema di Pitagora"
  - "geometria piana"
---
# Problem Text
In una circonferenza di diametro $AB = 20\text{ cm}$, la corda $CD$ è perpendicolare ad $AB$ nel punto $H$, con $AH = 4\text{ cm}$. Le rette tangenti alla circonferenza condotte per i punti $C$ e $D$ si intersecano nel punto $P$, situato sul prolungamento del diametro $AB$. Calcolare la lunghezza del segmento $PA$ e l'area del triangolo $PCD$.

# Solution
**1. Calcolo del raggio e della posizione di $H$**

Il centro $O$ della circonferenza è il punto medio del diametro $AB$:

$$
AO = OB = R = 10\text{ cm}
$$

Poiché $H$ appartiene al segmento $AO$ e $AH = 4\text{ cm}$, la distanza di $H$ dal centro $O$ è:

$$
OH = AO - AH = 10 - 4 = 6\text{ cm}
$$

**2. Calcolo della lunghezza della corda $CD$**

Nel triangolo rettangolo $OHC$, applicando il teorema di Pitagora (o il secondo teorema di Euclide sul triangolo $ACB$ iscritto nella semicirconferenza):

$$
CH = \sqrt{OC^2 - OH^2} = \sqrt{10^2 - 6^2} = 8\text{ cm}
$$

Poiché il diametro perpendicolare a una corda la dimezza, si ha:

$$
CD = 2 \cdot CH = 16\text{ cm}
$$

**3. Determinazione della posizione del punto $P$**

La retta $PC$ è tangente alla circonferenza in $C$, quindi $OC \perp PC$. Il triangolo $OCP$ è pertanto rettangolo in $C$ con altezza $CH$ relativa all'ipotenusa $OP$.

Applicando il primo teorema di Euclide al triangolo $OCP$:

$$
OC^2 = OH \cdot OP
$$

$$
10^2 = 6 \cdot OP \implies OP = \frac{100}{6} = \frac{50}{3}\text{ cm}
$$

**4. Calcolo di $PA$ e dell'area del triangolo $PCD$**

Il punto $P$ si trova sul prolungamento del diametro $AB$ dalla parte di $B$. La lunghezza del segmento $PA$ è:

$$
PA = AO + OP = 10 + \frac{50}{3} = \frac{80}{3}\text{ cm}
$$

L'altezza $HP$ del triangolo $PCD$ relativa alla base $CD$ misura:

$$
HP = HO + OP = 6 + \frac{50}{3} = \frac{68}{3}\text{ cm}
$$

L'area del triangolo $PCD$ è:

$$
\mathcal{A}(PCD) = \frac{1}{2} \cdot CD \cdot HP = \frac{1}{2} \cdot 16 \cdot \frac{68}{3} = \frac{544}{3}\text{ cm}^2
$$
