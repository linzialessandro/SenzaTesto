---
year: 1
macro_area: Geometria piana (Euclidea)
topic: Triangoli e Criteri di Congruenza
difficulty: 2
tags:
  - triangoli
  - congruenza
  - dimostrazione
---
# Problem Text

Sia $ABC$ un triangolo isoscele sulla base $BC$. Siano $M$ e $N$ due punti, rispettivamente sui lati $AB$ e $AC$, tali che $AM \cong AN$. 
Dimostrare che i segmenti $BN$ e $CM$ sono congruenti.

# Solution

**Ipotesi:**
1. $ABC$ è un triangolo isoscele con base $BC$, quindi $AB \cong AC$ e $\widehat{ABC} \cong \widehat{ACB}$.
2. $M \in AB$, $N \in AC$ tali che $AM \cong AN$.

**Tesi:**
$BN \cong CM$

**Dimostrazione:**
Consideriamo i triangoli $ABN$ e $ACM$. Analizziamo i loro elementi:
- $AB \cong AC$ per ipotesi (il triangolo $ABC$ è isoscele).
- $AN \cong AM$ per ipotesi.
- L'angolo al vertice $\widehat{BAC}$ (o $\widehat{A}$) è in comune tra i due triangoli.

Per il **Primo Criterio di Congruenza** dei triangoli (due lati e l'angolo compreso rispettivamente congruenti), i triangoli $ABN$ e $ACM$ sono congruenti.
In simboli: $ABN \cong ACM$.

Di conseguenza, tutti gli elementi corrispondenti dei due triangoli sono congruenti. In particolare, il lato $BN$ (opposto all'angolo $\widehat{A}$ nel triangolo $ABN$) è congruente al lato $CM$ (opposto all'angolo $\widehat{A}$ nel triangolo $ACM$).

Quindi, $BN \cong CM$.
*C.V.D.*
