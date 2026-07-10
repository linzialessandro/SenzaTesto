---
year: 2
macro_area: Geometria Euclidea
topic: Teoremi di Euclide, Pitagora e similitudine nei triangoli rettangoli
difficulty: 3
tags:
  - geometria euclidea
  - circonferenza
  - teorema di euclide
  - similitudine
  - aree
  - pitagora
ai_generated: true
---
# Problem Text
Si consideri una semicirconferenza di diametro $AB = 2r$ e centro nell'origine $O$ (con raggio $OA = OB = r$). Sia $M$ il punto medio del raggio $OB$. Da $M$, si tracci la retta perpendicolare al diametro $AB$, che interseca la semicirconferenza nel punto $C$. Sia inoltre $D$ il punto di intersezione tra la retta tangente alla semicirconferenza nel punto $C$ e il prolungamento del diametro $AB$ oltre l'estremo $B$.

1. Dimostrare che il triangolo rettangolo $OMC$ è simile al triangolo rettangolo $OCD$.
2. Espandere lo studio geometrico per determinare la lunghezza dei segmenti $MC$, $OD$ e $CD$ in funzione del raggio $r$, applicando le relazioni di similitudine o il primo teorema di Euclide.
3. Calcolare l'area del triangolo $OMC$ e l'area del triangolo $BCD$, determinando il valore esatto del loro rapporto:
$$\mathcal{R} = \frac{\text{Area}(BCD)}{\text{Area}(OMC)}$$

# Solution
Si riporta la dimostrazione e lo svolgimento matematico completo passo dopo passo.

---

### Rappresentazione geometrica del problema
Facciamo riferimento alla geometria della semicirconferenza:
* $O$ è il centro, quindi $OC = OB = OA = r$ (tutti raggi della semicirconferenza).
* $M$ è il punto medio di $OB \implies OM = MB = \frac{r}{2}$.
* $CM \perp AB$, perciò il triangolo $OMC$ è rettangolo in $M$ ($\angle OMC = 90^\circ$).
* La retta $CD$ è tangente alla semicirconferenza in $C$. Per i teoremi sulle tangenti a una circonferenza, il raggio passante per il punto di tangenza è perpendicolare alla tangente, dunque $OC \perp CD$. Di conseguenza, il triangolo $OCD$ è rettangolo in $C$ ($\angle OCD = 90^\circ$).

---

### Risoluzione dettagliata

#### 1. Dimostrazione della similitudine tra $OMC$ e $OCD$

Consideriamo i triangoli $\triangle OMC$ e $\triangle OCD$:
* Essi hanno entrambi un angolo retto:
  $$\angle OMC \cong \angle OCD \cong 90^\circ$$
* Hanno l'angolo di vertice $O$ in comune (infatti l'angolo $\angle MOC$ coincide spazialmente con l'angolo $\angle DOC$):
  $$\angle MOC \cong \angle DOC$$

Avendo due angoli rispettivamente congruenti, i triangoli rettangoli $\triangle OMC$ e $\triangle OCD$ sono simili per il **Primo Criterio di Similitudine dei triangoli**:
$$\triangle OMC \sim \triangle OCD$$

*(C.D.D.)*

---

#### 2. Calcolo dei segmenti $MC$, $OD$ e $CD$ in funzione del raggio $r$

**Calcolo di $MC$:**
Il triangolo $OMC$ è un triangolo rettangolo in $M$. Conosciamo l'ipotenusa $OC = r$ e il cateto $OM = \frac{r}{2}$. Applicando il teorema di Pitagora:
$$MC = \sqrt{OC^2 - OM^2} = \sqrt{r^2 - \left(\frac{r}{2}\right)^2} = \sqrt{r^2 - \frac{r^2}{4}} = \sqrt{\frac{3}{4}r^2} = \frac{r\sqrt{3}}{2}$$

