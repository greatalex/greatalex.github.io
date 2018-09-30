/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce26fb79bd4bad2e9b9e57a9919117d9"
  },
  {
    "url": "about/index.html",
    "revision": "a0851ece2c4691a04aa7605f0b42b7c9"
  },
  {
    "url": "assets/css/1.styles.75f4a4e7.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.479e00df.css",
    "revision": "bf357cf835ef63ba2b95158662054e6d"
  },
  {
    "url": "assets/css/3.styles.46a99ef1.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/styles.8a3505c2.css",
    "revision": "eaf4a33119b07b84b617194a229db467"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.75f4a4e7.js",
    "revision": "e7b02cf5d4ebe4b12ea5aa946c76619a"
  },
  {
    "url": "assets/js/10.6a3de555.js",
    "revision": "77a6fcbf56d4d4170874726449dbfb8c"
  },
  {
    "url": "assets/js/11.993f269b.js",
    "revision": "d729c4ba4073bfe2633ac48b71e68acf"
  },
  {
    "url": "assets/js/2.479e00df.js",
    "revision": "e5c188d53a1c576a5cbad75e099cd12e"
  },
  {
    "url": "assets/js/3.46a99ef1.js",
    "revision": "6339b18be5aeb515cc169688c6449e38"
  },
  {
    "url": "assets/js/4.f9821216.js",
    "revision": "5d494d1615fc84c4184729fcb5e0f947"
  },
  {
    "url": "assets/js/5.7d023776.js",
    "revision": "fd5f826cf1ef9e886234ef8c21ac9a2f"
  },
  {
    "url": "assets/js/6.2e6cb4a1.js",
    "revision": "24b654d83990cb032c56007e96b82353"
  },
  {
    "url": "assets/js/7.6d3bbcbb.js",
    "revision": "4056b68828f5d70a939274f39021576d"
  },
  {
    "url": "assets/js/8.3e7f2dc7.js",
    "revision": "fae24d2d4abaf9437015616f134ef68b"
  },
  {
    "url": "assets/js/9.abf15432.js",
    "revision": "8660f1f86ed1a01d9dd966c48017a61d"
  },
  {
    "url": "assets/js/app.8a3505c2.js",
    "revision": "9fcf517ef73222847446b32b629dbe4b"
  },
  {
    "url": "hero.jpg",
    "revision": "745a9f6f15a65406d3b380a6ce0f6e1d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "36958e4353d57354658d8697d05eaf5e"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "publication/index.html",
    "revision": "32f8901c7889d9b2769276d861cfd9e8"
  },
  {
    "url": "resource/index.html",
    "revision": "783ab72aae9bcb86b6599a5fa3643834"
  },
  {
    "url": "teaching/index.html",
    "revision": "42d7086c8d13ee488f3f51efb67c1fc8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
