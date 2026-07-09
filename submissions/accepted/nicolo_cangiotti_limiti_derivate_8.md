---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 2
tags:
  - "stima asintotica"
  - "limiti notevoli"
  - "confronto locale"
---
# Problem Text
Dimostrare che vale la seguente stima asintotica per $$x\to 0$$:
$$ \sin(x) \sim \ln(1+x) $$

# Solution
Due infinitesimi (o due funzioni in generale) $$f(x)$$ e $$g(x)$$ sono *asintoticamente equivalenti* in un intorno di $$x_0$$ (cioè si ha $$f(x) \sim g(x)$$) se il limite del loro rapporto tende a $$1$$:
$$ \lim_{x \to x_0} \frac{f(x)}{g(x)} = 1 $$

Per dimostrare la relazione richiesta, impostiamo il limite per $$x \to 0$$ del rapporto tra le due funzioni proposte:
$$ \lim_{x \to 0} \frac{\sin(x)}{\ln(1+x)} $$

Questo limite si presenta nella forma indeterminata $$\left[\frac{0}{0}\right]$$. Per risolverlo senza fare uso del Teorema di De l'Hôpital, possiamo sfruttare la proprietà invariantiva delle frazioni, dividendo sia il numeratore che il denominatore per $$x$$ (ipotizzando $$x \neq 0$$):
$$ \lim_{x \to 0} \frac{\frac{\sin(x)}{x}}{\frac{\ln(1+x)}{x}} $$

A questo punto riconosciamo l'innesco di due **limiti notevoli** fondamentali:
1. Al numeratore: $$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$
2. Al denominatore: $$\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$$

Essendo il limite del quoziente uguale al quoziente dei limiti (purché il limite del denominatore sia diverso da zero), calcoliamo:
$$ \frac{\lim_{x \to 0} \frac{\sin(x)}{x}}{\lim_{x \to 0} \frac{\ln(1+x)}{x}} = \frac{1}{1} = 1 $$

Avendo dimostrato che il limite del rapporto per $$x \to 0$$ fa $$1$$, concludiamo che la stima asintotica $$\sin(x) \sim \ln(1+x)$$ è **vera**.
