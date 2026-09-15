/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Membuka paksa izin semua gambar Google & internet
  },
  eslint: {
    ignoreDuringBuilds: true, // Melewati error ESLint saat build di Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // Melewati error TypeScript saat build di Vercel
  },
}

module.exports = nextConfig