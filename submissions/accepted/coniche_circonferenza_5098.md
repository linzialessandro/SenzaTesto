---
year: 3
macro_area: "Geometria Analitica"
topic: "Coniche \u2014 Circonferenza"
difficulty: 2
ai_generated: true
tags:
  - "circonferenza"
  - "rette tangenti"
  - "geometria analitica"
  - "distanza punto-retta"
---
# Problem Text
Determina le equazioni delle rette tangenti alla circonferenza di equazione

$$
x^2 + y^2 - 2x - 4y - 20 = 0
$$

condotte dal punto $P(8, 3)$.

# Solution
**Passo 1: Determinazione del centro e del raggio della circonferenza.**
Dall'equazione $x^2 + y^2 - 2x - 4y - 20 = 0$, individuiamo i coefficienti $a = -2$, $b = -4$, $c = -20$.
Calcoliamo le coordinate del centro $C$ e la misura del raggio $r$:

$$
C\left(-\frac{a}{2}, -\frac{b}{2}\right) = C(1, 2)
$$

$$
r = \sqrt{x_C^2 + y_C^2 - c} = \sqrt{1^2 + 2^2 - (-20)} = \sqrt{25} = 5
$$

**Passo 2: Equazione del fascio di rette passanti per $P(8, 3)$.**
L'equazione della generica retta passante per $P(8, 3)$ è:

$$
y - 3 = m(x - 8) \implies mx - y + 3 - 8m = 0
$$

**Passo 3: Condizione di tangenza (distanza centro-retta pari al raggio).**
Imponiamo che la distanza del centro $C(1, 2)$ dalla retta del fascio sia pari al raggio $r = 5$:

$$
d(C, r) = \frac{|m(1) - 2 + 3 - 8m|}{\sqrt{m^2 + 1}} = 5 \implies \frac{|1 - 7m|}{\sqrt{m^2 + 1}} = 5
$$

**Passo 4: Calcolo dei coefficienti angolari $m$.**
Eleviamo entrambi i membri al quadrato:

$$
(1 - 7m)^2 = 25(m^2 + 1)
$$

$$
1 - 14m + 49m^2 = 25m^2 + 25 \implies 24m^2 - 14m - 24 = 0
$$

Dividendo per $2$:

$$
12m^2 - 7m - 12 = 0
$$

Risolviamo l'equazione di secondo grado:

$$
m = \frac{7 \pm \sqrt{49 - 4(12)(-12)}}{24} = \frac{7 \pm \sqrt{625}}{24} = \frac{7 \pm 25}{24}
$$

Otteniamo i due valori di $m$:

$$
m_1 = \frac{32}{24} = \frac{4}{3}, \quad m_2 = -\frac{18}{24} = -\frac{3}{4}
$$

**Passo 5: Equazioni delle rette tangenti.**
Sostituendo i valori di $m$ nell'equazione del fascio:
- Per $m_1 = \frac{4}{3}$: $y - 3 = \frac{4}{3}(x - 8) \implies 4x - 3y - 23 = 0$
- Per $m_2 = -\frac{3}{4}$: $y - 3 = -\frac{3}{4}(x - 8) \implies 3x + 4y - 36 = 0$
