---
year: 5
macro_area: "Geometria dello spazio"
topic: "Solidi di rotazione"
difficulty: 3
tags:
  - "Geometria solida"
  - "Sfera"
  - "Cilindro"
  - "Solidi di rotazione"
  - "Volume"
---
# Problem Text
Un cilindro circolare retto è inscritto in una sfera di raggio $R$. Sapendo che l'altezza del cilindro è uguale all'altezza di ciascuna delle calotte sferiche determinate dai piani delle basi del cilindro, determinare il volume del cilindro in funzione di $R$.

# Solution
Sia $h$ l'altezza del cilindro e $r$ il raggio della sua base. Poiché il cilindro è inscritto nella sfera di raggio $R$, i centri delle sue due basi si trovano sull'asse verticale della sfera a distanza pari a $\frac{h}{2}$ dal centro della sfera stessa.

L'altezza $h_{\text{calotta}}$ di ciascuna delle due calotte sferiche individuate dai piani delle basi del cilindro è data dalla differenza tra il raggio della sfera $R$ e la distanza di ciascuna base dal centro:

$$
h_{\text{calotta}} = R - \frac{h}{2}
$$

Imponendo la condizione del problema, per cui l'altezza del cilindro $h$ è uguale all'altezza della calotta, otteniamo l'equazione:

$$
h = R - \frac{h}{2}
$$

Risolvendo rispetto a $h$:

$$
h + \frac{h}{2} = R \implies \frac{3}{2}h = R \implies h = \frac{2}{3}R
$$

Per trovare il raggio di base $r$ del cilindro, consideriamo il triangolo rettangolo avente per ipotenusa il raggio della sfera $R$, e per cateti il raggio di base $r$ e la semialtezza del cilindro $\frac{h}{2}$. Per il teorema di Pitagora si ha:

$$
r^2 + \left(\frac{h}{2}\right)^2 = R^2
$$

Sostituendo $h = \frac{2}{3}R$:

$$
r^2 + \left(\frac{R}{3}\right)^2 = R^2 \implies r^2 + \frac{R^2}{9} = R^2 \implies r^2 = \frac{8}{9}R^2
$$

Infine, calcoliamo il volume $V$ del cilindro con la formula classica:

$$
V = \pi r^2 h
$$

Sostituendo i valori di $r^2$ e $h$ precedentemente determinati:

$$
V = \pi \left(\frac{8}{9}R^2\right) \left(\frac{2}{3}R\right) = \frac{16}{27}\pi R^3
$$
