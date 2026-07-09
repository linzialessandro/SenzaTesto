---
year: 2
macro_area: "Analisi"
topic: "Funzioni"
difficulty: 2
tags:
  - "diagrammi di eulero-venn"
  - "iniettività"
  - "suriettività"
  - "biettività"
---
# Problem Text
Considera quattro relazioni tra due insiemi $$C$$ (partenza) e $$D$$ (arrivo), rappresentate tramite diagrammi a frecce:

- **(a)** Dal punto $$1 \in C$$ partono due frecce (verso $$2$$ e $$6$$ in $$D$$). Dal punto $$2 \in C$$ parte una freccia verso $$4 \in D$$.
- **(b)** Dal punto $$a \in C$$ parte una freccia verso $$1 \in D$$. Dal punto $$b \in C$$ parte una freccia verso $$2 \in D$$. L'elemento $$3 \in D$$ non riceve frecce.
- **(c)** Dal punto $$\mathcal{U} \in C$$ parte una freccia verso $$1 \in D$$. Dal punto $$\mathcal{V} \in C$$ parte una freccia sempre verso $$1 \in D$$. L'elemento $$2 \in D$$ non riceve frecce.
- **(d)** Dal punto $$\bullet \in C$$ parte una freccia verso $$\otimes \in D$$. Dal punto $$\star \in C$$ parte una freccia verso $$\times \in D$$. Tutti gli elementi di $$D$$ ricevono esattamente una freccia.

Per ciascuna relazione stabilisci se è una funzione. Se la risposta è affermativa, indica se tale funzione è iniettiva, suriettiva o biettiva. Motiva la risposta.

# Solution
- **(a)** **Non è una funzione.** Per definizione, una funzione deve associare a ogni elemento del dominio un *unico* elemento del codominio. Poiché dall'elemento $$1$$ partono due frecce, esso ha due immagini distinte, violando la definizione stessa di funzione.
- **(b)** **È una funzione iniettiva (ma non suriettiva).** È una funzione perché da ogni elemento di $$C$$ parte una e una sola freccia. È iniettiva perché elementi distinti del dominio puntano a elementi distinti del codominio (nessun elemento di $$D$$ riceve più di una freccia). Non è suriettiva perché esiste almeno un elemento in $$D$$ (il $$3$$) che non è "colpito" da nessuna freccia.
- **(c)** **È una funzione, ma né iniettiva né suriettiva.** È una funzione per lo stesso motivo del caso precedente. Non è iniettiva perché due elementi distinti di $$C$$ ($$\mathcal{U}$$ e $$\mathcal{V}$$) hanno la stessa immagine ($$1 \in D$$, che riceve due frecce). Non è suriettiva perché l'elemento $$2 \in D$$ non è raggiunto da alcuna freccia.
- **(d)** **È una funzione biettiva.** È una funzione iniettiva (ogni elemento di $$D$$ riceve al massimo una freccia) ed è anche suriettiva (tutti gli elementi di $$D$$ ricevono almeno una freccia). Poiché è sia iniettiva che suriettiva, viene definita biettiva (o biunivoca). Vi è una corrispondenza perfetta uno a uno tra gli elementi di $$C$$ e di $$D$$.
