---
year: 4
macro_area: "Calcolo Combinatorio"
topic: "Calcolo Combinatorio"
difficulty: 3
tags:
  - "calcolo combinatorio"
  - "coefficiente binomiale"
  - "binomio di Newton"
  - "quarto anno"
---
# Problem Text
Determinare nello sviluppo del seguente binomio di Newton:

$$
\left( 2x^2 - \frac{1}{x} \right)^{9}
$$

1. Il termine noto (ovvero il termine di grado zero rispetto alla variabile $x$).
2. Il coefficiente del termine in $x^6$.

# Solution
Lo sviluppo del binomio di Newton per un'espressione della forma $(a + b)^n$ è dato dalla formula:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

Nel nostro caso specifico, poniamo:
- $n = 9$
- $a = 2x^2$
- $b = -\frac{1}{x} = -x^{-1}$

Il generico termine $T_k$ dello sviluppo (per $k = 0, 1, 2, \dots, 9$) è espresso come:

$$
T_k = \binom{9}{k} (2x^2)^{9-k} \left( -x^{-1} \right)^k
$$

Semplifichiamo l'espressione separando la parte numerica da quella letterale:

$$
T_k = \binom{9}{k} 2^{9-k} (x^2)^{9-k} (-1)^k (x^{-1})^k
$$

$$
T_k = \binom{9}{k} 2^{9-k} (-1)^k x^{2(9-k)} x^{-k}
$$

$$
T_k = \binom{9}{k} 2^{9-k} (-1)^k x^{18 - 3k}
$$

Questa formula generale ci permette di rispondere a entrambi i quesiti analizzando l'esponente di $x$, che è $18 - 3k$.

---

### 1. Determinazione del termine noto ($x^0$)

Il termine noto corrisponde al termine in cui la variabile $x$ ha esponente pari a $0$. Imponiamo quindi che l'esponente di $x$ sia nullo:

$$
18 - 3k = 0 \implies 3k = 18 \implies k = 6
$$

Dato che $k = 6$ è un numero intero compreso tra $0$ e $9$, il termine noto esiste ed è associato a questo valore. Calcoliamo la parte numerica per $k = 6$:

$$
T_6 = \binom{9}{6} 2^{9-6} (-1)^6 x^0 = \binom{9}{6} 2^3 \cdot 1
$$

Calcoliamo il coefficiente binomiale $\binom{9}{6}$ utilizzando la proprietà di simmetria $\binom{n}{k} = \binom{n}{n-k}$:

$$
\binom{9}{6} = \binom{9}{3} = \frac{9 \cdot 8 \cdot 7}{3 \cdot 2 \cdot 1} = \frac{504}{6} = 84
$$

Sostituiamo questo valore nell'espressione del termine noto:

$$
T_6 = 84 \cdot 8 = 672
$$

Il termine noto dello sviluppo è quindi:

$$
672
$$

---

### 2. Determinazione del coefficiente del termine in $x^6$

Per trovare il termine in $x^6$, imponiamo che l'esponente di $x$ sia uguale a $6$:

$$
18 - 3k = 6 \implies 3k = 12 \implies k = 4
$$

Anche in questo caso, $k = 4$ è un valore ammesso. Calcoliamo il termine corrispondente $T_4$:

$$
T_4 = \binom{9}{4} 2^{9-4} (-1)^4 x^6 = \binom{9}{4} 2^5 \cdot 1 \cdot x^6
$$

Calcoliamo il coefficiente binomiale $\binom{9}{4}$:

$$
\binom{9}{4} = \frac{9 \cdot 8 \cdot 7 \cdot 6}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{3024}{24} = 126
$$

Calcoliamo il coefficiente finale:

$$
\text{Coefficiente} = 126 \cdot 32 = 4032
$$

Il termine cercato è $4032 x^6$, pertanto il suo coefficiente è:

$$
4032
$$
