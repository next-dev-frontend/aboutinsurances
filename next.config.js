const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
});
const crypto = require('crypto');
const { nonce } = crypto.randomBytes(16).toString('base64');
const gaTrackingId = process.env.NEXT_PUBLIC_GA_ID; // seu ID de acompanhamento do Google Analytics
const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaTrackingId}');
`;
const script = `
  'nonce-${nonce}'
  ${googleAnalyticsScript}
`;
const hash = crypto.createHash('sha256').update(script).digest('base64');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'strict-dynamic' 'sha256-${hash}';
  script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com 'sha256-${hash}';
  style-src 'self' 'unsafe-inline';
  object-src 'none';
  img-src * blob: data: https: http:;
  connect-src 'self' https://www.google-analytics.com;
  font-src 'self';
  base-uri 'none';
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
    value: 'same-origin'
  }
];


module.exports = withImages(withPWA({
  reactStrictMode: true,
  swcMinify: true,
  distDir: '.next',

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/(.*)', // aplicar em todas as rotas
        headers: securityHeaders,
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Set-Cookie',
            value: 'HttpOnly; Secure; SameSite=Strict',
          },
        ],
      },
    ];
  },


  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}));