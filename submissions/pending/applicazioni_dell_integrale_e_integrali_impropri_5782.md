---
year: 5
macro_area: "Analisi Matematica"
topic: "Applicazioni dell'integrale e integrali impropri"
difficulty: 3
ai_generated: true
tags:
  - "volume di rotazione"
  - "metodo dei dischi"
  - "integrali impropri"
  - "integrazione per parti"
---
# Problem Text
Si determini il volume del solido di rotazione ottenuto ruotando di un giro completo attorno all'asse $x$ la regione illimitata di piano compresa tra il grafico della funzione $f(x) = \sqrt{x} e^{-x}$, l'asse $x$ e posta nell'intervallo $[0, +\infty)$.

# Solution
1. Utilizziamo il metodo dei dischi per esprimere il volume $V$ del solido ottenuto ruotando la regione attorno all'asse $x$:

$$
V = \pi \int_{0}^{+\infty} [f(x)]^2 \, dx = \pi \int_{0}^{+\infty} x e^{-2x} \, dx
$$

2. Poiché l'intervallo di integrazione è illimitato, l'integrale è improprio di prima specie e va definito mediante passaggio al limite:

$$
\int_{0}^{+\infty} x e^{-2x} \, dx = \lim_{b \to +\infty} \int_{0}^{b} x e^{-2x} \, dx
$$

3. Calcoliamo la primitiva generica della funzione integranda integrando per parti, scegliendo come fattore finito $u(x) = x$ e come fattore differenziale $v'(x) = e^{-2x}$:

$$
\int x e^{-2x} \, dx = -\frac{1}{2} x e^{-2x} - \int \left( -\frac{1}{2} e^{-2x} \right) \, dx = -\frac{1}{2} x e^{-2x} - \frac{1}{4} e^{-2x} + C
$$

Raccogliendo per una scrittura più compatta:

$$
F(x) = -\frac{2x+1}{4} e^{-2x}
$$

4. Applichiamo il teorema fondamentale del calcolo integrale sull'intervallo $[0, b]$:

$$
\int_{0}^{b} x e^{-2x} \, dx = \left[ -\frac{2x+1}{4} e^{-2x} \right]_{0}^{b} = -\frac{2b+1}{4} e^{-2b} + \frac{1}{4}
$$

5. Valutiamo il limite per l'estremo superiore che tende a infinito:

$$
\lim_{b \to +\infty} \left( -\frac{2b+1}{4e^{2b}} + \frac{1}{4} \right) = 0 + \frac{1}{4} = \frac{1}{4}
$$

Il primo addendo tende a zero per la gerarchia degli infiniti, in quanto la funzione esponenziale a denominatore cresce più rapidamente rispetto al polinomio lineare a numeratore.

6. Moltiplicando il risultato così ottenuto per il coefficiente $\pi$, si perviene infine al volume cercato:

$$
V = \frac{\pi}{4}
$$
