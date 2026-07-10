---
year: 2
macro_area: Geometria
topic: Teoremi di Euclide e della circonferenza
difficulty: 3
tags:
  - geometria piana
  - teoremi di euclide
  - tangente alla circonferenza
  - teorema di pitagora
  - circonferenza
ai_generated: true
---
# Problem Text
In una circonferenza di centro $O$ e diametro $AB = 20 \text{ cm}$, si consideri un punto $H$ sul diametro $AB$ tale che $AH = 4 \text{ cm}$. Si conduca per $H$ la corda $CD$ perpendicolare al diametro $AB$.

1. Dimostrare che il triangolo $ACB$ è rettangolo e calcolare le lunghezze dei suoi lati $AC$ e $BC$.
2. Calcolare la lunghezza della corda $CD$.
3. Sia $P$ il punto di intersezione della retta tangente alla circonferenza nel punto $C$ con il prolungamento del diametro $AB$ oltre l'estremo $B$. Dimostrare che il triangolo $OCP$ è rettangolo in $C$.
4. Calcolare la lunghezza del segmento di tangente $PC$ e della distanza $OP$.

# Solution
1. **Dimostrazione della natura del triangolo $ACB$ e calcolo dei lati:**

* **Dimostrazione:**
Il triangolo $ACB$ è inscritto in una semicirconferenza di diametro $AB$. Per la proprietà degli angoli alla circonferenza, ogni angolo che insiste su un diametro è un angolo retto ($\widehat{ACB} = 90^\circ$). Di conseguenza, il triangolo $ACB$ è un triangolo rettangolo con l'ipotenusa coincidente con il diametro $AB$.

* **Calcolo dei lati $AC$ e $BC$:**
La proiezione del cateto $AC$ sull'ipotenusa $AB$ è il segmento $AH = 4 \text{ cm}$. 
La proiezione del cateto $BC$ sull'ipotenusa $AB$ è:
$$HB = AB - AH = 20\text{ cm} - 4\text{ cm} = 16\text{ cm}$$

Applichiamo il **Primo Teorema di Euclide** al triangolo rettangolo $ACB$:
- Per il cateto $AC$:
  $$AC^2 = AH \cdot AB \implies AC^2 = 4 \cdot 20 = 80 \implies AC = \sqrt{80} = 4\sqrt{5} \text{ cm}$$
- Per il cateto $BC$:
  $$BC^2 = HB \cdot AB \implies BC^2 = 16 \cdot 20 = 320 \implies BC = \sqrt{320} = 8\sqrt{5} \text{ cm}$$

---

2. **Calcolo della lunghezza della corda $CD$:**

Poiché il diametro $AB$ è perpendicolare alla corda $CD$, per le proprietà geometriche della circonferenza esso dimezza la corda stessa. Quindi $H$ è il punto medio di $CD$, da cui $CD = 2 \cdot CH$.

Per calcolare l'altezza $CH$ relativa all'ipotenusa del triangolo $ACB$, applichiamo il **Secondo Teorema di Euclide**:
$$CH^2 = AH \cdot HB$$
$$CH^2 = 4 \cdot 16 = 64 \implies CH = \sqrt{64} = 8 \text{ cm}$$

Essendo $H$ il punto medio di $CD$, la lunghezza totale della corda è:
$$CD = 2 \cdot CH = 2 \cdot 8 = 16 \text{ cm}$$

---

3. **Dimostrazione che il triangolo $OCP$ è rettangolo in $C$:**

Per definizione, la retta tangente a una circonferenza in un suo punto $C$ è perpendicolare al raggio che ha come estremo quello stesso punto. 
Poiché $OC$ è il raggio della circonferenza e la retta $PC$ è la tangente alla circonferenza nel punto $C$, si ricava immediatamente che:
$$OC \perp PC \implies \widehat{OCP} = 90^\circ$$
Pertanto, il triangolo $OCP$ è un triangolo rettangolo con angolo retto in $C$ e ipotenusa $OP$.

---

4. **Calcolo della lunghezza del segmento di tangente $PC$ e della distanza $OP$:**

Consideriamo il triangolo rettangolo $OCP$ (con l'angolo retto in $C$). In questo triangolo, l'altezza relativa all'ipotenusa $OP$ è il segmento $CH$, poiché $CD \perp AB$ e i punti $O, H, P$ giacciono tutti sulla retta passante per il diametro $AB$.

Sappiamo che:
- Il raggio $OC = \frac{AB}{2} = \frac{20}{2} = 10 \text{ cm}$ (cateto del triangolo $OCP$).
- La distanza del punto $H$ dal centro $O$ è:
  $$OH = OA - AH = 10\text{ cm} - 4\text{ cm} = 6 \text{ cm}$$
  *(Si può anche verificare con il teorema di Pitagora sul triangolo rettangolo $OHC$: $\left. OH = \sqrt{OC^2 - CH^2} = \sqrt{10^2 - 8^2} = 6 \text{ cm} \right)$*

Applichiamo il **Primo Teorema di Euclide** al triangolo rettangolo $OCP$:
* **Per trovare $OP$ (ipotenusa):**
  Il quadrato del cateto $OC$ è pari al prodotto della sua proiezione $OH$ sull'ipotenusa $OP$ per l'ipotenusa stessa:
  $$OC^2 = OH \cdot OP \implies 10^2 = 6 \cdot OP$$
  $$100 = 6 \cdot OP \implies OP = \frac{100}{6} = \frac{50}{3} \text{ cm} \approx 16{,}67 \text{ cm}$$

* **Per trovare $PC$ (tangente):**
  Troviamo prima la proiezione $HP$ del cateto $PC$ sull'ipotenusa $OP$:
  $$HP = OP - OH = \frac{50}{3} - 6 = \frac{50 - 18}{3} = \frac{32}{3} \text{ cm}$$
  
  Ora applichiamo il Primo Teorema di Euclide al cateto $PC$:
  $$PC^2 = HP \cdot OP \implies PC^2 = \frac{32}{3} \cdot \frac{50}{3} = \frac{1600}{9}$$
  $$PC = \sqrt{\frac{1600}{9}} = \frac{40}{3} \text{ cm} \approx 13{,}33 \text{ cm}$$

*(Nota di verifica: applicando il Teorema di Pitagora su $OCP$: $OC^2 + PC^2 = 10^2 + \left(\frac{40}{3}\right)^2 = 100 + \frac{1600}{9} = \frac{2500}{9} = OP^2$, che conferma perfettamente la correttezza del risultato).*
