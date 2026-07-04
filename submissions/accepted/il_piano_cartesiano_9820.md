---
year: 3
macro_area: Geometria Analitica
topic: Il piano cartesiano
difficulty: 3
tags:
  - piano cartesiano
  - punto medio
  - simmetria assiale
  - simmetria centrale
  - area
  - perimetro
  - triangolo rettangolo
---
# Problem Text
Nel piano cartesiano, si considerino i punti $A(1, 1)$ e $B(5, 3)$. 

1. Si determinino le coordinate del punto medio $M$ del segmento $AB$.
2. Sia $C$ il punto simmetrico di $B$ rispetto ad $A$. Si trovino le coordinate di $C$.
3. Si consideri la retta $s$ di equazione $y = -x$. Sia $D$ il punto simmetrico di $M$ rispetto alla retta $s$. Si determinino le coordinate di $D$.
4. Si dimostri che il triangolo $ACD$ è un triangolo rettangolo e se ne calcolino il perimetro e l'area.

# Solution
1. **Determinazione delle coordinate di $M$:**
Le coordinate del punto medio $M$ del segmento di estremi $A(x_A, y_A)$ e $B(x_B, y_B)$ si calcolano applicando le formule:
$$x_M = \frac{x_A + x_B}{2}, \quad y_M = \frac{y_A + y_B}{2}$$
Sostituendo i valori delle coordinate di $A(1, 1)$ e $B(5, 3)$, si ottiene:
$$x_M = \frac{1 + 5}{2} = 3$$
$$y_M = \frac{1 + 3}{2} = 2$$
Quindi, il punto medio è $M(3, 2)$.

2. **Determinazione delle coordinate del simmetrico $C$:**
Poiché $C$ è il simmetrico di $B$ rispetto ad $A$, il punto $A$ rappresenta il punto medio del segmento $BC$. Denotando con $(x_C, y_C)$ le coordinate di $C$, si ha:
$$x_A = \frac{x_B + x_C}{2} \implies 1 = \frac{5 + x_C}{2} \implies 2 = 5 + x_C \implies x_C = -3$$
$$y_A = \frac{y_B + y_C}{2} \implies 1 = \frac{3 + y_C}{2} \implies 2 = 3 + y_C \implies y_C = -1$$
Le coordinate del punto $C$ sono quindi $C(-3, -1)$.

3. **Determinazione delle coordinate del simmetrico $D$:**
La simmetria assiale rispetto alla retta $s: y = -x$ (bisettrice del secondo e quarto quadrante) associa a ogni punto $P(x, y)$ il punto $P'(-y, -x)$.
Applicando tale trasformazione geometrica alle coordinate di $M(3, 2)$, si ricavano le coordinate di $D$:
$$x_D = -y_M = -2$$
$$y_D = -x_M = -3$$
Quindi, il punto $D$ ha coordinate $D(-2, -3)$.

4. **Classificazione del triangolo $ACD$, calcolo del perimetro e dell'area:**
Per dimostrare che il triangolo $ACD$ è rettangolo, possiamo calcolare i coefficienti angolari dei lati per verificare l'eventuale perpendicolarità, oppure calcolare le lunghezze dei lati e applicare il teorema di Pitagora inverso.

*Metodo dei coefficienti angolari:*
Calcoliamo il coefficiente angolare della retta passante per $A(1, 1)$ e $C(-3, -1)$:
$$m_{AC} = \frac{y_C - y_A}{x_C - x_A} = \frac{-1 - 1}{-3 - 1} = \frac{-2}{-4} = \frac{1}{2}$$
Calcoliamo il coefficiente angolare della retta passante per $C(-3, -1)$ e $D(-2, -3)$:
$$m_{CD} = \frac{y_D - y_C}{x_D - x_C} = \frac{-3 - (-1)}{-2 - (-3)} = \frac{-2}{1} = -2$$
Poiché il prodotto dei coefficienti angolari è:
$$m_{AC} \cdot m_{CD} = \frac{1}{2} \cdot (-2) = -1$$
le rette $AC$ e $CD$ sono perpendicolari. Di conseguenza, l'angolo in $C$ è retto ($\widehat{ACD} = 90^\circ$) e il triangolo $ACD$ è rettangolo in $C$.

*Calcolo delle lunghezze dei lati:*
La distanza tra due punti $P_1(x_1, y_1)$ e $P_2(x_2, y_2)$ è data dalla formula:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
Calcoliamo le lunghezze dei segmenti $AC$, $CD$ e $AD$:
$$AC = \sqrt{(-3 - 1)^2 + (-1 - 1)^2} = \sqrt{(-4)^2 + (-2)^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$$
$$CD = \sqrt{(-2 - (-3))^2 + (-3 - (-1))^2} = \sqrt{1^2 + (-2)^2} = \sqrt{1 + 4} = \sqrt{5}$$
$$AD = \sqrt{(-2 - 1)^2 + (-3 - 1)^2} = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

Verifichiamo la relazione pitagorica:
$$AC^2 + CD^2 = (2\sqrt{5})^2 + (\sqrt{5})^2 = 20 + 5 = 25$$
$$AD^2 = 5^2 = 25$$
Poiché $AC^2 + CD^2 = AD^2$, l'ipotenusa è $AD$ e il triangolo è rettangolo con l'angolo retto in $C$.

*Calcolo del perimetro:*
Il perimetro $2p$ del triangolo $ACD$ è dato dalla somma dei lati:
$$2p = AC + CD + AD = 2\sqrt{5} + \sqrt{5} + 5 = 3\sqrt{5} + 5$$

*Calcolo dell'area:*
In un triangolo rettangolo, l'area $S$ è pari al semiprodotto dei cateti $AC$ e $CD$:
$$S = \frac{AC \cdot CD}{2} = \frac{2\sqrt{5} \cdot \sqrt{5}}{2} = \frac{2 \cdot 5}{2} = 5$$
