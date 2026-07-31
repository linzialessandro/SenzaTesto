---
year: 4
macro_area: "Geometria dello spazio"
topic: "Rette e piani nello spazio, poliedri e solidi di rotazione, aree e volumi"
difficulty: 5
ai_generated: true
tags:
  - "stereometria"
  - "piramide"
  - "sfera inscritta"
  - "sfera circoscritta"
  - "ottimizzazione"
---
# Problem Text
Una piramide retta a base quadrata ha le facce laterali inclinate di un angolo $\alpha \in \left(0, \frac{\pi}{2}\right)$ rispetto al piano di base. Determinare il valore di $\tan\alpha$ per cui il rapporto tra il raggio $r$ della sfera inscritta nella piramide e il raggio $R$ della sfera circoscritta alla piramide è massimo, e calcolare tale valore massimo.

# Solution
Sia $2a$ la lunghezza del lato di base e $h = a \tan\alpha$ l'altezza della piramide. Poniamo $t = \tan\alpha > 0$.

L'apotema della piramide è $L = \sqrt{h^2 + a^2} = a\sqrt{1+t^2}$.

Considerando la sezione verticale passante per i punti medi di due lati opposti della base (un triangolo isoscele di base $2a$, altezza $h$ e lati obliqui $L$), il raggio $r$ della sfera inscritta coincide con l'inraggio di tale triangolo:

$$
r = \frac{\text{Area}}{\text{semiperimetro}} = \frac{a h}{a + L} = a \frac{t}{1 + \sqrt{1+t^2}}
$$

I vertici di base distano $a\sqrt{2}$ dal centro della base. Il raggio $R$ della sfera circoscritta soddisfa la relazione $R^2 = (h - R)^2 + 2a^2$, da cui:

$$
R = \frac{h^2 + 2a^2}{2h} = a \frac{t^2 + 2}{2t}
$$

Il rapporto $k(t) = \frac{r}{R}$ è dunque espresso da:

$$
k(t) = \frac{2t^2}{(t^2+2)\left(1+\sqrt{1+t^2}\right)}
$$

Ponendo $u = \sqrt{1+t^2} > 1$, si ha $t^2 = u^2 - 1$. Sostituendo e semplificando il fattore $(u+1)$:

$$
k(u) = \frac{2(u^2-1)}{(u^2+1)(u+1)} = \frac{2(u-1)}{u^2+1}
$$

Per trovare il massimo di $k$, poniamo $k u^2 - 2u + (k+2) = 0$ e imponiamo che il discriminante sia non negativo ($\Delta \ge 0$):

$$
\frac{\Delta}{4} = 1 - k(k+2) = 1 - 2k - k^2 \ge 0 \implies k^2 + 2k - 1 \le 0
$$

Poiché $k > 0$, il massimo valore ammissibile è:

$$
k_{\max} = \sqrt{2} - 1
$$

Tale valore massimo si ottiene in corrispondenza della radice doppia $u = \frac{1}{k_{\max}} = \sqrt{2} + 1$.

Infine, poiché $u = \sqrt{1+\tan^2\alpha} = \sqrt{2}+1$, elevando al quadrato otteniamo:

$$
1 + \tan^2\alpha = (\sqrt{2}+1)^2 = 3 + 2\sqrt{2} \implies \tan\alpha = \sqrt{2+2\sqrt{2}}
$$
