---
year: 1
macro_area: Geometria
topic: triangoli
difficulty: 4
tags:
  - triangolo rettangolo
  - baricentro
  - ortocentro
---
# Problem Text
Dato un triangolo rettangolo $ABC$ con l'angolo retto nel vertice $A$, i due cateti misurano $AB = 15$ e $AC = 20$. Determina la distanza tra il baricentro $G$ e l'ortocentro $H$ del triangolo.

# Solution
In un triangolo rettangolo, l'ortocentro $H$ (punto di incontro delle altezze) coincide con il vertice dell'angolo retto. Pertanto, $H \equiv A$.
Dobbiamo quindi calcolare la distanza $AG$, che è la lunghezza del segmento che unisce il vertice $A$ al baricentro $G$.

Ricordiamo che il baricentro divide ciascuna mediana in due segmenti in rapporto $2:1$, con la parte maggiore verso il vertice. Se indichiamo con $M$ il punto medio dell'ipotenusa $BC$, il segmento $AM$ è la mediana relativa all'ipotenusa.
Per le proprietà del baricentro:
$$
AG = \frac{2}{3} AM
$$

In un triangolo rettangolo, la mediana relativa all'ipotenusa è pari alla metà dell'ipotenusa stessa.
Calcoliamo l'ipotenusa $BC$ usando il teorema di Pitagora:
$$
BC = \sqrt{AB^2 + AC^2} = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25
$$

La mediana $AM$ misura quindi:
$$
AM = \frac{BC}{2} = \frac{25}{2}
$$

Infine, calcoliamo la distanza $AG$:
$$
AG = \frac{2}{3} \cdot \frac{25}{2} = \frac{25}{3}
$$

La distanza tra il baricentro e l'ortocentro è $\frac{25}{3}$.
