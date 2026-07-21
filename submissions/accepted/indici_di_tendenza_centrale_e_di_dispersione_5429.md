---
year: 3
macro_area: "Statistica e Probabilit\u00e0"
topic: "Indici di tendenza centrale e di dispersione"
difficulty: 3
ai_generated: true
tags:
  - "statistica descrittiva"
  - "media aritmetica"
  - "moda"
  - "mediana"
  - "varianza"
  - "scarto quadratico medio"
---
# Problem Text
Data la distribuzione di $6$ rilevazioni statistiche $1$, $5$, $5$, $7$, $11$ e $k$, con media aritmetica $\bar{x} = 6$, si determini il valore dell'elemento incognito $k$ e si calcolino la moda, la mediana, la varianza $\sigma^2$ e lo scarto quadratico medio $\sigma$ dell'intera distribuzione.

# Solution
Per trovare il valore del dato incognito $k$, utilizziamo la formula della media aritmetica $\bar{x}$ per $N = 6$ dati:

$$
\bar{x} = \frac{\sum_{i=1}^{6} x_i}{6}
$$

Sostituendo i dati a disposizione e il valore della media $\bar{x} = 6$:

$$
\frac{1 + 5 + 5 + 7 + 11 + k}{6} = 6
$$

$$
\frac{29 + k}{6} = 6 \implies 29 + k = 36 \implies k = 7
$$

La distribuzione completa dei $6$ dati, ordinata in senso non decrescente, è dunque:
$1, \; 5, \; 5, \; 7, \; 7, \; 11$.

**Indici di tendenza centrale:**
- **Moda ($Mo$):** I valori $5$ e $7$ compaiono ciascuno con la massima frequenza ($2$ volte). La distribuzione è quindi bimodale: $Mo_1 = 5$ e $Mo_2 = 7$.
- **Mediana ($Me$):** Essendo il numero di dati $N = 6$ pari, la mediana è la media aritmetica dei due valori centrali ($3^\circ$ e $4^\circ$ valore):

$$
Me = \frac{5 + 7}{2} = 6
$$

**Indici di dispersione:**
La varianza $\sigma^2$ è la media dei quadrati degli scarti dalla media $\bar{x} = 6$:

$$
\sigma^2 = \frac{1}{6} \sum_{i=1}^{6} (x_i - \bar{x})^2
$$

Calcoliamo i quadrati degli scarti per ciascun dato:
- $(1 - 6)^2 = (-5)^2 = 25$
- $(5 - 6)^2 = (-1)^2 = 1$
- $(5 - 6)^2 = (-1)^2 = 1$
- $(7 - 6)^2 = 1^2 = 1$
- $(7 - 6)^2 = 1^2 = 1$
- $(11 - 6)^2 = 5^2 = 25$

Sommando i valori ottenuti:

$$
\sum_{i=1}^{6} (x_i - \bar{x})^2 = 25 + 1 + 1 + 1 + 1 + 25 = 54
$$

La varianza risulta:

$$
\sigma^2 = \frac{54}{6} = 9
$$

Lo scarto quadratico medio $\sigma$ è la radice quadrata della varianza:

$$
\sigma = \sqrt{9} = 3
$$
