---
year: 2
macro_area: Algebra
topic: "Equazioni di secondo grado: casi particolari, realtà delle radici e regola di Cartesio"
difficulty: 4
tags:
  - algebra
  - equazioni di secondo grado
  - regola di cartesio
  - discussione parametrica
  - casi particolari
---
# Problem Text
Si consideri la seguente equazione parametrica di secondo grado nell'incognita reale $x$, dipendente dal parametro reale $k \in \mathbb{R}$:
$$(k-1)x^2 - 2kx + (k+2) = 0$$

**Parte 1: Analisi del grado e dei casi speciali (pura e spuria)**
1. Determinare per quale valore di $k$ l'equazione degenera in un'equazione di primo grado e calcolarne la soluzione.
2. Risolvere l'equazione nel caso $k = 0$, qualificandone la tipologia di equazione di secondo grado ottenuta (completa, pura o spuria).
3. Risolvere l'equazione nel caso $k = -2$, qualificandone anch'esso la tipologia.

**Parte 2: Studio del discriminante e realtà delle radici**
Determinare l'intervallo dei valori del parametro $k$ per i quali l'equazione ammette due soluzioni reali ($x_1, x_2 \in \mathbb{R}$), distinguendo il caso di soluzioni reali e distinte da quello di soluzioni reali e coincidenti.

**Parte 3: Studio dei segni delle soluzioni tramite la Regola di Cartesio**
Senza calcolare le soluzioni esplicite, discutere il segno delle radici reali $x_1$ e $x_2$ al variare di $k$ nel suo intervallo di esistenza reale. Compilare un quadro di sintesi analizzando il segno dei tre coefficienti dell'equazione, individuando il numero di permanenze e variazioni e applicando con rigore la **Regola di Cartesio**. Verificare la coerenza dello studio con i risultati ottenuti nei punti precedenti.

# Solution
Si riporta la risoluzione dettagliata passo dopo passo di ciascuna sezione del problema parametriche.

---

### Parte 1: Analisi del grado e dei casi speciali (pura e spuria)

Un'equazione parametrica si presenta nella forma generale $ax^2 + bx + c = 0$, dove i coefficienti dipendono da $k$:
* $a = k-1$
* $b = -2k$
* $c = k+2$

**1. Caso di degenerazione lineare ($a = 0$):**
L'equazione cessa di essere di secondo grado quando il coefficiente del termine di secondo grado si annulla:
$$a = 0 \implies k - 1 = 0 \implies k = 1$$

Sostituendo $k = 1$ nell'equazione di partenza:
$$(1-1)x^2 - 2(1)x + (1+2) = 0 \implies -2x + 3 = 0 \implies x = \frac{3}{2}$$

Dunque, per $k = 1$, l'equazione degenera in un'equazione di primo grado avente come unica soluzione reale **$x = \frac{3}{2}$**.

**2. Studio del caso $k = 0$ ($b = 0$):**
Sostituiamo $k = 0$ nei coefficienti:
* $a = 0 - 1 = -1$
* $b = -2(0) = 0$
* $c = 0 + 2 = 2$

L'equazione diventa:
$$-x^2 + 2 = 0 \implies x^2 = 2 \implies x = \pm\sqrt{2}$$

Poiché il coefficiente lineare $b$ è nullo mentre $a \neq 0$ e $c \neq 0$, questa è un'**equazione incompleta pura**. Le due soluzioni reali e distinte sono **$x_1 = -\sqrt{2}$** e **$x_2 = \sqrt{2}$**.

**3. Studio del caso $k = -2$ ($c = 0$):**
Sostituiamo $k = -2$:
* $a = -2 - 1 = -3$
* $b = -2(-2) = 4$
* $c = -2 + 2 = 0$

L'equazione diventa:
$$-3x^2 + 4x = 0$$

Poiché il termine noto $c$ è nullo mentre $a \neq 0$ e $b \neq 0$, questa è un'**equazione incompleta spuria**. Risolviamo raccogliendo a fattor comune parziale l'incognita $x$:
$$x(-3x + 4) = 0 \implies x_1 = 0 \quad \lor \quad -3x+4 = 0 \implies x_2 = \frac{4}{3}$$

Le soluzioni reali e distinte sono **$x_1 = 0$** e **$x_2 = \frac{4}{3}$**.

---

### Parte 2: Studio del discriminante e realtà delle radici

Per $k \neq 1$, l'equazione è di secondo grado. Ammette soluzioni reali se e solo se il suo discriminante $\Delta$ (o il discriminante ridotto $\frac{\Delta}{4}$, dato che $b = -2k$ è pari) è non negativo:
$$\frac{\Delta}{4} \ge 0$$

Calcoliamo il discriminante ridotto:
$$\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac = (-k)^2 - (k-1)(k+2)$$
$$\frac{\Delta}{4} = k^2 - (k^2 + 2k - k - 2) = k^2 - k^2 - k + 2 = 2 - k$$

Imponiamo la condizione di realtà:
$$2 - k \ge 0 \implies k \le 2$$

