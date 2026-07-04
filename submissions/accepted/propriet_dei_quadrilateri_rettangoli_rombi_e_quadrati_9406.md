---
year: 1
macro_area: Geometria Euclidea
topic: Proprietà dei quadrilateri (rettangoli, rombi e quadrati)
difficulty: 3
tags:
  - geometria euclidea
  - quadrilateri
  - rettangolo
  - rombo
  - quadrato
  - dimostrazioni
---
# Problem Text
Si consideri un generico rettangolo $ABCD$. Siano $M$, $N$, $P$ e $Q$ i punti medi rispettivamente dei lati $AB$, $BC$, $CD$ e $DA$.

1. Dimostrare che il quadrilatero $MNPQ$ è un rombo.
2. Determinare la condizione aggiuntiva sotto cui il quadrilatero $MNPQ$ risulta essere un quadrato, fornendo una dimostrazione rigorosa (è consigliato esplorare il problema sia attraverso lo studio degli angoli sia tramite le proprietà delle diagonali dei quadrilateri).

Organizzare il procedimento mediante la formulazione di **Ipotesi**, **Tesi** e una dettagliata **Dimostrazione**.

# Solution
Si fornisce la risoluzione geometrica rigorosa e approfondita, includendo due diversi metodi di dimostrazione per il secondo quesito.

---

### Rappresentazione formale del problema

**Ipotesi (Hp):**
1. $ABCD$ è un rettangolo di lati opposti $AB \cong CD$ e $AD \cong BC$, con angoli interni retti:
   $$\angle DAB \cong \angle ABC \cong \angle BCD \cong \angle CDA \cong 90^\circ$$
2. $M$ è il punto medio di $AB \implies AM \cong MB \cong \frac{1}{2}AB$.
3. $N$ è il punto medio di $BC \implies BN \cong NC \implies \frac{1}{2}BC$.
4. $P$ è il punto medio di $CD \implies CP \cong PD \implies \frac{1}{2}CD$.
5. $Q$ è il punto medio di $AD \implies DQ \cong QA \cong \frac{1}{2}AD$.

**Tesi (Th):**
1. $MNPQ$ è un rombo $\implies MN \cong NP \cong PQ \cong QM$.
2. $MNPQ$ è un quadrato $\iff ABCD$ è un quadrato (ovvero $AB \cong AD$).

---

### Dimostrazione

#### Punto 1: Dimostrazione che $MNPQ$ è un rombo

Per dimostrare che il quadrilatero $MNPQ$ è un rombo, dobbiamo verificare che tutti i suoi quattro lati sono congruenti ($MN \cong NP \cong PQ \cong QM$).
Consideriamo i quattro triangoli rettangoli posti ai vertici del rettangolo: $\triangle AMQ$, $\triangle BMN$, $\triangle CNP$ e $\triangle DPQ$.

Confrontiamo i loro elementi fondamentali:
1. Gli angoli compresi tra i cateti sono tutti retti, in quanto angoli interni del rettangolo $ABCD$ (ipotesi 1):
   $$\angle MAQ \cong \angle MBN \cong \angle NCP \cong \angle PDQ \cong 90^\circ$$
2. Confrontiamo i primi cateti orizzontali (su $AB$ e $CD$):
   * Per ipotesi, $M$ divide $AB$ a metà e $P$ divide $CD$ a metà.
   * Poiché i lati opposti del rettangolo sono congruenti ($AB \cong CD$), le loro rispettive metà sono congruenti:
     $$AM \cong MB \cong CP \cong PD$$
3. Confrontiamo i secondi cateti verticali (su $AD$ e $BC$):
   * Per ipotesi, $Q$ divide $AD$ a metà e $N$ divide $BC$ a metà.
   * Poiché i lati opposti del rettangolo sono congruenti ($AD \cong BC$), le loro rispettive metà sono congruenti:
     $$AQ \cong QD \cong BN \cong NC$$

Avendo due cateti rispettivamente congruenti e l'angolo tra essi compreso retto, i quattro triangoli rettangoli sono congruenti a quattro a quattro per il **Primo Criterio di Congruenza dei triangoli** (o specificamente per il criterio dei triangoli rettangoli ad aventi i cateti congruenti):
$$\triangle AMQ \cong \triangle BMN \cong \triangle CNP \cong \triangle DPQ$$

