import type { NextConfig } from "next";
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Required for GitHub Pages (Static Hosting)
  output: 'export',
  
  // Base path for GitHub Pages (https://davidabalaku.github.io/material)
  basePath: isProd ? '/material' : '',
  
  // Required to serve images and assets from the correct subpath
  assetPrefix: isProd ? '/material/' : '',
  
  // GitHub Pages doesn't support the Next.js Image Optimization API
  images: {
    unoptimized: true,
  },

  sassOptions: {
    includePaths: [path.join(process.cwd(), 'node_modules')],
    quietDeps: true,
    silenceDeprecations: ['import', 'color-functions', 'if-function', 'global-builtin'],
  },
  
  reactStrictMode: true,
};

export default nextConfig;
