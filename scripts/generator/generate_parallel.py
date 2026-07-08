import os
import random
import asyncio
import re
import json
import sys
from datetime import datetime
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from google.antigravity import Agent, LocalAgentConfig

# Load env
load_dotenv()
if not os.environ.get("GEMINI_API_KEY"):
    fallback_path = os.path.expanduser("~/secrets/Submissions-per-SenzaTesto/antigravity-sdk/.env")
    if os.path.exists(fallback_path):
        load_dotenv(fallback_path)
    else:
        print("Errore: GEMINI_API_KEY non trovata.")
        exit(1)

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
CURRICULUM_PATH = os.path.join(PROJECT_ROOT, "docs", "curriculum-italiano.md")
SUBMISSIONS_DIR = os.path.join(PROJECT_ROOT, "submissions", "pending")

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
    return f"""---
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

async def generate_one(topics, config, sem, index):
    async with sem:
        selected_topic = random.choice(topics)
        complexity_profile = random.choices(
            ["standard_accessible", "elaborate_challenging"],
            weights=[0.7, 0.3],
            k=1
        )[0]
        
        if complexity_profile == "standard_accessible":
            complexity_instructions = """
        IMPORTANT: To guarantee accessibility, ensure this specific exercise is extremely direct.
        The solution MUST be concise, easy to follow, and under 5-8 clear steps."""
        else:
            complexity_instructions = """
        IMPORTANT: For this specific exercise, provide a slightly more involved problem combining standard concepts.
        However, it MUST REMAIN A SINGLE FOCUSED QUESTION, not a multi-part exam."""

        prompt = f"""
        You are a math professor in Italy creating high-quality, copyright-free math exercises for high school students.
        Select a specific sub-topic or problem related to the following curriculum area: {selected_topic}
        {complexity_instructions}
        
        CRITICAL RULES TO PREVENT OVER-GENERATION:
        1. Generate a SINGLE, highly focused question.
        2. DO NOT generate multi-part problems (e.g., no "1. ... 2. ... 3. ...").
        3. DO NOT generate long "Problemi di Maturità" or exhaustive real-world scenarios.
        4. Keep the text and solution strictly under 400 words total.
        
        Provide both the problem text and a complete step-by-step solution in Italian language.
        Use LaTeX formatting for mathematical expressions.
        CRITICAL INSTRUCTION FOR MATH BLOCKS: When writing block/centered math using $$ ... $$ or environments like \\begin{{cases}}, you MUST place the $$ delimiters on their own independent, empty lines.
        The `problem_text` must contain ONLY the mathematical problem itself. 
        The `solution` must contain ONLY the mathematical steps to solve it.
        You MUST set the `generation_completed` field exactly to "COMPLETED".
        """
        
        print(f"Avvio generazione esercizio {index}...")
        try:
            async with Agent(config) as agent:
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
                    print(f" -> Esercizio {index} salvato: {filename_base}")
                    return filepath
                else:
                    print(f" -> Esercizio {index} fallito (nessun output strutturato).")
        except Exception as e:
            print(f" -> Esercizio {index} errore: {e}")
    return None

async def main():
    topics = get_topics()
    config = LocalAgentConfig(
        model="gemini-3.5-flash",
        response_schema=ExerciseOutput,
        max_output_tokens=1000
    )
    os.makedirs(SUBMISSIONS_DIR, exist_ok=True)
    
    try:
        NUM_EXERCISES = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    except ValueError:
        print("Errore: Il numero di esercizi deve essere un numero intero.")
        return
        
    print(f"=== Generazione Parallela di {NUM_EXERCISES} esercizi ===")
    sem = asyncio.Semaphore(8) # Usiamo 8 per velocizzare ulteriormente mantenendo ragionevole il rate limit
    tasks = [generate_one(topics, config, sem, i+1) for i in range(NUM_EXERCISES)]
    results = await asyncio.gather(*tasks)
    generated = [r for r in results if r is not None]
    print(f"=== Generati con successo {len(generated)}/{NUM_EXERCISES} esercizi ===")

if __name__ == "__main__":
    asyncio.run(main())
