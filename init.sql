-- Schema di inizializzazione per SenzaTesto
-- Struttura gerarchica: anni → macro-aree → argomenti → esercizi

-- ATTENZIONE: Questo script elimina e ricostruisce le tabelle da zero.
DROP FUNCTION IF EXISTS public.search_exercises(text, integer, text, integer, integer, integer);
DROP FUNCTION IF EXISTS public.search_exercises(text, integer, text, integer, integer);
DROP FUNCTION IF EXISTS public.log_solution_view(text);
DROP TABLE IF EXISTS solution_views CASCADE;
DROP TABLE IF EXISTS search_logs CASCADE;
DROP TABLE IF EXISTS exercises CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS macro_areas CASCADE;
DROP TABLE IF EXISTS curriculum_years CASCADE;

-- 1. Anni del curriculum
CREATE TABLE curriculum_years (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    year_number INT NOT NULL UNIQUE CHECK (year_number >= 1 AND year_number <= 5),
    description VARCHAR(255)
);

-- 2. Macro-aree disciplinari
CREATE TABLE macro_areas (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    year_id BIGINT NOT NULL REFERENCES curriculum_years(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    UNIQUE(year_id, name)
);

-- 3. Argomenti specifici
CREATE TABLE topics (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    macro_area_id BIGINT NOT NULL REFERENCES macro_areas(id) ON DELETE CASCADE,
    name VARCHAR(512) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    UNIQUE(macro_area_id, name)
);

-- 4. Esercizi
CREATE TABLE exercises (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    topic_id BIGINT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    difficulty_level INT NOT NULL CHECK (difficulty_level >= 1 AND difficulty_level <= 5),
    problem_text TEXT NOT NULL,
    solution_text TEXT NOT NULL,
    generated_hash VARCHAR(64) UNIQUE NOT NULL,
    tags TEXT[],
    short_code VARCHAR(6) UNIQUE,
    search_vector tsvector,
    ai_generated BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Funzione per generare stringhe casuali (A-Z, 0-9)
CREATE OR REPLACE FUNCTION random_string(length integer) RETURNS text AS $$
DECLARE
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}';
  result text := '';
  i integer := 0;
BEGIN
  IF length < 0 THEN
    RAISE EXCEPTION 'La lunghezza non può essere negativa';
  END IF;
  FOR i IN 1..length LOOP
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Trigger function per assegnare lo short_code con limite di tentativi
CREATE OR REPLACE FUNCTION generate_short_code() RETURNS trigger AS $$
DECLARE
    new_code VARCHAR(6);
    attempts int := 0;
BEGIN
    LOOP
        new_code := random_string(5);
        EXIT WHEN NOT EXISTS (SELECT 1 FROM exercises WHERE short_code = new_code);
        attempts := attempts + 1;
        IF attempts > 100 THEN
            -- Fallback a 6 caratteri per ridurre le collisioni
            new_code := random_string(6);
            EXIT WHEN NOT EXISTS (SELECT 1 FROM exercises WHERE short_code = new_code);
            RAISE EXCEPTION 'Impossibile generare short_code unico dopo 100 tentativi';
        END IF;
    END LOOP;
    NEW.short_code := new_code;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_generate_short_code
BEFORE INSERT ON exercises
FOR EACH ROW
WHEN (NEW.short_code IS NULL)
EXECUTE FUNCTION generate_short_code();

-- Trigger per aggiornare il vettore di ricerca full-text
CREATE OR REPLACE FUNCTION update_exercise_search_vector() RETURNS trigger AS $$
BEGIN
    NEW.search_vector :=
        setweight(to_tsvector('italian', coalesce(NEW.problem_text, '')), 'A') ||
        setweight(to_tsvector('italian', coalesce((SELECT t.name FROM topics t WHERE t.id = NEW.topic_id), '')), 'B') ||
        setweight(to_tsvector('italian', coalesce((SELECT m.name FROM macro_areas m JOIN topics t ON m.id = t.macro_area_id WHERE t.id = NEW.topic_id), '')), 'C') ||
        setweight(to_tsvector('italian', coalesce(array_to_string(NEW.tags, ' '), '')), 'A');
    RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_exercise_search_vector
BEFORE INSERT OR UPDATE ON exercises
FOR EACH ROW EXECUTE FUNCTION update_exercise_search_vector();

-- Trigger per aggiornare automaticamente updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_exercises_updated_at
BEFORE UPDATE ON exercises
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Indici
CREATE INDEX idx_macro_areas_year ON macro_areas(year_id);
CREATE INDEX idx_topics_macro_area ON topics(macro_area_id);
CREATE INDEX idx_exercises_topic ON exercises(topic_id);
CREATE INDEX idx_exercises_difficulty ON exercises(difficulty_level);
CREATE INDEX idx_exercises_search_vector ON exercises USING GIN (search_vector);
CREATE INDEX idx_exercises_created_at ON exercises(created_at DESC);

-- Sicurezza: Abilitazione Row Level Security
ALTER TABLE curriculum_years ENABLE ROW LEVEL SECURITY;
ALTER TABLE macro_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

-- Forzatura RLS anche per il proprietario della tabella
ALTER TABLE curriculum_years FORCE ROW LEVEL SECURITY;
ALTER TABLE macro_areas FORCE ROW LEVEL SECURITY;
ALTER TABLE topics FORCE ROW LEVEL SECURITY;
ALTER TABLE exercises FORCE ROW LEVEL SECURITY;

-- Policy di accesso pubblico in sola lettura
CREATE POLICY "Accesso pubblico in sola lettura a curriculum_years" ON curriculum_years FOR SELECT USING (true);
CREATE POLICY "Accesso pubblico in sola lettura a macro_areas" ON macro_areas FOR SELECT USING (true);
CREATE POLICY "Accesso pubblico in sola lettura a topics" ON topics FOR SELECT USING (true);
CREATE POLICY "Accesso pubblico in sola lettura a exercises" ON exercises FOR SELECT USING (true);

-- Inserimento anni del curriculum
INSERT INTO curriculum_years (year_number, description) VALUES
(1, 'Primo Anno'),
(2, 'Secondo Anno'),
(3, 'Terzo Anno'),
(4, 'Quarto Anno'),
(5, 'Quinto Anno');

-- Analytics are write-only from the public client. They are exposed solely
-- through the guarded RPCs below, never by table policies.
CREATE TABLE search_logs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    search_query TEXT,
    filter_topic TEXT,
    filter_year INT CHECK (filter_year BETWEEN 1 AND 5),
    filter_difficulty INT CHECK (filter_difficulty BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE solution_views (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    exercise_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE search_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_logs FORCE ROW LEVEL SECURITY;
ALTER TABLE solution_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_views FORCE ROW LEVEL SECURITY;

-- Hardened function definitions. Qualifying every relation makes the empty
-- search_path safe for SECURITY DEFINER functions.
CREATE OR REPLACE FUNCTION random_string(length integer) RETURNS text AS $$
DECLARE
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}';
  result text := '';
  i integer := 0;
BEGIN
  IF length < 0 THEN
    RAISE EXCEPTION 'La lunghezza non può essere negativa';
  END IF;
  FOR i IN 1..length LOOP
    result := result || chars[1 + random() * (array_length(chars, 1) - 1)];
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql
SET search_path = '';

CREATE OR REPLACE FUNCTION generate_short_code() RETURNS trigger AS $$
DECLARE
    new_code VARCHAR(6);
    attempts int := 0;
BEGIN
    LOOP
        new_code := public.random_string(5);
        EXIT WHEN NOT EXISTS (SELECT 1 FROM public.exercises WHERE short_code = new_code);
        attempts := attempts + 1;
        IF attempts > 100 THEN
            new_code := public.random_string(6);
            EXIT WHEN NOT EXISTS (SELECT 1 FROM public.exercises WHERE short_code = new_code);
            RAISE EXCEPTION 'Impossibile generare short_code unico dopo 100 tentativi';
        END IF;
    END LOOP;
    NEW.short_code := new_code;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = '';

CREATE OR REPLACE FUNCTION update_exercise_search_vector() RETURNS trigger AS $$
BEGIN
    NEW.search_vector :=
        setweight(to_tsvector('italian', coalesce(NEW.problem_text, '')), 'A') ||
        setweight(to_tsvector('italian', coalesce((SELECT t.name FROM public.topics AS t WHERE t.id = NEW.topic_id), '')), 'B') ||
        setweight(to_tsvector('italian', coalesce((SELECT m.name FROM public.macro_areas AS m JOIN public.topics AS t ON m.id = t.macro_area_id WHERE t.id = NEW.topic_id), '')), 'C') ||
        setweight(to_tsvector('italian', coalesce(array_to_string(NEW.tags, ' '), '')), 'A');
    RETURN NEW;
END
$$ LANGUAGE plpgsql
SET search_path = '';

CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = '';

CREATE OR REPLACE FUNCTION optimize_search_query(q text) RETURNS text AS $$
BEGIN
  IF q IS NULL OR q = '' THEN
    RETURN q;
  END IF;
  IF q LIKE '%"%' OR q LIKE '%-%' OR q ILIKE '% OR %' THEN
    RETURN q;
  END IF;
  RETURN regexp_replace(trim(q), '\\s+', ' OR ', 'g');
END;
$$ LANGUAGE plpgsql IMMUTABLE
SET search_path = '';

CREATE FUNCTION search_exercises(
  search_query text DEFAULT NULL,
  filter_year int DEFAULT NULL,
  filter_topic text DEFAULT NULL,
  filter_difficulty int DEFAULT NULL,
  page_limit int DEFAULT 50,
  page_offset int DEFAULT 0
)
RETURNS TABLE (
  id bigint,
  topic_id bigint,
  difficulty_level int,
  problem_text text,
  solution_text text,
  generated_hash text,
  short_code text,
  tags text[],
  topic_macro_area text,
  topic_name text,
  year_number int,
  ai_generated boolean
) AS $$
BEGIN
  IF page_limit IS NULL OR page_limit NOT BETWEEN 1 AND 100 THEN
    RAISE EXCEPTION 'page_limit must be between 1 and 100' USING ERRCODE = '22023';
  END IF;
  IF page_offset IS NULL OR page_offset < 0 OR page_offset > 10000 THEN
    RAISE EXCEPTION 'page_offset must be between 0 and 10000' USING ERRCODE = '22023';
  END IF;
  IF filter_year IS NOT NULL AND filter_year NOT BETWEEN 1 AND 5 THEN
    RAISE EXCEPTION 'filter_year must be between 1 and 5' USING ERRCODE = '22023';
  END IF;
  IF filter_difficulty IS NOT NULL AND filter_difficulty NOT BETWEEN 1 AND 5 THEN
    RAISE EXCEPTION 'filter_difficulty must be between 1 and 5' USING ERRCODE = '22023';
  END IF;
  IF search_query IS NOT NULL AND char_length(search_query) > 100 THEN
    RAISE EXCEPTION 'search_query must not exceed 100 characters' USING ERRCODE = '22023';
  END IF;
  IF filter_topic IS NOT NULL AND char_length(filter_topic) > 200 THEN
    RAISE EXCEPTION 'filter_topic must not exceed 200 characters' USING ERRCODE = '22023';
  END IF;

  IF page_offset = 0
    AND (search_query IS NOT NULL OR filter_topic IS NOT NULL OR filter_year IS NOT NULL OR filter_difficulty IS NOT NULL) THEN
    INSERT INTO public.search_logs (search_query, filter_topic, filter_year, filter_difficulty)
    VALUES (NULLIF(trim(search_query), ''), NULLIF(trim(filter_topic), ''), filter_year, filter_difficulty);
  END IF;

  RETURN QUERY
  SELECT e.id, e.topic_id, e.difficulty_level, e.problem_text, e.solution_text,
         e.generated_hash::text, e.short_code::text, e.tags,
         m.name::text, t.name::text, c.year_number, e.ai_generated
  FROM public.exercises AS e
  JOIN public.topics AS t ON e.topic_id = t.id
  JOIN public.macro_areas AS m ON t.macro_area_id = m.id
  JOIN public.curriculum_years AS c ON m.year_id = c.id
  WHERE (search_query IS NULL OR search_query = ''
      OR e.search_vector @@ websearch_to_tsquery('italian', public.optimize_search_query(search_query))
      OR e.short_code ILIKE search_query)
    AND (filter_year IS NULL OR c.year_number = filter_year)
    AND (filter_topic IS NULL OR e.search_vector @@ websearch_to_tsquery('italian', filter_topic))
    AND (filter_difficulty IS NULL OR e.difficulty_level = filter_difficulty)
  ORDER BY CASE WHEN search_query IS NOT NULL AND search_query != ''
      THEN ts_rank(e.search_vector, websearch_to_tsquery('italian', public.optimize_search_query(search_query)))
      ELSE 0 END DESC,
    e.created_at DESC
  LIMIT page_limit OFFSET page_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = '';

CREATE FUNCTION log_solution_view(hash text)
RETURNS void AS $$
BEGIN
  IF hash IS NULL OR hash !~ '^[a-f0-9]{64}$' THEN
    RAISE EXCEPTION 'hash must be a SHA-256 hexadecimal digest' USING ERRCODE = '22023';
  END IF;
  INSERT INTO public.solution_views (exercise_hash) VALUES (hash);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = '';

REVOKE EXECUTE ON FUNCTION public.search_exercises(text, integer, text, integer, integer, integer) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.log_solution_view(text) FROM PUBLIC;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon')
    AND EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    EXECUTE 'GRANT USAGE ON SCHEMA public TO anon, authenticated';
    EXECUTE 'GRANT SELECT ON TABLE public.curriculum_years, public.macro_areas, public.topics, public.exercises TO anon, authenticated';
    EXECUTE 'GRANT EXECUTE ON FUNCTION public.search_exercises(text, integer, text, integer, integer, integer) TO anon, authenticated';
    EXECUTE 'GRANT EXECUTE ON FUNCTION public.log_solution_view(text) TO anon, authenticated';
  END IF;
END;
$$;
