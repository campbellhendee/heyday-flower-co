/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cap at 1920 to avoid over-large payloads on ultra-wide screens
    deviceSizes: [640, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000
  }
};
export default nextConfig;
