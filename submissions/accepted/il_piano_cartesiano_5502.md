---
year: 3
macro_area: "Geometria Analitica"
topic: "Il piano cartesiano"
difficulty: 3
tags:
  - "piano cartesiano"
  - "distanza tra due punti"
  - "punto medio"
  - "area triangolo"
  - "condizione di perpendicolarit\u00e0"
---
# Problem Text
Determinare le coordinate del vertice $C$, situato nel primo quadrante, di un triangolo isoscele $ABC$ avente come base il segmento di estremi $A(1, 2)$ e $B(5, 4)$, sapendo che l'area del triangolo è $10$.

# Solution
### Soluzione passo dopo passo

1. **Calcolo della lunghezza della base $AB$ e del punto medio $M$**
La lunghezza della base $AB$ si determina con la formula della distanza tra due punti:

$$
AB = \sqrt{(5-1)^2 + (4-2)^2} = \sqrt{16+4} = \sqrt{20} = 2\sqrt{5}
$$

Il punto medio $M$ del segmento $AB$, che rappresenta il piede dell'altezza del triangolo isoscele, ha coordinate:

$$
M = \left(\frac{1+5}{2}, \frac{2+4}{2}\right) = (3, 3)
$$

2. **Determinazione dell'altezza $h$ del triangolo**
Usando la formula dell'area del triangolo, determiniamo l'altezza $h = MC$:

$$
\text{Area} = \frac{AB \cdot h}{2} \implies 10 = \frac{2\sqrt{5} \cdot h}{2} \implies h = 2\sqrt{5}
$$

3. **Determinazione della retta dell'altezza $MC$**
La retta che contiene l'altezza $MC$ è perpendicolare ad $AB$ e passa per $M(3, 3)$. 
Il coefficiente angolare della retta $AB$ è:

$$
m_{AB} = \frac{4-2}{5-1} = \frac{1}{2}
$$

Il coefficiente angolare della retta perpendicolare è l'antireciproco $m = -2$. L'equazione della retta perpendicolare passante per $M(3, 3)$ è:

$$
y - 3 = -2(x - 3) \implies y = -2x + 9
$$

4. **Calcolo delle coordinate di $C$**
Il vertice $C(x, y)$ appartiene alla retta $y = -2x+9$ e ha distanza da $M(3, 3)$ pari alla misura dell'altezza $h = 2\sqrt{5}$:

$$
(x - 3)^2 + (y - 3)^2 = h^2 \implies (x - 3)^2 + (-2x + 9 - 3)^2 = 20
$$

Sostituendo e semplificando:

$$
(x - 3)^2 + 4(x - 3)^2 = 20 \implies 5(x - 3)^2 = 20
$$

$$
(x - 3)^2 = 4 \implies x - 3 = \pm 2
$$

Otteniamo due soluzioni per l'ascissa di $C$:
* Se $x - 3 = 2 \implies x = 5 \implies y = -2(5) + 9 = -1$. Il punto $C_1(5, -1)$ non appartiene al primo quadrante.
* Se $x - 3 = -2 \implies x = 1 \implies y = -2(1) + 9 = 7$. Il punto $C(1, 7)$ si trova nel primo quadrante.

Le coordinate del vertice cercato sono $C(1, 7)$.
