import React, { useEffect, useRef } from 'react';

const CryptoWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://cryptorank.io/widget/marquee.js';
    script.async = true;
    script.onload = () => console.log('Widget script loaded successfully.');

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="cr-widget-marquee"
      ref={widgetRef}
      data-coins="bitcoin,ethereum,tether,ripple,cardano"
      data-theme="dark"
      data-show-symbol="true"
      data-show-icon="true"
      data-show-period-change="true"
      data-period-change="24H"
      data-api-url="https://api.cryptorank.io/v0"
    >
      <a href="https://cryptorank.io">Coins by Cryptorank</a>
    </div>
  );
};

export default CryptoWidget;
