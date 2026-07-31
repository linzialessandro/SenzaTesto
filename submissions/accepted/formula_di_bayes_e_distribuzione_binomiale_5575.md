---
year: 4
macro_area: "Probabilit\u00e0"
topic: "Formula di Bayes e Distribuzione Binomiale"
difficulty: 4
ai_generated: true
tags:
  - "Probabilit\u00e0 condizionata"
  - "Formula di Bayes"
  - "Distribuzione binomiale"
  - "Probabilit\u00e0 totale"
---
# Problem Text
Un'urna $A$ contiene $4$ palline bianche e $2$ nere; un'urna $B$ contiene $2$ palline bianche e $4$ nere. Viene scelta a caso un'urna con uguale probabilità e da essa si effettuano $4$ estrazioni con reinserimento. Sapendo che nelle prime $4$ estrazioni sono state ottenute esattamente $3$ palline bianche, calcola la probabilità che, effettuando una $5^\text{a}$ estrazione dalla medesima urna, si ottenga una pallina bianca.

# Solution
Dichiariamo i modelli stocastici ed i relativi eventi:
- Scelta dell'urna: eventi $A$ ("scelta dell'urna A") e $B$ ("scelta dell'urna B"), con probabilità a priori $P(A) = P(B) = \frac{1}{2}$.
- Probabilità di successo (estrazione di una pallina bianca) in una singola prova:

$$
p_A = P(\text{Bianca} \mid A) = \frac{4}{6} = \frac{2}{3}, \quad p_B = P(\text{Bianca} \mid B) = \frac{2}{6} = \frac{1}{3}
$$

- La variabile aleatoria $X$, che modella il numero di palline bianche estratte in $n = 4$ prove indipendenti con reinserimento, segue una **distribuzione binomiale** $X \sim B(4, p)$.

Calcoliamo le verosimiglianze dell'evento osservato $K = \{X = 3\}$ condizionate alle due urne:

$$
P(K \mid A) = \binom{4}{3} \left(\frac{2}{3}\right)^3 \left(\frac{1}{3}\right)^1 = 4 \cdot \frac{8}{27} \cdot \frac{1}{3} = \frac{32}{81}
$$

$$
P(K \mid B) = \binom{4}{3} \left(\frac{1}{3}\right)^3 \left(\frac{2}{3}\right)^1 = 4 \cdot \frac{1}{27} \cdot \frac{2}{3} = \frac{8}{81}
$$

Applicando la **formula di Bayes**, calcoliamo la probabilità a posteriori che l'urna selezionata sia la $A$:

$$
P(A \mid K) = \frac{P(A) \cdot P(K \mid A)}{P(A) \cdot P(K \mid A) + P(B) \cdot P(K \mid B)}
$$

$$
P(A \mid K) = \frac{\frac{1}{2} \cdot \frac{32}{81}}{\frac{1}{2} \cdot \frac{32}{81} + \frac{1}{2} \cdot \frac{8}{81}} = \frac{32}{32 + 8} = \frac{32}{40} = \frac{4}{5}
$$

Di conseguenza, $P(B \mid K) = 1 - P(A \mid K) = \frac{1}{5}$.

Sia $W_5$ l'evento "$5^\text{a}$ estrazione bianca". Applicando la **formula della probabilità totale** condizionata a $K$:

$$
P(W_5 \mid K) = P(W_5 \mid A) \cdot P(A \mid K) + P(W_5 \mid B) \cdot P(B \mid K)
$$

$$
P(W_5 \mid K) = \frac{2}{3} \cdot \frac{4}{5} + \frac{1}{3} \cdot \frac{1}{5} = \frac{8}{15} + \frac{1}{15} = \frac{9}{15} = \frac{3}{5}
$$

La probabilità cercata è $\frac{3}{5}$ (pari al $60\%$).
