'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a17fac7a1ba7b5879f73019d57fab115",
"index.html": "15998a772dc54696f6f7f786e3c748b4",
"/": "15998a772dc54696f6f7f786e3c748b4",
"main.dart.js": "eacd1a849c2c7d9f96cde45ee06da03f",
"favicon.png": "75a3a9a5f30ab94f8d69cf97ecb97aed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/favicon.png": "75a3a9a5f30ab94f8d69cf97ecb97aed",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb7eef92497d90e8fb903433fbd96d8b",
".git/config": "8ca940e8ce3ac5c8dde2601240688080",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/944f41a8c90d881cb602f5c5a068723ee172e1": "d2bf27084d2c8b8a3bffc1a32e94ae09",
".git/objects/3e/08135aa0f8affdf0e9edbce48a01b1e3a3a0aa": "47bd4ce516a1bf8d8f4ce9ef94db0a88",
".git/objects/9b/f13c001da15198c73a467a3d619a3aceb98735": "b9444b42373c1f504916f28f66037a36",
".git/objects/9e/c90cb5b2833d004267c9a83d26d7c4539c38a9": "0ea121c48826af1155b0930ce895645d",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/93/6fa4f753236f5cb1f74bcc26c68037277c93e7": "f71cb21867779fba7c9133c28348985b",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/5f/57b82d095d4ac9545ff261cd015c49c3d5345d": "3cca6bc3be4da29dd10dd7a49cb42f24",
".git/objects/9d/ef11cf354f6e5a42341ab54a2e0e8b320978eb": "bdc038ebfb0ba71694e1c6e3965873f9",
".git/objects/9c/43616c032f193a237633b217f3697892f835b8": "c0b66292cff7d4ed3337e9887c8d568d",
".git/objects/a4/663b9ac6b0e4b96bef6f0b95ccb8403ba13cff": "2363598369350e15a0861b0bd1714893",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/bd/a941ecc36ff219fa42ec0c25c7615ac4b374b7": "62faa2398c42ba8d8283fdbfd7d02dc1",
".git/objects/d6/b8724cceaab9534ab50fc374c7fe9f13086282": "1ab937b7ac5e917db5c84ee2af2d74a6",
".git/objects/ae/c6c59fd196aa22a1888bd15d6299009b51c6f6": "525d41eb77c8f89eb854cbe45dc2eba4",
".git/objects/d8/bb3ac435ec263664f2ca087717d7db34d8c154": "4e2c12141a7b7998ef604f40e2fcff19",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c6/1e1218bd38312c7770500e3857635d95ddee22": "9ef09e7763c11231cf2695b98f201537",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/cb41d49f7dc5c2c84bdf41e2c94212afb137a1": "aea7df47b7c64a3a96466dc1caf76a67",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/776a8ea78cf0fc8fac6b77d674fe577e5c2a70": "40a2c1a538efc46f3c588def2b730430",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/885ae2d255f183b46bc2abb2e57f189ab28fdb": "89199cceb98c4f318b4e625300b5b45d",
".git/objects/4c/9d5a0e2d2bb2b8042334f46f6a65c4a9621abb": "7a106a96752f47d2468f50ea63b55f4d",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/21/754bc6d79d7c339d586717d6f57c4e69935ef4": "f67509f9b2331ec9e02f50e27a375300",
".git/objects/21/73eb3335f7e9dac160932d64332b9c5e3f564b": "0f0e3825d043b07e3d34f2fdf716c903",
".git/objects/75/d3ccee1b5d535f9421f3fd5511557482c4c77e": "f294b68e0550546879b8575071c30c0e",
".git/objects/75/e3993cf61096f75a38e1a8c5e4ae46d8a056a2": "9da9104930308a9cefa436d44376d56a",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/52c19209931e23bb13683354539df541f26786": "d41c6c64c80a4a5329c9db05bd779150",
".git/objects/65/18dbeaaf385044ac0049e9ac788ecc6c4443a3": "9c1a9b39c6522d08051a498b4c0a5c23",
".git/objects/62/cde345cdd0a2ef7b97370a93f7c56e832308b5": "77290d22be4059753e21b504472239bb",
".git/objects/98/86f5be186b1928ac075c6472a253ef9bbf3005": "6f76b749beb0ab6d667322b1b2208c86",
".git/objects/5b/f0a6ed3368b7881b092f22b94c101ce2e1a4fc": "4591fc368c790a3b6e21609bf3e7ddc5",
".git/objects/37/8bca9af7862c7b5491088841d905fd56b6be20": "d1872cfd73e6dbd995d6e38cb2b5baa9",
".git/objects/52/6fb4fa1c81198bad53db31273b53549f4ff7ca": "c07e15c5b808fb7bffa58751846d67e0",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/d4/e31957ff5ef5f1ca65d2d469ea958c10ceafd2": "de149fea7137b0b2a1a247895ac9ba4e",
".git/objects/a7/ede63f07b1a2132805b9f998520dff0c32d2e6": "9a2062d8141ba351aa677a23b00cc889",
".git/objects/a7/1c8699b20b4969c843638e9a2d301a3e7f1329": "576b485f79444b443be711350fec74d4",
".git/objects/dd/e76012f8eab2d1b4be5d56302f0ba3661bef0b": "197089776fb3b1761e8dbec2580af47d",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/aa/9cea3a5f36de9f785cd16415793f21d6961759": "e9203a423dcb13eeab43c75c85ba0f1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/60d7473482d49b0c9682236f67d79547b7aaa1": "b7c25d4a6a381056bafefb8e83e1c170",
".git/objects/a1/b91f361fbd213b52d2ebc3e7f2a1e12d858e0e": "9e7230594025e7d9c21f9e41adfd1d0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/c109019c1d666c3a6123c63718dba7b7238844": "a4ac768aa6165bf445c5114d85e385f8",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/83541eadc91360e02d2f0e029dd984c6d1f91e": "c315e418d40d6ac7bfff02488d879370",
".git/objects/e9/7c4bea4939cc91dd9eb208fa5a285072c1349f": "688b9c09f39f8d678861ebc0a126dca2",
".git/objects/f1/630105cf31445eb9a1abf8a12b2851e38ddb73": "9fefccdec532411612767fd2415d30c4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/79/82655d08dec963b7b14bae8d8217543bae22fc": "ea13cf767c24dba977df705497dd4437",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/3b3b455a256b7327d86ab70de15597e24a61e3": "2b704fa2393067214f315c660325a362",
".git/objects/77/67ec958e61038906798bbb2be0213cd3c8aba8": "e3e2dfa9b15e07df3a79c211cbf6bea3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/8bfc76b92b6ef97c28a03a3eb6334794444e36": "e91332f2f01b2c37afd05bb77567f1b6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/25/30d2673937ec16379d0830c3acaba8a1c12a9f": "3b39f4c0decbd61fbd0f040836a3efee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "db29ad616c63c3f94512345b46a9c19c",
".git/logs/refs/heads/main": "db29ad616c63c3f94512345b46a9c19c",
".git/logs/refs/remotes/origin/HEAD": "fe89b7b53a474834570982492e7fb924",
".git/logs/refs/remotes/origin/main": "fe25ace031164317648b6bfb04e56d5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "73de5f4b9f42957e6d96955e9ee7d868",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "73de5f4b9f42957e6d96955e9ee7d868",
".git/index": "8a2d03555a726aa19799ceed3de336de",
".git/packed-refs": "b46307e95928e177dc81e13c0ae43ab1",
".git/COMMIT_EDITMSG": "96fed9894a2bac1d453c893d28c9a23d",
".git/FETCH_HEAD": "fc44cc197365e10495d8385f7e1dc520",
"assets/AssetManifest.json": "66355ec746266bde8ebb7393f9180639",
"assets/NOTICES": "c848efe953a865e79ca0e4e5c76183e3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/profile.jpg": "f9bead6a645c076fb2d75a6b9dd6689b",
"assets/assets/icons/logoOLD.png": "26c8bf4d404cb7d921f79e5e104153fb",
"assets/assets/icons/logo.png": "75a3a9a5f30ab94f8d69cf97ecb97aed",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "080455d5870b6e862e122c9c83fa91b2",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "c7883d9a8f032450405d34f520e7936b",
".idea/misc.xml": "64e48ed5fe1c0771136b54971310826a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
