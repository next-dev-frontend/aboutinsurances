if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/295.514ab4941cbde6e0.js",revision:"514ab4941cbde6e0"},{url:"/_next/static/chunks/321.6b74ffbb5a31a7c9.js",revision:"6b74ffbb5a31a7c9"},{url:"/_next/static/chunks/331.11b806fd02828974.js",revision:"11b806fd02828974"},{url:"/_next/static/chunks/380.16f57b23b34e1cbf.js",revision:"16f57b23b34e1cbf"},{url:"/_next/static/chunks/383.a10406261c2ae3ee.js",revision:"a10406261c2ae3ee"},{url:"/_next/static/chunks/584.473965c41e5b7ecd.js",revision:"473965c41e5b7ecd"},{url:"/_next/static/chunks/654.5c270bb6790f52fe.js",revision:"5c270bb6790f52fe"},{url:"/_next/static/chunks/698.d4bce7bd97d6f19a.js",revision:"d4bce7bd97d6f19a"},{url:"/_next/static/chunks/755-c1a61f50c596613c.js",revision:"c1a61f50c596613c"},{url:"/_next/static/chunks/958.48017f73384e4b01.js",revision:"48017f73384e4b01"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-55d5add525f0f97d.js",revision:"55d5add525f0f97d"},{url:"/_next/static/chunks/pages/_app-e41fe83c3174bbe1.js",revision:"e41fe83c3174bbe1"},{url:"/_next/static/chunks/pages/_error-7cc79ac3574486ac.js",revision:"7cc79ac3574486ac"},{url:"/_next/static/chunks/pages/index-6e94d97eef16f78b.js",revision:"6e94d97eef16f78b"},{url:"/_next/static/chunks/pages/offline-6d941e729c6b415a.js",revision:"6d941e729c6b415a"},{url:"/_next/static/chunks/pages/page404-9d33a9652e122be1.js",revision:"9d33a9652e122be1"},{url:"/_next/static/chunks/pages/page500-e7046fe21177747a.js",revision:"e7046fe21177747a"},{url:"/_next/static/chunks/pages/policy-9c00dee7fe7a7d51.js",revision:"9c00dee7fe7a7d51"},{url:"/_next/static/chunks/pages/terms-6433895f98eb1ece.js",revision:"6433895f98eb1ece"},{url:"/_next/static/chunks/pages/tips/teste-102ef59ba1e28efc.js",revision:"102ef59ba1e28efc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f49e78a90339c045.js",revision:"f49e78a90339c045"},{url:"/_next/static/css/b0425bae981ae6ec.css",revision:"b0425bae981ae6ec"},{url:"/_next/static/k1RYxIP8w7KiaGauaZG5f/_buildManifest.js",revision:"53e29cf1821438ace26182542367bf78"},{url:"/_next/static/k1RYxIP8w7KiaGauaZG5f/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/logo-about-insurances.webp",revision:"ee248c4bd92dac2ad0947720c2a9da44"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/logos/maskable.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/manifest.json",revision:"2e374f47a31e4b1077bfdc981b14c77f"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"92ac1f1c85bc7de4c335522843b75aba"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
