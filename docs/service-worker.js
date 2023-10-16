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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8fd3090746a1a6deb0c06b713debf167"
  },
  {
    "url": "account/register.html",
    "revision": "b1fbb7654e2a463da8d552932101150e"
  },
  {
    "url": "account/signin.html",
    "revision": "d9781c07b9b1120280b6bab6044636f0"
  },
  {
    "url": "account/user.html",
    "revision": "aab73fa7b189275825898fdae202228f"
  },
  {
    "url": "admin/index.html",
    "revision": "d318bc082254994c98f05a3205e5621a"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "014e3b2df2952c8f2c5446de338b041a"
  },
  {
    "url": "assets/css/0.styles.dadcfc48.css",
    "revision": "861bc08f28c887f98ba970a5f6414e74"
  },
  {
    "url": "assets/favicon.png",
    "revision": "d40b0b05b48c754e64d1b18951d6a357"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.1dc35d25.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.25a32416.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.c8ddf1e5.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.e6cf7c6e.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "assets/fonts/ionicons.37939349.ttf",
    "revision": "379393493c3672e03017f8c4078afcd4"
  },
  {
    "url": "assets/fonts/ionicons.3f2acd40.eot",
    "revision": "3f2acd40149b3704f3a97364d0fed0d3"
  },
  {
    "url": "assets/fonts/ionicons.96f1c901.woff2",
    "revision": "96f1c901c087fb64019f7665f7f8aca6"
  },
  {
    "url": "assets/fonts/ionicons.e74f7161.woff",
    "revision": "e74f7161730ced5656582f9faf231661"
  },
  {
    "url": "assets/GitHub-Screen.jpg",
    "revision": "17c55a1b3ea4d27baa656976880b449e"
  },
  {
    "url": "assets/HomeScreen.jpg",
    "revision": "9a6be72f21f5ccdbcedb6dee396a0a57"
  },
  {
    "url": "assets/img/fontawesome-webfont.d7c63908.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "assets/img/ionicons.326445b5.svg",
    "revision": "326445b510380aedd5b7c9711d8ca9d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.baca2231.js",
    "revision": "4c5f2ee30d2805c29ca03399046e6aed"
  },
  {
    "url": "assets/js/100.3f78c108.js",
    "revision": "9d685fb5ca652b68ed24ee0529c98df6"
  },
  {
    "url": "assets/js/101.71e45070.js",
    "revision": "1364cf44427607969fa234578267689f"
  },
  {
    "url": "assets/js/102.5957156c.js",
    "revision": "8cc5b731808cfcdbc9a41f0bb0546bd0"
  },
  {
    "url": "assets/js/103.e3b7ade2.js",
    "revision": "e06742ab2ddba4247aad3b60916ebb1d"
  },
  {
    "url": "assets/js/104.36d653a4.js",
    "revision": "1369cc9dd632272c8a253c739e1dbbcc"
  },
  {
    "url": "assets/js/105.d55bdf87.js",
    "revision": "297edce547a2e4d54c402c666c69860e"
  },
  {
    "url": "assets/js/106.a4d8e55b.js",
    "revision": "d32fe772bfdfba6bcf404b9ef8e39186"
  },
  {
    "url": "assets/js/107.5ad5c93c.js",
    "revision": "9b42cbb0b4a6cba1076bbc3e677e5ecc"
  },
  {
    "url": "assets/js/108.acd563c7.js",
    "revision": "12ad71e8d0e93f3675ec8ab5f4093011"
  },
  {
    "url": "assets/js/109.b72c68af.js",
    "revision": "d625e621fc2b9e23a0d0487f132d07d1"
  },
  {
    "url": "assets/js/11.949d78b8.js",
    "revision": "c7740268f117a2e96e77ae1432c0bda8"
  },
  {
    "url": "assets/js/110.4e93e7f0.js",
    "revision": "dbce35287a94f3c4b858f062755001b5"
  },
  {
    "url": "assets/js/111.9f60d9d3.js",
    "revision": "7490f01743f1f3bc4360d3554408ba5d"
  },
  {
    "url": "assets/js/112.28bf396b.js",
    "revision": "d1625e839ebb79b646b5c915cd0e66fa"
  },
  {
    "url": "assets/js/113.c7570f2b.js",
    "revision": "d4a1935d1e1a69851c6639fe2f17f377"
  },
  {
    "url": "assets/js/114.96544889.js",
    "revision": "cad25fdf7c6578c0a7ab1b2fc1a8a696"
  },
  {
    "url": "assets/js/115.4bf57830.js",
    "revision": "c22357728ed1f968d354a1ca40912306"
  },
  {
    "url": "assets/js/116.81ad4342.js",
    "revision": "220cef6377438bf906cd9388345a5a1e"
  },
  {
    "url": "assets/js/117.4e0df1af.js",
    "revision": "0e8c554817870b0dada80e93489f4efd"
  },
  {
    "url": "assets/js/118.cf36233c.js",
    "revision": "d75b8fc1aac91059bdd20ed0ab0ab723"
  },
  {
    "url": "assets/js/119.173bc752.js",
    "revision": "61c9441393283c9578ff2c87f810aa49"
  },
  {
    "url": "assets/js/12.c8c1f9f7.js",
    "revision": "85bdf20f76a63e10538e076f8e15334a"
  },
  {
    "url": "assets/js/120.ccd5a85c.js",
    "revision": "b86963d074f0ac4cea9b2e58c6fb108d"
  },
  {
    "url": "assets/js/121.7dabeec4.js",
    "revision": "ce12ba47a8e98b8478053f9b277f8c5e"
  },
  {
    "url": "assets/js/122.41f87bb5.js",
    "revision": "ee76a78a3b66679a2a76fc8e9eb42563"
  },
  {
    "url": "assets/js/123.beb35ee0.js",
    "revision": "d5ec1e816d0bad9da7fd719a5cd0febe"
  },
  {
    "url": "assets/js/124.eb2b1f6e.js",
    "revision": "e0af6278b4f2371b82a69191ba9b3de6"
  },
  {
    "url": "assets/js/125.0dceace7.js",
    "revision": "a92570c2f7bcb53eeddce0dbaf037bd8"
  },
  {
    "url": "assets/js/126.180b08f0.js",
    "revision": "fc4a8aeb23e3622067ea33e0dd6420a2"
  },
  {
    "url": "assets/js/127.d8c63e2f.js",
    "revision": "f71174ab979e8ee05cf83a1b43eb07df"
  },
  {
    "url": "assets/js/128.5faba54a.js",
    "revision": "93e00fec8b9c94f7e3029e191fb22dbb"
  },
  {
    "url": "assets/js/129.86cb7559.js",
    "revision": "f0c41995832a45926d8b2b806e3f4a18"
  },
  {
    "url": "assets/js/13.2a7a710d.js",
    "revision": "7e0613251a4e228601ede6130cfec7a2"
  },
  {
    "url": "assets/js/130.52316b84.js",
    "revision": "f88f5433b94f86b4622d2f551e389003"
  },
  {
    "url": "assets/js/131.34087588.js",
    "revision": "d19147e38a58987f855c65d547a69290"
  },
  {
    "url": "assets/js/132.324912e2.js",
    "revision": "d7adeaa5b513510381fbf3514c1a9398"
  },
  {
    "url": "assets/js/133.7cc0b746.js",
    "revision": "28bb3d8d0c2a5c381cfff0a6f3fdaade"
  },
  {
    "url": "assets/js/134.391643b5.js",
    "revision": "55a2892afa0c13c736ae5d7458870152"
  },
  {
    "url": "assets/js/135.41bb8485.js",
    "revision": "0512a236970afdab21d77590e3f74957"
  },
  {
    "url": "assets/js/136.e390b6cd.js",
    "revision": "2170ca3191bc3913009cb194138b7440"
  },
  {
    "url": "assets/js/137.0f0a783d.js",
    "revision": "fb0b7b307076ff6ec2e95f26a57ce908"
  },
  {
    "url": "assets/js/138.c8f8474a.js",
    "revision": "b36e058b74206308401e59338f82b4b8"
  },
  {
    "url": "assets/js/139.1c67eb88.js",
    "revision": "1f215f6dc5deb1e813a1b0d206b98cae"
  },
  {
    "url": "assets/js/14.fdbb5b2e.js",
    "revision": "400079610410b502ab91ebd9561d8d97"
  },
  {
    "url": "assets/js/140.18491a4b.js",
    "revision": "86f85fa916baaf49b5f253d706a2eddc"
  },
  {
    "url": "assets/js/141.3d5beb68.js",
    "revision": "3280da42d1ae51bcf8ed9e0c732ee751"
  },
  {
    "url": "assets/js/142.34737b1e.js",
    "revision": "8ed2b7598d15d9fcf9bf69f20cf1639b"
  },
  {
    "url": "assets/js/143.b5c9a064.js",
    "revision": "82279553c1dca730946b230f4121956b"
  },
  {
    "url": "assets/js/144.527025a1.js",
    "revision": "537306f102cd32e4d606ab6b8e0fce4d"
  },
  {
    "url": "assets/js/145.9e81b55e.js",
    "revision": "0d1160b36fb3b91979a5abd435b27505"
  },
  {
    "url": "assets/js/146.4bc5d66a.js",
    "revision": "cd5f18fc9c272ce7112ef3d81453fbb2"
  },
  {
    "url": "assets/js/147.f1fbf89a.js",
    "revision": "69142853632f7d172dffd5d364b7bed8"
  },
  {
    "url": "assets/js/148.a8a551d1.js",
    "revision": "67876d920662c2b1a3defa6620cc037e"
  },
  {
    "url": "assets/js/149.6e4aca92.js",
    "revision": "a50c2f0b5450434bee7b20d1414e7f96"
  },
  {
    "url": "assets/js/15.8d798d29.js",
    "revision": "eeb9a065a8fd3409bc94269de801e032"
  },
  {
    "url": "assets/js/150.c30c66a0.js",
    "revision": "8c2576336c5c4d51e3faea97cac3cedf"
  },
  {
    "url": "assets/js/151.485cbbf2.js",
    "revision": "9b022dfcca7d71841b5ceba82502c645"
  },
  {
    "url": "assets/js/152.22169d75.js",
    "revision": "b2633ec10aebb9d3352227acd2f8b23e"
  },
  {
    "url": "assets/js/153.7a862942.js",
    "revision": "ba9e5bbc2b11d2312835501a2cd0c025"
  },
  {
    "url": "assets/js/154.a51bc91f.js",
    "revision": "af4c346482b5073c2ad00c89e99eafcb"
  },
  {
    "url": "assets/js/155.b9c5467e.js",
    "revision": "655ba61270152e8a5be02a3eacf969cd"
  },
  {
    "url": "assets/js/156.b7469c4d.js",
    "revision": "784b327e1cd6da253b8e4f1929934175"
  },
  {
    "url": "assets/js/157.5582d8e4.js",
    "revision": "c4d0f1e6a98df9a0d20c22a0af64ccf8"
  },
  {
    "url": "assets/js/158.3e1ccdbf.js",
    "revision": "ae12637fe78ba2634e1f5347bd5452f0"
  },
  {
    "url": "assets/js/159.e973c5c7.js",
    "revision": "5ab8f34ca576ca629347db9e7f432859"
  },
  {
    "url": "assets/js/16.bf12ea0d.js",
    "revision": "4b294e905fbd708f2a0e377b4d8e78d6"
  },
  {
    "url": "assets/js/160.1929b408.js",
    "revision": "5b0cd90923b8325bcc9e58f3244b313c"
  },
  {
    "url": "assets/js/161.2d1fde73.js",
    "revision": "94d1c6edc19592d27fe8e2cb4f36c839"
  },
  {
    "url": "assets/js/162.fc5f700a.js",
    "revision": "2489f4baf6146f95809ef222f9fb8a0c"
  },
  {
    "url": "assets/js/163.8a564e6c.js",
    "revision": "2fb92f812816f836f21be00dac65f288"
  },
  {
    "url": "assets/js/164.2c4524f4.js",
    "revision": "f1e4ecfffbbdc71bdcb1b9f1b63188d9"
  },
  {
    "url": "assets/js/165.3f1986dc.js",
    "revision": "170b8cf15e91e6fd76b286f011f50a18"
  },
  {
    "url": "assets/js/166.a75f082d.js",
    "revision": "41d4ec86528fd1166012ea0c845aea79"
  },
  {
    "url": "assets/js/167.56eea22d.js",
    "revision": "a78430665f19c3bab648ce761e545c36"
  },
  {
    "url": "assets/js/168.dd103723.js",
    "revision": "d98f0706b91de1a4ec675ce26fb412cd"
  },
  {
    "url": "assets/js/169.f53f920f.js",
    "revision": "4718acb37a4545b8fab355061217aa0a"
  },
  {
    "url": "assets/js/17.1cf3a3cb.js",
    "revision": "3fbc0f24315a1602cf89d1f536e2b845"
  },
  {
    "url": "assets/js/170.91674d7c.js",
    "revision": "5d09d7759de8c47d6b51bce5490f7487"
  },
  {
    "url": "assets/js/171.9d2f0dd0.js",
    "revision": "cbb0da0fdc6210a1ad9064120dc68896"
  },
  {
    "url": "assets/js/172.2b2148f4.js",
    "revision": "7cc95de34f343616bf4c6b4aa1d996d6"
  },
  {
    "url": "assets/js/173.c1044866.js",
    "revision": "13907a22c66fb606f046838dbd2a3f76"
  },
  {
    "url": "assets/js/174.faec845a.js",
    "revision": "01d1cd204ee6049033379fd41e0b803e"
  },
  {
    "url": "assets/js/175.86d5c497.js",
    "revision": "b64a32420d5123c14c76ff2ea67784d6"
  },
  {
    "url": "assets/js/176.a4ead4aa.js",
    "revision": "c2b56cbc6fa53e03b87c8fa032b1dd4f"
  },
  {
    "url": "assets/js/177.59057072.js",
    "revision": "e10e45e02c8a4094ec3c0bd99ce8e6e3"
  },
  {
    "url": "assets/js/178.8ed42d6e.js",
    "revision": "abd01921950330a6c6acef77d5e6b3dc"
  },
  {
    "url": "assets/js/179.bbb57fc2.js",
    "revision": "40f29c1c02daec1baf7bb9e237dd2efc"
  },
  {
    "url": "assets/js/18.0ef7a745.js",
    "revision": "a1fc0c59af936b1dffada5aa7b5035ca"
  },
  {
    "url": "assets/js/180.b6107cbc.js",
    "revision": "fc49073690022f8559a165858cf76840"
  },
  {
    "url": "assets/js/181.49db0295.js",
    "revision": "66b61b0eaae7e5a45edf5fa03cbeac2e"
  },
  {
    "url": "assets/js/182.6abd9bcf.js",
    "revision": "c5db2c6c862d2c2a8b450478a8539368"
  },
  {
    "url": "assets/js/183.e4788304.js",
    "revision": "ca043ea48bc8ccda1e91400c3cc26b52"
  },
  {
    "url": "assets/js/184.1f320d05.js",
    "revision": "ebe58fdd9e507482004cd0eace9023e1"
  },
  {
    "url": "assets/js/185.f75929f7.js",
    "revision": "bf9f841a225e0ba0b7c561a10334a389"
  },
  {
    "url": "assets/js/186.f135367e.js",
    "revision": "901688bd7a7200a87c37b06a2794dd93"
  },
  {
    "url": "assets/js/187.1a05d740.js",
    "revision": "2d8f68643ca4e995316276160bc2c3ee"
  },
  {
    "url": "assets/js/188.a5c97a46.js",
    "revision": "506e95d1e64e583dc2ba77fbcc84b27b"
  },
  {
    "url": "assets/js/189.6be11fba.js",
    "revision": "108683d983ef9206a776c1b39fe6b4d7"
  },
  {
    "url": "assets/js/19.a92d79d1.js",
    "revision": "b02541d19e9c915ed2f7e5f2e18e5d8f"
  },
  {
    "url": "assets/js/190.830722ba.js",
    "revision": "9ff3f4e5100ba6d0cf7dce961784fdde"
  },
  {
    "url": "assets/js/191.a105692d.js",
    "revision": "88b9ac3ded8f02b3bb95e8df1997a887"
  },
  {
    "url": "assets/js/192.454ff077.js",
    "revision": "f831ec5cf41600453447e43d26d29f2b"
  },
  {
    "url": "assets/js/193.1ed0083c.js",
    "revision": "609ef198c8d8ee656175156abdf34fe9"
  },
  {
    "url": "assets/js/194.305bd2ec.js",
    "revision": "ca43d28e7ab469f0e9cf9b9cceb77eeb"
  },
  {
    "url": "assets/js/195.1d48dca0.js",
    "revision": "cf98c9983e9d2fd17d0f2003dfabd924"
  },
  {
    "url": "assets/js/196.e5e4d97b.js",
    "revision": "bfa3405cf98fc3483559e81f513c98ad"
  },
  {
    "url": "assets/js/197.9c370dd3.js",
    "revision": "5d25c1ed376a9aa1808768b46833cca4"
  },
  {
    "url": "assets/js/198.209e85b3.js",
    "revision": "43ab738902dbeb1e2b2c8c8b66008b1e"
  },
  {
    "url": "assets/js/199.c9fed77b.js",
    "revision": "e0dc0460d22fd5701dc1fe9dbf78e2b5"
  },
  {
    "url": "assets/js/2.160a5515.js",
    "revision": "bfdc1c32004faae0011d012c7ee81bc7"
  },
  {
    "url": "assets/js/20.74249d5e.js",
    "revision": "151c9b55c3da979dabc0de4decf44a56"
  },
  {
    "url": "assets/js/200.dd8edcd5.js",
    "revision": "1bc35797b7fa6e4153f8ecdd13065043"
  },
  {
    "url": "assets/js/201.f12e9aa9.js",
    "revision": "c53d07c5aa668c4905bd52831b109f35"
  },
  {
    "url": "assets/js/202.1bcf6a9f.js",
    "revision": "4b0a44c3f509a3a752d28332777aad1d"
  },
  {
    "url": "assets/js/203.efbb3dbd.js",
    "revision": "23f031127c96dc7ba7f249dee0f952a6"
  },
  {
    "url": "assets/js/204.d1a69388.js",
    "revision": "0686984e9e1ce475e071b9fdffec7cd3"
  },
  {
    "url": "assets/js/205.d1bec71f.js",
    "revision": "d5e9f30acd011a09acb145be222988bc"
  },
  {
    "url": "assets/js/206.9e15b646.js",
    "revision": "11ccf4ea2ef8aab68fafa05c3b0e4dfc"
  },
  {
    "url": "assets/js/207.c054d215.js",
    "revision": "cb9b612e0d047ee1d4283073b6aa1e20"
  },
  {
    "url": "assets/js/208.f723c018.js",
    "revision": "9353687187e0be65724f46d9db62f9f3"
  },
  {
    "url": "assets/js/209.5c9c2ec5.js",
    "revision": "150e434fe3acaa7ab4f03b8fe6451ada"
  },
  {
    "url": "assets/js/21.4f90d214.js",
    "revision": "535fc5e41912724c5bdae16581239731"
  },
  {
    "url": "assets/js/210.03e7504d.js",
    "revision": "2e5d00ff798342d4843279a8f8edb1b3"
  },
  {
    "url": "assets/js/211.b5c9ea82.js",
    "revision": "502604b1e571c5ee89ef5f3c868735a2"
  },
  {
    "url": "assets/js/212.b0140660.js",
    "revision": "095fecf5a99f614ebbb0279c175bc6ea"
  },
  {
    "url": "assets/js/213.c1a41a82.js",
    "revision": "eb64c7d849d762a635a85ae0bbea259b"
  },
  {
    "url": "assets/js/214.8573e05d.js",
    "revision": "76d125d339e29bbe4591196dd79e41b2"
  },
  {
    "url": "assets/js/215.df14257c.js",
    "revision": "1c08f2351689efc5df3ba1e842d00ed6"
  },
  {
    "url": "assets/js/216.058ace4a.js",
    "revision": "88313b686074d1312fc79e84ab06aa5c"
  },
  {
    "url": "assets/js/217.b0d2a68d.js",
    "revision": "dc9b2f0401bdedf6e17746a1abf7c40c"
  },
  {
    "url": "assets/js/218.bdea76e8.js",
    "revision": "10ebccd61e2a123c96aecfe7c5c01f29"
  },
  {
    "url": "assets/js/219.d0abd52f.js",
    "revision": "e2ea1a36a67b49023da27578e6418e08"
  },
  {
    "url": "assets/js/22.9837c612.js",
    "revision": "9bd1a21218d1b3502b96aa301c5235dd"
  },
  {
    "url": "assets/js/220.f39243a3.js",
    "revision": "7da1e2072c194478f5aad1df06dc60e1"
  },
  {
    "url": "assets/js/221.18f1d710.js",
    "revision": "8e8b82745a178da6a4f3bb4ca3fdaaed"
  },
  {
    "url": "assets/js/222.bcf3273a.js",
    "revision": "96dc0d9b94cad9ecdd4dc732a41c7e31"
  },
  {
    "url": "assets/js/223.25e468f4.js",
    "revision": "0db8d89f6be5c2592a1d02600b67ecc4"
  },
  {
    "url": "assets/js/224.4c23bdb7.js",
    "revision": "4141ca4a67f0cff7d9357f79eeaafbd9"
  },
  {
    "url": "assets/js/225.97d651e7.js",
    "revision": "38dcc3499744ef04ef060e79756cf4eb"
  },
  {
    "url": "assets/js/226.34035042.js",
    "revision": "d7fa1d5e79e0d2f5443ef1d7d377a5eb"
  },
  {
    "url": "assets/js/227.163353a5.js",
    "revision": "452eae67098e8eea1a6b37ea79cf7aa1"
  },
  {
    "url": "assets/js/228.18e4ebf7.js",
    "revision": "527f99deda1738d3e0c16890caf1ffe7"
  },
  {
    "url": "assets/js/229.f8557d2c.js",
    "revision": "e9c4e745dc81ebc74dd26af9d4e0e7ce"
  },
  {
    "url": "assets/js/23.727778da.js",
    "revision": "3650cf5e14aef913f2d19ae89efbff60"
  },
  {
    "url": "assets/js/230.2af96f40.js",
    "revision": "7ae6b293e29ae45ebfcf508dc7595d69"
  },
  {
    "url": "assets/js/231.503a94f0.js",
    "revision": "c32939940687b307ab4201612101a986"
  },
  {
    "url": "assets/js/24.1fdc8be0.js",
    "revision": "fe26d989813cfce813b68685d76c1b46"
  },
  {
    "url": "assets/js/25.d1d0a054.js",
    "revision": "42424e8c147a4c0af7096f11836313a3"
  },
  {
    "url": "assets/js/26.4ffc2686.js",
    "revision": "8258fd4cc769c7ea1d54cb7b528daa6a"
  },
  {
    "url": "assets/js/27.b6510c6c.js",
    "revision": "ce36c377a51a95cccca0052bc010bf01"
  },
  {
    "url": "assets/js/28.58eb5d67.js",
    "revision": "065401eeb59db69e5a913f7490235742"
  },
  {
    "url": "assets/js/29.d445dfe1.js",
    "revision": "cd680c7b73f515d40de7b817f27efeb2"
  },
  {
    "url": "assets/js/3.a1d8348d.js",
    "revision": "5bff0dc51ad3362a0d3b8aac75b35422"
  },
  {
    "url": "assets/js/30.bb32b53b.js",
    "revision": "e478bbfd55064e6e5b7dbeb0550c6561"
  },
  {
    "url": "assets/js/31.dc268715.js",
    "revision": "e76660a1ae4ba4f26f1f71bee86126df"
  },
  {
    "url": "assets/js/32.53f3bfdf.js",
    "revision": "0f450f9e65cc513797929ee48ad9c8c3"
  },
  {
    "url": "assets/js/33.89cb7ed6.js",
    "revision": "5887efb0fb902849beeabcf1fc223081"
  },
  {
    "url": "assets/js/34.a56b4c52.js",
    "revision": "b763f60ca6a45c76b3b358f766d707fa"
  },
  {
    "url": "assets/js/35.d4b2baaf.js",
    "revision": "1a63e53653ad2288654cf49ebd654842"
  },
  {
    "url": "assets/js/36.3d086468.js",
    "revision": "817a578451ecd4c67e378e5af321e49f"
  },
  {
    "url": "assets/js/37.3750ec14.js",
    "revision": "367fd1dd89a5e51a966e8953dfc6bcc0"
  },
  {
    "url": "assets/js/38.51c3f794.js",
    "revision": "1cb475f9743d4879b70b75b240e1cfc6"
  },
  {
    "url": "assets/js/39.883203a4.js",
    "revision": "b6996216a9d32a15a3a38f1b1060dcf4"
  },
  {
    "url": "assets/js/4.7c87904d.js",
    "revision": "70ecf36813f88668c977ef6a4d2abfcf"
  },
  {
    "url": "assets/js/40.8638e9fa.js",
    "revision": "3b5a9057937eb3129d4293ff3cacb1a4"
  },
  {
    "url": "assets/js/41.0a620d91.js",
    "revision": "79076a00ceac27f8c6cbaca31fcb8fb2"
  },
  {
    "url": "assets/js/42.ccb11b10.js",
    "revision": "c5c3073fb9af15402a6b5f1b0fb2d715"
  },
  {
    "url": "assets/js/43.a100a366.js",
    "revision": "cd434e6a691bf78caaa3b1e35319e294"
  },
  {
    "url": "assets/js/44.db7ae303.js",
    "revision": "968f9070f7dc01178d29796085ef1f98"
  },
  {
    "url": "assets/js/45.3a2585b7.js",
    "revision": "517735bad01b9ff3a761972d7224d465"
  },
  {
    "url": "assets/js/46.527cb609.js",
    "revision": "d35f8cf7a35f9c60815da6748e75e3d0"
  },
  {
    "url": "assets/js/47.b4caa09c.js",
    "revision": "7525c963f0d3743933b39a84f54aeb27"
  },
  {
    "url": "assets/js/48.067cb370.js",
    "revision": "3d3540d6ac28260fe3d1cccb0dffa62f"
  },
  {
    "url": "assets/js/49.e49d96c8.js",
    "revision": "e127ebdda444dcfbd73da081a6335bba"
  },
  {
    "url": "assets/js/5.a2c07664.js",
    "revision": "40e085c569cfdaa1b8754d4997f2d7bc"
  },
  {
    "url": "assets/js/50.346b527b.js",
    "revision": "77667b8f063008077121fdaab5e4ea7c"
  },
  {
    "url": "assets/js/51.89e1d039.js",
    "revision": "3b36cfb178e964d4c08d58d98b2f696a"
  },
  {
    "url": "assets/js/52.c05ddea0.js",
    "revision": "31dbea5af44fd8b7de0b45dc16406298"
  },
  {
    "url": "assets/js/53.fc6469ef.js",
    "revision": "48bb29dc9a5096da40be681915d86ebc"
  },
  {
    "url": "assets/js/54.a5e92bac.js",
    "revision": "55159d6d8190b7f9e9539e15f834f8df"
  },
  {
    "url": "assets/js/55.187f31d9.js",
    "revision": "5e31e08402cffa090a8aef042e4491f3"
  },
  {
    "url": "assets/js/56.eca62820.js",
    "revision": "9a90f3399a5778ac15918728df38eed0"
  },
  {
    "url": "assets/js/57.78256669.js",
    "revision": "9d7123c90ebf341aa89cd649c24c04d6"
  },
  {
    "url": "assets/js/58.7a64317f.js",
    "revision": "7aa162d1cce7e357c4a3b00a82b89fdd"
  },
  {
    "url": "assets/js/59.1bd28acf.js",
    "revision": "209341dd0bd15803c3dae40c687af0ee"
  },
  {
    "url": "assets/js/6.a4efe957.js",
    "revision": "61618e611f0da0725fad87c7c40d479e"
  },
  {
    "url": "assets/js/60.da7a5269.js",
    "revision": "52f987cabd2579e4be7bf935d240e600"
  },
  {
    "url": "assets/js/61.488c07f1.js",
    "revision": "5ee3aceb201ac9c974c7d2d1fbe0df0d"
  },
  {
    "url": "assets/js/62.321171fe.js",
    "revision": "7cd440f4b1ec40cd584e78414ae9bc2d"
  },
  {
    "url": "assets/js/63.27ba6c24.js",
    "revision": "530096b7774686d0099bff81e66c23f8"
  },
  {
    "url": "assets/js/64.c220e09b.js",
    "revision": "103bf018faaeef9cd683d244f3fe7a6e"
  },
  {
    "url": "assets/js/65.4d05143d.js",
    "revision": "a8fdf6019bf6cddb70f9d743bafa8b35"
  },
  {
    "url": "assets/js/66.941a9054.js",
    "revision": "1e84cf723d622952c2a37097cb56b408"
  },
  {
    "url": "assets/js/67.f7ae470c.js",
    "revision": "1bdcb64b1523eaf3421ef1cbc92f615a"
  },
  {
    "url": "assets/js/68.b7fcbbe4.js",
    "revision": "fd3b4390166dae77fd149fc7af45b694"
  },
  {
    "url": "assets/js/69.4ad1b58a.js",
    "revision": "0200b30063117976010e7f785e310fea"
  },
  {
    "url": "assets/js/7.b1bbfc70.js",
    "revision": "7276859d9b72cc1822b4e399b869a9fa"
  },
  {
    "url": "assets/js/70.a9f56ad5.js",
    "revision": "4d3ee44310b840ca060d40fc0b8eb4b2"
  },
  {
    "url": "assets/js/71.b0d1f817.js",
    "revision": "60283382e669990978e41d86422bfe17"
  },
  {
    "url": "assets/js/72.fb4f08c1.js",
    "revision": "aa5553086ad5bf1e0f6d5a8633525501"
  },
  {
    "url": "assets/js/73.00802a6c.js",
    "revision": "91bfcfb2b8cee107bc6e87930657bc01"
  },
  {
    "url": "assets/js/74.bbdb328c.js",
    "revision": "99bf61c4ae151a5bcbaaaf94c8aee9fa"
  },
  {
    "url": "assets/js/75.09bcc2ff.js",
    "revision": "f294188130dc6cf5ac8fa802508bf230"
  },
  {
    "url": "assets/js/76.35c14dd6.js",
    "revision": "3a144f0ba0c172bd9f4d0a1351be9265"
  },
  {
    "url": "assets/js/77.b4da41be.js",
    "revision": "189d2dd0e4fc2e9de75fe6723a110727"
  },
  {
    "url": "assets/js/78.5c532d45.js",
    "revision": "a02eeabf7335f0afeb36f61589b90e78"
  },
  {
    "url": "assets/js/79.9a64f845.js",
    "revision": "06ae4b802392f8e3ad17e37b9a61bff6"
  },
  {
    "url": "assets/js/8.2d99bdf6.js",
    "revision": "2155c72819ebb3648347597e040165dc"
  },
  {
    "url": "assets/js/80.1d3f9ae8.js",
    "revision": "df267b9baf31d93b5e4a3b57ab88c2ff"
  },
  {
    "url": "assets/js/81.f1d27f17.js",
    "revision": "617c52746db790e780c1b71c24159a35"
  },
  {
    "url": "assets/js/82.cf4c2acf.js",
    "revision": "3fdd2199a1baa1eb31175a0a8bf36c34"
  },
  {
    "url": "assets/js/83.54a0e7b0.js",
    "revision": "746a2eca192d1e515a9c1aef3ed68f8a"
  },
  {
    "url": "assets/js/84.94a77e95.js",
    "revision": "68a4c8c53f0302671a180249d856dd7d"
  },
  {
    "url": "assets/js/85.d0bab63e.js",
    "revision": "96999e15eeabc60b155db9f14563e4fe"
  },
  {
    "url": "assets/js/86.a287e16f.js",
    "revision": "410555138738e65d2d92add06421a658"
  },
  {
    "url": "assets/js/87.12d3c33f.js",
    "revision": "121ac8ac37be47f830aeec8a04eba1ad"
  },
  {
    "url": "assets/js/88.cca024a5.js",
    "revision": "a7fbbebb2bce2549492234920b3fd66e"
  },
  {
    "url": "assets/js/89.27f7901e.js",
    "revision": "a46c793a1d8bdbf6345b772eae49e492"
  },
  {
    "url": "assets/js/9.e6af7217.js",
    "revision": "4aa0ca8137def3c4963163056b149f2a"
  },
  {
    "url": "assets/js/90.40d5d843.js",
    "revision": "17110439245e8313eb9bed316ee8b67e"
  },
  {
    "url": "assets/js/91.a3a550d1.js",
    "revision": "c310c440fc307eb0638fab48075579d3"
  },
  {
    "url": "assets/js/92.bf83a6ed.js",
    "revision": "0bc0327c33331f329365aadde7f632a0"
  },
  {
    "url": "assets/js/93.690fcd6f.js",
    "revision": "88594d8ecaff00817abcc0bd3ca467eb"
  },
  {
    "url": "assets/js/94.584797d5.js",
    "revision": "3270f2bcd89701b8125e57cf3ef5016f"
  },
  {
    "url": "assets/js/95.2ba11a58.js",
    "revision": "0cb27b5376097a76a4a0aecbe7ceae3d"
  },
  {
    "url": "assets/js/96.acfba675.js",
    "revision": "ee612a6a36c7a6fd08c6bbc810189eb6"
  },
  {
    "url": "assets/js/97.82474a6b.js",
    "revision": "cd561e794ce1d79b3e2d23537f8fa7d0"
  },
  {
    "url": "assets/js/98.1250d422.js",
    "revision": "f7e291b0e64293dbd81592180acdf451"
  },
  {
    "url": "assets/js/99.3affe567.js",
    "revision": "888953c1d5ba82fb88c3f5e6bf6123f3"
  },
  {
    "url": "assets/js/app.a85e6549.js",
    "revision": "aeec8fa6180de3dcb90b8583759f51fd"
  },
  {
    "url": "assets/logo-152.png",
    "revision": "014e3b2df2952c8f2c5446de338b041a"
  },
  {
    "url": "assets/mstile-150x150.png",
    "revision": "eba189ed8b14eb752eae34651b5043d0"
  },
  {
    "url": "assets/safari-pinned-tab.svg",
    "revision": "1e1073c1be951842d5f6758d03d6eaaf"
  },
  {
    "url": "download/container-elements.html",
    "revision": "1a930945ac6fa83a2aa693825de09e6d"
  },
  {
    "url": "download/form-elements.html",
    "revision": "b6f85a114ff24ce0065b7f0f3bfef58c"
  },
  {
    "url": "download/grouping-elements.html",
    "revision": "61c839bd1b57f2098851288ae949445c"
  },
  {
    "url": "download/html-basic-syntax.html",
    "revision": "a54451e42ca9ed171103a5b54377b66c"
  },
  {
    "url": "download/html-validator.html",
    "revision": "dd3e724e3a2084389d175790abcf230f"
  },
  {
    "url": "download/indentation-doctype.html",
    "revision": "f1c6d3ea13216ebb17f83348bf7a1604"
  },
  {
    "url": "download/interactive-elements.html",
    "revision": "2c9429749d09855586e4de125ae381c5"
  },
  {
    "url": "download/lists-list-items.html",
    "revision": "376625e5cad6ec46e7b4a91edd5bddba"
  },
  {
    "url": "download/metadata.html",
    "revision": "c2e741eb0ca94b03d6fa7d8a3d23e5ec"
  },
  {
    "url": "download/sbs-drama__do-you-want-to-kiss-first.png",
    "revision": "671b25beb4139e70a2c96ae1c303334f"
  },
  {
    "url": "download/sections+main-elements.html",
    "revision": "87b89ebec6a078970cc427a2e2707b20"
  },
  {
    "url": "download/sign-up-form.html",
    "revision": "fdcddbf93929199f40cfbc25854a532d"
  },
  {
    "url": "download/tabular.html",
    "revision": "e03d25c029568e9bc1728f409a5b4b84"
  },
  {
    "url": "images/8percent.jpg",
    "revision": "c7fbf3ca0562da25c74ecadb054f23ff"
  },
  {
    "url": "images/absolute-link-syntax.png",
    "revision": "872de1e246f089b8af880d81217c8267"
  },
  {
    "url": "images/absolute-links.png",
    "revision": "33bce6f409e6482232eb8f84e1ac5b00"
  },
  {
    "url": "images/absolute-relative-root-relative-links.png",
    "revision": "1045605e566051fd92c0ebd2b3241bcd"
  },
  {
    "url": "images/atomic.png",
    "revision": "175601d2bdf302977bcd1fded1f458ee"
  },
  {
    "url": "images/bank-table.jpg",
    "revision": "54c760186d1a377c170dbf9f848b061a"
  },
  {
    "url": "images/becoming-a-web-developer.png",
    "revision": "0530f17d6c175323a3dc8c9cb136cec6"
  },
  {
    "url": "images/blended-learning.jpg",
    "revision": "c8913c3fb5d2bdc03aa94680fedad6a7"
  },
  {
    "url": "images/common-question.jpg",
    "revision": "3dbfb3de5cc8f2bf93adb11a746a9548"
  },
  {
    "url": "images/corporation-info.jpg",
    "revision": "b3a69159eaee9562f17a08165ffd50e0"
  },
  {
    "url": "images/css-vs-html.png",
    "revision": "e1da324ddc8480e0dc0661f14decefcc"
  },
  {
    "url": "images/ecma.png",
    "revision": "e4d98a8cd641c4182b8d709ff7ea2bc3"
  },
  {
    "url": "images/emphazise.jpg",
    "revision": "d918b685886727ce1f2eb849efcb1134"
  },
  {
    "url": "images/es.png",
    "revision": "fc96fab76f4b0ef3b52776ed87d06f79"
  },
  {
    "url": "images/favicon.png",
    "revision": "74b4a690e4083c2f79cf443ec1f31747"
  },
  {
    "url": "images/FibonacciBlocks.png",
    "revision": "16474544ae7b542108f5499dfc38ebec"
  },
  {
    "url": "images/figmatokens.png",
    "revision": "07d557201aeab531fd2a27f20fb6e91b"
  },
  {
    "url": "images/fixed-width-vs-fluid-layouts.png",
    "revision": "258df9a09a9003047d222e9549185b2d"
  },
  {
    "url": "images/fluid-media-example.png",
    "revision": "ff91135bec7fe1435454a9c5cd8c22fc"
  },
  {
    "url": "images/github-collaboration.jpeg",
    "revision": "cb93cef0ee491348620ab66843d42231"
  },
  {
    "url": "images/GitHub-GitLab.png",
    "revision": "1d2c668999ded4d5badc2a9bf33f28e0"
  },
  {
    "url": "images/github-project-board.gif",
    "revision": "5ca1332715b1116d2334e11d0f4bb2e8"
  },
  {
    "url": "images/hands-man.gif",
    "revision": "428c68fe4575f900ecaad4a75cb9da23"
  },
  {
    "url": "images/henry-english.png",
    "revision": "2354d70d9b1d855ef9a98be8eb137a7c"
  },
  {
    "url": "images/hero.png",
    "revision": "35cee392ceb18a4ddf8307c38780f5d7"
  },
  {
    "url": "images/hoist.gif",
    "revision": "4c7ca945bde64f8854cd39f04314b50a"
  },
  {
    "url": "images/html-attributes.png",
    "revision": "aec18d124736b2a6eba4c157ba31e007"
  },
  {
    "url": "images/html-css-javascript.png",
    "revision": "90534860804825f898cf36041daf4afd"
  },
  {
    "url": "images/html-head-body.png",
    "revision": "7c2a734fbb1f61d8b252b846d3fc7e70"
  },
  {
    "url": "images/html-heading-elements.png",
    "revision": "512a83fbf5e09fecc9e0dd91a53434af"
  },
  {
    "url": "images/html-link-href-element.png",
    "revision": "a5c88b1a8661675713dc84ddff255462"
  },
  {
    "url": "images/html-markup.png",
    "revision": "0761f78db3de32f769dc8ebb23eb833d"
  },
  {
    "url": "images/html-ordered-lists.png",
    "revision": "8d51c5039954d96489bde1b91a007378"
  },
  {
    "url": "images/html-paragraph-element.png",
    "revision": "2209857fec240e5313aec6fce9410a7a"
  },
  {
    "url": "images/html-tags-elements.png",
    "revision": "72813bb7cb906109b6fff58a35cf2fc9"
  },
  {
    "url": "images/html-title-element.png",
    "revision": "f95896e22146131b89fdf6b4b36ec253"
  },
  {
    "url": "images/html-unordered-lists.png",
    "revision": "24e02c5df4fcc8a16ff0a5f008872ccf"
  },
  {
    "url": "images/image-formats.png",
    "revision": "7a9a700f46bcc33cd9f82464828910c1"
  },
  {
    "url": "images/inspect1.png",
    "revision": "3028963cfdf3ad6d21452d3aebaa0066"
  },
  {
    "url": "images/inspect2.gif",
    "revision": "2c24dd0d0df6b78004de30cda71b3bff"
  },
  {
    "url": "images/JS_prototype.png",
    "revision": "f26a0ac623c3acb129952cefc3664ef0"
  },
  {
    "url": "images/js-es-tc39.png",
    "revision": "e23a26c0e0ba4f5f879a0803e4b348b5"
  },
  {
    "url": "images/js-es5-scope.png",
    "revision": "a5a665784e067cdf0f1846edb97eedd0"
  },
  {
    "url": "images/js-puzzle.jpg",
    "revision": "2bfb5fa1041c86814bc5605fdc6e0f34"
  },
  {
    "url": "images/js.png",
    "revision": "e066aff016fa2d5140f3d4dc276b22b0"
  },
  {
    "url": "images/kakao-process.jpg",
    "revision": "c1a9205c0bbffc15d0dda65fd639cf33"
  },
  {
    "url": "images/languages-vs-web-dev.png",
    "revision": "b849db1d53cee1b0bb1c9a8b3074c2dc"
  },
  {
    "url": "images/link-element.png",
    "revision": "5dd259cf167a56b82e91553408154a3f"
  },
  {
    "url": "images/links-and-images.png",
    "revision": "7ab054ff33e4ea7c6e7029ab52b01eac"
  },
  {
    "url": "images/loading.gif",
    "revision": "3cd5cc44d17fdf4828017fa90335d432"
  },
  {
    "url": "images/login-user.png",
    "revision": "edacc301a0b1c2def320bc3353bba432"
  },
  {
    "url": "images/mission-1-1-01.jpg",
    "revision": "2eeb954224133f9ec5a7cd569bd9ad3e"
  },
  {
    "url": "images/mission-1-1-02.jpg",
    "revision": "7102e946644eed69975be2a87afd98f3"
  },
  {
    "url": "images/mobile-first-design.png",
    "revision": "be30e42a8fdffbf0889a529fd4fd6172"
  },
  {
    "url": "images/mochi01.jpg",
    "revision": "4947a798d7a9840b8c0200222e925c80"
  },
  {
    "url": "images/mochi02.png",
    "revision": "6fb02001d4e359508481f6abfadc4006"
  },
  {
    "url": "images/mochi03.gif",
    "revision": "961ee547870fd26d5b7aa7083dc1d978"
  },
  {
    "url": "images/nth-master.jpg",
    "revision": "52fed411af48ca72be7f4a964ee57ba2"
  },
  {
    "url": "images/OOP-in-JS.png",
    "revision": "334c52d3d368b9f9bd75d8924980e3fd"
  },
  {
    "url": "images/oss-bike.svg",
    "revision": "0dd606fdb5b760ad4850eeb278042d6e"
  },
  {
    "url": "images/pass-by-reference-vs-pass-by-value-animation.gif",
    "revision": "d4925482988e171e402d9cda0ebe7a43"
  },
  {
    "url": "images/pay-system.jpg",
    "revision": "d32f53b94c3606804626295d8f35d02c"
  },
  {
    "url": "images/pay.jpg",
    "revision": "1d8d622d45b098b3cb96f6a3628d1dda"
  },
  {
    "url": "images/photopea.png",
    "revision": "4980acc6cc5867122d974db2f9f48d8a"
  },
  {
    "url": "images/ps-ai-sketch.jpg",
    "revision": "19040a37f71fec8d72578852a4133f42"
  },
  {
    "url": "images/psdetch.png",
    "revision": "e93a5ace0de41a2703689b1e06428ef7"
  },
  {
    "url": "images/publish-form.jpg",
    "revision": "1b98b21f3cb73f30ec5de447db0d58dc"
  },
  {
    "url": "images/realFinal.jpg",
    "revision": "4feb1a053b2ec986ad4232abf674316e"
  },
  {
    "url": "images/register-education-page.jpg",
    "revision": "5615fc1963b7734a59316dee9ac7d59f"
  },
  {
    "url": "images/relative-link-with-parent.png",
    "revision": "1ba973e0ad8140210cd3692cc47e7138"
  },
  {
    "url": "images/relative.png",
    "revision": "71004eede83db8921003ec87902b5bbe"
  },
  {
    "url": "images/root-relative-links.png",
    "revision": "62040264f5cd06e2706ca044a333f594"
  },
  {
    "url": "images/scope-chaining.png",
    "revision": "ea1892d89b880b8baeeab77ed073bb54"
  },
  {
    "url": "images/sonic-boom.gif",
    "revision": "55f3053fc7a5dc10c982b7380e8b093a"
  },
  {
    "url": "images/sonic-ring.gif",
    "revision": "648e17c1861087768af3e3d904f05685"
  },
  {
    "url": "images/sonic-run.gif",
    "revision": "9afe63c35f30778a3d4701e2d439d3d6"
  },
  {
    "url": "images/sonic-spin-up.gif",
    "revision": "7f39ce5291d5f9d6851b75e19f0c35a1"
  },
  {
    "url": "images/sonic-stop.gif",
    "revision": "e483455e0dd0c334f87c8c422ffa5528"
  },
  {
    "url": "images/sonic-tenor.gif",
    "revision": "ad20eb4fd0ef042e1aaae7d9501614bf"
  },
  {
    "url": "images/sonic-wait.gif",
    "revision": "873575a2c65877cd9680dddc0cc1f447"
  },
  {
    "url": "images/sonic-wait2.gif",
    "revision": "e409ef60fde68cbbcc008b4b44b1dbcc"
  },
  {
    "url": "images/sonic-wiggle.gif",
    "revision": "c309a9274137b25c953ee0887cef2fa2"
  },
  {
    "url": "images/south-korea-code.png",
    "revision": "a96c11960c4ad399e92b35840331d186"
  },
  {
    "url": "images/svg-vs-png-image.png",
    "revision": "57e9a98c466271fc7bbe1edafd662d51"
  },
  {
    "url": "images/Tables with multi-level headers â¢ Tables â¢ WAI Web Accessibility Tutorials.png",
    "revision": "5397322ef088c9d37bb35b337697cf76"
  },
  {
    "url": "images/tc39.png",
    "revision": "31fd5da82d678a561471d2e073208ab3"
  },
  {
    "url": "images/tools-of-the-trade.png",
    "revision": "649a9a0d36103c484f8e8e2c50a72315"
  },
  {
    "url": "images/typescript.png",
    "revision": "ffe4139e8c7bd54a19278a4b144a1cd9"
  },
  {
    "url": "images/typography.jpg",
    "revision": "5071aa1fb04fb3882a997961d9efd443"
  },
  {
    "url": "images/unold_icon_animation_loop.gif",
    "revision": "1b1e37721cf248b07ae7ed07966df60b"
  },
  {
    "url": "images/user-login.jpg",
    "revision": "33136450d57529dfda039ec531fb70e0"
  },
  {
    "url": "images/user-page-free.jpg",
    "revision": "f224bfa4c05ae438fe3d8bfc281107b0"
  },
  {
    "url": "images/user-page.jpg",
    "revision": "946cfffc72aaadee6190e815c8b0a006"
  },
  {
    "url": "images/web-dev-workflow.png",
    "revision": "78dd3f7bf6ae3369663462bd43276f9e"
  },
  {
    "url": "images/web-publishing.png",
    "revision": "d6ec083de9a20e31b5dae3c482959914"
  },
  {
    "url": "images/yanolja.jpg",
    "revision": "b03e5caa874d364e2db7b76ffeff7d08"
  },
  {
    "url": "images/yoga.gif",
    "revision": "ac2320749ea34fcd0cc6a197d19deb82"
  },
  {
    "url": "index.html",
    "revision": "4fd3bd37c722c819d20bc0d0ac454f21"
  },
  {
    "url": "lecture/api-pay-rest-1.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/api-pay-rest-2.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/api-pay-rest-3.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/api-pay-rest-4.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-basic-syntax.html",
    "revision": "1d305186048eb800212ce32c129c5e02"
  },
  {
    "url": "lecture/css-cascade-rules.html",
    "revision": "739750c631d3ddaaacabc9a013926ccd"
  },
  {
    "url": "lecture/css-inheritance.html",
    "revision": "406bde181175a8109b4ff07be2cee4d1"
  },
  {
    "url": "lecture/css-pay-2d-transform-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-3d-transform-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-animation-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-background.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-border-image.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-box-model.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-flexbox-layout.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-form-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-gradients-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-grid-layout.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-layout-floating.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-layout-positining.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-list-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-multi-column.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-table-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-transition-styling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-pay-typography.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/css-selector.html",
    "revision": "2830910a239f47cc9454b108a0a36da4"
  },
  {
    "url": "lecture/css-standards.html",
    "revision": "b68e592b8864bd4a271dc9e692f08316"
  },
  {
    "url": "lecture/ds-intro.html",
    "revision": "92a3c95dcf75787bad7f402add78ab87"
  },
  {
    "url": "lecture/ds-pay-about.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-accordion.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-apply.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-color-foundation.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-download.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-figma-tokens.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-footer.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-grid.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-hand-off.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-header.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-inspection.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-pages.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-spacing.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-typography.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-version-history.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-pay-viual-banner.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/ds-what-is-design-system.html",
    "revision": "469f0f34913054f896c552468cbf17d4"
  },
  {
    "url": "lecture/es6-iife2block.html",
    "revision": "e0cbc5dfae66f73a6839b59e90e042bb"
  },
  {
    "url": "lecture/es6-intro.html",
    "revision": "30264762b11c8b8668f96994329fd1d5"
  },
  {
    "url": "lecture/es6-let-const.html",
    "revision": "7996cd92d7ec3d8623d49b7ba198a2b6"
  },
  {
    "url": "lecture/es6-pay-array-additions.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-array-useful.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-arrow-function.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-asyncawait.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-babel.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-class.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-default-parameter.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-destructuring-assignment.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-eslint.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-for-of.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-generator.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-iteration.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-map.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-module.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-object-enhancements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-object-iteration.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-promise.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-rest-parameter.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-set.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-shorthand-properties.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-spread-operator.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-string-additions.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-symbol.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-weakmap.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-weakset.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-pay-webpack.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/es6-template-literal.html",
    "revision": "8b101f162b66c701953c4458973db2fc"
  },
  {
    "url": "lecture/gsap-download-gsap.html",
    "revision": "357a62de3ca7c65e60b0add49dca6b76"
  },
  {
    "url": "lecture/gsap-getting-started.html",
    "revision": "63bb213c7aa3c53e0cd17643649e8df5"
  },
  {
    "url": "lecture/gsap-tweenlite-to.html",
    "revision": "1542db983c9bebe41456f5eb74d1f1cd"
  },
  {
    "url": "lecture/html-anchor-link.html",
    "revision": "9cd591536f31902c330c6cc889092c88"
  },
  {
    "url": "lecture/html-basic-syntax.html",
    "revision": "8f5b4c04387334cd8f8882b6f87c1152"
  },
  {
    "url": "lecture/html-dtd-standard-document.html",
    "revision": "5af855d64efa7034f3d7c12c6f8fae11"
  },
  {
    "url": "lecture/html-headings-paragraph.html",
    "revision": "639f3705304303df6db83f93aa828434"
  },
  {
    "url": "lecture/html-image-figure-caption.html",
    "revision": "ba50c58574982a20a352c940ac7fd3ae"
  },
  {
    "url": "lecture/html-index.html",
    "revision": "543d20128591898ef2f77f302ea432f1"
  },
  {
    "url": "lecture/html-lang-attribute.html",
    "revision": "d6d76929759e125ff957345a30814934"
  },
  {
    "url": "lecture/html-lists-definition.html",
    "revision": "2601727079c6bb561733c0cd2e9f6ce7"
  },
  {
    "url": "lecture/html-lists.html",
    "revision": "ed597be259701c19aae82d1286bfa879"
  },
  {
    "url": "lecture/html-pay-container-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-embeded-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-form-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-grouping-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-interactive-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-metadata.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-scripting-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-section-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-tabular-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-text-level-elements.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pay-user-interaction-attributes.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/html-pharasing.html",
    "revision": "7bc18ad3d260eed8e2dc785f7c313e58"
  },
  {
    "url": "lecture/html-quotation-line-break.html",
    "revision": "611c4956061e8603d354643e380685c7"
  },
  {
    "url": "lecture/html-semantic-markup.html",
    "revision": "51efb57d461a70ad23714e7a3437b30c"
  },
  {
    "url": "lecture/html-validation.html",
    "revision": "296b0cbc3924950ee994178959259ede"
  },
  {
    "url": "lecture/html-without-closing-tag.html",
    "revision": "2ab932608231c7bcad083cae145f8c7d"
  },
  {
    "url": "lecture/index.html",
    "revision": "be4d7ffa46c1fe8431c28292e9c867d1"
  },
  {
    "url": "lecture/js-best-book.html",
    "revision": "f51686765b2dee6e382ff866e6da341a"
  },
  {
    "url": "lecture/js-comment-debugging.html",
    "revision": "3357043c491ffce37397b62dce8c387e"
  },
  {
    "url": "lecture/js-data-types.html",
    "revision": "8d71835213493681ca9310c01282252d"
  },
  {
    "url": "lecture/js-declare-assignment.html",
    "revision": "974b2c445b2016c9868a1f638b70f078"
  },
  {
    "url": "lecture/js-dynamic-type.html",
    "revision": "20bd6b9ba2d5dbed8135e154015249f5"
  },
  {
    "url": "lecture/js-intro.html",
    "revision": "3cab329487cdae98e4d41c6196e29ba8"
  },
  {
    "url": "lecture/js-naming.html",
    "revision": "e2c814641a158f48b893c52e40a63b18"
  },
  {
    "url": "lecture/js-pay-ajax-1.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-ajax-2.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-ajax-3.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-ajax-4.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-ajax-5.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-array-loop.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-array-object.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-closure.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-condition-operator.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-condition-processing.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-condition-switch.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-constructor-prototype.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-dom-part-1.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-dom-part-2.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-dom-part-3.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-dom-part-4.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-dom-part-5.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-event-handling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-function-object.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-function.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-functional-vs-oop.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-get-access-dom.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-hoist-chaining.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-iife.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-key-event-handling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-mouse-event-handling.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-number-math.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-object-inherit.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming-term.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-pass-by-value-reference.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-scope-function-block.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-section-3-expression.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-string.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-pay-when-to-run.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/js-problem-same-name.html",
    "revision": "1466dd8254586d42b8d459522fc4fb5c"
  },
  {
    "url": "lecture/js-start-interaction.html",
    "revision": "8e23e2049148920e061013ad84d1a98b"
  },
  {
    "url": "lecture/js-warming-up.html",
    "revision": "506ec7fe92c6768ce98bb5442f973615"
  },
  {
    "url": "lecture/mission-css-01.html",
    "revision": "171f6e27ac7ef85728426ce5073e43f9"
  },
  {
    "url": "lecture/mission-css-02.html",
    "revision": "edf048cfb2eb38aae9197e62502ab8d7"
  },
  {
    "url": "lecture/mission-html-01.html",
    "revision": "25a51e10db65c8a78f18984fa402984e"
  },
  {
    "url": "lecture/mission-html-02.html",
    "revision": "372e9d1c9c791b25ebc1a8d7e9dea4f0"
  },
  {
    "url": "lecture/mission-html-03.html",
    "revision": "8367828444cb391f10e4fe797d110b31"
  },
  {
    "url": "lecture/mission-html-04.html",
    "revision": "ae8bad52ccf70f42fd9c8d7043515e60"
  },
  {
    "url": "lecture/mission-html-05.html",
    "revision": "ad3ad1ceaeee04d461870cd2ad39c20a"
  },
  {
    "url": "lecture/mission-html-06.html",
    "revision": "cf08ec1ed9da59c4a25b9b5690fff953"
  },
  {
    "url": "lecture/mission-html-07.html",
    "revision": "148ffe181b6e7bd300ad086009372d55"
  },
  {
    "url": "lecture/mission-html-08.html",
    "revision": "94df385ef643840775b58c637a203c88"
  },
  {
    "url": "lecture/mission-html-09.html",
    "revision": "08b688d1629ae02d67de7b21ae106984"
  },
  {
    "url": "lecture/mission-html-10.html",
    "revision": "aa32824e5372307bc6b174852ecb19dc"
  },
  {
    "url": "lecture/mission-html-11.html",
    "revision": "5d485202791536ecea6274d98aef11c7"
  },
  {
    "url": "lecture/pre-index.html",
    "revision": "5241504faabe3415b1802dcf39a07965"
  },
  {
    "url": "lecture/pre-what-do-i-need.html",
    "revision": "3105aac0a263c24c70f9e119a71333f2"
  },
  {
    "url": "lecture/rwd-intro.html",
    "revision": "d3566ba163f25b33fe741abaf530904d"
  },
  {
    "url": "lecture/rwd-pay-breakpoint.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-content-choreography.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-croped-images.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-dip.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-fluid-grids.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-fluid-images.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/rwd-pay-fluid-media.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-cli.html",
    "revision": "6adc9ca54f6fa9290114d6794ddf32cd"
  },
  {
    "url": "lecture/sass-install.html",
    "revision": "5cd8b4d19beeea59f388242534bc7da6"
  },
  {
    "url": "lecture/sass-intro.html",
    "revision": "2d03fa44057d3b5edd55e7116ba708ac"
  },
  {
    "url": "lecture/sass-npm-script.html",
    "revision": "c3dd918b843adda70d27d8d9d60e92d3"
  },
  {
    "url": "lecture/sass-pay-at-rules.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-comments.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-data-types.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-extends.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-flow-controls.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-functions.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-mixins.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-modules.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-nesting.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-operators.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-validation.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-pay-variables.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/sass-vsc-extension.html",
    "revision": "12825fccf2384ffc37a55aab53d03570"
  },
  {
    "url": "lecture/svg-embed-html.html",
    "revision": "8b069f0954e69f6f55f67a77af4e585b"
  },
  {
    "url": "lecture/svg-getting-started.html",
    "revision": "d020b97def577890e866aa89b04fb86c"
  },
  {
    "url": "lecture/svg-pay-animation-css.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-animation-smil.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-container.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-drawing.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-effects.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-illustrator.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-line-path-animation.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-sprites.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/svg-pay-viewport-viewbox.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
  },
  {
    "url": "lecture/vcs-git-gui.html",
    "revision": "f9f7c980e69709c1b570117c80db2bf9"
  },
  {
    "url": "lecture/vcs-git.html",
    "revision": "4f4961da308f77e3365dab10eeec11e3"
  },
  {
    "url": "lecture/vcs-github-collaboration.html",
    "revision": "07590c82a4f4c38e4955970cef4962e2"
  },
  {
    "url": "lecture/vcs-github-project-board.html",
    "revision": "d7ae59028a9553f264f538b26134076c"
  },
  {
    "url": "lecture/vcs-github.html",
    "revision": "b7c84c5ead2065bb80e42dd225bf1d0d"
  },
  {
    "url": "lecture/vcs-open-source-contribute.html",
    "revision": "2f4b822d0f28d12b651a5147d6f8e7b2"
  },
  {
    "url": "payment-information.html",
    "revision": "8a28378c86d8c7dfc51c80e958db8284"
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
