---
year: 5
macro_area: "Analisi Matematica"
topic: "Applicazioni dell'integrale"
difficulty: 2
ai_generated: true
tags:
  - "integrali"
  - "lunghezza d'arco"
  - "applicazioni dell'integrale"
  - "quinto anno"
---
# Problem Text
Calcolare la lunghezza dell'arco della curva di equazione

$$
y = \frac{2}{3}x^{\frac{3}{2}}
$$

nell'intervallo $[0, 3]$.

# Solution
Per calcolare la lunghezza $L$ dell'arco di una curva di classe $C^1$ definita dall'equazione $y = f(x)$ nell'intervallo $[a, b]$, si applica la formula:

$$
L = \int_{a}^{b} \sqrt{1 + [f'(x)]^2} \, dx
$$

1. **Calcolo della derivata prima:**
Data la funzione $f(x) = \frac{2}{3}x^{\frac{3}{2}}$, la sua derivata prima è:

$$
f'(x) = \frac{2}{3} \cdot \frac{3}{2} x^{\frac{1}{2}} = \sqrt{x}
$$

2. **Determinazione dell'integrando:**
Elevando la derivata al quadrato e sommando $1$:

$$
1 + [f'(x)]^2 = 1 + (\sqrt{x})^2 = 1 + x
$$

3. **Impostazione dell'integrale definito:**
Sostituendo gli estremi di integrazione $a = 0$ e $b = 3$:

$$
L = \int_{0}^{3} \sqrt{1 + x} \, dx
$$

4. **Calcolo della primitiva:**
Riconducendosi all'integrale immediato della funzione potenza $\int (1+x)^{\frac{1}{2}} \, dx$:

$$
\int \sqrt{1+x} \, dx = \frac{2}{3}(1+x)^{\frac{3}{2}} + c
$$

5. **Valutazione mediante la formula di Torricelli-Barrow:**

$$
L = \left[ \frac{2}{3}(1+x)^{\frac{3}{2}} \right]_{0}^{3} = \frac{2}{3} \left( (1+3)^{\frac{3}{2}} - (1+0)^{\frac{3}{2}} \right)
$$

$$
L = \frac{2}{3} \left( 4^{\frac{3}{2}} - 1 \right) = \frac{2}{3} (8 - 1) = \frac{14}{3}
$$

La lunghezza dell'arco di curva è $L = \frac{14}{3}$.
