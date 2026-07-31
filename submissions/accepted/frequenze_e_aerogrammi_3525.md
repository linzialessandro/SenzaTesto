---
year: 1
macro_area: "Statistica Descrittiva"
topic: "Frequenze e Aerogrammi"
difficulty: 5
ai_generated: true
tags:
  - "statistica descrittiva"
  - "frequenze assolute"
  - "frequenze relative"
  - "aerogrammi"
  - "proporzioni"
---
# Problem Text
In un'indagine statistica una popolazione di $N$ unità è suddivisa nelle quattro modalità $A$, $B$, $C$ e $D$. Nella rappresentazione dei dati tramite aerogramma circolare:
- L'angolo al centro $\alpha_A$ della modalità $A$ è pari ai $\frac{2}{7}$ della somma degli angoli al centro delle restanti tre modalità.
- La frequenza relativa $f_B$ della modalità $B$ è pari ai $\frac{3}{5}$ della frequenza relativa $f_C$ della modalità $C$.
- L'angolo al centro $\alpha_D$ supera l'angolo $\alpha_C$ di un'ampiezza pari a $\frac{1}{9}$ di un angolo piatto.

Sapendo che la frequenza assoluta della modalità $C$ è $n_C = 25$, determina la frequenza assoluta totale $N$ del campione e le frequenze assolute $n_A$, $n_B$, $n_D$ delle altre tre modalità.

# Solution
Ricordiamo che in un aerogramma circolare l'angolo al centro $\alpha_i$ di ciascuna modalità è direttamente proporzionale alla sua frequenza relativa $f_i$:

$$
\alpha_i = f_i \cdot 360^\circ
$$

La somma di tutti gli angoli al centro è pari a $360^\circ$.

**1. Determinazione di $\alpha_A$ e della frequenza relativa $f_A$**
La somma degli angoli delle modalità $B$, $C$, $D$ è $\alpha_B + \alpha_C + \alpha_D = 360^\circ - \alpha_A$.
Dalla prima condizione impostiamo la relazione:

$$
\alpha_A = \frac{2}{7} (360^\circ - \alpha_A)
$$

Moltiplicando entrambi i membri per $7$:

$$
7\alpha_A = 720^\circ - 2\alpha_A \implies 9\alpha_A = 720^\circ \implies \alpha_A = 80^\circ
$$

La frequenza relativa di $A$ è quindi:

$$
f_A = \frac{80^\circ}{360^\circ} = \frac{2}{9}
$$

**2. Determinazione di $\alpha_B$, $\alpha_C$ e $\alpha_D$**
La somma dei tre angoli rimanenti è $360^\circ - 80^\circ = 280^\circ$.
Poiché le frequenze relative sono proporzionali agli angoli al centro, dalla condizione $f_B = \frac{3}{5}f_C$ segue che $\alpha_B = \frac{3}{5}\alpha_C$.
Inoltre, $\frac{1}{9}$ di un angolo piatto ($180^\circ$) misura $20^\circ$, per cui $\alpha_D = \alpha_C + 20^\circ$.
Sostituendo nella somma dei tre angoli:

$$
\frac{3}{5}\alpha_C + \alpha_C + (\alpha_C + 20^\circ) = 280^\circ
$$

$$
\left(\frac{3}{5} + 2\right)\alpha_C = 260^\circ \implies \frac{13}{5}\alpha_C = 260^\circ
$$

$$
\alpha_C = 260^\circ \cdot \frac{5}{13} = 100^\circ
$$

Ricaviamo gli altri due angoli:

$$
\alpha_B = \frac{3}{5} \cdot 100^\circ = 60^\circ, \quad \alpha_D = 100^\circ + 20^\circ = 120^\circ
$$

**3. Calcolo della frequenza totale $N$ e delle frequenze assolute**
Calcoliamo le frequenze relative di $C$, $B$ e $D$:

$$
f_C = \frac{100^\circ}{360^\circ} = \frac{5}{18}, \quad f_B = \frac{60^\circ}{360^\circ} = \frac{1}{6}, \quad f_D = \frac{120^\circ}{360^\circ} = \frac{1}{3}
$$

Essendo $n_C = 25$ e $f_C = \frac{n_C}{N}$:

$$
N = \frac{n_C}{f_C} = \frac{25}{\frac{5}{18}} = 25 \cdot \frac{18}{5} = 90
$$

Determiniamo infine le frequenze assolute richieste:

$$
n_A = f_A \cdot N = \frac{2}{9} \cdot 90 = 20
$$

$$
n_B = f_B \cdot N = \frac{1}{6} \cdot 90 = 15
$$

$$
n_D = f_D \cdot N = \frac{1}{3} \cdot 90 = 30
$$

In conclusione, la frequenza assoluta totale è $N = 90$ e le frequenze assolute delle altre modalità sono $n_A = 20$, $n_B = 15$, $n_D = 30$.
