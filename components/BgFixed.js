import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";

function BgFixed() {
  const images = [
    "/backgrounds/bg1-insurances.webp",
    "/backgrounds/bg2-insurances.webp",
    "/backgrounds/bg3-insurances.webp",
    "/backgrounds/bg4-insurances.webp",
    "/backgrounds/bg6-insurances.webp"
  ];

  const [randomImage, setRandomImage] = useState("/backgrounds/bg1-insurances.webp");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <section id="bgFixed" className="select-none relative mx-auto bg-center items-center justify-center w-full max-w-full h-96">
      <Image
        src={randomImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
        as="image/webp"
      />
    </section >
  );
}

export default BgFixed;