import React, { useEffect } from 'react';

function BgParallax() {

  useEffect(() => {
    // Create an observer to check when the image is in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is in the viewport, add the lazy-loaded class to remove lazy loading behavior
          entry.target.classList.add('lazy-loaded');
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe the custom-img element
    const customImg = document.querySelector('.custom-img');
    observer.observe(customImg);

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img">
        <span className="sr-only">code html background</span>
        <div className="sticky p-4 h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
          <h2 data-anime="left" className="sticky p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
            "Security is not the end goal. It's a starting point."
          </h2>
          <p className="text-3xl">- Wendy Kopp</p>
        </div>
      </div>
    </div>
  );
}

export default BgParallax;