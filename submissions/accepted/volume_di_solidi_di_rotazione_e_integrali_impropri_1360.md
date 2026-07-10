---
year: 5
macro_area: "Analisi Matematica"
topic: "Volume di solidi di rotazione e integrali impropri"
difficulty: 4
tags:
  - "integrali impropri"
  - "volume"
  - "solido di rotazione"
  - "integrazione per parti"
ai_generated: true
---
# Problem Text
Determinare il volume del solido di rotazione ottenuto ruotando di un giro completo attorno all'asse $x$ la regione illimitata di piano compresa tra la curva di equazione $y = x e^{-x}$ e l'asse delle ascisse, nell'intervallo $[0, +\infty)$.

# Solution
Il volume $V$ del solido si ottiene calcolando il seguente integrale improprio:

$$
V = \pi \int_{0}^{+\infty} [f(x)]^2 \, dx = \pi \int_{0}^{+\infty} x^2 e^{-2x} \, dx
$$

Per definizione di integrale improprio si ha:

$$
V = \pi \lim_{t \to +\infty} \int_{0}^{t} x^2 e^{-2x} \, dx
$$

Calcoliamo l'integrale indefinito associato integrando per parti due volte. Poniamo $u = x^2$ e $dv = e^{-2x} \, dx$, da cui $du = 2x \, dx$ e $v = -\frac{1}{2}e^{-2x}$:

$$
\int x^2 e^{-2x} \, dx = -\frac{1}{2} x^2 e^{-2x} + \int x e^{-2x} \, dx
$$

Integriamo nuovamente per parti il secondo termine con $u = x$ e $dv = e^{-2x} \, dx$, da cui $du = dx$ e $v = -\frac{1}{2}e^{-2x}$:

$$
\int x e^{-2x} \, dx = -\frac{1}{2} x e^{-2x} + \frac{1}{2} \int e^{-2x} \, dx = -\frac{1}{2} x e^{-2x} - \frac{1}{4} e^{-2x}
$$

Sostituendo l'espressione trovata nell'equazione precedente, si ottiene la primitiva:

$$
\int x^2 e^{-2x} \, dx = e^{-2x} \left( -\frac{1}{2} x^2 - \frac{1}{2} x - \frac{1}{4} \right)
$$

Applichiamo ora l'operatore di integrazione definita tra $0$ e $t$:

$$
\int_{0}^{t} x^2 e^{-2x} \, dx = \left[ e^{-2x} \left( -\frac{1}{2} x^2 - \frac{1}{2} x - \frac{1}{4} \right) \right]_{0}^{t} = e^{-2t} \left( -\frac{1}{2} t^2 - \frac{1}{2} t - \frac{1}{4} \right) + \frac{1}{4}
$$

Calcoliamo il limite per $t \to +\infty$:

$$
\lim_{t \to +\infty} e^{-2t} \left( -\frac{1}{2} t^2 - \frac{1}{2} t - \frac{1}{4} \right) = 0
$$

poiché il termine esponenziale decrescente domina sulla componente polinomiale. 

Di conseguenza, il volume ricercato è pari a:

$$
V = \frac{\pi}{4}
$$
