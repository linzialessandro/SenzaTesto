---
year: 5
macro_area: "Geometria dello spazio"
topic: "Stereometria: rette e piani, poliedri, calcolo di aree e volumi"
difficulty: 3
tags:
  - "tetraedro regolare"
  - "angolo diedro"
  - "distanza minima"
  - "volume e area superficiale"
  - "perpendicolarit\u00e0 nello spazio"
  - "geometria solida"
---
# Problem Text
Si consideri un tetraedro regolare $ABCD$ i cui spigoli hanno tutti lunghezza pari a $s$.

1. Si dimostri che ogni coppia di spigoli opposti (ovvero spigoli che non condividono alcun vertice, ad esempio $AB$ e $CD$) è costituita da segmenti mutuamente perpendicolari.
2. Si determini la minima distanza tra due spigoli opposti in funzione di $s$.
3. Si calcolino, in funzione dello spigolo $s$:
   - l'altezza del tetraedro;
   - l'area della superficie totale;
   - il volume del solido.
4. Si determini l'ampiezza dell'angolo diedro $\theta$ formato da due facce adiacenti della piramide, esprimendone il coseno.

# Solution
### 1. Dimostrazione della perpendicolarità degli spigoli opposti

Sia $M$ il punto medio dello spigolo $CD$.
- Consideriamo la faccia $ACD$, che è un triangolo equilatero di lato $s$. Il segmento $AM$ è la mediana relativa al lato $CD$ e, di conseguenza, è anche l'altezza ad esso relativa. Pertanto, si ha:

$$
AM \perp CD
$$

- Consideriamo ora la faccia $BCD$, anch'essa un triangolo equilatero di lato $s$. Il segmento $BM$ è la mediana relativa a $CD$ e, quindi, è anche l'altezza ad esso relativa. Di conseguenza:

$$
BM \perp CD
$$

La retta contenente lo spigolo $CD$ è perpendicolare a due rette incidenti ($AM$ e $BM$) del piano definito dal triangolo $ABM$. Per il teorema fondamentale della perpendicolarità tra retta e piano, la retta $CD$ è perpendicolare all'intero piano $ABM$.

Poiché una retta perpendicolare a un piano è perpendicolare a qualsiasi retta giacente su tale piano, e poiché lo spigolo $AB$ giace interamente nel piano $ABM$, concludiamo che:

$$
CD \perp AB
$$

La tesi è così dimostrata.

---

### 2. Determinazione della minima distanza tra due spigoli opposti

La minima distanza tra le due rette sghembe contenenti gli spigoli $AB$ e $CD$ è data dalla lunghezza del segmento di perpendicolare comune.

Sia $N$ il punto medio dello spigolo $AB$. Poiché il triangolo $ABM$ è isoscele con base $AB$ (essendo $AM = BM = \frac{\sqrt{3}}{2}s$), la mediana $MN$ relativa alla base è anche altezza, quindi:

$$
MN \perp AB
$$

Inoltre, come dimostrato al punto precedente, la retta $CD$ è perpendicolare al piano $ABM$, il che significa che è perpendicolare a ogni retta del piano passante per $M$, compresa la retta $MN$. Pertanto:

$$
MN \perp CD
$$

Il segmento $MN$ rappresenta la perpendicolare comune ed è quindi la minima distanza tra i due spigoli.

Per calcolare la sua lunghezza, applichiamo il teorema di Pitagora al triangolo rettangolo $ANM$ (retto in $N$):

$$
MN^2 = AM^2 - AN^2
$$

Sapendo che:
- $AM = \frac{\sqrt{3}}{2}s$ (altezza del triangolo equilatero di lato $s$)
- $AN = \frac{s}{2}$ (metà dello spigolo $AB$)

Sostituendo questi valori, abbiamo:

$$
MN^2 = \left(\frac{\sqrt{3}}{2}s\right)^2 - \left(\frac{s}{2}\right)^2
$$

$$
MN^2 = \frac{3}{4}s^2 - \frac{1}{4}s^2 = \frac{2}{4}s^2 = \frac{1}{2}s^2
$$

Estraendo la radice quadrata e razionalizzando, si ottiene:

$$
MN = \frac{\sqrt{2}}{2}s
$$

---

### 3. Calcolo di altezza, area e volume

- **Altezza del tetraedro ($h$):**
  Sia $H$ la proiezione ortogonale del vertice $A$ sul piano di base $BCD$. Essendo il tetraedro regolare, $H$ coincide con il baricentro del triangolo equilatero $BCD$ e giace sull'altezza $BM$. Per le proprietà del baricentro, esso divide la mediana $BM$ in due parti tali che la distanza dal vertice è doppia di quella dal punto medio del lato opposto:

