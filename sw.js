const CACHE_NAME = 'my-app-cache';

// Cache the application shell
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

self.addEventListener('install', function (event) {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('Service worker activating...');
  // Delete old caches
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function (cacheName) {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log('Found:', event.request.url, 'in cache');
          return response;
        }
        console.log('Network request for', event.request.url);
        return fetch(event.request)
          .then(function (response) {
            // Cache new requests
            if (response.status === 200) {
              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request.url, response.clone());
                  console.log('Added', event.request.url, 'to cache');
                });
            }
            return response;
          })
          .catch(function (error) {
            console.log('Error, ', error);
          });
      })
  );
});