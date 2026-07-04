---
year: 1
macro_area: "Geometria piana (Euclidea)"
topic: "Triangoli"
difficulty: 2
tags:
  - "geometria euclidea"
  - "triangoli isosceli"
  - "criteri di congruenza"
  - "dimostrazioni geometriche"
  - "primo anno"
---
# Problem Text
Dato un triangolo isoscele $ABC$ di base $BC$, siano $D$ ed $E$ due punti appartenenti rispettivamente ai lati $AB$ e $AC$ tali che:

$$
AD \cong AE
$$

Sia $P$ il punto di intersezione tra i segmenti $CD$ e $BE$. Dimostrare che:
1. I segmenti $CD$ e $BE$ sono congruenti ($CD \cong BE$).
2. Il triangolo $PBC$ è anch'esso un triangolo isoscele di base $BC$.

# Solution
### 1. Dimostrazione della congruenza tra $CD$ e $BE$

Per dimostrare la prima tesi, prendiamo in esame i triangoli $ABE$ e $ACD$. Essi hanno:

- $AB \cong AC$ per ipotesi, poiché il triangolo $ABC$ è isoscele con base $BC$.
- $AE \cong AD$ per ipotesi.
- L'angolo in $\widehat{A}$ in comune (ovvero $\widehat{BAE} \cong \widehat{CAD}$).

I due triangoli possiedono quindi due lati e l'angolo compreso rispettivamente congruenti. Di conseguenza, per il **primo criterio di congruenza dei triangoli**, i triangoli $ABE$ e $ACD$ sono congruenti:

$$
ABE \cong ACD
$$

Essendo i due triangoli congruenti, tutti i loro elementi corrispondenti saranno anch'essi congruenti. In particolare:
- I terzi lati opposti all'angolo in $\widehat{A}$ sono congruenti:

$$
CD \cong BE
$$

- Gli angoli opposti ai lati congruenti $AE$ e $AD$ sono congruenti:

$$
\widehat{ABE} \cong \widehat{ACD}
$$

La prima parte del teorema è così dimostrata.

---

### 2. Dimostrazione che il triangolo $PBC$ è isoscele

Per dimostrare che il triangolo $PBC$ è isoscele di base $BC$, è sufficiente mostrare che ha i due angoli alla base, ovvero $\widehat{PBC}$ e $\widehat{PCB}$, congruenti.

Osserviamo che gli angoli alla base del triangolo isoscele di partenza $ABC$ sono congruenti per le proprietà dei triangoli isosceli:

$$
\widehat{ABC} \cong \widehat{ACB}
$$

Possiamo esprimere l'angolo $\widehat{PBC}$ come differenza tra l'angolo $\widehat{ABC}$ e l'angolo $\widehat{ABE}$:

$$
\widehat{PBC} = \widehat{ABC} - \widehat{ABE}
$$

In modo analogo, possiamo esprimere l'angolo $\widehat{PCB}$ come differenza tra l'angolo $\widehat{ACB}$ e l'angolo $\widehat{ACD}$:

$$
\widehat{PCB} = \widehat{ACB} - \widehat{ACD}
$$

Dato che:
- $\widehat{ABC} \cong \widehat{ACB}$ (angoli alla base del triangolo isoscele $ABC$)
- $\widehat{ABE} \cong \widehat{ACD}$ (dimostrato precedentemente per congruenza di triangoli)

allora per differenza di angoli congruenti si ottiene:

$$
\widehat{PBC} \cong \widehat{PCB}
$$

Avendo due angoli alla base congruenti, il triangolo $PBC$ è un triangolo isoscele con base $BC$. Anche la seconda tesi è dimostrata.
