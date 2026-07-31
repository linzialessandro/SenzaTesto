-- Add difficulty filtering to the public search RPC and bound public inputs.
--
-- Apply explicitly with:
--   python scripts/run_migration.py 008_add_difficulty_filter.sql --apply

BEGIN;

ALTER TABLE public.search_logs
  ADD COLUMN IF NOT EXISTS filter_difficulty INT
  CHECK (filter_difficulty BETWEEN 1 AND 5);

DROP FUNCTION IF EXISTS public.search_exercises(text, integer, text, integer, integer);

CREATE FUNCTION public.search_exercises(
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
    VALUES (
      NULLIF(trim(search_query), ''),
      NULLIF(trim(filter_topic), ''),
      filter_year,
      filter_difficulty
    );
  END IF;

  RETURN QUERY
  SELECT
    e.id,
    e.topic_id,
    e.difficulty_level,
    e.problem_text,
    e.solution_text,
    e.generated_hash::text,
    e.short_code::text,
    e.tags,
    m.name::text AS topic_macro_area,
    t.name::text AS topic_name,
    c.year_number,
    e.ai_generated
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
  ORDER BY
    CASE WHEN search_query IS NOT NULL AND search_query != ''
      THEN ts_rank(e.search_vector, websearch_to_tsquery('italian', public.optimize_search_query(search_query)))
      ELSE 0
    END DESC,
    e.created_at DESC
  LIMIT page_limit OFFSET page_offset;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = '';

CREATE OR REPLACE FUNCTION public.log_solution_view(hash text)
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
GRANT EXECUTE ON FUNCTION public.search_exercises(text, integer, text, integer, integer, integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.log_solution_view(text) TO anon, authenticated;

COMMIT;