*(Nota: Poiché il cateto $OM$ è esattamente la metà dell'ipotenusa $OC$, $\triangle OMC$ è un triangolo rettangolo speciale con angoli interni di $30^\circ$, $60^\circ$ e $90^\circ$, dove $\angle MCO = 30^\circ$ e $\angle MOC = 60^\circ$. Ciò giustifica immediatamente la misura del cateto $MC = OC \cdot \frac{\sqrt{3}}{2} = \frac{r\sqrt{3}}{2}$.)*

**Calcolo di $OD$:**
Nel triangolo rettangolo $OCD$ (con $\angle OCD = 90^\circ$), $CM$ rappresenta l'altezza relativa all'ipotenusa $OD$, e il segmento $OM$ è la proiezione del cateto $OC$ sull'ipotenusa $OD$.
Possiamo applicare il **Primo Teorema di Euclide**:
$$\text{Il quadrato costruito su un cateto è equivalente al rettangolo avente per dimensioni}$$
$$\text{l'ipotenusa e la proiezione del cateto stesso sull'ipotenusa.}$$

In formule:
$$OC^2 = OM \cdot OD$$

Sostituiamo i valori noti ($OC = r$ e $OM = \frac{r}{2}$) per ricavare l'ipotenusa $OD$:
$$r^2 = \frac{r}{2} \cdot OD \implies OD = \frac{r^2}{\frac{r}{2}} = 2r$$

*(Nota: Poiché $O$ è l'origine, $OB = r$ e $OD = 2r$, il punto $B$ è esattamente il punto medio di $OD$. Di conseguenza, il segmento esterno $BD$ misura $BD = OD - OB = 2r - r = r$.)*

**Calcolo di $CD$:**
Per ricavare il segmento $CD$, possiamo procedere in due modi equivalenti:

* *Metodo con il teorema di Pitagora sul triangolo $OCD$:*
  $$CD = \sqrt{OD^2 - OC^2} = \sqrt{(2r)^2 - r^2} = \sqrt{4r^2 - r^2} = \sqrt{3r^2} = r\sqrt{3}$$

* *Metodo con i rapporti di similitudine (da $\triangle OMC \sim \triangle OCD$):*
  I lati corrispondenti sono proporzionali:
  $$\frac{CD}{MC} = \frac{OD}{OC} \implies \frac{CD}{\frac{r\sqrt{3}}{2}} = \frac{2r}{r} = 2 \implies CD = 2 \cdot \frac{r\sqrt{3}}{2} = r\sqrt{3}$$

---

#### 3. Calcolo delle aree e del loro rapporto $\mathcal{R}$

* **Area del triangolo $OMC$:**
  Il triangolo ha cateti $OM = \frac{r}{2}$ e $MC = \frac{r\sqrt{3}}{2}$. Essendo rettangolo, la sua area è pari a:
  $$\text{Area}(OMC) = \frac{OM \cdot MC}{2} = \frac{\frac{r}{2} \cdot \frac{r\sqrt{3}}{2}}{2} = \frac{r^2\sqrt{3}}{8}$$

* **Area del triangolo $BCD$:**
  Si consideri il triangolo $BCD$ prendendo come base il segmento $BD$ situato sul diametro della semicirconferenza:
  $$\text{base} = BD = r$$
  L'altezza del triangolo $BCD$ relativa alla base $BD$ è la distanza ortogonale del vertice $C$ dalla retta contenente $BD$ (l'asse $x$), che corrisponde proprio al segmento perpendicolare $MC$:
  $$\text{altezza} = MC = \frac{r\sqrt{3}}{2}$$
  Calcoliamo l'area del triangolo $BCD$:
  $$\text{Area}(BCD) = \frac{BD \cdot MC}{2} = \frac{r \cdot \frac{r\sqrt{3}}{2}}{2} = \frac{r^2\sqrt{3}}{4}$$

* **Rapporto $\mathcal{R}$ tra le due aree:**
  $$\mathcal{R} = \frac{\text{Area}(BCD)}{\text{Area}(OMC)} = \frac{\frac{r^2\sqrt{3}}{4}}{\frac{r^2\sqrt{3}}{8}} = \frac{r^2\sqrt{3}}{4} \cdot \frac{8}{r^2\sqrt{3}} = 2$$

Il rapporto delle aree è esattamente pari a **$2$** (ovvero l'area del triangolo $BCD$ è esattamente il doppio dell'area di $OMC$).
