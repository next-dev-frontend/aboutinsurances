import { ExpirationPlugin } from 'workbox-expiration';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute, setDefaultHandler, setCatchHandler } from 'workbox-routing';
import { matchPrecache, precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

workbox.setConfig({
  debug: true // Ativa o modo de depuração
});

workbox.routing.registerRoute(runtimeCaching);

self.skipWaiting();
self.clientsClaim();

// módulo de manifesto de injeção na workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point
const WB_MANIFEST = self.__WB_MANIFEST;

// Rota e imagem de fallback de pré-cache
WB_MANIFEST.push({
  url: '/page404',
  revision: 'version 0.1.0',
});
precacheAndRoute(WB_MANIFEST);

// Lista de URLs de recursos para pré-carregar
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/fallback.tsx',
  '/manifest.json',
  '/favicon.ico',
  '/globals.css',
  '/AboutInsurances.js',
  '/BgParallax1.js',
  '/BgParallax2.js',
  '/Contact.js',
  '/Footer.js',
  '/Navbar.js',
  '/PageSeo.tsx',
  '/SideBar.js',
  '/font/GlacialIndifference-Regular.otf',
  '/logos/logo-google.webp',
  '/logos/logo-about-insurances.webp',
  '/backgrounds/bg-insurances.webp',
  '/backgrounds/bg2-insurances.webp',
  '/backgrounds/bg3-insurances.webp',
  '/backgrounds/bg6-insurances.webp',
];

// Instalar o Service Worker e pré-carregar os recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('site-cache').then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

registerRoute(
  '/',
  new NetworkFirst({
    cacheName: 'start-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 31536e3,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 604800,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
// desabilitar o cache de imagem, para que possamos observar a imagem do espaço reservado quando estiver offline
registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new CacheFirst({
    cacheName: 'static-image-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new CacheFirst({
    cacheName: 'static-data-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\/api\/.*$/i,
  new StaleWhileRevalidate({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 16,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

cleanupOutdatedCaches();

// controle das estratégias de fallback offline
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks

// Use uma estratégia obsoleta durante a revalidação para todas as outras solicitações
setDefaultHandler(new StaleWhileRevalidate());

// Esse manipulador "catch" é acionado quando qualquer uma das outras rotas falha ao gerar uma resposta
setCatchHandler(({ event }) => {
  // As entradas FALLBACK_URL devem ser adicionadas ao cache antecipadamente, por meio de tempo de execução 
  // ou pré-cache. Se eles estiverem em pré-cache, chame `matchPrecache(FALLBACK_URL)` (do pacote `workbox-precaching`) 
  // para obter a resposta do cache correto. Use evento, solicitação e URL para descobrir como responder.
  // Uma abordagem seria usar request.destination, veja
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // Se estiver usando URLs pré-cache
      return matchPrecache('/fallback');
    case 'image':
      // Se estiver usando URLs pré-cache
      return matchPrecache('/backgrounds/bg-insurances.webp');
    case 'font':
      // Se estiver usando URLs pré-cache
      // return matchPrecache(FALLBACK_FONT_URL);
      return caches.match('/fonts/GlacialIndifference-Regular.otf')
    // break
    default:
      // Se não tiver um fallback, retorna uma resposta de erro
      return Response.error();
  }
});