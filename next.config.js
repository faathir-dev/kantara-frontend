/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Membuka paksa izin semua gambar Google & internet
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig