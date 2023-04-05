const CACHE_NAME = "my-pwa-cache";
const urlsToCache = [
  "/",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })
        return response;
      })
    })
  )
})

self.addEventListener('activate', event => {
  console.log('Service Worker ativo!')

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          // Verifica se o nome do cache começa com o prefixo "my-pwa-cache"
          return cacheName.startsWith('my-pwa-cache') && cacheName !== CACHE_NAME;
        }).map(cacheName => {
          // exclui o cache antigo
          return caches.delete(cacheName);
        })
      );
    })
  );

  // exibe uma mensagem para o usuário
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('O Service Worker foi ativado com sucesso!')
    })
  })
})