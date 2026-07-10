import os, psycopg2, re

env_path = os.path.expanduser('~/secrets/SenzaTesto/.env')
env_vars = {}
with open(env_path, 'r') as f:
    for line in f:
        if '=' in line and not line.startswith('#'):
            k,v = line.split('=',1)
            env_vars[k.strip()] = v.strip()

conn = psycopg2.connect(env_vars.get('DATABASE_URL'))
cur = conn.cursor()

query = """
SELECT short_code, problem_text, solution_text 
FROM exercises 
WHERE solution_text ILIKE '%Nota:%' 
   OR solution_text ILIKE '%Nota dell''AI:%'
   OR solution_text ILIKE '%(Nota%'
"""
cur.execute(query)
rows = cur.fetchall()

for row in rows:
    code, prob, sol = row
    lines = [l for l in sol.split('\n') if 'Nota' in l]
    print(f"--- CODE: {code} ---\n" + "\n".join(lines) + "\n")
