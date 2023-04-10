const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
});
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

//hash e nonce para /_next/static/chunks/main-4d28554435b92d82.js
const filePath = path.resolve(__dirname, './.next/static/chunks/main-4d28554435b92d82.js');
const fileContent = fs.readFileSync(filePath, 'utf8');
const mainNonce = crypto.randomBytes(16).toString('base64');
const mainScript = `
  'nonce-${mainNonce}'
  ${fileContent}
`;
const mainHash = crypto.createHash('sha256').update(mainScript).digest('base64');


//hash e nonce para google analytics
const gaTrackingId = process.env.NEXT_PUBLIC_GA_ID; // seu ID de acompanhamento do Google Analytics
const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaTrackingId}');
`;
const gaNonce = crypto.randomBytes(16).toString('base64');
const gaScript = `
  'nonce-${gaNonce}'
  ${googleAnalyticsScript}
`;
const gaHash = crypto.createHash('sha256').update(gaScript).digest('base64');


//criar hash para google tag manager
const gtmTrackingId = process.env.NEXT_PUBLIC_GTM_ID; // seu ID de acompanhamento do Google Analytics
const googleTagManagerScript = `
   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${gtmTrackingId}');
`;
const gtmNonce = crypto.randomBytes(16).toString('base64');
const gtmScript = `
  'nonce-${gtmNonce}'
  ${googleTagManagerScript}
`;
const gtmHash = crypto.createHash('sha256').update(gtmScript).digest('base64');



const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://aboutinsurances.vercel.app/_next/static/chunks/main-4d28554435b92d82.js https://www.googletagmanager.com https://www.google-analytics.com 'strict-dynamic' 'nonce-${gaNonce}' 'nonce-${gtmNonce}' 'nonce-${mainNonce}' 'sha256-${gaHash}' 'sha256-${gtmHash}' 'sha256-${mainHash}'}; 
  script-src-elem 'self' https://aboutinsurances.vercel.app/_next/static/chunks/main-4d28554435b92d82.js https://www.googletagmanager.com https://www.google-analytics.com 'nonce-${gaNonce}' 'nonce-${gtmNonce}' 'nonce-${mainNonce}' 'sha256-${gaHash}' 'sha256-${gtmHash}' 'sha256-${mainHash}' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  object-src 'none';
  img-src * blob: data: https: http:;
  connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
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