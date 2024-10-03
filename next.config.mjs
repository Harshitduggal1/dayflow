import { fileURLToPath } from 'url';
import { dirname } from 'path';
  'build/types/**/*.ts'

/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)), // Use this to get the directory name
  },
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
      { hostname: "utfs.io", port: "", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", port: "", protocol: "https" },
    ],
  },
  distDir: 'build', // Netlify can cache this directory
};

export default nextConfig;
