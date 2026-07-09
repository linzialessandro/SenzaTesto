---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 1
tags:
  - "calcolo limiti"
  - "divergenza"
  - "limiti notevoli"
---
# Problem Text
Calcolare il seguente limite:
$$ \lim_{x \to 0}\frac{e^{x^2-1}}{x^2} $$

# Solution
Sostituendo direttamente il valore $$x = 0$$ nell'espressione, valutiamo il comportamento del numeratore e del denominatore.
1. **Numeratore:**
   Per $$x \to 0$$, l'esponente $$x^2-1$$ tende a $$-1$$. Dunque l'esponenziale tende a:
   $$ e^{0 - 1} = e^{-1} = \frac{1}{e} $$
   Il numeratore è un numero reale finito e strettamente positivo (poiché $$\frac{1}{e} \approx 0.368 > 0$$).

2. **Denominatore:**
   Per $$x \to 0$$, la quantità $$x^2$$ si annulla, ma lo fa assumendo valori strettamente positivi essendo un quadrato. Dunque tende a $$0^+$$.

Andando a ricomporre la frazione, non otteniamo nessuna forma indeterminata.
Abbiamo il rapporto tra una quantità costante positiva e uno zero "da destra":
$$ \lim_{x \to 0}\frac{e^{x^2-1}}{x^2} = \left[ \frac{1/e}{0^+} \right] = +\infty $$
Il limite diverge a più infinito.
