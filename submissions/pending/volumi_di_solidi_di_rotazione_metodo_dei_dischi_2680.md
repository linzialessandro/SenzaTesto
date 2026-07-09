---
year: 5
macro_area: "Analisi Matematica"
topic: "Volumi di solidi di rotazione (metodo dei dischi)"
difficulty: 2
tags:
  - "integrali"
  - "solidi di rotazione"
  - "metodo dei dischi"
  - "calcolo integrale"
---
# Problem Text
Calcolare il volume del solido ottenuto dalla rotazione completa attorno all'asse $x$ della regione di piano delimitata dal grafico della funzione

$$
y = \sqrt{x}
$$

dall'asse delle ascisse e dalle rette di equazione $x = 0$ e $x = 4$.

# Solution
Il volume $V$ del solido di rotazione si calcola applicando il metodo dei dischi mediante la seguente formula:

$$
V = \pi \int_{a}^{b} [f(x)]^2 \, dx
$$

Sostituendo la funzione $f(x) = \sqrt{x}$ e gli estremi di integrazione $a = 0$ e $b = 4$, otteniamo:

$$
V = \pi \int_{0}^{4} (\sqrt{x})^2 \, dx
$$

Semplificando l'espressione all'interno dell'integrale per $x \ge 0$, si ha $(\sqrt{x})^2 = x$:

$$
V = \pi \int_{0}^{4} x \, dx
$$

Trovando una primitiva di $x$, ossia $\frac{x^2}{2}$, e applicando il teorema fondamentale del calcolo integrale:

$$
V = \pi \left[ \frac{x^2}{2} \right]_{0}^{4}
$$

Valutando la primitiva agli estremi dell'intervallo di integrazione si ottiene:

$$
V = \pi \left( \frac{4^2}{2} - \frac{0^2}{2} \right) = \pi \left( \frac{16}{2} - 0 \right) = 8\pi
$$

Il volume del solido di rotazione è $8\pi$.
