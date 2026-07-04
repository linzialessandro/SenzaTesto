---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Distribuzione Normale"
difficulty: 4
tags:
  - "Distribuzione normale"
  - "Variabili aleatorie continue"
  - "Standardizzazione"
  - "Sistemi di equazioni"
---
# Problem Text
In un processo industriale di produzione siderurgica, il diametro dei cilindri metallici prodotti segue una distribuzione normale $X \sim N(\mu, \sigma^2)$, con media $\mu$ e deviazione standard $\sigma$ incognite. 

I test di controllo della qualità rilevano le seguenti specifiche:
- il $15{,}87\%$ dei cilindri prodotti ha un diametro inferiore a $19{,}5 \text{ mm}$;
- il $2{,}28\%$ dei cilindri prodotti ha un diametro superiore a $21{,}0 \text{ mm}$.

1. Determinare il valore stimato della media $\mu$ e della deviazione standard $\sigma$ (in $\text{mm}$).
2. Per essere considerati idonei e immessi sul mercato, i cilindri devono rispettare una tolleranza sul diametro nell'intervallo $[19{,}2 \text{ mm}, 20{,}8 \text{ mm}]$. Calcolare la percentuale di produzione che viene scartata perché non conforme a tale tolleranza.

# Solution
**1. Determinazione di $\mu$ e $\sigma$**

Per determinare i parametri della variabile casuale normale $X \sim N(\mu, \sigma^2)$, procediamo tramite la standardizzazione introducendo la variabile standard $Z \sim N(0, 1)$ mediante la seguente relazione:

$$
Z = \frac{X - \mu}{\sigma}
$$

Dalle informazioni del problema, possiamo tradurre le percentuali in probabilità:

- **Prima condizione:**

$$
P(X < 19{,}5) = 15{,}87\% = 0{,}1587
$$

Standardizzando l'espressione, ricaviamo:

$$
P\left(Z < \frac{19{,}5 - \mu}{\sigma}\right) = 0{,}1587
$$

Dalle tavole della distribuzione normale standard, sappiamo che l'area nella coda sinistra pari a $0{,}1587$ corrisponde a un valore critico negativo di $Z$. Poiché $\Phi(-1) = 1 - \Phi(1) \approx 1 - 0{,}8413 = 0{,}1587$, si ottiene lo z-score associato:

$$
\frac{19{,}5 - \mu}{\sigma} = -1
$$

che possiamo riscrivere come prima equazione lineare:

$$
\mu - \sigma = 19{,}5
$$

- **Seconda condizione:**

$$
P(X > 21{,}0) = 2{,}28\% = 0{,}0228
$$

Standardizzando, si ha:

$$
P\left(Z > \frac{21{,}0 - \mu}{\sigma}\right) = 0{,}0228
$$

Questa relazione equivale a richiedere che l'area a sinistra del valore critico sia pari a:

$$
P\left(Z \le \frac{21{,}0 - \mu}{\sigma}\right) = 1 - 0{,}0228 = 0{,}9772
$$

Consultando le tavole della normale standard, si trova che $\Phi(2{,}00) \approx 0{,}9772$. Di conseguenza, lo z-score associato è:

$$
\frac{21{,}0 - \mu}{\sigma} = 2
$$

che possiamo riscrivere come seconda equazione lineare:

$$
\mu + 2\sigma = 21{,}0
$$

Impostiamo ora il sistema lineare di due equazioni nelle incognite $\mu$ e $\sigma$:

$$
\begin{cases}
\mu - \sigma = 19{,}5 \\
\mu + 2\sigma = 21{,}0
\end{cases}
$$

Sottraendo membro a membro la prima equazione dalla seconda, eliminiamo il termine $\mu$ ricavando la deviazione standard:

$$
(\mu + 2\sigma) - (\mu - \sigma) = 21{,}0 - 19{,}5
$$

$$
3\sigma = 1{,}5 \implies \sigma = 0{,}5 \text{ mm}
$$

Sostituendo il valore di $\sigma$ nella prima equazione, ricaviamo il valore della media:

$$
\mu = 19{,}5 + 0{,}5 = 20{,}0 \text{ mm}
$$

La distribuzione del diametro dei componenti metallici è pertanto $X \sim N(20{,}0; \, 0{,}5^2)$.

---

**2. Calcolo della percentuale di cilindri scartati**

Un cilindro viene ritenuto idoneo se il suo diametro appartiene all'intervallo compreso tra $19{,}2\text{ mm}$ e $20{,}8\text{ mm}$. Calcoliamo innanzitutto la probabilità che un generico componente estratto sia idoneo:

$$
P(19{,}2 \le X \le 20{,}8)
$$

Procediamo alla standardizzazione degli estremi dell'intervallo tramite $\mu = 20{,}0$ e $\sigma = 0{,}5$:

$$
z_1 = \frac{19{,}2 - 20{,}0}{0{,}5} = \frac{-0{,}8}{0{,}5} = -1{,}6
$$

$$
z_2 = \frac{20{,}8 - 20{,}0}{0{,}5} = \frac{0{,}8}{0{,}5} = 1{,}6
$$

Possiamo quindi esprimere la probabilità richiesta in termini di variabile normale standardizzata $Z$:

$$
P(19{,}2 \le X \le 20{,}8) = P(-1{,}6 \le Z \le 1{,}6) = \Phi(1{,}6) - \Phi(-1{,}6)
$$

Sfruttando la proprietà di simmetria della distribuzione gaussiana ($\Phi(-z) = 1 - \Phi(z)$), otteniamo:

$$
P(-1{,}6 \le Z \le 1{,}6) = 2\Phi(1{,}6) - 1
$$

Dalle tavole della normale standard si rileva il valore cumulativo $\Phi(1{,}6) = 0{,}9452$. Sostituendo si ottiene:

$$
2 \times 0{,}9452 - 1 = 1{,}8904 - 1 = 0{,}8904
$$

La probabilità che un cilindro sia idoneo è dunque del $89{,}04\%$.

La frazione di cilindri scartati (non conformi alla tolleranza) corrisponde al complemento a unitario di tale probabilità:

$$
P(\text{Scarto}) = 1 - P(19{,}2 \le X \le 20{,}8) = 1 - 0{,}8904 = 0{,}1096
$$

Espressa in forma percentuale, la quota di produzione scartata dal controllo qualità è pari al $10{,}96\%$.
