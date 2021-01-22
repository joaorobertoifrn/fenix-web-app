'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d582e2ea475309305ce2e672439f8959",
"assets/assets/images/caixa-icon.png": "efa67b7c4cfe9da6d61b7af4d75f9ecc",
"assets/assets/images/error.jpg": "60caf1b2600bc8dfbad1c867cbf31c49",
"assets/assets/images/logo.jpg": "937cc4191f8f5affd2a47ab8dbed1ca2",
"assets/assets/images/map.jpg": "3608ea10386b90488845c3932d8470bf",
"assets/assets/images/maps.png": "6a0e56ff542f523b0cb733ccc80e7e96",
"assets/assets/images/menu_afv.jpg": "9be8e19b6fddd3eddda13d567b3fec74",
"assets/assets/images/menu_banco.jpg": "cd7eada1300a8ffd8896c078d141ea8e",
"assets/assets/images/menu_bi.jpg": "9d657193f18dffa4a2369effe1bfd622",
"assets/assets/images/menu_cadastros.jpg": "4ee5b3408633b74c0c895f79fd7c1a29",
"assets/assets/images/menu_comissoes.jpg": "44133a9de2447900be2184b89173db3a",
"assets/assets/images/menu_compras.jpg": "b19ff8f259a4e4000ad6dd28128d4a83",
"assets/assets/images/menu_conciliacao.jpg": "7e0870ac263578a4094215f66e9ec14a",
"assets/assets/images/menu_crm.jpg": "7e6959363a95b2ed0d2a873767c49b0e",
"assets/assets/images/menu_cte.jpg": "d32c6a7fd69b1cdfeea3a5e49be47628",
"assets/assets/images/menu_cte.png": "5c5c7b7dc4b1d9070463b65e632b6119",
"assets/assets/images/menu_estoque.jpg": "78488500e6b04fde03fc6e2a0446ce7b",
"assets/assets/images/menu_fluxo_caixa.jpg": "aeb512782a7d68edd05e07e116fc52e6",
"assets/assets/images/menu_ged.jpg": "c299ca16debd6e04ed2cba4fcb41e858",
"assets/assets/images/menu_loja.jpg": "bfb5683fcbd901338b08e8a3e6a41081",
"assets/assets/images/menu_nfce.jpg": "52d1539b5a710be48058cb0a589fe723",
"assets/assets/images/menu_nfe.jpg": "24cebc1a539dfb92c6e3948a8e0cc1e6",
"assets/assets/images/menu_nfse.jpg": "d194e2d0c232b8ea46ecd4a5536487d7",
"assets/assets/images/menu_os.jpg": "b19b4cbd450cd980ecca1b8d27868674",
"assets/assets/images/menu_pagar.jpg": "c03ccfd61de30cb8a7a30bed9b4095a0",
"assets/assets/images/menu_receber.jpg": "c6bc998e559d526441bef00a775c4572",
"assets/assets/images/menu_sat.jpg": "59a42ac1e7b6d4e76f7451369ee83093",
"assets/assets/images/menu_sped.jpg": "c165e6f23f56aa137f4e3a43dab4b348",
"assets/assets/images/menu_tesouraria.jpg": "573b98aeecd11ad83541461db12d17a5",
"assets/assets/images/menu_tributacao.jpg": "adb34a92baadf2eb00251c1f96375c53",
"assets/assets/images/menu_vendas.jpg": "2d2f99e67eb3c76752416acb874177e0",
"assets/assets/images/opcoes-gerente-icon.png": "d7bef1c31bc962514ebabedf9a9d9aee",
"assets/assets/images/pagamento-icon.png": "9759964a8bdb699c842ceaf38dad5381",
"assets/assets/images/produto-icon.png": "931863b0125910539d37ce33f34a537e",
"assets/assets/images/profile.jpg": "803dc91348abec5fc069e57ce354b13e",
"assets/assets/images/suprimento-sangria-icon.jpg": "55c8c06ed0e49d94e89bb83ecc671fe8",
"assets/assets/images/t2ti-32.png": "2d35e462bf7490197766400772097c07",
"assets/assets/images/t2ti-48.png": "150bf941494d534c6d1f609a43da6384",
"assets/assets/images/t2ti_background.jpg": "45704b88ec0c292ef7943977e5a2ef0d",
"assets/assets/images/t2ti_logo_fundo.jpg": "54e98d028bc5dfa5d9e008c996101a18",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "72ee063d7928f2b76d61369b5142340a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9a0321790780abe29f6ab43215161afa",
"/": "9a0321790780abe29f6ab43215161afa",
"main.dart.js": "f9e00d89cf6e1dae2f78deb7095ee12d",
"manifest.json": "096885eb6406f34a5a94cc62231b2068",
"version.json": "cf1d8d752a2295842a54dfeb84482238"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
