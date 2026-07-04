import os
import random
import asyncio
import re
import json
import subprocess
from datetime import datetime
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from google.antigravity import Agent, LocalAgentConfig

# 1. Caricamento Sicuro delle Variabili d'Ambiente (BYOK & Admin Fallback)
load_dotenv() # Prova a caricare dal .env locale nella cartella corrente o genitore

if not os.environ.get("GEMINI_API_KEY"):
    # Fallback per Alessandro (non viene committato alcun segreto, è solo un path locale)
    fallback_path = os.path.expanduser("~/secrets/Submissions-per-SenzaTesto/antigravity-sdk/.env")
    if os.path.exists(fallback_path):
        load_dotenv(fallback_path)
    else:
        print("Errore: GEMINI_API_KEY non trovata.")
        print("Assicurati di aver impostato la variabile d'ambiente o di avere un file .env")
        exit(1)

# Costanti dei path basati sulla root del progetto
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CURRICULUM_PATH = os.path.join(PROJECT_ROOT, "docs", "curriculum-italiano.md")
SUBMISSIONS_DIR = os.path.join(PROJECT_ROOT, "submissions", "pending")

# 2. Struttura dei dati per l'AI
class ExerciseOutput(BaseModel):
    year: int = Field(description="Year of the curriculum (1 to 5)")
    macro_area: str = Field(description="Macro area of the topic (e.g. Geometria Analitica)")
    topic: str = Field(description="Specific topic within the macro area")
    difficulty: int = Field(description="Difficulty level from 1 to 5")
    tags: list[str] = Field(description="List of relevant tags for the exercise")
    problem_text: str = Field(description="The full problem text using LaTeX where appropriate")
    solution: str = Field(description="The complete step-by-step solution using LaTeX where appropriate")
    generation_completed: str = Field(description="MUST be exactly the string 'COMPLETED'")

def get_topics():
    if not os.path.exists(CURRICULUM_PATH):
        print(f"Errore: File curriculum non trovato in {CURRICULUM_PATH}")
        exit(1)
        
    with open(CURRICULUM_PATH, "r") as f:
        content = f.read()
    
    topics = []
    for line in content.split('\n'):
        if line.strip().startswith("- **") or (line.strip().startswith("- ") and " - " not in line):
            topics.append(line.strip().replace("- **", "").replace("**", "").replace("- ", ""))
    return [t for t in topics if len(t) > 5]

def fix_math_blocks(text: str) -> str:
    if not text:
        return text
    def replacer(match):
        content = match.group(1)
        if '\n' in content or r'\begin{' in content:
            return f"\n$$\n{content.strip()}\n$$\n"
        return match.group(0)
    
    fixed = re.sub(r'(?<!\$)\$\$(.*?)\$\$(?!\$)', replacer, text, flags=re.DOTALL)
    fixed = re.sub(r'\n{3,}', '\n\n', fixed)
    return fixed.strip()

def format_markdown(data: ExerciseOutput) -> str:
    tags_str = "\n".join([f"  - {json.dumps(tag)}" for tag in data.tags])
    problem_text = fix_math_blocks(data.problem_text)
    solution = fix_math_blocks(data.solution)
    markdown = f"""---
year: {data.year}
macro_area: {json.dumps(data.macro_area)}
topic: {json.dumps(data.topic)}
difficulty: {data.difficulty}
tags:
{tags_str}
---
# Problem Text
{problem_text}

# Solution
{solution}
"""
    return markdown

