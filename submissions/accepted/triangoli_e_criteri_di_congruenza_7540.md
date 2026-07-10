---
year: 1
macro_area: "Geometria piana"
topic: "Triangoli e criteri di congruenza"
difficulty: 2
tags:
  - "triangolo isoscele"
  - "congruenza"
  - "criteri di congruenza"
  - "dimostrazione"
---
# Problem Text
Sia $ABC$ un triangolo isoscele di base $AB$. Si considerino sulla base $AB$ due segmenti congruenti $AP$ e $QB$, con $P$ e $Q$ interni ad $AB$ tali che $P$ sia compreso tra $A$ e $Q$. Dimostra che il triangolo $CPQ$ è anch'esso isoscele.

# Solution
La dimostrazione si articola nei seguenti passaggi:

1. Poiché il triangolo $ABC$ è isoscele sulla base $AB$, i lati obliqui sono congruenti:
$AC \cong BC$.

2. Per le proprietà dei triangoli isosceli, anche gli angoli alla base sono congruenti:
$\widehat{CAP} \dots \widehat{CBQ}$ (ovvero $\widehat{A} \cong \widehat{B}$).

3. Si considerino i triangoli $APC$ e $BQC$. Essi possiedono:
   - $AC \cong BC$, in quanto lati obliqui del triangolo isoscele $ABC$;
   - $\widehat{CAP} \cong \widehat{CBQ}$, in quanto angoli alla base del triangolo isoscele $ABC$;
   - $AP \cong QB$, per ipotesi.

4. Per il primo criterio di congruenza dei triangoli (avendo due lati e l'angolo compreso rispettivamente congruenti), si deduce la congruenza dei due triangoli:

$$
APC \cong BQC
$$

5. Da tale congruenza segue che tutti gli elementi corrispondenti sono a loro volta congruenti; in particolare, i lati:
$CP \cong CQ$.

6. Poiché il triangolo $CPQ$ possiede due lati congruenti ($CP \cong CQ$), esso è, per definizione, un triangolo isoscele di base $PQ$.
