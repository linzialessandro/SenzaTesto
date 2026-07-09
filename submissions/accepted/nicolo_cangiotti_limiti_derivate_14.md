---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "regole di derivazione"
  - "derivata del quoziente"
  - "funzioni goniometriche"
---
# Problem Text
Calcolare la derivata prima della seguente funzione:
$$ f(x) = \frac{\cos(x)+\sin(x)}{\cos(x)-\sin(x)} $$

# Solution
Essendo la funzione costituita da un rapporto, occorre applicare la **regola di derivazione del quoziente**:
$$ D\left[\frac{N(x)}{D(x)}\right] = \frac{N'(x)D(x) - N(x)D'(x)}{[D(x)]^2} $$

Calcoliamo preliminarmente le derivate di numeratore e denominatore:
- $$N(x) = \cos(x) + \sin(x) \implies N'(x) = -\sin(x) + \cos(x)$$
- $$D(x) = \cos(x) - \sin(x) \implies D'(x) = -\sin(x) - \cos(x) = -(\cos(x) + \sin(x))$$

Assembliamo la formula complessiva:
$$ f'(x) = \frac{(-\sin(x) + \cos(x))(\cos(x) - \sin(x)) - (\cos(x) + \sin(x))(-(\cos(x) + \sin(x)))}{(\cos(x) - \sin(x))^2} $$

Osserviamo le parentesi e notiamo la presenza di due quadrati di binomio. Riscriviamo il numeratore:
$$ (-\sin(x) + \cos(x))(\cos(x) - \sin(x)) = (\cos(x) - \sin(x))^2 $$
$$ - (\cos(x) + \sin(x))(-(\cos(x) + \sin(x))) = + (\cos(x) + \sin(x))^2 $$

Sostituendo:
$$ f'(x) = \frac{(\cos(x) - \sin(x))^2 + (\cos(x) + \sin(x))^2}{(\cos(x) - \sin(x))^2} $$
Sviluppiamo i due quadrati al numeratore sfruttando la formula $$(A\pm B)^2 = A^2 \pm 2AB + B^2$$:
$$ \cos^2(x) - 2\sin(x)\cos(x) + \sin^2(x) + \cos^2(x) + 2\sin(x)\cos(x) + \sin^2(x) $$
I doppi prodotti opposti si elidono. Ricordando poi l'identità goniometrica fondamentale $$\sin^2(x) + \cos^2(x) = 1$$:
$$ 1 - 2\sin(x)\cos(x) + 1 + 2\sin(x)\cos(x) = 2 $$

Pertanto la derivata prima, estremamente compatta, è:
$$ f'(x) = \frac{2}{(\cos(x) - \sin(x))^2} $$
