---
year: 2
macro_area: Algebra
topic: Equazioni parametriche di secondo grado e relazioni tra soluzioni e coefficienti
difficulty: 3
tags:
  - algebra
  - equazioni di secondo grado
  - equazioni parametriche
  - relazioni tra radici e coefficienti
  - regola di cartesio
---
# Problem Text
Si consideri la seguente equazione parametrica di secondo grado nell'incognita reale $x$, con parametro reale $k \in \mathbb{R}$:
$$x^2 - 2(k-1)x + (k^2 - 2k - 3) = 0$$

1. Dimostrare che l'equazione ammette due soluzioni reali e distinte per qualsiasi valore del parametro reale $k$.
2. Senza risolvere esplicitamente l'equazione, ma utilizzando esclusivamente le relazioni che legano le radici $x_1$ e $x_2$ ai coefficienti dell'equazione, determinare per quali valori di $k$ si verificano le seguenti condizioni:
   - le soluzioni sono opposte (ossia $x_1 = -x_2$);
   - una delle due soluzioni è nulla ($x = 0$);
   - la somma dei quadrati delle soluzioni è pari a $10$ (ossia $x_1^2 + x_2^2 = 10$);
   - la somma dei reciproci delle soluzioni è pari a $-\frac{2}{3}$ (ossia $\frac{1}{x_1} + \frac{1}{x_2} = -\frac{2}{3}$).
3. Ricavare le soluzioni esplicite della data equazione in funzione di $k$ e utilizzarle per verificare la correttezza di tutte le risposte fornite al punto precedente.

# Solution
Si riporta la risoluzione analitica e rigorosa di ciascun quesito del problema.

---

### Analisi preliminare dei coefficienti
Dall'equazione quadratica data $x^2 - 2(k-1)x + (k^2 - 2k - 3) = 0$, identifichiamo i coefficienti algebrici:
* $a = 1$
* $b = -2(k-1)$
* $c = k^2 - 2k - 3$

---

### 1. Dimostrazione dell'esistenza di soluzioni reali e distinte
Calcoliamo il discriminante ridotto dell'equazione (usando la formula del $\frac{\Delta}{4}$ poiché il coefficiente del termine lineare in $x$ è pari):
$$\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac$$

Sostituendo i coefficienti:
$$\frac{\Delta}{4} = [-(k-1)]^2 - 1 \cdot (k^2 - 2k - 3)$$
$$\frac{\Delta}{4} = (k^2 - 2k + 1) - k^2 + 2k + 3$$

Semplificando i termini simili:
$$\frac{\Delta}{4} = 4$$

Poiché il discriminante ridotto è una costante strettamente positiva ($\frac{\Delta}{4} = 4 > 0$), il discriminante completo dell'equazione $\Delta = 16$ è positivo indipendentemente dal valore del parametro $k$. Pertanto, l'equazione ammette **due soluzioni reali e distinte per ogni $k \in \mathbb{R}$**.

*(C.D.D.)*

---

### 2. Risoluzione dei quesiti tramite relazioni radici-coefficienti
Date le soluzioni reali $x_1$ e $x_2$, ricordiamo le relazioni fondamentali con i coefficienti:
* Somma delle soluzioni:
  $$s = x_1 + x_2 = -\frac{b}{a} = 2(k-1)$$
* Prodotto delle soluzioni:
  $$p = x_1 \cdot x_2 = \frac{c}{a} = k^2 - 2k - 3$$

Andiamo a discutere le quattro condizioni:

#### Condizione A: Le soluzioni sono opposte ($x_1 = -x_2$)
La condizione logica si traduce nell'annullamento della loro somma:
$$x_1 + x_2 = 0 \implies s = 0$$
$$2(k-1) = 0 \implies k - 1 = 0 \implies k = 1$$

Il valore cercato è **$k = 1$**.

#### Condizione B: Una delle soluzioni è nulla
Affinché una soluzione sia pari ad $0$, il prodotto delle due soluzioni deve essere nullo:
$$x_1 \cdot x_2 = 0 \implies p = 0$$
$$k^2 - 2k - 3 = 0$$

Risolviamo l'equazione di secondo grado in $k$ tramite scomposizione del trinomio speciale (trovando due numeri la cui somma è $-2$ e il prodotto è $-3$, ovvero $-3$ e $+1$):
$$(k-3)(k+1) = 0 \implies k = 3 \quad \lor \quad k = -1$$

I valori cercati sono **$k = 3$** e **$k = -1$**.

#### Condizione C: La somma dei quadrati delle soluzioni è pari a $10$
Possiamo esprimere la somma dei quadrati $x_1^2 + x_2^2$ in funzione della somma $s$ e del prodotto $p$ delle radici utilizzando l'identità algebrica:
$$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = s^2 - 2p$$

