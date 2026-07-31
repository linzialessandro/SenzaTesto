---
type: Concept
title: Custom Analytics & GDPR Compliance
description: Tracciamento anonimo basato su PostgreSQL, RPC hardenizzate e report settimanali via GitHub Actions.
tags: [architecture, analytics, gdpr, privacy, supabase, rpc, github-actions]
timestamp: 2026-07-31T12:00:00Z
---

# Custom GDPR-Compliant Analytics

Per rispettare i requisiti rigorosi imposti dalle normative europee (GDPR, ePrivacy) ed evitare l'utilizzo di fastidiosi "Cookie Banner" obbligatori per servizi di terze parti (come Google Analytics o Plausible Analytics), l'intero ecosistema di tracking è stato sviluppato "in-house" direttamente all'interno dell'infrastruttura di database.

## 1. Tracciamento nel Database (Supabase / PostgreSQL)

Invece di affidare il tracking al frontend, le metriche statistiche vengono registrate nativamente nel database senza salvare alcun dato personale identificativo (es. indirizzi IP, cookie, identificatori di sessione o User-Agent).

Sono state introdotte due tabelle per questo scopo (dettaglio colonne in [Schema del Database](/database/schema.md)):
- `search_logs`: registra in forma anonima query testuali e filtri (`filter_topic`, `filter_year`, `filter_difficulty`).
- `solution_views`: registra le visualizzazioni delle soluzioni collegandole all'`generated_hash` dell'esercizio.

Le tabelle analytics usano **RLS forzata senza policy di accesso diretto**: il client pubblico non può leggere o scrivere le righe se non tramite RPC.

### Integrazione RPC (Remote Procedure Call)

Per mantenere il frontend frictionless:
- La RPC `search_exercises` esegue un `INSERT` in `search_logs` quando `page_offset = 0` e almeno un filtro/query è valorizzato. Gli input pubblici sono **boundati lato server** (lunghezza query/topic, range year/difficulty, limiti di pagina) per limitare abuso e inquinamento delle metriche.
- La RPC `log_solution_view(hash text)` è richiamata asincronamente quando l'utente espande la soluzione; accetta solo hash SHA-256 esadecimali a 64 caratteri.

Entrambe le funzioni sono `SECURITY DEFINER` con `search_path` vuoto e grant espliciti a `anon` / `authenticated`.

## 2. Automazione dei Report (GitHub Actions)

La consultazione dei dati è zero-friction tramite `scripts/analytics.py` (dipendenze in `scripts/requirements.txt`, connessione via `scripts/environment.py`).

- **Uso locale:** `python scripts/analytics.py` (opzionale `--markdown --out report.md`).
- **Uso CI/CD:** `.github/workflows/analytics_report.yml` gira ogni lunedì alle 08:00 UTC, genera un report Markdown e apre/aggiorna un'Issue "📊 Report Analytics Settimanale".

## Sorgenti

- Implementazione derivata dalla direttiva progettuale sul blocco di sistemi terzi (Plausible) per via delle compliance europee (luglio 2026).
- Estensioni 2026-07-31: colonna `filter_difficulty`, vincoli di input sulle RPC pubbliche.