def run_cmd(cmd: str, cwd: str = PROJECT_ROOT, ignore_error: bool = False) -> bool:
    try:
        subprocess.run(cmd, shell=True, check=True, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError as e:
        if not ignore_error:
            print(f"Errore durante l'esecuzione di: {cmd}\n{e.stderr.decode()}")
        return False

import sys

async def main():
    topics = get_topics()
    
    config = LocalAgentConfig(
        model="gemini-3.5-flash",
        response_schema=ExerciseOutput,
        max_output_tokens=1500
    )
    
    os.makedirs(SUBMISSIONS_DIR, exist_ok=True)
    
    try:
        NUM_EXERCISES = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    except ValueError:
        print("Errore: Il numero di esercizi deve essere un numero intero.")
        return
        
    print(f"=== Generazione di {NUM_EXERCISES} esercizi in corso ===")
    
    generated_files = []
    
    for i in range(NUM_EXERCISES):
        async with Agent(config) as agent:
            selected_topic = random.choice(topics)
            complexity_profile = random.choices(
                ["standard_accessible", "elaborate_challenging"],
                weights=[0.7, 0.3],
                k=1
            )[0]
            
            if complexity_profile == "standard_accessible":
                complexity_instructions = """
            IMPORTANT: To guarantee accessibility for most students, ensure this specific exercise is direct and not overly elaborate.
            The solution should be concise, easy to follow, and avoid unnecessarily long or convoluted algebraic manipulations.
            Aim for an optimal balance between didactic value and simplicity. Keep the solution under 10 clear, essential steps."""
            else:
                complexity_instructions = """
            IMPORTANT: For this specific exercise, provide a slightly more involved problem that combines standard concepts or requires deeper reasoning.
            Keep the scenario realistic and avoid artificially convoluted creativity. The solution can be longer but must remain strictly rigorous and educational."""

            prompt = f"""
            You are a math professor in Italy creating high-quality, copyright-free math exercises for high school students.
            Select a specific sub-topic or problem related to the following curriculum area: {selected_topic}
            {complexity_instructions}
            
            Generate a relevant exercise. Make sure it is realistic, elegant, and uses proper mathematical notation.
            Provide both the problem text and a complete step-by-step solution in Italian language.
            Use LaTeX formatting for mathematical expressions.
            CRITICAL INSTRUCTION FOR MATH BLOCKS: When writing block/centered math using $$ ... $$ or environments like \\begin{{cases}}, you MUST place the $$ delimiters on their own independent, empty lines.
            The `problem_text` must contain ONLY the mathematical problem itself. 
            The `solution` must contain ONLY the mathematical steps to solve it.
            You MUST set the `generation_completed` field exactly to "COMPLETED".
            """
            
            print(f"[{i+1}/{NUM_EXERCISES}] Generazione esercizio su: {selected_topic}...")
            try:
                response = await agent.chat(prompt)
                data_dict = await response.structured_output()
                
                if data_dict:
                    exercise_data = ExerciseOutput(**data_dict)
                    md_content = format_markdown(exercise_data)
                    
                    safe_topic = re.sub(r'[^a-z0-9]+', '_', exercise_data.topic.lower()).strip('_')
                    filename_base = f"{safe_topic}_{random.randint(1000, 9999)}.md"
                    filepath = os.path.join(SUBMISSIONS_DIR, filename_base)
                    
                    with open(filepath, "w") as f:
                        f.write(md_content)
                    generated_files.append(filepath)
                    print(f" -> Salvato: submissions/pending/{filename_base}")
                else:
                    print(" -> Fallito (nessun output strutturato).")
            except Exception as e:
                print(f" -> Errore durante la generazione: {e}")

    if not generated_files:
        print("Nessun esercizio generato. Uscita.")
        return

    print("\n=== Inizio Automazione Git & Pull Request ===")
    
    timestamp = datetime.now().strftime("%Y%md%H%M%S")
    branch_name = f"feat/auto-exercises-{timestamp}"
    
    # Crea un nuovo branch
    if not run_cmd(f"git checkout -b {branch_name}"):
        print("Impossibile creare il branch. Interrompo.")
        return

    # Aggiungi e committa
    run_cmd(f"git add submissions/pending/*.md")
    if not run_cmd(f"git commit -m \"Aggiunti {len(generated_files)} nuovi esercizi generati da IA\""):
        print("Nessun file da committare.")
        return
        
    print(f"Commit effettuato sul branch '{branch_name}'.")

    # Controlla se la GitHub CLI è installata
    has_gh = run_cmd("gh --version", ignore_error=True)
    
    if has_gh:
        print("GitHub CLI trovata. Provo ad aprire la Pull Request in automatico...")
        # Pusha il branch sul fork origin/upstream (gh CLI handle forks for PRs nicely but usually needs the branch pushed)
        push_success = run_cmd(f"git push -u origin {branch_name}", ignore_error=True)
        if push_success:
            pr_cmd = f'gh pr create --title "Nuovi Esercizi ({len(generated_files)})" --body "Esercizi generati automaticamente tramite lo script BYOK."'
            if run_cmd(pr_cmd):
                print("✅ Pull Request creata con successo!")
            else:
                print("❌ Errore durante la creazione della PR tramite gh CLI.")
        else:
            print("❌ Impossibile pushare il branch su origin. Assicurati di avere un fork o i permessi.")
    else:
        print("⚠️ GitHub CLI (gh) non trovata.")
        print("\n=== ISTRUZIONI MANUALI ===")
        print(f"I file sono stati committati sul branch locale: {branch_name}")
        print("Per aprire la Pull Request, esegui:")
        print(f"  git push -u origin {branch_name}")
        print("  Poi vai su GitHub per creare la Pull Request dal tuo fork verso il repository principale.")

if __name__ == "__main__":
    asyncio.run(main())
