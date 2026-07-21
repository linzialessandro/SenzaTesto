---
year: 4
macro_area: "Numeri Complessi"
topic: "Equazioni nel campo complesso e forma esponenziale"
difficulty: 3
ai_generated: true
tags:
  - "numeri complessi"
  - "forma esponenziale"
  - "equazioni nel campo complesso"
  - "coniugato"
  - "forma algebrica"
---
# Problem Text
Determina tutte le soluzioni nel campo dei numeri complessi $\mathbb{C}$ dell'equazione:

$$
z^3 + 8\bar{z} = 0
$$

esprimendo i risultati in forma algebrica.

# Solution
Riscriviamo l'equazione nella forma $z^3 = -8\bar{z}$ ed esprimiamo il numero complesso $z$ in forma esponenziale $z = r e^{i\theta}$, con $r \ge 0$ e $\theta \in [0, 2\pi)$.

Ricordando che il complesso coniugato è $\bar{z} = r e^{-i\theta}$ e che $-8 = 8 e^{i\pi}$, l'equazione diventa:

$$
r^3 e^{i 3\theta} = 8 r e^{i(\pi - \theta)}
$$

Uguagliando i moduli dei due membri otteniamo:

$$
r^3 = 8r \iff r(r^2 - 8) = 0
$$

Si presentano due casi:
1. $r = 0$, che fornisce la soluzione banale $z_0 = 0$.
2. $r > 0$, da cui dividendo per $r$ si ottiene $r^2 = 8$, ossia $r = 2\sqrt{2}$.

Per $r = 2\sqrt{2}$, uguagliamo gli argomenti a meno di multipli interi di $2\pi$:

$$
3\theta = \pi - \theta + 2k\pi, \quad k \in \mathbb{Z}
$$

$$
4\theta = \pi + 2k\pi \implies \theta_k = \frac{\pi}{4} + k\frac{\pi}{2}, \quad k = 0, 1, 2, 3
$$

Calcoliamo le quattro soluzioni corrispondenti in forma algebrica $z_k = r(\cos\theta_k + i\sin\theta_k)$:
- Per $k = 0$: $\theta_0 = \frac{\pi}{4} \implies z_1 = 2\sqrt{2}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = 2 + 2i$
- Per $k = 1$: $\theta_1 = \frac{3\pi}{4} \implies z_2 = 2\sqrt{2}\left(-\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = -2 + 2i$
- Per $k = 2$: $\theta_2 = \frac{5\pi}{4} \implies z_3 = 2\sqrt{2}\left(-\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right) = -2 - 2i$
- Per $k = 3$: $\theta_3 = \frac{7\pi}{4} \implies z_4 = 2\sqrt{2}\left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right) = 2 - 2i$

L'insieme delle soluzioni dell'equazione è:

$$
S = \{ 0,\, 2+2i,\, -2+2i,\, -2-2i,\, 2-2i \}
$$
