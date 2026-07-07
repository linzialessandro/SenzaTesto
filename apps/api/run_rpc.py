import asyncio
import asyncpg
import os
import ssl
import certifi
from dotenv import load_dotenv

load_dotenv(os.path.expanduser('~/secrets/SenzaTesto/.env'))

async def main():
    database_url = os.environ.get("DATABASE_URL")
    ctx = ssl.create_default_context(cafile=certifi.where())
    conn = await asyncpg.connect(database_url, ssl=ctx)
    with open('apps/api/rpc.sql', 'r') as f:
        sql = f.read()
    await conn.execute(sql)
    print("RPC creata con successo.")
    await conn.close()

if __name__ == '__main__':
    asyncio.run(main())
