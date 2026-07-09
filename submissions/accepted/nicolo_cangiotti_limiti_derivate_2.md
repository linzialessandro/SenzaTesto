---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 2
tags:
  - "limite"
  - "infinito"
  - "teorema del confronto"
  - "teorema dei due carabinieri"
---
# Problem Text
Calcolare il seguente limite:
$$ \lim_{x\to + \infty} \frac{\sin(x)}{x} $$

# Solution
Il limite si presenta inizialmente nella forma indeterminata derivante dal fatto che il limite per $$x \to +\infty$$ di $$\sin(x)$$ non esiste, e il denominatore diverge all'infinito.
Per risolverlo occorre far ricorso al **Teorema del confronto** (o dei due carabinieri).

Partiamo dalla proprietà fondamentale della funzione seno, che è limitata e codominio compreso tra -1 e 1 per qualsiasi $$x \in \mathbb{R}$$:
$$ -1 \le \sin(x) \le 1 $$

Dato che stiamo studiando il limite per $$x \to +\infty$$, possiamo assumere $$x > 0$$. Dividendo l'intera disuguaglianza per una quantità positiva, i versi restano inalterati:
$$ -\frac{1}{x} \le \frac{\sin(x)}{x} \le \frac{1}{x} $$

Abbiamo quindi racchiuso la nostra funzione tra due altre funzioni. Calcoliamo i limiti per $$x \to +\infty$$ delle due funzioni maggiorante e minorante:
- $$ \lim_{x\to +\infty} -\frac{1}{x} = 0 $$
- $$ \lim_{x\to +\infty} \frac{1}{x} = 0 $$

Entrambe le funzioni laterali convergono allo stesso limite (zero). Di conseguenza, per il Teorema del confronto, anche la funzione racchiusa in mezzo deve tendere allo stesso valore.

$$ \lim_{x\to + \infty} \frac{\sin(x)}{x} = 0 $$
