---
year: 5
macro_area: "Analisi Matematica"
topic: "Studio di funzioni e ottimizzazione"
difficulty: 2
ai_generated: true
tags:
  - "studio di funzione"
  - "massimi e minimi"
  - "derivata prima"
  - "monotonia"
  - "punti stazionari"
---
# Problem Text
Determinare i punti di massimo e minimo relativo della funzione:

$$
f(x) = \frac{x}{x^2 + 1}
$$

definita in $\mathbb{R}$, fornendo le coordinate complete di tali punti nel piano cartesiano.

# Solution
1. **Dominio**:
Poiché il denominatore $x^2 + 1$ è sempre strettamente positivo e non si annulla mai in $\mathbb{R}$, il dominio della funzione è l'intero insieme dei numeri reali:

$$
\mathcal{D} = \mathbb{R}
$$

2. **Calcolo della derivata prima**:
Utilizziamo la regola di derivazione del quoziente per trovare $f'(x)$:

$$
f'(x) = \frac{1 \cdot (x^2 + 1) - x \cdot (2x)}{(x^2 + 1)^2}
$$

Semplificando il numeratore, otteniamo:

$$
f'(x) = \frac{1 - x^2}{(x^2 + 1)^2}
$$

3. **Ricerca dei punti stazionari**:
I punti stazionari si ottengono ponendo $f'(x) = 0$:

$$
1 - x^2 = 0 \implies x = \pm 1
$$

I punti stazionari sono quindi $x = -1$ e $x = 1$.

4. **Studio del segno della derivata (monotonia)**:
Studiamo dove la derivata è strettamente positiva:

$$
f'(x) > 0 \implies \frac{1 - x^2}{(x^2 + 1)^2} > 0
$$

Poiché il denominatore è un quadrato sempre positivo, la disequazione equivale a:

$$
1 - x^2 > 0 \implies -1 < x < 1
$$

Ne consegue che:
- Per $x < -1$ e $x > 1$ si ha $f'(x) < 0$ (la funzione decresce).
- Per $-1 < x < 1$ si ha $f'(x) > 0$ (la funzione cresce).

5. **Calcolo delle coordinate dei punti**:
Dallo studio del segno si deduce che:
- In $x = -1$ la funzione passa da decrescente a crescente, individuando un punto di minimo relativo.
- In $x = 1$ la funzione passa da crescente a decrescente, individuando un punto di massimo relativo.

Calcoliamo i rispettivi valori d'ordinata inserendo i punti nella funzione originale $f(x)$:

$$
f(-1) = \frac{-1}{(-1)^2 + 1} = -\frac{1}{2}
$$

$$
f(1) = \frac{1}{1^2 + 1} = \frac{1}{2}
$$

Pertanto, i punti richiesti sono:
- Minimo relativo: $m\left(-1, -\frac{1}{2}\right)$
- Massimo relativo: $M\left(1, \frac{1}{2}\right)$
