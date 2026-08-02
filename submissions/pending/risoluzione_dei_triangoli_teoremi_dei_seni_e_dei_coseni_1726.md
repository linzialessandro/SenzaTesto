---
year: 4
macro_area: "Trigonometria"
topic: "Risoluzione dei triangoli: teoremi dei seni e dei coseni"
difficulty: 5
ai_generated: true
tags:
  - "angolo di depressione"
  - "tangente"
  - "identità goniometriche"
  - "applicazioni"
---
# Problem Text
Un osservatore in cima a una torre alta $h$ metri vede due punti $A$ e $B$ a terra, **dalla stessa parte** rispetto al piede della torre, con angoli di depressione rispettivamente $\alpha$ e $\beta$, con $\alpha > \beta$ (quindi $A$ è più vicino alla torre di $B$). Sapendo che la distanza $AB$ vale $d$ metri, dimostrare che

$$
h = \frac{d \sin\alpha \sin\beta}{\sin(\alpha - \beta)}.
$$

# Solution
Sia $T$ la cima della torre e $O$ il piede. I punti $A$ e $B$ giacciono sulla stessa semiretta uscente da $O$, con $OA < OB$. Gli angoli di depressione da $T$ coincidono con gli angoli $\angle TAO = \alpha$ e $\angle TBO = \beta$ nei triangoli rettangoli $TOA$ e $TOB$.

Da $\tan\alpha = \frac{h}{OA}$ e $\tan\beta = \frac{h}{OB}$ si ottiene

$$
OA = \frac{h}{\tan\alpha}, \qquad OB = \frac{h}{\tan\beta}.
$$

Poiché $\alpha > \beta > 0$ (angoli acuti di depressione), $\tan\alpha > \tan\beta$ e quindi $OA < OB$. La distanza tra i due punti è

$$
d = OB - OA = h\left(\frac{1}{\tan\beta} - \frac{1}{\tan\alpha}\right) = h \cdot \frac{\tan\alpha - \tan\beta}{\tan\alpha \tan\beta}.
$$

Usando le identità

$$
\tan\alpha - \tan\beta = \frac{\sin(\alpha - \beta)}{\cos\alpha \cos\beta}, \qquad
\tan\alpha \tan\beta = \frac{\sin\alpha \sin\beta}{\cos\alpha \cos\beta},
$$

si ottiene

$$
d = h \cdot \frac{\sin(\alpha - \beta)}{\sin\alpha \sin\beta},
$$

e infine

$$
h = \frac{d \sin\alpha \sin\beta}{\sin(\alpha - \beta)}.
$$

**Nota:** se $A$ e $B$ fossero da parti opposte rispetto a $O$, si avrebbe $d = OA + OB$ e la formula diventerebbe $h = \dfrac{d \sin\alpha \sin\beta}{\sin(\alpha + \beta)}$.
