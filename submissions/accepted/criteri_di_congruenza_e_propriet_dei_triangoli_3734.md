---
year: 1
macro_area: "Geometria piana"
topic: "Criteri di congruenza e propriet\u00e0 dei triangoli"
difficulty: 2
tags:
  - "Geometria Euclidea"
  - "Triangoli isosceli"
  - "Criteri di congruenza"
  - "Triangoli rettangoli"
ai_generated: true
---
# Problem Text
Sia $ABC$ un triangolo isoscele di base $AB$. Si considerino sul prolungamento della base $AB$ due punti $D$ ed $E$, con $A$ compreso tra $D$ e $B$, e $B$ compreso tra $A$ e $E$, tali che $AD \cong BE$. Si conducano da $D$ e da $E$ le perpendicolari rispettivamente alle rette dei lati $AC$ e $BC$, indicando con $H$ e $K$ i rispettivi piedi su tali rette. Dimostrare che $DH \cong EK$.

# Solution
Si considerino i triangoli rettangoli $DAH$ e $EBK$.

Poiché il triangolo $ABC$ è isoscele sulla base $AB$, gli angoli alla base sono congruenti:

$$
\widehat{CAB} \cong \widehat{CBA}
$$

Gli angoli $\widehat{DAH}$ (ossia $\widehat{DAC}$) e $\widehat{EBK}$ (ossia $\widehat{EBC}$) sono supplementari rispettivamente degli angoli $\widehat{CAB}$ e $\widehat{CBA}$, in quanto i punti $D, A, B, E$ appartengono alla stessa retta e si trovano nell'ordine indicato. Essendo supplementari di angoli congruenti, essi stessi sono congruenti:

$$
\widehat{DAH} \cong \widehat{EBK}
$$

I triangoli $DAH$ e $EBK$ sono rettangoli rispettivamente in $H$ e $K$ per costruzione ($DH \perp AC$ e $EK \perp BC$). Essi hanno:

1. l'ipotenusa $AD \cong BE$ per ipotesi;
2. l'angolo acuto $\widehat{DAH} \cong \widehat{EBK}$ per la precedente dimostrazione.

Per il criterio di congruenza dei triangoli rettangoli (aventi coordinatamente congruenti l'ipotenusa e un angolo acuto), i due triangoli sono congruenti:

$$
\triangle DAH \cong \triangle EBK
$$

In particolare, i cateti corrispondenti e opposti a tali angoli acuti sono congruenti, da cui segue la tesi:

$$
DH \cong EK
$$

Il teorema è così dimostrato.
