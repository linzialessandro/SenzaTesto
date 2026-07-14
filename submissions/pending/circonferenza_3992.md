---
year: 3
macro_area: "Geometria Analitica"
topic: "Circonferenza"
difficulty: 3
ai_generated: true
tags:
  - "circonferenza"
  - "rette tangenti"
  - "distanza punto-retta"
  - "geometria analitica"
---
# Problem Text
Determinare le equazioni delle rette tangenti alla circonferenza di equazione $x^2 + y^2 - 4x - 2y = 0$ che risultano parallele alla retta di equazione $2x - y + 5 = 0$.

# Solution
Per trovare le rette tangenti parallele a quella data, applichiamo le proprietà geometriche della circonferenza e la formula della distanza punto-retta.

**1. Determinazione del centro e del raggio della circonferenza**

Data l'equazione della circonferenza $x^2 + y^2 - 4x - 2y = 0$, i coefficienti sono $a = -4$, $b = -2$ e $c = 0$. 

Le coordinate del centro $C(x_C; y_C)$ sono:

$$
x_C = -\frac{a}{2} = 2
$$

$$
y_C = -\frac{b}{2} = 1
$$

Il centro è quindi $C(2; 1)$.
Il raggio $R$ si ottiene tramite la formula:

$$
R = \sqrt{x_C^2 + y_C^2 - c} = \sqrt{2^2 + 1^2 - 0} = \sqrt{5}
$$

**2. Definizione del fascio di rette parallele**

La retta data ha equazione $2x - y + 5 = 0$. Tutte le rette ad essa parallele appartengono al fascio improprio caratterizzato dallo stesso coefficiente angolare ($m = 2$). La loro equazione in forma implicita è:

$$
2x - y + q = 0
$$

**3. Applicazione della condizione di tangenza**

Una retta del fascio è tangente alla circonferenza se e solo se la sua distanza dal centro $C(2; 1)$ è esattamente uguale al raggio $R = \sqrt{5}$. Applichiamo la formula della distanza punto-retta:

$$
\frac{|2x_C - y_C + q|}{\sqrt{2^2 + (-1)^2}} = R
$$

Sostituendo le coordinate di $C$ e il valore di $R$:

$$
\frac{|2(2) - 1(1) + q|}{\sqrt{5}} = \sqrt{5}
$$

$$
\frac{|3 + q|}{\sqrt{5}} = \sqrt{5}
$$

Moltiplicando entrambi i membri della relazione per $\sqrt{5}$ si ottiene:

$$
|3 + q| = 5
$$

Questa equazione con valore assoluto fornisce due soluzioni distinte:

$$
3 + q = 5 \implies q = 2
$$

$$
3 + q = -5 \implies q = -8
$$

**4. Equazioni delle rette tangenti**

Sostituendo i valori trovati per il parametro $q$, otteniamo le equazioni delle due rette tangenti cercate:

$$
t_1: 2x - y + 2 = 0
$$

$$
t_2: 2x - y - 8 = 0
$$
