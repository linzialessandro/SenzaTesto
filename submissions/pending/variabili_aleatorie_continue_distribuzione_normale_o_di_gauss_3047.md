---
year: 5
macro_area: "Dati e previsioni"
topic: "Variabili aleatorie continue, distribuzione Normale (o di Gauss)"
difficulty: 3
ai_generated: true
tags:
  - "probabilit\u00e0"
  - "variabili aleatorie continue"
  - "distribuzione normale"
  - "standardizzazione"
  - "Gauss"
---
# Problem Text
Una variabile aleatoria continua $X$ ha una distribuzione normale con media $\mu$ e deviazione standard $\sigma$. Sapendo che la probabilità che $X$ assuma un valore inferiore o uguale a $10$ è pari a $0{,}1587$ e che la probabilità che assuma un valore superiore o uguale a $22$ è pari a $0{,}0228$, determina i valori della media $\mu$ e della deviazione standard $\sigma$.

# Solution
Per determinare i parametri della distribuzione normale $X \sim N(\mu, \sigma^2)$, standardizziamo la variabile aleatoria utilizzando la trasformazione:

$$
Z = \frac{X - \mu}{\sigma}
$$

dove $Z \sim N(0, 1)$ è la variabile normale standard.

Dalle informazioni fornite nel problema, abbiamo due condizioni di probabilità:

1. $P(X \le 10) = 0{,}1587$
2. $P(X \ge 22) = 0{,}0228$

Standardizziamo la prima ipotesi:

$$
P\left(\frac{X - \mu}{\sigma} \le \frac{10 - \mu}{\sigma}\right) = P\left(Z \le \frac{10 - \mu}{\sigma}\right) = 0{,}1587
$$

Utilizzando le tavole della distribuzione normale standard o ricordando i valori notevoli, sappiamo che la funzione di ripartizione $\Phi(z) = P(Z \le z)$ assume il valore $0{,}1587$ per $z = -1$, poiché:

$$
\Phi(-1) = 1 - \Phi(1) \approx 1 - 0{,}8413 = 0{,}1587
$$

Pertanto, otteniamo la prima equazione:

$$
\frac{10 - \mu}{\sigma} = -1 \implies \mu - \sigma = 10
$$

Standardizziamo la seconda ipotesi:

$$
P\left(\frac{X - \mu}{\sigma} \ge \frac{22 - \mu}{\sigma}\right) = P\left(Z \ge \frac{22 - \mu}{\sigma}\right) = 0{,}0228
$$

Per la simmetria della distribuzione standard prima di calcolare l'area a sinistra del valore, si ha:

$$
P\left(Z \ge \frac{22 - \mu}{\sigma}\right) = 1 - P\left(Z \le \frac{22 - \mu}{\sigma}\right) = 0{,}0228
$$

$$
P\left(Z \le \frac{22 - \mu}{\sigma}\right) = 1 - 0{,}0228 = 0{,}9772
$$

Dalle tavole della normale standard, sappiamo che $\Phi(2) \approx 0{,}9772$. Otteniamo così la seconda equazione:

$$
\frac{22 - \mu}{\sigma} = 2 \implies \mu + 2\sigma = 22
$$

Risolviamo ora il sistema lineare formato dalle due equazioni trovate:

$$
\begin{cases}
\mu - \sigma = 10 \\
\mu + 2\sigma = 22
\end{cases}
$$

Sottraendo la prima equazione dalla seconda per eliminare $\mu$:

$$
3\sigma = 12 \implies \sigma = 4
$$

Sostituendo il valore di $\sigma$ nella prima equazione:

$$
\mu - 4 = 10 \implies \mu = 14
$$

In conclusione, i parametri cercati della distribuzione normale sono la media $\mu = 14$ e la deviazione standard $\sigma = 4$.
