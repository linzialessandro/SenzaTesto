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

Puoi contribuire ad arricchire il database di SenzaTesto in due modi.

**Trasparenza e qualità:** gli esercizi possono essere scritti da persone o generati/assistiti da modelli di IA.

- I file **IA** devono avere `ai_generated: true` (e, per le nuove generazioni, blocco `provenance`). Sul sito pubblico compare il badge **IA**.
- **Nessun esercizio entra nel database pubblico** senza validazione automatica e revisione umana (a campione sulle batch AI): correttezza matematica, curriculum, qualità didattica. Responsabilità editoriale: progetto / Alessandro Linzi (vedi `docs/compliance/human-review-sop.md` e `docs/compliance/art50-pipeline-checklist.md`).
- SenzaTesto **non** fornisce il modello DeepSeek: lo script BYOK usa la **tua** chiave API.

### Metodo 1: Manualmente
Aggiungi un nuovo file `.md` nella cartella `submissions/pending/` rispettando la struttura del frontmatter e usando LaTeX per la matematica. Consulta gli esercizi già presenti per prendere spunto! Per contributi interamente umani puoi omettere i campi IA oppure impostare `ai_generated: false` e `content_origin: human`.

### Metodo 2: Generazione Massiva con IA (BYOK)
Se hai una chiave API di DeepSeek (Bring-Your-Own-Key), puoi generare automaticamente decine di esercizi e inviarli via Pull Request. Lo script usa il modello **deepseek-v4-flash** tramite l'API OpenAI-compatible di DeepSeek e scrive automaticamente i metadati di provenienza (`ai_generated`, `content_origin`, `provenance`).

1. Installa le dipendenze Python:
   ```bash
   pip install -r scripts/generator/requirements.txt
   ```
2. Crea un file `.env` dentro `scripts/generator/` (oppure in `~/secrets/SenzaTesto/.env`) e inserisci la tua chiave:
   ```env
   DEEPSEEK_API_KEY=la_tua_chiave_qui
   # Opzionali (default già corretti):
   # DEEPSEEK_BASE_URL=https://api.deepseek.com
   # DEEPSEEK_MODEL=deepseek-v4-flash
   ```
   Ottieni la chiave su [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
3. Lancia lo script (che creerà un branch locale con i nuovi file). Di default genererà 10 esercizi, ma puoi specificare un numero diverso:
   ```bash
   cd scripts/generator
   python generate_and_pr.py 20
   ```
4. Se hai la CLI di GitHub (`gh`) configurata, lo script aprirà la PR in automatico. Altrimenti, pusha il branch creato e apri tu la Pull Request manualmente dal tuo fork verso il repository principale.

Grazie per il tuo prezioso supporto al progetto!
