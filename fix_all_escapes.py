import os
import hashlib
import psycopg2
from pathlib import Path
from lib.latex_utils import fix_latex_escapes as fix_content

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

def fix_markdown_files():
    accepted_dir = Path(__file__).resolve().parent / 'submissions' / 'accepted'
    fixed_count = 0
    for md_file in accepted_dir.glob('*.md'):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        fixed = fix_content(content)
        if fixed != content:
            with open(md_file, 'w', encoding='utf-8') as f:
                f.write(fixed)
            fixed_count += 1
            print(f"Fixed markdown: {md_file.name}")
    print(f"Total markdown files fixed: {fixed_count}")

def fix_database():
    env_vars = load_env()
    conn = psycopg2.connect(env_vars['DATABASE_URL'])
    cur = conn.cursor()
    
    cur.execute("SELECT id, topic_id, difficulty_level, problem_text, solution_text, generated_hash, short_code FROM exercises;")
    rows = cur.fetchall()
    
    fixed_count = 0
    for row in rows:
        ex_id, topic_id, diff, prob, sol, old_hash, short_code = row
        new_prob = fix_content(prob)
        new_sol = fix_content(sol)
        
        if new_prob != prob or new_sol != sol:
            hash_str = f"{topic_id}-{diff}-{new_prob}-{new_sol}"
            new_hash = hashlib.sha256(hash_str.encode('utf-8')).hexdigest()
            
            cur.execute("""
                UPDATE exercises
                SET problem_text = %s, solution_text = %s, generated_hash = %s
                WHERE id = %s
            """, (new_prob, new_sol, new_hash, ex_id))
            fixed_count += 1
            print(f"Fixed database exercise {short_code} (ID {ex_id})")
            
    conn.commit()
    cur.close()
    conn.close()
    print(f"Total database exercises fixed: {fixed_count}")

if __name__ == '__main__':
    fix_markdown_files()
    fix_database()
