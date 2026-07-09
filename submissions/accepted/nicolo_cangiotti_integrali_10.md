---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "Teorema di Lagrange"
  - "verifica ipotesi"
  - "calcolo derivata"
  - "funzione esponenziale"
---
# Problem Text
Dopo aver verificato che valgono le ipotesi del *Teorema di Lagrange* per la funzione
$$ f(x) = e^x \quad \text{con } x \in [0, 1] $$
determinare il punto (o i punti) che soddisfa la tesi del teorema.

# Solution
**1. Verifica delle ipotesi del Teorema di Lagrange**
Il teorema richiede che:
1. $$f(x)$$ sia continua nell'intervallo chiuso $$[0, 1]$$. L'esponenziale $$e^x$$ è continua per ogni $$x \in \mathbb{R}$$, dunque anche in $$[0, 1]$$.
2. $$f(x)$$ sia derivabile nell'intervallo aperto $$(0, 1)$$. Parimenti, la funzione esponenziale è dotata di derivata su tutto $$\mathbb{R}$$, quindi è derivabile anche in $$(0, 1)$$.

Le ipotesi sono verificate, quindi esiste per il teorema un punto $$c \in (0, 1)$$ tale che:
$$ f'(c) = \frac{f(1) - f(0)}{1 - 0} $$

**2. Calcolo dei valori agli estremi dell'intervallo**
Valutiamo la funzione negli estremi:
- $$f(0) = e^0 = 1$$
- $$f(1) = e^1 = e$$

Il rapporto incrementale tra i punti estremi dell'intervallo (coefficiente angolare della secante) vale:
$$ m = \frac{e - 1}{1 - 0} = e - 1 $$

**3. Calcolo della derivata e individuazione del punto $$c$$**
Calcoliamo la derivata prima della funzione in gioco (la derivata dell'esponenziale è l'esponenziale stesso):
$$ f'(x) = e^x $$
Valutiamo la derivata nel punto $$c$$ e poniamola uguale a $$m$$ come detta la formula di Lagrange:
$$ e^c = e - 1 $$
Risolviamo applicando il logaritmo naturale ad ambo i membri:
$$ \ln(e^c) = \ln(e - 1) \implies c = \ln(e - 1) $$

Verifichiamo che questo valore appartenga all'intervallo. Essendo $$e \approx 2.718$$, abbiamo $$e - 1 \approx 1.718$$. Poiché il numero è compreso tra $$1$$ e $$e$$, ed essendo il logaritmo una funzione crescente con $$\ln(1) = 0$$ e $$\ln(e) = 1$$, ne deduciamo che $$\ln(1.718)$$ cade certamente tra $$0$$ e $$1$$. 
Quindi $$c = \ln(e - 1)$$ appartiene all'intervallo aperto $$(0, 1)$$.
