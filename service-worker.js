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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a9b847a58464383891bbd8c8e0d1286a"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.ada818c6.css",
    "revision": "f019b6e25cedc3b50d8e29a3774aeef0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4f01da7.js",
    "revision": "929e567cea34af7a0cdaaad96330f9e5"
  },
  {
    "url": "assets/js/11.fba4ddb2.js",
    "revision": "4fb023eaacd9432ffe052072c59367e5"
  },
  {
    "url": "assets/js/12.12583b4c.js",
    "revision": "4f2dc63df088bfb6497b4bc7a77b5a25"
  },
  {
    "url": "assets/js/13.3a605214.js",
    "revision": "e0e5e3c3bcc287b87b2f0a541b28f7fa"
  },
  {
    "url": "assets/js/14.24295321.js",
    "revision": "4fbbc82f19cd60108ef7a47cb6a55cff"
  },
  {
    "url": "assets/js/15.1e1f6633.js",
    "revision": "5ecd22d7efa2d3ab623f681c3c36f467"
  },
  {
    "url": "assets/js/16.48c4f428.js",
    "revision": "7a5bbc7301192f63ce1b9b2a2bcd7026"
  },
  {
    "url": "assets/js/17.863fbdef.js",
    "revision": "ae87a7ab8cc829b01416059364bcbdfa"
  },
  {
    "url": "assets/js/18.1ba06359.js",
    "revision": "8d84ece5eaf80cbf829db5f7de8c6f4f"
  },
  {
    "url": "assets/js/19.8530e2b4.js",
    "revision": "86e8f21e3ba1f6595420e393cc40c4a2"
  },
  {
    "url": "assets/js/20.fccd6048.js",
    "revision": "93f22a938d6436e7cf389812a71b3336"
  },
  {
    "url": "assets/js/21.6c974d6b.js",
    "revision": "7857dd68dfce032afb42c560a36fff03"
  },
  {
    "url": "assets/js/22.bf4d4e8b.js",
    "revision": "bbab7eda360f1ebd01b294b891a50af0"
  },
  {
    "url": "assets/js/23.83f356a3.js",
    "revision": "bb160cb22fa3b75de5c141b35e214c1c"
  },
  {
    "url": "assets/js/24.cb736db0.js",
    "revision": "5e6019855cae6c67a3c78229849e8cb0"
  },
  {
    "url": "assets/js/25.1284c0a8.js",
    "revision": "82bc97c0e8ed6e0064f287f86fd17d35"
  },
  {
    "url": "assets/js/26.8a2e06ea.js",
    "revision": "e28a430e408e7c1036d775cd973a3685"
  },
  {
    "url": "assets/js/27.f1e827e4.js",
    "revision": "66c0d5e0d0b1ed48ba442ba3cd80ede7"
  },
  {
    "url": "assets/js/28.28798355.js",
    "revision": "aefa82426a19e2b63dcc6520a6d7da60"
  },
  {
    "url": "assets/js/29.defc9928.js",
    "revision": "8540d4d60fe599d928c86bfec43dd100"
  },
  {
    "url": "assets/js/4.7b614c82.js",
    "revision": "a22080481903cd635d888337b7760259"
  },
  {
    "url": "assets/js/5.9fbe3708.js",
    "revision": "da5911bf85a2fda5430d749f1c4a3b76"
  },
  {
    "url": "assets/js/6.da2d9d77.js",
    "revision": "185410967036e877fa6553e7059556e5"
  },
  {
    "url": "assets/js/7.c5c36ff4.js",
    "revision": "58922036b5d7c3431f9dfc4d4fe0790b"
  },
  {
    "url": "assets/js/8.159b995d.js",
    "revision": "52eeec543bcc2c6b92bbc4cd79f70877"
  },
  {
    "url": "assets/js/9.00085909.js",
    "revision": "e8fb470b85cf129d7aa43690f6a672cf"
  },
  {
    "url": "assets/js/app.b37c2933.js",
    "revision": "d5a50fe4ebf28ca37e4e7fd408b46846"
  },
  {
    "url": "assets/js/vendors~flowchart.7b35c902.js",
    "revision": "0a6e0bbcac8b167d841b2be8c2316497"
  },
  {
    "url": "assets/js/vendors~notification.8f3399e0.js",
    "revision": "eac81966894274f2713c6949d46f0165"
  },
  {
    "url": "dog4.gif",
    "revision": "9cd262b56c9825e3f443754624db98c9"
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
    "revision": "ef1f871ddc90323b46ca7f20bf66cf5f"
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
    "url": "logo111.png",
    "revision": "e53d0ba848ea79faa74c04cfe399b561"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "wangwang/appendix/device-type.html",
    "revision": "5e72f1244e3ed2ea2df44c1536b3cf92"
  },
  {
    "url": "wangwang/appendix/index.html",
    "revision": "9fbcb152207c298062bb23b18cb255b2"
  },
  {
    "url": "wangwang/appendix/manufacturer.html",
    "revision": "2405adc8f500fd16b8203c754991e247"
  },
  {
    "url": "wangwang/changelog/index.html",
    "revision": "c52a25472ff3fdc21ad30d70af3550fa"
  },
  {
    "url": "wangwang/developing/index.html",
    "revision": "10bbc7ae811579fda6503ade3597dafb"
  },
  {
    "url": "wangwang/guide/index.html",
    "revision": "23ef9d52d52e41304a6844ec93143467"
  },
  {
    "url": "wangwang/protocol/json/index.html",
    "revision": "41d88c2e7ecb0839148cba702de6a78f"
  },
  {
    "url": "wangwang/protocol/v1/index.html",
    "revision": "41688eeb777bf1d8ab55106ac3b83482"
  },
  {
    "url": "wangwang/protocol/v2/index.html",
    "revision": "c70aa08eab797aaa6aad257de98b40c3"
  },
  {
    "url": "wangwang/protocol/v3/index.html",
    "revision": "ccad7a4f91bbfa7e8f680a5690abcbe9"
  }
].concat(self.__precacheManifest || []);
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
