import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'node_modules')],
    // Force quiet dependencies and silence specific deprecations
    quietDeps: true,
  },
  // Suppress hydration warnings caused by browser extensions like 'bis_skin_checked'
  reactStrictMode: true,
};

export default nextConfig;
