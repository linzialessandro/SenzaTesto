---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche \u2014 Circonferenza"
difficulty: 2
ai_generated: true
tags:
  - "circonferenza"
  - "centro e raggio"
  - "retta tangente"
  - "distanza punto-retta"
---
# Problem Text
Determinare le equazioni delle rette tangenti alla circonferenza $\gamma: x^2 + y^2 - 4x + 2y + 1 = 0$ che risultano parallele alla retta $r: 3x - 4y + 2 = 0$.

# Solution
1. **Centro e raggio della circonferenza**:
Dall'equazione della circonferenza $\gamma: x^2 + y^2 - 4x + 2y + 1 = 0$, individuiamo i coefficienti $a = -4$, $b = 2$, $c = 1$.
Calcoliamo le coordinate del centro $C$ e il raggio $R$:

$$
C\left(-\frac{a}{2}, -\frac{b}{2}\right) \implies C(2, -1)
$$

$$
R = \sqrt{x_C^2 + y_C^2 - c} = \sqrt{2^2 + (-1)^2 - 1} = \sqrt{4 + 1 - 1} = 2
$$

2. **Fascio di rette parallele**:
Le rette parallele a $r: 3x - 4y + 2 = 0$ hanno equazione del tipo:

$$
3x - 4y + q = 0
$$

3. **Condizione di tangenza**:
Una retta è tangente alla circonferenza se la sua distanza dal centro $C(2, -1)$ è pari al raggio $R = 2$:

$$
d(C, t) = R
$$

4. **Applicazione della formula della distanza punto-retta**:

$$
\frac{|3(2) - 4(-1) + q|}{\sqrt{3^2 + (-4)^2}} = 2
$$

$$
\frac{|6 + 4 + q|}{\sqrt{25}} = 2 \implies \frac{|10 + q|}{5} = 2
$$

5. **Risoluzione dell'equazione con il valore assoluto**:

$$
|10 + q| = 10 \implies 10 + q = \pm 10
$$

- Se $10 + q = 10 \implies q_1 = 0$
- Se $10 + q = -10 \implies q_2 = -20$

6. **Conclusione**:
Le rette tangenti cercate sono:

$$
t_1: 3x - 4y = 0 \quad \text{e} \quad t_2: 3x - 4y - 20 = 0
$$
