import React from 'react';
import Image from 'next/legacy/image';

function BgParallax2() {
  return (
    <div className="relative bg-center flex items-center justify-center bg-fixed bg-cover bg-no-repeat w-full h-96 md:h-screen">
      <div className="absolute inset-0 z-[-1]">
        <div className="relative w-full h-full">
          <Image
            src="/backgrounds/bg6-insurances.webp"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            loading="eager"
            as="image"
          />
        </div>
      </div>
      <div className="absolute inset-0"></div>
      <div className="select-none sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
        <h2 className="sticky bg-[#142039] bg-opacity-80 p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
          "Security is not the end goal. It's a starting point."
        </h2>
        <p className="text-3xl">- Wendy Kopp</p>
        <div className="sticky bg-white h-1 w-full"></div>
      </div>
    </div>
  );
}

export default BgParallax2;