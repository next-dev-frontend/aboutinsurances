if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d0b69b17"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/E6zVt2Z3p7TFuMioVDUuz/_buildManifest.js",revision:"14626f2583bc2fc8f4a2d79c2c39d41e"},{url:"/_next/static/E6zVt2Z3p7TFuMioVDUuz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/135.b57da44e3b454b81.js",revision:"b57da44e3b454b81"},{url:"/_next/static/chunks/39.c3cfcfdf4a46b90c.js",revision:"c3cfcfdf4a46b90c"},{url:"/_next/static/chunks/458.f60bf5d10ca7047c.js",revision:"f60bf5d10ca7047c"},{url:"/_next/static/chunks/504.35b58781f92afd0e.js",revision:"35b58781f92afd0e"},{url:"/_next/static/chunks/578.38a17511c5465a20.js",revision:"38a17511c5465a20"},{url:"/_next/static/chunks/582.8441c9155e1236a4.js",revision:"8441c9155e1236a4"},{url:"/_next/static/chunks/651.412a32fde78b36e0.js",revision:"412a32fde78b36e0"},{url:"/_next/static/chunks/675-f51ba993ea047804.js",revision:"f51ba993ea047804"},{url:"/_next/static/chunks/867.1732cbc9a7b11548.js",revision:"1732cbc9a7b11548"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-99005f825820f7d9.js",revision:"99005f825820f7d9"},{url:"/_next/static/chunks/pages/_app-a8cc89b3992b5928.js",revision:"a8cc89b3992b5928"},{url:"/_next/static/chunks/pages/_error-1a5ee65903ffb785.js",revision:"1a5ee65903ffb785"},{url:"/_next/static/chunks/pages/fallback-d9aa531c3ff659e0.js",revision:"d9aa531c3ff659e0"},{url:"/_next/static/chunks/pages/index-0c9ce61ab41903c4.js",revision:"0c9ce61ab41903c4"},{url:"/_next/static/chunks/pages/page404-bab082c145d6d7e8.js",revision:"bab082c145d6d7e8"},{url:"/_next/static/chunks/pages/page500-b83a1d5ba4ad6cf6.js",revision:"b83a1d5ba4ad6cf6"},{url:"/_next/static/chunks/pages/policy-8bfafb5f502c635b.js",revision:"8bfafb5f502c635b"},{url:"/_next/static/chunks/pages/terms-87ca83bb19eba37c.js",revision:"87ca83bb19eba37c"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-43c1be8404bf484c.js",revision:"43c1be8404bf484c"},{url:"/_next/static/css/39b1475ba6767f8d.css",revision:"39b1475ba6767f8d"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/favicon.ico",revision:"0ae3f75c64dfa0cb08817bd3b7c29203"},{url:"/fonts/GlacialIndifference-Bold.woff2",revision:"4ffd79522de4703d7d6ffda40cf82085"},{url:"/fonts/GlacialIndifference-Italic.ttf",revision:"e73bd98f6a223b84bf8625552f65b989"},{url:"/fonts/GlacialIndifference-Regular.woff2",revision:"641f968292e4317f5fe94a104ca66afd"},{url:"/logos/logo-128x128.png",revision:"efb28de5a54e20485362a65f3920ccb3"},{url:"/logos/logo-144x144.png",revision:"a351435d9c1d506f679ed2c79056c4fc"},{url:"/logos/logo-512x512.png",revision:"35f146757dd28da0e9abf8fc7fc9ce4d"},{url:"/logos/logo-about-insurances.webp",revision:"16a5064fff1c50b8234f30206fcf917d"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/manifest.json",revision:"f262ac827efbd07aad52c79593729ac3"},{url:"/robots.txt",revision:"b64302f541ef9146330502850202af21"},{url:"/sitemap.xml",revision:"19c23df95f3d96b039b969cba26bf2f7"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
