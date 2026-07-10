import os, psycopg2
env_path = os.path.expanduser('~/secrets/SenzaTesto/.env')
env_vars = {}
if os.path.exists(env_path):
    with open(env_path, 'r') as f:
        for line in f:
            if '=' in line and not line.startswith('#'):
                k,v = line.split('=',1)
                env_vars[k.strip()] = v.strip()
conn = psycopg2.connect(env_vars.get('DATABASE_URL'))
cur = conn.cursor()
cur.execute("SELECT id, name FROM macro_areas;")
print("MACRO AREE:")
for row in cur.fetchall():
    print(row)
cur.execute("SELECT COUNT(*) FROM exercises;")
print(f"TOT ESERCIZI: {cur.fetchone()[0]}")
cur.execute("SELECT id, name FROM topics LIMIT 10;")
print("TOPICS:")
for row in cur.fetchall():
    print(row)
