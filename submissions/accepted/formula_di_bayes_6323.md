---
year: 4
macro_area: "Calcolo delle probabilit\u00e0"
topic: "Formula di Bayes"
difficulty: 2
ai_generated: true
tags:
  - "Probabilit\u00e0 condizionata"
  - "Teorema di Bayes"
  - "Probabilit\u00e0 totale"
  - "Partizione dello spazio campionario"
---
# Problem Text
Un'azienda produce componenti elettronici utilizzando due macchine, $A$ e $B$. La macchina $A$ produce il $60\%$ della produzione totale, mentre la macchina $B$ produce il restante $40\%$. Si sa che il $2\%$ dei pezzi prodotti da $A$ è difettoso, mentre per la macchina $B$ la percentuale di pezzi difettosi è del $5\%$. Calcolare la probabilità che un componente, scelto a caso e risultato difettoso, sia stato prodotto dalla macchina $A$.

# Solution
**Modello probabilistico**
Definiamo lo spazio campionario $\Omega$ e i seguenti eventi:
- $A$: «il componente è prodotto dalla macchina $A$»
- $B$: «il componente è prodotto dalla macchina $B$»
- $D$: «il componente è difettoso»

Gli eventi $A$ e $B$ costituiscono una partizione dello spazio campionario $\Omega$, ovvero $A \cap B = \emptyset$ e $A \cup B = \Omega$.

**Passo 1: Espressione formale dei dati**
Traduciamo i dati del testo nella notazione formale delle probabilità:

$$
P(A) = 0{,}60, \quad P(B) = 0{,}40
$$

$$
P(D|A) = 0{,}02, \quad P(D|B) = 0{,}05
$$

**Passo 2: Calcolo della probabilità totale dell'evento $D$**
Per il teorema della probabilità totale, la probabilità che un componente scelto a caso sia difettoso è:

$$
P(D) = P(A) \cdot P(D|A) + P(B) \cdot P(D|B)
$$

Sostituendo i valori:

$$
P(D) = 0{,}60 \cdot 0{,}02 + 0{,}40 \cdot 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032
$$

**Passo 3: Applicazione della formula di Bayes**
La probabilità richiesta è la probabilità condizionata $P(A|D)$. Utilizzando il teorema di Bayes:

$$
P(A|D) = \frac{P(A) \cdot P(D|A)}{P(D)}
$$

**Passo 4: Calcolo del risultato finale**
Sostituendo i valori trovati nei passaggi precedenti:

$$
P(A|D) = \frac{0{,}012}{0{,}032} = \frac{3}{8} = 0{,}375
$$

La probabilità che il componente difettoso provenga dalla macchina $A$ è pari al $37{,}5\%$.
