---
year: 3
macro_area: "Statistica"
topic: "Indici di tendenza centrale e di dispersione"
difficulty: 3
ai_generated: true
tags:
  - "mediana"
  - "media"
  - "varianza"
  - "scarto quadratico medio"
  - "statistica descrittiva"
---
# Problem Text
I voti ottenuti dagli studenti di una classe in una prova scritta di matematica sono riassunti nella seguente tabella di frequenza:

$$
\begin{array}{c|c}
\text{Voto} & \text{Frequenza} \\
\hline
4 & 2 \\
5 & 3 \\
6 & 6 \\
7 & 2 \\
9 & 2
\end{array}
$$

Calcola lo scarto quadratico medio del sottoinsieme di studenti che hanno ottenuto un voto strettamente superiore alla mediana dell'intera classe.

# Solution
1. **Determinazione della mediana della classe:**
Il numero totale di studenti è dato dalla somma delle frequenze:

$$
N = 2 + 3 + 6 + 2 + 2 = 15
$$

Poiché $N = 15$ è un numero dispari, la mediana corrisponde al valore in posizione centrale:

$$
\frac{15+1}{2} = 8
$$

Analizzando le frequenze cumulate, si nota che la sesta, settima, ottava, nona, decima e undicesima posizione corrispondono al voto $6$. Di conseguenza, la mediana della classe è:

$$
\text{Mediana} = 6
$$

2. **Identificazione del sottoinsieme di studenti:**
Gli studenti con un voto strettamente superiore alla mediana ($> 6$) sono quelli con voti pari a $7$ (2 studenti) o a $9$ (2 studenti). Questo sottoinsieme è composto da $4$ studenti i cui voti sono:

$$
\{7, 7, 9, 9\}
$$

3. **Calcolo della media aritmetica del sottoinsieme:**
La media aritmetica $\mu$ di questo sottogruppo è:

$$
\mu = \frac{7 \cdot 2 + 9 \cdot 2}{4} = \frac{32}{4} = 8
$$

4. **Calcolo della varianza del sottoinsieme:**
La varianza $\sigma^2$ si ottiene applicando la formula per la distribuzione di frequenze del sottogruppo:

$$
\sigma^2 = \frac{2 \cdot (7-8)^2 + 2 \cdot (9-8)^2}{4} = \frac{2 \cdot (-1)^2 + 2 \cdot 1^2}{4} = \frac{2 + 2}{4} = 1
$$

5. **Calcolo dello scarto quadratico medio:**
Lo scarto quadratico medio $\sigma$ è la radice quadrata della varianza:

$$
\sigma = \sqrt{\sigma^2} = \sqrt{1} = 1
$$
