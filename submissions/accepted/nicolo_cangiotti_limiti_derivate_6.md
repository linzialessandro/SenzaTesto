---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 4
tags:
  - "limite"
  - "forma indeterminata zero su zero"
  - "limiti notevoli"
  - "sviluppi di Taylor"
  - "De l'Hôpital"
---
# Problem Text
Calcolare il seguente limite:
$$ \lim_{x \to 0}\frac{\ln{\left(\frac{\sin(x)}{x}\right)}}{{x}} $$

# Solution
Verifichiamo innanzitutto il tipo di forma indeterminata. Sostituendo $$x \to 0$$:
All'argomento del logaritmo abbiamo il ben noto limite notevole $$\lim_{x \to 0}\frac{\sin(x)}{x} = 1$$.
Di conseguenza il numeratore tende a $$\ln(1) = 0$$. Anche il denominatore è $$0$$, quindi siamo di fronte alla forma indeterminata $$\left[ \frac{0}{0} \right]$$.

Possiamo risolvere questo limite in due modi efficaci.

**Metodo 1: Sviluppi di Taylor (Maclaurin)**
Sviluppiamo la funzione seno centrata in $$x=0$$ fino al terzo ordine:
$$ \sin(x) = x - \frac{x^3}{6} + o(x^3) $$
Dividendo per $$x$$ otteniamo l'argomento del logaritmo:
$$ \frac{\sin(x)}{x} = 1 - \frac{x^2}{6} + o(x^2) $$
L'espressione nel limite diventa:
$$ \frac{\ln\left(1 - \frac{x^2}{6} + o(x^2)\right)}{x} $$
Ricordando lo sviluppo notevole del logaritmo $$\ln(1 + t) \sim t$$ per $$t \to 0$$, con $$t = -\frac{x^2}{6} + o(x^2)$$, otteniamo a numeratore:
$$ \ln\left(1 - \frac{x^2}{6}\right) \sim -\frac{x^2}{6} $$
Il limite si riduce quindi a:
$$ \lim_{x \to 0} \frac{-\frac{x^2}{6}}{x} = \lim_{x \to 0} -\frac{x}{6} = 0 $$

**Metodo 2: Teorema di De l'Hôpital**
Deriviamo numeratore e denominatore:
- Derivata del denominatore: $$1$$
- Derivata del numeratore (funzione composta logaritmo e quoziente):
  $$ D\left[\ln\left(\frac{\sin x}{x}\right)\right] = \frac{x}{\sin x} \cdot \frac{x\cos x - \sin x}{x^2} = \frac{x\cos x - \sin x}{x \sin x} $$
Il limite applicando De l'Hôpital diviene:
$$ \lim_{x \to 0} \frac{x\cos x - \sin x}{x \sin x} $$
Che è di nuovo una forma $$[0/0]$$. Possiamo riapplicare il teorema derivando ulteriormente:
- Numeratore: $$ (\cos x - x\sin x) - \cos x = -x\sin x $$
- Denominatore: $$ \sin x + x\cos x $$
Quindi abbiamo:
$$ \lim_{x \to 0} \frac{-x\sin x}{\sin x + x\cos x} $$
Dividendo numeratore e denominatore per $$x$$:
$$ \lim_{x \to 0} \frac{-\sin x}{\frac{\sin x}{x} + \cos x} = \frac{-0}{1 + 1} = \frac{0}{2} = 0 $$

Il limite in entrambi i casi vale $$0$$.
