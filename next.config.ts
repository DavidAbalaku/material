import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'node_modules')],
    quietDeps: true,
    // Add specific deprecations to silence if quietDeps isn't enough
    silenceDeprecations: ['import', 'color-functions', 'if-function', 'global-builtin'],
  },
  reactStrictMode: true,
};

export default nextConfig;
