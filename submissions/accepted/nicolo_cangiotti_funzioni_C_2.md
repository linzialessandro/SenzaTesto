---
year: 2
macro_area: "Analisi"
topic: "Funzioni"
difficulty: 2
tags:
  - "riconoscimento grafico"
  - "proprietà delle funzioni"
  - "dominio e codominio"
---
# Problem Text
Osserva le quattro seguenti curve rappresentate in un piano cartesiano. Stabilisci, per ciascuna, se essa rappresenta una funzione del tipo $$f: \mathbb{R} \to \mathbb{R}$$. In caso affermativo, indica se tale funzione è iniettiva, suriettiva o biettiva. Motiva la risposta.

- **(a)** Un'ellisse (con asse maggiore verticale) centrata nell'origine.
- **(b)** Una parabola con concavità verso l'alto (es. $$y = (x+1)^2 - 0.5$$), il cui asse di simmetria è spostato a sinistra dell'asse $$y$$.
- **(c)** Una semiretta che parte dall'origine e sale verso destra (es. $$y = x$$ per $$x \ge 0$$), non definita per valori negativi della $$x$$.
- **(d)** Una curva a forma di $$S$$ verticale (tipo cubica, es. $$y = \frac{1}{2}x^3 - 0.5$$), traslata verso il basso rispetto all'origine.

Se le funzioni descritte fossero invece definite con codominio reale positivo o nullo (cioè $$g: \mathbb{R} \to \mathbb{R}^+$$), la descrizione delle quattro curve cambierebbe? In che modo?

# Solution
**Analisi come funzioni $$f: \mathbb{R} \to \mathbb{R}$$**
- **(a) Ellisse**: **Non è una funzione**. Qualsiasi linea verticale (passante internamente all'ellisse) la interseca in due punti distinti, associando due valori di $$y$$ alla stessa $$x$$.
- **(b) Parabola**: È una **funzione, ma non è né iniettiva né suriettiva**. È una funzione perché ad ogni $$x$$ corrisponde un solo $$y$$. Non è iniettiva perché una linea orizzontale può intersecare la parabola in due punti (le ascisse simmetriche rispetto all'asse della parabola hanno la stessa ordinata). Non è suriettiva perché limitata inferiormente dal vertice (non copre i numeri reali al di sotto di esso).
- **(c) Semiretta per $$x \ge 0$$**: **Non è una funzione da $$\mathbb{R}$$ a $$\mathbb{R}$$**. Infatti il dominio non corrisponde all'intero insieme dei numeri reali $$\mathbb{R}$$, poiché non è definita per le $$x$$ negative.
- **(d) Cubica**: È una **funzione biettiva**. Ad ogni $$x \in \mathbb{R}$$ corrisponde un unico $$y$$. È iniettiva perché linee orizzontali intersecano il grafico in uno e un solo punto. È suriettiva perché l'immagine copre per intero l'asse delle ordinate (la curva diverge a $$+\infty$$ e a $$-\infty$$).

**Analisi con codominio $$g: \mathbb{R} \to \mathbb{R}^+$$** (Reali positivi o nulli)
- **(a)** L'ellisse continua a non essere una funzione.
- **(b)** La parabola, scendendo sotto l'asse $$x$$ in prossimità del vertice, assume valori negativi di $$y$$. Poiché questi valori non appartengono a $$\mathbb{R}^+$$, la relazione non può avere $$\mathbb{R}^+$$ come codominio, a meno di non restringerne il dominio, il che violerebbe l'assunto di partenza ($$g: \mathbb{R} \dots$$).
- **(c)** Anche se l'immagine della semiretta ($$y \ge 0$$) si adatterebbe perfettamente a $$\mathbb{R}^+$$, la relazione rimane invalida perché continua a non coprire l'intero dominio $$\mathbb{R}$$ (mancano le $$x$$ negative).
- **(d)** La cubica traslata non andrebbe bene verso $$\mathbb{R}^+$$, poiché per tutti i valori di $$x$$ inferiori a un certo punto (l'intersezione con l'asse $$x$$), essa assume valori negativi, finendo fuori dal codominio prescritto.
