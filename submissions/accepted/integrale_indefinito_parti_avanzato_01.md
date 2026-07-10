---
year: 5
macro_area: Analisi
topic: integrali indefiniti
difficulty: 4
tags:
  - per parti
  - ricorsione
ai_generated: true
---
# Problem Text
Calcola il seguente integrale per parti ciclico:
$$ \int e^x \sin(x) \, dx $$

# Solution
Integriamo per parti scegliendo come fattore differenziale l'esponenziale: 
- $f'(x) = e^x \implies f(x) = e^x$ 
- $g(x) = \sin(x) \implies g'(x) = \cos(x)$

Otteniamo:
$$ \int e^x \sin(x) \, dx = e^x \sin(x) - \int e^x \cos(x) \, dx $$

Applichiamo di nuovo l'integrazione per parti sull'integrale a destra, con:
- $f'(x) = e^x \implies f(x) = e^x$
- $g(x) = \cos(x) \implies g'(x) = -\sin(x)$

Sostituendo:
$$ \int e^x \cos(x) \, dx = e^x \cos(x) - \int e^x (-\sin(x)) \, dx = e^x \cos(x) + \int e^x \sin(x) \, dx $$

Andiamo ora a inserire questa espressione nell'equazione di partenza:
$$ \int e^x \sin(x) \, dx = e^x \sin(x) - \left( e^x \cos(x) + \int e^x \sin(x) \, dx \right) $$

Spostando l'integrale incognito a primo membro otteniamo:
$$ 2 \int e^x \sin(x) \, dx = e^x (\sin(x) - \cos(x)) $$

Dividendo per 2 e aggiungendo la costante di integrazione, il risultato finale è:
$$ \int e^x \sin(x) \, dx = \frac{e^x (\sin(x) - \cos(x))}{2} + C $$
