if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>a(e,n),r={module:{uri:n},exports:o,require:t};s[n]=Promise.all(c.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Gtsk1Gwlp0mIGdZxe_YDG/_buildManifest.js",revision:"2bc9e4704d1afa87dcf9eba0139d6ad9"},{url:"/_next/static/Gtsk1Gwlp0mIGdZxe_YDG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/168.f3647cfee5dd5c96.js",revision:"f3647cfee5dd5c96"},{url:"/_next/static/chunks/172.2d3c5d9bf76a30a5.js",revision:"2d3c5d9bf76a30a5"},{url:"/_next/static/chunks/224.6fa54615754918b0.js",revision:"6fa54615754918b0"},{url:"/_next/static/chunks/298.b0cbd0bd5f9024d2.js",revision:"b0cbd0bd5f9024d2"},{url:"/_next/static/chunks/39.43d7c23b90992fbc.js",revision:"43d7c23b90992fbc"},{url:"/_next/static/chunks/414.d9ef422d85f300b4.js",revision:"d9ef422d85f300b4"},{url:"/_next/static/chunks/474.e033bab927b180e1.js",revision:"e033bab927b180e1"},{url:"/_next/static/chunks/476.e85d464a79053c3e.js",revision:"e85d464a79053c3e"},{url:"/_next/static/chunks/50.f907ff5b64f2c779.js",revision:"f907ff5b64f2c779"},{url:"/_next/static/chunks/534.985688f2d030e774.js",revision:"985688f2d030e774"},{url:"/_next/static/chunks/582.8829e9652654ad64.js",revision:"8829e9652654ad64"},{url:"/_next/static/chunks/651.412a32fde78b36e0.js",revision:"412a32fde78b36e0"},{url:"/_next/static/chunks/675-f51ba993ea047804.js",revision:"f51ba993ea047804"},{url:"/_next/static/chunks/805.0b8ca3570f3bb86f.js",revision:"0b8ca3570f3bb86f"},{url:"/_next/static/chunks/809.5e4447e1d3eff3dd.js",revision:"5e4447e1d3eff3dd"},{url:"/_next/static/chunks/846.3bc3e99bacd0dade.js",revision:"3bc3e99bacd0dade"},{url:"/_next/static/chunks/867.545c1c037aa27e05.js",revision:"545c1c037aa27e05"},{url:"/_next/static/chunks/875.f4652c63eb7f2ee4.js",revision:"f4652c63eb7f2ee4"},{url:"/_next/static/chunks/922.c8aa0061868a6ec5.js",revision:"c8aa0061868a6ec5"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-0961d40cd55c97f5.js",revision:"0961d40cd55c97f5"},{url:"/_next/static/chunks/pages/404-b1c7634fc47840a4.js",revision:"b1c7634fc47840a4"},{url:"/_next/static/chunks/pages/500-8c0d93f53e755ee5.js",revision:"8c0d93f53e755ee5"},{url:"/_next/static/chunks/pages/_app-4b7dc0955934650e.js",revision:"4b7dc0955934650e"},{url:"/_next/static/chunks/pages/_error-1a5ee65903ffb785.js",revision:"1a5ee65903ffb785"},{url:"/_next/static/chunks/pages/index-2bc3f91d00eb1abf.js",revision:"2bc3f91d00eb1abf"},{url:"/_next/static/chunks/pages/politica-29c1fdc40a1805df.js",revision:"29c1fdc40a1805df"},{url:"/_next/static/chunks/pages/termos-81921b4ff31b7f28.js",revision:"81921b4ff31b7f28"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-dc2ed0681ebea990.js",revision:"dc2ed0681ebea990"},{url:"/_next/static/css/3c4bb6ec08cee7d1.css",revision:"3c4bb6ec08cee7d1"},{url:"/_next/static/media/foto-matheus.bbfa9594.webp",revision:"535d61847c36c484ecd511b8e5a0cc4a"},{url:"/_next/static/media/img2-nature.c19a7c14.webp",revision:"5c8bc6b0bef6b88dfc48ca36290d80ab"},{url:"/_next/static/media/logo-analise-agua.e47c01c7.webp",revision:"ecd902410ee8d0e01d8d3ffd12f4c9fa"},{url:"/_next/static/media/logo-brasil-jr.0916638c.webp",revision:"7e4c8c9430f9ad9d4b807fa2f45d087a"},{url:"/_next/static/media/logo-celeste.e1b9a5a5.webp",revision:"6f2262f1ae1334326b42de2e4267f7c4"},{url:"/_next/static/media/logo-consultbio-jr.b86f1a7b.webp",revision:"0148eb33bd6a0fecb9034e5ec1266a98"},{url:"/_next/static/media/logo-ecoturismo.58d8e876.webp",revision:"9b45adbcd1f0ac93cbb22ad9f26afc6b"},{url:"/_next/static/media/logo-gerenciamento-residuos.1280d475.webp",revision:"04a5a3b952812b0389fd107211fc6cb8"},{url:"/_next/static/media/logo-google.b693d89d.webp",revision:"bcdf7b20b00745235a3748a53bac835a"},{url:"/_next/static/media/logo-green-clover.92c48965.webp",revision:"7a21666549467b8b9c8c5412fc24b8e3"},{url:"/_next/static/media/logo-jardinagem.8a1b1a4a.webp",revision:"7e0cf37d3ddd3c1e32ce7d8bd744316f"},{url:"/_next/static/media/logo-kit-ecologico.4feff454.webp",revision:"082e95726f8a0b4c58b94f6dc38c53d2"},{url:"/_next/static/media/logo-levantamento-fauna-flora.3ab36846.webp",revision:"c7b0a0ca5d5fc9b52944522bdf52ea2d"},{url:"/_next/static/media/logo-materiais-didaticos.7cdcee49.webp",revision:"ddaae0947e5c31e555bc7989894db56f"},{url:"/_next/static/media/logo-prad.bb1597fe.webp",revision:"4e01a7ff029c365b84746e3525936459"},{url:"/_next/static/media/logo-unifal-mg.766530b3.webp",revision:"612dac8f718b64a2f6b47d07cf548d7c"},{url:"/_next/static/media/navbar-bg2.17363789.webp",revision:"c403cc2d641211620fbd2ad4a7f28b13"},{url:"/banners/background-tree-flip.webp",revision:"acde8cd7f8b02232e9d4cd1922aea694"},{url:"/banners/background-tree.webp",revision:"127ea713cc43d06ed8b0955050f8f71e"},{url:"/banners/bg1-nature.webp",revision:"13e7a30ff3726906bae7ea1a1cb1fba0"},{url:"/banners/bg2-nature.webp",revision:"6790603d94ce8a5e4742881906cc414c"},{url:"/banners/bg3-nature.webp",revision:"fd020cbffd1cccf616b9826b2e4185c0"},{url:"/banners/bg4-nature-opac.webp",revision:"dfbbf6b3422a29e9e9b296290d54e52b"},{url:"/banners/bg4-nature.webp",revision:"72c29471592c60fd525677545ccb1fd5"},{url:"/banners/bg5-nature.jpg",revision:"f96ec0cea24a9edac6aec424afa499ad"},{url:"/banners/foto-matheus.webp",revision:"535d61847c36c484ecd511b8e5a0cc4a"},{url:"/banners/img1-nature.webp",revision:"3c73aa5ce68b860bc47c51a1965160bf"},{url:"/banners/img2-nature.webp",revision:"5c8bc6b0bef6b88dfc48ca36290d80ab"},{url:"/banners/navbar-bg.webp",revision:"4a02110a381ed9aec592f5d4d86c57c6"},{url:"/banners/navbar-bg2.webp",revision:"c403cc2d641211620fbd2ad4a7f28b13"},{url:"/favicon.ico",revision:"541325488c9e855113f9eef7e2a51c58"},{url:"/fonts/GlacialIndifference-Bold.woff2",revision:"4ffd79522de4703d7d6ffda40cf82085"},{url:"/fonts/GlacialIndifference-Italic.ttf",revision:"e73bd98f6a223b84bf8625552f65b989"},{url:"/fonts/GlacialIndifference-Regular.woff2",revision:"641f968292e4317f5fe94a104ca66afd"},{url:"/logos/logo-128x128.png",revision:"713e8d78f9b05f3a6d6f229232e0d983"},{url:"/logos/logo-144x144.png",revision:"af965382cb3acd7abbb5643927cb7a58"},{url:"/logos/logo-512x512.png",revision:"b49c0d4e7c2e284216b7f006ff6d5960"},{url:"/logos/logo-brasil-jr.webp",revision:"7e4c8c9430f9ad9d4b807fa2f45d087a"},{url:"/logos/logo-celeste.webp",revision:"6f2262f1ae1334326b42de2e4267f7c4"},{url:"/logos/logo-consultbio-jr.webp",revision:"0148eb33bd6a0fecb9034e5ec1266a98"},{url:"/logos/logo-consultbio-jr2.webp",revision:"7cf7e4fb28bcde4e9d44ec030a60e01e"},{url:"/logos/logo-google.webp",revision:"bcdf7b20b00745235a3748a53bac835a"},{url:"/logos/logo-green-clover.webp",revision:"7a21666549467b8b9c8c5412fc24b8e3"},{url:"/logos/logo-snake.webp",revision:"7fbfc0f7b85d8890c8db2f8eef053e54"},{url:"/logos/logo-unifal-mg.webp",revision:"612dac8f718b64a2f6b47d07cf548d7c"},{url:"/logos/logos-servicos/logo-analise-agua.webp",revision:"ecd902410ee8d0e01d8d3ffd12f4c9fa"},{url:"/logos/logos-servicos/logo-ecoturismo.webp",revision:"9b45adbcd1f0ac93cbb22ad9f26afc6b"},{url:"/logos/logos-servicos/logo-gerenciamento-residuos.webp",revision:"04a5a3b952812b0389fd107211fc6cb8"},{url:"/logos/logos-servicos/logo-jardinagem.webp",revision:"7e0cf37d3ddd3c1e32ce7d8bd744316f"},{url:"/logos/logos-servicos/logo-kit-ecologico.webp",revision:"082e95726f8a0b4c58b94f6dc38c53d2"},{url:"/logos/logos-servicos/logo-levantamento-fauna-flora.webp",revision:"c7b0a0ca5d5fc9b52944522bdf52ea2d"},{url:"/logos/logos-servicos/logo-materiais-didaticos.webp",revision:"ddaae0947e5c31e555bc7989894db56f"},{url:"/logos/logos-servicos/logo-prad.webp",revision:"4e01a7ff029c365b84746e3525936459"},{url:"/manifest.json",revision:"f262ac827efbd07aad52c79593729ac3"},{url:"/robots.txt",revision:"b64302f541ef9146330502850202af21"},{url:"/sitemap.xml",revision:"9fb59a2ce47f535ffa1be0c9700e7aa6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
