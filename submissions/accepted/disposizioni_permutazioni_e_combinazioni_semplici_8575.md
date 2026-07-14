---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Disposizioni, permutazioni e combinazioni semplici"
difficulty: 2
ai_generated: true
tags:
  - "Calcolo combinatorio"
  - "Combinazioni semplici"
  - "Coefficiente binomiale"
  - "Fattoriale"
---
# Problem Text
Dichiarando preliminarmente il modello combinatorio adottato, determina in quanti modi diversi è possibile scegliere un comitato di $4$ rappresentanti all'interno di un gruppo di $12$ studenti.

# Solution
1. **Analisi del problema e scelta del modello**: Dobbiamo selezionare un sottoinsieme di $k = 4$ membri a partire da un insieme di $n = 12$ studenti distinti. Poiché l'ordine di scelta dei membri all'interno del comitato non è rilevante e non sono ammesse ripetizioni (uno studente non può essere scelto più volte), il modello combinatorio di riferimento è quello delle **combinazioni semplici** di $12$ elementi di classe $4$.

2. **Formula matematica**: Il numero di combinazioni semplici $C_{n,k}$ è espresso tramite il coefficiente binomiale:

$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

3. **Sostituzione dei dati**: Sostituendo $n = 12$ e $k = 4$, si ottiene:

$$
\binom{12}{4} = \frac{12!}{4!(12-4)!} = \frac{12!}{4! \cdot 8!}
$$

4. **Sviluppo dei fattoriali**: Esplicitiamo il numeratore per semplificare il termine $8!$:

$$
\frac{12 \cdot 11 \cdot 10 \cdot 9 \cdot 8!}{4! \cdot 8!} = \frac{12 \cdot 11 \cdot 10 \cdot 9}{4 \cdot 3 \cdot 2 \cdot 1}
$$

5. **Semplificazione numerica**: Semplificando i fattori comuni a numeratore e denominatore (essendo $4 \cdot 3 = 12$ e $\frac{10}{2} = 5$):

$$
11 \cdot 5 \cdot 9 = 495
$$

6. **Risultato finale**: Pertanto, vi sono esattamente $495$ modi diversi per formare il comitato scientifico.
