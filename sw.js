'use strict';

var cacheName = 'pwatest';
var filesToCache = [
  '/',
  '/js/main.js'
];

self.addEventListener('install', ev => {
	ev.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				return cache.addAll(filesToCache);
			})
	);
	self.skipWaiting();
});

self.addEventListener('fetch', ev => {
	e.respondWith(
		caches.match(e.request)
			.then(response => {
				return response || fetch(e.request);
			})
	);
});
