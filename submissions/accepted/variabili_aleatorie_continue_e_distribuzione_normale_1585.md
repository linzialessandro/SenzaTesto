---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue e distribuzione Normale"
difficulty: 3
tags:
  - "variabili aleatorie continue"
  - "distribuzione normale"
  - "Gauss"
  - "standardizzazione"
  - "probabilit\u00e0"
---
# Problem Text
Una variabile aleatoria continua $X$ ha una distribuzione normale con media $\mu$ e deviazione standard $\sigma$. Sapendo che $P(X < 10) = 0,1587$ e $P(X > 16) = 0,0228$, determina la probabilità $P(11 < X < 13)$.

# Solution
Standardizziamo la variabile $X$ introducendo la variabile normale standard $Z = \frac{X - \mu}{\sigma}$.

Dalle condizioni fornite:

1. $P(X < 10) = P\left(Z < \frac{10 - \mu}{\sigma}\right) = 0,1587$. Dalle tavole della distribuzione normale standard, sappiamo che la funzione di ripartizione soddisfa $\Phi(-1) \approx 0,1587$. Quindi:

$$
\frac{10 - \mu}{\sigma} = -1 \implies \mu - \sigma = 10
$$

2. $P(X > 16) = 0,0228 \implies P(X \le 16) = 0,9772$. Poiché $P\left(Z < \frac{16 - \mu}{\sigma}\right) = 0,9772$ e sapendo che $\Phi(2) \approx 0,9772$, si ha:

$$
\frac{16 - \mu}{\sigma} = 2 \implies \mu + 2\sigma = 16
$$

Risolviamo il sistema lineare per trovare i parametri $\mu$ e $\sigma$:

$$
\begin{cases}
\mu - \sigma = 10 \\
\mu + 2\sigma = 16
\end{cases}
$$

Sottraendo la prima equazione dalla seconda si ottiene:

$$
3\sigma = 6 \implies \sigma = 2
$$

Sostituendo $\sigma = 2$ nella prima equazione ricaviamo:

$$
\mu = 12
$$

Ora possiamo calcolare la probabilità richiesta standardizzando l'intervallo $11 < X < 13$:

$$
P(11 < X < 13) = P\left(\frac{11 - 12}{2} < Z < \frac{13 - 12}{2}\right) = P(-0,5 < Z < 0,5)
$$

Sfruttando la simmetria della distribuzione normale otteniamo:

$$
P(-0,5 < Z < 0,5) = \Phi(0,5) - \Phi(-0,5) = 2\Phi(0,5) - 1
$$

Sapendo dalle tavole che $\Phi(0,5) \approx 0,6915$:

$$
P(-0,5 < Z < 0,5) = 2 \cdot 0,6915 - 1 = 0,3830
$$

La probabilità che la variabile $X$ sia compresa tra $11$ e $13$ è quindi pari a $0,3830$ (ovvero il $38,30\%$).
