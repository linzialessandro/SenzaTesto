---
year: 4
macro_area: "Numeri Complessi"
topic: "Forma esponenziale, coniugato ed equazioni nel campo complesso"
difficulty: 3
ai_generated: true
tags:
  - "numeri complessi"
  - "forma esponenziale"
  - "modulo e argomento"
  - "equazioni complesse"
  - "formula di eulero"
---
# Problem Text
Risolvi nel campo complesso l'equazione:

$$
z^3 = 8\bar{z}
$$

Esprimi le soluzioni sia in forma algebrica sia in forma esponenziale.

# Solution
**Passo 1: Analisi del modulo**
Applichiamo il modulo a entrambi i membri dell'equazione $z^3 = 8\bar{z}$:

$$
|z^3| = |8\bar{z}| \implies |z|^3 = 8|\bar{z}|
$$

Poiché per ogni numero complesso vale $|\bar{z}| = |z|$, l'equazione diventa:

$$
|z|^3 = 8|z| \implies |z|(|z|^2 - 8) = 0
$$

Trattandosi di un modulo ($|z| \ge 0$), otteniamo due casi:
1. $|z| = 0 \implies z = 0$ (soluzione banale);
2. $|z|^2 = 8 \implies |z| = 2\sqrt{2}$.

**Passo 2: Determinazione dell'argomento**
Per $z \neq 0$, rappresentiamo $z$ in forma esponenziale $z = r e^{i\theta}$ con $r = 2\sqrt{2}$ e $\theta \in [0, 2\pi)$. Poiché $\bar{z} = r e^{-i\theta}$, sostituiamo nell'equazione di partenza:

$$
(2\sqrt{2} e^{i\theta})^3 = 8 (2\sqrt{2} e^{-i\theta})
$$

$$
16\sqrt{2} e^{3i\theta} = 16\sqrt{2} e^{-i\theta}
$$

Semplificando $16\sqrt{2}$:

$$
e^{3i\theta} = e^{-i\theta} \implies e^{4i\theta} = 1
$$

L'uguaglianza richiede che l'esponente sia un multiplo intero di $2\pi i$:

$$
4\theta = 2k\pi \implies \theta_k = \frac{k\pi}{2}, \quad k \in \{0, 1, 2, 3\}
$$

**Passo 3: Scrittura delle soluzioni**
Sostituendo i valori di $k$, calcoliamo i quattro valori dell'argomento $\theta_k$ e i corrispondenti numeri complessi:
- Per $k = 0$: $\theta_0 = 0 \implies z_1 = 2\sqrt{2} e^{i0} = 2\sqrt{2}$
- Per $k = 1$: $\theta_1 = \frac{\pi}{2} \implies z_2 = 2\sqrt{2} e^{i\frac{\pi}{2}} = 2\sqrt{2}i$
- Per $k = 2$: $\theta_2 = \pi \implies z_3 = 2\sqrt{2} e^{i\pi} = -2\sqrt{2}$
- Per $k = 3$: $\theta_3 = \frac{3\pi}{2} \implies z_4 = 2\sqrt{2} e^{i\frac{3\pi}{2}} = -2\sqrt{2}i$

In conclusione, l'insieme delle 5 soluzioni è:

$$
S = \left\{0, \, 2\sqrt{2}, \, 2\sqrt{2}i, \, -2\sqrt{2}, \, -2\sqrt{2}i\right\}
$$

in forma algebrica, oppure:

$$
S = \left\{0, \, 2\sqrt{2}e^{i0}, \, 2\sqrt{2}e^{i\frac{\pi}{2}}, \, 2\sqrt{2}e^{i\pi}, \, 2\sqrt{2}e^{i\frac{3\pi}{2}}\right\}
$$

in forma esponenziale.
