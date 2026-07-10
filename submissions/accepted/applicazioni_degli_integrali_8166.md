---
year: 5
macro_area: "Analisi Matematica"
topic: "Applicazioni degli integrali"
difficulty: 3
tags:
  - "Integrali impropri"
  - "Solidi di rotazione"
  - "Volume di rotazione"
  - "Integrazione per parti"
ai_generated: true
---
# Problem Text
Calcolare il volume del solido di rotazione ottenuto ruotando di un giro completo attorno all'asse $x$ la regione illimitata di piano compresa tra il grafico della funzione $f(x) = x e^{-x}$, l'asse $x$ e la retta $x = 0$, per $x \ge 0$.

# Solution
Il volume $V$ del solido generato dalla rotazione attorno all'asse $x$ di una regione illimitata è definito dall'integrale improprio:

$$
V = \pi \int_{0}^{+\infty} [f(x)]^2 \, dx = \pi \int_{0}^{+\infty} x^2 e^{-2x} \, dx
$$

Iniziamo determinando la primitiva dell'integrale indefinito associato tramite integrazione per parti. Poniamo $u = x^2$ e $dv = e^{-2x} \, dx$, da cui si ricava $du = 2x \, dx$ e $v = -\frac{1}{2} e^{-2x}$:

$$
\int x^2 e^{-2x} \, dx = -\frac{1}{2}x^2 e^{-2x} + \int x e^{-2x} \, dx
$$

Applichiamo nuovamente l'integrazione per parti al secondo integrale, scegliendo questa volta $u = x$ e $dv = e^{-2x} \, dx$:

$$
\int x e^{-2x} \, dx = -\frac{1}{2}x e^{-2x} + \frac{1}{2} \int e^{-2x} \, dx = -\frac{1}{2}x e^{-2x} - \frac{1}{4} e^{-2x}
$$

Sostituendo la seconda espressione nella prima, otteniamo una primitiva $F(x)$ della funzione integranda:

$$
F(x) = e^{-2x} \left( -\frac{1}{2}x^2 - \frac{1}{2}x - \frac{1}{4} \right)
$$

Ora calcoliamo l'integrale improprio calcolando il limite per l'estremo superiore $t \to +\infty$:

$$
\int_{0}^{+\infty} x^2 e^{-2x} \, dx = \lim_{t \to +\infty} \left[ e^{-2x} \left( -\frac{1}{2}x^2 - \frac{1}{2}x - \frac{1}{4} \right) \right]_0^t
$$

Per $t \to +\infty$, l'andamento esponenziale a denominatore domina sul polinomio a numeratore (per la gerarchia degli infiniti):

$$
\lim_{t \to +\infty} e^{-2t} \left( -\frac{1}{2}t^2 - \frac{1}{2}t - \frac{1}{4} \right) = 0
$$

Valutando invece la primitiva nell'estremo inferiore $x = 0$, otteniamo:

$$
e^{0} \left( 0 - 0 - \frac{1}{4} \right) = -\frac{1}{4}
$$

Sottraendo i due risultati secondo il teorema fondamentale del calcolo integrale, il valore dell'integrale improprio è:

$$
0 - \left( -\frac{1}{4} \right) = \frac{1}{4}
$$

Moltiplicando per il fattore costante $\pi$, otteniamo infine il volume cercato:

$$
V = \frac{\pi}{4}
$$
