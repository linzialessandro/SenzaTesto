---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Studio della monotonia e ricerca dei punti di massimo e minimo relativo"
difficulty: 2
ai_generated: true
tags:
  - "studio di funzione"
  - "derivata prima"
  - "monotonia"
  - "massimi e minimi relativi"
  - "punti stazionari"
---
# Problem Text
Determinare gli intervalli di crescenza e decrescenza e le coordinate dei punti di massimo e minimo relativo della funzione $f: \mathbb{R} \to \mathbb{R}$ definita da:

$$
f(x) = (x^2 - 3)e^x
$$

# Solution
1. **Dominio e derivabilità**: La funzione $f(x) = (x^2 - 3)e^x$ è definita e derivabile su tutto $\mathbb{R}$, in quanto prodotto di funzioni elementari continue e derivabili.

2. **Calcolo della derivata prima**: Applicando la regola di derivazione del prodotto $(u \cdot v)' = u'v + uv'$, si ottiene:

$$
f'(x) = 2x e^x + (x^2 - 3)e^x = (x^2 + 2x - 3)e^x
$$

3. **Ricerca dei punti stazionari**: Ponendo $f'(x) = 0$, poiché $e^x > 0$ per ogni $x \in \mathbb{R}$, l'equazione si riduce al polinomio di secondo grado:

$$
x^2 + 2x - 3 = 0 \implies (x + 3)(x - 1) = 0
$$

I punti stazionari sono $x = -3$ e $x = 1$.

4. **Studio del segno della derivata prima (monotonia)**: Risolvendo la disequazione $f'(x) > 0$:

$$
(x + 3)(x - 1) > 0 \implies x < -3 \quad \text{oppure} \quad x > 1
$$

Quindi:
- $f(x)$ è strettamente crescente negli intervalli $(-\infty, -3)$ e $(1, +\infty)$.
- $f(x)$ è strettamente decrescente nell'intervallo $(-3, 1)$.

5. **Determinazione dei punti di estremo relativo**:
- In $x = -3$, la derivata prima cambia segno da positivo a negativo, pertanto $x = -3$ è un punto di massimo relativo. L'ordinata è:

$$
f(-3) = ((-3)^2 - 3)e^{-3} = \frac{6}{e^3}
$$

Il punto di massimo relativo è $M\left(-3, \frac{6}{e^3}\right)$.
- In $x = 1$, la derivata prima cambia segno da negativo a positivo, pertanto $x = 1$ è un punto di minimo relativo. L'ordinata è:

$$
f(1) = (1^2 - 3)e^1 = -2e
$$

Il punto di minimo relativo è $N(1, -2e)$.
