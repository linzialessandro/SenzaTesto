---
year: 2
macro_area: "Analisi"
topic: "Funzioni"
difficulty: 2
tags:
  - "diagrammi di eulero-venn"
  - "scelta multipla"
  - "iniettività"
  - "suriettività"
  - "biettività"
---
# Problem Text
Osserva i seguenti quattro diagrammi a frecce che rappresentano relazioni tra due insiemi $$A$$ e $$B$$. Per ciascuna relazione, scegli l'opzione corretta e motiva la risposta.

**(a)** Dal punto $$1 \in A$$ partono due frecce (verso $$2$$ e $$6$$ in $$B$$). Dal punto $$2 \in A$$ parte una freccia verso $$4 \in B$$.
- [ ] La relazione è una funzione iniettiva.
- [ ] La relazione non è una funzione.
- [ ] La relazione è una funzione biettiva.

**(b)** Dal punto $$\mathcal{U} \in A$$ e dal punto $$\mathcal{V} \in A$$ partono frecce che terminano entrambe nell'unico elemento $$1 \in B$$.
- [ ] La relazione è una funzione suriettiva.
- [ ] La relazione non è una funzione.
- [ ] La relazione è una funzione biettiva.

**(c)** Da $$a \in A$$ parte una freccia verso $$1 \in B$$, da $$b \in A$$ verso $$2 \in B$$. L'elemento $$3 \in B$$ rimane senza frecce.
- [ ] La relazione è una funzione iniettiva.
- [ ] La relazione è una funzione suriettiva.
- [ ] La relazione è una funzione biettiva.

**(d)** Da $$\bullet \in A$$ parte una freccia verso $$\otimes \in B$$, da $$\star \in A$$ parte una freccia verso $$\times \in B$$. Ogni elemento di $$B$$ riceve esattamente una freccia.
- [ ] La relazione è una funzione iniettiva.
- [ ] La relazione è una funzione suriettiva.
- [ ] La relazione è una funzione biettiva.

# Solution
**(a)** Risposta corretta: **La relazione non è una funzione.**
Poiché dall'elemento $$1$$ del dominio partono due frecce diverse (verso $$2$$ e verso $$6$$), non è soddisfatta la regola per cui ad ogni elemento del dominio debba corrispondere un *solo* elemento del codominio.

**(b)** Risposta corretta: **La relazione è una funzione suriettiva.**
È una funzione perché da ogni elemento del dominio ($$\mathcal{U}$$ e $$\mathcal{V}$$) parte esattamente una freccia. Poiché l'intero insieme di arrivo $$B$$ è costituito dal solo elemento $$1$$, e questo riceve frecce, l'immagine coincide con il codominio: quindi è suriettiva. Non è iniettiva perché l'elemento $$1$$ riceve più di una freccia.

**(c)** Risposta corretta: **La relazione è una funzione iniettiva.**
Tutti gli elementi di $$A$$ hanno un'unica immagine. Elementi distinti di $$A$$ puntano a elementi distinti di $$B$$, perciò è iniettiva. Non è suriettiva perché l'elemento $$3$$ in $$B$$ non è immagine di alcun elemento di $$A$$.

**(d)** Risposta corretta: **La relazione è una funzione biettiva.**
C'è una corrispondenza perfetta 1-a-1: ogni elemento del dominio punta a un elemento distinto (iniettiva) e tutti gli elementi del codominio sono raggiunti da una freccia (suriettiva). Essendo sia iniettiva che suriettiva, la funzione è biettiva. (Nota: anche l'opzione "iniettiva" e "suriettiva" sarebbero tecnicamente vere se intese singolarmente, ma "biettiva" è la risposta più completa e corretta nel contesto dei test a scelta multipla).
