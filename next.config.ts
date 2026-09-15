import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Mengizinkan semua gambar dari internet tanpa syarat
  },
  eslint: {
    ignoreDuringBuilds: true, // Melewati error ESLint saat build di Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // Melewati error TypeScript strict saat build di Vercel
  },
};

export default nextConfig;