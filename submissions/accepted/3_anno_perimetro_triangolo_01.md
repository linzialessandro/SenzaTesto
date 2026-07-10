---
year: 3
macro_area: Geometria Analitica
topic: piano cartesiano
difficulty: 1
tags:
  - distanza tra due punti
  - perimetro
  - triangolo
ai_generated: true
---
# Problem Text
Calcola il perimetro del triangolo i cui vertici nel piano cartesiano sono $A(1, 2)$, $B(4, 6)$ e $C(-2, 6)$.

# Solution
**1. Calcolo della lunghezza del lato AB:**
Utilizziamo la formula della distanza tra due punti $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$:
$$
AB = \sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$

**2. Calcolo della lunghezza del lato BC:**
Essendo $B$ e $C$ punti con la stessa ordinata ($y=6$), il lato è orizzontale e la sua lunghezza è il valore assoluto della differenza delle ascisse:
$$
BC = |x_C - x_B| = |-2 - 4| = |-6| = 6
$$

**3. Calcolo della lunghezza del lato AC:**
$$
AC = \sqrt{(-2 - 1)^2 + (6 - 2)^2} = \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5
$$
Notiamo che il triangolo è isoscele ($AB = AC$).

**4. Calcolo del perimetro:**
$$
2p = AB + BC + AC = 5 + 6 + 5 = 16
$$
Il perimetro del triangolo è 16.