Imponiamo che questa espressione sia uguale a $10$:
$$s^2 - 2p = 10$$
$$[2(k-1)]^2 - 2(k^2 - 2k - 3) = 10$$
$$4(k^2 - 2k + 1) - 2k^2 + 4k + 6 = 10$$
$$4k^2 - 8k + 4 - 2k^2 + 4k + 6 = 10$$
$$2k^2 - 4k + 10 = 10$$
$$2k^2 - 4k = 0 \implies 2k(k-2) = 0 \implies k = 0 \quad \lor \quad k = 2$$

I valori cercati sono **$k = 0$** e **$k = 2$**.

#### Condizione D: La somma dei reciproci delle soluzioni è pari a $-\frac{2}{3}$
Scriviamo la somma dei reciproci in termini della somma $s$ e del prodotto $p$:
$$\frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1 x_2} = \frac{s}{p}$$

Affinché la somma dei reciproci sia ben definita, i denominatori non devono essere nulli ($x_1 \neq 0$ e $x_2 \neq 0$), il che richiede $p \neq 0 \implies k \neq 3 \land k \neq -1$.
Imponiamo la condizione richiesta:
$$\frac{s}{p} = -\frac{2}{3} \implies \frac{2(k-1)}{k^2 - 2k - 3} = -\frac{2}{3}$$

Moltiplichiamo entrambi i membri per $-\frac{3}{2}$ (che è lecito e semplifica notevolmente i coefficienti):
$$\frac{-3(k-1)}{k^2 - 2k - 3} = 1 \implies k^2 - 2k - 3 = -3k + 3$$
$$k^2 + k - 6 = 0$$

Scomponiamo il trinomio speciale in $k$ (somma $+1$, prodotto $-6 \implies +3$ e $-2$):
$$(k+3)(k-2) = 0 \implies k = -3 \quad \lor \quad k = 2$$

Entrambi i valori verificano le condizioni di accettabilità ($k \neq 3 \land k \neq -1$). Pertanto, i valori cercati sono **$k = -3$** e **$k = 2$**.

---

### 3. Soluzione esplicita dell'equazione parametrica e verifica
Calcoliamo le soluzioni reali $x_1$ e $x_2$ in forma esplicita in funzione di $k$:
$$x_{1,2} = \frac{-b/2 \pm \sqrt{\Delta/4}}{a}$$

Poiché $-b/2 = k-1$ e $\frac{\Delta}{4} = 4$, otteniamo:
$$x_{1,2} = (k-1) \pm \sqrt{4} = (k-1) \pm 2$$

Le due soluzioni esplicite dell'equazione sono:
$$x_1 = k - 3 \quad \text{e} \quad x_2 = k + 1$$

Eseguiamo la verifica immediata per le quattro condizioni trovate:

* **Verifica della Condizione A ($k = 1$):**
  Per $k = 1$, le soluzioni diventano:
  $$x_1 = 1 - 3 = -2 \quad \text{e} \quad x_2 = 1 + 1 = 2$$
  Le soluzioni sono opposte ($-2$ e $2$). La condizione è verificata.

* **Verifica della Condizione B ($k = 3 \lor k = -1$):**
  * Per $k = 3$:
    $$x_1 = 3 - 3 = 0, \quad x_2 = 3 + 1 = 4 \implies \text{una soluzione è nulla (verificato)}$$
  * Per $k = -1$:
    $$x_1 = -1 - 3 = -4, \quad x_2 = -1 + 1 = 0 \implies \text{una soluzione è nulla (verificato)}$$

* **Verifica della Condizione C ($k = 0 \lor k = 2$):**
  * Per $k = 0$:
    $$x_1 = -3, \quad x_2 = 1 \implies x_1^2 + x_2^2 = (-3)^2 + (1)^2 = 9 + 1 = 10 \quad \text{(verificato)}$$
  * Per $k = 2$:
    $$x_1 = -1, \quad x_2 = 3 \implies x_1^2 + x_2^2 = (-1)^2 + (3)^2 = 1 + 9 = 10 \quad \text{(verificato)}$$

* **Verifica della Condizione D ($k = -3 \lor k = 2$):**
  * Per $k = -3$:
    $$x_1 = -6, \quad x_2 = -2 \implies \frac{1}{x_1} + \frac{1}{x_2} = -\frac{1}{6} - \frac{1}{2} = \frac{-1-3}{6} = -\frac{4}{6} = -\frac{2}{3} \quad \text{(verificato)}$$
  * Per $k = 2$:
    $$x_1 = -1, \quad x_2 = 3 \implies \frac{1}{x_1} + \frac{1}{x_2} = \frac{1}{-1} + \frac{1}{3} = -1 + \frac{1}{3} = -\frac{2}{3} \quad \text{(verificato)}$$

Tutte le verifiche confermano pienamente la correttezza delle risposte.
