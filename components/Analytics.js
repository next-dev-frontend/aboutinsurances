import React, { useState, useEffect } from 'react';
import ls from 'local-storage';

const CookiePopup = ({ onClose }) => (
  <>
    <div className='modal bg-color2 border-4 rounded border-color1'>
      <p className='text-center font-bold'>This site uses cookies</p>
      <br />
      <p>This website uses cookies to improve your user experience. By continuing to browse the site, you agree to the use of cookies.</p>
      <br />
      <div className="flex justify-center">
        <button className='bg-white border-2 rounded border-color1 text-lg p-4 cursor-pointer' onClick={onClose}>Accepted</button>
      </div>
      <span className='absolute top-0 right-0 mt-4 mr-4 text-xl cursor-pointer' onClick={onClose} >
        &times;
      </span>
    </div>
  </>
);

const App = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(!ls.get('cookieAccepted'));

  useEffect(() => {
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
      {showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
      {/* Renderiza o Analytics somente após o usuário aceitar os cookies */}
    </React.Fragment>
  );
};

export default App;