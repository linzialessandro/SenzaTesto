---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 3
tags:
  - "rapporto incrementale"
  - "definizione di derivata"
  - "funzione logaritmica"
  - "limiti notevoli"
---
# Problem Text
Verificare **tramite la definizione** che la derivata prima di $$f(x)=\ln(x)$$ è $$f'(x)=1/x$$.

# Solution
La definizione di derivata come limite del rapporto incrementale per $$f(x) = \ln(x)$$ diviene:
$$ f'(x) = \lim_{h \to 0} \frac{\ln(x+h) - \ln(x)}{h} $$

Per le proprietà dei logaritmi ($$\ln a - \ln b = \ln(a/b)$$), la differenza a numeratore può essere compattata in un unico logaritmo:
$$ \lim_{h \to 0} \frac{1}{h} \ln\left(\frac{x+h}{x}\right) = \lim_{h \to 0} \frac{1}{h} \ln\left(1 + \frac{h}{x}\right) $$

L'espressione somiglia molto a quella del limite notevole del logaritmo: $$\lim_{t \to 0} \frac{\ln(1+t)}{t} = 1$$.
Per sfruttare questo limite notevole, effettuiamo un cambio di variabile ponendo $$t = \frac{h}{x}$$.
Dal momento che consideriamo $$x$$ fissato e stiamo facendo tendere $$h \to 0$$, avremo che pure $$t \to 0$$.
Dalla relazione esplicitiamo l'incremento: $$h = t \cdot x$$.

Sostituendo tutto nel limite otteniamo:
$$ \lim_{t \to 0} \frac{1}{tx} \ln(1+t) = \lim_{t \to 0} \left( \frac{1}{x} \cdot \frac{\ln(1+t)}{t} \right) $$
Essendo $$x$$ un parametro indipendente dal limite in $$t$$, può esserne portato fuori (teorema del limite del prodotto):
$$ \frac{1}{x} \cdot \lim_{t \to 0} \frac{\ln(1+t)}{t} $$
Il limite ora corrisponde esattamente alla forma notevole, che fa 1:
$$ \frac{1}{x} \cdot 1 = \frac{1}{x} $$

Abbiamo verificato tramite la definizione che la derivata è $$f'(x) = \frac{1}{x}$$.
