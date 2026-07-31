---
year: 1
macro_area: "Geometria piana (Euclidea)"
topic: "Triangoli (classificazione e propriet\u00e0, criteri di congruenza)"
difficulty: 5
ai_generated: true
tags:
  - "geometria piana"
  - "criteri di congruenza"
  - "triangoli isosceli"
  - "dimostrazione"
  - "1\u00b0 anno"
---
# Problem Text
Sia $ABC$ un triangolo isoscele sulla base $BC$. Si consideri un punto $D$ sul lato $AC$ e un punto $E$ sul prolungamento del lato $AB$ oltre il vertice $B$, tali che $BE \cong CD$. La retta $DE$ interseca la base $BC$ nel punto $P$. Dimostrare che $P$ è il punto medio del segmento $DE$.

# Solution
Per dimostrare che $DP \cong PE$, tracciamo dal punto $D$ il segmento $DF$, con $F \in BC$, tale che $DF$ sia parallelo al lato $AB$.

Poiché $DF \parallel AB$ e le rette sono tagliate dalla trasversale $BC$, gli angoli corrispondenti $\angle DFC$ e $\angle ABC$ sono congruenti:

$$
\angle DFC \cong \angle ABC
$$

Essendo il triangolo $ABC$ isoscele sulla base $BC$, gli angoli alla base sono congruenti:

$$
\angle ABC \cong \angle ACB
$$

Per la proprietà transitiva della congruenza tra angoli, si ha $\angle DFC \cong \angle ACB$. Di conseguenza, il triangolo $DFC$ è isoscele sulla base $FC$, da cui deriva:

$$
DF \cong CD
$$

Poiché per ipotesi $BE \cong CD$, per la proprietà transitiva otteniamo:

$$
DF \cong BE
$$

Consideriamo ora i triangoli $DFP$ e $EBP$:
1. $DF \cong BE$, per la relazione appena dimostrata;
2. $\angle DPF \cong \angle EPB$, perché angoli opposti al vertice;
3. $\angle PDF \cong \angle PEB$, poiché angoli alterni interni formati dalle rette parallele $DF$ e $AB$ tagliate dalla trasversale $DE$.

Per il criterio di congruenza dei triangoli (AAS), i triangoli $DFP$ e $EBP$ sono congruenti:

$$
\triangle DFP \cong \triangle EBP
$$

In particolare, i lati corrispondenti sono congruenti, per cui:

$$
DP \cong PE
$$

Resta così dimostrato che $P$ è il punto medio del segmento $DE$.
