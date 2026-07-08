---
year: 5
macro_area: "Analisi Matematica"
topic: "Teoremi del calcolo differenziale"
difficulty: 3
tags:
  - "Teorema di Lagrange"
  - "Funzioni a tratti"
  - "Continuit\u00e0"
  - "Derivabilit\u00e0"
---
# Problem Text
Determinare i valori dei parametri reali $a$ e $b$ affinché la funzione definita a tratti:

$$
f(x) = \begin{cases} x^2 - 3x + a & \text{se } 0 \le x \le 2 \\ \ln(x-1) + b & \text{se } 2 < x \le 3 \end{cases}
$$

soddisfi le ipotesi del teorema di Lagrange nell'intervallo $[0, 3]$, sapendo che $f(0) = 4$. Successivamente, determinare il punto $c \in (0, 3)$ la cui esistenza è garantita dal teorema.

# Solution
1. **Determinazione di $a$ e $b$**:

Poiché $f(0) = 4$, calcoliamo il valore dalla prima espressione:

$$
0^2 - 3(0) + a = 4 \implies a = 4
$$

Affinché sia applicabile il teorema di Lagrange, $f(x)$ deve essere continua in $[0, 3]$ e derivabile in $(0, 3)$. L'unico punto critico in cui verificare tale regolarità è $x = 2$.

Per la continuità in $x = 2$, i limiti sinistro e destro devono coincidere con il valore della funzione:

$$
\lim_{x \to 2^-} (x^2 - 3x + 4) = 2
$$

$$
\lim_{x \to 2^+} (\ln(x-1) + b) = b
$$

Imponendo l'uguaglianza otteniamo $b = 2$.

Per la derivabilità, calcoliamo la derivata prima per $x \ne 2$:

$$
f'(x) = \begin{cases} 2x - 3 & \text{se } 0 < x < 2 \\ \frac{1}{x-1} & \text{se } 2 < x < 3 \end{cases}
$$

Verifichiamo che i limiti della derivata prima coincidano per $x \to 2$:

$$
\lim_{x \to 2^-} f'(x) = 2(2) - 3 = 1
$$

$$
\lim_{x \to 2^+} f'(x) = \frac{1}{2-1} = 1
$$

Essendo i limiti destro e sinistro uguali e finiti, la funzione è derivabile anche in $x=2$. Pertanto, per $a=4$ e $b=2$, tutte le ipotesi del teorema di Lagrange sono soddisfatte.

2. **Calcolo del punto $c$**:

Il teorema di Lagrange garantisce l'esistenza di almeno un punto $c \in (0, 3)$ tale che:

$$
f'(c) = \frac{f(3) - f(0)}{3 - 0}
$$

Calcoliamo i valori agli estremi dell'intervallo:

$$
f(0) = 4
$$

$$
f(3) = \ln(3-1) + 2 = \ln(2) + 2
$$

Otteniamo quindi:

$$
f'(c) = \frac{\ln(2) + 2 - 4}{3} = \frac{\ln(2) - 2}{3}
$$

Risolviamo l'equazione $f'(c) = \frac{\ln(2) - 2}{3}$ nei due intervalli:

- **Caso 1**: $c \in (0, 2)$

$$
2c - 3 = \frac{\ln(2) - 2}{3} \implies 2c = \frac{7 + \ln(2)}{3} \implies c = \frac{7 + \ln(2)}{6}
$$

Poiché $c \approx 1.28$, il punto appartiene all'intervallo $(0, 2)$ ed è quindi una soluzione accettabile.

- **Caso 2**: $c \in (2, 3)$

$$
\frac{1}{c-1} = \frac{\ln(2) - 2}{3}
$$

Poiché $\ln(2) - 2 < 0$, il secondo membro è negativo, mentre il primo membro è positivo per ogni $c > 2$. Questa equazione non ammette soluzioni reali in questo intervallo.

Il punto cercato è quindi:

$$
c = \frac{7 + \ln(2)}{6}
$$
