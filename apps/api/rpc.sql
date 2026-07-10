-- Create a helper function to optimize search queries
CREATE OR REPLACE FUNCTION optimize_search_query(q text) RETURNS text AS $$
BEGIN
  IF q IS NULL OR q = '' THEN
    RETURN q;
  END IF;
  
  -- If user uses advanced features like quotes, explicit OR, or minus for exclude, trust their query
  IF q LIKE '%"%' OR q LIKE '%-%' OR q ILIKE '% OR %' THEN
    RETURN q;
  END IF;

  -- Replace one or more spaces with ' OR ' to broaden the search, ts_rank will still prioritize matches with multiple words
  RETURN regexp_replace(trim(q), '\s+', ' OR ', 'g');
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Funzione RPC per la ricerca degli esercizi con paginazione
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
  year_number int
) AS $$
BEGIN
  RETURN QUERY
  SELECT e.id, e.topic_id, e.difficulty_level, e.problem_text, e.solution_text, 
         e.generated_hash::text, e.short_code::text, e.tags,
         m.name::text as topic_macro_area, t.name::text as topic_name, c.year_number
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
