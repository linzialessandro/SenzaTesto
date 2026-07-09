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

- **(a)** Una curva che decresce da sinistra verso destra passando per l'origine (tipo cubica invertita, es. $$y = -x^3$$), definita su tutto l'asse reale.
- **(b)** Una circonferenza traslata verso destra rispetto all'asse $$y$$.
- **(c)** Una parabola con la concavità verso il basso e vertice sopra l'asse delle ascisse.
- **(d)** Una curva che parte dall'origine e decresce curvando verso destra, scendendo nel quarto quadrante (es. $$y = -\sqrt{x}$$), non definita per $$x < 0$$.

Se le funzioni descritte fossero invece definite con codominio reale positivo o nullo (cioè $$g: \mathbb{R} \to \mathbb{R}^+$$), la descrizione delle quattro curve cambierebbe? In che modo?

# Solution
**Analisi come funzioni $$f: \mathbb{R} \to \mathbb{R}$$**
- **(a) Cubica inversa**: È una **funzione biettiva**. Ad ogni $$x \in \mathbb{R}$$ corrisponde un unico $$y$$. È iniettiva perché linee orizzontali intersecano il grafico in un solo punto. È suriettiva perché l'immagine copre per intero l'asse delle ordinate (da $$+\infty$$ a $$-\infty$$).
- **(b) Circonferenza**: **Non è una funzione**. Qualsiasi linea verticale all'interno della sua proiezione sull'asse $$x$$ interseca la curva in due punti distinti, violando la definizione di funzione (una $$x$$ non può avere due $$y$$).
- **(c) Parabola verso il basso**: È una **funzione, ma non è né iniettiva né suriettiva**. Non è iniettiva perché ad ascisse diverse possono corrispondere ordinate uguali (intersezione doppia con rette orizzontali). Non è suriettiva perché limitata superiormente dal suo vertice, per cui non copre i valori di $$y$$ positivi sopra di esso.
- **(d) Radice capovolta**: **Non è una funzione da $$\mathbb{R}$$ a $$\mathbb{R}$$**. La curva non esiste per le $$x$$ negative, dunque non è definita su tutto il dominio $$\mathbb{R}$$.

**Analisi con codominio $$g: \mathbb{R} \to \mathbb{R}^+$$** (Reali positivi o nulli)
- **(a)** Non sarebbe una funzione valida verso $$\mathbb{R}^+$$, perché per le $$x > 0$$, la curva assume valori negativi di $$y$$ (scende nel quarto quadrante), finendo fuori dal codominio consentito.
- **(b)** Continua a non essere una funzione.
- **(c)** Non assumendo solo valori positivi (i suoi rami divergono a $$-\infty$$), non può avere come codominio strettamente $$\mathbb{R}^+$$, se definita su tutto $$\mathbb{R}$$.
- **(d)** Ancora non valida per due motivi: non copre il dominio ($$x < 0$$) e inoltre produce ordinate negative (verso il basso), non rientranti in $$\mathbb{R}^+$$.
