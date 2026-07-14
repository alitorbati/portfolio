import nextConfig from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "public/**"],
  },
  ...nextConfig,
];

export default config;
