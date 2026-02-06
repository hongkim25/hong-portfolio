'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Replace this with your actual ID
  const GA_ID = 'G-L95KDJTE4N'; 

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      
      // Manually send the new page path to GA
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_ID, {
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams, GA_ID]);

  return (
    <>
      {/* 1. Load the Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      
      {/* 2. Initialize GA */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* 3. Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vc24r1gqfp");
        `}
      </Script>
    </>
  );
}