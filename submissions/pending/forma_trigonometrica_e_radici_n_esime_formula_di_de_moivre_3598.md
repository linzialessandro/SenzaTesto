---
year: 4
macro_area: "Numeri Complessi"
topic: "Forma trigonometrica e radici n-esime (Formula di De Moivre)"
difficulty: 2
ai_generated: true
tags:
  - "numeri complessi"
  - "forma trigonometrica"
  - "de moivre"
  - "radici n-esime"
  - "equazioni complesse"
---
# Problem Text
Determina tutte le soluzioni complesse dell'equazione

$$
z^3 + 8i = 0
$$

esprimendo i risultati finali in forma algebrica $a + bi$.

# Solution
Passo 1: Riscrittura dell'equazione.
Isolando la potenza dell'incognita $z$, l'equazione equivale a trovare le radici terze del numero complesso $w = -8i$:

$$
z^3 = -8i
$$

Passo 2: Rappresentazione in forma trigonometrica.
Dato $w = 0 - 8i$, calcoliamo il suo modulo $r$ e l'argomento principale $\theta$:

$$
r = |w| = \sqrt{0^2 + (-8)^2} = 8
$$

$$
\theta = \frac{3}{2}\pi
$$

In forma trigonometrica abbiamo dunque $w = 8 \left( \cos\frac{3\pi}{2} + i \sin\frac{3\pi}{2} \right)$.

Passo 3: Applicazione della formula di De Moivre per le radici $n$-esime.
In base al Teorema Fondamentale dell'Algebra, l'equazione di terzo grado ammette esattamente 3 soluzioni nel campo complesso.
Le tre radici terze $z_k$ (con $k = 0, 1, 2$) hanno modulo $\rho = \sqrt[3]{8} = 2$ e argomenti $\theta_k$:

$$
\theta_k = \frac{\frac{3\pi}{2} + 2k\pi}{3} = \frac{\pi}{2} + \frac{2k\pi}{3}
$$

Passo 4: Calcolo degli argomenti per ciascun valore di $k$.
- Per $k = 0$: $\theta_0 = \frac{\pi}{2}$
- Per $k = 1$: $\theta_1 = \frac{\pi}{2} + \frac{2\pi}{3} = \frac{7}{6}\pi$
- Per $k = 2$: $\theta_2 = \frac{\pi}{2} + \frac{4\pi}{3} = \frac{11}{6}\pi$

Passo 5: Conversione in forma algebrica.
Calcoliamo i valori trigonometrici per ciascuna radice e scriviamo il risultato in forma algebrica:
- Per $k = 0$:

$$
z_0 = 2 \left( \cos\frac{\pi}{2} + i \sin\frac{\pi}{2} \right) = 2(0 + 1i) = 2i
$$

- Per $k = 1$:

$$
z_1 = 2 \left( \cos\frac{7\pi}{6} + i \sin\frac{7\pi}{6} \right) = 2 \left( -\frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = -\sqrt{3} - i
$$

- Per $k = 2$:

$$
z_2 = 2 \left( \cos\frac{11\pi}{6} + i \sin\frac{11\pi}{6} \right) = 2 \left( \frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = \sqrt{3} - i
$$

Le soluzioni dell'equazione sono dunque $z_0 = 2i$, $z_1 = -\sqrt{3} - i$ e $z_2 = \sqrt{3} - i$.
