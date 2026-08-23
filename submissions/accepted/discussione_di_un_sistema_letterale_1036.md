---
year: 2
macro_area: "Sistemi lineari"
topic: "Discussione di un sistema letterale"
difficulty: 3
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-23T12:43:45+00:00"
tags:
  - "sistemi lineari"
  - "parametro"
  - "discussione"
  - "regola di Cramer"
  - "determinante"
---
# Problem Text
Al variare del parametro reale $k$, discuti e risolvi il seguente sistema lineare:

$$
\begin{cases}
(k-1)x + 2y = k \\
3x + (k+2)y = 1 - k
\end{cases}
$$

Specifica per quali valori di $k$ il sistema è determinato, impossibile o indeterminato, e quando è determinato fornisci le soluzioni in funzione di $k$.

# Solution
Consideriamo il sistema

$$
\begin{cases}
(k-1)x + 2y = k \\
3x + (k+2)y = 1 - k
\end{cases}
$$

Il determinante della matrice dei coefficienti è

$$
\Delta = \begin{vmatrix} k-1 & 2 \\ 3 & k+2 \end{vmatrix} = (k-1)(k+2) - 2\cdot 3 = k^2 + k - 8.
$$

Il sistema è determinato se e solo se $\Delta \neq 0$, cioè se

$$
k^2 + k - 8 \neq 0.
$$

Risolviamo $k^2 + k - 8 = 0$:

$$
k = \frac{-1 \pm \sqrt{1+32}}{2} = \frac{-1 \pm \sqrt{33}}{2}.
$$

Quindi per $k \neq \frac{-1 \pm \sqrt{33}}{2}$ il sistema è determinato. Applichiamo la regola di Cramer:

$$
\Delta_x = \begin{vmatrix} k & 2 \\ 1-k & k+2 \end{vmatrix} = k(k+2) - 2(1-k) = k^2 + 2k - 2 + 2k = k^2 + 4k - 2,
$$

$$
\Delta_y = \begin{vmatrix} k-1 & k \\ 3 & 1-k \end{vmatrix} = (k-1)(1-k) - 3k = -(k-1)^2 - 3k = -k^2 + 2k - 1 - 3k = -k^2 - k - 1.
$$

Dunque, per $k \neq \frac{-1 \pm \sqrt{33}}{2}$,

$$
x = \frac{\Delta_x}{\Delta} = \frac{k^2 + 4k - 2}{k^2 + k - 8}, \qquad y = \frac{\Delta_y}{\Delta} = \frac{-k^2 - k - 1}{k^2 + k - 8}.
$$

Ora studiamo i casi $k = \frac{-1 \pm \sqrt{33}}{2}$, per i quali $\Delta = 0$. Per questi valori, le due rette hanno la stessa direzione; verifichiamo se sono parallele o coincidenti. Poiché $\Delta=0$, i coefficienti di $x$ e $y$ sono proporzionali: esiste $\lambda$ tale che

$$
(k-1, 2) = \lambda (3, k+2).
$$

Dalla prima componente: $\lambda = \frac{k-1}{3}$, dalla seconda: $\lambda = \frac{2}{k+2}$. L'uguaglianza impone $\frac{k-1}{3} = \frac{2}{k+2}$, cioè $(k-1)(k+2)=6$, che è esattamente $k^2+k-8=0$. Quindi tale $\lambda$ esiste per i due valori considerati. Per capire se le rette sono coincidenti, confrontiamo i termini noti: deve essere $k = \lambda (1-k)$. Sostituendo $\lambda = \frac{k-1}{3}$, si ottiene

$$
k = \frac{(k-1)(1-k)}{3} = -\frac{(k-1)^2}{3}.
$$

Usando $k^2 + k - 8 = 0$, ricaviamo $k^2 = 8-k$, quindi

$$
(k-1)^2 = k^2 - 2k + 1 = (8-k) - 2k + 1 = 9 - 3k.
$$

Allora l'equazione diventa

$$
k = -\frac{9 - 3k}{3} = -3 + k,
$$

che è impossibile ($0 = -3$). Quindi per $k = \frac{-1 \pm \sqrt{33}}{2}$ il sistema è impossibile, non indeterminato.

In conclusione:
- per $k \neq \frac{-1 \pm \sqrt{33}}{2}$: sistema determinato, con soluzioni

$$
x = \frac{k^2 + 4k - 2}{k^2 + k - 8}, \qquad y = \frac{-k^2 - k - 1}{k^2 + k - 8};
$$

- per $k = \frac{-1 + \sqrt{33}}{2}$ o $k = \frac{-1 - \sqrt{33}}{2}$: sistema impossibile.
