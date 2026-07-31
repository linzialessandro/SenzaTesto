---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Variabili aleatorie continue e Distribuzione Normale"
difficulty: 2
ai_generated: true
tags:
  - "variabili aleatorie continue"
  - "distribuzione normale"
  - "standardizzazione"
  - "funzione di ripartizione"
---
# Problem Text
Sia $X \sim \mathcal{N}(50, 10^2)$ una variabile aleatoria continua avente distribuzione normale di media $\mu = 50$ e scarto quadratico medio $\sigma = 10$.

Determinare la probabilità $P(40 \le X \le 65)$, sapendo che per la funzione di distribuzione cumulata $\Phi(z)$ della variabile normale standard $Z \sim \mathcal{N}(0,1)$ valgono i valori $\Phi(1) \approx 0{,}8413$ e $\Phi(1{,}5) \approx 0{,}9332$.

# Solution
Per calcolare la probabilità richiesta, si applica la trasformazione di standardizzazione alla variabile aleatoria $X$:

$$
Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0,1)
$$

**Passaggio 1: Standardizzazione degli estremi dell'intervallo**
Calcoliamo i valori corrispondenti $z_1$ e $z_2$ per la variabile normale standard $Z$:

$$
z_1 = \frac{40 - 50}{10} = -1
$$

$$
z_2 = \frac{65 - 50}{10} = 1{,}5
$$

**Passaggio 2: Riscrittura della probabilità**
La probabilità cercata equivale a:

$$
P(40 \le X \le 65) = P(-1 \le Z \le 1{,}5)
$$

**Passaggio 3: Espressione mediante la funzione cumulata $\Phi(z)$**
Per definizione di funzione di ripartizione:

$$
P(-1 \le Z \le 1{,}5) = \Phi(1{,}5) - \Phi(-1)
$$

**Passaggio 4: Utilizzo della simmetria della distribuzione normale**
Data la simmetria della densità di probabilità di $Z$ rispetto all'asse $z=0$, vale la proprietà $\Phi(-z) = 1 - \Phi(z)$:

$$
\Phi(-1) = 1 - \Phi(1) \approx 1 - 0{,}8413 = 0{,}1587
$$

**Passaggio 5: Calcolo numerico finale**
Sostituendo i valori noti:

$$
P(40 \le X \le 65) \approx 0{,}9332 - 0{,}1587 = 0{,}7745
$$

La probabilità richiesta è dunque pari a $0{,}7745$ (ossia il $77{,}45\%$).
