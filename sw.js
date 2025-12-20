const CACHE_NAME = "asvaye-cache-v1";
const urlsToCache = [
  "/",
  "https://initiativemarketinggroup.github.io/As-Vaye_PWA/",
  "https://raw.githubusercontent.com/InitiativeMarketingGroup/As-Vaye_PWA/main/As-Vaye_logo_logo.2.png"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
