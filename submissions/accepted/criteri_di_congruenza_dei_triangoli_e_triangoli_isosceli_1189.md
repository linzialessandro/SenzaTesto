---
year: 1
macro_area: Geometria Euclidea
topic: Criteri di congruenza dei triangoli e triangoli isosceli
difficulty: 3
tags:
  - geometria euclidea
  - congruenza
  - triangolo isoscele
  - criteri di congruenza
  - dimostrazioni
---
# Problem Text
Si consideri un triangolo isoscele $ABC$ di base $BC$ e vertice $A$ (con $AB \cong AC$). Sui prolungamenti della base $BC$, da parte di $B$ e da parte di $C$, si prendano rispettivamente due segmenti congruenti $BD$ e $CE$ (in modo che l'ordine dei punti sulla retta sia $D$, $B$, $C$, $E$, con $D$ ed $E$ esterni al segmento $BC$).

1. Dimostrare che il triangolo $ADE$ è anch'esso un triangolo isoscele con base $DE$.
2. Siano $M$ e $N$ le proiezioni ortogonali rispettivamente di $B$ sul segmento $AD$ e di $C$ sul segmento $AE$. Dimostrare che i segmenti $BM$ e $CN$ sono congruenti ($BM \cong CN$).

Formulare la dimostrazione dividendo chiaramente le **Ipotesi**, la **Tesi** e i passaggi logico-deduttivi della **Dimostrazione**.

# Solution
Si riporta la risoluzione geometrica completa ed estremamente rigorosa del problema, organizzata secondo lo schema classico delle dimostrazioni euclidee.

---

### Rappresentazione formale del problema

**Ipotesi (Hp):**
1. $ABC$ è un triangolo isoscele sulla base $BC \implies AB \cong AC$ e $\angle ABC \cong \angle ACB$.
2. I punti $D, B, C, E$ appartengono alla stessa retta nell'ordine specificato: $D - B - C - E$.
3. I segmenti di prolungamento sono congruenti: $BD \cong CE$.
4. $BM \perp AD$ con $M \in AD$ (ovvero $\angle BMD \cong 90^\circ$).
5. $CN \perp AE$ con $N \in AE$ (ovvero $\angle CNE \cong 90^\circ$).

**Tesi (Th):**
1. $ADE$ è un triangolo isoscele di base $DE \implies AD \cong AE$.
2. $BM \cong CN$.

---

### Dimostrazione

#### Punto 1: Dimostrazione che il triangolo $ADE$ è isoscele

Per dimostrare che il triangolo $ADE$ è isoscele sulla base $DE$, è sufficiente dimostrare la congruenza dei due lati obliqui, ossia $AD \cong AE$. A tale scopo, consideriamo i triangoli $ABD$ e $ACE$:

1. $AB \cong AC$ per l'ipotesi 1 (lati obliqui del triangolo isoscele $ABC$).
2. $BD \cong CE$ per l'ipotesi 3 (prolungamenti congruenti per costruzione).
3. Consideriamo gli angoli $\angle ABD$ e $\angle ACE$:
   * L'angolo $\angle ABD$ è adiacente e supplementare all'angolo alla base del triangolo $\angle ABC$. Di conseguenza:
     $$\angle ABD \cong 180^\circ - \angle ABC$$
   * L'angolo $\angle ACE$ è adiacente e supplementare all'angolo alla base del triangolo $\angle ACB$. Di conseguenza:
     $$\angle ACE \cong 180^\circ - \angle ACB$$
   * Poiché il triangolo $ABC$ è isoscele per l'ipotesi 1, gli angoli alla base sono congruenti: $\angle ABC \cong \angle ACB$.
   * Angoli supplementari di angoli congruenti sono a loro volta congruenti, pertanto:
     $$\angle ABD \cong \angle ACE$$

Avendo trovato due lati e l'angolo compreso rispettivamente congruenti ($AB \cong AC$, $BD \cong CE$ e $\angle ABD \cong \angle ACE$), i triangoli $ABD$ e $ACE$ sono congruenti per il **Primo Criterio di Congruenza dei triangoli**.

Dalla congruenza dei triangoli $\triangle ABD \cong \triangle ACE$, discende direttamente la congruenza di tutti gli elementi corrispondenti, in particolare dei lati opposti agli angoli congruenti:
$$AD \cong AE$$

Avendo dimostrato che $AD \cong AE$, il triangolo $ADE$ ha due lati congruenti ed è pertanto un **triangolo isoscele** su base $DE$. Inoltre, dalla stessa congruenza di triangoli, segue la congruenza degli angoli alla base del triangolo $ADE$:
$$\angle ADB \cong \angle AEC \quad (\text{ovvero} \quad \angle ADE \cong \angle AED)$$

*(C.D.D. per il punto 1)*

---

#### Punto 2: Dimostrazione che $BM \cong CN$

Per dimostrare che $BM \cong CN$, confrontiamo i triangoli rettangoli $\triangle BMD$ e $\triangle CNE$:

1. Essi sono triangoli rettangoli per costruzione (hp 4 e hp 5):
   $$\angle BMD \cong \angle CNE \cong 90^\circ$$
2. Le loro ipotenuse sono congruenti per l'ipotesi 3:
   $$BD \cong CE$$
3. Gli angoli acuti adiacenti alle ipotenuse sono congruenti, in quanto provato al punto 1 (angoli alla base del triangolo isoscele $ADE$):
   $$\angle BDM \cong \angle CEN \quad (\text{ovvero} \quad \angle ADE \cong \angle AED)$$

Avendo l'ipotenusa e un angolo acuto rispettivamente congruenti, i triangoli rettangoli $\triangle BMD$ e $\triangle CNE$ sono congruenti per il **Criterio di congruenza dei triangoli rettangoli** (derivato dal secondo criterio di congruenza generalizzato).

In forza di questa congruenza, tutti gli elementi corrispondenti dei due triangoli sono congruenti, e in particolare i cateti opposti agli angoli $\angle BDM$ e $\angle CEN$:
$$BM \cong CN$$

*(C.D.D. per il punto 2)*
