-- 1. Create search_logs table
CREATE TABLE IF NOT EXISTS search_logs (
    id BIGSERIAL PRIMARY KEY,
    search_query TEXT,
    filter_topic TEXT,
    filter_year INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Create solution_views table
CREATE TABLE IF NOT EXISTS solution_views (
    id BIGSERIAL PRIMARY KEY,
    exercise_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Update search_exercises RPC to log the query
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
  -- Log the search anonymously (only if it's the first page to avoid spamming logs on pagination)
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
$$ LANGUAGE plpgsql SECURITY INVOKER
SET search_path = public;

-- 4. Create RPC to log solution views
CREATE OR REPLACE FUNCTION log_solution_view(hash text)
RETURNS void AS $$
BEGIN
    INSERT INTO solution_views (exercise_hash) VALUES (hash);
END;
$$ LANGUAGE plpgsql SECURITY INVOKER
SET search_path = public;
