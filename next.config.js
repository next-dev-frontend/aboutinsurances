const withImages = require('next-images')
const withPWA = require('next-pwa')
const crypto = require('crypto')
const hash = crypto.createHash('sha256')
const { nonce } = crypto.randomBytes(8).toString('base64')

const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  form-action 'self';
  script-src-elem 'self' *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com;
  script-src 'self' https: 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com 'sha256-${hash.digest(
  'base64'
)}';
  style-src 'self' 'unsafe-inline' *.googletagmanager.com *.tagmanager.google.com *.fonts.googleapis.com https://fonts.googleapis.com;
  img-src 'self' data: blob: 'unsafe-inline' *.gstatic.com *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com;
  media-src *;
  frame-src 'self' https: http: 'unsafe-inline' https://www.google.com/maps/* *.google.com;
  connect-src 'self' 'unsafe-inline' *.fonts.googleapis.com https://fonts.googleapis.com *.gstatic.com *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com vitals.vercel-insights.com;
  font-src 'self' 'unsafe-inline' https://fonts.gstatic.com;
`

const securityHeaders = [
  // políticas de segurança
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*'
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
  {
    // política de referência
    key: 'Referrer-Policy',
    value: 'same-origin'
  }
]

module.exports = withImages(
  withPWA({

    reactStrictMode: true,

    async headers() {
      return [
        {
          source: '/(.*)', // aplicar em todas as rotas
          headers: securityHeaders
        }
      ]
    },

    pwa: {
      dest: "public",
      swSrc: 'sw.js',
      register: false,
      skipWaiting: true,
    },


    images: {
      formats: ['image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },

    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  })
)
