---
year: 5
macro_area: "Statistica e Probabilit\u00e0"
topic: "Distribuzione Normale"
difficulty: 2
tags:
  - "Variabili aleatorie continue"
  - "Distribuzione normale"
  - "Standardizzazione"
  - "Gauss"
ai_generated: true
---
# Problem Text
Sia $X$ una variabile aleatoria continua con distribuzione normale di media $\mu = 80$ e deviazione standard $\sigma = 10$. Calcola la probabilità $P(X \le 90)$, sapendo che per la variabile normale standardizzata $Z$ si ha $\Phi(1) \approx 0,8413$.

# Solution
Per risolvere il problema si seguono i seguenti passaggi:

1. **Definizione della standardizzazione**: Si introduce la variabile normale standardizzata $Z$:

$$
Z = \frac{X - \mu}{\sigma}
$$

2. **Calcolo del valore standardizzato**: Si applica la formula per il valore della soglia $x = 90$ con media $\mu = 80$ e deviazione standard $\sigma = 10$:

$$
z = \frac{90 - 80}{10} = \frac{10}{10} = 1
$$

3. **Uguaglianza delle probabilità**: Si esprime la probabilità di $X$ in termini di $Z$:

$$
P(X \le 90) = P(Z \le 1)
$$

4. **Uso della funzione di ripartizione**: Si utilizza la funzione di ripartizione della distribuzione normale standardizzata $\Phi(z)$:

$$
P(Z \le 1) = \Phi(1)
$$

5. **Risultato numerico**: Sostituendo il valore noto fornito nel testo si ottiene:

$$
P(X \le 90) \approx 0,8413
$$

La probabilità che la variabile $X$ sia minore o uguale a $90$ è quindi circa dell' $84,13\%$.
