importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({ debug: false });

workbox.precaching.precacheAndRoute(
  self.__WB_MANIFEST.concat([
    {
      url: '/',
      revision: '1',
    },
  ])
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.CacheFirst()
);