Ricordando che per essere di secondo grado deve essere $k \neq 1$, possiamo catalogare la natura delle radici:
* Per **$k \in (-\infty, 1) \cup (1, 2)$**: si ha $\frac{\Delta}{4} > 0$, l'equazione ammette **due soluzioni reali e distinte** ($x_1 \neq x_2$).
* Per **$k = 2$**: si ha $\frac{\Delta}{4} = 0$, l'equazione ammette **due soluzioni reali e coincidenti** ($x_1 = x_2$). Essendo $k=2$, l'equazione diventa $x^2 - 4x + 4 = 0 \implies (x-2)^2 = 0 \implies x_1=x_2=2$.
* Per **$k > 2$**: si ha $\frac{\Delta}{4} < 0$, l'equazione **non ammette soluzioni reali** ($\mathcal{S} = \emptyset$).

---

### Parte 3: Studio dei segni delle soluzioni tramite la Regola di Cartesio

La Regola di Cartesio permette di stabilire il segno delle radici di un'equazione di secondo grado analizzando la sequenza dei segni dei tre coefficienti ordinati $a$, $b$, $c$. Definiamo:
* Una **permanenza (P)** si ha quando due coefficienti consecutivi hanno lo stesso segno (indica la presenza di una radice negativa).
* Una **variazione (V)** si ha quando due coefficienti consecutivi hanno segno opposto (indica la presenza di una radice positiva).

Studiamo il segno dei coefficienti $a$, $b$, $c$ nell'intervallo in cui esistono soluzioni reali ($k \le 2$ con $k \neq 1$):
1. **Segno di $a = k - 1$**:
   * $a > 0 \iff k > 1$
   * $a < 0 \iff k < 1$
2. **Segno di $b = -2k$**:
   * $b > 0 \iff k < 0$
   * $b < 0 \iff k > 0$
3. **Segno di $c = k + 2$**:
   * $c > 0 \iff k > -2$
   * $c < 0 \iff k < -2$

Dividiamo l'intervallo $k \le 2$ in sotto-intervalli delimitati dai valori di transizione del segno dei coefficienti ($k = -2$, $k = 0$, $k = 1$):

#### Sotto-intervallo 1: $1 < k \le 2$
* Segno di $a$: $+$ (poiché $k > 1$)
* Segno di $b$: $-$ (poiché $k > 0$)
* Segno di $c$: $+$ (poiché $k > -2$)
* Successione segni $(a, b, c)$: $(+, -, +)$
* Analisi: Da $+$ a $-$ c'è una variazione (V); da $-$ a $+$ c'è una seconda variazione (V).
* Conclusione: Abbiamo **due variazioni (2 V)**. L'equazione ammette **due soluzioni reali positive** ($x_1 > 0$ e $x_2 > 0$).
*(Coerente con il caso $k=2$, dove $x_1=x_2=2 > 0$)*.

#### Sotto-intervallo 2: $0 < k < 1$
* Segno di $a$: $-$ (poiché $k < 1$)
* Segno di $b$: $-$ (poiché $k > 0$)
* Segno di $c$: $+$ (poiché $k > -2$)
* Successione segni $(a, b, c)$: $(-, -, +)$
* Analisi: Da $-$ a $-$ c'è una permanenza (P); da $-$ a $+$ c'è una variazione (V).
* Conclusione: Abbiamo **una permanenza e una variazione (1 P, 1 V)**. L'equazione ammette **una soluzione positiva e una negativa** (opposte di segno, con $x_1 < 0 < x_2$).

#### Sotto-intervallo 3: $-2 < k < 0$
* Segno di $a$: $-$ (poiché $k < 1$)
* Segno di $b$: $+$ (poiché $k < 0$)
* Segno di $c$: $+$ (poiché $k > -2$)
* Successione segni $(a, b, c)$: $(-, +, +)$
* Analisi: Da $-$ a $+$ c'è una variazione (V); da $+$ a $+$ c'è una permanenza (P).
* Conclusione: Abbiamo **una variazione e una permanenza (1 V, 1 P)**. L'equazione ammette **una soluzione positiva e una negativa** (opposte di segno, con $x_1 < 0 < x_2$).

#### Sotto-intervallo 4: $k < -2$
* Segno di $a$: $-$ (poiché $k < 1$)
* Segno di $b$: $+$ (poiché $k < 0$)
* Segno di $c$: $-$ (poiché $k < -2$)
* Successione segni $(a, b, c)$: $(-, +, -)$
* Analisi: Da $-$ a $+$ c'è una variazione (V); da $+$ a $-$ c'è una seconda variazione (V).
* Conclusione: Abbiamo **due variazioni (2 V)**. L'equazione ammette **due soluzioni reali positive** ($x_1 > 0$ e $x_2 > 0$).

---

### Riepilogo dei punti limite (passaggi di segno)

* **Per $k = 0$ ($b = 0$, equazione pura):**
  La successione dei segni è $(-, \emptyset, +)$. Abbiamo una soluzione positiva e una negativa ($x = \pm \sqrt{2}$), coerente con lo studio limitrofo.
* **Per $k = -2$ ($c = 0$, equazione spuria):**
  La successione segni è $(-, +, \emptyset)$. Una soluzione è nulla ($x_1=0$) e l'altra è positiva ($x_2 = 4/3 > 0$). Questo fa da perfetto spartiacque tra il comportamento per $k < -2$ (due radici positive) e quello per $-2 < k < 0$ (una positiva e una negativa, che si sposta gradualmente verso lo zero al tendere di $k$ a $-2$).

Tutti i risultati dello studio qualitativo basato sulla Regola di Cartesio sono matematicamente coerenti e rigorosi.
