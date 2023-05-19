import React, { useState, useEffect, useRef } from 'react';
import ls from 'local-storage';

const CookiePopup = ({ onClose }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', onClose);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', onClose);
      }
    };
  }, [onClose]);

  return (
    <div className='fixed bottom-0 p-20 flex items-center justify-center z-50'>
      <div className='modal p-4 bg-color3 border-4 rounded border-color1'>
        <p className='text-center font-bold text-color1'>This site uses cookies</p>
        <br />
        <p className='text-white'>This website uses cookies to improve your user experience. By continuing to browse the site, you agree to the use of cookies.</p>
        <br />
        <div className="flex justify-center">
          <button ref={buttonRef} className='bg-white border-4 rounded border-color1 text-lg p-4 cursor-pointer'>Accepted</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isClient, setIsClient] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(!ls.get('cookieAccepted'));

  useEffect(() => {
    setIsClient(true);
    if (!showCookiePopup) {
      // Carrega o script do Analytics quando o usuário aceita os cookies
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCookiePopup]);

  const handleCloseCookiePopup = () => {
    ls.set('cookieAccepted', true);
    setShowCookiePopup(false);
  };

  return (
    <React.Fragment>
      {isClient && showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
      {/* Renderiza o Analytics somente após o usuário aceitar os cookies */}
    </React.Fragment>
  );
};

export default App;