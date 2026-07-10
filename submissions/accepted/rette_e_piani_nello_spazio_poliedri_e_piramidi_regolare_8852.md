---
year: 4
macro_area: "Geometria dello spazio"
topic: "Rette e piani nello spazio, poliedri e piramidi regolare"
difficulty: 3
tags:
  - "piramide"
  - "geometria solida"
  - "teorema di pitagora"
  - "distanza punto-piano"
  - "stereometria"
ai_generated: true
---
# Problem Text
Si consideri una piramide quadrangolare regolare di vertice $V$ e base quadrata $ABCD$ avente tutti gli spigoli (sia di base che laterali) di lunghezza $a$. Si determini la distanza tra il centro $O$ della base e una qualsiasi delle facce laterali della piramide.

# Solution
Sia $ABCD$ la base quadrata di lato $a$ e $O$ il suo centro. Poiché la piramide è regolare, l'altezza $VO$ ha come piede il centro $O$.

Consideriamo una faccia laterale, ad esempio quella contenente lo spigolo $AB$. Sia $M$ il punto medio di $AB$. Nel triangolo rettangolo $VOM$ (retto in $O$ poiché $VO \perp OM$):

1. Il segmento $OM$ è pari a metà del lato della base:

$$
OM = \frac{a}{2}
$$

2. Lo spigolo laterale $VA$ ha lunghezza $a$. L'apotema $VM$ della piramide è l'altezza del triangolo equilatero $VAB$ di lato $a$:

$$
VM = \frac{a\sqrt{3}}{2}
$$

3. Troviamo l'altezza $VO$ della piramide usando il teorema di Pitagora nel triangolo rettangolo $VOM$:

$$
VO = \sqrt{VM^2 - OM^2} = \sqrt{\left(\frac{a\sqrt{3}}{2}\right)^2 - \left(\frac{a}{2}\right)^2} = \sqrt{\frac{3a^2}{4} - \frac{a^2}{4}} = \frac{a\sqrt{2}}{2}
$$

La distanza $d$ tra il centro $O$ e la faccia laterale $VAB$ corrisponde all'altezza del triangolo rettangolo $VOM$ relativa all'ipotenusa $VM$. Sfruttando la relazione dell'area per il triangolo $VOM$, si ha:

$$
OM \cdot VO = VM \cdot d
$$

Sostituendo i valori noti e risolvendo rispetto a $d$:

$$
d = \frac{OM \cdot VO}{VM} = \frac{\frac{a}{2} \cdot \frac{a\sqrt{2}}{2}}{\frac{a\sqrt{3}}{2}} = \frac{a^2\sqrt{2}}{4} \cdot \frac{2}{a\sqrt{3}} = \frac{a\sqrt{2}}{2\sqrt{3}} = \frac{a\sqrt{6}}{6}
$$

La distanza cercata tra il centro della base e la faccia laterale è $\frac{a\sqrt{6}}{6}$.
