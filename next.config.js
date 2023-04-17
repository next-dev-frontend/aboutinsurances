const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const ContentSecurityPolicy = `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google-analytics.com/analytics.js;
script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
style-src 'self' 'unsafe-inline';
img-src * blob: data: https: http:;
connect-src 'self' https://www.google-analytics.com;
font-src 'self';
base-uri 'none';
worker-src 'self';
form-action 'self';
frame-ancestors 'none';
require-trusted-types-for 'script';
require-sri-for script;
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
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; Secure; SameSite=Strict',
  },
];


module.exports = withImages(withPWA({
  reactStrictMode: true,
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