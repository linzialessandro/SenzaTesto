---
year: 5
macro_area: "Analisi Matematica"
topic: "Volumi di solidi di rotazione (metodo dei dischi)"
difficulty: 2
ai_generated: true
tags:
  - "integrali"
  - "volume di solidi di rotazione"
  - "metodo dei dischi"
  - "quinto anno"
---
# Problem Text
Calcolare il volume del solido generato dalla rotazione completa attorno all'asse $x$ della regione di piano delimitata dal grafico della funzione $y = \sqrt{x}$, dall'asse $x$ e dalla retta $x = 4$.

# Solution
1. **Identificazione della formula**: Il volume $V$ del solido ottenuto dalla rotazione attorno all'asse $x$ di una regione delimitata da $y = f(x)$, dall'asse $x$ e dalle rette $x = a$ e $x = b$ è dato dalla formula:

$$
V = \pi \int_{a}^{b} [f(x)]^2 \, dx
$$

2. **Definizione degli estremi di integrazione**: Nel nostro caso la regione parte dall'origine, quindi $a = 0$, e termina alla retta $b = 4$. La funzione da ruotare è $f(x) = \sqrt{x}$.

3. **Impostazione dell'integrale**: Sostituendo i dati all'interno della formula del volume, si ottiene:

$$
V = \pi \int_{0}^{4} \left(\sqrt{x}\right)^2 \, dx
$$

4. **Semplificazione della funzione integranda**: Per ogni $x \ge 0$, si ha $\left(\sqrt{x}\right)^2 = x$. L'integrale si riduce quindi a:

$$
V = \pi \int_{0}^{4} x \, dx
$$

5. **Calcolo della primitiva**: Una primitiva della funzione $x$ è $\frac{x^2}{2}$. Applicando il teorema fondamentale del calcolo integrale, possiamo scrivere:

$$
\int_{0}^{4} x \, dx = \left[ \frac{x^2}{2} \right]_{0}^{4}
$$

6. **Calcolo del valore finale**: Valutando la primitiva negli estremi di integrazione si ottiene:

$$
V = \pi \left( \frac{4^2}{2} - \frac{0^2}{2} \right) = \pi \left( \frac{16}{2} - 0 \right) = 8\pi
$$

Il volume del solido di rotazione è pari a $8\pi$.
