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

- **(a)** Una curva a forma di $$S$$ verticale distesa (tipo cubica, es. $$y = x^3$$), che si estende da $$-\infty$$ a $$+\infty$$ su entrambi gli assi.
- **(b)** Un'ellisse centrata nell'origine.
- **(c)** Una parabola con la concavità verso l'alto e vertice sotto l'asse delle ascisse.
- **(d)** Una curva che parte dall'origine e cresce curvando verso destra (tipo radice quadrata, es. $$y = \sqrt{x}$$), non definita per valori negativi della $$x$$.

Se le funzioni descritte fossero invece definite con codominio reale positivo o nullo (cioè $$g: \mathbb{R} \to \mathbb{R}^+$$), la descrizione delle quattro curve cambierebbe? In che modo?

# Solution
**Analisi come funzioni $$f: \mathbb{R} \to \mathbb{R}$$**
- **(a) Cubica**: È una **funzione biettiva**. Ad ogni $$x \in \mathbb{R}$$ corrisponde un unico $$y$$ (funzione ben definita su tutto $$\mathbb{R}$$). È iniettiva perché linee orizzontali intersecano il grafico sempre e solo in un punto (ad ascisse diverse corrispondono ordinate diverse). È suriettiva perché l'immagine copre per intero l'asse delle ordinate (da $$-\infty$$ a $$+\infty$$).
- **(b) Ellisse**: **Non è una funzione**. Qualsiasi linea verticale (entro l'estensione dell'ellisse) interseca la curva in due punti distinti, associando due valori di $$y$$ alla stessa $$x$$. (Inoltre non è definita per le $$x$$ esterne alla figura).
- **(c) Parabola**: È una **funzione, ma non è né iniettiva né suriettiva**. È una funzione perché ad ogni $$x$$ corrisponde un solo $$y$$. Non è iniettiva perché esistono punti con la stessa $$y$$ per $$x$$ diverse (le rette orizzontali tagliano la parabola in due punti). Non è suriettiva perché il grafico presenta un limite inferiore (il vertice), quindi non raggiunge valori negativi di $$y$$ al di sotto di esso.
- **(d) Radice**: **Non è una funzione da $$\mathbb{R}$$ a $$\mathbb{R}$$**. Infatti, per $$x < 0$$, il grafico non esiste. Una funzione con dominio $$\mathbb{R}$$ deve per definizione associare un valore a *tutti* i numeri reali.

**Analisi con codominio $$g: \mathbb{R} \to \mathbb{R}^+$$** (Reali positivi o nulli)
- **(a)** Non sarebbe una funzione valida da $$\mathbb{R}$$ a $$\mathbb{R}^+$$, perché per le $$x$$ negative, la curva assume valori negativi di $$y$$, che cadrebbero al di fuori del codominio richiesto.
- **(b)** L'ellisse continua a non essere una funzione.
- **(c)** La parabola assumendo valori negativi in prossimità del vertice (sotto l'asse $$x$$) non può avere come codominio strettamente $$\mathbb{R}^+$$, a meno di restringere la relazione solo alle parti in cui la funzione è positiva, ma così non sarebbe definita su tutto il dominio $$\mathbb{R}$$.
- **(d)** Ancora non valida: il problema del dominio (non copre le $$x$$ negative) rimarrebbe invariato.
