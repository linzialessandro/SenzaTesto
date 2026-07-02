import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SenzaTesto",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
