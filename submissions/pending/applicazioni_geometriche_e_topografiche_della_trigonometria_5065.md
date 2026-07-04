---
year: 4
macro_area: "Trigonometria"
topic: "Applicazioni geometriche e topografiche della trigonometria"
difficulty: 4
tags:
  - "Trigonometria"
  - "Risoluzione dei triangoli qualunque"
  - "Teorema dei seni"
  - "Teorema di Carnot"
  - "Applicazioni topografiche"
  - "Rilievi inaccessibili"
---
# Problem Text
Un topografo deve determinare la distanza tra due punti inaccessibili, $C$ e $D$, situati sulla sponda opposta di un fiume. A tale scopo, individua sulla propria sponda una linea di base di misura $AB$ di lunghezza $d = 120\text{ m}$.

Utilizzando un teodolite posizionato nei punti $A$ e $B$, misura i seguenti angoli sul piano orizzontale:
- $\widehat{CAB} = \alpha = 105^\circ$
- $\widehat{DAB} = \beta = 45^\circ$
- $\widehat{DBA} = \gamma = 75^\circ$
- $\widehat{CBA} = \delta = 30^\circ$

Si richiede di:
1. Determinare le lunghezze dei segmenti $AC$ e $AD$ in forma esatta.
2. Calcolare la distanza $CD$ tra i due punti inaccessibili.
3. Determinare l'area totale della superficie del quadrilatero $ABCD$.

# Solution
**Passo 1: Determinazione di $AC$ e $AD$ nei triangoli $ABC$ e $ABD$**

Analizziamo innanzitutto il triangolo $ABC$ per determinare la lunghezza del segmento $AC$.
La somma degli angoli interni di un triangolo è $180^\circ$, pertanto l'angolo in $C$ è:

$$
\widehat{ACB} = 180^\circ - (\widehat{CAB} + \widehat{CBA}) = 180^\circ - (105^\circ + 30^\circ) = 45^\circ
$$

Applichiamo il Teorema dei Seni al triangolo $ABC$:

$$
\frac{AC}{\sin \widehat{CBA}} = \frac{AB}{\sin \widehat{ACB}}
$$

Sostituendo i valori noti:

$$
\frac{AC}{\sin 30^\circ} = \frac{120}{\sin 45^\circ}
$$

Sapendo che $\sin 30^\circ = \frac{1}{2}$ e $\sin 45^\circ = \frac{\sqrt{2}}{2}$:

$$
AC = 120 \cdot \frac{\sin 30^\circ}{\sin 45^\circ} = 120 \cdot \frac{\frac{1}{2}}{\frac{\sqrt{2}}{2}} = \frac{120}{\sqrt{2}} = 60\sqrt{2}\text{ m}
$$

Analizziamo ora il triangolo $ABD$ per determinare la lunghezza del segmento $AD$.
L'angolo in $D$ è:

$$
\widehat{ADB} = 180^\circ - (\widehat{DAB} + \widehat{DBA}) = 180^\circ - (45^\circ + 75^\circ) = 60^\circ
$$

Applichiamo il Teorema dei Seni al triangolo $ABD$:

$$
\frac{AD}{\sin \widehat{DBA}} = \frac{AB}{\sin \widehat{ADB}}
$$

$$
\frac{AD}{\sin 75^\circ} = \frac{120}{\sin 60^\circ}
$$

Calcoliamo il valore esatto di $\sin 75^\circ$ mediante la formula di addizione del seno:

$$
\sin 75^\circ = \sin(45^\circ + 30^\circ) = \sin 45^\circ \cos 30^\circ + \cos 45^\circ \sin 30^\circ = \frac{\sqrt{2}}{2} \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}
$$

Inoltre, sappiamo che $\sin 60^\circ = \frac{\sqrt{3}}{2}$. Risolviamo per $AD$:

$$
AD = 120 \cdot \frac{\sin 75^\circ}{\sin 60^\circ} = 120 \cdot \frac{\frac{\sqrt{6} + \sqrt{2}}{4}}{\frac{\sqrt{3}}{2}} = 60 \cdot \frac{\sqrt{6} + \sqrt{2}}{\sqrt{3}} = 20\sqrt{3}(\sqrt{6} + \sqrt{2}) = (60\sqrt{2} + 20\sqrt{6})\text{ m}
$$

---

**Passo 2: Calcolo della distanza $CD$**

