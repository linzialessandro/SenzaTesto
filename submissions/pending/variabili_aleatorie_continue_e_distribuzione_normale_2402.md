---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue e distribuzione Normale"
difficulty: 1
ai_generated: true
tags:
  - "variabili aleatorie continue"
  - "distribuzione normale"
  - "standardizzazione"
  - "probabilit\u00e0"
---
# Problem Text
Sia $X$ una variabile aleatoria continua avente distribuzione normale con media $\mu = 50$ e deviazione standard $\sigma = 5$. Si determini la probabilità $P(X \ge 57.5)$, sapendo che il valore della funzione di ripartizione della distribuzione normale standardizzata in $z = 1.5$ è $\Phi(1.5) \approx 0.9332$.

# Solution
Per risolvere l'esercizio, riconduciamo la variabile aleatoria normale $X \sim N(50, 5^2)$ alla variabile normale standardizzata $Z \sim N(0, 1)$ mediante la trasformazione:

$$
Z = \frac{X - \mu}{\sigma}
$$

Calcoliamo il valore standardizzato corrispondente a $x = 57.5$:

$$
z = \frac{57.5 - 50}{5} = \frac{7.5}{5} = 1.5
$$

La probabilità richiesta si esprime quindi come:

$$
P(X \ge 57.5) = P(Z \ge 1.5)
$$

Sfruttando la proprietà degli eventi complementari e considerando che per una variabile aleatoria continua la probabilità puntuale è nulla, ossia $P(Z = 1.5) = 0$, possiamo esprimere la probabilità cercata mediante la funzione di ripartizione della normale standard, definita come $\Phi(z) = P(Z \le z)$:

$$
P(Z \ge 1.5) = 1 - P(Z < 1.5) = 1 - \Phi(1.5)
$$

Sostituendo il valore noto $\Phi(1.5) \approx 0.9332$, otteniamo:

$$
P(X \ge 57.5) \approx 1 - 0.9332 = 0.0668
$$

La probabilità che la variabile aleatoria $X$ assuma un valore non inferiore a $57.5$ è pari a $0.0668$ (equivalente al $6.68\%$).