Dalla congruenza di questi quattro triangoli discende, in particolare, la congruenza di tutte le rispettive ipotenuse:
$$QM \cong MN \cong NP \cong PQ$$

Poiché il quadrilatero $MNPQ$ ha tutti e quattro i lati congruenti, esso risponde alla definizione di **rombo**.

*(C.D.D. per il punto 1)*

---

#### Punto 2: Condizione affinché $MNPQ$ sia un quadrato

Un rombo è un quadrato se e solo se ha gli angoli interni retti (misure pari a $90^\circ$). Vediamo sotto quale condizione per $ABCD$ ciò avviene. Presentiamo due bellissimi metodi dimostrativi.

##### Metodo A: Studio analitico degli angoli
Consideriamo l'angolo interno $\angle QMN$ del rombo. I punti $A$, $M$ e $B$ sono allineati sulla base del rettangolo, pertanto l'angolo piatto in $M$ vale $180^\circ$ ed è composto da tre angoli:
$$\angle AMQ + \angle QMN + \angle NMB = 180^\circ \implies \angle QMN = 180^\circ - (\angle AMQ + \angle NMB)$$

Affinché $MNPQ$ sia un quadrato, deve essere $\angle QMN = 90^\circ$. Sostituendo:
$$90^\circ = 180^\circ - (\angle AMQ + \angle NMB) \implies \angle AMQ + \angle NMB = 90^\circ$$

Dalla congruenza dei triangoli provata al punto 1 ($\triangle AMQ \cong \triangle BMN$), sappiamo che i loro angoli acuti corrispondenti sono congruenti:
$$\angle AMQ \cong \angle BNM \quad \text{e} \quad \angle AQM \cong \angle NMB$$

Poiché in un triangolo rettangolo gli angoli acuti sono complementari, per $\triangle AMQ$ abbiamo:
$$\angle AMQ + \angle AQM = 90^\circ \implies \angle AMQ + \angle NMB = 90^\circ$$

Dato che i due angoli $\angle AMQ$ e $\angle NMB$ sono uguali (poiché $\triangle AMQ \cong \triangle BMN$ sono triangoli congruenti con i cateti disposti in modo simmetrico $\implies AM \cong MB$ e $AQ \cong BN$), abbiamo:
$$\angle AMQ \cong \angle NMB \implies 2\angle AMQ = 90^\circ \implies \angle AMQ = 45^\circ$$

In un triangolo rettangolo ($\triangle AMQ$), se uno degli angoli acuti misura $45^\circ$, anche l'altro misura $45^\circ$ ($\angle AQM = 45^\circ$). Di conseguenza, $\triangle AMQ$ è un **triangolo rettangolo isoscele**.
Ciò implica la congruenza dei suoi due cateti:
$$AM \cong AQ$$

Essendo $AM = \frac{1}{2}AB$ e $AQ = \frac{1}{2}AD$, la congruenza diventa:
$$\frac{1}{2}AB \cong \frac{1}{2}AD \implies AB \cong AD$$

La condizione $AB \cong AD$ implica che il rettangolo $ABCD$ di partenza ha i lati adiacenti congruenti, ovvero è un **quadrato**.

---

##### Metodo B: Proprietà geometriche delle diagonali (Alternativo ed elegantissimo)
Un rombo è un quadrato se e solo se le sue diagonali sono congruenti.
Le diagonali del rombo $MNPQ$ sono i segmenti $MP$ e $QN$:
* Il segmento $MP$ congiunge i punti medi dei lati opposti $AB$ e $CD$ del rettangolo. Per le proprietà del rettangolo, $MP$ è parallelo ed è congruente ai lati verticali del rettangolo:
  $$MP \cong AD$$
* Il segmento $QN$ congiunge i punti medi dei lati opposti $AD$ e $BC$ del rettangolo $ABCD$. Di conseguenza, $QN$ è parallelo ed è congruente ai lati orizzontali del rettangolo:
  $$QN \cong AB$$

Quindi, le diagonali del rombo sono congruenti se e solo se i lati del rettangolo di partenza sono congruenti:
$$MP \cong QN \iff AD \cong AB$$

Poiché un rettangolo con lati adiacenti congruenti ($AB \cong AD$) è per definizione un quadrato, concludiamo che:
**Il quadrilatero interno $MNPQ$ è un quadrato se e solo se il rettangolo di partenza $ABCD$ è un quadrato.**

*(C.D.D. per il punto 2)*
