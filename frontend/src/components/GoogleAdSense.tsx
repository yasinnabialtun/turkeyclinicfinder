'use client';

import Script from 'next/script';

export default function GoogleAdSense() {
  const adSenseId = 'pub-3511256754647083';

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
      onLoad={() => {
        // Initialize ads after script loads
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          (window as any).adsbygoogle.push({});
        }
      }}
    />
  );
}

