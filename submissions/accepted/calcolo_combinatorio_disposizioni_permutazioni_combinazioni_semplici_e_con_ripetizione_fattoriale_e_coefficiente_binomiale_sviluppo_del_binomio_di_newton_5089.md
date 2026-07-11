---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Calcolo Combinatorio: Disposizioni, permutazioni, combinazioni (semplici e con ripetizione). Fattoriale e coefficiente binomiale, sviluppo del binomio di Newton."
difficulty: 1
ai_generated: true
tags:
  - "calcolo combinatorio"
  - "combinazioni semplici"
  - "coefficiente binomiale"
---
# Problem Text
In un gruppo di 8 studenti, in quanti modi diversi è possibile scegliere una delegazione formata da 3 persone?

# Solution
1. **Identificazione del modello combinatorio**: Poiché l'ordine in cui vengono scelti gli studenti non rileva ai fini della composizione della delegazione (la delegazione composta dagli studenti A, B, C è identica a quella composta da B, A, C) e non si possono avere ripetizioni dello stesso studente, si tratta di un problema di combinazioni semplici.

2. **Formula generale**: Le combinazioni semplici di $n$ elementi distinti di classe $k$ (con $k \le n$) si calcolano tramite il coefficiente binomiale:

$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

3. **Inserimento dei dati**: Nel nostro caso, il numero totale di elementi è $n = 8$ e la classe è $k = 3$. Sostituendo questi valori nella formula otteniamo:

$$
\binom{8}{3} = \frac{8!}{3!(8-3)!} = \frac{8!}{3! \cdot 5!}
$$

4. **Semplificazione dei fattoriali**: Sviluppiamo il fattoriale al numeratore per semplificarlo con il $5!$ presente al denominatore:

$$
\frac{8 \cdot 7 \cdot 6 \cdot 5!}{3 \cdot 2 \cdot 1 \cdot 5!} = \frac{8 \cdot 7 \cdot 6}{6}
$$

5. **Calcolo finale**: Eseguiamo la semplificazione dividendo numeratore e denominatore per $6$:

$$
8 \cdot 7 = 56
$$

Pertanto, vi sono 56 modi diversi per scegliere la delegazione.
