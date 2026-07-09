---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 3
tags:
  - "limite"
  - "forma indeterminata zero su zero"
  - "scomposizione polinomi"
  - "razionalizzazione"
---
# Problem Text
Calcolare il seguente limite:
$$ \lim_{x \to 1^+} \frac{\sqrt{x^3-1}}{{x^2-1}} $$

# Solution
Provando a sostituire il limite per $$x \to 1^+$$ si giunge subito a una forma indeterminata:
$$ \frac{\sqrt{1^3 - 1}}{1^2 - 1} = \left[ \frac{0}{0} \right] $$

Scomponiamo in fattori sia l'argomento della radice al numeratore (una differenza di cubi) sia il denominatore (una differenza di quadrati):
- $$ x^3 - 1 = (x - 1)(x^2 + x + 1) $$
- $$ x^2 - 1 = (x - 1)(x + 1) $$

Sostituiamo nel limite le scomposizioni, distribuendo la radice sul prodotto:
$$ \lim_{x \to 1^+} \frac{\sqrt{x - 1} \sqrt{x^2 + x + 1}}{(x - 1)(x + 1)} $$

Concentriamo ora l'attenzione sulla porzione della frazione che coinvolge i termini responsabili dello zero critico, ovvero $$(x-1)$$:
$$ \frac{\sqrt{x - 1}}{x - 1} $$
Essendo $$x \to 1^+$$, si ha che $$x - 1 > 0$$. Possiamo allora semplificare questo rapporto. Ricordando che $$A = (\sqrt{A})^2$$, possiamo scrivere il denominatore come $$(\sqrt{x - 1})^2$$:
$$ \frac{\sqrt{x - 1}}{(\sqrt{x - 1})^2} = \frac{1}{\sqrt{x - 1}} $$

Tornando al limite e applicando la semplificazione ottenuta:
$$ \lim_{x \to 1^+} \frac{\sqrt{x^2 + x + 1}}{\sqrt{x - 1} (x + 1)} $$

Valutiamo il limite sostituendo ancora una volta $$x = 1$$ nei vari fattori:
- Numeratore: $$ \sqrt{1^2 + 1 + 1} = \sqrt{3} $$
- Denominatore, primo fattore: $$ \sqrt{1^+ - 1} = \sqrt{0^+} = 0^+ $$
- Denominatore, secondo fattore: $$ 1 + 1 = 2 $$

Di conseguenza il denominatore nel suo complesso tende a $$0^+ \cdot 2 = 0^+$$.
Il risultato del limite è dunque il rapporto tra la costante non nulla positiva e lo zero da destra, che produce un infinito positivo:
$$ \left[ \frac{\sqrt{3}}{0^+} \right] = +\infty $$
