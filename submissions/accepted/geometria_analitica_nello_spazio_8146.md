---
year: 5
macro_area: "Geometria Analitica"
topic: "Geometria analitica nello spazio"
difficulty: 2
ai_generated: true
tags:
  - "sfera"
  - "piano tangente"
  - "distanza punto-piano"
  - "spazio cartesiano"
---
# Problem Text
Determinare l'equazione cartesiana della superficie sferica $\mathcal{S}$ con centro nel punto $C(1, -2, 3)$ e tangente al piano $\alpha$ di equazione cartesiana $2x - y + 2z - 1 = 0$.

# Solution
1. **Condizione di tangenza**: Una superficie sferica $\mathcal{S}$ è tangente a un piano $\alpha$ se e solo se la distanza del centro $C$ della sfera da $\alpha$ è pari al raggio $R$ della sfera:
$$ R = d(C, \alpha) $$

2. **Calcolo del raggio**: Applichiamo la formula per la distanza di un punto $C(x_C, y_C, z_C)$ da un piano $ax + by + cz + d = 0$:
$$ d(C, \alpha) = \frac{|a x_C + b y_C + c z_C + d|}{\sqrt{a^2 + b^2 + c^2}} $$

Sostituendo le coordinate di $C(1, -2, 3)$ e i coefficienti del piano $\alpha$:
$$ R = \frac{|2(1) - (-2) + 2(3) - 1|}{\sqrt{2^2 + (-1)^2 + 2^2}} $$
$$ R = \frac{|2 + 2 + 6 - 1|}{\sqrt{4 + 1 + 4}} = \frac{9}{\sqrt{9}} = \frac{9}{3} = 3 $$

3. **Determinazione dell'equazione cartesiana**: L'equazione cartesiana di una superficie sferica con centro $C(x_C, y_C, z_C)$ e raggio $R$ è:
$$ (x - x_C)^2 + (y - y_C)^2 + (z - z_C)^2 = R^2 $$

Sostituendo i valori trovati:
$$ (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 3^2 $$

4. **Sviluppo dei calcoli**: Sviluppiamo i quadrati dei binomi:
$$ x^2 - 2x + 1 + y^2 + 4y + 4 + z^2 - 6z + 9 = 9 $$

Semplificando i termini simili, si ricava l'equazione implicita della superficie sferica:
$$ x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0 $$
