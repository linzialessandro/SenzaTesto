---
year: 5
macro_area: Analisi Matematica (Limiti)
topic: calcolo dei limiti
difficulty: 1
tags:
  - limite all'infinito
  - polinomi
---
# Problem Text
Calcola il valore del seguente limite per $x$ che tende ad infinito:
$$ \lim_{x \to +\infty} \frac{2x^2 - 3x + 1}{5x^2 + 4} $$

# Solution
Tentando di risolvere il limite per sostituzione diretta, ci troviamo di fronte a una forma indeterminata del tipo $\frac{\infty}{\infty}$.
Essendo il limite per $x \to \infty$ del rapporto tra due polinomi, l'andamento asintotico della funzione è dominato dai termini di grado massimo presenti al numeratore e al denominatore.

Per procedere in modo rigoroso, raccogliamo $x^2$ al numeratore e al denominatore:
$$ \lim_{x \to +\infty} \frac{x^2\left(2 - \frac{3}{x} + \frac{1}{x^2}\right)}{x^2\left(5 + \frac{4}{x^2}\right)} $$
Semplifichiamo il termine $x^2$ in comune (che è lecito fare, poiché $x \neq 0$ al limite):
$$ \lim_{x \to +\infty} \frac{2 - \frac{3}{x} + \frac{1}{x^2}}{5 + \frac{4}{x^2}} $$
Quando $x$ tende a $+\infty$, tutti i termini razionali della forma $\frac{k}{x^n}$ con esponente positivo tendono asintoticamente a $0$.
Sostituendo e semplificando i limiti, otteniamo:
$$ \frac{2 - 0 + 0}{5 + 0} = \frac{2}{5} $$
Il valore del limite cercato vale esattamente $\frac{2}{5}$.
