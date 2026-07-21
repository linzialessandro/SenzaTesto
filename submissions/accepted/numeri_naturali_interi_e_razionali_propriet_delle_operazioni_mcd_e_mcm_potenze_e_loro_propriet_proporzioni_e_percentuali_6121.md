---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Numeri naturali, interi e razionali; propriet\u00e0 delle operazioni; MCD e mcm; potenze e loro propriet\u00e0; proporzioni e percentuali"
difficulty: 2
ai_generated: true
tags:
  - "numeri razionali"
  - "propriet\u00e0 delle potenze"
  - "espressioni con frazioni"
  - "calcolo con frazioni"
  - "mcm"
---
# Problem Text
Calcola il valore della seguente espressione applicando le proprietà delle potenze e le regole di calcolo nei numeri razionali:

$$
\left[ \left( -\frac{2}{3} \right)^4 \cdot \left( \frac{2}{3} \right)^3 \right] : \left( \frac{4}{9} \right)^3 + \left( -\frac{1}{2} \right)^3 \cdot \left( -\frac{2}{3} \right)
$$

# Solution
Per risolvere l'espressione, seguiamo l'ordine delle operazioni e applichiamo le proprietà delle potenze.

1. **Gestione dei segni e unificazione delle basi:**
Osserviamo che la potenza $\left( -\frac{2}{3} \right)^4$ ha esponente pari, quindi il risultato è positivo:

$$
\left( -\frac{2}{3} \right)^4 = \left( \frac{2}{3} \right)^4
$$

Inoltre, la base $\frac{4}{9}$ può essere scritta come potenza di $\frac{2}{3}$:

$$
\frac{4}{9} = \left( \frac{2}{3} \right)^2
$$

Di conseguenza, applicando la proprietà della potenza di una potenza, si ottiene:

$$
\left( \frac{4}{9} \right)^3 = \left[ \left( \frac{2}{3} \right)^2 \right]^3 = \left( \frac{2}{3} \right)^{2 \cdot 3} = \left( \frac{2}{3} \right)^6
$$

2. **Calcolo del primo blocco (prodotto e quoziente di potenze con la stessa base):**
Riscriviamo la prima parte dell'espressione usando le potenze con base $\frac{2}{3}$:

$$
\left[ \left( \frac{2}{3} \right)^4 \cdot \left( \frac{2}{3} \right)^3 \right] : \left( \frac{2}{3} \right)^6
$$

Applichiamo la proprietà del prodotto di potenze con la stessa base (somma degli esponenti):

$$
\left( \frac{2}{3} \right)^{4+3} = \left( \frac{2}{3} \right)^7
$$

Ora applichiamo la proprietà del quoziente di potenze con la stessa base (differenza degli esponenti):

$$
\left( \frac{2}{3} \right)^7 : \left( \frac{2}{3} \right)^6 = \left( \frac{2}{3} \right)^{7-6} = \left( \frac{2}{3} \right)^1 = \frac{2}{3}
$$

3. **Calcolo del secondo blocco:**
Calcoliamo la potenza $\left( -\frac{1}{2} \right)^3$:

$$
\left( -\frac{1}{2} \right)^3 = -\frac{1}{8}
$$

Moltiplichiamo per $\left( -\frac{2}{3} \right)$, ricordando che il prodotto di due numeri negativi è positivo:

$$
\left( -\frac{1}{8} \right) \cdot \left( -\frac{2}{3} \right) = +\frac{2}{24} = \frac{1}{12}
$$

4. **Somma finale:**
Sommiamo i risultati dei due blocchi trovando il minimo comune multiplo tra i denominatori ($mcm(3, 12) = 12$):

$$
\frac{2}{3} + \frac{1}{12} = \frac{8 + 1}{12} = \frac{9}{12} = \frac{3}{4}
$$

Il risultato finale è $\frac{3}{4}$.
