---
year: 1
macro_area: Aritmetica e Algebra
topic: Aritmetica e calcolo con le potenze
difficulty: 1
tags:
  - proprietà delle potenze
  - scomposizione in fattori primi
  - MCD e mcm
  - numeri interi
ai_generated: true
---
# Problem Text
1. Semplificare la seguente espressione numerica applicando le proprietà delle potenze e scrivendo il risultato sotto forma di frazione con numeratore pari a $1$:
$$E = \frac{27^3 \cdot 50^2 \cdot 36^{-3}}{15^4 \cdot 32^{-1} \cdot 12^2}$$

2. Si considerino ora i due numeri interi positivi $A = 240$ e $B = 378$.
   - Scomporre $A$ e $B$ in fattori primi.
   - Determinare il Massimo Comun Divisore $\text{MCD}(A, B)$ e il minimo comune multiplo $\text{mcm}(A, B)$.

# Solution
1. **Semplificazione dell'espressione $E$ con le proprietà delle potenze:**

Per semplificare l'espressione, scomponiamo ciascuna base numerica nei suoi fattori primi ($2, 3$ e $5$):
* **Numeratore:**
  - $27 = 3^3 \implies 27^3 = (3^3)^3 = 3^9$
  - $50 = 2 \cdot 5^2 \implies 50^2 = (2 \cdot 5^2)^2 = 2^2 \cdot 5^4$
  - $36 = 2^2 \cdot 3^2 \implies 36^{-3} = (2^2 \cdot 3^2)^{-3} = 2^{-6} \cdot 3^{-6}$

  Sostituendo questi fattori nel numeratore, otteniamo:
  $$\text{Num} = 3^9 \cdot (2^2 \cdot 5^4) \cdot (2^{-6} \cdot 3^{-6})$$
  Raggruppiamo i fattori con la stessa base sommando gli esponenti:
  $$\text{Num} = 2^{2 + (-6)} \cdot 3^{9 + (-6)} \cdot 5^4 = 2^{-4} \cdot 3^3 \cdot 5^4$$

* **Denominatore:**
  - $15 = 3 \cdot 5 \implies 15^4 = (3 \cdot 5)^4 = 3^4 \cdot 5^4$
  - $32 = 2^5 \implies 32^{-1} = (2^5)^{-1} = 2^{-5}$
  - $12 = 2^2 \cdot 3 \implies 12^2 = (2^2 \cdot 3)^2 = 2^4 \cdot 3^2$

  Sostituendo questi fattori nel denominatore, otteniamo:
  $$\text{Den} = (3^4 \cdot 5^4) \cdot 2^{-5} \cdot (2^4 \cdot 3^2)$$
  Raggruppiamo i fattori con la stessa base sommando gli esponenti:
  $$\text{Den} = 2^{-5 + 4} \cdot 3^{4 + 2} \cdot 5^4 = 2^{-1} \cdot 3^6 \cdot 5^4$$

* **Calcolo del rapporto:**
  Riassembliamo l'espressione $E$ dividendo le potenze con la stessa base (sottraendo gli esponenti del denominatore da quelli del numeratore):
  $$E = \frac{2^{-4} \cdot 3^3 \cdot 5^4}{2^{-1} \cdot 3^6 \cdot 5^4} = 2^{-4 - (-1)} \cdot 3^{3 - 6} \cdot 5^{4 - 4}$$
  $$E = 2^{-3} \cdot 3^{-3} \cdot 5^0$$
  Essendo $5^0 = 1$, si ottiene:
  $$E = 2^{-3} \cdot 3^{-3} = (2 \cdot 3)^{-3} = 6^{-3}$$
  Esprimendo il risultato sotto forma di frazione con numeratore pari a $1$:
  $$E = \frac{1}{6^3} = \frac{1}{216}$$

---

2. **Calcolo di $\text{MCD}$ e $\text{mcm}$ per $A = 240$ e $B = 378$:**

* **Scomposizione in fattori primi:**
  - Per $A = 240$:
    $$240 = 24 \cdot 10 = (2^3 \cdot 3) \cdot (2 \cdot 5) = 2^4 \cdot 3 \cdot 5$$
  - Per $B = 378$:
    $$378 = 2 \cdot 189 = 2 \cdot 9 \cdot 21 = 2 \cdot 3^2 \cdot (3 \cdot 7) = 2 \cdot 3^3 \cdot 7$$

* **Calcolo del Massimo Comun Divisore ($\text{MCD}$):**
  Il $\text{MCD}$ si ottiene prendendo i fattori primi comuni, presi una sola volta, con il minore esponente:
  $$\text{MCD}(240, 378) = 2^1 \cdot 3^1 = 6$$

* **Calcolo del minimo comune multiplo ($\text{mcm}$):**
  Il $\text{mcm}$ si ottiene prendendo i fattori primi comuni e non comuni, presi una sola volta, con il maggiore esponente:
  $$\text{mcm}(240, 378) = 2^4 \cdot 3^3 \cdot 5^1 \cdot 7^1$$
  $$\text{mcm}(240, 378) = 16 \cdot 27 \cdot 5 \cdot 7$$
  Moltichiamo i fattori in modo strategico per facilitare il calcolo mentale:
  $$\text{mcm}(240, 378) = (16 \cdot 5) \cdot (27 \cdot 7) = 80 \cdot 189 = 15120$$
