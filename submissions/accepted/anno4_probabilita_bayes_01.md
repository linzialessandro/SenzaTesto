---
year: 4
macro_area: Probabilità (avanzata)
topic: Teorema di Bayes
difficulty: 4
tags:
  - probabilità condizionata
  - bayes
  - probabilità totale
---
# Problem Text

In un'azienda, tre macchinari $M_1, M_2, M_3$ producono rispettivamente il 20%, il 30% e il 50% dell'intera produzione. 
La percentuale di pezzi difettosi prodotti dai tre macchinari è rispettivamente del 5%, 4% e 2%. 
Estraendo un pezzo a caso dalla produzione totale, si constata che è difettoso. Qual è la probabilità che sia stato prodotto dal macchinario $M_2$?

# Solution

Siano gli eventi:
- $M_1, M_2, M_3$: il pezzo è prodotto dal rispettivo macchinario.
- $D$: il pezzo estratto è difettoso.

**1. Formalizziamo i dati del problema:**
Probabilità a priori:
$P(M_1) = 0,20$
$P(M_2) = 0,30$
$P(M_3) = 0,50$

Probabilità condizionate (difettoso sapendo il macchinario):
$P(D | M_1) = 0,05$
$P(D | M_2) = 0,04$
$P(D | M_3) = 0,02$

Vogliamo calcolare la probabilità a posteriori $P(M_2 | D)$.

**2. Calcolo della Probabilità Totale di D:**
Utilizziamo la legge della probabilità totale per trovare la probabilità che un pezzo sia difettoso in generale:
$$
P(D) = P(D | M_1)P(M_1) + P(D | M_2)P(M_2) + P(D | M_3)P(M_3)
$$
Sostituendo i valori numerici:
$$
P(D) = (0,05 \cdot 0,20) + (0,04 \cdot 0,30) + (0,02 \cdot 0,50)
$$
$$
P(D) = 0,010 + 0,012 + 0,010 = 0,032
$$
Quindi, il 3,2% dei pezzi totali è difettoso.

**3. Applicazione del Teorema di Bayes:**
Il teorema di Bayes ci fornisce la formula per aggiornare la probabilità:
$$
P(M_2 | D) = \frac{P(D | M_2)P(M_2)}{P(D)}
$$
Sostituiamo i valori trovati:
$$
P(M_2 | D) = \frac{0,04 \cdot 0,30}{0,032} = \frac{0,012}{0,032}
$$
Moltiplicando numeratore e denominatore per 1000:
$$
P(M_2 | D) = \frac{12}{32}
$$
Semplificando la frazione dividendo per 4:
$$
P(M_2 | D) = \frac{3}{8} = 0,375
$$

**Soluzione:** La probabilità che il pezzo difettoso provenga dal macchinario $M_2$ è del $37,5\%$, ovvero $\frac{3}{8}$.
