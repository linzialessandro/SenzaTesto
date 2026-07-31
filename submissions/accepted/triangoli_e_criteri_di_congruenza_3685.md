---
year: 1
macro_area: "Geometria Piana"
topic: "Triangoli e criteri di congruenza"
difficulty: 5
ai_generated: true
tags:
  - "geometria piana"
  - "triangoli"
  - "criteri di congruenza"
  - "dimostrazione"
  - "angoli"
---
# Problem Text
In un triangolo $ABC$, l'angolo $\hat{B}$ ha ampiezza doppia rispetto all'angolo $\hat{C}$. Sia $AD$ la bisettrice dell'angolo $\hat{A}$, con $D$ appartenente al lato $BC$. Dimostrare che vale la seguente relazione tra i lati:

$$
AC = AB + BD
$$

# Solution
Poiché $\hat{B} = 2\hat{C} > \hat{C}$, al lato $AC$ è opposto un angolo maggiore rispetto a quello opposto al lato $AB$, da cui $AC > AB$. Possiamo quindi considerare un punto $E$ appartenente al segmento $AC$ tale che:

$$
AE \cong AB
$$

**Passo 1: Congruenza dei triangoli $ABD$ e $AED$**
Confrontiamo i triangoli $ABD$ e $AED$:
- $AB \cong AE$ per costruzione;
- $\widehat{BAD} \cong \widehat{EAD}$ perché $AD$ è la bisettrice dell'angolo $\hat{A}$;
- il lato $AD$ è in comune.

Per il Primo Criterio di congruenza dei triangoli, risulta:

$$
\triangle ABD \cong \triangle AED
$$

Da questa congruenza ricaviamo che:
- $BD \cong ED$;
- $\widehat{AED} \cong \hat{B} = 2\hat{C}$.

**Passo 2: Proprietà del triangolo $EDC$**
L'angolo $\widehat{AED}$ è un angolo esterno del triangolo $EDC$ relativo al vertice $E$. Per il teorema dell'angolo esterno, la sua ampiezza è uguale alla somma degli angoli interni non adiacenti:

$$
\widehat{AED} = \widehat{EDC} + \hat{C}
$$

Sostituendo $\widehat{AED} = 2\hat{C}$:

$$
2\hat{C} = \widehat{EDC} + \hat{C} \implies \widehat{EDC} = \hat{C}
$$

Avendo due angoli congruenti ($\widehat{EDC} \cong \widehat{ECD} = \hat{C}$), il triangolo $EDC$ è isoscele sulla base $DC$, pertanto:

$$
ED \cong EC
$$

**Passo 3: Conclusione della dimostrazione**
Dalle congruenze ottenute nei passi precedenti:

$$
BD \cong ED \quad \text{e} \quad ED \cong EC \implies BD \cong EC
$$

Essendo $E$ un punto interno al segmento $AC$, possiamo scrivere:

$$
AC = AE + EC
$$

Sostituendo $AE = AB$ e $EC = BD$, otteniamo la tesi:

$$
AC = AB + BD
$$
