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
    "revision": "f515ce57888c07a48092e4417a83da58"
  },
  {
    "url": "account/register.html",
    "revision": "74eb10f3019ad9cb8374c2187af60620"
  },
  {
    "url": "account/signin.html",
    "revision": "08cfaf905e63535fa89e356efd0c00be"
  },
  {
    "url": "account/user.html",
    "revision": "8a64ec59f01647f24db091cb18b7585f"
  },
  {
    "url": "admin/index.html",
    "revision": "c5cbb3efc895bfc6193789f048577ff2"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "014e3b2df2952c8f2c5446de338b041a"
  },
  {
    "url": "assets/css/0.styles.5c94820f.css",
    "revision": "5939cd6ed9850b70093c35b74da0dec6"
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
    "url": "assets/js/100.4c21d968.js",
    "revision": "90fcdccbf412457162009815d4958bcc"
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
    "url": "assets/js/104.6328e65a.js",
    "revision": "a9c5e4d879520609a9332299ebfb24fc"
  },
  {
    "url": "assets/js/105.ef4e0144.js",
    "revision": "c5d512da06b2d887992f71ba75fcf9e7"
  },
  {
    "url": "assets/js/106.7173363c.js",
    "revision": "b8579158090c309d79a114ab79bee1b8"
  },
  {
    "url": "assets/js/107.2b642b35.js",
    "revision": "bdd5ffcb641e6e17f7b3f6de29ab1eb1"
  },
  {
    "url": "assets/js/108.89fef23f.js",
    "revision": "3255fe9b5c332ac3c5e9ec6b2eff4268"
  },
  {
    "url": "assets/js/109.356d4afd.js",
    "revision": "d6b045806246110ba760e801b6edf3bf"
  },
  {
    "url": "assets/js/11.3a1459c4.js",
    "revision": "74333f840562684daf6d945019c80454"
  },
  {
    "url": "assets/js/110.63142628.js",
    "revision": "02fea39e9426e19d61ef357278950c1c"
  },
  {
    "url": "assets/js/111.9ecea6b2.js",
    "revision": "ee5ff642d45d0d0df94c7020b54bd9cd"
  },
  {
    "url": "assets/js/112.1d30ef77.js",
    "revision": "1566eab0cb9f1c5f9fea03ee1154eb48"
  },
  {
    "url": "assets/js/113.aabdd064.js",
    "revision": "eb2e473513e11e9c55c72202acf4ab96"
  },
  {
    "url": "assets/js/114.eaf86fff.js",
    "revision": "61032e5763fca14ca40e8c73aca62d5d"
  },
  {
    "url": "assets/js/115.5585de67.js",
    "revision": "7f3fc638c803d94769f1d9487d825c55"
  },
  {
    "url": "assets/js/116.1946fbd2.js",
    "revision": "1a3946678a8ccd0d48ee13636e29c4b7"
  },
  {
    "url": "assets/js/117.49584fad.js",
    "revision": "ea726025f9a2a84d5269cf962d6065d5"
  },
  {
    "url": "assets/js/118.fd26bfdc.js",
    "revision": "1ab7d4abd06b1f2d4470912990a11578"
  },
  {
    "url": "assets/js/119.38e355b4.js",
    "revision": "eed20ff1b28b6e1f57ae33233b5a9bbf"
  },
  {
    "url": "assets/js/12.46d84067.js",
    "revision": "85afe7d4c0fe4515d95528e2e7df615b"
  },
  {
    "url": "assets/js/120.094cfd21.js",
    "revision": "9a73fdb3b689c0e843bd4f5a8397b89a"
  },
  {
    "url": "assets/js/121.0958b080.js",
    "revision": "c8510f295ec31d6262ca94eddd8c6271"
  },
  {
    "url": "assets/js/122.460c0c95.js",
    "revision": "044dcfa23589ebbfd9ee4b4dfb836d76"
  },
  {
    "url": "assets/js/123.066d0cb2.js",
    "revision": "def112b2d2fc68e321ef5eacf576387b"
  },
  {
    "url": "assets/js/124.df5cc079.js",
    "revision": "b70a5eadfddbbdb53758eab8dabfc1ee"
  },
  {
    "url": "assets/js/125.4a06251d.js",
    "revision": "6f787a89d9d4a7b63cfaa6c5ecf60cc9"
  },
  {
    "url": "assets/js/126.876e351e.js",
    "revision": "d5245af6da18169dfe45d93d7f41e6fc"
  },
  {
    "url": "assets/js/127.4eb4db59.js",
    "revision": "ae7206ef20bcc4e5e60b47d07812ce72"
  },
  {
    "url": "assets/js/128.fd36bdf6.js",
    "revision": "f41c04aff46641f2b8801a586af8070f"
  },
  {
    "url": "assets/js/129.dce8278e.js",
    "revision": "10a1fd809ae8e5efd8c4bdcaaaf20357"
  },
  {
    "url": "assets/js/13.2a7a710d.js",
    "revision": "7e0613251a4e228601ede6130cfec7a2"
  },
  {
    "url": "assets/js/130.373a9bb6.js",
    "revision": "c90e2a8b46c1563991e9406150b1ffa8"
  },
  {
    "url": "assets/js/131.3bac5a7b.js",
    "revision": "8a6ce2104f24159e941ca4efbaabb587"
  },
  {
    "url": "assets/js/132.1cffa920.js",
    "revision": "0a67121d3fc39297c14fd5dbe0b6d075"
  },
  {
    "url": "assets/js/133.ffac879d.js",
    "revision": "e2a8a9cb2ed3dc15d5f3e00bfdc1fc4d"
  },
  {
    "url": "assets/js/134.b7fe0935.js",
    "revision": "bee5099f84cd23cac8a0a8b998d2d154"
  },
  {
    "url": "assets/js/135.d0030085.js",
    "revision": "a1f6db600dc2cc8b14491524d0aea9e6"
  },
  {
    "url": "assets/js/136.c30c226f.js",
    "revision": "45e19a7c4864f32f4dcc85f35b3b0d99"
  },
  {
    "url": "assets/js/137.1abd14e8.js",
    "revision": "a80e5aa558f001717e060b331ce25ed8"
  },
  {
    "url": "assets/js/138.81c13992.js",
    "revision": "f675f0087f7d8aa9e74c6421d54f2123"
  },
  {
    "url": "assets/js/139.daa61e5f.js",
    "revision": "8d4dd5bb0152b7c788ebb37e622762e4"
  },
  {
    "url": "assets/js/14.fdbb5b2e.js",
    "revision": "400079610410b502ab91ebd9561d8d97"
  },
  {
    "url": "assets/js/140.e805c80f.js",
    "revision": "f3bb545e372e59612aee543536e5b8c4"
  },
  {
    "url": "assets/js/141.4c88d58e.js",
    "revision": "be170cc6b749c52589f6b4d815fa1ab8"
  },
  {
    "url": "assets/js/142.cfb3e390.js",
    "revision": "c6bf7ba3738750c682c6a5b726917f0e"
  },
  {
    "url": "assets/js/143.471ccba5.js",
    "revision": "4f890d3f3f31b1cbaad74b4badec2043"
  },
  {
    "url": "assets/js/144.259d4eb4.js",
    "revision": "5a678d17860d4135a9702c0e84a562ed"
  },
  {
    "url": "assets/js/145.d9343800.js",
    "revision": "79e91c07afc8f8d6e92b9ae8e2ebc04d"
  },
  {
    "url": "assets/js/146.1fc12fb8.js",
    "revision": "6eba7b3c29ab2a4a7abe427c56d8c7af"
  },
  {
    "url": "assets/js/147.ac5eb090.js",
    "revision": "2d72236e669f79d9bbe42b8f0b64b22f"
  },
  {
    "url": "assets/js/148.97d28383.js",
    "revision": "994880a5f4a3a2096d993e0e1631cf55"
  },
  {
    "url": "assets/js/149.99078e1c.js",
    "revision": "a6a16dd4dac0cfe5c09da23b265656e2"
  },
  {
    "url": "assets/js/15.8d798d29.js",
    "revision": "eeb9a065a8fd3409bc94269de801e032"
  },
  {
    "url": "assets/js/150.619e23a1.js",
    "revision": "896a2bbb28ab5dc9a4155e23b2469dfc"
  },
  {
    "url": "assets/js/151.18348d61.js",
    "revision": "cf9019c5c06efb135398843ff88f6b3b"
  },
  {
    "url": "assets/js/152.87e4c820.js",
    "revision": "f555369d61221319c9dc1619675c594c"
  },
  {
    "url": "assets/js/153.bfb0e94b.js",
    "revision": "b31003b25f25ddb7cf12c68fc39cb2f2"
  },
  {
    "url": "assets/js/154.a0fb5772.js",
    "revision": "a2c56d66176b3a1c563e433c38a4eb2d"
  },
  {
    "url": "assets/js/155.cfbc3616.js",
    "revision": "cfa746de2cc277c2237bddafd46f583e"
  },
  {
    "url": "assets/js/156.26f08427.js",
    "revision": "2f3bc4725665a261402cc332623e98db"
  },
  {
    "url": "assets/js/157.134256c1.js",
    "revision": "75b1e23dc2e64a301d648845284e23d0"
  },
  {
    "url": "assets/js/158.69942f42.js",
    "revision": "506b54032078dbf7ae34c807b29b671f"
  },
  {
    "url": "assets/js/159.7f1fc18d.js",
    "revision": "72a6a94ceddd136ebb020101de77a2bc"
  },
  {
    "url": "assets/js/16.bf12ea0d.js",
    "revision": "4b294e905fbd708f2a0e377b4d8e78d6"
  },
  {
    "url": "assets/js/160.45944c6e.js",
    "revision": "950f7c86f918c57685fca71e80576a31"
  },
  {
    "url": "assets/js/161.3bb4a6d5.js",
    "revision": "e0c0acd78a0a4aa608996ca48600b98e"
  },
  {
    "url": "assets/js/162.65c73951.js",
    "revision": "f6c3972ecd33656a3bc5aa7252e07267"
  },
  {
    "url": "assets/js/163.cb2586a2.js",
    "revision": "d46ec16a6324ba7ac13ceb2f030f2859"
  },
  {
    "url": "assets/js/164.2c4524f4.js",
    "revision": "f1e4ecfffbbdc71bdcb1b9f1b63188d9"
  },
  {
    "url": "assets/js/165.5cee1ecd.js",
    "revision": "7f674fe04a626940ed4a8422fc03516f"
  },
  {
    "url": "assets/js/166.6acb5d21.js",
    "revision": "aeb0361eb9cc99b8aa464a83af17c44a"
  },
  {
    "url": "assets/js/167.af0071ae.js",
    "revision": "1f759f05fff2f20133b6822c4e6c2b44"
  },
  {
    "url": "assets/js/168.2d8e5443.js",
    "revision": "06ae3bb7f6f50a1c1a150863825da1f2"
  },
  {
    "url": "assets/js/169.f40084cc.js",
    "revision": "862f46ccf4eb083f03ae47471e1a5a65"
  },
  {
    "url": "assets/js/17.57fbac4c.js",
    "revision": "82032a28ae96b9d12fe9af3179c99999"
  },
  {
    "url": "assets/js/170.9ac4dfa8.js",
    "revision": "a6a03ac873d413db36ed43c6457dce7b"
  },
  {
    "url": "assets/js/171.8ef3fe8a.js",
    "revision": "f3558d53c456f3dcd554b2702925eb87"
  },
  {
    "url": "assets/js/172.c84d63ef.js",
    "revision": "92aa555d318f4d0cfbd5b2b69bb6e5cc"
  },
  {
    "url": "assets/js/173.45a8d738.js",
    "revision": "b4251a162e833319ec98e1c18635607c"
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
    "url": "assets/js/18.02f2b5c3.js",
    "revision": "f02c2ffef8c1e535174fef1355ae5daf"
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
    "url": "assets/js/188.51b55424.js",
    "revision": "78628554efc653024c94b2265fb36f86"
  },
  {
    "url": "assets/js/189.f2dcc321.js",
    "revision": "98f40710a1cf99e4c27b43a3f372b19e"
  },
  {
    "url": "assets/js/19.a92d79d1.js",
    "revision": "b02541d19e9c915ed2f7e5f2e18e5d8f"
  },
  {
    "url": "assets/js/190.9e913998.js",
    "revision": "c1aee4627ae31ae2499209447916c92f"
  },
  {
    "url": "assets/js/191.d1067cbf.js",
    "revision": "e3c9260bda0dd0f23b519f4aa8f7456f"
  },
  {
    "url": "assets/js/192.0996b6ac.js",
    "revision": "da17bd206f50b81e6fae96e7846d5953"
  },
  {
    "url": "assets/js/193.365cac9c.js",
    "revision": "7fb068c1c934edae8db58a31daeb92ba"
  },
  {
    "url": "assets/js/194.c4eaf764.js",
    "revision": "35ec1e33df3e95c6e8ca871e59a05ec0"
  },
  {
    "url": "assets/js/195.b159a3b7.js",
    "revision": "672e39684a9eaeca45844835ca63e968"
  },
  {
    "url": "assets/js/196.e5e4d97b.js",
    "revision": "bfa3405cf98fc3483559e81f513c98ad"
  },
  {
    "url": "assets/js/197.81b844f3.js",
    "revision": "427e913bf91ae0603d5ee44cf052cc9e"
  },
  {
    "url": "assets/js/198.f2ca35a6.js",
    "revision": "b5d800a35cb6f0c8c09f6fe4a6529037"
  },
  {
    "url": "assets/js/199.5dd7d5f2.js",
    "revision": "9bbaa50d136acf9b338352e743117c4e"
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
    "url": "assets/js/201.0a0e59a9.js",
    "revision": "27db3b158607f3ad1a0904ac01bf0323"
  },
  {
    "url": "assets/js/202.776e3c77.js",
    "revision": "39df817ad82fae34a07fa4742193ba7a"
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
    "url": "assets/js/26.dfaa27cb.js",
    "revision": "d866197e4076a44be91f034cb1d82f9d"
  },
  {
    "url": "assets/js/27.7c10f583.js",
    "revision": "a8d73492aec4ea8f070f2011b63ade18"
  },
  {
    "url": "assets/js/28.b5069c75.js",
    "revision": "311860ee7f680f403263750f0b9c28dc"
  },
  {
    "url": "assets/js/29.e9ffc941.js",
    "revision": "3b578f330ebf8eec7276e0166672bcd8"
  },
  {
    "url": "assets/js/3.a1d8348d.js",
    "revision": "5bff0dc51ad3362a0d3b8aac75b35422"
  },
  {
    "url": "assets/js/30.506be30e.js",
    "revision": "357a8c3c07edde274b68a1fdbebd7168"
  },
  {
    "url": "assets/js/31.d0b1bf43.js",
    "revision": "262dad11ca7f49cde083b1c09729307e"
  },
  {
    "url": "assets/js/32.dfdddddc.js",
    "revision": "85fe9733edee370ef918446d3f240bb4"
  },
  {
    "url": "assets/js/33.c1431be2.js",
    "revision": "bc44951bf1172d813a5c4eac43af197f"
  },
  {
    "url": "assets/js/34.0835cec4.js",
    "revision": "cfa88c78c8de7dd29b2c3a0dee8eb593"
  },
  {
    "url": "assets/js/35.565aa83c.js",
    "revision": "64b3e4119b9bcf198371196a319e7c68"
  },
  {
    "url": "assets/js/36.8e43f2f0.js",
    "revision": "e6f53b3cf3b6d2f5e5012c9333ec6ea4"
  },
  {
    "url": "assets/js/37.91348b87.js",
    "revision": "9ea8b1d00bab00ef64bf179e30edc681"
  },
  {
    "url": "assets/js/38.30f165cd.js",
    "revision": "95936676f98601154452e3438ad5902b"
  },
  {
    "url": "assets/js/39.e6d6af92.js",
    "revision": "a2243cb51b50ad0c9a575b1885141ef7"
  },
  {
    "url": "assets/js/4.7c87904d.js",
    "revision": "70ecf36813f88668c977ef6a4d2abfcf"
  },
  {
    "url": "assets/js/40.65cf447b.js",
    "revision": "e9132d0a556cf9ca1f0e420d8a1cf821"
  },
  {
    "url": "assets/js/41.1308fb5f.js",
    "revision": "40a10a14ad7303afeb68f31582772df5"
  },
  {
    "url": "assets/js/42.4d1ca2bb.js",
    "revision": "3680b43cd3d04f60f408d7939915088c"
  },
  {
    "url": "assets/js/43.6b27da4a.js",
    "revision": "e5557a9754fe98a2158292230d7ba209"
  },
  {
    "url": "assets/js/44.b75e6f4c.js",
    "revision": "e72eda8ccfde685b204180f346473e61"
  },
  {
    "url": "assets/js/45.2a58053c.js",
    "revision": "89107ca9b147bd021e6a8daff0f531d0"
  },
  {
    "url": "assets/js/46.98e4449b.js",
    "revision": "151a7be1bf958aa917c99c871a213d28"
  },
  {
    "url": "assets/js/47.065de765.js",
    "revision": "1a0ed69f58fac834a6eee48e7a488557"
  },
  {
    "url": "assets/js/48.a1c117a0.js",
    "revision": "8ff706242fd226e06dec5122641380d6"
  },
  {
    "url": "assets/js/49.9b85a281.js",
    "revision": "b9a2f31fa865e8f495dfb2397ebe7b0a"
  },
  {
    "url": "assets/js/5.a2c07664.js",
    "revision": "40e085c569cfdaa1b8754d4997f2d7bc"
  },
  {
    "url": "assets/js/50.560a2e18.js",
    "revision": "36912cdeacce9ee9d7fb210af8d71343"
  },
  {
    "url": "assets/js/51.217f0291.js",
    "revision": "f648a03038619dd43f3e6d8476a43db5"
  },
  {
    "url": "assets/js/52.cdf4c62d.js",
    "revision": "b5fba05441c8f048d8d0140d22a34f1b"
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
    "url": "assets/js/69.5ac17224.js",
    "revision": "f91011904bc590ac3d920a47c6ea23cc"
  },
  {
    "url": "assets/js/7.aeda2e86.js",
    "revision": "bec62e92695658c92292578f872c03a1"
  },
  {
    "url": "assets/js/70.7963e1b0.js",
    "revision": "53a24f0dbdbb8f718c0477dc87e41abd"
  },
  {
    "url": "assets/js/71.b0d1f817.js",
    "revision": "60283382e669990978e41d86422bfe17"
  },
  {
    "url": "assets/js/72.891d9b86.js",
    "revision": "98e3bc119c33ec5a7790122e5dad6053"
  },
  {
    "url": "assets/js/73.6f4b3a20.js",
    "revision": "95899f4a3581c59ce5c5e51c0b897c77"
  },
  {
    "url": "assets/js/74.3ba83d9b.js",
    "revision": "e94378253f3666d162a430b0d39c178c"
  },
  {
    "url": "assets/js/75.09bcc2ff.js",
    "revision": "f294188130dc6cf5ac8fa802508bf230"
  },
  {
    "url": "assets/js/76.16b8c39d.js",
    "revision": "6378da26821a00082f535e1aa9066bab"
  },
  {
    "url": "assets/js/77.b4da41be.js",
    "revision": "189d2dd0e4fc2e9de75fe6723a110727"
  },
  {
    "url": "assets/js/78.9036d45f.js",
    "revision": "c232be63965cf9008d884a205ac9bc64"
  },
  {
    "url": "assets/js/79.09ead848.js",
    "revision": "0274f154abf7601f037ca1e09ebd1cf8"
  },
  {
    "url": "assets/js/8.1a892d50.js",
    "revision": "642e376b8026da0e87ddcca009dd88f8"
  },
  {
    "url": "assets/js/80.7ad4cbf6.js",
    "revision": "b5df41bbbb610429f838fe7b374ca5cb"
  },
  {
    "url": "assets/js/81.43ca8c3f.js",
    "revision": "fbf21325549cf295a556c32077713644"
  },
  {
    "url": "assets/js/82.cf4c2acf.js",
    "revision": "3fdd2199a1baa1eb31175a0a8bf36c34"
  },
  {
    "url": "assets/js/83.448d5ff3.js",
    "revision": "3d709e44231208c63dfb2cc6d77e4814"
  },
  {
    "url": "assets/js/84.c290cd64.js",
    "revision": "d8ed03c635d0b676e6fe6697652d4e19"
  },
  {
    "url": "assets/js/85.8838bc8f.js",
    "revision": "b29aa089f6f0dec922cf18f4c9ddfc6b"
  },
  {
    "url": "assets/js/86.8539316c.js",
    "revision": "c463134906aa1f01840042bd4853c81e"
  },
  {
    "url": "assets/js/87.3148c294.js",
    "revision": "89167aff53f6a84f19eac5bbcaca3546"
  },
  {
    "url": "assets/js/88.b4b9a3cf.js",
    "revision": "a5a747d0ad33bbb7d31b17ab8994e164"
  },
  {
    "url": "assets/js/89.f278b98e.js",
    "revision": "086762241276c1de3bc61fc9aaa96fd9"
  },
  {
    "url": "assets/js/9.e6af7217.js",
    "revision": "4aa0ca8137def3c4963163056b149f2a"
  },
  {
    "url": "assets/js/90.54d6969a.js",
    "revision": "6f36d5617084b1c818583f0fd48d1cef"
  },
  {
    "url": "assets/js/91.cd9f88bc.js",
    "revision": "64a1dc5e2e145db3bf8eb10b1bcee4fb"
  },
  {
    "url": "assets/js/92.c32accd9.js",
    "revision": "2584e12067c139e6819d488b91c043a8"
  },
  {
    "url": "assets/js/93.a476a967.js",
    "revision": "9ac5a1d525c2662c1c9d0c2a647c3988"
  },
  {
    "url": "assets/js/94.584797d5.js",
    "revision": "3270f2bcd89701b8125e57cf3ef5016f"
  },
  {
    "url": "assets/js/95.6dfba36a.js",
    "revision": "779e1c78269ca8c1784ffc3b81efd354"
  },
  {
    "url": "assets/js/96.acfba675.js",
    "revision": "ee612a6a36c7a6fd08c6bbc810189eb6"
  },
  {
    "url": "assets/js/97.09a532ea.js",
    "revision": "ae399954e85461eb48e975c0a74bf9e5"
  },
  {
    "url": "assets/js/98.67b9c319.js",
    "revision": "da641e96677e16d1b2df56697cfc7c95"
  },
  {
    "url": "assets/js/99.3affe567.js",
    "revision": "888953c1d5ba82fb88c3f5e6bf6123f3"
  },
  {
    "url": "assets/js/app.472b27d2.js",
    "revision": "0f45981672adb8db40a748be03d11fd8"
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
    "revision": "58371633f68b237c961d95033d99c29b"
  },
  {
    "url": "lecture/api-pay-rest-1.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/api-pay-rest-2.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/api-pay-rest-3.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/api-pay-rest-4.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-basic-syntax.html",
    "revision": "053c444a84aadb079eb8a4a577a0d555"
  },
  {
    "url": "lecture/css-cascade-rules.html",
    "revision": "324a338b42e0499b1f196b7af1a99e73"
  },
  {
    "url": "lecture/css-inheritance.html",
    "revision": "c1e3a2a16491d1419f79ebefd7e8d62c"
  },
  {
    "url": "lecture/css-pay-2d-transform-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-3d-transform-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-animation-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-background.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-border-image.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-box-model.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-flexbox-layout.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-form-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-gradients-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-grid-layout.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-layout-floating.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-layout-positining.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-list-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-multi-column.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-table-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-transition-styling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-pay-typography.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/css-selector.html",
    "revision": "5123af4ae2a001c3f941f15f54795457"
  },
  {
    "url": "lecture/css-standards.html",
    "revision": "1bc24681e37758fadd2326097a8ff718"
  },
  {
    "url": "lecture/ds-intro.html",
    "revision": "aeb2e90b4628ec7e4aeb3e41dbe7c89d"
  },
  {
    "url": "lecture/ds-pay-about.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-accordion.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-apply.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-color-foundation.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-download.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-figma-tokens.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-footer.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-grid.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-hand-off.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-header.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-inspection.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-pages.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-spacing.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-typography.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-version-history.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-pay-viual-banner.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/ds-what-is-design-system.html",
    "revision": "5009f14719dd0dcc750bc75b103e082f"
  },
  {
    "url": "lecture/es6-iife2block.html",
    "revision": "cc743cb53c3a604b9bb41e565fee0d30"
  },
  {
    "url": "lecture/es6-intro.html",
    "revision": "e19934a419e752e7ecc818f4e9465b73"
  },
  {
    "url": "lecture/es6-let-const.html",
    "revision": "71b5d760d09423ce6ddc875c36095879"
  },
  {
    "url": "lecture/es6-pay-array-additions.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-array-useful.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-arrow-function.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-asyncawait.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-babel.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-class.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-default-parameter.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-destructuring-assignment.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-eslint.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-for-of.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-generator.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-iteration.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-map.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-module.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-object-enhancements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-object-iteration.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-promise.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-rest-parameter.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-set.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-shorthand-properties.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-spread-operator.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-string-additions.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-symbol.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-weakmap.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-weakset.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-pay-webpack.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/es6-template-literal.html",
    "revision": "1a87b11f05689272d43d1bc10f6f2d8f"
  },
  {
    "url": "lecture/gsap-download-gsap.html",
    "revision": "c1760c33c4f58c8b22e7e29a834b7e22"
  },
  {
    "url": "lecture/gsap-getting-started.html",
    "revision": "f5d6c50f647db02a036a25a5b1d6b602"
  },
  {
    "url": "lecture/gsap-tweenlite-to.html",
    "revision": "701f2ea87fe8aac07643a05e75db1323"
  },
  {
    "url": "lecture/html-anchor-link.html",
    "revision": "89152feab0dc175b11aed13468abc437"
  },
  {
    "url": "lecture/html-basic-syntax.html",
    "revision": "9a2ec7d895eceb4c5f52197e65a7b537"
  },
  {
    "url": "lecture/html-dtd-standard-document.html",
    "revision": "6e95ecba87b2d4db64da8f15d1e77ab7"
  },
  {
    "url": "lecture/html-headings-paragraph.html",
    "revision": "4f1dad7b12bde98fb69689477dd74b40"
  },
  {
    "url": "lecture/html-image-figure-caption.html",
    "revision": "5229b6e4ca0589f0e84cba0d6afc5264"
  },
  {
    "url": "lecture/html-index.html",
    "revision": "60e1028a8fc61ba36ee3b6d4ae8b4f34"
  },
  {
    "url": "lecture/html-lang-attribute.html",
    "revision": "699b71ebc369c662c1680613995f1c38"
  },
  {
    "url": "lecture/html-lists-definition.html",
    "revision": "d18c0e8fb7450bb793ff9c4712a50a12"
  },
  {
    "url": "lecture/html-lists.html",
    "revision": "7eb216d2b2ec79b9766f989b1bf1fedb"
  },
  {
    "url": "lecture/html-pay-container-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-embeded-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-form-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-grouping-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-interactive-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-metadata.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-scripting-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-section-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-tabular-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-text-level-elements.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pay-user-interaction-attributes.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/html-pharasing.html",
    "revision": "f64fb2cf327cad7a892230df914adedc"
  },
  {
    "url": "lecture/html-quotation-line-break.html",
    "revision": "91e56209412e9dbd2162bc1c25d0deb6"
  },
  {
    "url": "lecture/html-semantic-markup.html",
    "revision": "de07515aef436c1164544bfaae59041f"
  },
  {
    "url": "lecture/html-validation.html",
    "revision": "603e2a664a2e6d3cac18b5908da3fe10"
  },
  {
    "url": "lecture/html-without-closing-tag.html",
    "revision": "ae0734192756f7ff9a1919db5ac12a29"
  },
  {
    "url": "lecture/index.html",
    "revision": "ba4c54566f17e54590b6a9e4617dd162"
  },
  {
    "url": "lecture/js-best-book.html",
    "revision": "fd7aa68864f6b62a3649b243be94195c"
  },
  {
    "url": "lecture/js-comment-debugging.html",
    "revision": "b12122ebe89220debd9b8b6bfb726b0c"
  },
  {
    "url": "lecture/js-data-types.html",
    "revision": "50a08ef8e94198c3bcdef6fea67d3c70"
  },
  {
    "url": "lecture/js-declare-assignment.html",
    "revision": "c753322527aad69f73746d3a2b1814b4"
  },
  {
    "url": "lecture/js-dynamic-type.html",
    "revision": "a30ec1ffe1363307a64f4ca3e2d7aceb"
  },
  {
    "url": "lecture/js-intro.html",
    "revision": "46afc8ccacf781975243b9dde4440fac"
  },
  {
    "url": "lecture/js-naming.html",
    "revision": "c9921715b26701576d5303e874f46f2a"
  },
  {
    "url": "lecture/js-pay-ajax-1.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-ajax-2.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-ajax-3.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-ajax-4.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-ajax-5.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-array-loop.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-array-object.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-closure.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-condition-operator.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-condition-processing.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-condition-switch.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-constructor-prototype.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-dom-part-1.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-dom-part-2.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-dom-part-3.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-dom-part-4.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-dom-part-5.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-event-handling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-function-object.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-function.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-functional-vs-oop.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-get-access-dom.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-hoist-chaining.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-iife.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-key-event-handling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-mouse-event-handling.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-number-math.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-object-inherit.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming-term.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-pass-by-value-reference.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-scope-function-block.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-section-3-expression.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-string.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-pay-when-to-run.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/js-problem-same-name.html",
    "revision": "fc6d9ca205cc21eafbb382bab32fb489"
  },
  {
    "url": "lecture/js-start-interaction.html",
    "revision": "5e7ea6cb9c04dfd3ffd57d6c36e67685"
  },
  {
    "url": "lecture/js-warming-up.html",
    "revision": "8826aa9cd469531a850921cc21a22b07"
  },
  {
    "url": "lecture/mission-css-01.html",
    "revision": "53d2a217c153890fadefebc8328f12fb"
  },
  {
    "url": "lecture/mission-css-02.html",
    "revision": "581cb967b2ef4dc11b9d3a0553ce3a81"
  },
  {
    "url": "lecture/mission-html-01.html",
    "revision": "bf90930f29d61546e349c87ce7061a88"
  },
  {
    "url": "lecture/mission-html-02.html",
    "revision": "d353e6282f59292c22a3ee3db66795d1"
  },
  {
    "url": "lecture/mission-html-03.html",
    "revision": "372bb18566096d87d22d757eaf815704"
  },
  {
    "url": "lecture/mission-html-04.html",
    "revision": "a3026f8af86c2e814f75eb7e8c0713f6"
  },
  {
    "url": "lecture/mission-html-05.html",
    "revision": "ae1d0f34b00f7e265c675c4a66ef7f94"
  },
  {
    "url": "lecture/mission-html-06.html",
    "revision": "610221ed1a46a530952eea62b04b0917"
  },
  {
    "url": "lecture/mission-html-07.html",
    "revision": "3d1159aa3df26b25dfd30e3134271a26"
  },
  {
    "url": "lecture/mission-html-08.html",
    "revision": "bc1ba9322c1c6e9ebad175aa60655fcc"
  },
  {
    "url": "lecture/mission-html-09.html",
    "revision": "6bee68627560ab13da024627899625ee"
  },
  {
    "url": "lecture/mission-html-10.html",
    "revision": "39904ddc05b29880c647559ca65b0ee0"
  },
  {
    "url": "lecture/mission-html-11.html",
    "revision": "36774eb59e4e6beb7433c9ad4241b558"
  },
  {
    "url": "lecture/pre-index.html",
    "revision": "4c9276707620902ae229eb5c1085d9b7"
  },
  {
    "url": "lecture/pre-what-do-i-need.html",
    "revision": "b3d9422afe14d04b878582e35ae3a293"
  },
  {
    "url": "lecture/rwd-intro.html",
    "revision": "117df4d109dcced12eb4395cb89b9cb1"
  },
  {
    "url": "lecture/rwd-pay-breakpoint.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-content-choreography.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-croped-images.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-dip.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-fluid-grids.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-fluid-images.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/rwd-pay-fluid-media.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-cli.html",
    "revision": "e9d7baa82d5a3c77c6040f4d9bba7ab4"
  },
  {
    "url": "lecture/sass-install.html",
    "revision": "2e45325092681016618a10a1bb374ce9"
  },
  {
    "url": "lecture/sass-intro.html",
    "revision": "e5b61cb9305360425c6e45c042802188"
  },
  {
    "url": "lecture/sass-npm-script.html",
    "revision": "d27ceee54b661aefd2839048d8cb4e0a"
  },
  {
    "url": "lecture/sass-pay-at-rules.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-comments.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-data-types.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-extends.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-flow-controls.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-functions.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-mixins.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-modules.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-nesting.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-operators.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-validation.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-pay-variables.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/sass-vsc-extension.html",
    "revision": "a879ea0286eef78eff39e25818e4e20d"
  },
  {
    "url": "lecture/svg-embed-html.html",
    "revision": "93abd2edad3a24c2387f0a5c5f420bbf"
  },
  {
    "url": "lecture/svg-getting-started.html",
    "revision": "926d7d0660ec189b4679cd14b8d64237"
  },
  {
    "url": "lecture/svg-pay-animation-css.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-animation-smil.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-container.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-drawing.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-effects.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-illustrator.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-line-path-animation.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-sprites.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/svg-pay-viewport-viewbox.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
  },
  {
    "url": "lecture/vcs-git-gui.html",
    "revision": "10cc94853e2a131116c353eac61a8c70"
  },
  {
    "url": "lecture/vcs-git.html",
    "revision": "8f74a0942adda2b9cc07f83e5f99237c"
  },
  {
    "url": "lecture/vcs-github-collaboration.html",
    "revision": "a78795e98bf174eb8e55c51bfa4520f4"
  },
  {
    "url": "lecture/vcs-github-project-board.html",
    "revision": "6ba22b76368ad51c73451d8186bfdbd0"
  },
  {
    "url": "lecture/vcs-github.html",
    "revision": "644de07cbb1d0b8e9c099a6a4bc44e7f"
  },
  {
    "url": "lecture/vcs-open-source-contribute.html",
    "revision": "e752170e69218f8127f17411ffa379f0"
  },
  {
    "url": "payment-information.html",
    "revision": "27fbefbc076fd49044d459464df40b43"
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
