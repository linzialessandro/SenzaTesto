---
year: 3
macro_area: "Statistica e Probabilit\u00e0"
topic: "Statistica descrittiva (avanzata)"
difficulty: 2
tags:
  - "statistica descrittiva"
  - "media aritmetica"
  - "varianza"
  - "scarto quadratico medio"
  - "deviazione standard"
ai_generated: true
---
# Problem Text
Dato il seguente insieme di dati statistici:

$$
\{5, 7, 8, 9, 11\}
$$

Calcola la varianza della popolazione $\sigma^2$ e lo scarto quadratico medio $\sigma$.

# Solution
**Passo 1: Calcola la media aritmetica ($\mu$)**
La media si ottiene dividendo la somma dei dati per il numero totale degli elementi ($N = 5$):

$$
\mu = \frac{5 + 7 + 8 + 9 + 11}{5} = \frac{40}{5} = 8
$$

**Passo 2: Calcola gli scarti dalla media ($x_i - \mu$)**
Sottrai la media $\mu = 8$ da ciascun valore dell'insieme:
- Per $5$: $5 - 8 = -3$
- Per $7$: $7 - 8 = -1$
- Per $8$: $8 - 8 = 0$
- Per $9$: $9 - 8 = 1$
- Per $11$: $11 - 8 = 3$

**Passo 3: Eleva al quadrato gli scarti ottenuti**
- $(-3)^2 = 9$
- $(-1)^2 = 1$
- $0^2 = 0$
- $1^2 = 1$
- $3^2 = 9$

**Passo 4: Somma gli scarti quadratici**
Somma tutti i valori ottenuti al passo precedente:

$$
\sum_{i=1}^{5} (x_i - \mu)^2 = 9 + 1 + 0 + 1 + 9 = 20
$$

**Passo 5: Calcola la varianza ($\sigma^2$)**
La varianza della popolazione è data dalla media degli scarti quadratici:

$$
\sigma^2 = \frac{20}{5} = 4
$$

**Passo 6: Calcola lo scarto quadratico medio ($\sigma$)**
La deviazione standard (o scarto quadratico medio) è la radice quadrata della varianza:

$$
\sigma = \sqrt{\sigma^2} = \sqrt{4} = 2
$$
