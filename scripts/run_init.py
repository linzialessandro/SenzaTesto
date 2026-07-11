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

env = load_env()
conn = psycopg2.connect(env['DATABASE_URL'])
cur = conn.cursor()
init_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'init.sql')
with open(init_file, 'r') as f:
    cur.execute(f.read())
conn.commit()
print("DB initialized")
