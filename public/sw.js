if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),u={module:{uri:i},exports:r,require:t};s[i]=Promise.all(c.map((e=>u[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ABcgDP9eRk3aAec5o48pO/_buildManifest.js",revision:"e64f6ba56d17c1ad8896eacefb129d89"},{url:"/_next/static/ABcgDP9eRk3aAec5o48pO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1249.c1743512a70fe5f9.js",revision:"c1743512a70fe5f9"},{url:"/_next/static/chunks/1489.8fd4a8173fe103d8.js",revision:"8fd4a8173fe103d8"},{url:"/_next/static/chunks/1614.b36543ecb347435a.js",revision:"b36543ecb347435a"},{url:"/_next/static/chunks/1664-bc86c3e1ed8f2eb6.js",revision:"bc86c3e1ed8f2eb6"},{url:"/_next/static/chunks/1693-5e5b066b537baab0.js",revision:"5e5b066b537baab0"},{url:"/_next/static/chunks/1818.26fc21febec32f1a.js",revision:"26fc21febec32f1a"},{url:"/_next/static/chunks/1843.1936ffa14e480fa9.js",revision:"1936ffa14e480fa9"},{url:"/_next/static/chunks/1bfc9850.06ea4e7b138130e3.js",revision:"06ea4e7b138130e3"},{url:"/_next/static/chunks/2321.aad11030ca985872.js",revision:"aad11030ca985872"},{url:"/_next/static/chunks/29107295.519550f057da9cd1.js",revision:"519550f057da9cd1"},{url:"/_next/static/chunks/2962-7c190c8b4c950cb6.js",revision:"7c190c8b4c950cb6"},{url:"/_next/static/chunks/4331.89b4dc1f127fca18.js",revision:"89b4dc1f127fca18"},{url:"/_next/static/chunks/4386-44d9f969ad5ecf85.js",revision:"44d9f969ad5ecf85"},{url:"/_next/static/chunks/5567-fedcd6fc25278d66.js",revision:"fedcd6fc25278d66"},{url:"/_next/static/chunks/584.dbc1af6b11b805ef.js",revision:"dbc1af6b11b805ef"},{url:"/_next/static/chunks/6698.5829a7c783a54d2f.js",revision:"5829a7c783a54d2f"},{url:"/_next/static/chunks/7383.91068d194b704708.js",revision:"91068d194b704708"},{url:"/_next/static/chunks/8295.e380d5dc450bc24b.js",revision:"e380d5dc450bc24b"},{url:"/_next/static/chunks/8544.b2170ecc70f9564e.js",revision:"b2170ecc70f9564e"},{url:"/_next/static/chunks/8841.5722359dde9ce879.js",revision:"5722359dde9ce879"},{url:"/_next/static/chunks/9514.e67b0f351c582c45.js",revision:"e67b0f351c582c45"},{url:"/_next/static/chunks/9755-7d17504022e9f143.js",revision:"7d17504022e9f143"},{url:"/_next/static/chunks/98-3aabda495ed730ce.js",revision:"3aabda495ed730ce"},{url:"/_next/static/chunks/9836.61f2e0806cc9f51c.js",revision:"61f2e0806cc9f51c"},{url:"/_next/static/chunks/framework-e060caed557d1899.js",revision:"e060caed557d1899"},{url:"/_next/static/chunks/main-28b103ac09492071.js",revision:"28b103ac09492071"},{url:"/_next/static/chunks/pages/404-b8632e35741672da.js",revision:"b8632e35741672da"},{url:"/_next/static/chunks/pages/500-ffc20d0ad1fb09f2.js",revision:"ffc20d0ad1fb09f2"},{url:"/_next/static/chunks/pages/_app-72493a8c5aa99ef8.js",revision:"72493a8c5aa99ef8"},{url:"/_next/static/chunks/pages/_error-715d859246d3bc6e.js",revision:"715d859246d3bc6e"},{url:"/_next/static/chunks/pages/articles/a-comprehensive-guide-to-travel-insurance-1e15c9d73fcfe4aa.js",revision:"1e15c9d73fcfe4aa"},{url:"/_next/static/chunks/pages/articles/affordable-pet-insurance-9b082ce44001af6e.js",revision:"9b082ce44001af6e"},{url:"/_next/static/chunks/pages/articles/avoiding-insurance-scams-fea12060de3eb9d5.js",revision:"fea12060de3eb9d5"},{url:"/_next/static/chunks/pages/articles/car-insurance-a0167420dd11a6c7.js",revision:"a0167420dd11a6c7"},{url:"/_next/static/chunks/pages/articles/car-insurance-claims-49be79b99ce685f9.js",revision:"49be79b99ce685f9"},{url:"/_next/static/chunks/pages/articles/car-insurance-comparison-509d12d2b468264e.js",revision:"509d12d2b468264e"},{url:"/_next/static/chunks/pages/articles/choosing-the-right-insurance-a2d5f848f0aad9b7.js",revision:"a2d5f848f0aad9b7"},{url:"/_next/static/chunks/pages/articles/comprehensive-guide-to-pet-insurance-0e1ec6a9f248c0b8.js",revision:"0e1ec6a9f248c0b8"},{url:"/_next/static/chunks/pages/articles/comprehensive-workers-bd93379296443eb7.js",revision:"bd93379296443eb7"},{url:"/_next/static/chunks/pages/articles/customized-insurance-for-small-business-owners-fb426202b4292491.js",revision:"fb426202b4292491"},{url:"/_next/static/chunks/pages/articles/decoding-insurance-jargon-84f3e1968996968a.js",revision:"84f3e1968996968a"},{url:"/_next/static/chunks/pages/articles/decoding-the-factors-behind-insurance-8d55114682edefce.js",revision:"8d55114682edefce"},{url:"/_next/static/chunks/pages/articles/demystified-travel-insurance-4fc817250e9fd57c.js",revision:"4fc817250e9fd57c"},{url:"/_next/static/chunks/pages/articles/demystifying-car-insurance-myths-7f6d7ad51249b459.js",revision:"7f6d7ad51249b459"},{url:"/_next/static/chunks/pages/articles/demystifying-motorcycle-insurance-f1564c0cd3fa64bd.js",revision:"f1564c0cd3fa64bd"},{url:"/_next/static/chunks/pages/articles/demystifying-the-claims-process-ad53cc886ac7b861.js",revision:"ad53cc886ac7b861"},{url:"/_next/static/chunks/pages/articles/eco-friendly-auto-insurance-4d9260888fc3d69b.js",revision:"4d9260888fc3d69b"},{url:"/_next/static/chunks/pages/articles/embracing-the-future-of-insurance-6035a7f1814bc93a.js",revision:"6035a7f1814bc93a"},{url:"/_next/static/chunks/pages/articles/enrollment-open-for-health-plan-d60b7281cb6d6a18.js",revision:"d60b7281cb6d6a18"},{url:"/_next/static/chunks/pages/articles/ensuring-your-dream-wedding-af2bb5d381b62024.js",revision:"af2bb5d381b62024"},{url:"/_next/static/chunks/pages/articles/ensuring-your-legacy-ca4f948b26458683.js",revision:"ca4f948b26458683"},{url:"/_next/static/chunks/pages/articles/essential-health-insurance-1db5411a588ba842.js",revision:"1db5411a588ba842"},{url:"/_next/static/chunks/pages/articles/essential-health-insurances-dca16f2914514e83.js",revision:"dca16f2914514e83"},{url:"/_next/static/chunks/pages/articles/exploring-homeowners-insurance-3886acd3929382ae.js",revision:"3886acd3929382ae"},{url:"/_next/static/chunks/pages/articles/exploring-insurance-bundling-38d2267b873f820c.js",revision:"38d2267b873f820c"},{url:"/_next/static/chunks/pages/articles/exploring-pet-insurance-options-106620fae8207cae.js",revision:"106620fae8207cae"},{url:"/_next/static/chunks/pages/articles/exploring-unconventional-vehicle-insurance-b59d3405149526f5.js",revision:"b59d3405149526f5"},{url:"/_next/static/chunks/pages/articles/finalizing-insurance-decisions-b935f40dd2825dbe.js",revision:"b935f40dd2825dbe"},{url:"/_next/static/chunks/pages/articles/finalizing-your-insurance-decisions-4a81a15ce50d0658.js",revision:"4a81a15ce50d0658"},{url:"/_next/static/chunks/pages/articles/freelancing-with-confidence-59f060cc41431ae2.js",revision:"59f060cc41431ae2"},{url:"/_next/static/chunks/pages/articles/get-a-quote-for-commercial-655c9aa2f956d2ce.js",revision:"655c9aa2f956d2ce"},{url:"/_next/static/chunks/pages/articles/green-living-smart-savings-141d1439bdb65337.js",revision:"141d1439bdb65337"},{url:"/_next/static/chunks/pages/articles/guarding-against-deception-93e00f8e309cce39.js",revision:"93e00f8e309cce39"},{url:"/_next/static/chunks/pages/articles/health-insurance-1fcda4d0e660f40b.js",revision:"1fcda4d0e660f40b"},{url:"/_next/static/chunks/pages/articles/health-insurance-comparison-f41a8aca8e30eeeb.js",revision:"f41a8aca8e30eeeb"},{url:"/_next/static/chunks/pages/articles/health-insurance-enrollment-f35fa8f4b79ef78c.js",revision:"f35fa8f4b79ef78c"},{url:"/_next/static/chunks/pages/articles/health-insurance-essentials-873a6ecdb40e4c57.js",revision:"873a6ecdb40e4c57"},{url:"/_next/static/chunks/pages/articles/health-insurance-made-easy-101-62d5647a941752d9.js",revision:"62d5647a941752d9"},{url:"/_next/static/chunks/pages/articles/home-insurance-claims-46c0dbcc37082f91.js",revision:"46c0dbcc37082f91"},{url:"/_next/static/chunks/pages/articles/home-insurance-d9e75bf785fdeb31.js",revision:"d9e75bf785fdeb31"},{url:"/_next/static/chunks/pages/articles/homeowners-insurance-explained-bac629a0decf3da8.js",revision:"bac629a0decf3da8"},{url:"/_next/static/chunks/pages/articles/how-to-choose-the-right-life-insurance-a31b00d9411dc3b3.js",revision:"a31b00d9411dc3b3"},{url:"/_next/static/chunks/pages/articles/insurance-fraud-014cb19a2b6328f7.js",revision:"014cb19a2b6328f7"},{url:"/_next/static/chunks/pages/articles/insuring-your-dream-car-c209f753a96b1142.js",revision:"c209f753a96b1142"},{url:"/_next/static/chunks/pages/articles/insurtech-revolution-66ab87d79570b325.js",revision:"66ab87d79570b325"},{url:"/_next/static/chunks/pages/articles/international-travel-insurance-2b1e95e38073d147.js",revision:"2b1e95e38073d147"},{url:"/_next/static/chunks/pages/articles/leveraging-insurance-for-wealth-management-a71880a9fbbaaf90.js",revision:"a71880a9fbbaaf90"},{url:"/_next/static/chunks/pages/articles/life-insurance-policies-1691662b8e47a86f.js",revision:"1691662b8e47a86f"},{url:"/_next/static/chunks/pages/articles/life-insurance-riders-cd3ca55cdf73ebc0.js",revision:"cd3ca55cdf73ebc0"},{url:"/_next/static/chunks/pages/articles/making-sense-of-life-insurance-60970c5f6d291cfc.js",revision:"60970c5f6d291cfc"},{url:"/_next/static/chunks/pages/articles/making-the-most-of-group-5eae8874d4258156.js",revision:"5eae8874d4258156"},{url:"/_next/static/chunks/pages/articles/mastering-insurance-claims-cd32bb43dc9e95ae.js",revision:"cd32bb43dc9e95ae"},{url:"/_next/static/chunks/pages/articles/mastering-insurance-shopping-8eb418c046312744.js",revision:"8eb418c046312744"},{url:"/_next/static/chunks/pages/articles/mastering-the-art-of-comparing-insurance-quotes-aa20a1d53503b451.js",revision:"aa20a1d53503b451"},{url:"/_next/static/chunks/pages/articles/maximizing-savings-c43ac8a6f6ba2dc4.js",revision:"c43ac8a6f6ba2dc4"},{url:"/_next/static/chunks/pages/articles/maximizing-savings-on-car-insurance-933df35d0098bbb1.js",revision:"933df35d0098bbb1"},{url:"/_next/static/chunks/pages/articles/more-than-dollars-87ff940e98ddf873.js",revision:"87ff940e98ddf873"},{url:"/_next/static/chunks/pages/articles/navigating-business-insurance-7adc1ea7032b4411.js",revision:"7adc1ea7032b4411"},{url:"/_next/static/chunks/pages/articles/navigating-health-insurance-for-families-47cb5e36fd870b3a.js",revision:"47cb5e36fd870b3a"},{url:"/_next/static/chunks/pages/articles/navigating-insurance-eea33888ee31f90f.js",revision:"eea33888ee31f90f"},{url:"/_next/static/chunks/pages/articles/navigating-life-events-with-insurance-2c9f92b6f3e5894a.js",revision:"2c9f92b6f3e5894a"},{url:"/_next/static/chunks/pages/articles/navigating-pregnancy-and-insurance-aa46884c6964a2b3.js",revision:"aa46884c6964a2b3"},{url:"/_next/static/chunks/pages/articles/navigating-the-complex-world-86e5623c4cd93591.js",revision:"86e5623c4cd93591"},{url:"/_next/static/chunks/pages/articles/navigating-travel-insurance-in-a-post-pandemic-world-e9801e9338b37b0e.js",revision:"e9801e9338b37b0e"},{url:"/_next/static/chunks/pages/articles/navigating-unique-74e0eaa2dc2b9644.js",revision:"74e0eaa2dc2b9644"},{url:"/_next/static/chunks/pages/articles/nomad-insurance-options-cc79d63db8c97d0d.js",revision:"cc79d63db8c97d0d"},{url:"/_next/static/chunks/pages/articles/on-the-open-road-91f0b7fb841ac217.js",revision:"91f0b7fb841ac217"},{url:"/_next/static/chunks/pages/articles/peer-to-peer-insurance-8c365e1f1658aa05.js",revision:"8c365e1f1658aa05"},{url:"/_next/static/chunks/pages/articles/pet-insurance-guide-7bd83b9fd2af2aff.js",revision:"7bd83b9fd2af2aff"},{url:"/_next/static/chunks/pages/articles/preserving-treasures-62f65aa813660bf2.js",revision:"62f65aa813660bf2"},{url:"/_next/static/chunks/pages/articles/protect-your-business-with-comprehensive-4d723a525f12da94.js",revision:"4d723a525f12da94"},{url:"/_next/static/chunks/pages/articles/protecting-your-freelance-business-033744c8c6e68896.js",revision:"033744c8c6e68896"},{url:"/_next/static/chunks/pages/articles/protecting-your-home-84a9d38f8cbafcf3.js",revision:"84a9d38f8cbafcf3"},{url:"/_next/static/chunks/pages/articles/protecting-your-home-against-natural-disasters-431133ef896a5e75.js",revision:"431133ef896a5e75"},{url:"/_next/static/chunks/pages/articles/protecting-your-treasures-2785687f41578694.js",revision:"2785687f41578694"},{url:"/_next/static/chunks/pages/articles/ready-for-the-unexpected-dd834dad345f80c6.js",revision:"dd834dad345f80c6"},{url:"/_next/static/chunks/pages/articles/revolutionizing-auto-insurance-40173df767eeff9a.js",revision:"40173df767eeff9a"},{url:"/_next/static/chunks/pages/articles/revolutionizing-insurance-with-blockchain-cae290d106f4c138.js",revision:"cae290d106f4c138"},{url:"/_next/static/chunks/pages/articles/safeguard-your-small-business-e0efc53332cea433.js",revision:"e0efc53332cea433"},{url:"/_next/static/chunks/pages/articles/safeguarding-your-joy-57cc17073d7ab170.js",revision:"57cc17073d7ab170"},{url:"/_next/static/chunks/pages/articles/saving-on-insurance-f924537c6e28d4ca.js",revision:"f924537c6e28d4ca"},{url:"/_next/static/chunks/pages/articles/secure-your-business-5af837e8ec1eb32a.js",revision:"5af837e8ec1eb32a"},{url:"/_next/static/chunks/pages/articles/securing-your-business-future-434b0c2e13dad264.js",revision:"434b0c2e13dad264"},{url:"/_next/static/chunks/pages/articles/securing-your-digital-world-6265f63815d4705d.js",revision:"6265f63815d4705d"},{url:"/_next/static/chunks/pages/articles/securing-your-family's-future-cc33701eb7d23477.js",revision:"cc33701eb7d23477"},{url:"/_next/static/chunks/pages/articles/securing-your-future-b6dc3c736be19033.js",revision:"b6dc3c736be19033"},{url:"/_next/static/chunks/pages/articles/senior-insurance-guide-e4c4281d7cb4de7a.js",revision:"e4c4281d7cb4de7a"},{url:"/_next/static/chunks/pages/articles/shield-your-business-7270f745be4c243c.js",revision:"7270f745be4c243c"},{url:"/_next/static/chunks/pages/articles/smart-homes-safer-homes-39024e37a133311d.js",revision:"39024e37a133311d"},{url:"/_next/static/chunks/pages/articles/strengthening-your-safety-net-db315bd9194a8877.js",revision:"db315bd9194a8877"},{url:"/_next/static/chunks/pages/articles/sustainable-insurance-solutions-675b34d2ad79517f.js",revision:"675b34d2ad79517f"},{url:"/_next/static/chunks/pages/articles/ten-must-have-travel-insurance-a933d9306658192d.js",revision:"a933d9306658192d"},{url:"/_next/static/chunks/pages/articles/the-abcs-of-renters-insurance-0d9cedaf6c1a087f.js",revision:"0d9cedaf6c1a087f"},{url:"/_next/static/chunks/pages/articles/the-complete-guide-to-pet-insurance-bae3f69513f36054.js",revision:"bae3f69513f36054"},{url:"/_next/static/chunks/pages/articles/the-essential-guide-dec47c02fe3d27f1.js",revision:"dec47c02fe3d27f1"},{url:"/_next/static/chunks/pages/articles/the-mind-body-connection-67c7d41114bf8bb5.js",revision:"67c7d41114bf8bb5"},{url:"/_next/static/chunks/pages/articles/the-ultimate-guide-dc1d3708153f9e5d.js",revision:"dc1d3708153f9e5d"},{url:"/_next/static/chunks/pages/articles/the-ultimate-guide-to-car-insurance-coverage-0a39135c65a74958.js",revision:"0a39135c65a74958"},{url:"/_next/static/chunks/pages/articles/tips-for-smarter-health-insurance-73d83ed374862ef1.js",revision:"73d83ed374862ef1"},{url:"/_next/static/chunks/pages/articles/transitioning-to-the-workforce-f1ac04a9258970cb.js",revision:"f1ac04a9258970cb"},{url:"/_next/static/chunks/pages/articles/travel-insurance-basics-3aa6937a11d895e3.js",revision:"3aa6937a11d895e3"},{url:"/_next/static/chunks/pages/articles/travel-insurance-ea31fb1aa9242924.js",revision:"ea31fb1aa9242924"},{url:"/_next/static/chunks/pages/articles/understanding-commercial-insurance-9eb0fc97f154e80c.js",revision:"9eb0fc97f154e80c"},{url:"/_next/static/chunks/pages/articles/understanding-flood-insurance-29c93fb15f5e9d6b.js",revision:"29c93fb15f5e9d6b"},{url:"/_next/static/chunks/pages/articles/understanding-group-insurance-8b5145d0b14bd926.js",revision:"8b5145d0b14bd926"},{url:"/_next/static/chunks/pages/articles/understanding-insurance-deductibles-da73ac9cf9147000.js",revision:"da73ac9cf9147000"},{url:"/_next/static/chunks/pages/articles/unlocking-savings-6b2df5a0136d343e.js",revision:"6b2df5a0136d343e"},{url:"/_next/static/chunks/pages/articles/unlocking-the-benefits-of-life-insurance-riders-376db3debb4b85f8.js",revision:"376db3debb4b85f8"},{url:"/_next/static/chunks/pages/articles/unmasking-insurance-myths-6badab0e83adc115.js",revision:"6badab0e83adc115"},{url:"/_next/static/chunks/pages/articles/unveiling-health-insurance-hacks-292add9190294480.js",revision:"292add9190294480"},{url:"/_next/static/chunks/pages/articles/unveiling-insurance-policy-exclusions-4be3dd9bc293144a.js",revision:"4be3dd9bc293144a"},{url:"/_next/static/chunks/pages/articles/unveiling-the-claims-adjuster-s-role-9ba2cef234fb836f.js",revision:"9ba2cef234fb836f"},{url:"/_next/static/chunks/pages/articles/unveiling-the-mystery-59ce13a85eef3897.js",revision:"59ce13a85eef3897"},{url:"/_next/static/chunks/pages/articles/what-are-the-10-most-wanted-insurance-43f44aa9b515911d.js",revision:"43f44aa9b515911d"},{url:"/_next/static/chunks/pages/articles/your-comprehensive-insurance-529e3cb59844da77.js",revision:"529e3cb59844da77"},{url:"/_next/static/chunks/pages/index-4f30f83b335c9ee9.js",revision:"4f30f83b335c9ee9"},{url:"/_next/static/chunks/pages/page-offline-c803da1f605049d7.js",revision:"c803da1f605049d7"},{url:"/_next/static/chunks/pages/privacy-policy-dc6cfbb1eef7b3f0.js",revision:"dc6cfbb1eef7b3f0"},{url:"/_next/static/chunks/pages/protected-d0aab8db15b730fc.js",revision:"d0aab8db15b730fc"},{url:"/_next/static/chunks/pages/terms-and-conditions-36aadac51364685f.js",revision:"36aadac51364685f"},{url:"/_next/static/chunks/pages/tips/cheapest-car-insurance-companies-f5ebe6d816802dab.js",revision:"f5ebe6d816802dab"},{url:"/_next/static/chunks/pages/tips/hiring-business-insurance-professional-7942db6fd099e969.js",revision:"7942db6fd099e969"},{url:"/_next/static/chunks/pages/tips/how-do-car-insurances-work-8458176acb3100c1.js",revision:"8458176acb3100c1"},{url:"/_next/static/chunks/pages/tips/the-value-of-life-insurance-6177f0a4a71e86ab.js",revision:"6177f0a4a71e86ab"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c78c54525c382934.js",revision:"c78c54525c382934"},{url:"/_next/static/css/5efe1d93f926fa44.css",revision:"5efe1d93f926fa44"},{url:"/ads.txt",revision:"ff408644e7a4d5359b8dfe6f3e8f11f6"},{url:"/backgrounds/bg-insurances.jpeg",revision:"f798502df9a06738ba93d2ae6409b56a"},{url:"/backgrounds/bg-insurances.webp",revision:"d2b25285298f89414bd1e1efa793ea39"},{url:"/backgrounds/bg1-insurances.webp",revision:"6910ba37d3bcb7cedfd208d9366b5f1e"},{url:"/backgrounds/bg10-insurances.webp",revision:"9329959980336132329d700fd2670e4f"},{url:"/backgrounds/bg11-insurances.webp",revision:"3cb979a41efd38a0044f17245b992388"},{url:"/backgrounds/bg12-insurances.webp",revision:"4ac8a8f4452ef245ceb98992ef249ff9"},{url:"/backgrounds/bg13-insurances.webp",revision:"e74b2f34392df9f2c7a18028afbb5680"},{url:"/backgrounds/bg14-insurances.webp",revision:"d9034bb377803d4f6ee18873131f4b5a"},{url:"/backgrounds/bg15-insurances.webp",revision:"eda8c7a23935d642546d78d0ebd741dd"},{url:"/backgrounds/bg16-insurances.webp",revision:"0cb0e10b63e96c15b2b24ffa3a99fa49"},{url:"/backgrounds/bg17-insurances.webp",revision:"f892b49c8c450478442cd54e6851028d"},{url:"/backgrounds/bg18-insurances.webp",revision:"e06210bbc8e984ab7208e353f30d2d84"},{url:"/backgrounds/bg19-insurances.webp",revision:"8529c7648c0c7e91bcc74539721786c2"},{url:"/backgrounds/bg2-insurances.webp",revision:"1e5d77c8e3e1539fbbab031cd60ac66e"},{url:"/backgrounds/bg20-insurances.webp",revision:"4e1bd0641738cd60fde1c994ae9c273e"},{url:"/backgrounds/bg21-insurances.webp",revision:"cdbe879e994c3b3bcca87335ce2fc1bb"},{url:"/backgrounds/bg22-insurances.webp",revision:"04003f4e03a3a9048d5f4e811256fb57"},{url:"/backgrounds/bg23-insurances.webp",revision:"6261d02ef0bd4dd1dcd9b9f678e7ed64"},{url:"/backgrounds/bg24-insurances.webp",revision:"742c7bb7020a4f912cb0dde2659c1a47"},{url:"/backgrounds/bg25-insurances.webp",revision:"4b47aa2ada0472ae6ca2cf9b18986f76"},{url:"/backgrounds/bg26-insurances.webp",revision:"4b49b9e0a4ced8dfc7a40428410c5975"},{url:"/backgrounds/bg27-insurances.webp",revision:"20950f3efd8ecba47b03ee9c75df74b2"},{url:"/backgrounds/bg28-insurances.webp",revision:"2939bb2b8dde772ca38d0521b5eabcce"},{url:"/backgrounds/bg29-insurances.webp",revision:"681cc735acdadd6735641f0fc595a476"},{url:"/backgrounds/bg3-insurances.webp",revision:"0e0f23937eaa487ed4b4a9ff696bc66c"},{url:"/backgrounds/bg30-insurances.webp",revision:"c063c6bda9d5ff29fc0435fd7acde470"},{url:"/backgrounds/bg31-insurances.webp",revision:"4361079748b6aeb5ecef515451a44b74"},{url:"/backgrounds/bg32-insurances.webp",revision:"0854e7c1371cafd3c231de4d64249697"},{url:"/backgrounds/bg33-insurances.webp",revision:"978da6b6a691342cecfbe5c7dd0e9e5e"},{url:"/backgrounds/bg34-insurances.webp",revision:"0b066bd028ca328400f4f570b325e602"},{url:"/backgrounds/bg35-insurances.webp",revision:"8908199f0ac00d33e4ce94d53d9eb98b"},{url:"/backgrounds/bg36-insurances.webp",revision:"9cc0de75ffb7cae15dd8223e4d6d0e98"},{url:"/backgrounds/bg37-insurances.webp",revision:"c197621ea33c945918263651bc9ae4ec"},{url:"/backgrounds/bg38-insurances.webp",revision:"8fcf97dfe6748977b19e1d5bc6053da8"},{url:"/backgrounds/bg4-insurances.webp",revision:"02f193470b4a77deb3d2a066e7c00524"},{url:"/backgrounds/bg6-insurances.webp",revision:"82a58f224f51340403204b3357644847"},{url:"/backgrounds/bg7-insurances.webp",revision:"0a7fc3358c0bb4d6e271e6fe8ad2fd29"},{url:"/backgrounds/bg8-insurances.webp",revision:"46c8e35033748bef8791285a197ec22b"},{url:"/backgrounds/bg9-insurances.webp",revision:"742064688dac1905e4e6d23fbf56be54"},{url:"/cards/post-card1.webp",revision:"35a8fcd569a87753d4c3d218cc04b7ef"},{url:"/cards/post-card2.webp",revision:"acf67f648393e6be070539d85a9e6d8e"},{url:"/cards/post-card3.webp",revision:"aba1321b9fd6f4fd59663445fa1b3cd9"},{url:"/cards/post-card4.webp",revision:"9cb1e66338966d01b20b57f4cd946c6a"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/logo-about-insurances.webp",revision:"ee248c4bd92dac2ad0947720c2a9da44"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/logos/maskable.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/manifest.json",revision:"40dec9394b27060ea68b7a899cbfcbad"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"80f3cfad7293b4d9b46e4c82153b6878"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
