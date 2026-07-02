---
year: 2
macro_area: Numeri reali e Radicali
topic: Razionalizzazione e Semplificazione
difficulty: 4
tags:
  - radicali
  - razionalizzazione
  - espressioni
---
# Problem Text

Semplificare la seguente espressione con radicali, razionalizzando ove necessario:
$$
E = \frac{\sqrt{3} + \sqrt{2}}{\sqrt{3} - \sqrt{2}} - \frac{\sqrt{3} - \sqrt{2}}{\sqrt{3} + \sqrt{2}} + \sqrt{24}
$$

# Solution

**1. Razionalizzazione del primo termine:**
Moltiplichiamo numeratore e denominatore per il coniugato del denominatore $(\sqrt{3} + \sqrt{2})$:
$$
\frac{\sqrt{3} + \sqrt{2}}{\sqrt{3} - \sqrt{2}} \cdot \frac{\sqrt{3} + \sqrt{2}}{\sqrt{3} + \sqrt{2}} = \frac{(\sqrt{3} + \sqrt{2})^2}{(\sqrt{3})^2 - (\sqrt{2})^2} = \frac{3 + 2 + 2\sqrt{6}}{3 - 2} = 5 + 2\sqrt{6}
$$

**2. Razionalizzazione del secondo termine:**
Similmente, moltiplichiamo numeratore e denominatore per $(\sqrt{3} - \sqrt{2})$:
$$
\frac{\sqrt{3} - \sqrt{2}}{\sqrt{3} + \sqrt{2}} \cdot \frac{\sqrt{3} - \sqrt{2}}{\sqrt{3} - \sqrt{2}} = \frac{(\sqrt{3} - \sqrt{2})^2}{3 - 2} = 3 + 2 - 2\sqrt{6} = 5 - 2\sqrt{6}
$$

**3. Semplificazione del terzo termine:**
Scomponiamo in fattori il radicando $24$:
$$
\sqrt{24} = \sqrt{4 \cdot 6} = 2\sqrt{6}
$$

**4. Calcolo dell'espressione finale:**
Sostituendo i termini semplificati nell'espressione originale:
$$
E = (5 + 2\sqrt{6}) - (5 - 2\sqrt{6}) + 2\sqrt{6}
$$
Rimuoviamo le parentesi facendo attenzione ai segni:
$$
E = 5 + 2\sqrt{6} - 5 + 2\sqrt{6} + 2\sqrt{6}
$$
I termini $5$ e $-5$ si annullano, sommiamo i radicali simili:
$$
E = 2\sqrt{6} + 2\sqrt{6} + 2\sqrt{6} = 6\sqrt{6}
$$

**Soluzione:** L'espressione semplificata è $6\sqrt{6}$.
