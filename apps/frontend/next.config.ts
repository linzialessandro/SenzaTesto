import type { NextConfig } from "next";
import { config } from "dotenv";
import { homedir } from "os";
import { join } from "path";

// Carica segreti dal file centralizzato (solo sviluppo locale)
// In CI/CD i segreti sono iniettati come variabili d'ambiente da GitHub Secrets
const envs = config({ path: join(homedir(), 'secrets', 'SenzaTesto', '.env') }).parsed || {};

const nextConfig: NextConfig = {
  env: envs,
  output: "export",
  basePath: "/SenzaTesto",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
