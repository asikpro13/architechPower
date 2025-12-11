'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad606d6a24a2dec982bc2993aaaf9160",
".git/config": "d7de29a63b758e9e0edf6f6496706663",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "882d0dc1b7710f6d98e48f13e3dcb794",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6136112bc2eae8b15b03f3891aa0d4bf",
".git/logs/refs/heads/main": "31dcc2e97b5120cb6373dcd3313460aa",
".git/logs/refs/remotes/origin/main": "ba5646c8a5bf04327de11e09e71753a6",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/16/23a0479a91c4a99127e1cefecc80b085e6b7ed": "4170cb946ea359802f78edbd8c619ad3",
".git/objects/1b/2d626dcf1297bdd9268e76eb28542e2b14c1a9": "b6bfd715484472672b381058d76879d5",
".git/objects/25/2d5eaf72f710b6f21f94c3aa9f2a900c226c9b": "4ad769ea8da3a8b41af1f46d22db6d07",
".git/objects/25/9e7f135bb81f8ae9cb8164ee210f78c014a6c7": "9c4cac293f547518ef7822b10c07fdc0",
".git/objects/27/ceba9e5bc011cc22fd3191cc0294d1ceb4ed2a": "950dd76b03209b0b593930214cbc7834",
".git/objects/2b/377c6bf94aa7ec43e69010c2f2a0dbfdec3ee8": "bdb2d100f74242047815c5937246e18f",
".git/objects/2f/6f5af3a52e53eedd2b56198dfa2859d2d84c34": "d36ed2b2e4142406c633700122845ec7",
".git/objects/33/4c89ee066779c7e1c41b0af04261d61174ba04": "8e76506ea512382f3a93d04204e47e42",
".git/objects/38/762a260a535d5e4b7f79ec4dd72c76c0022ddd": "585ad9c309a90fbd2f483311b88667f0",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/b71ba91b30fe8aa0695cfcd8b42f68c366e7b5": "263c2eef7160c9352104a7d6d552b612",
".git/objects/44/fe1023aef8007e22ba9e614b9c1436b1cce8aa": "d215610c020ada4a0483c0fdc96d8e2c",
".git/objects/46/795896be94bf22db96a201b1d8e4d4230c2ed4": "72ffadff2d929469eaae14e4b5666671",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/a7b25e390dbfae0b8ee155d872fb13d451e6b4": "b4678a88321969ec25fc08cf38039727",
".git/objects/56/6488b1ed055e79186f5336da27aa8f9a21b18c": "e348dae87b180d6766babc1c2aa385fe",
".git/objects/56/8d011a3d4c48d587f4f74d0c57243e5f7a2f74": "813e070c3260b322b0407b591b209eae",
".git/objects/5e/7b7bf00c2b4db32dafd02e314f2dccaba2e314": "f95c2f6d3925c1294531084530d1c7e6",
".git/objects/5e/d0f263762b53521670962573f4974f42c272ff": "6b537863cc1ab9f8d6175a5c401ba64b",
".git/objects/60/b5f2b0a9628857863dd10c13ec80c3bb7d98a7": "103933f51249df4c72fb175ffb1b476f",
".git/objects/63/9231d912b726e0ccd1a9243eec80b2e7f36d8f": "d624bc86cea4f9a848ef0e767893bda3",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/79/f2f45b0328747e77c38d71924dde07619acd53": "c96262477f19475d14d5a87269052cd2",
".git/objects/7c/2597685978f05b18a47d10c2c2a8ec9b87be27": "b65286b05e2ae54a5ff58079e8745f22",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/41297315fb77ec12b08efbbc51cea748b11a69": "ee54acf00ac5a2a3ba69ed93a66a3e3a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/23317917a566de0c159866611693625aa25414": "976a0dae748bc78fdec0c7d018fbd046",
".git/objects/91/6e6254ff68e36369c08649ebf877636e4d7221": "96f98d3df18918ce1a533cc8ff1c6e3e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/7631f33f2e8cbeef1703da365a3d4a84b6a72b": "be2d4d87f056b549aeac7377c83290e0",
".git/objects/9a/10789e840b42bacf89f82a59906d7a8e250278": "f190bad91ac450dc5bd26f225ce98589",
".git/objects/a2/f64f32eca1ad8731716e7de21da318bf2e9428": "f05fc7c77a71b3045788104adbc4e68d",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/0dd8b80f0e00e39a09691d87a8dd8bdc4f5003": "7966462af0adda9c272c6656980e1634",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/981afba704d01ed4e4223b5833549ae73be812": "072e60ab0444f1d2448f994346b4c855",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fd9e42ca5359109e81938b946ea0feb62a8358": "ac44dc48250461e41ea96380f4b8ab67",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/ffd8c845ec03c9009cf9d7bb5489d45dbc6c4e": "63e87fc894e01f6953d340699f404464",
".git/objects/ba/a8f3ea6e53f073ff8e26ce73bc8e4344c74f08": "f4b7f3b2da384f2399706d3ebb969fe5",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/d52444718831ccb5e7e886b53554f5196a1ecb": "e0f6f7d1d0089275245b5c4437207f35",
".git/objects/ca/0e593eb7035969664f657ea45822a9d47fe031": "ee26b62623c6018e3341502ec8c0a148",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d3/336970f087a6806afc13ae86cfc1ee2d7f1a5a": "33a5403b76324e7876d47b35135a7a38",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/d4c34602da5dbbe432cb5950257368a5089f65": "7c7b6a6516dc1a533440b680f7faf4af",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/9cd4c850dba5adf38bd44d4a23f11bba90f5a1": "5bdc37580b6b7ca5371c0708b617b24d",
".git/objects/dc/c298ca8937047a37ca6a8c998fc3ae6f7cc91d": "061082415a7c8e84fd93e44497f12f53",
".git/objects/dd/71a996a548d9dfe59d5412d54f0bdc8b63cfa9": "d3c6ca93e621418fa9cf0f19ddea1f6a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/178a6fbeef19a0bd0ed9b54dddec239e816864": "1483249f247e89fc7f8b0e143cccc4a7",
".git/objects/eb/104cb6786bf5d669b94730a196641f87348bf2": "aad19c0affc56acd341b72d3fc497941",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/41fef1dd0dbc21b668525634438f18301b0849": "c0560f96315c17a1a51c59cbb75d8de5",
".git/objects/f0/af3edd92108080b9d0cb3cd4ea5d2536045eea": "c5a53a1735970e26f9e251d73856433c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/2146751b2b34f49036393cea8361dcb64d7bfd": "74b5a445160ec1d8714c62571d833bff",
".git/refs/heads/main": "525c82e070abdeff170af246f376e1d7",
".git/refs/remotes/origin/main": "edb3892160fca2cf8f6600fc0c1b8478",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "be9e7c48e6c93295e04faa580325bbf6",
"assets/AssetManifest.bin": "c8965c67752aa78a58c9534752db33c0",
"assets/AssetManifest.bin.json": "66e2a15e85ebb1e1486d03f1fb94d377",
"assets/assets/arrow.png": "6405b179ac731be38d0bf116c5e25ea2",
"assets/assets/audio/background_music.mp3": "3fe9c8c7ba52c7b2071e532054d3de95",
"assets/assets/scene/scene1.png": "8faaf32d50b642a5c1f7709acdc5a025",
"assets/assets/scene/scene10.png": "d2f1a1d495a397fa6ef8310a9a0102b0",
"assets/assets/scene/scene2.png": "2d82c0bd351cce97d2f7b7d504eebed1",
"assets/assets/scene/scene3.png": "bdd933ef5c544027a28eb23a2e2f70a3",
"assets/assets/scene/scene4.png": "5ebfbbfd95e9f04b58d38b3422cd17cb",
"assets/assets/scene/scene5.png": "33f645ed47f9af4ec83ed96001e043b8",
"assets/assets/scene/scene6.png": "0605dffec0511b30cf2272e84ab201bd",
"assets/assets/scene/scene7.png": "42c565413b775f6f91a113f5e687fd26",
"assets/assets/scene/scene8.png": "44f6b972395be7c9d439cfe863246b19",
"assets/assets/scene/scene9.png": "090d8a40467731a0acc10ef20400aecf",
"assets/assets/splash.png": "d2e0bcb71b1a54f5322ae4fc5d5ab3f1",
"assets/FontManifest.json": "14c18d8fbd3ca06f8ecd08f8ec9f3cf8",
"assets/fonts/calibri.ttf": "527c5ab608cab860a6aae8ce02e14b0e",
"assets/fonts/forum.ttf": "6ca25d5c8e19ff749003734658816b42",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "49d93c2036ad4e43b7a52bfba935daa9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a482bb42060eaa62a1febe3106f983c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c74ef11b03ac4c983265666c75f123e7",
"/": "c74ef11b03ac4c983265666c75f123e7",
"main.dart.js": "ea3057a410254926ee0fb66f7069b4ca",
"manifest.json": "a108677497b1faf857b1cc1e04b35643",
"README.md": "768bf69f8231701875eff186504ccfed",
"splash/img/dark-1x.png": "b4ef2db5048aec3ee42235695dd48945",
"splash/img/dark-2x.png": "f2e87ed8615d0f1b37d056b37eebd7b9",
"splash/img/dark-3x.png": "2078cb7cf243b52d0176b23c019eac66",
"splash/img/dark-4x.png": "5e5d992e9adc20b2019f6e0af8cbd34c",
"splash/img/light-1x.png": "b4ef2db5048aec3ee42235695dd48945",
"splash/img/light-2x.png": "f2e87ed8615d0f1b37d056b37eebd7b9",
"splash/img/light-3x.png": "2078cb7cf243b52d0176b23c019eac66",
"splash/img/light-4x.png": "5e5d992e9adc20b2019f6e0af8cbd34c",
"version.json": "d4191ce9eaa276e7c1a4314a28aecf9e"};
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
