---
year: 4
macro_area: "Goniometria e Trigonometria"
topic: "Formule goniometriche"
difficulty: 5
ai_generated: true
tags:
  - "archi associati"
  - "formule di prostaferesi"
  - "formule di duplicazione"
  - "identita goniometriche"
---
# Problem Text
Dimostra che per qualsiasi terna di angoli positivi $\alpha, \beta, \gamma$ tali che $\alpha + \beta + \gamma = \pi$, vale la seguente identità goniometrica:

$$
\cos\alpha + \cos\beta + \cos\gamma = 1 + 4\sin\left(\frac{\alpha}{2}\right)\sin\left(\frac{\beta}{2}\right)\sin\left(\frac{\gamma}{2}\right)
$$

# Solution
Applichiamo la formula di prostaferesi alla somma dei primi due coseni:

$$
\cos\alpha + \cos\beta = 2\cos\left(\frac{\alpha+\beta}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right)
$$

Poiché $\alpha + \beta + \gamma = \pi$, si ha $\frac{\alpha+\beta}{2} = \frac{\pi}{2} - \frac{\gamma}{2}$. Utilizzando le proprietà degli archi associati:

$$
\cos\left(\frac{\alpha+\beta}{2}\right) = \cos\left(\frac{\pi}{2} - \frac{\gamma}{2}\right) = \sin\left(\frac{\gamma}{2}\right)
$$

Esprimiamo il terzo termine $\cos\gamma$ in funzione dell'angolo metà $\frac{\gamma}{2}$ mediante la formula di duplicazione del coseno:

$$
\cos\gamma = 1 - 2\sin^2\left(\frac{\gamma}{2}\right)
$$

Sostituendo tali relazioni nel membro di sinistra dell'uguaglianza, otteniamo:

$$
\cos\alpha + \cos\beta + \cos\gamma = 2\sin\left(\frac{\gamma}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right) + 1 - 2\sin^2\left(\frac{\gamma}{2}\right)
$$

Raccogliendo il fattore comune $2\sin\left(\frac{\gamma}{2}\right)$ tra il primo e il terzo termine:

$$
\cos\alpha + \cos\beta + \cos\gamma = 1 + 2\sin\left(\frac{\gamma}{2}\right)\left[\cos\left(\frac{\alpha-\beta}{2}\right) - \sin\left(\frac{\gamma}{2}\right)\right]
$$

Riapplicando la relazione degli archi associati $\sin\left(\frac{\gamma}{2}\right) = \cos\left(\frac{\alpha+\beta}{2}\right)$, l'espressione entro parentesi quadre diventa:

$$
\cos\left(\frac{\alpha-\beta}{2}\right) - \cos\left(\frac{\alpha+\beta}{2}\right)
$$

Utilizziamo ora la formula di prostaferesi per la differenza di coseni $\cos p - \cos q = -2\sin\left(\frac{p+q}{2}\right)\sin\left(\frac{p-q}{2}\right)$:

$$
\cos\left(\frac{\alpha-\beta}{2}\right) - \cos\left(\frac{\alpha+\beta}{2}\right) = -2\sin\left(\frac{\alpha}{2}\right)\sin\left(-\frac{\beta}{2}\right) = 2\sin\left(\frac{\alpha}{2}\right)\sin\left(\frac{\beta}{2}\right)
$$

Sostituendo questo risultato nell'espressione precedente si giunge alla tesi:

$$
\cos\alpha + \cos\beta + \cos\gamma = 1 + 4\sin\left(\frac{\alpha}{2}\right)\sin\left(\frac{\beta}{2}\right)\sin\left(\frac{\gamma}{2}\right)
$$
