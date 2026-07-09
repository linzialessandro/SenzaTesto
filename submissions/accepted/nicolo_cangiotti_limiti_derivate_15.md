---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 1
tags:
  - "regole di derivazione"
  - "derivata del prodotto"
  - "funzione logaritmica"
  - "funzione esponenziale"
---
# Problem Text
Calcolare la derivata prima della seguente funzione:
$$ f(x) = \ln(x)\cdot e^x $$

# Solution
La funzione in oggetto è il prodotto tra una funzione logaritmica e una funzione esponenziale. Per calcolarne la derivata occorre applicare la **regola di derivazione del prodotto** (regola di Leibniz):
$$ D[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x) $$

Nel nostro caso:
- La derivata del primo fattore è $$D[\ln(x)] = \frac{1}{x}$$
- La derivata del secondo fattore è $$D[e^x] = e^x$$

Applicando la regola passo dopo passo:
$$ f'(x) = \left( \frac{1}{x} \right) \cdot e^x + \ln(x) \cdot (e^x) $$

Raccogliendo a fattor comune l'esponenziale $$e^x$$, che compare in entrambi gli addendi, la formula si può riscrivere in modo elegante:
$$ f'(x) = e^x \left( \frac{1}{x} + \ln(x) \right) $$
