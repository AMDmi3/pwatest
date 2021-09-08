'use strict';

if ('serviceWorker' in navigator) {
	self.addEventListener('load', ev => {
		navigator.serviceWorker.register('/sw.js')
	});
}

self.addEventListener('load', ev => {
	document.getElementById('test').nodeValue = "OK";
});
