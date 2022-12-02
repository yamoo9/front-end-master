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
    "revision": "e15adb4c5f72b2ce76b4713aa4d47ec9"
  },
  {
    "url": "account/register.html",
    "revision": "d1c034cdb1976f427fb753d836e2f9a8"
  },
  {
    "url": "account/signin.html",
    "revision": "1506b03a67021eaefe198fabc1887a71"
  },
  {
    "url": "account/user.html",
    "revision": "8a775f7cde3884bf49cb926dd8612192"
  },
  {
    "url": "admin/index.html",
    "revision": "0e989749dbbe7e376747d4053bf3229b"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "014e3b2df2952c8f2c5446de338b041a"
  },
  {
    "url": "assets/css/0.styles.b8e4b4d5.css",
    "revision": "6a287c221fee8f33ac39c4db4fb61d26"
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
    "url": "assets/js/10.5a6abe5d.js",
    "revision": "4288b8b925b5a764a83c8c57f804bcaf"
  },
  {
    "url": "assets/js/100.b3eb99c5.js",
    "revision": "1616e489590f4492bc47fda1289fb83d"
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
    "url": "assets/js/103.4ad4526a.js",
    "revision": "bcf463fe0329450f35fa2c3fd8d33614"
  },
  {
    "url": "assets/js/104.6bd59454.js",
    "revision": "1bd64805c562ffbe452833e0f0ded4b9"
  },
  {
    "url": "assets/js/105.999f0408.js",
    "revision": "bcdaf096156fc6a88278ee7c66a3ccf3"
  },
  {
    "url": "assets/js/106.df9437b8.js",
    "revision": "52fe745727c267665b56211e07f8fb31"
  },
  {
    "url": "assets/js/107.5757e508.js",
    "revision": "53590b092d94734931833b20091ce4be"
  },
  {
    "url": "assets/js/108.6d84f407.js",
    "revision": "2e6f202f7b70131574a68948041d9549"
  },
  {
    "url": "assets/js/109.3031e52e.js",
    "revision": "76e9701d85b97724707e31e873be62eb"
  },
  {
    "url": "assets/js/11.48ae3d38.js",
    "revision": "c41480da654bcd8eced164143ab0e14e"
  },
  {
    "url": "assets/js/110.1190bfe9.js",
    "revision": "f078a6601a2cdfa2e2e5b81ea227c8bc"
  },
  {
    "url": "assets/js/111.21955231.js",
    "revision": "9627a05fa62e4d65144130101876fd28"
  },
  {
    "url": "assets/js/112.e31e2fb5.js",
    "revision": "6556d10248bdaaa7b9c47ebf055fd964"
  },
  {
    "url": "assets/js/113.0bd7707d.js",
    "revision": "8d964990163f916d90e7fe6f9af5da58"
  },
  {
    "url": "assets/js/114.62756624.js",
    "revision": "6955cd948bf3ff5d8ffd502bc6a5e409"
  },
  {
    "url": "assets/js/115.5f614652.js",
    "revision": "e713e49afa0879c80a5215bac994504c"
  },
  {
    "url": "assets/js/116.25430568.js",
    "revision": "70f238033b677e2922d4200dcc5275d1"
  },
  {
    "url": "assets/js/117.dd84edc9.js",
    "revision": "7e65dba6be2c8ea4a055be796b342482"
  },
  {
    "url": "assets/js/118.de6bfe49.js",
    "revision": "932d4be52f03027cf8c38d5c958af521"
  },
  {
    "url": "assets/js/119.4399d55b.js",
    "revision": "a5521a6766fe43cf34713b4d47e55107"
  },
  {
    "url": "assets/js/12.c5b55702.js",
    "revision": "162aad47147c95a7bce10710e2f8f12d"
  },
  {
    "url": "assets/js/120.2fbd00ed.js",
    "revision": "c34232783cf477ae95d3821147ee4134"
  },
  {
    "url": "assets/js/121.fadc1ca0.js",
    "revision": "4baaaa6046b62a1c16e6fb3830cc8d49"
  },
  {
    "url": "assets/js/122.2dfdc350.js",
    "revision": "c921ca20bcbae2d4ad6b46d0e7a290e0"
  },
  {
    "url": "assets/js/123.f4a26794.js",
    "revision": "e3eba96aaa47c7d8d28581fb176c8f49"
  },
  {
    "url": "assets/js/124.886fd271.js",
    "revision": "da46ebdbdb31fd932401ed05b8f2e6a9"
  },
  {
    "url": "assets/js/125.0002443f.js",
    "revision": "5441503807f5ea28cd1592a5cbf7900e"
  },
  {
    "url": "assets/js/126.f7017266.js",
    "revision": "fc1ed688b753756e4e371d37ac09184c"
  },
  {
    "url": "assets/js/127.3eea1080.js",
    "revision": "131b83a73023f1b1272a036257460acd"
  },
  {
    "url": "assets/js/128.a50a16c9.js",
    "revision": "7691ca732f9ce6464c4a24c096ea6e0a"
  },
  {
    "url": "assets/js/129.059655e9.js",
    "revision": "fd07a7b8160ddf0c233780f79b04447a"
  },
  {
    "url": "assets/js/13.1667b999.js",
    "revision": "93cabe963d83aed1776ae8a3ec8c138c"
  },
  {
    "url": "assets/js/130.da465289.js",
    "revision": "e28827e4899ba07749b89269a5035460"
  },
  {
    "url": "assets/js/131.1723565f.js",
    "revision": "fc9f27b3ad73ed739319e067504299da"
  },
  {
    "url": "assets/js/132.9b452ff1.js",
    "revision": "e84a133932570446b268583d4f5871e5"
  },
  {
    "url": "assets/js/133.b6d27072.js",
    "revision": "98e41a7202155aa7bf079c74fa340f4e"
  },
  {
    "url": "assets/js/134.e2cf3041.js",
    "revision": "992c92b84029f1e1cf2b14239dc059c6"
  },
  {
    "url": "assets/js/135.9ec29eef.js",
    "revision": "c96be1b072c85111a3d12ee9f15610ac"
  },
  {
    "url": "assets/js/136.e8165eec.js",
    "revision": "f8be16b9f604e048fe606c9928b7d4ce"
  },
  {
    "url": "assets/js/137.5a8f3f63.js",
    "revision": "4133bd888a3fe8323f9305b5b0b33285"
  },
  {
    "url": "assets/js/138.010d1601.js",
    "revision": "e1458511702652a20eb09d0acf8eeed0"
  },
  {
    "url": "assets/js/139.818ff1e1.js",
    "revision": "fba190cc049d6b0dc211ee1df3d83bb4"
  },
  {
    "url": "assets/js/14.f3306b21.js",
    "revision": "ce93adcc0674aeae48c9d06aee0a8a10"
  },
  {
    "url": "assets/js/140.d821b99e.js",
    "revision": "5d9f1c6fd4aca2aae89caa0646100f38"
  },
  {
    "url": "assets/js/141.eb9b915b.js",
    "revision": "83c762b5b6fdc7ae57f34424e7e444ee"
  },
  {
    "url": "assets/js/142.2d93afb4.js",
    "revision": "a5cdd1bc30300b7b48766f077019e80a"
  },
  {
    "url": "assets/js/143.12b635df.js",
    "revision": "acf193c43ff7d789e778163173fd1f9d"
  },
  {
    "url": "assets/js/144.28e1d279.js",
    "revision": "0c3b266d3bb7e479024e20f0b734c545"
  },
  {
    "url": "assets/js/145.97629c6a.js",
    "revision": "524b982b29bad8af84bb65853d6d9d4c"
  },
  {
    "url": "assets/js/146.618df65f.js",
    "revision": "6a206b9b17fccaaa47d37ae1b9be8d2d"
  },
  {
    "url": "assets/js/147.3c93dfee.js",
    "revision": "219beb2ca813218327bb5fd31ef16e72"
  },
  {
    "url": "assets/js/148.0e3ec47b.js",
    "revision": "91eb59e7676e2d3591674d869738556b"
  },
  {
    "url": "assets/js/149.ce11429a.js",
    "revision": "4ddef080f6f3a501a850f7f9939c1ff4"
  },
  {
    "url": "assets/js/15.d3313a3d.js",
    "revision": "3e4b29fd3284c250b78bb7af8e9d7105"
  },
  {
    "url": "assets/js/150.9ec1bd05.js",
    "revision": "317c09369d31399c9762f2f9071513b8"
  },
  {
    "url": "assets/js/151.c7650479.js",
    "revision": "6824d866e2985473731fc33b7a6492b7"
  },
  {
    "url": "assets/js/152.fedfb600.js",
    "revision": "78ea3daeee20f3325ef4b0bbecdf2671"
  },
  {
    "url": "assets/js/153.e1b9e46c.js",
    "revision": "e5c858ccc39b49d3709b650769ae3651"
  },
  {
    "url": "assets/js/154.8ce1005c.js",
    "revision": "3c9fc3b19283ac248ede875ab395314d"
  },
  {
    "url": "assets/js/155.9a3a30ec.js",
    "revision": "13360a061f6869d8806f231c47775c77"
  },
  {
    "url": "assets/js/156.b0492447.js",
    "revision": "b686cfb4f45035c89b8920ac16d5693b"
  },
  {
    "url": "assets/js/157.72982e84.js",
    "revision": "4d7d1480dd83845f29c4cc939caccb29"
  },
  {
    "url": "assets/js/158.006b57bd.js",
    "revision": "63e473d39d5330f244abe099ea183dae"
  },
  {
    "url": "assets/js/159.379767bb.js",
    "revision": "a09e3ebdfabb942bee642d8dc876dc57"
  },
  {
    "url": "assets/js/16.c4bb5fe3.js",
    "revision": "c13847fe5b32021ee26c6aea833de542"
  },
  {
    "url": "assets/js/160.8b2bb881.js",
    "revision": "06e6315c95e768b29929fbc0a2cd5c72"
  },
  {
    "url": "assets/js/161.737f522d.js",
    "revision": "9c1b48b24651123b15d182917ae361bc"
  },
  {
    "url": "assets/js/162.efe70771.js",
    "revision": "91df32e626b0f62afbda6f8d95db6e54"
  },
  {
    "url": "assets/js/163.62e04e38.js",
    "revision": "68ffee9e01c066eec95e5e3b94b83609"
  },
  {
    "url": "assets/js/164.57d69c61.js",
    "revision": "f9798021163c3d22c29c0609bd44142b"
  },
  {
    "url": "assets/js/165.9d1f952e.js",
    "revision": "9ad07e28cea5af41240df38f1198aecd"
  },
  {
    "url": "assets/js/166.5adb2c0c.js",
    "revision": "c60d4e8d8831f07ee6455bfe6faa14d4"
  },
  {
    "url": "assets/js/167.a4913346.js",
    "revision": "400ef03a6a88336f77d44bc17f7410bd"
  },
  {
    "url": "assets/js/168.4218db9a.js",
    "revision": "9f8d71bbf352051c3fef017cfd007e91"
  },
  {
    "url": "assets/js/169.5ccdcb8e.js",
    "revision": "0b98e4e44cc5f0d267612118f11bd717"
  },
  {
    "url": "assets/js/17.8dc1aac9.js",
    "revision": "12230fc0eef22e1fb54a1301dc4b9191"
  },
  {
    "url": "assets/js/170.59ef9dbe.js",
    "revision": "38ebc6354f65f690c6b293a6e9639cf7"
  },
  {
    "url": "assets/js/171.b324d221.js",
    "revision": "f530f8f4bb0612cfffc6e183ddbac868"
  },
  {
    "url": "assets/js/172.89f1957a.js",
    "revision": "526d147863efdd4544d8bbee2d9b46cf"
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
    "url": "assets/js/183.5fe31c71.js",
    "revision": "4afa41e1c3529ea1e535af0d3e809ed3"
  },
  {
    "url": "assets/js/184.05256125.js",
    "revision": "73cd34daee7031ff0a22db9ebc0b31ba"
  },
  {
    "url": "assets/js/185.2d7b33cb.js",
    "revision": "216bd48dedb8f77562ad481f4be4584d"
  },
  {
    "url": "assets/js/186.18451a3a.js",
    "revision": "db01e0cff08e94108a8cab3d1a4e5add"
  },
  {
    "url": "assets/js/187.dd002774.js",
    "revision": "dcc7e0889e5c694a072e3353dbc1dada"
  },
  {
    "url": "assets/js/188.8252234d.js",
    "revision": "ad6e35145e26d50475a3997ba2975dc2"
  },
  {
    "url": "assets/js/189.9fb2e435.js",
    "revision": "18cb506524b1bc9daaf41a9fcff91ca6"
  },
  {
    "url": "assets/js/19.8f78cce6.js",
    "revision": "47b406e156ebab8e347cbce6fc439982"
  },
  {
    "url": "assets/js/190.86e9a7a7.js",
    "revision": "0175e1615ff62de27f84d28d8e1a09b8"
  },
  {
    "url": "assets/js/191.5ad3341d.js",
    "revision": "262fa585f0c7e46c502f936e4b6bf644"
  },
  {
    "url": "assets/js/192.14b3f8eb.js",
    "revision": "1c1957e2103425e1f8d6f2110d3f8e80"
  },
  {
    "url": "assets/js/193.2a0c14a2.js",
    "revision": "d2cbcaddf55a02ea784262dbfdf87f42"
  },
  {
    "url": "assets/js/194.d2a953b9.js",
    "revision": "d84565c5e913182f3f5a5c0459dae196"
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
    "url": "assets/js/204.ab2bf9ac.js",
    "revision": "6610100cf7e19a5f10fc74c33d7f65b7"
  },
  {
    "url": "assets/js/205.aaaf245e.js",
    "revision": "4c64fd08b70689ff50e338019bc4a87e"
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
    "url": "assets/js/25.c7b92f0f.js",
    "revision": "5252f3ee5683f399d7dcd067ba517eb7"
  },
  {
    "url": "assets/js/26.8b29a69d.js",
    "revision": "a61a324b612cf1ae788236d12fdad46e"
  },
  {
    "url": "assets/js/27.25009604.js",
    "revision": "eed7c9775b9bd40826deacd74521aa83"
  },
  {
    "url": "assets/js/28.9886f86b.js",
    "revision": "038c302b609b703ed8dabdfd457711bc"
  },
  {
    "url": "assets/js/29.49231b86.js",
    "revision": "a3ba7c4d2be65e3a06693d83590d86f2"
  },
  {
    "url": "assets/js/3.ce133b77.js",
    "revision": "d5ea2eed0183a487ced1b01ea3e337ac"
  },
  {
    "url": "assets/js/30.5ad1cb79.js",
    "revision": "dbf6a2ed937620d0025e2065960257b1"
  },
  {
    "url": "assets/js/31.aa1f90d5.js",
    "revision": "ad2d51139e78a15edd85404245e21dc5"
  },
  {
    "url": "assets/js/32.95f466ac.js",
    "revision": "c25ccacadf23d79e4e06b98f778a8d20"
  },
  {
    "url": "assets/js/33.3539a4de.js",
    "revision": "5971128e078a8340f17ca5a26f333161"
  },
  {
    "url": "assets/js/34.52084899.js",
    "revision": "977d1166a6385ca7b862ad383a15c384"
  },
  {
    "url": "assets/js/35.8c2e7b4a.js",
    "revision": "d96dc5e3a892fd67caeaac12134dda6c"
  },
  {
    "url": "assets/js/36.18d8c600.js",
    "revision": "b8be4be514abed1efa8dfdba6650b245"
  },
  {
    "url": "assets/js/37.f2dbef7a.js",
    "revision": "a3a4ad2a948f9152e2d5eddb186bddf2"
  },
  {
    "url": "assets/js/38.cea3f1ce.js",
    "revision": "0062fee7ace41c2aa4e269b1ab74bfd0"
  },
  {
    "url": "assets/js/39.6ac6a41a.js",
    "revision": "43baae458977a2b3e7a97976de6adad4"
  },
  {
    "url": "assets/js/4.8a57a3f6.js",
    "revision": "a441cd5438c8441eea775135c67602ad"
  },
  {
    "url": "assets/js/40.d4f785a6.js",
    "revision": "6125bba8b2c62114968b2e9a69019ea6"
  },
  {
    "url": "assets/js/41.9bfe233b.js",
    "revision": "8d9d14ee558ac4596ab94c221e002cb4"
  },
  {
    "url": "assets/js/42.0345a156.js",
    "revision": "a0987987431ba94ca599ef0d943020db"
  },
  {
    "url": "assets/js/43.e5af6f8c.js",
    "revision": "c43fe0368e9ca09b8508574829543e94"
  },
  {
    "url": "assets/js/44.acb074df.js",
    "revision": "5ef33eb3a521c70b1b02bb773bdc2db5"
  },
  {
    "url": "assets/js/45.c48ee5be.js",
    "revision": "06da044eb9f2a219832982855c450408"
  },
  {
    "url": "assets/js/46.98b26b0a.js",
    "revision": "c2a408210c1a921495a871917cdfb8df"
  },
  {
    "url": "assets/js/47.a62d074e.js",
    "revision": "7471ca5132d3f9fe374e4319cfd4ce0e"
  },
  {
    "url": "assets/js/48.d972b996.js",
    "revision": "38b3b0e487cefef1df8bd65501573b91"
  },
  {
    "url": "assets/js/49.40305559.js",
    "revision": "86cccc668bead118233483f2442a6530"
  },
  {
    "url": "assets/js/5.377cc0ae.js",
    "revision": "1bb720d3519d6702c73fc267a48808fb"
  },
  {
    "url": "assets/js/50.ed997631.js",
    "revision": "ab1fdace4b45bdb2879c32fb0707d222"
  },
  {
    "url": "assets/js/51.a5537f9b.js",
    "revision": "32a719e512d78a194e62eb7638901a27"
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
    "url": "assets/js/6.2638b84c.js",
    "revision": "3897a970c872f0183cfc5618ee6a7e4b"
  },
  {
    "url": "assets/js/60.19e0aa16.js",
    "revision": "173d831a42e2a38eb9a5466b06284972"
  },
  {
    "url": "assets/js/61.ed4f3df4.js",
    "revision": "816c3780823c972a52f8c108541fbfa0"
  },
  {
    "url": "assets/js/62.379f4a65.js",
    "revision": "746329d57002e24f57faba9466c15b74"
  },
  {
    "url": "assets/js/63.ba27da64.js",
    "revision": "46236b473c49aa84765a68acf3c7c677"
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
    "url": "assets/js/66.cb21f3f7.js",
    "revision": "eea35c9eb334af00a0e96316fe151a3a"
  },
  {
    "url": "assets/js/67.2f9f4a77.js",
    "revision": "898cf611c78a6fe85d587bac5b776f52"
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
    "url": "assets/js/7.aeccd994.js",
    "revision": "4eb482a906fca49f48fc868fc26b355e"
  },
  {
    "url": "assets/js/70.2f50c0cb.js",
    "revision": "fb5de5d2eee066c6f81952d13318b51f"
  },
  {
    "url": "assets/js/71.99d98d70.js",
    "revision": "fa7a7d54e5ce7c4b306e77a7314ea76b"
  },
  {
    "url": "assets/js/72.cc713644.js",
    "revision": "ccb57d15b54bb9e273de59ab88deed68"
  },
  {
    "url": "assets/js/73.4877ff2b.js",
    "revision": "2f1d0cd682cf6d12c8940fa4f9590451"
  },
  {
    "url": "assets/js/74.9fd6822e.js",
    "revision": "5816e37b5562409a57c4ceb3d15e5fa0"
  },
  {
    "url": "assets/js/75.d2816430.js",
    "revision": "8a6eb914bbd668371919a1388fd6ce2c"
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
    "url": "assets/js/78.b9c9b9b0.js",
    "revision": "5aeaafd1ae2ccdc31417a2ff6e44cfd6"
  },
  {
    "url": "assets/js/79.86a9d942.js",
    "revision": "3d06ed9a4a031c7165a58fd2ace1064f"
  },
  {
    "url": "assets/js/8.3b3c5449.js",
    "revision": "9c3e938f133c12580563bc1baa2fdf3e"
  },
  {
    "url": "assets/js/80.72603d33.js",
    "revision": "04ba66f36e47a96dbf22604c52e6abb1"
  },
  {
    "url": "assets/js/81.143c6d15.js",
    "revision": "2b99cd6b9f84e7c3ab35317cfbf57b15"
  },
  {
    "url": "assets/js/82.7e7427af.js",
    "revision": "9de00e0bc90142fc0f5b76943dd25c80"
  },
  {
    "url": "assets/js/83.faf0d278.js",
    "revision": "aee6d0d7974d4aabcf9deb89776cdcbe"
  },
  {
    "url": "assets/js/84.8c83ebf7.js",
    "revision": "797c5209966ac358bb9cc4fedf38ac93"
  },
  {
    "url": "assets/js/85.175969ae.js",
    "revision": "fd09f90599137e94d2bdb2d1a2275922"
  },
  {
    "url": "assets/js/86.41dd3b66.js",
    "revision": "59f510b5d131c33a606afdcab09543c6"
  },
  {
    "url": "assets/js/87.25491d0b.js",
    "revision": "362376be18a3c4db2ef49ba606c8e252"
  },
  {
    "url": "assets/js/88.1c81e800.js",
    "revision": "fae454a7051c017041115ce01eb4e32c"
  },
  {
    "url": "assets/js/89.ab4ad665.js",
    "revision": "7c1d596304a2de7b7e332b4f89b1809d"
  },
  {
    "url": "assets/js/9.51d3eaeb.js",
    "revision": "43d4f35682dd72d2e50d7a176d6431da"
  },
  {
    "url": "assets/js/90.33b4dac3.js",
    "revision": "b44ad7812074de1bcd214cad9f331f86"
  },
  {
    "url": "assets/js/91.5c16866d.js",
    "revision": "06c6b8353f6289582efa04db6f62e828"
  },
  {
    "url": "assets/js/92.d93ea282.js",
    "revision": "a24b4c9370be9706519a74b743f26015"
  },
  {
    "url": "assets/js/93.2f3beebf.js",
    "revision": "2800b166f417ac8c9db99786ad5b94f1"
  },
  {
    "url": "assets/js/94.c41848f6.js",
    "revision": "4567cdd99c72544c0ad0507b5207b66f"
  },
  {
    "url": "assets/js/95.46fcbeea.js",
    "revision": "76c33b3df3f03fe01ab6149ca470aa04"
  },
  {
    "url": "assets/js/96.199aa059.js",
    "revision": "993873877b37758e44dcc3fd4c1b9e78"
  },
  {
    "url": "assets/js/97.a9e8b691.js",
    "revision": "a180668fcb13a657dc1a4a38b959d0bf"
  },
  {
    "url": "assets/js/98.90bd4644.js",
    "revision": "e9d1dc6396c9fa567677edd0cebb2c2a"
  },
  {
    "url": "assets/js/99.b05ac2ff.js",
    "revision": "908713a4dba1138ad2dd514fbfbfa91e"
  },
  {
    "url": "assets/js/app.d250393d.js",
    "revision": "6c2311c26b4038608e9088a5ba7b0e8e"
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
    "revision": "7ebeccd64fb562e4c709743a327ab8b6"
  },
  {
    "url": "lecture/api-pay-rest-1.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/api-pay-rest-2.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/api-pay-rest-3.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/api-pay-rest-4.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-basic-syntax.html",
    "revision": "9f108e306ceb1888a2df13debc26a7a0"
  },
  {
    "url": "lecture/css-cascade-rules.html",
    "revision": "b9bfd35d8285e6cde165bdadaf93c4f0"
  },
  {
    "url": "lecture/css-inheritance.html",
    "revision": "c82727d10bb84322b3cf1564fdb5ac10"
  },
  {
    "url": "lecture/css-pay-2d-transform-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-3d-transform-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-animation-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-background.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-border-image.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-box-model.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-flexbox-layout.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-form-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-gradients-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-grid-layout.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-layout-floating.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-layout-positining.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-list-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-multi-column.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-table-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-transition-styling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-pay-typography.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/css-selector.html",
    "revision": "bf55d69ba9dfb2d3e989abcdeff7042e"
  },
  {
    "url": "lecture/css-standards.html",
    "revision": "85823a7a4c5087af8694a2d573d865e9"
  },
  {
    "url": "lecture/ds-intro.html",
    "revision": "09ef68c6d5eb021b3bba30f878411157"
  },
  {
    "url": "lecture/ds-pay-about.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-accordion.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-apply.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-color-foundation.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-download.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-figma-tokens.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-footer.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-grid.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-hand-off.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-header.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-inspection.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-pages.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-spacing.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-typography.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-version-history.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-pay-viual-banner.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/ds-what-is-design-system.html",
    "revision": "d773283973dd6df1028af0a8d1ab103f"
  },
  {
    "url": "lecture/es6-iife2block.html",
    "revision": "86c4bc71012f06b7936d4a6baede390b"
  },
  {
    "url": "lecture/es6-intro.html",
    "revision": "cfa777b803c56dbbf63bfd2c24c799eb"
  },
  {
    "url": "lecture/es6-let-const.html",
    "revision": "c6e98074c5755680707e4d43e9f627a1"
  },
  {
    "url": "lecture/es6-pay-array-additions.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-array-useful.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-arrow-function.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-asyncawait.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-babel.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-class.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-default-parameter.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-destructuring-assignment.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-eslint.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-for-of.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-generator.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-iteration.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-map.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-module.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-object-enhancements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-object-iteration.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-promise.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-rest-parameter.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-set.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-shorthand-properties.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-spread-operator.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-string-additions.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-symbol.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-weakmap.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-weakset.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-pay-webpack.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/es6-template-literal.html",
    "revision": "b231aaf902059bd3cdc44f1e42bef44e"
  },
  {
    "url": "lecture/gsap-download-gsap.html",
    "revision": "9929ce058546448298c6749f661586b4"
  },
  {
    "url": "lecture/gsap-getting-started.html",
    "revision": "2768bb3f6d97c9297dffafb587822606"
  },
  {
    "url": "lecture/gsap-tweenlite-to.html",
    "revision": "49006ecab9a0cde2a2e852ad8f055102"
  },
  {
    "url": "lecture/html-anchor-link.html",
    "revision": "bf124f7e45f2a7d4ae6e1665603e1023"
  },
  {
    "url": "lecture/html-basic-syntax.html",
    "revision": "16158e414f2e5b519d935ad82946c931"
  },
  {
    "url": "lecture/html-dtd-standard-document.html",
    "revision": "ae227c822252c3dfd2e9311be568933d"
  },
  {
    "url": "lecture/html-headings-paragraph.html",
    "revision": "d991d4e40cccfbae2d05d2fcf6177917"
  },
  {
    "url": "lecture/html-image-figure-caption.html",
    "revision": "b6bc558b3c825be997bb1fb52d087adf"
  },
  {
    "url": "lecture/html-index.html",
    "revision": "18712372ac49dd686dd7e0fc8f461fe5"
  },
  {
    "url": "lecture/html-lang-attribute.html",
    "revision": "195d7b31d7937ff58994fc8a7d74e0e9"
  },
  {
    "url": "lecture/html-lists-definition.html",
    "revision": "66151bfaee91d0045bf95f1eef16d0b0"
  },
  {
    "url": "lecture/html-lists.html",
    "revision": "1fe022b9336eecd5867f9a9027bcea46"
  },
  {
    "url": "lecture/html-pay-container-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-embeded-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-form-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-grouping-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-interactive-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-metadata.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-scripting-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-section-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-tabular-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-text-level-elements.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pay-user-interaction-attributes.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/html-pharasing.html",
    "revision": "eae4b5cade7dd65776be9ef83c85efdd"
  },
  {
    "url": "lecture/html-quotation-line-break.html",
    "revision": "e52c9a9ae82c4eb2c6c3231e4f92019b"
  },
  {
    "url": "lecture/html-semantic-markup.html",
    "revision": "fd0a7b6074231ce6e3f4e4b12ba9bd3c"
  },
  {
    "url": "lecture/html-validation.html",
    "revision": "48795b452a8509778801ea4e701b9394"
  },
  {
    "url": "lecture/html-without-closing-tag.html",
    "revision": "9839fe96762ee80743c7d3dd9e0e0a3c"
  },
  {
    "url": "lecture/index.html",
    "revision": "41776429d93b52a997cabc4db6d9ef49"
  },
  {
    "url": "lecture/js-best-book.html",
    "revision": "1be07baa6e5f2800df1b344e1dda69c0"
  },
  {
    "url": "lecture/js-comment-debugging.html",
    "revision": "714ef26a815816bcbd5eda926783849b"
  },
  {
    "url": "lecture/js-data-types.html",
    "revision": "7ef7ffbd58a6cfe5c68aadaa8b2b858d"
  },
  {
    "url": "lecture/js-declare-assignment.html",
    "revision": "ba2506047f8b01255905f4d32a0e438c"
  },
  {
    "url": "lecture/js-dynamic-type.html",
    "revision": "41ff052c554a215ce626d4f96bb9c2d7"
  },
  {
    "url": "lecture/js-intro.html",
    "revision": "ccf817cceeee28d7cee09a07d114d099"
  },
  {
    "url": "lecture/js-naming.html",
    "revision": "1a0e4bbd0984d1512ecbe154eb43d6fa"
  },
  {
    "url": "lecture/js-pay-ajax-1.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-ajax-2.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-ajax-3.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-ajax-4.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-ajax-5.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-array-loop.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-array-object.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-closure.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-condition-operator.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-condition-processing.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-condition-switch.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-constructor-prototype.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-dom-part-1.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-dom-part-2.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-dom-part-3.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-dom-part-4.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-dom-part-5.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-event-handling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-function-object.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-function.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-functional-vs-oop.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-get-access-dom.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-hoist-chaining.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-iife.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-key-event-handling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-mouse-event-handling.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-number-math.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-object-inherit.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming-term.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-object-oriented-programming.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-pass-by-value-reference.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-scope-function-block.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-section-3-expression.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-string.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-pay-when-to-run.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/js-problem-same-name.html",
    "revision": "3f97f000e19d203ab7152efbf9db62d8"
  },
  {
    "url": "lecture/js-start-interaction.html",
    "revision": "d287a182a8df76a78f057ce1b77cad7f"
  },
  {
    "url": "lecture/js-warming-up.html",
    "revision": "7fd1b4694abda8d9198ab07686d1ae0b"
  },
  {
    "url": "lecture/mission-css-01.html",
    "revision": "2dd6d11d9f09fd1a0461b230b3f43d70"
  },
  {
    "url": "lecture/mission-css-02.html",
    "revision": "9faa2b1d90da6115c6179267af6d3ebb"
  },
  {
    "url": "lecture/mission-html-01.html",
    "revision": "20409d113113d35bceafa09f0bf4ad8a"
  },
  {
    "url": "lecture/mission-html-02.html",
    "revision": "ba053eaae269da1c2dab109f1c29e0a7"
  },
  {
    "url": "lecture/mission-html-03.html",
    "revision": "aadf5bca800b314a5d83d72df7bfa484"
  },
  {
    "url": "lecture/mission-html-04.html",
    "revision": "aa0d065978c092aaa7fccc9975465f51"
  },
  {
    "url": "lecture/mission-html-05.html",
    "revision": "07032087fb70fd71ef78cdf695e45820"
  },
  {
    "url": "lecture/mission-html-06.html",
    "revision": "f19b427e49eddf44bf0d26a829bf00e8"
  },
  {
    "url": "lecture/mission-html-07.html",
    "revision": "18030df518d60f06cc688c2852124e90"
  },
  {
    "url": "lecture/mission-html-08.html",
    "revision": "9a4edacf9b80cdd1023ee29396166094"
  },
  {
    "url": "lecture/mission-html-09.html",
    "revision": "b7d7695e2362ec35e06bd493eb2d0971"
  },
  {
    "url": "lecture/mission-html-10.html",
    "revision": "677d6963bc1ad59c2f1b5f6797e59460"
  },
  {
    "url": "lecture/mission-html-11.html",
    "revision": "669d41c7b27aa7df26f1af377846cadd"
  },
  {
    "url": "lecture/pre-index.html",
    "revision": "05c123029aeb0698edcdc15a25514c94"
  },
  {
    "url": "lecture/pre-what-do-i-need.html",
    "revision": "3b2c4f7ade957125ccf61454d7dba45a"
  },
  {
    "url": "lecture/rwd-intro.html",
    "revision": "8185e7cfeae53b397f58df96ad04e08a"
  },
  {
    "url": "lecture/rwd-pay-breakpoint.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-content-choreography.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-croped-images.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-dip.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-fluid-grids.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-fluid-images.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/rwd-pay-fluid-media.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-embed-html.html",
    "revision": "95b55a432569092baa1195c92367951d"
  },
  {
    "url": "lecture/svg-getting-started.html",
    "revision": "8688cec3d873c928216c2b035547c23b"
  },
  {
    "url": "lecture/svg-pay-animation-css.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-animation-smil.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-container.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-drawing.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-effects.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-illustrator.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-line-path-animation.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-sprites.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/svg-pay-viewport-viewbox.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
  },
  {
    "url": "lecture/vcs-git-gui.html",
    "revision": "023f26ea0716a1213c25a4f6c07dfbb7"
  },
  {
    "url": "lecture/vcs-git.html",
    "revision": "5f9e03aa5c41e3ba0d299ba738030fe6"
  },
  {
    "url": "lecture/vcs-github-collaboration.html",
    "revision": "ccb9608d4ad562174b5457f79d72e984"
  },
  {
    "url": "lecture/vcs-github-project-board.html",
    "revision": "9552899e278685ceb0cc26e0243d2b80"
  },
  {
    "url": "lecture/vcs-github.html",
    "revision": "29b70ce2b34df6b63af2a1fea608ed0c"
  },
  {
    "url": "lecture/vcs-open-source-contribute.html",
    "revision": "1d2d9219c98ce42bdbf4a258ec421e55"
  },
  {
    "url": "payment-information.html",
    "revision": "f218e6d77b5b40395faeb3fff6d3ee4a"
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
