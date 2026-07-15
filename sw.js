const CACHE_NAME = 'infernal-temple-cache-v7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;700&family=Outfit:wght@300;400;600&display=swap'
];

// Install Event - Pre-cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch Event - Cache-First Strategy with Retry Policy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and http/https protocol schemas
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fetch with Retry Policy (max 3 attempts)
        const fetchWithRetry = (attemptsLeft) => {
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          }).catch((err) => {
            if (attemptsLeft > 1) {
              // Wait 1.5 seconds before retrying
              return new Promise(resolve => setTimeout(resolve, 1500))
                .then(() => fetchWithRetry(attemptsLeft - 1));
            }
            throw err;
          });
        };

        return fetchWithRetry(3).catch(() => {
          return new Response('Infernal Temple: Resource unavailable offline after multiple network checks.', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});
