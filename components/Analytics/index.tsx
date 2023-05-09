import React from 'react'
import Script from 'next/script'

const Analytics = () => (
  <>
    <Script
      strategy="beforeInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: location.pathname,
              });
            `,
      }}
    />
  </>
)

export default Analytics