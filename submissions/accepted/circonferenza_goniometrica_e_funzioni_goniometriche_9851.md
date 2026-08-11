---
year: 4
macro_area: "Trigonometria e Goniometria"
topic: "Circonferenza goniometrica e funzioni goniometriche"
difficulty: 5
ai_generated: true
content_origin: artificial
provenance:
  schema: senzatesto-provenance/v1
  method: llm
  provider: deepseek
  model: deepseek-v4-flash
  pipeline: generate_and_pr
  generated_at: "2026-08-06T17:45:22+00:00"
tags:
  - "trigonometria"
  - "circonferenza goniometrica"
  - "dimostrazione"
---
# Problem Text
Sia $\alpha$ un angolo in $(0, \pi/2)$. Utilizzando la circonferenza goniometrica, dimostra che $\sin\alpha < \alpha < \tan\alpha$.

# Solution
Consideriamo la circonferenza goniometrica di raggio 1. Siano $O$ l'origine, $A=(1,0)$, $P=(\cos\alpha,\sin\alpha)$ il punto sulla circonferenza, e $B=(1,\tan\alpha)$ l'intersezione del prolungamento di $OP$ con la retta $x=1$. Confrontiamo le aree della regione triangolare $OAP$, del settore circolare $OAP$, e del triangolo $OAB$. L'area del triangolo $OAP$ è $\frac{1}{2}\sin\alpha$ (base $OA=1$, altezza $\sin\alpha$). L'area del settore circolare di ampiezza $\alpha$ è $\frac{1}{2}\alpha$ (poiché $r=1$). L'area del triangolo $OAB$ è $\frac{1}{2}\tan\alpha$ (base $OA=1$, altezza $\tan\alpha$). Geometricamente, il triangolo $OAP$ è contenuto nel settore, che è contenuto nel triangolo $OAB$, quindi:

$$
\frac{1}{2}\sin\alpha < \frac{1}{2}\alpha < \frac{1}{2}\tan\alpha
$$

Dividendo per $\frac{1}{2}$ (positivo), si ottiene $\sin\alpha < \alpha < \tan\alpha$, come richiesto.
