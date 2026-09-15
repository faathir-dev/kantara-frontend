/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Membuka paksa izin semua gambar Google & internet
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig