const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
});
const express = require('express');
const helmet = require('helmet');
const crypto = require('crypto-js');
const app = express();
// Gera um valor aleatório para o nonce
const nonce = crypto.lib.WordArray.random(16).toString(crypto.enc.Base64);

// Calcula o hash do script permitido
const script = `console.log('Este é um exemplo de script permitido.');`;
const hash = crypto.SHA256(script).toString(crypto.enc.Base64);


// Define a política de segurança de conteúdo
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'nonce-${nonce}' 'sha256-${hash}' https://www.google-analytics.com/analytics.js;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https://www.google-analytics.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com;
  base-uri 'self';
  form-action 'self';
  object-src 'none';
`;

// Adiciona o middleware do helmet com a política de segurança de conteúdo
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [`'nonce-${nonce}'`, `'sha256-${hash}'`, 'https://www.google-analytics.com/analytics.js'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    imgSrc: ["'self'", 'data:', 'https://www.google-analytics.com'],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    connectSrc: ["'self'", 'https://www.google-analytics.com'],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    objectSrc: ["'none'"],
    requireTrustedTypesFor: ['script'] // opcional
  },
}));

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
    ];
  },


  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}));