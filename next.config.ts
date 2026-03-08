import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compiler: {
    emotion: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
