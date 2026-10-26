import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging : {
    browserToTerminal : true,
    // 'error' - errors only (default)
    // 'warn' - warning and errors
    // true - all console output
    // false - disabled

  },
  
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
