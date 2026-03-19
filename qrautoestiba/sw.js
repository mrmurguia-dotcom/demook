const CACHE_NAME = 'qr-autoestiba-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './android-icon-192x192.png',
  './apple-icon-180x180.png'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activar y responder (necesario para que sea instalable)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