$$
BH = \frac{2}{3}BM = \frac{2}{3} \cdot \left(\frac{\sqrt{3}}{2}s\right) = \frac{\sqrt{3}}{3}s
$$

  Applichiamo il teorema di Pitagora al triangolo rettangolo $ABH$ (retto in $H$):

$$
h^2 = AH^2 = AB^2 - BH^2
$$

$$
h^2 = s^2 - \left(\frac{\sqrt{3}}{3}s\right)^2 = s^2 - \frac{3}{9}s^2 = s^2 - \frac{1}{3}s^2 = \frac{2}{3}s^2
$$

  Prendendo la radice quadrata e razionalizzando, l'altezza $h$ del tetraedro è:

$$
h = \sqrt{\frac{2}{3}}s = \frac{\sqrt{6}}{3}s
$$

- **Area della superficie totale ($S_T$):**
  Il tetraedro regolare è formato da 4 facce che sono triangoli equilateri congruenti di lato $s$. L'area di una singola faccia è:

$$
S_{\text{faccia}} = \frac{\sqrt{3}}{4}s^2
$$

  Moltiplicando per 4, l'area totale è:

$$
S_T = 4 \cdot \left(\frac{\sqrt{3}}{4}s^2\right) = \sqrt{3}s^2
$$

- **Volume del solido ($V$):**
  Il volume della piramide si calcola come:

$$
V = \frac{1}{3} \cdot S_{\text{base}} \cdot h
$$

  Sostituendo i valori dell'area di base (che coincide con $S_{\text{faccia}}$) e dell'altezza $h$:

$$
V = \frac{1}{3} \cdot \left(\frac{\sqrt{3}}{4}s^2\right) \cdot \left(\frac{\sqrt{6}}{3}s\right)
$$

$$
V = \frac{\sqrt{18}}{36}s^3 = \frac{3\sqrt{2}}{36}s^3 = \frac{\sqrt{2}}{12}s^3
$$

---

### 4. Determinazione dell'angolo diedro ($\theta$)

L'angolo diedro $\theta$ tra due facce adiacenti (ad esempio, le facce $ACD$ e $BCD$, aventi come spigolo comune la retta $CD$) è definito come l'angolo formato dalle due altezze delle facce relative allo spigolo comune, prese a partire dal punto medio $M$.
Tali altezze sono $AM$ e $BM$. Pertanto, l'angolo cercato è $\theta = \angle AMB$.

Possiamo calcolare il coseno di $\theta$ considerando il triangolo rettangolo $AMH$ (dal momento che la proiezione $H$ di $A$ giace sul segmento $BM$):

$$
\cos\theta = \frac{HM}{AM}
$$

Sapendo che:
- $AM = \frac{\sqrt{3}}{2}s$
- $HM = \frac{1}{3}BM = \frac{\sqrt{3}}{6}s$

Sostituendo i valori:

$$
\cos\theta = \frac{\frac{\sqrt{3}}{6}s}{\frac{\sqrt{3}}{2}s} = \frac{2}{6} = \frac{1}{3}
$$

In alternativa, si può applicare il teorema del coseno (Carnot) direttamente al triangolo $ABM$:

$$
AB^2 = AM^2 + BM^2 - 2 \cdot AM \cdot BM \cdot \cos\theta
$$

$$
s^2 = \left(\frac{\sqrt{3}}{2}s\right)^2 + \left(\frac{\sqrt{3}}{2}s\right)^2 - 2 \cdot \left(\frac{\sqrt{3}}{2}s\right) \cdot \left(\frac{\sqrt{3}}{2}s\right) \cdot \cos\theta
$$

$$
s^2 = \frac{3}{4}s^2 + \frac{3}{4}s^2 - \frac{3}{2}s^2 \cdot \cos\theta
$$

$$
s^2 = \frac{3}{2}s^2 - \frac{3}{2}s^2 \cdot \cos\theta
$$

Dividendo ambo i membri per $s^2$:

$$
1 = \frac{3}{2} - \frac{3}{2}\cos\theta
$$

$$
\frac{3}{2}\cos\theta = \frac{1}{2} \implies \cos\theta = \frac{1}{3}
$$

L'angolo diedro $\theta$ è dunque:

$$
\theta = \arccos\left(\frac{1}{3}\right) \approx 70^{\circ}31'44''
$$
