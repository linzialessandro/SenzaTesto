---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivate"
difficulty: 2
tags:
  - "rapporto incrementale"
  - "definizione di derivata"
  - "polinomi"
---
# Problem Text
Verificare **tramite la definizione** che la derivata prima di $$f(x)=x^3$$ è $$f'(x)=3x^2$$.

# Solution
La derivata prima di una funzione $$f(x)$$ si definisce come il limite per l'incremento $$h \to 0$$ del suo rapporto incrementale:
$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$

Calcoliamo il limite per la funzione $$f(x) = x^3$$:
$$ f'(x) = \lim_{h \to 0} \frac{(x+h)^3 - x^3}{h} $$

Sviluppiamo il cubo del binomio a numeratore $$(A+B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$$:
$$ (x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3 $$

Sostituendo l'espansione nel limite otteniamo:
$$ \lim_{h \to 0} \frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h} $$
I termini $$x^3$$ si elidono:
$$ \lim_{h \to 0} \frac{3x^2h + 3xh^2 + h^3}{h} $$

Mettiamo ora a fattor comune la variabile $$h$$ al numeratore in modo da semplificare la criticità al denominatore che rende indeterminata la forma:
$$ \lim_{h \to 0} \frac{h(3x^2 + 3xh + h^2)}{h} = \lim_{h \to 0} (3x^2 + 3xh + h^2) $$

Passando infine al limite, i termini contenenti $$h$$ si annullano:
$$ 3x^2 + 3x(0) + (0)^2 = 3x^2 $$

È così verificato che $$D[x^3] = 3x^2$$.
