---
year: 2
macro_area: "Geometria piana"
topic: "Teoremi di Euclide e circonferenza inscritta"
difficulty: 2
ai_generated: true
tags:
  - "geometria piana"
  - "teorema di Euclide"
  - "circonferenza inscritta"
  - "triangolo rettangolo"
---
# Problem Text
In un triangolo rettangolo $ABC$, retto in $C$, l'ipotenusa $AB$ misura $25\text{ cm}$ e la proiezione del cateto $AC$ sull'ipotenusa misura $9\text{ cm}$. Determinare la misura del raggio della circonferenza inscritta nel triangolo.

# Solution
1. **Determinazione della proiezione del secondo cateto**:
La proiezione $HB$ del cateto $BC$ sull'ipotenusa $AB$ si ricava per differenza:

$$
HB = AB - AH = 25 - 9 = 16\text{ cm}
$$

2. **Calcolo della lunghezza dei cateti tramite il Primo Teorema di Euclide**:
Per il primo teorema di Euclide, ciascun cateto è medio proporzionale tra l'ipotenusa e la propria proiezione su di essa:

$$
AC^2 = AB \cdot AH = 25 \cdot 9 = 225 \implies AC = \sqrt{225} = 15\text{ cm}
$$

$$
BC^2 = AB \cdot HB = 25 \cdot 16 = 400 \implies BC = \sqrt{400} = 20\text{ cm}
$$

3. **Calcolo del perimetro e del semiperimetro**:
Il perimetro $P$ del triangolo è:

$$
P = AC + BC + AB = 15 + 20 + 25 = 60\text{ cm}
$$

Il semiperimetro $p$ è:

$$
p = \frac{P}{2} = \frac{60}{2} = 30\text{ cm}
$$

4. **Calcolo dell'area del triangolo**:
L'area $A$ del triangolo rettangolo è data dal semiprodotto dei cateti:

$$
A = \frac{AC \cdot BC}{2} = \frac{15 \cdot 20}{2} = 150\text{ cm}^2
$$

5. **Calcolo del raggio della circonferenza inscritta**:
Poiché per un poligono circoscritto l'area è uguale al prodotto tra semiperimetro e raggio della circonferenza inscritta ($A = p \cdot r$), si ottiene:

$$
r = \frac{A}{p} = \frac{150}{30} = 5\text{ cm}
$$
