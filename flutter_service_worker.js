'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "632c3061bad8049fd60a6ba69b5b6a9e",
".git/config": "ae9d1a36c130cfd6e26aae2fa043abf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "27d2ec58addc5f04febac456a103dd4c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f482a5e533a2476bca7713ed27fece7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d1ecf06bb2131afe3cb874d5cc9331b",
".git/logs/refs/heads/main": "7d1ecf06bb2131afe3cb874d5cc9331b",
".git/logs/refs/remotes/origin/main": "aaa535ac21a9e22e2f3adb6ba0b16928",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/f35a0f4d3bf79bda4cd3e48c364381c0d3686e": "ea9ca7eaf52813929f18f923367ef6dc",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/83de3b03cbc7e078479005e6286c7417876e91": "72dab83ccc602111105144e97deb380d",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/34/7580273eb8ca90810f811cc3bb8c456e2b3b49": "e9b3271cdd335c327fceaf5c6b6d1dbf",
".git/objects/3d/bf55028e9f9ac7381cd5745e75486f8c797520": "911edb099b0386e1cc4020a925552e76",
".git/objects/3e/fcef311fc26c6f81d54cbd4a6640634a7e49ae": "dca22d90ad341e4d4340a0f54c3aa628",
".git/objects/45/8f2b09cf64a510c4f2bb716eb0f9013e644d5b": "55a46bea921bc9774a88ce87236b3f02",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/794a89f0989597066c07de286782c60b65e490": "cd32deabdb185b91d4999a9f11ffa116",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/d5b352b35b1a8bae5e8672d11d8e6ade6e6364": "3761bae9571256ad0e7d7e9bcdb3178b",
".git/objects/55/1d1c14489ba95816037a98d24524e7a7ba4559": "3a47815d31acb1bd104b5f106d24c4ae",
".git/objects/56/94b9b9a287900f66b649c2be45555098db8392": "48bb7be7ded40bf577f5bf55d48c1d3c",
".git/objects/61/80942a874c12b067a6db06aeb4d2a3c6f9eb7c": "ab575389e7c1955f29d1b5f3463b2fc7",
".git/objects/64/8acc9cf30fe5e66e0ded019e525c401f4b0fbd": "60b5134ea2c08e2566726ede921edb5c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/4669f440d8b83c2224320df1e3a1a385f439be": "da7c3256508c8f6c1f5c1773aa0bbf87",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/66c7946b65f84e4cc4d853244ca70cffb3d239": "dfffa9ff4335db9bfb2c27d1f433a75e",
".git/objects/70/222226ce0df3bcb1ab16d6843a5228b7bfc149": "54f6bf10327bed39ec3a809fd9aa48bf",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/7361e871a52bec60b3f1924eb4cb37b2ffa14e": "639fb8fd40064873f518f965a614d73c",
".git/objects/84/1586045386e1f3aa505fd4c9b72fd42784124f": "a300ff41688b4472b95b057da8217097",
".git/objects/85/012d34e036c22ff779c376061b248898ccb885": "a5b54ae53a3471c5b02d821eb589a62a",
".git/objects/87/ecf790be83e1b6a6f3d79af49e504e61a31908": "202c631355448fae4daf9be706c3d234",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/11508fabc63bcb1f9eacda872ecf7791ca11da": "e7a35f95bd1270a86c9dfc5084d1d525",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/16305dba181398114c55158e471432d983d1e8": "639d9e7f3a87eaa8db016ae17637b23f",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/635f3ca2ce50bd4fdde7dcf79fd65ea8963b39": "56b7534877e07a84d44a6b302acfd17c",
".git/objects/9f/93e9ef02b5e66cc2c960d093fc107eb64eb5b2": "083fb0a68a40cd1940894a4b13680215",
".git/objects/ab/174dee527f2127c655e6e16837a9d271328377": "e1a57d469f1b0b4852715fc48bffbc66",
".git/objects/ad/c2818b4189c0547506e52c3aea9bdfd34867eb": "cc2b5484309722a8cdf8160541730a2d",
".git/objects/ae/0ebf53df8964d353eedfe419b6421514d2eeef": "936ce328217e4afb3f7729efd2342c91",
".git/objects/b2/508a7f0cf055a732eb89fddefcdcecd1293b19": "2cec18b7c3b1574bef60d0afa28d8799",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bd/f78fc4f5088779302a0d09e575e3b84cafb9fb": "c9781783c1b327424c2f34c852bf5f29",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/c49d7d3a411cdb04a96128b617fb82e1a01e10": "3829e03f513594102de72dbcff6eda56",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/cf89ffd8d36f126857ba64b25673fc62af5db6": "21f902a37ddcebef45ebddc91f6ac884",
".git/objects/da/0764bafa5a84c591fe571d10300d11acb55f8a": "53416dbbccc4df91ad27b7aeab8bda66",
".git/objects/dc/ce885f67d61e64e421e94d779596f77395cc81": "c87c6558dfa923936b43e64937c0a81b",
".git/objects/de/a0382af12efee23c74cfc19e746874abd38bfe": "ae7837e2242f32a1fb7fa11d4dcb2f65",
".git/objects/df/09f2c61c8b3c2eb450c5d2ffad718228487add": "b082ec1fcd98c11a6921aa37b42b3dd7",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/dac6bd2e0aea59eea475b147ac21a6b33545f5": "c93d40edcdbc0acc18c99f4cbb06b603",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/fcaf60af84d95d7d0ab6fa1d56f14e693e75fc": "ec3e7658fe5504951a5fa2a7777e45c2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "7a1d39ce789c7ba702b5c67c0f0b414f",
".git/refs/heads/main": "7a1d39ce789c7ba702b5c67c0f0b414f",
".git/refs/remotes/origin/main": "7a1d39ce789c7ba702b5c67c0f0b414f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ed1bba0a453d1e27d2bdcb4f958efc67",
"assets/NOTICES": "6548ce0baab9b146610e20f8f5e61a54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "e2e4790416134e45aef037b96c56fee9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7b269409bea3ab117809cde14093ab82",
"icons/Icon-192.png": "96cc2a42a592230c4d07391004b2f98f",
"icons/Icon-512.png": "7515de3df657e173e4ef3dbfe33f2341",
"icons/Icon-maskable-192.png": "96cc2a42a592230c4d07391004b2f98f",
"icons/Icon-maskable-512.png": "7515de3df657e173e4ef3dbfe33f2341",
"index.html": "34bca72f12a32c2a9dbfbe1964445d70",
"/": "34bca72f12a32c2a9dbfbe1964445d70",
"main.dart.js": "c98a81a9de0e58aa7b07eafd5e4a24d1",
"manifest.json": "a720234845fc99c5ae0ae8a1237ff145",
"version.json": "d2b8ba745c3fcae0eec24e8686ac918d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
