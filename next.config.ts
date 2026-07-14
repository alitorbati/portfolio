import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
