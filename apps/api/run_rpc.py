import asyncio
import asyncpg
import os
import ssl
import certifi

async def main():
    database_url = os.environ.get("DATABASE_URL")
    ctx = ssl.create_default_context(cafile=certifi.where())
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    conn = await asyncpg.connect(database_url, ssl=ctx)
    with open('apps/api/rpc.sql', 'r') as f:
        sql = f.read()
    await conn.execute(sql)
    print("RPC created successfully.")
    await conn.close()

if __name__ == '__main__':
    asyncio.run(main())
