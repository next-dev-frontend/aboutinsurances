if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NXZ6yQWcgsTRwIe0YqLBz/_buildManifest.js",revision:"2e4fd0af4a65f10b2992ee79ac34d80c"},{url:"/_next/static/NXZ6yQWcgsTRwIe0YqLBz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/225.2fcb383e000b6759.js",revision:"2fcb383e000b6759"},{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/295.c43fbdc8fcdc684d.js",revision:"c43fbdc8fcdc684d"},{url:"/_next/static/chunks/321.028dff26f671ce73.js",revision:"028dff26f671ce73"},{url:"/_next/static/chunks/331.26fd280236f48f70.js",revision:"26fd280236f48f70"},{url:"/_next/static/chunks/380.b9da48b8f9b99f99.js",revision:"b9da48b8f9b99f99"},{url:"/_next/static/chunks/383.42aaa9e669487510.js",revision:"42aaa9e669487510"},{url:"/_next/static/chunks/411.0b9b42f3ef8db0c3.js",revision:"0b9b42f3ef8db0c3"},{url:"/_next/static/chunks/489.d3778bca13ad6d8d.js",revision:"d3778bca13ad6d8d"},{url:"/_next/static/chunks/544.4fbb368c475e8cd8.js",revision:"4fbb368c475e8cd8"},{url:"/_next/static/chunks/584.f7238f966860fe98.js",revision:"f7238f966860fe98"},{url:"/_next/static/chunks/664-37800d06f0938607.js",revision:"37800d06f0938607"},{url:"/_next/static/chunks/698.6343bfd066c936de.js",revision:"6343bfd066c936de"},{url:"/_next/static/chunks/755-c1a61f50c596613c.js",revision:"c1a61f50c596613c"},{url:"/_next/static/chunks/836.120b575877799364.js",revision:"120b575877799364"},{url:"/_next/static/chunks/962.319c6c7c18e0dcff.js",revision:"319c6c7c18e0dcff"},{url:"/_next/static/chunks/framework-305cb810cde7afac.js",revision:"305cb810cde7afac"},{url:"/_next/static/chunks/main-d6164e3cbdbe0e86.js",revision:"d6164e3cbdbe0e86"},{url:"/_next/static/chunks/pages/404-d70f76419c651cda.js",revision:"d70f76419c651cda"},{url:"/_next/static/chunks/pages/500-dc5984851cc03a3a.js",revision:"dc5984851cc03a3a"},{url:"/_next/static/chunks/pages/_app-8677d99dbf6ebf88.js",revision:"8677d99dbf6ebf88"},{url:"/_next/static/chunks/pages/_error-2cc5c76b30a7946a.js",revision:"2cc5c76b30a7946a"},{url:"/_next/static/chunks/pages/index-59c07f74bda94512.js",revision:"59c07f74bda94512"},{url:"/_next/static/chunks/pages/offline-d96ee64581c02db8.js",revision:"d96ee64581c02db8"},{url:"/_next/static/chunks/pages/policy-880026b20dc445fe.js",revision:"880026b20dc445fe"},{url:"/_next/static/chunks/pages/terms-b17d5961531a94e2.js",revision:"b17d5961531a94e2"},{url:"/_next/static/chunks/pages/tips/cheapest-car-insurance-companies-1823b4ae7197980e.js",revision:"1823b4ae7197980e"},{url:"/_next/static/chunks/pages/tips/how-do-car-insurances-work-6163550d5899be3c.js",revision:"6163550d5899be3c"},{url:"/_next/static/chunks/pages/tips/the-value-of-life-insurance-343721b500d0f88b.js",revision:"343721b500d0f88b"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c414f5b204adf750.js",revision:"c414f5b204adf750"},{url:"/_next/static/css/259092141838ffc5.css",revision:"259092141838ffc5"},{url:"/backgrounds/bg-insurances.jpeg",revision:"f798502df9a06738ba93d2ae6409b56a"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/cards/post-card1.webp",revision:"35a8fcd569a87753d4c3d218cc04b7ef"},{url:"/cards/post-card2.webp",revision:"acf67f648393e6be070539d85a9e6d8e"},{url:"/cards/post-card3.webp",revision:"aba1321b9fd6f4fd59663445fa1b3cd9"},{url:"/cards/post-card4.webp",revision:"9cb1e66338966d01b20b57f4cd946c6a"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/logo-about-insurances.webp",revision:"ee248c4bd92dac2ad0947720c2a9da44"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/logos/maskable.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/manifest.json",revision:"40dec9394b27060ea68b7a899cbfcbad"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"b81382519a75aebfc3e14f17c28e2a90"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
