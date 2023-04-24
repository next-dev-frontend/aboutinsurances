const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const crypto = require('crypto');

const nonce = crypto.randomBytes(16).toString('base64');
const gtmScriptHash = crypto
  .createHash('sha256')
  .update(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;var h=d.getElementsByTagName(s)[0];h.parentNode.insertBefore(j,h);})(window,document,'script','dataLayer','GTM-MWPBQXC');`)
  .digest('base64');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com https://www.googletagmanager.com/gtag/ 'nonce-${nonce}' 'sha256-${gtmScriptHash}' 'unsafe-eval' 'unsafe-inline';
  script-src-elem 'self' https://www.googletagmanager.com https://www.googletagmanager.com/gtag/ 'nonce-${nonce}' 'sha256-${gtmScriptHash}' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://www.googletagmanager.com data:;
  connect-src 'self' https://www.googletagmanager.com https://www.googletagmanager.com/gtag/ vitals.vercel-insights.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src https://www.googletagmanager.com;
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
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; Secure; SameSite=Strict',
  },
];


module.exports = withImages(withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
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
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}));