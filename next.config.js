/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── PERFORMANCE ──
  compress: true,
  swcMinify: true,
  
  // ── ISR for homepage (revalidate every hour for freshness signal) ──
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Preconnect headers for critical origins
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '</api>; rel=preconnect, <https://fonts.googleapis.com>; rel=preconnect, <https://cdn.jsdelivr.net>; rel=preconnect',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Redirect URLs without trailing slash to with trailing slash (for canonicalization)
      {
        source: '/about',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/portfolio/',
        permanent: true,
      },
      {
        source: '/projects/:slug',
        destination: '/projects/:slug/',
        permanent: true,
      },
      // Catch old URLs (from previous site versions if migrating)
      {
        source: '/aqsa-profile',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // ── REWRITES for API ──
  async rewrites() {
    return {
      beforeFiles: [
        // No rewrites needed, but keeping structure for future API calls
      ],
    }
  },

  // ── IMAGE OPTIMIZATION ──
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
    ],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable AVIF format for better compression
    formats: ['image/avif', 'image/webp'],
  },

  // ── REACT SETTINGS ──
  reactStrictMode: true,

  // ── EXPERIMENTAL (for future optimization) ──
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
