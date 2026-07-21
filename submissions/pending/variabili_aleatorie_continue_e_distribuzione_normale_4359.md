---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue e distribuzione Normale"
difficulty: 2
ai_generated: true
tags:
  - "variabili aleatorie"
  - "distribuzione normale"
  - "standardizzazione"
  - "gaussiana"
---
# Problem Text
Sia $X$ una variabile aleatoria continua avente distribuzione normale con media $\mu = 50$ e deviazione standard $\sigma = 10$, ovvero $X \sim \mathcal{N}(50, 10^2)$.

Determinare la probabilità $P(35 \le X \le 65)$, sapendo che per la variabile aleatoria gaussiana standardizzata $Z \sim \mathcal{N}(0, 1)$ la funzione di distribuzione cumulata vale $\Phi(1{,}5) \approx 0{,}9332$.

# Solution
Per calcolare la probabilità richiesta, effettuiamo la standardizzazione della variabile aleatoria $X$ mediante la trasformazione:

$$
Z = \frac{X - \mu}{\sigma}
$$

dove $Z \sim \mathcal{N}(0, 1)$ indica la variabile gaussiana standardizzata.

1. Calcoliamo i valori $z_1$ e $z_2$ corrispondenti agli estremi $x_1 = 35$ e $x_2 = 65$:

$$
z_1 = \frac{35 - 50}{10} = -1{,}5
$$

$$
z_2 = \frac{65 - 50}{10} = 1{,}5
$$

2. Esprimiamo la probabilità in funzione della variabile $Z$:

$$
P(35 \le X \le 65) = P(-1{,}5 \le Z \le 1{,}5)
$$

3. Utilizziamo la funzione di distribuzione cumulata $\Phi(z) = P(Z \le z)$:

$$
P(-1{,}5 \le Z \le 1{,}5) = \Phi(1{,}5) - \Phi(-1{,}5)
$$

4. Sfruttando la simmetria della densità di probabilità della Gaussiana standard attorno all'origine, per cui $\Phi(-z) = 1 - \Phi(z)$, si ha:

$$
\Phi(-1{,}5) = 1 - \Phi(1{,}5)
$$

5. Sostituendo nell'espressione precedente, si ottiene:

$$
P(-1{,}5 \le Z \le 1{,}5) = \Phi(1{,}5) - \left(1 - \Phi(1{,}5)\right) = 2\Phi(1{,}5) - 1
$$

6. Sostituendo il valore fornito $\Phi(1{,}5) \approx 0{,}9332$:

$$
P(35 \le X \le 65) = 2 \cdot 0{,}9332 - 1 = 1{,}8664 - 1 = 0{,}8664
$$

La probabilità richiesta è pertanto $0{,}8664$ (pari all'$86{,}64\%$).
