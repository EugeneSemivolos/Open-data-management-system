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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "44682913fdb166abda8750e19b3892a2"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.7a86bea2.css",
    "revision": "d808a88946ba4c29b4a27ba717c65aa7"
  },
  {
    "url": "assets/img/delete.6f9a9829.png",
    "revision": "6f9a9829ece6ff0c93d5bdb92fd222aa"
  },
  {
    "url": "assets/img/get_after_deleting.494a8a8b.png",
    "revision": "494a8a8b3f52dde860a9e54ad95ab9b1"
  },
  {
    "url": "assets/img/get_after_posting.af619a36.png",
    "revision": "af619a36787d372e696039b07e0b91f2"
  },
  {
    "url": "assets/img/get_after_putting.836174b3.png",
    "revision": "836174b36861c09d83ca9339d6fa5d1f"
  },
  {
    "url": "assets/img/get.3e5d9de4.png",
    "revision": "3e5d9de45687dcf400ef4c00426dcedc"
  },
  {
    "url": "assets/img/post_err.e4dc9968.png",
    "revision": "e4dc9968433fddd664a1195d3ea34264"
  },
  {
    "url": "assets/img/post_success.cce3a7e4.png",
    "revision": "cce3a7e4aacc835d0a77d15bb7aaf930"
  },
  {
    "url": "assets/img/put.1149c8bd.png",
    "revision": "1149c8bd6f497db3fbcced48c97565ca"
  },
  {
    "url": "assets/img/relation_model.8c8f8c61.png",
    "revision": "8c8f8c615cc8e05d5dd32635f7650194"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a4b32e52.js",
    "revision": "3e4c20e5dfea9a6c2bef1aa76991394e"
  },
  {
    "url": "assets/js/11.13ec7079.js",
    "revision": "19db36806306dd7c120e1e8206e1d65f"
  },
  {
    "url": "assets/js/12.402ac58a.js",
    "revision": "020c29f3eda3129406cbe1db12ee2ee9"
  },
  {
    "url": "assets/js/13.2a9e41d6.js",
    "revision": "a7aef24c372b27295a43bff60d5c4d98"
  },
  {
    "url": "assets/js/14.feec8449.js",
    "revision": "a92d34174fdfc7015174ba7721b7d889"
  },
  {
    "url": "assets/js/15.2fd3d02a.js",
    "revision": "f139e857ec666f4703acbce4d11121cc"
  },
  {
    "url": "assets/js/16.c616848f.js",
    "revision": "6c3e2c360b9e956653daaeb58af41999"
  },
  {
    "url": "assets/js/17.f28b5193.js",
    "revision": "f8d3b1d0772a1965e0ccd76400f00e86"
  },
  {
    "url": "assets/js/18.5327cfed.js",
    "revision": "1fda4cdb7f32aae753f13ba919a4c339"
  },
  {
    "url": "assets/js/19.271f6479.js",
    "revision": "acc87d28d33308ddd4c04ef59d9b8f50"
  },
  {
    "url": "assets/js/2.7c8de575.js",
    "revision": "e987c7d6ffc0022038c9ec0723492141"
  },
  {
    "url": "assets/js/20.c0ac2357.js",
    "revision": "2a0a1ecdd82e9932f50b164c7f650f45"
  },
  {
    "url": "assets/js/21.98a85592.js",
    "revision": "21866f66555b89c8b3d452acd77175fb"
  },
  {
    "url": "assets/js/22.e4cb10fb.js",
    "revision": "4b8ae2a06b84f967282e5d0db4a4b0ee"
  },
  {
    "url": "assets/js/23.1e21b3df.js",
    "revision": "f9ba27e785919ec1ac8c65636f5a8b55"
  },
  {
    "url": "assets/js/24.c5407fcf.js",
    "revision": "42cf18aa4a0741d638e0af93afb35d4f"
  },
  {
    "url": "assets/js/26.692a3120.js",
    "revision": "58fbc6f88de211b8e41bad42954b221d"
  },
  {
    "url": "assets/js/3.d5bfd141.js",
    "revision": "8d9c77f3797dc21ea3fd69b46e0dcd72"
  },
  {
    "url": "assets/js/4.ae6a6bfd.js",
    "revision": "0ef835bf435d98a6edf1c35e3bcacdf3"
  },
  {
    "url": "assets/js/5.125f3ffb.js",
    "revision": "e85c8cf6fbdce593550ad6eddd9ef42d"
  },
  {
    "url": "assets/js/6.07205bb4.js",
    "revision": "395e6d0aec3f8bc407e222f54bf4185e"
  },
  {
    "url": "assets/js/7.213601b9.js",
    "revision": "730e00f6155cf350989f7a04e7acd4f6"
  },
  {
    "url": "assets/js/8.1764375e.js",
    "revision": "0be00e955ad1ab792169e4e915ac4a84"
  },
  {
    "url": "assets/js/9.1f621b48.js",
    "revision": "bede82ea706975de0bf549a2411a9597"
  },
  {
    "url": "assets/js/app.1e64c8f0.js",
    "revision": "9fe360e28bf0fca814cbc2543313ca1d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d385760d05593ef881721761fa317919"
  },
  {
    "url": "design/index.html",
    "revision": "d1bdfec25eaef560eb2f71eae946d49c"
  },
  {
    "url": "index.html",
    "revision": "1e27576f1e5e566be0174b612bb81b1c"
  },
  {
    "url": "intro/index.html",
    "revision": "c4b47a03eb5d452dcdc60d90abfb5e4b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "96d37e27c52fac94d753624c19890b80"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "15e585b8953e3cbed4314e333a28fce2"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "04a22a91fda5dff8f172e84d354163bd"
  },
  {
    "url": "software/index.html",
    "revision": "2626cfa1a16619ae6277f5e50715ce8b"
  },
  {
    "url": "test/index.html",
    "revision": "df3a0c422f15b8cdec57030d109d7be7"
  },
  {
    "url": "use cases/index.html",
    "revision": "690c9cf13cce584e548790d287fa1ab3"
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
