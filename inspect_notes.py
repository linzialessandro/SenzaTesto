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

# Cerca (Nota: o simili
query = """
SELECT short_code, problem_text, solution_text 
FROM exercises 
WHERE problem_text ILIKE '%(Nota:%' 
   OR problem_text ILIKE '%Nota dell''AI:%' 
   OR problem_text ILIKE '%Nota:%'
   OR solution_text ILIKE '%(Nota:%'
   OR solution_text ILIKE '%Nota dell''AI:%'
"""
cur.execute(query)
rows = cur.fetchall()

print(f"Trovati {len(rows)} esercizi con 'Nota:'")
for row in rows[:5]:
    code, prob, sol = row
    print(f"--- CODE: {code} ---")
    if "(Nota:" in prob or "Nota:" in prob:
        print("PROBLEM MATCH:")
        lines = [l for l in prob.split('\n') if 'Nota:' in l]
        print("\n".join(lines))
    if "(Nota:" in sol or "Nota:" in sol:
        print("SOLUTION MATCH:")
        lines = [l for l in sol.split('\n') if 'Nota:' in l]
        print("\n".join(lines))
    print()
