---
year: 4
macro_area: "Calcolo Combinatorio e Probabilit\u00e0"
topic: "Combinazioni semplici"
difficulty: 2
ai_generated: true
tags:
  - "calcolo combinatorio"
  - "combinazioni semplici"
  - "coefficiente binomiale"
  - "fattoriale"
---
# Problem Text
In una classe di 18 studenti si desidera costituire una commissione paritetica composta da 5 rappresentanti per coordinare un'attività scolastica. Determina in quanti modi diversi è possibile formare tale commissione, identificando e dichiarando il modello combinatorio applicato prima di procedere al calcolo numerico.

# Solution
1. **Dichiarazione del Modello Combinatorio**:
Dobbiamo selezionare un sottoinsieme di $k = 5$ studenti a partire da un insieme di $n = 18$ studenti distinti.
Poiché la commissione è paritetica, l'ordine con cui i membri vengono scelti non ha alcuna importanza (ad esempio, l'insieme di persone $\{A, B, C, D, E\}$ è identico a $\{B, A, C, E, D\}$). Inoltre, non sono ammesse ripetizioni dello stesso studente all'interno della stessa commissione.
Pertanto, il modello combinatorio di riferimento è quello delle **combinazioni semplici** di $n$ elementi di classe $k$.

2. **Formulazione Matematica**:
Il numero totale di combinazioni semplici di $n$ elementi di classe $k$ è dato dal coefficiente binomiale:

$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

3. **Sostituzione dei Valori**:
Nel nostro problema, poniamo $n = 18$ e $k = 5$:

$$
C_{18,5} = \binom{18}{5} = \frac{18!}{5!(18-5)!} = \frac{18!}{5! \cdot 13!}
$$

4. **Semplificazione dei Fattoriali**:
Esprimiamo il fattoriale al numeratore in modo da semplificare il termine $13!$:

$$
18! = 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14 \cdot 13!
$$

Sostituendo e semplificando $13!$ al numeratore e al denominatore otteniamo:

$$
\binom{18}{5} = \frac{18 \cdot 17 \cdot 16 \cdot 15 \cdot 14}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}
$$

5. **Semplificazione Algebrica dei Fattori**:
Semplifichiamo i singoli fattori prima di eseguire il calcolo per ridurre la complessità aritmetica:
- Al denominatore, il prodotto $5 \cdot 3 = 15$ si cancella interamente con il fattore $15$ del numeratore.
- Il prodotto $4 \cdot 2 = 8$ si semplifica con il fattore $16$ del numeratore, lasciando un fattore $2$.
L'espressione semplificata diventa:

$$
\binom{18}{5} = 18 \cdot 17 \cdot 2 \cdot 14
$$

6. **Calcolo Finale**:
Svolgiamo la moltiplicazione in due passaggi successivi:

$$
18 \cdot 2 = 36
$$

$$
17 \cdot 14 = 238
$$

$$
36 \cdot 238 = 8568
$$

La commissione paritetica può essere formata in $8568$ modi diversi.
