---
year: 4
macro_area: "Trigonometria"
topic: "Risoluzione dei triangoli: teoremi dei seni e dei coseni"
difficulty: 5
ai_generated: true
tags:
  - "teorema dei seni"
  - "teorema dei coseni"
  - "triangolo rettangolo"
  - "topografia"
  - "applicazioni"
---
# Problem Text
Un osservatore in cima a una torre alta $h$ metri vede un punto $A$ a terra con un angolo di depressione $\alpha$ e un punto $B$ sulla stessa retta orizzontale dietro la torre con un angolo di depressione $\beta$ (con $\alpha > \beta$). Sapendo che la distanza tra $A$ e $B$ è $d$ metri, dimostrare che l'altezza della torre è data da $$ h = \frac{d \sin\alpha \sin\beta}{\sin(\alpha - \beta)}. $$

# Solution
Si consideri la torre verticale di altezza $h$, con il piede $O$ e la cima $T$. I punti $A$ e $B$ sono a terra, con $A$ e $B$ allineati con $O$. Poiché gli angoli di depressione sono $\alpha$ e $\beta$, gli angoli di elevazione dalla base sono anch'essi $\alpha$ e $\beta$ (angoli alterni interni). Quindi $\angle OTA = 90^\circ - \alpha$ e $\angle OTB = 90^\circ - \beta$.

Nel triangolo rettangolo $OTA$ si ha $\tan\alpha = h/OA$, quindi $OA = h/\tan\alpha$. Analogamente, in $OTB$, $OB = h/\tan\beta$.

La distanza $AB$ è data da $d = OB - OA$ (perché $\alpha > \beta$, $\tan\alpha > \tan\beta$, quindi $OA < OB$). Sostituendo:
$$ d = \frac{h}{\tan\beta} - \frac{h}{\tan\alpha} = h \left( \frac{1}{\tan\beta} - \frac{1}{\tan\alpha} \right) = h \frac{\tan\alpha - \tan\beta}{\tan\alpha \tan\beta}. $$

Usando l'identità $\tan\alpha - \tan\beta = \frac{\sin(\alpha - \beta)}{\cos\alpha \cos\beta}$ e $\tan\alpha \tan\beta = \frac{\sin\alpha \sin\beta}{\cos\alpha \cos\beta}$, si ha:
$$ d = h \frac{\sin(\alpha - \beta)}{\sin\alpha \sin\beta}. $$

Da cui:
$$ h = \frac{d \sin\alpha \sin\beta}{\sin(\alpha - \beta)}. $$

La formula è dimostrata.
