import os
import psycopg2

def load_env():
    env_vars = {}
    if os.path.exists('.env'):
        with open('.env', 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    key, val = line.split('=', 1)
                    env_vars[key.strip()] = val.strip()
    return env_vars

env = load_env()
conn = psycopg2.connect(env['DATABASE_URL'])
cur = conn.cursor()
with open('init.sql', 'r') as f:
    cur.execute(f.read())
conn.commit()
print("DB initialized")
