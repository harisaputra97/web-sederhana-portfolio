const CACHE_NAME = "firstpwa-v6";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/manifest.json",
  "/icon-512x512.png",
  "/maskable_icon.png",
  "/pages/home.html",
  "/pages/portfolio.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/css/icon.css",
  "/css/style.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/js/reg-service-worker.js",
  "/image/break.png",
  "/image/mantap jiwa.jpg",
  "/image/witing.jpg",
  "/image/partner in crime.jpg",
  "/image/work hard.jpg",
  "/image/ynwa.jpg",
  "/image/welcome1.png",
  "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"

];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
    .match(event.request, {
      cacheName: CACHE_NAME
    })
    .then(function (response) {
      if (response) {
        console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
        return response;
      }

      console.log(
        "ServiceWorker: Memuat aset dari server: ",
        event.request.url
      );
      return fetch(event.request);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
    .match(event.request, {
      cacheName: CACHE_NAME
    })
    .then(function (response) {
      if (response) {
        console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
        return response;
      }

      console.log(
        "ServiceWorker: Memuat aset dari server: ",
        event.request.url
      );
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});