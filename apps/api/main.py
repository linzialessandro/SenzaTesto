import os
import logging
from contextlib import asynccontextmanager
from typing import Optional
from fastapi import FastAPI, HTTPException, Request, Query
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from mangum import Mangum
from pydantic import BaseModel
import asyncpg
from dotenv import load_dotenv


load_dotenv(os.path.expanduser('~/secrets/SenzaTesto/.env'))

db_pool = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global db_pool
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise Exception("DATABASE_URL environment variable is missing")
    
    import ssl
    import certifi
    ctx = ssl.create_default_context(cafile=certifi.where())

    db_pool = await asyncpg.create_pool(database_url, statement_cache_size=0, ssl=ctx)
    yield
    await db_pool.close()

app = FastAPI(title="SenzaTesto API", lifespan=lifespan)

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

allowed_origins_env = os.environ.get("ALLOWED_ORIGINS", "http://localhost:3000,https://linzialessandro.github.io")
allowed_origins = [origin.strip() for origin in allowed_origins_env.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins, 
    allow_credentials=True,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["Content-Type"],
)

class ExerciseResponse(BaseModel):
    id: int
    topic_id: int
    difficulty_level: int
    problem_text: str
    solution_text: str
    generated_hash: str
    short_code: str
    topic_macro_area: str
    topic_name: str
    year_number: int
    tags: Optional[list[str]] = []
    ai_generated: bool = False

@app.get("/")
@limiter.limit("30/minute")
def read_root(request: Request):
    return {"message": "Welcome to SenzaTesto API!"}

@app.get("/api/exercises")
@limiter.limit("30/minute")
async def get_exercises(
    request: Request,
    q: Optional[str] = Query(None, max_length=100),
    year: Optional[int] = None,
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0),
):
    if not db_pool:
        raise HTTPException(status_code=500, detail="Pool di connessioni al database non inizializzato")

    # Validazione anno scolastico
    if year is not None and (year < 1 or year > 5):
        raise HTTPException(status_code=400, detail="L'anno deve essere compreso tra 1 e 5")

    try:
        async with db_pool.acquire() as connection:
            # Costruzione dinamica della query con filtri parametrizzati
            base_query = """
                SELECT e.id, e.topic_id, e.difficulty_level, e.problem_text, e.solution_text, 
                       e.generated_hash, e.short_code, e.tags, e.ai_generated,
                       m.name as topic_macro_area, t.name as topic_name, c.year_number
                FROM exercises e
                JOIN topics t ON e.topic_id = t.id
                JOIN macro_areas m ON t.macro_area_id = m.id
                JOIN curriculum_years c ON m.year_id = c.id
            """

            conditions = []
            params = []
            param_idx = 1

            if q:
                conditions.append(
                    f"(e.search_vector @@ websearch_to_tsquery('italian', optimize_search_query(${param_idx})) OR e.short_code ILIKE ${param_idx})"
                )
                params.append(q)
                param_idx += 1

            if year is not None:
                conditions.append(f"c.year_number = ${param_idx}")
                params.append(year)
                param_idx += 1

            if conditions:
                base_query += " WHERE " + " AND ".join(conditions)

            # Ordinamento: per rilevanza se c'è ricerca testuale, altrimenti per data
            if q:
                base_query += " ORDER BY ts_rank(e.search_vector, websearch_to_tsquery('italian', optimize_search_query($1))) DESC, e.created_at DESC"
            else:
                base_query += " ORDER BY e.created_at DESC"

            # Paginazione
            base_query += f" LIMIT ${param_idx} OFFSET ${param_idx + 1}"
            params.append(limit)
            params.append(offset)

            records = await connection.fetch(base_query, *params)
            return [dict(record) for record in records]
    except HTTPException:
        raise
    except Exception:
        logging.exception("Errore durante il recupero degli esercizi")
        raise HTTPException(status_code=500, detail="Errore interno del server")


handler = Mangum(app)
