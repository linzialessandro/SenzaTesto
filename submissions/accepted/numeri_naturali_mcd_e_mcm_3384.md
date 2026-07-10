---
year: 1
macro_area: "Aritmetica e Algebra"
topic: "Numeri naturali, MCD e mcm"
difficulty: 2
tags:
  - "MCD"
  - "mcm"
  - "numeri naturali"
  - "rapporti"
---
# Problem Text
Determinare due numeri naturali $x$ e $y$, con $x > y$, sapendo che il loro massimo comune divisore è $\text{MCD}(x,y) = 2^2 \cdot 3$, il loro minimo comune multiplo è $\text{mcm}(x,y) = 2^4 \cdot 3^2 \cdot 5$, e il loro rapporto è $\frac{x}{y} = \frac{20}{3}$.

# Solution
Dalle proprietà del Massimo Comune Divisore, possiamo esprimere i numeri $x$ e $y$ come:

$$
x = d \cdot u \quad \text{e} \quad y = d \cdot v
$$

dove $d = \text{MCD}(x,y) = 12$ e $u, v$ sono numeri naturali coprimi, ossia $\text{MCD}(u,v) = 1$.

Sappiamo che il prodotto di due numeri è uguale al prodotto tra il loro MCD e il loro mcm:

$$
x \cdot y = \text{MCD}(x,y) \cdot \text{mcm}(x,y)
$$

Sostituendo le espressioni in funzione di $u$ e $v$:

$$
(d \cdot u) \cdot (d \cdot v) = d \cdot \text{mcm}(x,y) \implies d \cdot u \cdot v = \text{mcm}(x,y)
$$

Inserendo i valori noti:

$$
12 \cdot u \cdot v = 2^4 \cdot 3^2 \cdot 5 = 720 \implies u \cdot v = \frac{720}{12} = 60
$$

Utilizziamo ora la condizione sul rapporto $\frac{x}{y}$:

$$
\frac{x}{y} = \frac{d \cdot u}{d \cdot v} = \frac{u}{v} = \frac{20}{3}
$$

Poiché $u$ e $v$ devono essere coprimi e la frazione $\frac{20}{3}$ è già ridotta ai minimi termini, deduciamo direttamente:

$$
u = 20 \quad \text{e} \quad v = 3
$$

Notiamo che il prodotto $u \cdot v = 20 \cdot 3 = 60$ rispetta perfettamente la condizione precedentemente ricavata.

Calcoliamo infine i valori di $x$ e $y$:

$$
x = 12 \cdot 20 = 240
$$

$$
y = 12 \cdot 3 = 36
$$

I due numeri cercati sono quindi $x = 240$ e $y = 36$.
