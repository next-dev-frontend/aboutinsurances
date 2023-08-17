import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="z-50 fixed bg-color1 text-white border-4 border-color2 bottom-6 right-6 p-4 rounded-full shadow animate-blink-border"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
