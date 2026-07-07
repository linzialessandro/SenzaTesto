-- Schema di inizializzazione per SenzaTesto
-- Struttura gerarchica: anni → macro-aree → argomenti → esercizi

-- ATTENZIONE: Questo script elimina e ricostruisce le tabelle da zero.
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
