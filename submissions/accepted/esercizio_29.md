---
year: 5
macro_area: Analisi Matematica (Derivate)
topic: regole di derivazione
difficulty: 1
tags:
  - derivata di un polinomio
  - calcolo
ai_generated: true
---
# Problem Text
Calcola l'espressione analitica della derivata prima della seguente funzione polinomiale:
$$ f(x) = 3x^4 - 2x^3 + 5x - 7 $$

# Solution
Per la proprietà di linearità, la derivata di una somma algebrica di funzioni equivale semplicemente alla somma (o differenza) delle derivate delle singole funzioni.

La regola fondamentale di derivazione per una potenza generica $x^n$ afferma che la derivata è data da $n \cdot x^{n-1}$. Se la potenza possiede un coefficiente moltiplicativo costante, tale costante viene semplicemente mantenuta e moltiplicata.
Applichiamo la regola a ciascun termine in modo sequenziale:
- Derivata di $3x^4$: $3 \cdot 4x^3 = 12x^3$
- Derivata di $-2x^3$: $-2 \cdot 3x^2 = -6x^2$
- Derivata di $5x$: il termine lineare $x$ ha derivata $1$, quindi $5 \cdot 1 = 5$
- Derivata della costante isolata $-7$: una costante ha sempre derivata pari a $0$

Sommando i vari contributi elementari calcolati, l'espressione formale della derivata prima $f'(x)$ è:
$$ f'(x) = 12x^3 - 6x^2 + 5 $$
