if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/135.283cdefa3e761130.js",revision:"283cdefa3e761130"},{url:"/_next/static/chunks/39.d087bae945a32aba.js",revision:"d087bae945a32aba"},{url:"/_next/static/chunks/533.7f313013522a2315.js",revision:"7f313013522a2315"},{url:"/_next/static/chunks/578.1fc8bc8404973a9e.js",revision:"1fc8bc8404973a9e"},{url:"/_next/static/chunks/582.36697734602bc60f.js",revision:"36697734602bc60f"},{url:"/_next/static/chunks/651.412a32fde78b36e0.js",revision:"412a32fde78b36e0"},{url:"/_next/static/chunks/675-f51ba993ea047804.js",revision:"f51ba993ea047804"},{url:"/_next/static/chunks/867.1732cbc9a7b11548.js",revision:"1732cbc9a7b11548"},{url:"/_next/static/chunks/90.f41fe1d812701255.js",revision:"f41fe1d812701255"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-0961d40cd55c97f5.js",revision:"0961d40cd55c97f5"},{url:"/_next/static/chunks/pages/_app-d3c79f133d7a924c.js",revision:"d3c79f133d7a924c"},{url:"/_next/static/chunks/pages/_error-1a5ee65903ffb785.js",revision:"1a5ee65903ffb785"},{url:"/_next/static/chunks/pages/index-bb3c322103bcc858.js",revision:"bb3c322103bcc858"},{url:"/_next/static/chunks/pages/page404-ed5f470160d0ca39.js",revision:"ed5f470160d0ca39"},{url:"/_next/static/chunks/pages/page500-732f8af173eb7991.js",revision:"732f8af173eb7991"},{url:"/_next/static/chunks/pages/policy-723a37b60429c45e.js",revision:"723a37b60429c45e"},{url:"/_next/static/chunks/pages/terms-2d121ffdbc273ba8.js",revision:"2d121ffdbc273ba8"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-8ed651afd75f4148.js",revision:"8ed651afd75f4148"},{url:"/_next/static/css/b9bfcf545e476b1f.css",revision:"b9bfcf545e476b1f"},{url:"/_next/static/media/bg-insurances.1e2e6a5a.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/_next/static/media/business-template2.a88330b2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/_next/static/media/kaspersky-template.2e43a6c6.webp",revision:"edeb9c284322833709005957b23c856f"},{url:"/_next/static/media/logo-about-insurances.1b6da47b.webp",revision:"16a5064fff1c50b8234f30206fcf917d"},{url:"/_next/static/media/logo-google.c02c9401.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/_next/static/tsNGJZG4P_I16k5YFMdOu/_buildManifest.js",revision:"23331deda203e3e5a9b99a85137941b1"},{url:"/_next/static/tsNGJZG4P_I16k5YFMdOu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/favicon.ico",revision:"0ae3f75c64dfa0cb08817bd3b7c29203"},{url:"/fonts/GlacialIndifference-Bold.woff2",revision:"4ffd79522de4703d7d6ffda40cf82085"},{url:"/fonts/GlacialIndifference-Italic.ttf",revision:"e73bd98f6a223b84bf8625552f65b989"},{url:"/fonts/GlacialIndifference-Regular.woff2",revision:"641f968292e4317f5fe94a104ca66afd"},{url:"/logos/logo-128x128.png",revision:"efb28de5a54e20485362a65f3920ccb3"},{url:"/logos/logo-144x144.png",revision:"a351435d9c1d506f679ed2c79056c4fc"},{url:"/logos/logo-512x512.png",revision:"35f146757dd28da0e9abf8fc7fc9ce4d"},{url:"/logos/logo-about-insurances.webp",revision:"16a5064fff1c50b8234f30206fcf917d"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/manifest.json",revision:"f262ac827efbd07aad52c79593729ac3"},{url:"/robots.txt",revision:"b64302f541ef9146330502850202af21"},{url:"/sitemap.xml",revision:"19c23df95f3d96b039b969cba26bf2f7"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
