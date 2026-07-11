import psycopg2
import os
import argparse
from datetime import datetime, timedelta

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

def get_db_connection():
    env = load_env()
    db_url = os.environ.get('DATABASE_URL') or env.get('DATABASE_URL')
    if not db_url:
        print("Errore: DATABASE_URL non trovata nelle variabili d'ambiente o nel file .env segreto.")
        exit(1)
    return psycopg2.connect(db_url)

def fetch_data():
    conn = get_db_connection()
    cur = conn.cursor()
    
    # Top 10 Search Queries
    cur.execute("""
        SELECT search_query, count(*) as cnt 
        FROM search_logs 
        WHERE search_query IS NOT NULL AND search_query != ''
        GROUP BY search_query 
        ORDER BY cnt DESC 
        LIMIT 10
    """)
    top_searches = cur.fetchall()
    
    # Top Topics
    cur.execute("""
        SELECT filter_topic, count(*) as cnt 
        FROM search_logs 
        WHERE filter_topic IS NOT NULL AND filter_topic != ''
        GROUP BY filter_topic 
        ORDER BY cnt DESC 
        LIMIT 5
    """)
    top_topics = cur.fetchall()
    
    # Top Years
    cur.execute("""
        SELECT filter_year, count(*) as cnt 
        FROM search_logs 
        WHERE filter_year IS NOT NULL
        GROUP BY filter_year 
        ORDER BY cnt DESC 
        LIMIT 5
    """)
    top_years = cur.fetchall()
    
    # Top Viewed Solutions
    cur.execute("""
        SELECT e.short_code, t.name, count(v.id) as cnt 
        FROM solution_views v
        JOIN exercises e ON v.exercise_hash = e.generated_hash
        JOIN topics t ON e.topic_id = t.id
        GROUP BY e.short_code, t.name
        ORDER BY cnt DESC
        LIMIT 10
    """)
    top_solutions = cur.fetchall()
    
    # Total searches and views
    cur.execute("SELECT count(*) FROM search_logs")
    total_searches = cur.fetchone()[0]
    
    cur.execute("SELECT count(*) FROM solution_views")
    total_views = cur.fetchone()[0]
    
    cur.close()
    conn.close()
    
    return {
        "top_searches": top_searches,
        "top_topics": top_topics,
        "top_years": top_years,
        "top_solutions": top_solutions,
        "total_searches": total_searches,
        "total_views": total_views
    }

def print_terminal(data):
    try:
        from rich.console import Console
        from rich.table import Table
        from rich.panel import Panel
    except ImportError:
        print("La libreria 'rich' non è installata. Esegui: pip install rich")
        exit(1)

    console = Console()
    
    console.print(Panel.fit(f"[bold blue]📊 SenzaTesto Analytics[/bold blue]\nRicerche Totali: {data['total_searches']} | Soluzioni Viste: {data['total_views']}"))
    
    # Searches
    t1 = Table(title="Top 10 Ricerche")
    t1.add_column("Query", style="cyan")
    t1.add_column("Volte", style="magenta")
    for q, c in data["top_searches"]:
        t1.add_row(q, str(c))
        
    # Topics
    t2 = Table(title="Top Argomenti Filtrati")
    t2.add_column("Argomento", style="cyan")
    t2.add_column("Volte", style="magenta")
    for q, c in data["top_topics"]:
        t2.add_row(q, str(c))
        
    # Solutions
    t3 = Table(title="Top Soluzioni Visualizzate")
    t3.add_column("Codice", style="cyan")
    t3.add_column("Argomento", style="green")
    t3.add_column("Visualizzazioni", style="magenta")
    for code, topic, c in data["top_solutions"]:
        t3.add_row(code, topic, str(c))

    console.print(t1)
    console.print(t2)
    console.print(t3)

def generate_markdown(data):
    md = f"# 📊 Report Analytics SenzaTesto\n\n"
    md += f"**Generato il:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
    md += f"- **Ricerche Totali:** {data['total_searches']}\n"
    md += f"- **Soluzioni Visualizzate Totali:** {data['total_views']}\n\n"
    
    md += "## 🔍 Top 10 Ricerche\n"
    md += "| Query | Frequenza |\n|---|---|\n"
    for q, c in data["top_searches"]:
        md += f"| {q} | {c} |\n"
        
    md += "\n## 📚 Top Argomenti Filtrati\n"
    md += "| Argomento | Frequenza |\n|---|---|\n"
    for q, c in data["top_topics"]:
        md += f"| {q} | {c} |\n"
        
    md += "\n## 💡 Top Soluzioni Visualizzate\n"
    md += "| Codice | Argomento | Visualizzazioni |\n|---|---|---|\n"
    for code, topic, c in data["top_solutions"]:
        md += f"| `{code}` | {topic} | {c} |\n"
        
    return md

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--markdown', action='store_true', help="Genera output in markdown")
    parser.add_argument('--out', type=str, help="File di output per il markdown")
    args = parser.parse_args()
    
    data = fetch_data()
    
    if args.markdown:
        md = generate_markdown(data)
        if args.out:
            with open(args.out, 'w') as f:
                f.write(md)
            print(f"Report salvato in {args.out}")
        else:
            print(md)
    else:
        print_terminal(data)
