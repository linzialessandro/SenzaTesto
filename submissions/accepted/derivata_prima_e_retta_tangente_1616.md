---
year: 5
macro_area: "Analisi Matematica"
topic: "Derivata prima e retta tangente"
difficulty: 2
ai_generated: true
tags:
  - "derivate"
  - "retta tangente"
  - "regola del rapporto"
  - "significato geometrico della derivata"
---
# Problem Text
Determinare l'equazione della retta tangente al grafico della funzione $f(x) = \frac{\ln(x)}{x}$ nel punto di ascissa $x_0 = 1$.

# Solution
Per determinare l'equazione della retta tangente al grafico di $f(x)$ nel punto $x_0 = 1$, si applicano il significato geometrico della derivata prima e le regole di derivazione.

1. **Ordinata del punto di tangenza**:
Valutiamo la funzione in $x_0 = 1$:

$$
f(1) = \frac{\ln(1)}{1} = 0
$$

Il punto di tangenza ha coordinate $P(1, 0)$.

2. **Calcolo della derivata prima**:
La funzione è definita per $x > 0$. Applicando la regola del rapporto per la derivazione:

$$
f'(x) = \frac{D[\ln(x)] \cdot x - \ln(x) \cdot D[x]}{x^2} = \frac{\frac{1}{x} \cdot x - \ln(x) \cdot 1}{x^2} = \frac{1 - \ln(x)}{x^2}
$$

3. **Coefficiente angolare della retta tangente**:
Per il significato geometrico della derivata, il coefficiente angolare $m$ è il valore assunto da $f'(x)$ in $x_0 = 1$:

$$
m = f'(1) = \frac{1 - \ln(1)}{1^2} = 1
$$

4. **Equazione della retta tangente**:
Utilizzando la formula del fascio proprio di rette passante per $P(x_0, f(x_0))$ con pendenza $m = f'(x_0)$:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

Sostituendo i valori ottenuti:

$$
y - 0 = 1 \cdot (x - 1) \implies y = x - 1
$$
