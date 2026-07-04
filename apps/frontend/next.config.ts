import type { NextConfig } from "next";
import { config } from "dotenv";

const envs = config({ path: '/Users/alessandro/secrets/SenzaTesto/apps/frontend/.env' }).parsed || {};

const nextConfig: NextConfig = {
  env: envs,
  output: "export",
  basePath: "/SenzaTesto",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
