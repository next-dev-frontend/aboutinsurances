const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const scriptUrls = [
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com/',
  'https://www.googletagmanager.com/gtag/',
  'https://www.google-analytics.com/analytics.js',
];

const scriptGtag = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});`;

const crypto = require('crypto');
const nonce = crypto.randomBytes(16).toString('base64');
const gtagHash = crypto.createHash('sha256').update('https://www.googletagmanager.com/gtag/').digest('base64');
const gaHash = crypto.createHash('sha256').update('https://www.google-analytics.com/analytics.js').digest('base64');
const scriptGtaghash = crypto.createHash('sha256').update(scriptGtag).digest('base64');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https: ${scriptUrls.join(' ')} 'nonce-${nonce}' 'sha256-${gtagHash}' 'sha256-${gaHash}' 'sha256-${scriptGtaghash}' 'strict-dynamic' 'unsafe-inline';
  script-src-elem 'self' https: ${scriptUrls.join(' ')} 'nonce-${nonce}' 'sha256-${gtagHash}' 'sha256-${gaHash}' 'sha256-${scriptGtaghash}' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.googletagmanager.com/gtag/ 'unsafe-inline';
  img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com data:;
  connect-src 'self' ${scriptUrls.join(' ')} vitals.vercel-insights.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self' https://www.googletagmanager.com;
`;

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
    value: 'strict-origin-when-cross-origin'
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