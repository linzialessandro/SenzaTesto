# API Context

## Ubiquitous Language

- **Exercise**: A math problem along with its difficulty level, LaTeX representation, solution, and tags.
- **Topic**: A specific math topic (e.g., "equazioni di secondo grado").
- **Macro Area**: A broader category of topics (e.g., "Algebra Base").
- **Curriculum Year**: The target school year for the topics (1-5).
- **Search Vector**: Full-text search index (`tsvector`) computed from the problem text, tags, topic name, and macro area name.
- **Short Code**: A unique 5-character string assigned to an exercise for easy sharing.

## Architecture

- **Primary Data Fetching**: The frontend now connects directly to PostgreSQL (Supabase) using RPC functions (e.g., `search_exercises`) for search queries.
- **Framework**: FastAPI (Python) is maintained for potential server-side operations, but primary read queries bypass it for performance.
- **Database Access**: `asyncpg` directly (no ORM) when using the Python API. Raw SQL inside Supabase RPC for direct queries.
- **Deployment**: Configured for AWS Lambda using `Mangum`.
- **Database Engine**: PostgreSQL (Supabase) using Row Level Security (RLS) for public read-only access.
- **Rate Limiting**: Uses `slowapi` on the FastAPI layer to restrict the number of requests per IP and prevent abuse (DDoS).
