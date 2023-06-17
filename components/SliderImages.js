import Image from "next/legacy/image";
import { useState, useEffect } from "react";

function BgParallax1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/backgrounds/bg1-insurances.webp",
    "/backgrounds/bg2-insurances.webp",
    "/backgrounds/bg3-insurances.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div id="default-carousel">
      <section className="relative bg-center bg-cover bg-fixed bg-no-repeat flex items-center justify-center w-screen h-96 md:h-1/2">
        <Image
          src={images[currentSlide]}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <span className="sr-only">Image Background</span>
        <div className="sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
          <h2 className="sticky p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
            {currentSlide === 0
              ? "Security is not the end goal. It's a starting point."
              : currentSlide === 1
                ? "Second slide"
                : "Third slide"}
          </h2>
          <p className="text-3xl">
            {currentSlide === 0
              ? "- Wendy Kopp"
              : currentSlide === 1
                ? "- Author2"
                : "- Author3"
            }
          </p>
          <div className="sticky bg-white h-1 w-full"></div>
        </div>
      </section>
    </div>
  );
}

export default BgParallax1;