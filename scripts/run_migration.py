"""
Script per applicare la migrazione dello schema al database di produzione.
Carica i segreti da ~/secrets/SenzaTesto/.env e esegue il file SQL di migrazione.

Uso:
    python run_migration.py
"""
import os
import psycopg2


def load_env():
    env_vars = {}
    env_path = os.path.expanduser('~/secrets/SenzaTesto/.env')
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    key, val = line.split('=', 1)
                    env_vars[key.strip()] = val.strip()
    return env_vars


def main():
    env = load_env()
    database_url = env.get('DATABASE_URL')
    if not database_url:
        print("ERRORE: DATABASE_URL non trovato in ~/secrets/SenzaTesto/.env")
        return

    migration_file = os.path.join(
        os.path.dirname(os.path.dirname(__file__)), 'migrations', '001_schema_upgrade.sql'
    )
    if not os.path.exists(migration_file):
        print(f"ERRORE: File di migrazione non trovato: {migration_file}")
        return

    with open(migration_file, 'r') as f:
        sql = f.read()

    print("Connessione al database...")
    conn = psycopg2.connect(database_url)
    conn.autocommit = False  # La transazione è gestita dal BEGIN/COMMIT nel file SQL
    cur = conn.cursor()

    try:
        print("Esecuzione della migrazione 001_schema_upgrade.sql...")
        cur.execute(sql)
        conn.commit()
        print("✅ Migrazione completata con successo!")
    except Exception as e:
        conn.rollback()
        print(f"❌ Migrazione fallita (rollback eseguito): {e}")
    finally:
        cur.close()
        conn.close()


if __name__ == '__main__':
    main()
