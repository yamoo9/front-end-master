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
    "revision": "aacd56587ac79dec5f8a9c7163c1d8b7"
  },
  {
    "url": "account/register.html",
    "revision": "4d8367dc33c0073b4f5fcf32442c4562"
  },
  {
    "url": "account/signin.html",
    "revision": "e9980aeb546625e94709bc7dec2a3828"
  },
  {
    "url": "account/user.html",
    "revision": "d7c7cae1483152a4965651806b269662"
  },
  {
    "url": "admin/index.html",
    "revision": "21001c6143165e684967549ed2c639b1"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "014e3b2df2952c8f2c5446de338b041a"
  },
  {
    "url": "assets/css/0.styles.69d4c230.css",
    "revision": "350d44ccbc5512c6760a73b9cbf99cb9"
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
    "url": "assets/js/10.219cfa5d.js",
    "revision": "1e71cf0d426895efeda8784339b4305d"
  },
  {
    "url": "assets/js/100.2c5cd72f.js",
    "revision": "d387dbbccdab95cab26be8e242736277"
  },
  {
    "url": "assets/js/101.1ce0ee00.js",
    "revision": "563155b60a473639503245998e5e4d36"
  },
  {
    "url": "assets/js/102.177556bc.js",
    "revision": "39a521188b515224f68013471fade04d"
  },
  {
    "url": "assets/js/103.9aba5eb0.js",
    "revision": "ac2f199ad467416fe84ef9d5a7f3d45b"
  },
  {
    "url": "assets/js/104.3b8fac08.js",
    "revision": "fcd38060efbb7ef3ef9c249b430d304b"
  },
  {
    "url": "assets/js/105.e700cf08.js",
    "revision": "ed3ec2d7670743b684a4e4b451c4ae63"
  },
  {
    "url": "assets/js/106.74c7468f.js",
    "revision": "1c027e4078e7da68ad94cd9d85e68fb5"
  },
  {
    "url": "assets/js/107.6aaf3810.js",
    "revision": "97fd0167e7b2295fc38d20b814f9dd90"
  },
  {
    "url": "assets/js/108.978c6560.js",
    "revision": "c9cb0824017f89d99407fbb03f769f5f"
  },
  {
    "url": "assets/js/109.7de96a2e.js",
    "revision": "ae423186fac6282752b6fb8fb3160f85"
  },
  {
    "url": "assets/js/11.48ae3d38.js",
    "revision": "c41480da654bcd8eced164143ab0e14e"
  },
  {
    "url": "assets/js/110.85c774b4.js",
    "revision": "9419ce98557aea7ab876100d84c038a0"
  },
  {
    "url": "assets/js/111.33b6002d.js",
    "revision": "7ed5a6487c9cac0ab78fbb4b5bc71578"
  },
  {
    "url": "assets/js/112.8c0bbb7a.js",
    "revision": "22a82bd1dca5ec11f39fa6034cc086fb"
  },
  {
    "url": "assets/js/113.e994cd52.js",
    "revision": "054ae2b9dc42d82c6ce5d5f0f5173909"
  },
  {
    "url": "assets/js/114.75fbf800.js",
    "revision": "d98ba9a9b0d088ac278a18aced0de95d"
  },
  {
    "url": "assets/js/115.7dba5742.js",
    "revision": "713bbf545ebb07dc5b61dc5f2551f998"
  },
  {
    "url": "assets/js/116.11142add.js",
    "revision": "daa3676b5352006d60b22b4dbdfa7c0b"
  },
  {
    "url": "assets/js/117.6fdde1bb.js",
    "revision": "df46297dcfbcadeb31f4ccf20501058d"
  },
  {
    "url": "assets/js/118.966021d0.js",
    "revision": "d8e2f87413b53c40ffee22b19589fa4d"
  },
  {
    "url": "assets/js/119.f36aab63.js",
    "revision": "7baa7bc3eb0845e56ab0245cf3f2ffcf"
  },
  {
    "url": "assets/js/12.c5b55702.js",
    "revision": "162aad47147c95a7bce10710e2f8f12d"
  },
  {
    "url": "assets/js/120.cfd736d3.js",
    "revision": "aab7c00ddaa4a0f3acecacd40f99dcac"
  },
  {
    "url": "assets/js/121.4c2b1c05.js",
    "revision": "cc89b16b34873924f684d5079b21c4c7"
  },
  {
    "url": "assets/js/122.ed671fb7.js",
    "revision": "f04e50556c930b4d5a8a6210a9225a79"
  },
  {
    "url": "assets/js/123.1f6d8644.js",
    "revision": "393753a6937121cf1a0e58fb147e2737"
  },
  {
    "url": "assets/js/124.e06b8bd1.js",
    "revision": "5dedcf92c555f2b64fb2339f1aa71cc1"
  },
  {
    "url": "assets/js/125.f55083ea.js",
    "revision": "072b3e538b63b74ac8ff38c49af35a0f"
  },
  {
    "url": "assets/js/126.37bcf148.js",
    "revision": "af80c5bcd02ce0db0a488cabf8ec1ecc"
  },
  {
    "url": "assets/js/127.b8cd8213.js",
    "revision": "504014edfb8e3e50668790a646208479"
  },
  {
    "url": "assets/js/128.b718c29f.js",
    "revision": "f01c3850a29b1e215f7e7e38b98dc572"
  },
  {
    "url": "assets/js/129.2b41ea4e.js",
    "revision": "04155b7af53a76c146ea60b3798ca2d4"
  },
  {
    "url": "assets/js/13.1667b999.js",
    "revision": "93cabe963d83aed1776ae8a3ec8c138c"
  },
  {
    "url": "assets/js/130.e1e674d5.js",
    "revision": "6dab69809cede54656239c1bd0028b87"
  },
  {
    "url": "assets/js/131.064af828.js",
    "revision": "10bdafb783dcaebf1b108f0043f597d8"
  },
  {
    "url": "assets/js/132.2459fa8c.js",
    "revision": "2513dc8260af8e88396bbb108fe8f0af"
  },
  {
    "url": "assets/js/133.96bf3f35.js",
    "revision": "49ab568b8cb4fb3a39fffb0b77291339"
  },
  {
    "url": "assets/js/134.121584b4.js",
    "revision": "eb1d139be20416b5215cfcebe005e379"
  },
  {
    "url": "assets/js/135.12a3aec5.js",
    "revision": "24a86af50e2b7271165c93917f5519dd"
  },
  {
    "url": "assets/js/136.ad12cd47.js",
    "revision": "c18f999a92fa8a4e43728569f040446f"
  },
  {
    "url": "assets/js/137.dab1ad24.js",
    "revision": "4f6f8be31d72e8c449997657f305d51a"
  },
  {
    "url": "assets/js/138.21fe57c2.js",
    "revision": "b2bf40b897690039057485a3ab0c4d1e"
  },
  {
    "url": "assets/js/139.780b3dc3.js",
    "revision": "b1dcfe5124b36bd999b815b3e9b5655d"
  },
  {
    "url": "assets/js/14.f3306b21.js",
    "revision": "ce93adcc0674aeae48c9d06aee0a8a10"
  },
  {
    "url": "assets/js/140.0cd0be5d.js",
    "revision": "4100bbfaeb4fdf1a70b7dfe7b5e72226"
  },
  {
    "url": "assets/js/141.ce95edf5.js",
    "revision": "a1cfb1651af94f93956e4cb741d2f490"
  },
  {
    "url": "assets/js/142.7beb5798.js",
    "revision": "ee0f5b44f50364267451750edccbf10a"
  },
  {
    "url": "assets/js/143.d22a4aec.js",
    "revision": "0955881c9a90c7fb4bb753dfa7485414"
  },
  {
    "url": "assets/js/144.aee120f0.js",
    "revision": "efe1f7eca8cb8d522e90ee4680cbbb82"
  },
  {
    "url": "assets/js/145.fcd2aeaf.js",
    "revision": "ae52df6d8f9204a1b49e1319a1e8f319"
  },
  {
    "url": "assets/js/146.e4968524.js",
    "revision": "0749ba902ed824ddaed0a7b866fe53e2"
  },
  {
    "url": "assets/js/147.422e7495.js",
    "revision": "0c7b9d49f29c1276128abea4adcc06d6"
  },
  {
    "url": "assets/js/148.44d59e39.js",
    "revision": "e057b78b5d9eb68f12d6aa8df435e68c"
  },
  {
    "url": "assets/js/149.b33dc1bf.js",
    "revision": "2706fa48359160d7de0e80c1f0a64537"
  },
  {
    "url": "assets/js/15.d3313a3d.js",
    "revision": "3e4b29fd3284c250b78bb7af8e9d7105"
  },
  {
    "url": "assets/js/150.dd849114.js",
    "revision": "f03c33c948d4ec755d3f9d816c8db76f"
  },
  {
    "url": "assets/js/151.7946eab4.js",
    "revision": "0221f9b3dcfd6f6d59ac080948387485"
  },
  {
    "url": "assets/js/152.40a38122.js",
    "revision": "1cf10276d7e774883320eef70dff1c97"
  },
  {
    "url": "assets/js/153.5ce7724f.js",
    "revision": "fbe394f85a1cf9f5ddc0ea0fc6e2a770"
  },
  {
    "url": "assets/js/154.27c653c2.js",
    "revision": "8ec1c58441cb1556afdc6f5af7a93e53"
  },
  {
    "url": "assets/js/155.26e5dd83.js",
    "revision": "c243e36daa225b0b736a2032f75f6eff"
  },
  {
    "url": "assets/js/156.622f51d0.js",
    "revision": "ac5234e1d11df34881e4452389912185"
  },
  {
    "url": "assets/js/157.c3dd6f95.js",
    "revision": "7c9993273b749f2e293e0845cc6ff9ff"
  },
  {
    "url": "assets/js/158.64daf546.js",
    "revision": "d73b0340e54ae8e5eb341ab7ccc91f52"
  },
  {
    "url": "assets/js/159.891b64ae.js",
    "revision": "dfa67b2f16fc2c36c0cd9ff5a94ea651"
  },
  {
    "url": "assets/js/16.48a87441.js",
    "revision": "ade8130c32ebefb9b9941a26607cdc0a"
  },
  {
    "url": "assets/js/160.6d8e65e7.js",
    "revision": "57d0dbc0dbf5d9e3a4b5339a3fdb3b56"
  },
  {
    "url": "assets/js/161.bab4ba5b.js",
    "revision": "7f997279454e9fbac066a14b4d9f5da4"
  },
  {
    "url": "assets/js/162.33a8d702.js",
    "revision": "764d1a7f515ca372aa99a29c32bda2a6"
  },
  {
    "url": "assets/js/163.a43d52b3.js",
    "revision": "dcff340b4d5fa82ce843c6bbdea13f34"
  },
  {
    "url": "assets/js/164.92cb6099.js",
    "revision": "b964cb874ff5f4ca66e35582244778b6"
  },
  {
    "url": "assets/js/165.2253786f.js",
    "revision": "b41edd7de5289b83c3e7e4bf28c51dbe"
  },
  {
    "url": "assets/js/166.678b8a7e.js",
    "revision": "be90d42c845786dbef2f5cf9fbd413b2"
  },
  {
    "url": "assets/js/167.874563e5.js",
    "revision": "8d30713fa1b0209ac27227088d11ead8"
  },
  {
    "url": "assets/js/168.74a71826.js",
    "revision": "bc41096a1ca49566fdebb692fe170924"
  },
  {
    "url": "assets/js/169.45b68b61.js",
    "revision": "3553637dc12543356a5c5bb0dba31209"
  },
  {
    "url": "assets/js/17.a5ed2a0f.js",
    "revision": "ee949e76b2e364256bedbc549951e806"
  },
  {
    "url": "assets/js/170.a6ece347.js",
    "revision": "050779dcfacbc1b4c30d31eb0792d0db"
  },
  {
    "url": "assets/js/171.00b3b2e0.js",
    "revision": "4a3efee1e263a415e320a61d2a45617b"
  },
  {
    "url": "assets/js/172.4961ffcb.js",
    "revision": "ce0f21a8c08b6fc68868204720da74ea"
  },
  {
    "url": "assets/js/173.59463ab7.js",
    "revision": "bb54109b4e8b7b2dcd0962866c04a523"
  },
  {
    "url": "assets/js/174.a5162a06.js",
    "revision": "ef8061d10569a1f00a84c33de1a398b7"
  },
  {
    "url": "assets/js/175.a75b321b.js",
    "revision": "6e80f382916de2fd0cc1a1bcf4378767"
  },
  {
    "url": "assets/js/176.770ef08c.js",
    "revision": "8d1520f295ddbdd917c44be420da9dd5"
  },
  {
    "url": "assets/js/177.61a9b82c.js",
    "revision": "40a80bd4a8f8c0bfad664eb8ae18c5b6"
  },
  {
    "url": "assets/js/178.4f733c07.js",
    "revision": "b3d44c72ffeccccf95e35333edf028e1"
  },
  {
    "url": "assets/js/179.5c49b9ff.js",
    "revision": "d1822558869d4c0102358ec453b00326"
  },
  {
    "url": "assets/js/18.2b1be3f8.js",
    "revision": "90c4e9792f893f1cdb790e2bc863e08a"
  },
  {
    "url": "assets/js/180.dada7b4c.js",
    "revision": "22488896e3e09775ed5f8dc1091f0d92"
  },
  {
    "url": "assets/js/181.235fa6ef.js",
    "revision": "b429b09d353954fe86d943168ed522aa"
  },
  {
    "url": "assets/js/182.127e548a.js",
    "revision": "326332ad05419d7f937bdfb65ce9882e"
  },
  {
    "url": "assets/js/183.a7b89ffb.js",
    "revision": "e840e79d92617d3ed7a89caafa4fe7b3"
  },
  {
    "url": "assets/js/184.c3e306ed.js",
    "revision": "e05f3e0995ae6bb1268df7d5b0bcb1dc"
  },
  {
    "url": "assets/js/185.e6c9de82.js",
    "revision": "f0a9cb159b2de54655e1fd5b7412ff84"
  },
  {
    "url": "assets/js/186.18451a3a.js",
    "revision": "db01e0cff08e94108a8cab3d1a4e5add"
  },
  {
    "url": "assets/js/187.a5920e52.js",
    "revision": "a51b4fd4a6cb0f44d6fa9913a3ff3637"
  },
  {
    "url": "assets/js/188.e069dfa5.js",
    "revision": "1eee1a8b77a795b44cf2c1a87eff8475"
  },
  {
    "url": "assets/js/189.a66d0299.js",
    "revision": "fef2c1e137091a7bee30a6ff1231412e"
  },
  {
    "url": "assets/js/19.8f78cce6.js",
    "revision": "47b406e156ebab8e347cbce6fc439982"
  },
  {
    "url": "assets/js/190.49c2d07f.js",
    "revision": "8a068f237d9bc119b77b12119460b22c"
  },
  {
    "url": "assets/js/191.067eb031.js",
    "revision": "04e172968196b1f010a31107e1fa7fb4"
  },
  {
    "url": "assets/js/192.3882a2fe.js",
    "revision": "f2cabc6137695456c0bfb3f8c610ec1b"
  },
  {
    "url": "assets/js/193.eaed0be3.js",
    "revision": "fb119c5795fb08d56d3a578a351e0561"
  },
  {
    "url": "assets/js/194.8f7b11b3.js",
    "revision": "01e9d09e9860f59cc3a0b478a4364bd8"
  },
  {
    "url": "assets/js/195.eb5896ad.js",
    "revision": "dd3094c4ac1ef3beb8433b9f8b21308f"
  },
  {
    "url": "assets/js/196.4e09d9cb.js",
    "revision": "d50ead6999c26e6be5edaabf28c9f943"
  },
  {
    "url": "assets/js/197.9beac6b7.js",
    "revision": "6ce4428f055baf9fbf0d9e82da8ea33c"
  },
  {
    "url": "assets/js/198.b7891709.js",
    "revision": "076ba4adf4ec0705910a87ad597e6698"
  },
  {
    "url": "assets/js/199.f31d3cd6.js",
    "revision": "5d31869b1ef23104c95a0bde546947d4"
  },
  {
    "url": "assets/js/2.b505fb0e.js",
    "revision": "c434d85a00d22ef01954223bbee97a55"
  },
  {
    "url": "assets/js/20.6b92369d.js",
    "revision": "eadc81e42d1a292f02918223b1953635"
  },
  {
    "url": "assets/js/200.9451ed7b.js",
    "revision": "2eed0e8c54764bfedde9202a953b34ed"
  },
  {
    "url": "assets/js/201.69835867.js",
    "revision": "dd99e7c288fa3b5d9e2f3703bfd2efd5"
  },
  {
    "url": "assets/js/202.88054d6d.js",
    "revision": "13e8143d6f816866fc51c966abbc0857"
  },
  {
    "url": "assets/js/203.b915a254.js",
    "revision": "91a3c849305b7e27e466f4fdcf55e040"
  },
  {
    "url": "assets/js/204.579005bf.js",
    "revision": "1e08c2d297d44a8ad37c4c9f18a38a7c"
  },
  {
    "url": "assets/js/205.7b01f82d.js",
    "revision": "d5a71d4d07bc296e124e1d99f3a4699f"
  },
  {
    "url": "assets/js/206.3cdada9b.js",
    "revision": "f1e3893293c3cfbf7eaf239f87e5ab9e"
  },
  {
    "url": "assets/js/207.0c891848.js",
    "revision": "374cdc8b3b6966b4026ce1ace277d300"
  },
  {
    "url": "assets/js/208.979828c9.js",
    "revision": "e1c26c7fb08440083c9c2d6369b7a517"
  },
  {
    "url": "assets/js/209.a8d38e83.js",
    "revision": "c0fc7636284cd435d3ac3b5f90df41aa"
  },
  {
    "url": "assets/js/21.9c1005b9.js",
    "revision": "b3c9c11b8252d803dd71c2b1b0156f9f"
  },
  {
    "url": "assets/js/210.454d538e.js",
    "revision": "db96b905fd534969e81cf44e01ff8e6f"
  },
  {
    "url": "assets/js/211.5bc5c348.js",
    "revision": "d81358b3ee0dde884829d8d90c1fb82d"
  },
  {
    "url": "assets/js/212.9c986f00.js",
    "revision": "984ac5983ccd126f7f7bf47c5fb878ba"
  },
  {
    "url": "assets/js/213.5249046c.js",
    "revision": "6ebdabe04acd8490c535692451e2df9c"
  },
  {
    "url": "assets/js/22.96dc7c9f.js",
    "revision": "44f85a9c18b2df0e9e8eac52a84df475"
  },
  {
    "url": "assets/js/23.2bd6453b.js",
    "revision": "d8e5ff3f71f11640b106939c0b32d910"
  },
  {
    "url": "assets/js/24.beadaefc.js",
    "revision": "fc5d98ea5c7d30939406775667dbe6f8"
  },
  {
    "url": "assets/js/25.8f799ed8.js",
    "revision": "739f7aa7271ff5fee3f0e07ae214d3f7"
  },
  {
    "url": "assets/js/26.ceb6f213.js",
    "revision": "1e615eafd6f1d0c24a1f2933be204297"
  },
  {
    "url": "assets/js/27.201a9ceb.js",
    "revision": "298c9fb45b7be7acad0f4a457ae1b6a8"
  },
  {
    "url": "assets/js/28.7054f983.js",
    "revision": "2339e04ce4ca0da29db625379ac25d5f"
  },
  {
    "url": "assets/js/29.ee615707.js",
    "revision": "df129c966164bb88eb4a13ec03366b7e"
  },
  {
    "url": "assets/js/3.ce133b77.js",
    "revision": "d5ea2eed0183a487ced1b01ea3e337ac"
  },
  {
    "url": "assets/js/30.1d451732.js",
    "revision": "3d5e9096c1f0ceff7d2463385b4f84d3"
  },
  {
    "url": "assets/js/31.c28ab174.js",
    "revision": "711df1171c75661865641a3c1c906ce8"
  },
  {
    "url": "assets/js/32.9036c05c.js",
    "revision": "a3bf3d88b016a3b1c644ebc9de0de917"
  },
  {
    "url": "assets/js/33.f842dd40.js",
    "revision": "b13b5a2a5e57fb8f9c6d4ddd1642d8b3"
  },
  {
    "url": "assets/js/34.c7ccef06.js",
    "revision": "9dc102c2ebf6782e79cd0b6814e8c271"
  },
  {
    "url": "assets/js/35.758ceb93.js",
    "revision": "527d0ab716a3cabb3567bec77c11daf8"
  },
  {
    "url": "assets/js/36.8088814a.js",
    "revision": "e7ed9ec46c89908c3469bdf8891cec81"
  },
  {
    "url": "assets/js/37.3f583dbc.js",
    "revision": "9fef47a0f79ea1e9110889e115501d56"
  },
  {
    "url": "assets/js/38.e27b153f.js",
    "revision": "d3d7cc936e4aa52406eef3f89cf7ba52"
  },
  {
    "url": "assets/js/39.b49c31dc.js",
    "revision": "d3ed61af8d5f1e562d203601e4d46996"
  },
  {
    "url": "assets/js/4.8a57a3f6.js",
    "revision": "a441cd5438c8441eea775135c67602ad"
  },
  {
    "url": "assets/js/40.ebb3d9af.js",
    "revision": "a990294aadd17a3456ccd6b3adc5279c"
  },
  {
    "url": "assets/js/41.dd1cf8d1.js",
    "revision": "5182f730a821b3867a78cef9e96ad9d0"
  },
  {
    "url": "assets/js/42.d87159f4.js",
    "revision": "2f92bd64c569c843a28954d5f965fad0"
  },
  {
    "url": "assets/js/43.9a353660.js",
    "revision": "56ec7a3091092bb4987bcc38c8d85e46"
  },
  {
    "url": "assets/js/44.d12550da.js",
    "revision": "ee00d336502302343d7c9716620b1b5c"
  },
  {
    "url": "assets/js/45.89d6bd5d.js",
    "revision": "13d4593d8d7d70e0d3b213f19906ba74"
  },
  {
    "url": "assets/js/46.cd7293ff.js",
    "revision": "5832657bc70143c6f2a98b3d79d81a8d"
  },
  {
    "url": "assets/js/47.60fa9e7e.js",
    "revision": "5a3b5491b99808e3faedd3cbcdbb4b5c"
  },
  {
    "url": "assets/js/48.5e9ba1b2.js",
    "revision": "d9c63be72c101945e9964775aab6ac5e"
  },
  {
    "url": "assets/js/49.b2fa62df.js",
    "revision": "987ef0a01f811a3e2683c07efd9da94c"
  },
  {
    "url": "assets/js/5.377cc0ae.js",
    "revision": "1bb720d3519d6702c73fc267a48808fb"
  },
  {
    "url": "assets/js/50.c3d0f927.js",
    "revision": "1e56f8d7ca7eb706d6efbdefcb545a67"
  },
  {
    "url": "assets/js/51.0ac3e296.js",
    "revision": "a7e5e6aa5af917d22ec40a5baeab2f9a"
  },
  {
    "url": "assets/js/52.70934e7e.js",
    "revision": "6685eec122f05e196b40869602cd6d0e"
  },
  {
    "url": "assets/js/53.1cc9c603.js",
    "revision": "27cb16cc42a71a8f8ddaa451cfb372e1"
  },
  {
    "url": "assets/js/54.8820bb8d.js",
    "revision": "957d45c8b4362a53975d7a8d2ddb6a06"
  },
  {
    "url": "assets/js/55.cd6d0e97.js",
    "revision": "292ea7d877d0094a2139c02a03fc4098"
  },
  {
    "url": "assets/js/56.4996cdc0.js",
    "revision": "07f1bb6bf3d1495b685134f2990044f0"
  },
  {
    "url": "assets/js/57.f82d86aa.js",
    "revision": "debdaaa36a072d5fe4ca6c73b8a18dae"
  },
  {
    "url": "assets/js/58.40689d5d.js",
    "revision": "6daaf15ef5fe0d0554b833c5e1610e16"
  },
  {
    "url": "assets/js/59.aec6281b.js",
    "revision": "369c8ca34b1e619fe2c288557a35dcca"
  },
  {
    "url": "assets/js/6.de44800b.js",
    "revision": "3e76f101e6144a3ff7e0d66af3f2bab9"
  },
  {
    "url": "assets/js/60.19e0aa16.js",
    "revision": "173d831a42e2a38eb9a5466b06284972"
  },
  {
    "url": "assets/js/61.90734e3f.js",
    "revision": "64e583567b662b2e725a49b6d7a09203"
  },
  {
    "url": "assets/js/62.ddf5d50b.js",
    "revision": "68e249b2d0f3940fd113792e61d30ba2"
  },
  {
    "url": "assets/js/63.7f965a67.js",
    "revision": "42ebb943a4f56406c64766be55c11582"
  },
  {
    "url": "assets/js/64.13ed8aa7.js",
    "revision": "a843855f3ebaa754ac61316c35e4cef8"
  },
  {
    "url": "assets/js/65.f9f17be3.js",
    "revision": "997b7fea0be34640dbce5bec3e086dfa"
  },
  {
    "url": "assets/js/66.c51abeb5.js",
    "revision": "a168dfecde4be4a1c6936e27997176bd"
  },
  {
    "url": "assets/js/67.5e5a074a.js",
    "revision": "768d24c224096702c3b56acddfa9d68f"
  },
  {
    "url": "assets/js/68.f8098778.js",
    "revision": "5d99a9c7cede4442f19ea8800127a29b"
  },
  {
    "url": "assets/js/69.9916b781.js",
    "revision": "6a225d8179037110c301458dd8f6c2f0"
  },
  {
    "url": "assets/js/7.3dd3804a.js",
    "revision": "e05bec2a786510d94dd892b80d988bb7"
  },
  {
    "url": "assets/js/70.2f50c0cb.js",
    "revision": "fb5de5d2eee066c6f81952d13318b51f"
  },
  {
    "url": "assets/js/71.52a542a5.js",
    "revision": "b9ee5276bb0a50735bbf12dbcafa2032"
  },
  {
    "url": "assets/js/72.7a760cce.js",
    "revision": "912270109b24f0658297dcf38dfa954e"
  },
  {
    "url": "assets/js/73.82d27a7c.js",
    "revision": "2e69473a1f7576d00fda31856c7f1533"
  },
  {
    "url": "assets/js/74.ffa629be.js",
    "revision": "076628b676718466a61b6835073a0401"
  },
  {
    "url": "assets/js/75.536647cb.js",
    "revision": "2b3ebe6fa6c702c54c1ff6e46737a03b"
  },
  {
    "url": "assets/js/76.bc7b20cf.js",
    "revision": "c85d9b8296bf65eb0c6ff7c88ec6c598"
  },
  {
    "url": "assets/js/77.ce18d793.js",
    "revision": "1f946ee525a26a8daee228bddeea85dc"
  },
  {
    "url": "assets/js/78.b564ee7c.js",
    "revision": "162a63fdd7d24a600014fa9448f187a7"
  },
  {
    "url": "assets/js/79.3b39e2f5.js",
    "revision": "c40f7bbb5926187317421481fcea65e4"
  },
  {
    "url": "assets/js/8.dedde056.js",
    "revision": "127093a618a5a4d6758eb7260d0f1144"
  },
  {
    "url": "assets/js/80.035f9a56.js",
    "revision": "e89590d3fd62a0b7cdb43671edc74640"
  },
  {
    "url": "assets/js/81.bb4d72f0.js",
    "revision": "937e429bbc38a1f6088adcc6d31be877"
  },
  {
    "url": "assets/js/82.4b1dd5b6.js",
    "revision": "a902aaff9a24dbcaf2c0d7ace2ebd3e4"
  },
  {
    "url": "assets/js/83.ed7f85d6.js",
    "revision": "1e9d20420a4b2fcad1d53c8873e8e6cc"
  },
  {
    "url": "assets/js/84.ca740d30.js",
    "revision": "352f647c6837343a698e543813cfe918"
  },
  {
    "url": "assets/js/85.bf812e07.js",
    "revision": "2e34f23f24a965e5f576cea6a858f03c"
  },
  {
    "url": "assets/js/86.5045df05.js",
    "revision": "121941902f97631f33382077558146bf"
  },
  {
    "url": "assets/js/87.c8ba2c9e.js",
    "revision": "8062fc8bf1721e0438bb2995d7209266"
  },
  {
    "url": "assets/js/88.1c81e800.js",
    "revision": "fae454a7051c017041115ce01eb4e32c"
  },
  {
    "url": "assets/js/89.8f699eea.js",
    "revision": "d49315c04d59f4353d34432d1036a65c"
  },
  {
    "url": "assets/js/9.2a1007d5.js",
    "revision": "5ae370b69c91f2063a07a05fee9e79be"
  },
  {
    "url": "assets/js/90.dffeafa4.js",
    "revision": "2b0be50ddfebd84501b73614ab61bcce"
  },
  {
    "url": "assets/js/91.df80548d.js",
    "revision": "c7bc2907eee9bcd29ef77ddac9408fb7"
  },
  {
    "url": "assets/js/92.83015151.js",
    "revision": "bd559ae48129a8bf887fe13974bb6177"
  },
  {
    "url": "assets/js/93.1f84fe3b.js",
    "revision": "05664d66c86929b2887e00fd6782a232"
  },
  {
    "url": "assets/js/94.172328b8.js",
    "revision": "72afacf6712b018847f2adb39d122a7b"
  },
  {
    "url": "assets/js/95.46fcbeea.js",
    "revision": "76c33b3df3f03fe01ab6149ca470aa04"
  },
  {
    "url": "assets/js/96.11336b82.js",
    "revision": "5c7438c5b49f81fb5267baf15a2d9204"
  },
  {
    "url": "assets/js/97.bc06a95c.js",
    "revision": "3077ea5cea4f1ee05c16d6b67525b6fb"
  },
  {
    "url": "assets/js/98.9df90cae.js",
    "revision": "05c0c90e1ee3fce9a35b2e2a711db045"
  },
  {
    "url": "assets/js/99.f8711f6f.js",
    "revision": "3d6c01030eea0c6e33798d70e0d2ed6a"
  },
  {
    "url": "assets/js/app.f07bd81f.js",
    "revision": "72da5677f2fddbde7a30d4806f58702c"
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
    "revision": "eab9b7ced66d79906b7dcd7d727045aa"
  },
  {
    "url": "lecture/api-pay-rest-1.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/api-pay-rest-2.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/api-pay-rest-3.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/api-pay-rest-4.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-basic-syntax.html",
    "revision": "275abe377f19726fe3c5a43e6db3f45c"
  },
  {
    "url": "lecture/css-cascade-rules.html",
    "revision": "93c659d34308880c231ec1bcaf86c49d"
  },
  {
    "url": "lecture/css-inheritance.html",
    "revision": "7c5571e31f7619e6871a659201a05c73"
  },
  {
    "url": "lecture/css-pay-2d-transform-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-3d-transform-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-animation-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-background.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-border-image.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-box-model.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-flexbox-layout.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-form-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-gradients-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-grid-layout.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-layout-floating.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-layout-positining.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-list-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-multi-column.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-table-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-transition-styling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-pay-typography.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/css-selector.html",
    "revision": "14753321f80f650454a619ef30f7be32"
  },
  {
    "url": "lecture/css-standards.html",
    "revision": "662840094d41c30fe1927424af3ebfd4"
  },
  {
    "url": "lecture/ds-intro.html",
    "revision": "d27d1ce088d018f01814abc1025bd1c6"
  },
  {
    "url": "lecture/ds-pay-about.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-accordion.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-apply.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-color-foundation.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-download.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-figma-tokens.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-footer.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-grid.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-hand-off.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-header.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-inspection.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-pages.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-spacing.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-typography.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-version-history.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-pay-viual-banner.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/ds-what-is-design-system.html",
    "revision": "bd2effc4dc5ba8e91e19725467acd261"
  },
  {
    "url": "lecture/es6-iife2block.html",
    "revision": "bc13ee95725d783f48ca63ad1a6b77c7"
  },
  {
    "url": "lecture/es6-intro.html",
    "revision": "8eed4808b10371a46985445e6b89eda9"
  },
  {
    "url": "lecture/es6-let-const.html",
    "revision": "2c56e11af55c4e661e3c287f909e06bd"
  },
  {
    "url": "lecture/es6-pay-array-additions.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-array-useful.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-arrow-function.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-asyncawait.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-babel.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-class.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-default-parameter.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-destructuring-assignment.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-eslint.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-for-of.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-generator.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-iteration.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-map.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-module.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-object-enhancements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-object-iteration.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-promise.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-rest-parameter.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-set.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-shorthand-properties.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-spread-operator.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-string-additions.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-symbol.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-weakmap.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-weakset.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-pay-webpack.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/es6-template-literal.html",
    "revision": "41c09f75c6ca0c9a56ccc1b13f2d254f"
  },
  {
    "url": "lecture/gsap-download-gsap.html",
    "revision": "f1b8369bf1b34b2f99abc31bbd011c97"
  },
  {
    "url": "lecture/gsap-getting-started.html",
    "revision": "0de3501f9a0278f431a36d823d30baf3"
  },
  {
    "url": "lecture/gsap-tweenlite-to.html",
    "revision": "39d066380f2a9222d9679dd40d37624d"
  },
  {
    "url": "lecture/html-anchor-link.html",
    "revision": "410e94e615538a98953db1da62b81812"
  },
  {
    "url": "lecture/html-basic-syntax.html",
    "revision": "9fc76afdbe644f701cd46d5851da1886"
  },
  {
    "url": "lecture/html-dtd-standard-document.html",
    "revision": "b955140c181478ce35a531d5fe22dcf1"
  },
  {
    "url": "lecture/html-headings-paragraph.html",
    "revision": "383a638ab9fca47acae95a26804b55cd"
  },
  {
    "url": "lecture/html-image-figure-caption.html",
    "revision": "2db2ffe6e846eab0568e3185ded20e56"
  },
  {
    "url": "lecture/html-index.html",
    "revision": "ff66419f253eac2d5f6ecac8f3fb0d2a"
  },
  {
    "url": "lecture/html-lang-attribute.html",
    "revision": "f5c99a6924217e31a5d0a1b3cfc01a9b"
  },
  {
    "url": "lecture/html-lists-definition.html",
    "revision": "d11082be1b2c7a3f06417b024980ed6d"
  },
  {
    "url": "lecture/html-lists.html",
    "revision": "e027e2a315d1a856addcbd2b4005c3f8"
  },
  {
    "url": "lecture/html-pay-container-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-embeded-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-form-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-grouping-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-interactive-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-metadata.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-scripting-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-section-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-tabular-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-text-level-elements.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pay-user-interaction-attributes.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/html-pharasing.html",
    "revision": "110ef7b64864702c421d5e4a7649e3e9"
  },
  {
    "url": "lecture/html-quotation-line-break.html",
    "revision": "2b0494233f8c126ddbafeafe5d14111e"
  },
  {
    "url": "lecture/html-semantic-markup.html",
    "revision": "3a7cd51b8975dd688d37b5819fdc77d0"
  },
  {
    "url": "lecture/html-validation.html",
    "revision": "5ea30bcbf865614d4227b3a85d661168"
  },
  {
    "url": "lecture/html-without-closing-tag.html",
    "revision": "1bd81728452e60c6e4b183f49f2eadd0"
  },
  {
    "url": "lecture/index.html",
    "revision": "847dc12f8f14b0f3febad9f88fcf576b"
  },
  {
    "url": "lecture/js-best-book.html",
    "revision": "a753560eccdb19ef92cbcabe9774cd6e"
  },
  {
    "url": "lecture/js-comment-debugging.html",
    "revision": "fb4b86c444f7e38888ad435fd35a1dcf"
  },
  {
    "url": "lecture/js-data-types.html",
    "revision": "1ad6dc269b255041135a6e32c7272b26"
  },
  {
    "url": "lecture/js-declare-assignment.html",
    "revision": "f9ffb6bb5eed065c05b5e812192f48b6"
  },
  {
    "url": "lecture/js-dynamic-type.html",
    "revision": "4aa21d552c83be07d4dcedbc661e27e0"
  },
  {
    "url": "lecture/js-intro.html",
    "revision": "603417d9841df71b999de4727acd2f27"
  },
  {
    "url": "lecture/js-naming.html",
    "revision": "7c6fa24b30d76bb3e053cbe352272f4a"
  },
  {
    "url": "lecture/js-pay-ajax-1.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-ajax-2.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-ajax-3.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-ajax-4.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-ajax-5.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-array-loop.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-array-object.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-closure.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-condition-operator.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-condition-processing.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-condition-switch.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-constructor-prototype.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-dom-part-1.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-dom-part-2.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-dom-part-3.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-dom-part-4.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-dom-part-5.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-event-handling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-function-object.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-function.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-functional-vs-oop.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-get-access-dom.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-hoist-chaining.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-iife.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-key-event-handling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-mouse-event-handling.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-number-math.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-object-inherit.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming-term.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-pass-by-value-reference.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-scope-function-block.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-section-3-expression.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-string.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-pay-when-to-run.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/js-problem-same-name.html",
    "revision": "3f648305e4b7dee4362f54f1651d542c"
  },
  {
    "url": "lecture/js-start-interaction.html",
    "revision": "790707159566a984d7eaf8876e5adc01"
  },
  {
    "url": "lecture/js-warming-up.html",
    "revision": "acbefd431e1ee0880183a431151ea114"
  },
  {
    "url": "lecture/mission-css-01.html",
    "revision": "2cc800ce6d31c14a3f5d0436c6785064"
  },
  {
    "url": "lecture/mission-css-02.html",
    "revision": "f47621ef476c41069e529cd024bebbf8"
  },
  {
    "url": "lecture/mission-html-01.html",
    "revision": "e639230b92d757efbbbf89fa3eeec3e7"
  },
  {
    "url": "lecture/mission-html-02.html",
    "revision": "691c1b4507c0d76f581f697c0ad0394b"
  },
  {
    "url": "lecture/mission-html-03.html",
    "revision": "5ff45aff52472a66b1737c3e7cd3c212"
  },
  {
    "url": "lecture/mission-html-04.html",
    "revision": "109107e32211f95d785664ec692f0ca0"
  },
  {
    "url": "lecture/mission-html-05.html",
    "revision": "e5e0f043a7d2fcbad0c850b4d79bf2fc"
  },
  {
    "url": "lecture/mission-html-06.html",
    "revision": "0c4d1c33311d36a2164263babf16892d"
  },
  {
    "url": "lecture/mission-html-07.html",
    "revision": "7b06caf7b670360c2b3ff1a806eb9594"
  },
  {
    "url": "lecture/mission-html-08.html",
    "revision": "4c718a3d9b36b1c2ee97a2b18adea747"
  },
  {
    "url": "lecture/mission-html-09.html",
    "revision": "a6406e97674a24a931acc3cd785a9913"
  },
  {
    "url": "lecture/mission-html-10.html",
    "revision": "73f45295378c73c14bada4af6fdd1a85"
  },
  {
    "url": "lecture/mission-html-11.html",
    "revision": "b1a5ccf0db1bf9db0d2ed27b4e95cef6"
  },
  {
    "url": "lecture/pre-index.html",
    "revision": "ebebe52c56db217310acf879c93a9103"
  },
  {
    "url": "lecture/pre-what-do-i-need.html",
    "revision": "c27a77f2e89c4b544e7e51f923cdd13c"
  },
  {
    "url": "lecture/rwd-intro.html",
    "revision": "7529e48b2a5aa8c25a00ad05ec37c5d0"
  },
  {
    "url": "lecture/rwd-pay-breakpoint.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-content-choreography.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-croped-images.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-dip.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-fluid-grids.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-fluid-images.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/rwd-pay-fluid-media.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-embed-html.html",
    "revision": "d1e5995806f74982952a3b36a8a07e74"
  },
  {
    "url": "lecture/svg-getting-started.html",
    "revision": "132c2940c219c2476b5153cdaa5d18ee"
  },
  {
    "url": "lecture/svg-pay-animation-css.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-animation-smil.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-container.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-drawing.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-effects.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-illustrator.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-line-path-animation.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-sprites.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/svg-pay-viewport-viewbox.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
  },
  {
    "url": "lecture/vcs-git-gui.html",
    "revision": "43506e34291b52bc1a1573237105d59a"
  },
  {
    "url": "lecture/vcs-git.html",
    "revision": "6b9c53e97253d15decad16990df2d384"
  },
  {
    "url": "lecture/vcs-github-collaboration.html",
    "revision": "b4b253f785076f65eb02b9f6a6481a8a"
  },
  {
    "url": "lecture/vcs-github-project-board.html",
    "revision": "02b8a10c6bdec1e4739f9432f83ab5d9"
  },
  {
    "url": "lecture/vcs-github.html",
    "revision": "6a57fc3d6515bcfca01d0a17e75c0fe5"
  },
  {
    "url": "lecture/vcs-open-source-contribute.html",
    "revision": "419a95baca3e84dc09bb1489dac81995"
  },
  {
    "url": "payment-information.html",
    "revision": "aa27dc0d5ce9c72cf0d8e899ad876bc7"
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
