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

env_vars = load_env()
database_url = env_vars.get('DATABASE_URL')
conn = psycopg2.connect(database_url)
cur = conn.cursor()

# Find the exercise
cur.execute("SELECT id, generated_hash FROM exercises WHERE problem_text LIKE '%dispari%';")
rows = cur.fetchall()
for r in rows:
    print(f"Deleting exercise {r[0]} with hash {r[1]}")
    cur.execute("DELETE FROM exercises WHERE id = %s", (r[0],))

conn.commit()
cur.close()
conn.close()
print("Done")
