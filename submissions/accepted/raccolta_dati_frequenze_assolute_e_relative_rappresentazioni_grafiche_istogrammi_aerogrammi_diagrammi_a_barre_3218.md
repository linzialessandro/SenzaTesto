---
year: 1
macro_area: "Statistica Descrittiva"
topic: "Raccolta dati, frequenze assolute e relative, rappresentazioni grafiche (istogrammi, aerogrammi, diagrammi a barre)"
difficulty: 5
ai_generated: true
tags:
  - "statistica descrittiva"
  - "frequenze relative"
  - "frequenze assolute"
  - "aerogrammi"
  - "proporzioni"
---
# Problem Text
Un'indagine statistica condotta su un gruppo di $N$ studenti riguarda la preferenza tra tre opzioni $A$, $B$ e $C$, ed è rappresentata tramite un aerogramma circolare. L'angolo al centro del settore $A$ supera quello del settore $B$ di una quantità pari al $25\%$ dell'angolo del settore $C$, mentre la frequenza relativa di $B$ è il doppio di quella di $C$. Sapendo che aggiungendo all'indagine altri $5$ studenti, tutti favorevoli all'opzione $C$, la nuova frequenza relativa di $C$ diventa pari a $\frac{1}{4}$, determina il numero totale iniziale $N$ di studenti e la frequenza assoluta iniziale di ciascuna delle tre opzioni.

# Solution
In un aerogramma circolare, l'ampiezza dell'angolo al centro $\alpha_i$ di ciascun settore è direttamente proporzionale alla frequenza relativa $f_i$ della corrispondente modalità:

$$
\alpha_i = 360^\circ \cdot f_i
$$

Dalla condizione $\alpha_A - \alpha_B = 0{,}25 \cdot \alpha_C$, dividendo tutti i termini per $360^\circ$, otteniamo la relazione tra le frequenze relative:

$$
f_A - f_B = \frac{1}{4} f_C
$$

Essendo $f_B = 2 f_C$, possiamo esprimere $f_A$ in funzione di $f_C$:

$$
f_A = 2 f_C + \frac{1}{4} f_C = \frac{9}{4} f_C
$$

Poiché la somma delle frequenze relative di tutte le modalità deve essere pari a $1$:

$$
f_A + f_B + f_C = 1
$$

$$
\frac{9}{4} f_C + 2 f_C + f_C = 1
$$

$$
\frac{21}{4} f_C = 1 \implies f_C = \frac{4}{21}
$$

Ricaviamo le altre frequenze relative:

$$
f_B = 2 \cdot \frac{4}{21} = \frac{8}{21}
$$

$$
f_A = \frac{9}{4} \cdot \frac{4}{21} = \frac{9}{21}
$$

La frequenza assoluta iniziale di $C$ è $n_C = f_C \cdot N = \frac{4}{21}N$.

Se si aggiungono $5$ studenti che scelgono $C$, il totale diventa $N + 5$ e la nuova frequenza assoluta di $C$ diventa $n_C + 5$. La nuova frequenza relativa è $\frac{1}{4}$:

$$
\frac{n_C + 5}{N + 5} = \frac{1}{4}
$$

Sostituendo $n_C = \frac{4}{21}N$:

$$
\frac{\frac{4}{21}N + 5}{N + 5} = \frac{1}{4}
$$

Uguagliando i prodotti incrociati:

$$
4 \cdot \left(\frac{4}{21}N + 5\right) = N + 5
$$

$$
\frac{16}{21}N + 20 = N + 5
$$

$$
15 = N - \frac{16}{21}N \implies 15 = \frac{5}{21}N \implies N = 15 \cdot \frac{21}{5} = 63
$$

Calcoliamo infine le frequenze assolute iniziali:

$$
n_A = \frac{9}{21} \cdot 63 = 27
$$

$$
n_B = \frac{8}{21} \cdot 63 = 24
$$

$$
n_C = \frac{4}{21} \cdot 63 = 12
$$

Il numero totale iniziale di studenti è $N = 63$, e le frequenze assolute iniziali sono $n_A = 27$, $n_B = 24$ e $n_C = 12$.
