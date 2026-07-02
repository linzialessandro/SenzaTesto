import asyncio
import os
import asyncpg
import ssl
from dotenv import load_dotenv

load_dotenv()

async def test():
    database_url = os.environ.get("DATABASE_URL")
    
    # Supabase connection pooler uses port 6543 and supports IPv4
    database_url = database_url.replace(":5432", ":6543")
    
    print(f"Connecting to: {database_url.split('@')[1] if '@' in database_url else 'unknown'}")
    
    try:
        # Require SSL
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        conn = await asyncpg.connect(database_url, timeout=5, ssl=ctx)
        print("Connected successfully!")
        await conn.close()
    except Exception as e:
        print(f"Failed to connect: {e}")

asyncio.run(test())
