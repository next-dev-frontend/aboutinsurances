import React, { useState, useEffect } from 'react';

const Analytics = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                cookie_flags: 'SameSite=None;Secure',
                page_path: location.pathname,
              });
            `,
      }}
    />
  </>
);

const CookiePopup = ({ onClose }) => (
  <div className='z-10 bg-color1'>
    <h1>Este site usa cookies</h1>
    <p>Este site usa cookies para melhorar sua experiência de usuário. Ao continuar navegando no site, você concorda com o uso de cookies.</p>
    <button onClick={onClose}>Aceitar</button>
  </div>
);

const App = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(true);

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
    setShowCookiePopup(false);
  };

  return (
    <div>
      {showCookiePopup && <CookiePopup onClose={handleCloseCookiePopup} />}
      {!showCookiePopup && <Analytics />}
      {/* Renderiza o Analytics somente após o usuário aceitar os cookies */}
    </div>
  );
};

export default App;