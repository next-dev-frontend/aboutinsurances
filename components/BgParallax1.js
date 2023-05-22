import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function BgParallax1() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-center flex items-center justify-center bg-fixed bg-cover bg-no-repeat w-full max-w-full h-96 md:h-screen">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="w-screen h-screen"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          <Image
            src="/backgrounds/bg1-insurances.webp"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0"></div>
      <div className="select-none sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
        <h1 className="sticky bg-color1 bg-opacity-80 p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
          Security doesn't come with luck. You have to be prepared.
        </h1>
        <div className="sticky bg-white h-1 flex flex-col w-full"></div>
      </div>
    </div>
  );
};

export default BgParallax1;