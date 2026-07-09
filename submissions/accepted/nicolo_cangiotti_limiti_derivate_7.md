---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 2
tags:
  - "stima asintotica"
  - "asintotico"
  - "limite"
  - "infinito"
---
# Problem Text
Dimostrare che vale la seguente stima asintotica per $$x\to -\infty$$:
$$ \sqrt{9x^2-4} \sim -3x $$

# Solution
Due funzioni $$f(x)$$ e $$g(x)$$ si dicono *asintoticamente equivalenti* per $$x \to x_0$$ se il limite del loro rapporto per $$x \to x_0$$ è pari a $$1$$:
$$ \lim_{x \to x_0} \frac{f(x)}{g(x)} = 1 $$

Impostiamo quindi il limite richiesto per $$x \to -\infty$$:
$$ \lim_{x \to -\infty} \frac{\sqrt{9x^2-4}}{-3x} $$

Per risolverlo, raccogliamo il termine di grado massimo all'interno della radice al numeratore:
$$ \sqrt{x^2 \left(9 - \frac{4}{x^2}\right)} $$
Portiamo fuori l'$$x^2$$ dalla radice ricordando che, estraendo un quadrato da una radice di indice pari, compare il valore assoluto:
$$ \sqrt{x^2} \cdot \sqrt{9 - \frac{4}{x^2}} = |x| \sqrt{9 - \frac{4}{x^2}} $$

Dato che stiamo calcolando il limite per $$x \to -\infty$$, la variabile $$x$$ assume valori negativi ($$x < 0$$). Pertanto, togliendo il valore assoluto, dobbiamo aggiungere un segno meno:
$$ |x| = -x $$

Il numeratore diviene quindi:
$$ -x \sqrt{9 - \frac{4}{x^2}} $$

Sostituiamo nel limite iniziale:
$$ \lim_{x \to -\infty} \frac{-x \sqrt{9 - \frac{4}{x^2}}}{-3x} $$
Semplifichiamo il fattore $$-x$$ (sicuramente diverso da zero essendo in avvicinamento all'infinito):
$$ \lim_{x \to -\infty} \frac{\sqrt{9 - \frac{4}{x^2}}}{3} $$

Passando al limite, per $$x \to -\infty$$, il termine $$\frac{4}{x^2}$$ tende a $$0$$:
$$ \frac{\sqrt{9 - 0}}{3} = \frac{\sqrt{9}}{3} = \frac{3}{3} = 1 $$

Poiché il limite del rapporto è esattamente $$1$$, la stima asintotica è dimostrata.
