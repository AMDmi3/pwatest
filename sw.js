var cacheName = 'ghapp';
var filesToCache = [
  '/',
  '/index.html',
  '/js/main.js'
];

self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				return cache.addAll(filesToCache);
			})
	);
	self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request)
			.then(response => {
				return response || fetch(e.request);
			})
	);
});
