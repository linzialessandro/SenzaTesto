---
type: Concept
---

# Custom GDPR-Compliant Analytics

Per rispettare i requisiti rigorosi imposti dalle normative europee (GDPR, ePrivacy) ed evitare l'utilizzo di fastidiosi "Cookie Banner" obbligatori per servizi di terze parti (come Google Analytics o Plausible Analytics), l'intero ecosistema di tracking è stato sviluppato "in-house" direttamente all'interno dell'infrastruttura di database.

## 1. Tracciamento nel Database (Supabase / PostgreSQL)
Invece di affidare il tracking al frontend, le metriche statistiche vengono registrate nativamente nel database senza salvare alcun dato personale identificativo (es. Indirizzi IP, cookie, identificatori di sessione o User-Agent).

Sono state introdotte due tabelle per questo scopo:
- `search_logs`: Registra ogni query di ricerca testuale e filtro per argomento o anno scolastico in forma anonima.
- `solution_views`: Registra le visualizzazioni delle soluzioni, collegando in maniera anonima l'evento all'hash univoco (`generated_hash`) dell'esercizio.

### Integrazione RPC (Remote Procedure Call)
Per mantenere il frontend "frictionless" (senza aggiungere chiamate API esplicite dedicate solo al tracciamento della ricerca):
- La RPC pre-esistente `search_exercises` esegue automaticamente un `INSERT` asincrono nella tabella `search_logs` appena viene chiamata per popolare la grid del frontend.
- Una nuova RPC `log_solution_view(hash text)` è stata creata appositamente ed è richiamata asincronamente (tramite `.then()` ignorando eventuali errori silenziosamente) non appena l'utente espande un accordion per svelare la soluzione.

## 2. Automazione dei Report (GitHub Actions)
La consultazione dei dati è stata resa "zero-friction" sviluppando uno script in Python (`scripts/analytics.py`) accoppiato alla libreria terminale `rich`.

- **Uso Locale:** Il comando `npm run analytics` permette allo sviluppatore di visionare istantaneamente in formato testuale accattivante i dati in tempo reale interrogando il database.
- **Uso CI/CD:** Una GitHub Action dedicata (`.github/workflows/analytics_report.yml`) viene eseguita ogni lunedì alle 08:00 UTC. Lo script genera automaticamente un report in formato Markdown e utilizza l'API di GitHub per creare/aggiornare una Issue intitolata "📊 Report Analytics Settimanale" nel repository. Questo sistema rende la consultazione pubblica, asincrona e totalmente priva di autenticazione per l'admin del progetto.

## Sorgenti
- Implementazione derivata dalla direttiva progettuale sul blocco di sistemi terzi (Plausible) per via delle compliance europee (luglio 2026).
