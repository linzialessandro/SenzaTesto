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
    res = await conn.fetch("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'exercises';")
    for r in res:
        print(r['column_name'], r['data_type'])
    await conn.close()

if __name__ == '__main__':
    asyncio.run(main())
