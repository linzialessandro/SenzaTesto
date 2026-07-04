---
year: 2
macro_area: "Geometria euclidea"
topic: "Teoremi di Euclide e della circonferenza"
difficulty: 3
tags:
  - "geometria euclidea"
  - "teoremi di euclide"
  - "circonferenza e tangenti"
  - "trapezio rettangolo"
  - "dimostrazione geometrica"
---
# Problem Text
Sia data una semicirconferenza di diametro $AB = 2R$ e centro $O$. Let $C$ sia un qualunque punto appartenente alla semicirconferenza. Si tracci la retta tangente alla semicirconferenza nel punto $C$, e siano $D$ ed $E$ i punti in cui essa interseca rispettivamente le rette tangenti alla semicirconferenza condotte dagli estremi $A$ e $B$ del diametro.

1. Dimostrare che il triangolo $DOE$ è un triangolo rettangolo con l'angolo retto in $O$.
2. Dimostrare che il raggio $OC$ è medio proporzionale tra i segmenti di tangente $AD$ e $BE$, ossia:

$$
AD \cdot BE = R^2
$$

3. Sapendo che $AD = \frac{4}{3}R$, determinare la lunghezza del segmento $BE$ e l'area del trapezio $ABED$ in funzione di $R$.

# Solution
**Dimostrazione del punto 1**

Consideriamo i segmenti di tangente condotti da un punto esterno a una circonferenza. 

* Dal punto esterno $D$ sono condotte le tangenti alla semicirconferenza nei punti $A$ e $C$. Per il teorema delle tangenti condotte da un punto esterno, i triangoli rettangoli $OAD$ e $OCD$ sono congruenti. Di conseguenza, il segmento $OD$ è la bisettrice dell'angolo $\angle AOC$. Possiamo scrivere:

$$
\angle DOC = \frac{1}{2} \angle AOC
$$

* Analogamente, dal punto esterno $E$ sono condotte le tangenti nei punti $B$ e $C$. Per lo stesso teorema, i triangoli rettangoli $OBE$ e $OCE$ sono congruenti, e quindi il segmento $OE$ è la bisettrice dell'angolo $\angle BOC$:

$$
\angle EOC = \frac{1}{2} \angle BOC
$$

I punti $A$, $O$ e $B$ sono allineati sul diametro, pertanto gli angoli adiacenti $\angle AOC$ e $\angle BOC$ sono supplementari, ossia la loro somma è un angolo piatto ($180^\circ$):

$$
\angle AOC + \angle BOC = 180^\circ
$$

L'angolo $\angle DOE$ è dato dalla somma di $\angle DOC$ e $\angle EOC$. Sostituendo le relazioni delle bisettrici:

$$
\angle DOE = \angle DOC + \angle EOC = \frac{1}{2} \angle AOC + \frac{1}{2} \angle BOC = \frac{1}{2} (\angle AOC + \angle BOC)
$$

$$
\angle DOE = \frac{1}{2} \cdot 180^\circ = 90^\circ
$$

Questo dimostra che il triangolo $DOE$ è rettangolo in $O$.

---

**Dimostrazione del punto 2**

Nel triangolo rettangolo $DOE$, il raggio $OC$ è perpendicolare alla retta tangente in $C$. Di conseguenza, il segmento $OC$ rappresenta l'altezza del triangolo $DOE$ relativa all'ipotenusa $DE$.

Per il secondo teorema di Euclide applicato al triangolo rettangolo $DOE$, l'altezza relativa all'ipotenusa è medio proporzionale tra le proiezioni dei cateti sull'ipotenusa stessa ($CD$ e $CE$):

$$
CD : OC = OC : CE \implies OC^2 = CD \cdot CE
$$

Per il teorema dei segmenti di tangente condotti da un punto esterno, sappiamo che:
* $AD = CD$ (segmenti di tangente da $D$)
* $BE = CE$ (segmenti di tangente da $E$)

Sostituendo queste uguaglianze e ponendo $OC = R$ nell'espressione ottenuta con il teorema di Euclide, abbiamo:

$$
R^2 = AD \cdot BE
$$

Questo prova la tesi, ovvero che il raggio $OC$ è medio proporzionale tra $AD$ e $BE$.

---

**Soluzione del punto 3**

* **Calcolo di $BE$:**
Utilizzando la relazione dimostrata al punto precedente:

$$
AD \cdot BE = R^2
$$

Sapendo che $AD = \frac{4}{3}R$, ricaviamo $BE$:

$$
BE = \frac{R^2}{AD} = \frac{R^2}{\frac{4}{3}R} = \frac{3}{4}R
$$

* **Calcolo dell'area del trapezio $ABED$:**
Le tangenti nei punti estremanti del diametro, $AD$ e $BE$, sono entrambe perpendicolari al diametro $AB$. Pertanto, le rette $AD$ e $BE$ sono parallele tra loro. 
L'quadrilatero $ABED$ è un trapezio rettangolo in cui:
* La base maggiore è $AD = \frac{4}{3}R$
* La base minore è $BE = \frac{3}{4}R$
* L'altezza è il diametro $AB = 2R$

L'area del trapezio è data dalla formula:

$$
\text{Area}(ABED) = \frac{(AD + BE) \cdot AB}{2}
$$

Sostituiamo i valori trovati:

$$
\text{Area}(ABED) = \frac{\left(\frac{4}{3}R + \frac{3}{4}R\right) \cdot 2R}{2} = \left(\frac{4}{3}R + \frac{3}{4}R\right) \cdot R
$$

$$
\text{Area}(ABED) = \left(\frac{16 + 9}{12}\right) R^2 = \frac{25}{12}R^2
$$

L'area del trapezio in funzione di $R$ è dunque $\frac{25}{12}R^2$.
