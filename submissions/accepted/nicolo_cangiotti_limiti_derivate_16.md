---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "regole di derivazione"
  - "derivata del quoziente"
  - "valutazione in un punto"
---
# Problem Text
Calcolare la derivata prima della seguente funzione nel punto di ascissa $$x=1$$:
$$ f(x) = \frac{x^2+\ln(x)}{e^x} $$

# Solution
Prima di valutare la derivata nel punto richiesto, occorre calcolarne l'espressione analitica applicando la regola di derivazione del quoziente $$D\left[\frac{N}{D}\right] = \frac{N'D - ND'}{D^2}$$:
- Numeratore: $$N(x) = x^2 + \ln(x) \implies N'(x) = 2x + \frac{1}{x}$$
- Denominatore: $$D(x) = e^x \implies D'(x) = e^x$$

Sostituiamo le espressioni nella formula:
$$ f'(x) = \frac{\left(2x + \frac{1}{x}\right)e^x - (x^2 + \ln(x))e^x}{(e^x)^2} $$

Possiamo raccogliere l'esponenziale $$e^x$$ al numeratore e semplificarlo con uno degli esponenziali al denominatore:
$$ f'(x) = \frac{e^x \left(2x + \frac{1}{x} - x^2 - \ln(x)\right)}{e^{2x}} = \frac{2x + \frac{1}{x} - x^2 - \ln(x)}{e^x} $$

Ora valutiamo la derivata prima appena trovata nel punto $$x = 1$$:
$$ f'(1) = \frac{2(1) + \frac{1}{1} - 1^2 - \ln(1)}{e^1} $$

Ricordando che $$\ln(1) = 0$$, eseguiamo i calcoli a numeratore:
$$ f'(1) = \frac{2 + 1 - 1 - 0}{e} = \frac{2}{e} $$
La derivata nel punto di ascissa $$x = 1$$ vale $$\frac{2}{e}$$.
