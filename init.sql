-- update_schema.sql: Deeply nested structure for SenzaTesto

-- WARNING: This will drop the existing tables to rebuild the schema cleanly.
DROP TABLE IF EXISTS exercises CASCADE;
DROP TABLE IF EXISTS topics CASCADE;
DROP TABLE IF EXISTS macro_areas CASCADE;
DROP TABLE IF EXISTS curriculum_years CASCADE;

-- 1. Curriculum Years
CREATE TABLE curriculum_years (
    id SERIAL PRIMARY KEY,
    year_number INT NOT NULL UNIQUE CHECK (year_number >= 1 AND year_number <= 5),
    description VARCHAR(255)
);

-- 2. Macro Areas
CREATE TABLE macro_areas (
    id SERIAL PRIMARY KEY,
    year_id INT NOT NULL REFERENCES curriculum_years(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    UNIQUE(year_id, name)
);

-- 3. Specific Topics
CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    macro_area_id INT NOT NULL REFERENCES macro_areas(id) ON DELETE CASCADE,
    name VARCHAR(512) NOT NULL,
    UNIQUE(macro_area_id, name)
);

-- 4. Exercises
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    topic_id INT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    difficulty_level INT NOT NULL CHECK (difficulty_level >= 1 AND difficulty_level <= 5),
    problem_text TEXT NOT NULL,
    solution_text TEXT NOT NULL,
    generated_hash VARCHAR(64) UNIQUE NOT NULL,
    tags TEXT[],
    short_code VARCHAR(6) UNIQUE,
    search_vector tsvector,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Funzione per generare stringhe casuali (A-Z, 0-9)
CREATE OR REPLACE FUNCTION random_string(length integer) RETURNS text AS $$
DECLARE
  chars text[] := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}';
  result text := '';
  i integer := 0;
BEGIN
  IF length < 0 THEN
    RAISE EXCEPTION 'Given length cannot be less than 0';
  END IF;
  FOR i IN 1..length LOOP
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Trigger function per assegnare il short_code se non presente
CREATE OR REPLACE FUNCTION generate_short_code() RETURNS trigger AS $$
DECLARE
    new_code VARCHAR(6);
    done bool;
BEGIN
    done := false;
    WHILE NOT done LOOP
        new_code := random_string(5); -- 5 caratteri
        IF NOT EXISTS (SELECT 1 FROM exercises WHERE short_code = new_code) THEN
            NEW.short_code := new_code;
            done := true;
        END IF;
    END LOOP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_generate_short_code
BEFORE INSERT ON exercises
FOR EACH ROW
WHEN (NEW.short_code IS NULL)
EXECUTE FUNCTION generate_short_code();

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

-- Indexes
CREATE INDEX idx_macro_areas_year ON macro_areas(year_id);
CREATE INDEX idx_topics_macro_area ON topics(macro_area_id);
CREATE INDEX idx_exercises_topic ON exercises(topic_id);
CREATE INDEX idx_exercises_difficulty ON exercises(difficulty_level);
CREATE INDEX idx_exercises_short_code ON exercises(short_code);
CREATE INDEX idx_exercises_search_vector ON exercises USING GIN (search_vector);

-- Security: Enable RLS
ALTER TABLE curriculum_years ENABLE ROW LEVEL SECURITY;
ALTER TABLE macro_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

-- Allow read-only access
CREATE POLICY "Allow public read-only access to curriculum_years" ON curriculum_years FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to macro_areas" ON macro_areas FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to topics" ON topics FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access to exercises" ON exercises FOR SELECT USING (true);

-- Insert Years
INSERT INTO curriculum_years (year_number, description) VALUES
(1, 'Primo Anno'),
(2, 'Secondo Anno'),
(3, 'Terzo Anno'),
(4, 'Quarto Anno'),
(5, 'Quinto Anno');
