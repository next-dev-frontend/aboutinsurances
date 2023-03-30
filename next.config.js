const withImages = require('next-images');
const withPWA = require('next-pwa');
const withOffline = require('next-offline');
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const { nonce } = crypto.randomBytes(8).toString('base64');

const ContentSecurityPolicy = ` 
default-src 'self'; 
script-src 'self' 'unsafe-inline' 'unsafe-eval' 'require-trusted-types-for' *.google-analytics.com; 
style-src 'self' 'unsafe-inline' *.googleapis.com;
img-src 'self' data: *.google-analytics.com;
connect-src 'self' *.google-analytics.com; `
  ;

const securityHeaders = [
  // políticas de segurança
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: "*"
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  // políticas de permissões
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()'
  },
  {// política de referência
    key: 'Referrer-Policy',
    value: 'same-origin'
  }
];

module.exports = withOffline(withImages(withPWA({
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)', // aplicar em todas as rotas
        headers: securityHeaders,
      },
    ];
  },


  pwa: {
    dest: "public",
    sw: 'service-worker.js',
    register: true,
    skipWaiting: true,
    dynamicStartUrl: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets',
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          },
        },
      },
    ],
    buildExcludes: [/middleware-manifest\.json$/],
    disable: process.env.NODE_ENV === 'development',
  },

  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  workboxOpts: {
    maximumFileSizeToCacheInBytes: 50000000 // 50 MB
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

})));

