---
year: 5
macro_area: "Integrali e Applicazioni"
topic: "Integrali Definiti e Teoremi dell'Analisi Integrale"
difficulty: 3
ai_generated: true
tags:
  - "integrali definiti"
  - "teorema della media"
  - "torricelli-barrow"
  - "area geometrica"
  - "funzione integrale"
---
# Problem Text
Si consideri la funzione $f(x) = 3x^2 - 6x$ definita nell'intervallo $[0, 3]$. Dopo aver applicato il Teorema della Media Integrale per determinare il punto $c \in (0, 3)$ in cui la funzione assume il suo valore medio $\mu$, si utilizzi il Teorema Fondamentale del Calcolo Integrale (formula di Torricelli-Barrow) per calcolare l'integrale definito $\int_0^3 f(x) \, dx$ e si giustifichi la differenza concettuale tra tale risultato e l'area della regione finita di piano delimitata dal grafico di $f$ e dall'asse $x$ nell'intervallo $[0, 3]$.

# Solution
Per la formula di Torricelli-Barrow, se $F(x)$ è una primitiva continua di $f(x)$, si ha:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Determiniamo una primitiva di $f(x) = 3x^2 - 6x$:

$$
F(x) = x^3 - 3x^2
$$

Calcoliamo l'integrale definito nell'intervallo $[0, 3]$:

$$
\int_0^3 (3x^2 - 6x) \, dx = F(3) - F(0) = (3^3 - 3 \cdot 3^2) - 0 = 0
$$

Il valore medio $\mu$ di $f$ in $[0, 3]$ è definito da:

$$
\mu = \frac{1}{3 - 0} \int_0^3 f(x) \, dx = \frac{1}{3} \cdot 0 = 0
$$

Per il Teorema della Media Integrale, essendo $f$ continua in $[0, 3]$, esiste $c \in (0, 3)$ tale che $f(c) = \mu = 0$:

$$
3c^2 - 6c = 0 \iff 3c(c - 2) = 0
$$

L'unica soluzione nell'intervallo aperto $(0, 3)$ è $c = 2$.

**Interpretazione geometrica e calcolo dell'area:**
L'integrale definito fornisce una somma algebrica di aree pesate con il segno della funzione ($f(x) \le 0$ su $[0, 2]$ e $f(x) \ge 0$ su $[2, 3]$), risultando nullo poiché le due regioni hanno estensione pari ma segno opposto.
L'area geometrica $A$ della regione di piano è data invece dall'integrale del valore assoluto:

$$
A = \int_0^3 |f(x)| \, dx = -\int_0^2 (3x^2 - 6x) \, dx + \int_2^3 (3x^2 - 6x) \, dx
$$

Calcolando i singoli contributi:

$$
\int_0^2 (3x^2 - 6x) \, dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4
$$

$$
\int_2^3 (3x^2 - 6x) \, dx = [x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4
$$

L'area geometrica totale è quindi $A = |-4| + 4 = 8$.
