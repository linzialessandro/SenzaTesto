-- =======================================================================
-- Migrazione SenzaTesto: Schema precedente → Schema aggiornato
-- 
-- Questa migrazione applica le seguenti modifiche al database esistente
-- SENZA perdere dati:
--
--   1. SERIAL → BIGINT IDENTITY (curriculum_years, macro_areas, topics, exercises)
--   2. FK INT → BIGINT (year_id, macro_area_id, topic_id)
--   3. Aggiunta sort_order a macro_areas e topics
--   4. Aggiunta updated_at a exercises + trigger
--   5. Aggiornamento generate_short_code() con limite tentativi
--   6. FORCE ROW LEVEL SECURITY su tutte le tabelle
--   7. Rimozione indice ridondante idx_exercises_short_code
--   8. Aggiunta indice idx_exercises_created_at
--
-- ISTRUZIONI:
--   1. Fare un backup del database prima di eseguire
--   2. Eseguire via: python run_migration.py
-- =======================================================================

BEGIN;

-- =============================================
-- 1. SERIAL → BIGINT (colonne ID e FK)
-- =============================================
-- Le colonne SERIAL sono attualmente INT con una sequenza implicita.
-- Per convertirle in BIGINT GENERATED ALWAYS AS IDENTITY:
-- a) Cambiare il tipo colonna in BIGINT
-- b) Eliminare la sequenza legacy e impostare IDENTITY

-- 1a. Cambiare tipo delle FK prima (per evitare conflitti con le PK)
ALTER TABLE macro_areas ALTER COLUMN year_id SET DATA TYPE BIGINT;
ALTER TABLE topics ALTER COLUMN macro_area_id SET DATA TYPE BIGINT;
ALTER TABLE exercises ALTER COLUMN topic_id SET DATA TYPE BIGINT;

-- 1b. Cambiare tipo delle PK
ALTER TABLE curriculum_years ALTER COLUMN id SET DATA TYPE BIGINT;
ALTER TABLE macro_areas ALTER COLUMN id SET DATA TYPE BIGINT;
ALTER TABLE topics ALTER COLUMN id SET DATA TYPE BIGINT;
ALTER TABLE exercises ALTER COLUMN id SET DATA TYPE BIGINT;

-- 1c. Convertire da SERIAL (sequenza implicita) a IDENTITY
-- Nota: richiede di eliminare il default dalla sequenza legacy e aggiungere IDENTITY.
-- PostgreSQL non supporta ALTER COLUMN ... ADD GENERATED ALWAYS AS IDENTITY
-- su colonne che hanno già un default. Perciò procediamo in 2 passi.

-- curriculum_years
ALTER TABLE curriculum_years ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS curriculum_years_id_seq CASCADE;
ALTER TABLE curriculum_years ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
SELECT setval(pg_get_serial_sequence('curriculum_years', 'id'), COALESCE(MAX(id), 1)) FROM curriculum_years;

-- macro_areas
ALTER TABLE macro_areas ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS macro_areas_id_seq CASCADE;
ALTER TABLE macro_areas ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
SELECT setval(pg_get_serial_sequence('macro_areas', 'id'), COALESCE(MAX(id), 1)) FROM macro_areas;

-- topics
ALTER TABLE topics ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS topics_id_seq CASCADE;
ALTER TABLE topics ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
SELECT setval(pg_get_serial_sequence('topics', 'id'), COALESCE(MAX(id), 1)) FROM topics;

-- exercises
ALTER TABLE exercises ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS exercises_id_seq CASCADE;
ALTER TABLE exercises ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
SELECT setval(pg_get_serial_sequence('exercises', 'id'), COALESCE(MAX(id), 1)) FROM exercises;


-- =============================================
-- 2. Aggiungere sort_order a macro_areas e topics
-- =============================================
ALTER TABLE macro_areas ADD COLUMN IF NOT EXISTS sort_order INT NOT NULL DEFAULT 0;
ALTER TABLE topics ADD COLUMN IF NOT EXISTS sort_order INT NOT NULL DEFAULT 0;


-- =============================================
-- 3. Aggiungere updated_at a exercises
-- =============================================
ALTER TABLE exercises ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- Trigger per aggiornare automaticamente updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS trigger AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Rimuovere il trigger se esiste già (per idempotenza)
DROP TRIGGER IF EXISTS trg_update_exercises_updated_at ON exercises;
CREATE TRIGGER trg_update_exercises_updated_at
BEFORE UPDATE ON exercises
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- =============================================
-- 4. Aggiornare generate_short_code() con limite tentativi
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


-- =============================================
-- 5. FORCE ROW LEVEL SECURITY
-- =============================================
-- ENABLE è già presente nello schema originale, aggiungiamo FORCE
ALTER TABLE curriculum_years FORCE ROW LEVEL SECURITY;
ALTER TABLE macro_areas FORCE ROW LEVEL SECURITY;
ALTER TABLE topics FORCE ROW LEVEL SECURITY;
ALTER TABLE exercises FORCE ROW LEVEL SECURITY;


-- =============================================
-- 6. Pulizia indici
-- =============================================
-- Rimuovere indice ridondante (il vincolo UNIQUE su short_code crea già un B-tree)
DROP INDEX IF EXISTS idx_exercises_short_code;

-- Aggiungere indice per ordinamento cronologico
CREATE INDEX IF NOT EXISTS idx_exercises_created_at ON exercises(created_at DESC);


-- =============================================
-- 7. Verifiche finali
-- =============================================
DO $$
DECLARE
    _count BIGINT;
BEGIN
    SELECT COUNT(*) INTO _count FROM exercises;
    RAISE NOTICE 'Migrazione completata. Esercizi nel database: %', _count;
    
    -- Verifica che le colonne nuove esistano
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'exercises' AND column_name = 'updated_at'
    ) THEN
        RAISE EXCEPTION 'ERRORE: colonna updated_at non trovata dopo la migrazione';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'macro_areas' AND column_name = 'sort_order'
    ) THEN
        RAISE EXCEPTION 'ERRORE: colonna sort_order non trovata in macro_areas';
    END IF;
    
    RAISE NOTICE 'Tutte le verifiche superate.';
END $$;

COMMIT;
