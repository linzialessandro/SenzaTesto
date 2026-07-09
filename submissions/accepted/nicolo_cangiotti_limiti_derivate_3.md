---
year: 5
macro_area: "Analisi Matematica"
topic: "Limiti"
difficulty: 2
tags:
  - "limite non esistente"
  - "funzioni goniometriche"
  - "oscillazione"
---
# Problem Text
Calcolare il seguente limite:
$$ \lim_{x\to 0} \sin\left(\frac{1}{x}\right) $$

# Solution
Analizziamo il comportamento dell'argomento del seno quando $$x$$ tende a $$0$$.
Effettuiamo una sostituzione di variabile ponendo $$t = \frac{1}{x}$$.
Possiamo distinguere due casi separati (limite destro e sinistro):
- Se $$x \to 0^+$$, allora $$t \to +\infty$$.
- Se $$x \to 0^-$$, allora $$t \to -\infty$$.

Il limite si riconduce quindi alla valutazione del limite all'infinito della funzione seno:
$$ \lim_{t \to \pm\infty} \sin(t) $$

La funzione $$\sin(t)$$ è una funzione periodica che continua ad oscillare indefinitamente, passando costantemente per tutti i valori dell'intervallo chiuso $$[-1, 1]$$ al tendere della sua variabile all'infinito.
Poiché la funzione non si stabilizza su un unico valore reale finito, né ammette una divergenza univoca, si conclude che **il limite non esiste**.
