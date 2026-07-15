-- =======================================================================
-- Migrazione 006: Abilitazione RLS sulle tabelle analytics
--
-- Le tabelle search_logs e solution_views (create nella migrazione 005)
-- non avevano Row-Level Security abilitata, rendendole accessibili
-- pubblicamente in lettura, scrittura e cancellazione tramite l'API
-- Supabase.
--
-- Questa migrazione:
--   1. Abilita e forza RLS su entrambe le tabelle
--   2. Definisce policy INSERT-only per anon e authenticated
--      (nessuna policy SELECT/UPDATE/DELETE → dati analytics non leggibili via API)
-- =======================================================================

BEGIN;

-- =============================================
-- 1. Abilitare e forzare RLS
-- =============================================
ALTER TABLE search_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_logs FORCE ROW LEVEL SECURITY;

ALTER TABLE solution_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_views FORCE ROW LEVEL SECURITY;

-- =============================================
-- 2. Policy: solo inserimento (anon + authenticated)
-- =============================================
-- Le funzioni RPC search_exercises() e log_solution_view() usano
-- SECURITY INVOKER, quindi ereditano il ruolo del chiamante.
-- Serve una policy INSERT per consentire alle RPC di scrivere.

CREATE POLICY "Inserimento anonimo su search_logs"
  ON search_logs
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Inserimento anonimo su solution_views"
  ON solution_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Nessuna policy SELECT, UPDATE o DELETE:
-- i dati analytics sono accessibili solo via service_role o accesso diretto al DB.

COMMIT;
