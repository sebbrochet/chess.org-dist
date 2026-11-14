
const CACHE = "chess-org-shell-e0fc7a9c92a0";
const ASSETS = ["/","/APACHE-2.0.txt","/CH3SSVID5-NOTICE.txt","/engine/COPYING.txt","/engine/manifest.json","/engine/nn-9067e33176e8.nnue","/engine/SOURCE.md","/engine/stockfish-18-lite-single.js","/engine/stockfish-18-lite-single.wasm","/engine/stockfish.js-18.0.7-source.tar","/icon.svg","/LICENSE.txt","/manifest.webmanifest","/pieces/letter/bB.svg","/pieces/letter/bK.svg","/pieces/letter/bN.svg","/pieces/letter/bP.svg","/pieces/letter/bQ.svg","/pieces/letter/bR.svg","/pieces/letter/LICENSE.txt","/pieces/letter/wB.svg","/pieces/letter/wK.svg","/pieces/letter/wN.svg","/pieces/letter/wP.svg","/pieces/letter/wQ.svg","/pieces/letter/wR.svg","/pieces/merida/bB.svg","/pieces/merida/bK.svg","/pieces/merida/bN.svg","/pieces/merida/bP.svg","/pieces/merida/bQ.svg","/pieces/merida/bR.svg","/pieces/merida/wB.svg","/pieces/merida/wK.svg","/pieces/merida/wN.svg","/pieces/merida/wP.svg","/pieces/merida/wQ.svg","/pieces/merida/wR.svg","/pieces/mono/B.svg","/pieces/mono/K.svg","/pieces/mono/N.svg","/pieces/mono/P.svg","/pieces/mono/Q.svg","/pieces/mono/R.svg","/sounds/capture.mp3","/sounds/move.mp3","/THIRD_PARTY_LICENSES.txt","/THIRD_PARTY_NOTICES.md","/assets/index-BMlncpni.css","/assets/index-43LMulMZ.js"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(async error => {
    await caches.delete(CACHE);
    throw error;
  }));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('chess-org-shell-') && key !== CACHE).map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    const saved = await cache.match(event.request.mode === 'navigate' ? '/' : event.request, { ignoreVary: true });
    return saved || fetch(event.request);
  }));
});
