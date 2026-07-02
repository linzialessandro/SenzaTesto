---
year: 4
macro_area: Calcolo Combinatorio
topic: Combinazioni e Probabilità
difficulty: 3
tags:
  - combinatorio
  - probabilità
  - urne
---
# Problem Text

Un'urna contiene 12 palline: 5 rosse, 4 verdi e 3 blu. 
Estraendo contemporaneamente 3 palline dall'urna, qual è la probabilità che siano tutte e tre di colore diverso?

# Solution

**1. Calcolo dei casi possibili (spazio campionario):**
Poiché le palline vengono estratte contemporaneamente, l'ordine di estrazione non conta. Dobbiamo calcolare il numero di combinazioni semplici di 12 elementi (il totale delle palline) presi a gruppi di 3.
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$
$$
C_{12,3} = \binom{12}{3} = \frac{12!}{3!(12-3)!} = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = \frac{1320}{6} = 220
$$
Ci sono 220 modi possibili per estrarre 3 palline.

**2. Calcolo dei casi favorevoli:**
L'evento favorevole consiste nell'estrarre esattamente:
- 1 pallina rossa (su 5 disponibili)
- 1 pallina verde (su 4 disponibili)
- 1 pallina blu (su 3 disponibili)

Per determinare il numero di modi in cui questo può avvenire, moltiplichiamo le combinazioni di ciascun colore (Principio fondamentale del calcolo combinatorio):
$$
\binom{5}{1} \cdot \binom{4}{1} \cdot \binom{3}{1} = 5 \cdot 4 \cdot 3 = 60
$$
Ci sono 60 triplette di colori diversi che si possono formare.

**3. Calcolo della probabilità:**
Secondo la definizione classica, la probabilità $P$ di un evento è il rapporto tra casi favorevoli e casi possibili:
$$
P = \frac{	ext{Casi favorevoli}}{	ext{Casi possibili}} = \frac{60}{220}
$$
Semplificando la frazione:
$$
P = \frac{6}{22} = \frac{3}{11}
$$

**Soluzione:** La probabilità di estrarre tre palline di colore diverso è $\frac{3}{11}$ (circa $27,27\%$).
