importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app.js",
    "revision": "41be6674efd44b6678842171b6702a04"
  },
  {
    "url": "index.html",
    "revision": "5ba99f5f1cd4d64cf2c9da3ff179fd33"
  },
  {
    "url": "package-lock.json",
    "revision": "9a98cbaee827c824318ca2119f3ad021"
  },
  {
    "url": "package.json",
    "revision": "4ec17d00d83e3bc40df6fbf7813cf301"
  },
  {
    "url": "src-sw.js",
    "revision": "7d204a23c1c6416198c4a557083c5871"
  },
  {
    "url": "workbox-config.js",
    "revision": "53c8a9951b3b8e80d965e4c7868a6b98"
  }
]);
