-- Funzione RPC per la ricerca degli esercizi con paginazione
CREATE OR REPLACE FUNCTION search_exercises(
  search_query text DEFAULT NULL,
  filter_year int DEFAULT NULL,
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
  WHERE (search_query IS NULL OR search_query = '' OR e.search_vector @@ websearch_to_tsquery('italian', search_query) OR e.short_code ILIKE search_query)
    AND (filter_year IS NULL OR c.year_number = filter_year)
  ORDER BY 
    CASE WHEN search_query IS NOT NULL AND search_query != '' THEN ts_rank(e.search_vector, websearch_to_tsquery('italian', search_query)) ELSE 0 END DESC, 
    e.created_at DESC
  LIMIT LEAST(page_limit, 100) OFFSET page_offset;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER
SET search_path = public;
