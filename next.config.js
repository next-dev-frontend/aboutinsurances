const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const crypto = require('crypto');
const nonceScriptSrc = crypto.randomBytes(8).toString('base64');
const nonceStyleSrc = crypto.randomBytes(8).toString('base64');

let prod = process.env.NODE_ENV == "production"

const ContentSecurityPolicy = `
base-uri 'self';  
connect-src 'self' 'unsafe-inline' *.gstatic.com *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com https://*.analytics.google.com https://www.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net/g/collect https://www.google.com.br/ads/ga-audiences vitals.vercel-insights.com;
default-src 'none';
font-src 'self';
form-action 'self';  
frame-ancestors 'none';
frame-src 'none';
img-src 'self' data: blob: 'unsafe-inline' https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://www.googletagmanager.com/gtag/js https://*.tagmanager.google.com https://*.google-analytics.com https://*.google.com.br/ads/;  
manifest-src 'self';
object-src 'none';
script-src 'self' https: 'nonce-${nonceScriptSrc}' 'unsafe-inline' ${prod ? "" : "'unsafe-eval'"} 'strict-dynamic' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js;
script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js;
style-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com;
worker-src 'self';  
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `${ContentSecurityPolicy.replace(/\n/g, '')}`
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: "https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js https://analytics.google.com/g/collect https://www.google.com.br/ads/ga-audiences vitals.vercel-insights.com"
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
    value: 'HttpOnly; SameSite=None; Secure; Domain=.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=.analytics.google.com; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=https://analytics.google.com/g/collect; Path=/'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; SameSite=None; Secure; Domain=https://www.google.com.br/ads/ga-audiences; Path=/'
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

  //exportar nonce utilizando env  
  env: {
    nonceStyleSrc,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}));