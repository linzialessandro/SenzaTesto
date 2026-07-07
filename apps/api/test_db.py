import asyncio
import os
import asyncpg
import ssl
import certifi
from dotenv import load_dotenv

load_dotenv(os.path.expanduser('~/secrets/SenzaTesto/.env'))

async def test():
    database_url = os.environ.get("DATABASE_URL")

    print(f"Connessione a: {database_url.split('@')[1] if '@' in database_url else 'sconosciuto'}")

    try:
        # Connessione SSL sicura con verifica certificati
        ctx = ssl.create_default_context(cafile=certifi.where())

        conn = await asyncpg.connect(database_url, timeout=5, ssl=ctx)
        print("Connessione riuscita!")
        await conn.close()
    except Exception as e:
        print(f"Connessione fallita: {e}")

asyncio.run(test())
