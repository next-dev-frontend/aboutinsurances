const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const nonce = crypto.randomBytes(8).toString('base64');

const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  form-action 'self';
  script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com;
  script-src 'self' https: http: 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com 'sha256-${hash.digest('base64')}';
  style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com;
  img-src 'self' data: blob: 'unsafe-inline' https://www.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com https://www.google.com.br/ads/;
  frame-src 'self' https: http: 'unsafe-inline';
  connect-src 'self' 'unsafe-inline' https://www.gstatic.com https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com https://analytics.google.com/ https://www.google.com.br/ads/ https://www.googletagmanager.com/gtag https://stats.g.doubleclick.net/ vitals.vercel-insights.com;
  font-src 'self' 'unsafe-inline' https://fonts.gstatic.com;
`;

const securityHeaders = [
  // políticas de segurança
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: "https://www.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.tagmanager.google.com https://www.google-analytics.com https://www.googletagmanager.com/gtag https://stats.g.doubleclick.net/ https://www.google.com.br/ads/ .analytics.google.com/ .google.com/ vitals.vercel-insights.com"
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
  },
  {
    key: 'Set-Cookie',
    value: 'Secure; SameSite=None; Domain=.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'Secure; SameSite=None; Domain=.analytics.google.com/; Path=/'
  },
];


module.exports = withImages(withPWA({
  reactStrictMode: true,
  distDir: '.next',

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },

  async headers() {
    return [
      {
        source: '/(.*)', // aplicar em todas as rotas
        headers: securityHeaders,
      },
    ];
  },

  env: {
    nonce: crypto.randomBytes(16).toString('base64'),
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}));