/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable trailing slashes for consistent URLs (SEO benefit)
  trailingSlash: true,

  // Optimize images for performance and SEO
  images: {
    // Define domains for external images
    domains: ['example.com', 'cdn.example.com'],
    // Use modern image formats (e.g., WebP)
    formats: ['image/avif', 'image/webp'],
    // Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Set image sizes for better optimization
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable lazy loading for images by default
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },

  // Configure redirects for SEO and user experience
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.example.com' }],
        destination: 'https://example.com/:path*',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // Configure headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; img-src 'self' data: https://*.example.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },

  // Enable React Strict Mode for better debugging and performance
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Configure internationalization (i18n) if needed
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    // Automatically redirect based on user's preferred language
    localeDetection: true,
  },

  // Optimize for production builds
  output: 'standalone', // For Docker or serverless deployments

  // Enable experimental features (optional, based on Next.js version)
  experimental: {
    // Enable partial prerendering for App Router (Next.js 14+)
    // ppr: true,
    // Optimize server components
    optimizeServer: true,
  },

  // Configure environment variables (optional)
  env: {
    SITE_URL: 'https://example.com',
  },

  // Optimize webpack for faster builds (optional)
  webpack(config, { isServer }) {
    if (!isServer) {
      // Optimize client-side bundle
      config.optimization.minimize = true;
    }
    return config;
  },
};

export default nextConfig;