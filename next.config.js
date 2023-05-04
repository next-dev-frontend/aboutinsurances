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
  script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com;
  script-src 'self' https: http: 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com;
  img-src 'self' data: blob: 'unsafe-inline' https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://www.googletagmanager.com/gtag/js https://*.tagmanager.google.com https://*.google-analytics.com https://*.google.com.br/ads/;
  frame-src 'self' https: http: 'unsafe-inline';
  connect-src 'self' 'unsafe-inline' *.gstatic.com *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com https://*.analytics.google.com https://www.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net/g/collect https://www.google.com.br/ads/ga-audiences vitals.vercel-insights.com;
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
    value: "https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com vitals.vercel-insights.com"
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
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=.google.com.br; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=https://www.analytics.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=https://analytics.google.com; Path=/'
  },

  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=accounts.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=.search.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=mail.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=mail-ads.google.com; Path=/'
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