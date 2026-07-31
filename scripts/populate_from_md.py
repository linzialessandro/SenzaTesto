import hashlib
import psycopg2
import yaml
import re
import shutil
from pathlib import Path

from environment import PROJECT_ROOT, get_database_url
from validate_submissions import validate_file

def parse_markdown_exercise(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to extract yaml frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
    if not yaml_match:
        raise ValueError(f"No YAML frontmatter found in {file_path}")

    yaml_text = yaml_match.group(1)
    body_text = yaml_match.group(2)

    metadata = yaml.safe_load(yaml_text)

    # Extract sections
    sections = {}
    current_section = None
    current_content = []

    for line in body_text.split('\n'):
        if line.startswith('# '):
            if current_section:
                sections[current_section] = '\n'.join(current_content).strip()
            current_section = line[2:].strip()
            current_content = []
        else:
            current_content.append(line)
    
    if current_section:
        sections[current_section] = '\n'.join(current_content).strip()

    required_sections = ['Problem Text', 'Solution']
    for req in required_sections:
        if req not in sections:
            raise ValueError(f"Missing required section '# {req}' in {file_path}")

    return {
        'metadata': metadata,
        'problem_text': sections['Problem Text'],
        'solution_text': sections['Solution']
    }

def main():
    submissions_dir = PROJECT_ROOT / 'submissions'
    pending_dir = submissions_dir / 'pending'
    accepted_dir = submissions_dir / 'accepted'
    rejected_dir = submissions_dir / 'rejected'
    
    pending_dir.mkdir(exist_ok=True)
    accepted_dir.mkdir(exist_ok=True)
    rejected_dir.mkdir(exist_ok=True)

    try:
        database_url = get_database_url()
    except RuntimeError as error:
        print(error)
        return
        
    try:
        conn = psycopg2.connect(database_url)
        cur = conn.cursor()
        print("Connesso al database.")
        
        for md_file in pending_dir.glob('*.md'):
            print(f"Elaborazione: {md_file.name}")
            try:
                dest_path = accepted_dir / md_file.name
                if dest_path.exists():
                    raise FileExistsError(f"esiste già un file accettato: {dest_path.name}")

                validation_issues, _ = validate_file(md_file)
                if validation_issues:
                    messages = "; ".join(issue.message for issue in validation_issues)
                    raise ValueError(f"validazione fallita: {messages}")

                parsed = parse_markdown_exercise(md_file)
                meta = parsed['metadata']
                year = meta['year']
                macro = meta['macro_area']
                topic = meta['topic']
                difficulty = meta['difficulty']
                tags = meta.get('tags', [])
                ai_generated = meta.get('ai_generated', False)
                
                # Recupera ID Anno
                cur.execute("SELECT id FROM curriculum_years WHERE year_number = %s", (year,))
                res = cur.fetchone()
                if not res:
                    print(f"  -> Errore: anno {year} non trovato nel DB.")
                    continue
                year_id = res[0]
                
                # Inserisci o Recupera Macro Area
                cur.execute(
                    "INSERT INTO macro_areas (year_id, name) VALUES (%s, %s) ON CONFLICT (year_id, name) DO NOTHING",
                    (year_id, macro)
                )
                cur.execute("SELECT id FROM macro_areas WHERE year_id = %s AND name = %s", (year_id, macro))
                macro_id = cur.fetchone()[0]
                
                # Inserisci o Recupera Topic
                cur.execute(
                    "INSERT INTO topics (macro_area_id, name) VALUES (%s, %s) ON CONFLICT (macro_area_id, name) DO NOTHING",
                    (macro_id, topic)
                )
                cur.execute("SELECT id FROM topics WHERE macro_area_id = %s AND name = %s", (macro_id, topic))
                topic_id = cur.fetchone()[0]
                
                # Genera Hash e Inserisci Esercizio
                hash_str = f"{topic_id}-{difficulty}-{parsed['problem_text']}-{parsed['solution_text']}"
                gen_hash = hashlib.sha256(hash_str.encode('utf-8')).hexdigest()
                
                cur.execute("""
                    INSERT INTO exercises (topic_id, difficulty_level, problem_text, solution_text, generated_hash, tags, ai_generated)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (generated_hash) 
                    DO UPDATE SET 
                        tags = EXCLUDED.tags,
                        problem_text = EXCLUDED.problem_text,
                        solution_text = EXCLUDED.solution_text,
                        ai_generated = EXCLUDED.ai_generated
                """, (
                    topic_id, 
                    difficulty, 
                    parsed['problem_text'], 
                    parsed['solution_text'], 
                    gen_hash,
                    tags,
                    ai_generated
                ))
                
                print(f"  -> Successo: Inserito/Aggiornato Anno {year} - {topic}")
                conn.commit()  # Eseguiamo la commit per ogni file
                
                # Sposta il file in accepted
                shutil.move(str(md_file), str(dest_path))
                print(f"  -> Spostato in accepted: {md_file.name}")
                
            except Exception as ex:
                conn.rollback()  # Annulla la transazione per questo file
                print(f"  -> Errore durante l'elaborazione di {md_file.name}: {ex}")

        cur.close()
        conn.close()
        print("Processo di caricamento Markdown completato!")
        
    except Exception as e:
        print(f"Errore critico: {e}")
        return

if __name__ == "__main__":
    main()
