---
year: 5
macro_area: "Analisi Matematica"
topic: "Applicazioni dell'integrale e integrali impropri"
difficulty: 3
ai_generated: true
tags:
  - "solidi di rotazione"
  - "integrali impropri"
  - "metodo dei dischi"
  - "integrazione per parti"
---
# Problem Text
Calcolare il volume del solido di rotazione generato dalla rotazione intorno all'asse $x$ della regione piana illimitata $R$, posta nel primo quadrante, compresa tra la curva di equazione $y = \frac{\ln x}{x^2}$, l'asse delle ascisse e la retta verticale $x = 1$.

# Solution
La regione illimitata $R$ è descritta dalle condizioni $x \ge 1$ e $0 \le y \le \frac{\ln x}{x^2}$. Il volume $V$ del solido ottenuto ruotando $R$ attorno all'asse delle ascisse si calcola applicando il metodo dei dischi e la definizione di integrale improprio:

$$
V = \pi \int_{1}^{+\infty} [f(x)]^2 \, dx = \pi \lim_{t \to +\infty} \int_{1}^{t} \frac{\ln^2 x}{x^4} \, dx
$$

Determiniamo la primitiva generale della funzione integranda integrando per parti. Ponendo $u = \ln^2 x$ e $dv = x^{-4} \, dx$, da cui si ottiene $du = \frac{2\ln x}{x} \, dx$ e $v = -\frac{1}{3x^3}$, si ha:

$$
\int \frac{\ln^2 x}{x^4} \, dx = -\frac{\ln^2 x}{3x^3} + \frac{2}{3} \int \frac{\ln x}{x^4} \, dx
$$

Applichiamo nuovamente l'integrazione per parti all'integrale residuo, con $u = \ln x$ e $dv = x^{-4} \, dx$:

$$
\int \frac{\ln x}{x^4} \, dx = -\frac{\ln x}{3x^3} + \frac{1}{3} \int x^{-4} \, dx = -\frac{\ln x}{3x^3} - \frac{1}{9x^3}
$$

Sostituendo e semplificando, la famiglia delle primitive $F(x)$ è data da:

$$
F(x) = -\frac{\ln^2 x}{3x^3} - \frac{2\ln x}{9x^3} - \frac{2}{27x^3}
$$

Calcoliamo il limite per l'integrazione impropria all'infinito: per la gerarchia degli infiniti, le crescite polinomiali al denominatore dominano quelle logaritmiche al numeratore, pertanto $\lim_{t \to +\infty} F(t) = 0$. Valutando la primitiva all'estremo inferiore, si ha $F(1) = -\frac{2}{27}$.

Applicando il teorema fondamentale del calcolo integrale ed effettuando il limite, si ottiene:

$$
\int_{1}^{+\infty} \frac{\ln^2 x}{x^4} \, dx = \lim_{t \to +\infty} F(t) - F(1) = 0 - \left(-\frac{2}{27}\right) = \frac{2}{27}
$$

Il volume finale del solido cercato è dunque:

$$
V = \frac{2}{27}\pi
$$
