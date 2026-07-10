---
year: 1
macro_area: Statistica
topic: Frequenze e rappresentazioni grafiche
difficulty: 2
tags:
  - statistica descrittiva
  - frequenza relativa
  - frequenza percentuale
  - media aritmetica
  - moda e mediana
  - aerogramma
ai_generated: true
---
# Problem Text
Un'indagine statistica condotta su un campione di $120$ studenti di un liceo riguardo al numero di libri letti per diletto personale durante l'ultimo anno ha prodotto i dati parziali riassunti nella seguente tabella:

$$
\begin{array}{c|c|c|c}
\text{Libri letti} & \text{Frequenza Assoluta} & \text{Frequenza Relativa} & \text{Frequenza Percentuale} \\
\hline
0 & 18 & f_0 & p_0\% \\
1 & n_1 & f_1 & p_1\% \\
2 & n_2 & 0{,}40 & p_2\% \\
3 & 18 & f_3 & p_3\% \\
4 \text{ o più} & n_4 & f_4 & p_4\% \\
\hline
\text{Totale} & 120 & 1{,}00 & 100\%
\end{array}
$$

Determinare le frequenze assolute, relative e percentuali mancanti sapendo che:
- La frequenza assoluta della classe "$4 \text{ o più}$" è pari a un terzo di quella della classe "$3$ libri".
- La frequenza relativa cumulata degli studenti che hanno letto al massimo $1$ libro è pari a $0{,}40$.

Risolvere i seguenti punti:
1. Calcolare i valori delle frequenze assolute $n_1$, $n_2$ e $n_4$ motivando i passaggi.
2. Completare la tabella riportando tutte le frequenze relative e percentuali.
3. Determinare la moda e la mediana della distribuzione.
4. Calcolare il numero medio di libri letti per studente, assumendo che la classe "$4 \text{ o più}$" sia rappresentata dal valore quantitativo $4$.
5. Se si dovesse rappresentare la distribuzione tramite un aerogramma (diagramma a torta), determinare l'ampiezza dell'angolo al centro (espresso in gradi sessagesimali) relativo alla categoria "$2$ libri".

# Solution
1. **Calcolo delle frequenze assolute mancanti ($n_1, n_2, n_4$):**

* **Calcolo di $n_4$:** 
Ci viene indicato che la frequenza assoluta della classe "$4 \text{ o più}$" è pari a un terzo di quella di chi ha letto esattamente $3$ libri ($n_3 = 18$). Pertanto:
$$n_4 = \frac{18}{3} = 6$$

* **Calcolo di $n_2$:**
La frequenza relativa della classe "$2$ libri" è nota ed è $f_2 = 0{,}40$. Sapendo che la dimensione campionaria complessiva è $N = 120$, calcoliamo la frequenza assoluta $n_2$:
$$n_2 = N \cdot f_2 = 120 \cdot 0{,}40 = 48$$

* **Calcolo di $n_1$:**
La frequenza relativa cumulata degli studenti che hanno letto al massimo $1$ libro (classi "$0$ libri" e "$1$ libro") è pari a $0{,}40$. Questo significa che la somma delle loro frequenze assolute divisa per l'ampiezza del campione dà $0{,}40$:
$$\frac{n_0 + n_1}{N} = 0{,}40 \implies \frac{18 + n_1}{120} = 0{,}40$$
Moltiplicando ambo i membri per $120$:
$$18 + n_1 = 48 \implies n_1 = 48 - 18 = 30$$

* **Verifica del totale:**
Sommiamo tutte le frequenze assolute determinate per accertarci che la somma corrisponda al totale $N = 120$:
$$\sum n_i = 18 + 30 + 48 + 18 + 6 = 120$$
La scomposizione è coerente.

---

2. **Completamento della tabella:**

Calcoliamo le frequenze relative $f_i = \frac{n_i}{N}$ e le conseguenti frequenze percentuali $p_i\% = f_i \cdot 100$:
- Per la classe $0$: 
  $$f_0 = \frac{18}{120} = 0{,}15 \implies p_0\% = 15\%$$
- Per la classe $1$: 
  $$f_1 = \frac{30}{120} = 0{,}25 \implies p_1\% = 25\%$$
- Per la classe $2$: 
  $$f_2 = 0{,}40 \implies p_2\% = 40\%$$
- Per la classe $3$: 
  $$f_3 = \frac{18}{120} = 0{,}15 \implies p_3\% = 15\%$$
- Per la classe $4 \text{ o più}$: 
  $$f_4 = \frac{6}{120} = 0{,}05 \implies p_4\% = 5\%$$

La tabella completa è la seguente:
$$
\begin{array}{c|c|c|c}
\text{Libri letti} & \text{Frequenza Assoluta} & \text{Frequenza Relativa} & \text{Frequenza Percentuale} \\
\hline
0 & 18 & 0{,}15 & 15\% \\
1 & 30 & 0{,}25 & 25\% \\
2 & 48 & 0{,}40 & 40\% \\
3 & 18 & 0{,}15 & 15\% \\
4 \text{ o più} & 6 & 0{,}05 & 5\% \\
\hline
\text{Totale} & 120 & 1{,}00 & 100\%
\end{array}
$$

---

3. **Determinazione della moda e della mediana:**

* **Moda:**
La moda è la modalità a cui corrisponde la frequenza assoluta massima. Nella nostra distribuzione, la frequenza massima è $48$, corrispondente a $2$ libri letti. Pertanto:
$$\text{Moda} = 2$$

* **Mediana:**
Il numero complessivo di osservazioni è $N = 120$ (pari). I due elementi centrali si trovano nelle posizioni $\frac{N}{2} = 60$ e $\frac{N}{2} + 1 = 61$.
Costruiamo la successione delle frequenze assolute cumulate per localizzare queste posizioni:
- Fino a $0$ libri: $18$ posizioni (da $1$ a $18$)
- Fino a $1$ libro: $18 + 30 = 48$ posizioni (da $19$ a $48$)
- Fino a $2$ libri: $48 + 48 = 96$ posizioni (da $49$ a $96$)

Sia la $60$-esima che la $61$-esima posizione rientrano nel gruppo di studenti che hanno letto $2$ libri. Di conseguenza:
$$\text{Mediana} = 2$$

---

4. **Calcolo della media aritmetica ($\mu$):**

Assumendo che la classe "$4 \text{ o più}$" corrisponda esattamente al valore discreto $4$, calcoliamo la media ponderata utilizzando le frequenze assolute:
$$\mu = \frac{\sum (x_i \cdot n_i)}{N} = \frac{0 \cdot 18 + 1 \cdot 30 + 2 \cdot 48 + 3 \cdot 18 + 4 \cdot 6}{120}$$
$$\mu = \frac{0 + 30 + 96 + 54 + 24}{120} = \frac{204}{120} = 1{,}7$$
In media, gli studenti hanno letto $1{,}7$ libri ciascuno.

---

5. **Calcolo dell'arco/angolo per l'aerogramma:**

Un cerchio intero corrisponde a $360^\circ$ e rappresenta il $100\%$ dei dati (frequenza relativa pari a $1{,}00$).
L'ampiezza dell'angolo al centro $\alpha$ per la categoria "$2$ libri" (la cui frequenza relativa è $f_2 = 0{,}40$) si trova impostando la proporzione:
$$\alpha : 360^\circ = f_2 : 1$$
$$\alpha = 360^\circ \cdot f_2 = 360^\circ \cdot 0{,}40 = 144^\circ$$
L'ampiezza del settore circolare per la categoria "$2$ libri" è di $144^\circ$.
