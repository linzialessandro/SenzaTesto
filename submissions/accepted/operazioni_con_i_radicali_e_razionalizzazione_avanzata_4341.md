---
year: 2
macro_area: Numeri reali e Radicali
topic: Operazioni con i radicali e razionalizzazione avanzata
difficulty: 3
tags:
  - radicali
  - razionalizzazione
  - condizioni di esistenza
  - operazioni con radicali
  - trasporto fuori radice
ai_generated: true
---
# Problem Text
Il presente problema propone di verificare la competenza dello studente nell'ambito dell'algebra irrazionale, affrontando nello specifico la determinazione delle condizioni di esistenza, la semplificazione di espressioni letterali irrazionali e la razionalizzazione di denominatori contenenti somme di più radicali.

**Quesito 1: Semplificazione ed esistenza di espressioni letterali**
Si consideri la seguente espressione algebrica a termini reali:
$$A(a, b) = \left( \frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} - \sqrt{b}} - \frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} + \sqrt{b}} \right) \cdot \left( \frac{a - b}{4\sqrt{ab}} \right)$$

1. Determinare l'insieme delle Condizioni di Esistenza (C.E.) per le variabili reali $a$ e $b$ affinché l'espressione sia ben definita nei numeri reali.
2. Semplificare l'espressione $A(a, b)$ mostrando in dettaglio i passaggi algebrici.

**Quesito 2: Razionalizzazione avanzata del denominatore**
Si consideri la seguente frazione numerica avente al denominatore una somma di tre radicali quadratici:
$$B = \frac{1}{\sqrt{2} + \sqrt{3} + \sqrt{5}}$$

Razionalizzare il denominatore di $B$, portando il risultato nella forma più contratta possibile e liberando completamente il denominatore da espressioni irrazionali. Sfruttare una tecnica di doppia razionalizzazione attraverso l'opportuno raggruppamento dei termini.

# Solution
Si riporta lo svolgimento completo dell'esercizio con tutti i passaggi matematici dettagliati.

---

### Svolgimento del Quesito 1: Semplificazione ed esistenza di espressioni letterali

**1. Determinazione delle Condizioni di Esistenza (C.E.)**
L'espressione contiene sia radicali ad indice pari (radici quadrate) sia frazioni algebriche. Dobbiamo imporre contemporaneamente la non-negatività degli argomenti delle radici e la non-nullità di tutti i denominatori.

* **Realtà dei radicali**:
  Le radici $\sqrt{a}$, $\sqrt{b}$ e $\sqrt{ab}$ richiedono che gli argomenti siano non negativi:
  $$a \ge 0 \quad \text{e} \quad b \ge 0$$

* **Non-nullità dei denominatori**:
  1. Primo denominatore: $\sqrt{a} - \sqrt{b} \neq 0 \implies \sqrt{a} \neq \sqrt{b} \implies a \neq b$.
  2. Secondo denominatore: $\sqrt{a} + \sqrt{b} \neq 0$. Essendo $a \ge 0$ e $b \ge 0$, questa somma è nulla se e solo se $a = 0$ e $b = 0$. Ma poiché la condizione precedente impone $a \neq b$, l'annullamento simultaneo è già escluso.
  3. Terzo denominatore: $4\sqrt{ab} \neq 0 \implies ab \neq 0 \implies a \neq 0 \quad \text{e} \quad b \neq 0$.

Unendo in modo sinergico tutte le condizioni, otteniamo le seguenti C.E. per l'espressione letterale:
$$\text{C.E.: } a > 0, \quad b > 0, \quad a \neq b$$

**2. Semplificazione dell'espressione $A(a, b)$**
Sviluppiamo per prima cosa l'espressione dentro le parentesi tonde, calcolando il minimo comune multiplo tra i denominatori delle due frazioni:
$$\text{m.c.m.} = \left(\sqrt{a} - \sqrt{b}\right)\left(\sqrt{a} + \dots\right) = \left(\sqrt{a}\right)^2 - \left(\sqrt{b}\right)^2 = a - b$$

Sotto le C.E. trovate, eseguiamo la sottrazione:
$$\frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} - \sqrt{b}} - \frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} + \sqrt{b}} = \frac{\left(\sqrt{a} + \sqrt{b}\right)^2 - \left(\sqrt{a} - \sqrt{b}\right)^2}{\left(\sqrt{a} - \sqrt{b}\right)\left(\sqrt{a} + \sqrt{b}\right)}$$

