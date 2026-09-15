import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // <-- TRIP PAMUNGKAS: Mengizinkan semua gambar dari internet tanpa syarat!
  },
};

export default nextConfig;
