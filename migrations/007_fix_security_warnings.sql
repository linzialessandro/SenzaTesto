-- =======================================================================
-- Migrazione 007: Risoluzione warning di sicurezza Supabase
--
-- Problema 1 — Function Search Path Mutable:
--   Le funzioni update_exercise_search_vector, random_string,
--   generate_short_code, update_updated_at_column e optimize_search_query
--   non hanno SET search_path impostato. Un attaccante potrebbe sfruttarlo
--   con un "search_path hijacking" per sostituire oggetti di sistema.
--   Fix: aggiungere SET search_path = public a ogni funzione.
--
-- Problema 2 — RLS Policy Always True:
--   Le policy INSERT su search_logs e solution_views usano WITH CHECK (true),
--   che consente a chiunque di inserire dati arbitrari direttamente via API.
--   Fix: rendere SECURITY DEFINER le funzioni RPC che eseguono il logging
--   (search_exercises, log_solution_view), così le tabelle analytics possono
--   avere RLS senza policy pubbliche di INSERT.
-- =======================================================================

BEGIN;

-- =============================================
-- 1. Fix: random_string — aggiungere SET search_path
-- =============================================
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
$$ LANGUAGE plpgsql
SET search_path = public;

-- =============================================
-- 2. Fix: generate_short_code — aggiungere SET search_path
-- =============================================
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
            new_code := random_string(6);
            EXIT WHEN NOT EXISTS (SELECT 1 FROM exercises WHERE short_code = new_code);
            RAISE EXCEPTION 'Impossibile generare short_code unico dopo 100 tentativi';
        END IF;
    END LOOP;
    NEW.short_code := new_code;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public;

-- =============================================
-- 3. Fix: update_exercise_search_vector — aggiungere SET search_path
-- =============================================
CREATE OR REPLACE FUNCTION update_exercise_search_vector() RETURNS trigger AS $$
BEGIN
    NEW.search_vector :=
        setweight(to_tsvector('italian', coalesce(NEW.problem_text, '')), 'A') ||
        setweight(to_tsvector('italian', coalesce((SELECT t.name FROM topics t WHERE t.id = NEW.topic_id), '')), 'B') ||
        setweight(to_tsvector('italian', coalesce((SELECT m.name FROM macro_areas m JOIN topics t ON m.id = t.macro_area_id WHERE t.id = NEW.topic_id), '')), 'C') ||
        setweight(to_tsvector('italian', coalesce(array_to_string(NEW.tags, ' '), '')), 'A');
    RETURN NEW;
END
$$ LANGUAGE plpgsql
SET search_path = public;

-- =============================================
-- 4. Fix: update_updated_at_column — aggiungere SET search_path
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public;

-- =============================================
-- 5. Fix: optimize_search_query — aggiungere SET search_path
--    (mantiene IMMUTABLE, compatibile con SET search_path)
-- =============================================
CREATE OR REPLACE FUNCTION optimize_search_query(q text) RETURNS text AS $$
BEGIN
  IF q IS NULL OR q = '' THEN
    RETURN q;
  END IF;

  -- Se l'utente usa funzioni avanzate (virgolette, OR, esclusione con -), lasciamo passare
  IF q LIKE '%"%' OR q LIKE '%-%' OR q ILIKE '% OR %' THEN
    RETURN q;
  END IF;

  -- Sostituisce spazi multipli con ' OR ' per allargare la ricerca
  RETURN regexp_replace(trim(q), '\s+', ' OR ', 'g');
END;
$$ LANGUAGE plpgsql IMMUTABLE
SET search_path = public;


-- =============================================
-- 6. Fix RLS Policy Always True:
--    Convertire log_solution_view e search_exercises a SECURITY DEFINER
--    e rimuovere le policy INSERT pubbliche su search_logs/solution_views.
-- =============================================

-- 6a. Rimuovere le policy INSERT pubbliche (non più necessarie)
DROP POLICY IF EXISTS "Inserimento anonimo su search_logs" ON search_logs;
DROP POLICY IF EXISTS "Inserimento anonimo su solution_views" ON solution_views;

-- 6b. Ricreare log_solution_view come SECURITY DEFINER
--     La funzione gira con i privilegi del proprietario del DB (postgres),
--     così può scrivere su solution_views senza esporre una policy pubblica.
CREATE OR REPLACE FUNCTION log_solution_view(hash text)
RETURNS void AS $$
BEGIN
    INSERT INTO solution_views (exercise_hash) VALUES (hash);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- 6c. Ricreare search_exercises come SECURITY DEFINER
--     Mantiene tutta la logica precedente; il cambio a SECURITY DEFINER
--     permette l'INSERT su search_logs senza policy pubbliche.
DROP FUNCTION IF EXISTS search_exercises(text, integer, text, integer, integer);
CREATE OR REPLACE FUNCTION search_exercises(
  search_query text DEFAULT NULL,
  filter_year int DEFAULT NULL,
  filter_topic text DEFAULT NULL,
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
  -- Log anonimo della ricerca (solo prima pagina per non spammare i log)
  IF page_offset = 0 AND (search_query IS NOT NULL OR filter_topic IS NOT NULL OR filter_year IS NOT NULL) THEN
    INSERT INTO search_logs (search_query, filter_topic, filter_year)
    VALUES (NULLIF(trim(search_query), ''), NULLIF(trim(filter_topic), ''), filter_year);
  END IF;

  RETURN QUERY
  SELECT e.id, e.topic_id, e.difficulty_level, e.problem_text, e.solution_text,
         e.generated_hash::text, e.short_code::text, e.tags,
         m.name::text as topic_macro_area, t.name::text as topic_name, c.year_number,
         e.ai_generated
  FROM exercises e
  JOIN topics t ON e.topic_id = t.id
  JOIN macro_areas m ON t.macro_area_id = m.id
  JOIN curriculum_years c ON m.year_id = c.id
  WHERE (search_query IS NULL OR search_query = '' OR e.search_vector @@ websearch_to_tsquery('italian', optimize_search_query(search_query)) OR e.short_code ILIKE search_query)
    AND (filter_year IS NULL OR c.year_number = filter_year)
    AND (filter_topic IS NULL OR e.search_vector @@ websearch_to_tsquery('italian', filter_topic))
  ORDER BY
    CASE WHEN search_query IS NOT NULL AND search_query != '' THEN ts_rank(e.search_vector, websearch_to_tsquery('italian', optimize_search_query(search_query))) ELSE 0 END DESC,
    e.created_at DESC
  LIMIT LEAST(page_limit, 100) OFFSET page_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

COMMIT;
