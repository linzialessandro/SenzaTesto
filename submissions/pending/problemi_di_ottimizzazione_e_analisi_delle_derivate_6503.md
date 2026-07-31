---
year: 5
macro_area: "Studio di funzione e Ottimizzazione"
topic: "Problemi di ottimizzazione e analisi delle derivate"
difficulty: 3
ai_generated: true
tags:
  - "ottimizzazione"
  - "derivate"
  - "massimi e minimi"
  - "geometria analitica"
---
# Problem Text
Tra tutti i rettangoli inscritti nella regione di piano delimitata dalla parabola di equazione $y = 4 - x^2$ e dall'asse $x$, aventi la base giacente sull'asse delle ascisse, determina le dimensioni di quello di area massima, verificando la natura del punto stazionario mediante il criterio della derivata seconda.

# Solution
Sia $x \in (0, 2)$ la semibase del rettangolo inscritto. I vertici del rettangolo situati sulla parabola e sull'asse $x$ hanno coordinate $(-x, 0)$, $(x, 0)$, $(x, 4-x^2)$ e $(-x, 4-x^2)$.

La funzione area $A:(0, 2) \to \mathbb{R}$ è data dal prodotto tra la base $2x$ e l'altezza $4-x^2$:

$$
A(x) = 2x(4 - x^2) = 8x - 2x^3
$$

Calcoliamo la derivata prima della funzione $A(x)$:

$$
A'(x) = \frac{d}{dx}\left(8x - 2x^3\right) = 8 - 6x^2
$$

Risolviamo l'equazione dei punti stazionari $A'(x) = 0$ all'interno del dominio di interesse $(0, 2)$:

$$
8 - 6x^2 = 0 \implies x^2 = \frac{4}{3} \implies x = \frac{2\sqrt{3}}{3}
$$

Per verificare la natura del punto stazionario $x_0 = \frac{2\sqrt{3}}{3}$, calcoliamo la derivata seconda $A''(x)$:

$$
A''(x) = -12x
$$

Valutiamo $A''(x)$ nel punto stazionario $x_0$:

$$
A''\left(\frac{2\sqrt{3}}{3}\right) = -12 \cdot \frac{2\sqrt{3}}{3} = -8\sqrt{3} < 0
$$

Essendo $A''(x_0) < 0$, per il criterio delle derivate successive $x_0$ è un punto di massimo relativo e, data la stretta concavità di $A(x)$ nell'intervallo $(0, 2)$, rappresenta il punto di massimo assoluto.

Le dimensioni del rettangolo di area massima sono quindi:
- Base: $b = 2 x_0 = \frac{4\sqrt{3}}{3}$
- Altezza: $h = 4 - x_0^2 = 4 - \frac{4}{3} = \frac{8}{3}$