Sviluppiamo i quadrati di binomio al numeratore (prestando attenzione al segno meno davanti alla seconda parentesi):
$$\left(\sqrt{a} + \sqrt{b}\right)^2 = a + 2\sqrt{ab} + b$$
$$\left(\sqrt{a} - \sqrt{b}\right)^2 = a - 2\sqrt{ab} + b$$

Sostituiamo questi sviluppi nella frazione:
$$\frac{(a + 2\sqrt{ab} + b) - (a - 2\sqrt{ab} + b)}{a - b} = \frac{a + 2\sqrt{ab} + b - a + 2\sqrt{ab} - b}{a - b} = \frac{4\sqrt{ab}}{a - b}$$

Ora che la parentesi tonda è semplificata, possiamo moltiplicare il risultato per il secondo fattore dell'espressione originaria:
$$A(a, b) = \left( \frac{4\sqrt{ab}}{a - b} \right) \cdot \left( \frac{a - b}{4\sqrt{ab}} \right)$$

Notiamo immediatamente che tutti i fattori al numeratore e al denominatore sono identici e si semplificano vicendevolmente a due a due (operazione lecita in virtù delle C.E. precedentemente stabilite):
$$A(a, b) = 1$$

L'espressione, opportunamente semplificata, è costante e assume valore **$1$**.

---

### Svolgimento del Quesito 2: Razionalizzazione avanzata del denominatore

La frazione numerica $B$ è data da:
$$B = \frac{1}{\sqrt{2} + \sqrt{3} + \sqrt{5}}$$

Per eliminare i radicali dal denominatore, procediamo raggruppando i primi due termini irrazionali:
$$B = \frac{1}{\left(\sqrt{2} + \sqrt{3}\right) + \sqrt{5}}$$

**Prima Razionalizzazione**
Moltiplichiamo numeratore e denominatore per il fattore coniugato $\left(\sqrt{2} + \sqrt{3}\right) - \sqrt{5}$:
$$B = \frac{\left(\sqrt{2} + \sqrt{3}\right) - \sqrt{5}}{\left[\left(\sqrt{2} + \sqrt{3}\right) + \sqrt{5}\right] \cdot \left[\left(\sqrt{2} + \sqrt{3}\right) - \sqrt{5}\right]}$$

Il denominatore si presenta ora nella forma di prodotto notevole "somma per differenza" ovvero $(X+Y)(X-Y) = X^2 - Y^2$:
$$\left[\left(\sqrt{2} + \sqrt{3}\right) + \sqrt{5}\right]\left[\left(\sqrt{2} + \sqrt{3}\right) - \sqrt{5}\right] = \left(\sqrt{2} + \sqrt{3}\right)^2 - \left(\sqrt{5}\right)^2$$

Sviluppiamo i quadrati:
$$\left(\sqrt{2} + \sqrt{3}\right)^2 = 2 + 2\sqrt{6} + 3 = 5 + 2\sqrt{6}$$
$$\left(\sqrt{5}\right)^2 = 5$$

Inseriamo questi valori nel denominatore:
$$\left(5 + 2\sqrt{6}\right) - 5 = 2\sqrt{6}$$

La frazione assume ora la forma intermedia:
$$B = \frac{\sqrt{2} + \sqrt{3} - \sqrt{5}}{2\sqrt{6}}$$

**Seconda Razionalizzazione**
Per eliminare l'ultimo radicale quadratico $\sqrt{6}$ rimasto a denominatore, moltiplichiamo numeratore e denominatore per $\sqrt{6}$:
$$B = \frac{\left(\sqrt{2} + \sqrt{3} - \sqrt{5}\right) \cdot \sqrt{6}}{2\sqrt{6} \cdot \sqrt{6}}$$

Sviluppiamo il prodotto a numeratore applicando la proprietà distributiva:
$$\left(\sqrt{2} + \sqrt{3} - \sqrt{5}\right)\sqrt{6} = \sqrt{12} + \sqrt{18} - \sqrt{30}$$

Semplifichiamo i singoli radicali portando fuori dal segno di radice i fattori ove possibile (trasporto fuori radice):
* $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$
* $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt{2}$
* $\sqrt{30}$ non è ulteriormente semplificabile poiché $30 = 2 \cdot 3 \cdot 5$ non contiene divisori quadratici perfetti.

Sviluppiamo il prodotto a denominatore:
$$2\sqrt{6} \cdot \sqrt{6} = 2 \cdot 6 = 12$$

Ricostruiamo la frazione finale:
$$B = \frac{3\sqrt{2} + 2\sqrt{3} - \sqrt{30}}{12}$$

La frazione razionalizzata e ridotta ai minimi termini è:
$$B = \frac{3\sqrt{2} + 2\sqrt{3} - \sqrt{30}}{12}$$
