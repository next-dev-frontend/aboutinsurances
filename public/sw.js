if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9JIISFvhCbF2Vv3_NtA8j/_buildManifest.js",revision:"ce96f832b2aa26e2a41a2ba2d3b78342"},{url:"/_next/static/9JIISFvhCbF2Vv3_NtA8j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/10.f716a56173b22525.js",revision:"f716a56173b22525"},{url:"/_next/static/chunks/230.24eb5cd96c2df300.js",revision:"24eb5cd96c2df300"},{url:"/_next/static/chunks/274.f50ac661311506f4.js",revision:"f50ac661311506f4"},{url:"/_next/static/chunks/348.f96662850e0ff8c3.js",revision:"f96662850e0ff8c3"},{url:"/_next/static/chunks/376.7310d98a2dada314.js",revision:"7310d98a2dada314"},{url:"/_next/static/chunks/675-5dc8bf761b98db77.js",revision:"5dc8bf761b98db77"},{url:"/_next/static/chunks/751.274e5746a51508dc.js",revision:"274e5746a51508dc"},{url:"/_next/static/chunks/979.a88f704abc50f3fc.js",revision:"a88f704abc50f3fc"},{url:"/_next/static/chunks/framework-caa50651a91d07b1.js",revision:"caa50651a91d07b1"},{url:"/_next/static/chunks/main-4d28554435b92d82.js",revision:"4d28554435b92d82"},{url:"/_next/static/chunks/pages/_app-7b14b977e8a5075b.js",revision:"7b14b977e8a5075b"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-a390b06f5a24cc18.js",revision:"a390b06f5a24cc18"},{url:"/_next/static/chunks/pages/offline-9bdd88c96c4d3f08.js",revision:"9bdd88c96c4d3f08"},{url:"/_next/static/chunks/pages/page404-19ba896cab4aa12e.js",revision:"19ba896cab4aa12e"},{url:"/_next/static/chunks/pages/page500-39b53f30933a2d74.js",revision:"39b53f30933a2d74"},{url:"/_next/static/chunks/pages/policy-6448bb4445a0e0dd.js",revision:"6448bb4445a0e0dd"},{url:"/_next/static/chunks/pages/terms-588c997e78ffcebe.js",revision:"588c997e78ffcebe"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-750f2976f1d574ec.js",revision:"750f2976f1d574ec"},{url:"/_next/static/css/ff6275e6af8b1db7.css",revision:"ff6275e6af8b1db7"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/fonts/GlacialIndifference-Bold.woff2",revision:"4ffd79522de4703d7d6ffda40cf82085"},{url:"/fonts/GlacialIndifference-Italic.ttf",revision:"e73bd98f6a223b84bf8625552f65b989"},{url:"/fonts/GlacialIndifference-Regular.woff2",revision:"641f968292e4317f5fe94a104ca66afd"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/logo-about-insurances.webp",revision:"ee248c4bd92dac2ad0947720c2a9da44"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/logos/maskable.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/manifest.json",revision:"dda29775a0d400df1ba4ab71691c5c3a"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"5d7f1ab503b7b024d55579b8cef3ad8e"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
