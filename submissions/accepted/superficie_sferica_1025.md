---
year: 5
macro_area: "Geometria Analitica nello spazio"
topic: "Superficie sferica"
difficulty: 3
tags:
  - "geometria nello spazio"
  - "superficie sferica"
  - "equazione del piano"
  - "quinto anno"
ai_generated: true
---
# Problem Text
Determinare l'equazione della superficie sferica $S$ passante per l'origine degli assi $O(0,0,0)$ e per i punti $A(1,2,-1)$ e $B(2,0,1)$, avente il centro appartenente al piano $\pi$ di equazione:

$$
x - y + 2z - 1 = 0
$$

# Solution
L'equazione generale di una superficie sferica nello spazio cartesiano è della forma:

$$
x^2 + y^2 + z^2 + ax + by + cz + d = 0
$$

Il centro $C(x_C, y_C, z_C)$ della sfera ha coordinate:

$$
C\left( -\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2} \right)
$$

Procediamo determinando i coefficienti $a, b, c, d$ imponendo le condizioni fornite dal problema.

### 1. Imposizione del passaggio per i punti noti

- **Passaggio per l'origine $O(0,0,0)$**:
Sostituendo le coordinate di $O$ nell'equazione generale, otteniamo immediatamente:

$$
d = 0
$$

L'equazione della sfera si riduce quindi a:

$$
x^2 + y^2 + z^2 + ax + by + cz = 0
$$

- **Passaggio per il punto $A(1,2,-1)$**:
Sostituendo le coordinate di $A$ nell'equazione ridotta:

$$
1^2 + 2^2 + (-1)^2 + a(1) + b(2) + c(-1) = 0 \implies 6 + a + 2b - c = 0
$$

Otteniamo la prima equazione lineare nei coefficienti:

$$
a + 2b - c = -6
$$

- **Passaggio per il punto $B(2,0,1)$**:
Sostituendo le coordinate di $B$ nell'equazione ridotta:

$$
2^2 + 0^2 + 1^2 + a(2) + b(0) + c(1) = 0 \implies 5 + 2a + c = 0
$$

Otteniamo la seconda equazione lineare nei coefficienti:

$$
2a + c = -5
$$

---

### 2. Imposizione dell'appartenenza del centro al piano $\pi$

Il centro della sfera è:

$$
C\left( -\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2} \right)
$$

Poiché $C$ appartiene al piano $\pi: x - y + 2z - 1 = 0$, sostituiamo le sue coordinate nell'equazione del piano:

$$
\left( -\frac{a}{2} \right) - \left( -\frac{b}{2} \right) + 2\left( -\frac{c}{2} \right) - 1 = 0
$$

Moltiplicando l'intera equazione per $-2$ per eliminare i denominatori, otteniamo:

$$
a - b + 2c + 2 = 0 \implies a - b + 2c = -2
$$

---

### 3. Risoluzione del sistema lineare per i coefficienti

Mettiamo a sistema le tre equazioni lineari ottenute per i coefficienti $a, b, c$:

$$
\begin{cases}
a + 2b - c = -6 \\
2a + c = -5 \\
a - b + 2c = -2
\end{cases}
$$

Dalla seconda equazione ricaviamo direttamente $c$ in funzione di $a$:

$$
c = -5 - 2a
$$

Sostituiamo questa espressione per $c$ nella prima e nella terza equazione:

$$
\begin{cases}
a + 2b - (-5 - 2a) = -6 \\
a - b + 2(-5 - 2a) = -2
\end{cases}
\implies
\begin{cases}
3a + 2b + 5 = -6 \\
-3a - b - 10 = -2
\end{cases}
\implies
\begin{cases}
3a + 2b = -11 \\
-3a - b = 8
\end{cases}
$$

Sommiamo membro a membro le due equazioni del sistema ridotto per elidere il termine in $a$:

$$
(3a - 3a) + (2b - b) = -11 + 8 \implies b = -3
$$

Sostituiamo il valore di $b$ nella seconda equazione ridotta per trovare $a$:

$$
-3a - (-3) = 8 \implies -3a + 3 = 8 \implies -3a = 5 \implies a = -\frac{5}{3}
$$

Utilizziamo ora il valore di $a$ per determinare $c$:

$$
c = -5 - 2\left( -\frac{5}{3} \right) = -5 + \frac{10}{3} = \frac{-15 + 10}{3} = -\frac{5}{3}
$$

I coefficienti cercati sono dunque:

$$
a = -\frac{5}{3}, \quad b = -3, \quad c = -\frac{5}{3}, \quad d = 0
$$

---

### 4. Scrittura dell'equazione della superficie sferica

Sostituiamo i coefficienti nell'equazione generale della sfera:

$$
x^2 + y^2 + z^2 - \frac{5}{3}x - 3y - \frac{5}{3}z = 0
$$

Moltiplicando tutti i termini per $3$ per eliminare i denominatori, otteniamo l'equazione finale della superficie sferica in forma implicita con coefficienti interi:

$$
3(x^2 + y^2 + z^2) - 5x - 9y - 5z = 0
$$
