const CACHE_NAME = 'asvaye-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://raw.githubusercontent.com/InitiativeMarketingGroup/As-Vaye-assets/main/As-Vaye_logo.2.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
