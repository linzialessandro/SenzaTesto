---
year: 5
macro_area: "Probabilit\u00e0"
topic: "Formula di Bayes"
difficulty: 2
tags:
  - "Probabilit\u00e0 avanzata"
  - "Formula di Bayes"
  - "Probabilit\u00e0 condizionata"
---
# Problem Text
Un test diagnostico per una malattia ha una sensibilità del $95\%$ (probabilità che il test sia positivo se il soggetto è malato) e una specificità del $90\%$ (probabilità che il test sia negativo se il soggetto è sano). Sapendo che il $2\%$ della popolazione è affetto da questa malattia, calcola la probabilità che un individuo scelto a caso sia effettivamente malato sapendo che il suo test è risultato positivo.

# Solution
**Passo 1: Definizione degli eventi e probabilità a priori**
Definiamo gli eventi del problema con le relative probabilità:
- $M$: l'individuo è malato, con $P(M) = 2\% = 0{,}02$.
- $S$: l'individuo è sano, con $P(S) = 1 - P(M) = 0{,}98$.
- $T^+$: il test risulta positivo.

**Passo 2: Determinazione delle probabilità condizionate**
Dai dati sulla sensibilità e specificità del test ricaviamo:
- Sensibilità: $P(T^+ \mid M) = 95\% = 0{,}95$.
- Specificità: $P(T^- \mid S) = 90\% = 0{,}90$.
- Falso positivo (test positivo su soggetto sano): $P(T^+ \mid S) = 1 - P(T^- \mid S) = 1 - 0{,}90 = 0{,}10$.

**Passo 3: Calcolo della probabilità totale del test positivo**
Utilizzando il teorema della probabilità totale, calcoliamo la probabilità complessiva che un test sia positivo:

$$
P(T^+) = P(T^+ \mid M) \cdot P(M) + P(T^+ \mid S) \cdot P(S)
$$

$$
P(T^+) = 0{,}95 \cdot 0{,}02 + 0{,}10 \cdot 0{,}98 = 0{,}019 + 0{,}098 = 0{,}117
$$

**Passo 4: Applicazione della formula di Bayes**
Calcoliamo infine la probabilità condizionata che l'individuo sia malato sapendo che il test è positivo:

$$
P(M \mid T^+) = \frac{P(T^+ \mid M) \cdot P(M)}{P(T^+)}
$$

$$
P(M \mid T^+) = \frac{0{,}019}{0{,}117} \approx 0{,}1624
$$

La probabilità che un individuo con test positivo sia effettivamente malato è circa del $16{,}24\%$.
