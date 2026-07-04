# Linee Guida per i Contributori

Siamo felici che tu voglia contribuire a questo progetto! Prima di iniziare, ti chiediamo di leggere attentamente queste linee guida.

## Contributor License Agreement (CLA)

Questo progetto utilizza il modello della **Doppia Licenza (Dual Licensing)**. Il codice è rilasciato open source sotto la licenza **AGPLv3**, ma il progetto può essere distribuito commercialmente dai detentori del copyright.

Per poter accettare le tue pull request, abbiamo bisogno che tu firmi il nostro Contributor License Agreement (CLA). Questo ci garantisce i permessi legali necessari per includere il tuo codice nel progetto e, se necessario, offrirlo commercialmente. **Tu manterrai in ogni caso il diritto d'autore (copyright) sulle tue modifiche.**

### Come firmare il CLA

1. Leggi il file [CLA.md](CLA.md).
2. Quando apri una Pull Request, aggiungi il seguente testo nel corpo del messaggio della PR:
   > "Ho letto il documento CLA e con la presente accetto e firmo il Contributor License Agreement."
3. I maintainer verificheranno la presenza di questo testo prima di procedere con la revisione del codice.

## Come Contribuire al Codice

1. Effettua un Fork del repository.
2. Crea un branch per la tua feature o bugfix (`git checkout -b feature/nuova-funzionalita`).
3. Fai il commit delle tue modifiche, assicurandoti di scrivere messaggi di commit chiari.
4. Assicurati che il codice rispetti gli standard del progetto.
5. Invia una Pull Request verso il branch principale.

## Come Contribuire agli Esercizi (SenzaTesto Database)

Puoi contribuire ad arricchire il database di SenzaTesto in due modi:

### Metodo 1: Manualmente
Aggiungi un nuovo file `.md` nella cartella `submissions/pending/` rispettando la struttura del frontmatter e usando LaTeX per la matematica. Consulta gli esercizi già presenti per prendere spunto!

### Metodo 2: Generazione Massiva con IA (BYOK)
Se hai una chiave API di Google Gemini (Bring-Your-Own-Key), puoi generare automaticamente decine di esercizi e inviarli via Pull Request.

1. Installa le dipendenze Python:
   ```bash
   pip install -r scripts/generator/requirements.txt
   ```
2. Crea un file `.env` dentro `scripts/generator/` e inserisci la tua chiave:
   ```env
   GEMINI_API_KEY=la_tua_chiave_qui
   ```
3. Lancia lo script (che creerà un branch locale con i nuovi file). Di default genererà 10 esercizi, ma puoi specificare un numero diverso:
   ```bash
   cd scripts/generator
   python generate_and_pr.py 20
   ```
4. Se hai la CLI di GitHub (`gh`) configurata, lo script aprirà la PR in automatico. Altrimenti, pusha il branch creato e apri tu la Pull Request manualmente dal tuo fork verso il repository principale.

Grazie per il tuo prezioso supporto al progetto!