Consideriamo il triangolo $CAD$. Di questo triangolo conosciamo:
- Il lato $AC = 60\sqrt{2}\text{ m}$
- Il lato $AD = (60\sqrt{2} + 20\sqrt{6})\text{ m}$
- L'angolo $\widehat{CAD} = \widehat{CAB} - \widehat{DAB} = 105^\circ - 45^\circ = 60^\circ$

Applichiamo il Teorema dei Coseni (o di Carnot) al triangolo $CAD$ per determinare la lunghezza del terzo lato $CD$:

$$
CD^2 = AC^2 + AD^2 - 2 \cdot AC \cdot AD \cdot \cos \widehat{CAD}
$$

Sostituiamo $\cos 60^\circ = \frac{1}{2}$:

$$
CD^2 = AC^2 + AD^2 - AC \cdot AD
$$

Calcoliamo i singoli termini:
- $AC^2 = (60\sqrt{2})^2 = 3600 \cdot 2 = 7200$
- $AD^2 = (60\sqrt{2} + 20\sqrt{6})^2 = (60\sqrt{2})^2 + (20\sqrt{6})^2 + 2 \cdot (60\sqrt{2}) \cdot (20\sqrt{6}) = 7200 + 2400 + 2400\sqrt{12} = 9600 + 4800\sqrt{3}$
- $AC \cdot AD = 60\sqrt{2} \cdot (60\sqrt{2} + 20\sqrt{6}) = 7200 + 1200\sqrt{12} = 7200 + 2400\sqrt{3}$

Sostituendo questi risultati nell'equazione otteniamo:

$$
CD^2 = 7200 + \left(9600 + 4800\sqrt{3}\right) - \left(7200 + 2400\sqrt{3}\right)
$$

$$
CD^2 = 9600 + 2400\sqrt{3} = 2400(4 + \sqrt{3})
$$

Estraiamo la radice quadrata per trovare la distanza $CD$:

$$
CD = \sqrt{2400(4 + \sqrt{3})} = 20\sqrt{6(4 + \sqrt{3})} = 20\sqrt{24 + 6\sqrt{3}}\text{ m}
$$

La distanza esatta è:

$$
CD = 20\sqrt{24 + 6\sqrt{3}}\text{ m} \approx 117{,}3\text{ m}
$$

---

**Passo 3: Calcolo dell'area del quadrilatero $ABCD$**

L'area della superficie del quadrilatero $ABCD$ può essere scomposta nella somma delle aree dei due triangoli $ABC$ e $ACD$:

$$
\text{Area}(ABCD) = \text{Area}(ABC) + \text{Area}(ACD)
$$

Calcoliamo l'area del triangolo $ABC$:

$$
\text{Area}(ABC) = \frac{1}{2} \cdot AB \cdot AC \cdot \sin \widehat{CAB}
$$

Sapendo che $AB = 120$, $AC = 60\sqrt{2}$ e $\sin 105^\circ = \frac{\sqrt{6} + \sqrt{2}}{4}$:

$$
\text{Area}(ABC) = \frac{1}{2} \cdot 120 \cdot 60\sqrt{2} \cdot \frac{\sqrt{6} + \sqrt{2}}{4} = 3600\sqrt{2} \cdot \frac{\sqrt{6} + \sqrt{2}}{4} = 900(\sqrt{12} + 2) = 1800(\sqrt{3} + 1)\text{ m}^2
$$

Calcoliamo l'area del triangolo $ACD$:

$$
\text{Area}(ACD) = \frac{1}{2} \cdot AC \cdot AD \cdot \sin \widehat{CAD}
$$

Sapendo che $\widehat{CAD} = 60^\circ$ e quindi $\sin 60^\circ = \frac{\sqrt{3}}{2}$:

$$
\text{Area}(ACD) = \frac{1}{2} \cdot 60\sqrt{2} \cdot (60\sqrt{2} + 20\sqrt{6}) \cdot \frac{\sqrt{3}}{2} = 15\sqrt{6} \cdot (60\sqrt{2} + 20\sqrt{6}) = 900\sqrt{12} + 300 \cdot 6 = 1800\sqrt{3} + 1800 = 1800(\sqrt{3} + 1)\text{ m}^2
$$

Sommando le aree dei due triangoli, otteniamo l'area totale del quadrilatero:

$$
\text{Area}(ABCD) = 1800(\sqrt{3} + 1) + 1800(\sqrt{3} + 1) = 3600(\sqrt{3} + 1)\text{ m}^2 \approx 9835{,}4\text{ m}^2
$$
