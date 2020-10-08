'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "164f213c5af140c7fdba2cbdc0257012",
".git/config": "54522b051455997ad764702ebb10a973",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "4b0b6e3f5910dd2e0204900b62b4ead0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "576742f8f90b09a41e8211ec1f24ebe0",
".git/logs/refs/heads/main": "06e10cae00e52db4c80374398683593b",
".git/logs/refs/remotes/origin/main": "de9f2b3a06d52888fd7a38873e8854ee",
".git/objects/95/d6e89f2010d01f02db001ac6c4b011f0b4e6ee": "50a31fe2e836df24b8055f75ae416db9",
".git/objects/08/1df2b451eb092f5a714f330c4aa2a704e4f361": "85ca0181498906e0d324f4282192c6c3",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/1b/140af807122f95cf3e3d553d8857c29051a915": "6c807df5d0c26011ca4a134e7595a697",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/c997dd8350d41abe23951c6c80030fd4a061a8": "1b7375dc89d7d6b1e2c4f8d654bd6cd4",
".git/objects/27/80b25d27d44dc53be82102723144b37fcfedfa": "0d9f6d15d6a9012851db75561adaebf3",
".git/objects/28/c686868aaa2591a6af46617d20302ca9654b49": "047cf76b4e750031c1fc764420d2f742",
".git/objects/2b/0697c646a24f9af21c2eb0eee612078df8f2f1": "bd34f05a8d8939515baaa46e70c7f546",
".git/objects/2b/7da15f1d7c8f3cdf0eea832a21ebc26b566cde": "8f63906cf50ad86bd284868dc6a35b01",
".git/objects/2c/ca95bfc40d863db089afaba84b6e9eb9b544f0": "828674397f14f69cf59788f07932a047",
".git/objects/3f/318b681f1e41198d18d284885636a4c0a52ecc": "7470eb7489a55b2e9e4aef47a373281f",
".git/objects/42/b41fa4a00a8d08dd7c90eba9d24c959bc460e2": "899bf14c56d0f80deedda8f009d4f6c7",
".git/objects/45/f8e9f7710d5e538bdd8f9241e7907ad7b9f984": "994ca711c28abb4eadb7f1cffb53a168",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/27831d916e36a913e716ac6437a9ff33864d57": "38943da91ca339e57c87754228cf72a6",
".git/objects/55/4a22c8bb21a786b0ae1657274db107eda5c2e3": "50729449cd9ce70d916d7feca508844c",
".git/objects/59/a21ab4b82d7c0d31022699416dc06d8f239490": "31cc3617bcfa332a622710f0565d1914",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/65/41ab98d7e7e4c46a336937d4da5698e2744b9f": "9ab225362a18917991d0c5d47bf4b2ec",
".git/objects/7d/fbf65a6c488404411562827a21355ecc2170fe": "5c9360b950a32fc94b01da3fe5442baa",
".git/objects/7e/73a96764c41e340d364cefece383d54582e238": "79f3d27f3a64599b79ccfc9b7bea6bc9",
".git/objects/82/3247fa1de662d37ccac6bbf080bf4c969ca019": "42aa1b6c8233414424764fe57e2f16bf",
".git/objects/84/9f06c323bc107fe085fcef0853baef7357186a": "04c727c993bbebb7b0cbdb0ccaebd654",
".git/objects/87/04458da299d2d603a98897a1a06c677b9bcede": "d3b532b1ff4eb527f9cd0699284c5a7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5a8683eabb4188602f7009c192772f6f57aac3": "dffdad5f6252ff42d37f1d36d9fd2a53",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/202e5787bfae7aa37a6404252e77a7b9f7607c": "689a3fc5532f087d6d023bf664b049f4",
".git/objects/8f/d610aaf8939ef34fc70e317c8701694d295cc6": "a4069291e39a09178c2b3bf7d6da4556",
".git/objects/9e/53376d8ad5b365dc69b2d58c7a4fe9310a67fd": "c0816fe5480f00253fb56dfc709c39aa",
".git/objects/9e/a575a7ac716d9265267fd235a9084bde24bde3": "42f082f3d9bab0ad9d143a0ec1b1dc9f",
".git/objects/a6/97f2d9c3da2b5dd6d44a1014590856f032871c": "37545ee9db5b754b2119c00b61ef4a44",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/471ba73f10e745c9e6057654df46cd524ea03e": "bb5e3cca3a09d13d6874a7658d352c61",
".git/objects/ad/c17205b3c7eb5995a0cf2d1bc5800f87c44dc0": "72fac977005c63c065f7dddf722f76e6",
".git/objects/b0/fe150f9bd9a611742872ff5789efc0a2f9d9ef": "b50bd2b84d4e9e63bf1a4492a45fbbdd",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6d91a7fcadb1dab6d275c8a229f0c39f8f96b9": "b23c26ed225dede94032e3309f9d18df",
".git/objects/c9/e88e485e23fc3eb2bae9f91d3e43d9dfee1aec": "f8190de928dd05546cc73588b399a61a",
".git/objects/cb/501064a8ec22fd02e46bc748376aeea7bf30b8": "bf9404889efa591b6fb9fa1fd5fa287f",
".git/objects/cf/a0f7236c80f4a07cdc0609dab6abdda5952ec9": "31a7b703deb2f91dd8df8eaaef922fa2",
".git/objects/cf/f265ab52144035be4a2b6c707138bf6be584e4": "0700d727508229cf5e9e6026df062882",
".git/objects/d0/0dfdc43d5d37542a4ffbbd4b2a41fa4e503aec": "f69df1164c67251896246717c8b65cf7",
".git/objects/d1/4503660b4bcceac24c9e3f8d0e6351bfb61bd5": "5066bc33b268b2a73aaadd395313307e",
".git/objects/db/5edf573f6f8b0ba8f923dccaa575098b991997": "dd770d72d21d362714307a21785a0cc1",
".git/objects/df/bb81af7b9738b2e069e3ef2305b101a4c0215b": "b240a9986b0b05cd8905fd60c7d03d89",
".git/objects/e2/26609149dadec9f8fe3bf231b1eae0173e56ef": "358571df85a4b9416c8f1f42239145e1",
".git/objects/e3/df92ebaa7f544f995e81fba500b2afd359c0bb": "e811bf7eecb4c46a50f8f00d9f41eaa4",
".git/objects/e5/540d3f0b574b284fd9f86ac85d78f8eee23b6d": "6f6007cddeefb5b43c47c12b052226bd",
".git/objects/e9/69650a350348924c09462df90dc5c95828b231": "cd9fbd2a822407450aefedffb4f4312d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/1ab69d4af41ef648acf0ea392437796abab581": "98e500cfd20af6ff98cde8ca96352fa7",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "1805c5a7b97db4412ac1885825fa5e23",
".git/refs/remotes/origin/main": "1805c5a7b97db4412ac1885825fa5e23",
"assets/AssetManifest.json": "c66e2f6d2d5e2bfb79516c9290f8d20c",
"assets/assets/images/icon.png": "1ec832b34d07b8a5e2f6e08dc35172f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "7f413fdbd7dcb227ec6ec441a61408fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "84e4182824b3e91ea36e6df60b7f24db",
"/": "84e4182824b3e91ea36e6df60b7f24db",
"main.dart.js": "2070c2383d42174ca211495202ae82b2",
"manifest.json": "c682d539a572366247031bb78ae20949"
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
